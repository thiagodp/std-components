import { it, expect, beforeAll, afterAll } from 'vitest';
import { __setDocument, button } from '../index';
import { Window, Event } from 'happy-dom';

beforeAll( () => {
    const window = new Window();
    __setDocument( window.document );
} );

afterAll( () => {
    __setDocument();
} );


it( 'can add a listener to an event', () => {

    let i = 0;
    const fn = () => { i++ };
    const btn = button( { events: { click: fn } } );

    btn.click();
    btn.click();
    expect( i ).toBe( 2 );
} );


it( 'can add an array of listeners to an event', () => {

    let i = 0;
    const fn1 = () => { i++ };
    const fn2 = () => { i += 5; };
    const btn = button( { events: { click: [ fn1, fn2 ] } } );

    btn.click();
    expect( i ).toBe( 6 );
} );


it( 'can add options to a listener event', () => {

    let i = 0;
    const fn = () => { i++ };
    const btn = button( { events: { click: { listener: fn, options: { once: true } } } } );

    btn.click();
    btn.click();

    expect( i ).toBe( 1 );
} );


it( 'can add an array of listeners or objects with options to an event', () => {

    let i = 0;
    const fn1 = () => { i++ };
    const fn2 = () => { i += 5; };
    const btn = button( { events: { click: [ fn1, { listener: fn2, options: { once: true } } ] } } );

    btn.click(); // 1 + 5
    btn.click(); // 1

    expect( i ).toBe( 7 );
} );


it( 'can set a custom event', () => {

    let i = 0;
    const fn = () => { i++ };
    const btn = button( { events: { myCustomEvent: fn } } );

    const ev: Event = new Event( 'myCustomEvent' );
    btn.dispatchEvent( ev as any );

    expect( i ).toBe( 1 );
} );


it( 'can set a dataset property', () => {
    const btn = button( { 'data-foo': 'bar' } );
    expect( btn.dataset.foo ).toBe( 'bar' );
} );


it( 'can set an id', () => {
    const btn = button( { id: 'b' } );
    expect( btn.id ).toBe( 'b' );
} );