[![npm (tag)](https://img.shields.io/npm/v/std-components?color=green&label=NPM&style=for-the-badge)](https://github.com/thiagodp/std-components/releases)
[![License](https://img.shields.io/npm/l/std-components?style=for-the-badge&color=green)](https://github.com/thiagodp/std-components/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/dt/std-components?style=for-the-badge&color=green)](https://www.npmjs.com/package/std-components)

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

👉 See [/examples](examples) for full examples.

### Blog post

```js
import { article, header, h2, p } from 'std-components';

const post = article( { class: 'post-card' },
    header( { class: 'post-header' },
        h2( { class: 'post-title' }, 'First Post' )
    ),
    div( { class: 'post-content' },
        p( {}, 'Hello, world!' )
    )
);

document.body.append( post );
```

produces a `<body>` with:

```html
<article class="post-card">
    <header class="post-header">
        <h2 class="post-title">First Post</h2>
    </header>
    <div class="post-content">
        <p>Hello, world!</p>
    </div>
</article>
```

### To-do-list

Suppose an HTML like this:

```html
<h1>To-Do-List</h1>
<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Description</th>
            <th>Done</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>
```

Creating rows can be like this:

```js
import { tr, td, fragment } from 'std-components';

const toDoList = [
    { id: 1, description: 'Buy beer', done: false },
    { id: 2, description: 'Buy milk', done: true },
    { id: 3, description: 'Take the dog for a walk', done: false },
    // ...
];

function createRow( { id, description, done } ) {
    return tr( {}
        td( {}, id ),
        td( {}, description ),
        td( {}, done ? 'Yes' : 'No' ),
    );
}

const rows = toDoList.map( createRow );
document.querySelector( 'tbody' ).append( fragment( ...rows ) ); // Avoid DOM reflow
```

That will produce rows such as this:

```html
<tr>
    <td>1</td>
    <td>Buy beer</td>
    <td>No</td>
</tr>
```

Easy-peasy, right? 😉

Now suppose that you need to toggle the "Done" value when the user clicks on "Yes" or "No".
Just define a `click` event in the corresponding `td` element, through the special property `events` :

```
td( { events: { click: toggleDone } }, done ? 'Yes' : 'No' ),
```

where `toggleDone` can be a normal function that updates the To-Do object and the DOM:

```js
function toggleDone( event ) {
    const td = event.target;
    const toDo = toDoList[ td.parentElement.sectionRowIndex ];
    toDo.done = ! toDo.done; // Toggle
    td.textContent = toDo.done ? 'Yes' : 'No'; // Refresh the row value
}
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
  - Examples:
    ```js
    // Single event, single listener function
    button( { events: { click: () => alert('Hi') } }, 'Say Hi' );

    // Multiple events, single function in each
    input( { events: {
        focus: event => console.log( `Enter ${event.target}` ),
        blur: event => console.log( `Left ${event.target}` )
    } }  );

    // Single event, single function with options - same options as addEventListener's
    button( { events: {
        click: { listener: () => alert('Hi'), options: { once: true } }
    } }, 'Say Hi' );

    // Single event, multiple functions
    button( { events: {
        click: [ ()=>alert('Hi'), ()=>alert('Hi again') ]
    } }, 'Say Hi' );

    // Multiple events, multiple functions with or without options - same options as addEventListener's
    button( { events: {
        click: [
                () => alert('Hi'), // First listener
                { listener: ()=>alert('Hi again'), options: { once: true } } // Second listener
        ],
        mouseover: (event) => console.log( 'Mouse is over', event.target )
    } }, 'Say Hi' );
    ```
- `is` is a [special property](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/is) that makes a standard HTML element behave like a defined customized built-in element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/is) for more.


### Extra functions
- `fragment( ...children: Array<string|Node|HTMLElement> ): DocumentFragment` creates a [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment). It's very useful to avoid DOM reflow.
  - Example:
    ```js
    const users = await getUsers();
    const tableRows = users.map( u => userToTableRow( u ) );
    // All table rows will be rendered together, only once:
    document.querySelector( 'tbody' ).append( fragment( ...tableRows ) );
    ```
- `text( value: string = '' ): Text` creates a [text node](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode). Usually not needed, since other functions accept a string as children.
  - Example:
    ```js
    const btn = button( {}, text( 'Ok' ) ); // Same as button( {}, 'Ok' )
    ```
- `component< T extends HTMLElement >( tag: string, props: {[key: string]: any} = {}, ...children: Array<string|Node|HTMLElement> ): T` creates any DOM component. You probably won't need to use it.
  - Example:
    ```js
    const btn = component( 'button', {}, 'Ok' ); // Same as button( {}, 'Ok' )
    ```

## License

[MIT](LICENSE) ©️ [Thiago Delgado Pinto](https://github.com/thiagodp)
