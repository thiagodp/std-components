[![npm (tag)](https://img.shields.io/npm/v/std-components?color=green&label=NPM&style=for-the-badge)](https://github.com/thiagodp/std-components/releases)
[![License](https://img.shields.io/npm/l/std-components?style=for-the-badge&color=green)](https://github.com/thiagodp/std-components/blob/main/LICENSE)
<!-- [![npm](https://img.shields.io/npm/dt/std-components?style=for-the-badge&color=green)](https://www.npmjs.com/package/std-components) -->

# std-components

> 🧩 Standard HTML components as functions

- 🌳 Composable, typed, [tree shakeable](https://en.wikipedia.org/wiki/Tree_shaking) functions that create standard DOM components.
- ⚡ No build step required.
- 🚀 Speed up the development of dynamic, performant, component-based front-end applications with vanilla JS/TS.


## Install

```bash
pnpm i std-components
```

## Examples

### Simple blog post

```js
import { article, header, title, p } from 'std-components';

const post = article( { class: 'post' },
    header( {}, title( {}, 'First Post' ) ),
    p( {}, 'Hello, world!' )
);

document.body.append( post );
```

produces a `<body>` with:

```html
<article class="post">
    <header><title>First Post</title></header>
    <p>Hello, world!</p>
</article>
```

### Table rows

Let's say that a users table like this...

```html
...
<table>
    <thead>
        <tr>
            <th>User Name</th>
            <th>E-mail</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>
```

...need to be fulfilled with rows like this, from user objects:

```html
<tr>
    <td>John Doe</td>
    <td><a href="mailto:john@doe.com" >john@doe.com</a></td>
    <td><button class="btn btn-danger" onclick="removeUser" >Remove</button></td>
</tr>
```

Using `std-components`, you can create these rows like this:

```ts
import { tr, td, a, button, fragment } from 'std-components';

function removeUser() { /*...*/ }

function userRow( user: { name: string, email: string } ): HTMLTableRowElement {
    return tr( {},
        td( {}, user.name ),
        td( {}, a( { href: `mailto: ${user.email}` }, user.email ),
        td( {},
            button( {
                class: 'btn btn-danger',
                events: { click: removeUser }
            }, 'Remove' )
        )
    );
}

const users = await getUsers();
const rows = users.map( u => userRow( u ) );
document.querySelector( 'tbody' ).append( fragment( ...rows ) ); // Fragment avoids DOM reflow
```

👉 The example above **without using** `std-components` would be:

```ts
function removeUser() { /*...*/ }

function userRow( user: { name: string, email: string } ): HTMLTableRowElement {
    const tdName = document.createElement( 'td' );
    tdName.textContent = name;

    const emailAnchor = document.createElement( 'a' );
    emailAnchor.href = `mailto: ${user.email}`;
    emailAnchor.textContent = user.email;

    const tdEmail = document.createElement( 'td' );
    tdEmail.append( emailAnchor );

    const removeButton = document.createElement( 'button' );
    removeButton.classList.add( 'btn btn-danger' );
    removeButton.textContent = 'Remove';
    removeButton.addEventListener( 'click', removeUser );

    const tdActions = document.createElement( 'td' );
    tdActions.append( removeButton );

    const tr = document.createElement( 'tr' );
    tr.append( tdName, tdEmail, tdActions );
    return tr;
}

const users = await getUsers();
const rows = users.map( u => userRow( u ) );
const fragment = document.createDocumentFragment(); // Avoids DOM reflow
fragment.append( ...rows );
document.querySelector( 'tbody' ).append( fragment );
```


## Reactivity

If you need reactivity, use a library such as [@preact/signals-core](https://www.npmjs.com/package/@preact/signals-core), [S.js](https://github.com/adamhaile/S) or [usignal](https://github.com/WebReflection/usignal), that are not tied to a UI library/framework.

Example with `@preact/signals-core`:

```js
import { button } from 'std-components';
import { signal, effect } from '@preact/signals-core';

// count starts at 0
const count = signal( 0 );

// When clicked, the button increments the count
const btn = button( { events: { click: () => count.value++ } } );

// When count changes, generates an effect that updates the button text
effect( () => {
    btn.textContent = `Clicked ${count.value} times`
} );

document.body.append( btn );
```


## API

* The API covers almost all [standard DOM elements ](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements), except deprecated ones.
* The functions have **the same name** as the HTML tags (except for `var_`, since `var` is a reserved word in JavaScript).
* Just import the desired functions and use them like in the example above.

Basic overall syntax:

```typescript
function tag( props: {[key: string]: any} = {}, ...children: Array<string|Node|HTMLElement> ): HTMLElement
```

where:
- `tag` is the desired tag (function), like `button`;
- `props` (optional) is an object with [DOM attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes) you want to define in the tag;
  - Example: `div( { class: 'card' } )`
- `children` (optional) are all child elements, separated by comma.
  - Example:
    ```js
    article( { class: 'post' },
      header( {},
        title( {}, 'First Post' )
      ),
      p( {}, 'Hello, world!' )
    )
    ```

### Special properties

- `events` is an object that allows to define [standard DOM events](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events) for the element.
  - Example:
    ```js
    button( { events: { click: () => alert('Hi') } }, 'Say Hi' )
    ```
- `is` is a [special property](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/is) that makes a standard HTML element behave like a defined customized built-in element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/is) for more.


### Extra functions
- `fragment( ...children: Array<string|Node|HTMLElement> ): DocumentFragment` creates a [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment).
- `text( value: string = '' ): Text` creates a [text node](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode).
- `component< T extends HTMLElement >( tag: string, props: {[key: string]: any} = {}, ...children: Array<string|Node|HTMLElement> ): T` creates any DOM component. You probably won't need to use it.


## License

[MIT](LICENSE) ©️ [Thiago Delgado Pinto](https://github.com/thiagodp)
