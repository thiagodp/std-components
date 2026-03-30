import { button } from 'https://unpkg.com/std-components/dist/index.js';
import { signal, effect } from 'https://unpkg.com/@preact/signals-core/dist/signals-core.mjs';

// count starts at 0
const count = signal( 0 );

// When clicked, the button increments the count
const btn = button( { events: { click: () => count.value++ } } );

// When count changes, generates an effect that updates the button text
effect( () => {
    btn.textContent = `Clicked ${count.value} times`
} );

document.body.append( btn );