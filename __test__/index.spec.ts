import { it, expect, beforeAll, afterAll } from 'vitest';
import { __setDocument, button } from '../index';
import { Window } from 'happy-dom';

beforeAll( () => {
    const window = new Window();
    __setDocument( window.document );
} );

afterAll( () => {
    __setDocument();
} );


it( 'can add a listener in an event', () => {

    let i = 0;
    const fn = () => { i++ };
    const btn = button( { events: { click: fn } } );

    btn.click();
    btn.click();
    expect( i ).toBe( 2 );
} );


it( 'can add an array of listeners in an event', () => {

    let i = 0;
    const fn1 = () => { i++ };
    const fn2 = () => { i += 5; };
    const btn = button( { events: { click: [ fn1, fn2 ] } } );

    btn.click();
    expect( i ).toBe( 6 );
} );


it( 'can add options in a listener event', () => {

    let i = 0;
    const fn = () => { i++ };
    const btn = button( { events: { click: { listener: fn, options: { once: true } } } } );

    btn.click();
    btn.click();

    expect( i ).toBe( 1 );
} );


it( 'can add an array of listeners or objects with options in an event', () => {

    let i = 0;
    const fn1 = () => { i++ };
    const fn2 = () => { i += 5; };
    const btn = button( { events: { click: [ fn1, { listener: fn2, options: { once: true } } ] } } );

    btn.click(); // 1 + 5
    btn.click(); // 1

    expect( i ).toBe( 7 );
} );
