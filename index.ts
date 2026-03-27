export type Props = {[key: string]: any};
type Children = Array<string|Node|HTMLElement>;

/**
 * Creates a component.
 *
 * @param tag Tag name
 * @param props Component properties. Special properties are:
 *      - `is`: defines a string with the name of a custom, user-defined tag. Example: `component( 'my-tag', { 'is': 'my-tag' } )`
 *      - `events`: defines an object that can have events like 'click', 'keydown', etc. Example: `component( 'button', { events: { click: () => alert( 'hi' ) } } )`
 * @param children Child elements
 * @returns the component
 */
export function component< T extends HTMLElement >( tag: string, props: Props = {}, ...children: Children ): T {
    let el;
    if ( typeof props === 'object' ) { // props is defined

        let creationOptions = undefined;
        if ( typeof props[ 'is' ]  === 'string' ) {
            creationOptions = { is: props[ 'is' ] };
        }
        el = document.createElement( tag, creationOptions ) as T;

        for ( const p in props || {} ) {
            if ( p === 'is' ) {
                continue;
            }
            const value = props[ p ];
            if ( p === 'events' ) {
                if ( typeof value === 'object' ) {
                    for ( const event in value ) {
                        const fn = value[ event ];
                        if ( typeof fn === 'function' ) {
                            el.addEventListener( event, fn );
                        }
                    }
                }
                continue; // So that it does not set 'events' as an attribute
            }
            el.setAttribute( p, value );
        }

    } else {
        el = document.createElement( tag ) as T;
    }
    el.append( ...children );
    return el;
}


export function fragment( ...children: Children ): DocumentFragment {
    const el = document.createDocumentFragment();
    el.append( ...children );
    return el;
}


export function text( value: string = '' ): Text {
    return document.createTextNode( value );
}


//
// Structure tags
//

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/html */
export function html( props: Props = {}, ...children: Children ): HTMLHtmlElement {
    return component( 'html', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/head */
export function head( props: Props = {}, ...children: Children ): HTMLHeadElement {
    return component( 'head', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/body */
export function body( props: Props = {}, ...children: Children ): HTMLBodyElement {
    return component( 'body', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/header */
export function header( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'header', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/main */
export function main( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'main', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/footer */
export function footer( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'footer', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/section */
export function section( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'section', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/article */
export function article( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'article', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/aside */
export function aside( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'aside', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav */
export function nav( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'nav', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/hgroup */
export function hgroup( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'hgroup', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h1 */
export function h1( props: Props = {}, ...children: Children ): HTMLHeadingElement {
    return component( 'h1', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h2 */
export function h2( props: Props = {}, ...children: Children ): HTMLHeadingElement {
    return component( 'h2', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h3 */
export function h3( props: Props = {}, ...children: Children ): HTMLHeadingElement {
    return component( 'h3', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h4 */
export function h4( props: Props = {}, ...children: Children ): HTMLHeadingElement {
    return component( 'h4', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h5 */
export function h5( props: Props = {}, ...children: Children ): HTMLHeadingElement {
    return component( 'h5', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h6 */
export function h6( props: Props = {}, ...children: Children ): HTMLHeadingElement {
    return component( 'h6', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div */
export function div( props: Props = {}, ...children: Children ): HTMLDivElement {
    return component( 'div', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span */
export function span( props: Props = {}, ...children: Children ): HTMLSpanElement {
    return component( 'span', props, ...children );
}

//
// Interactivity
//

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/menu */
export function menu( props: Props = {}, ...children: Children ): HTMLMenuElement {
    return component( 'menu', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/summary */
export function summary( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'summary', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details */
export function details( props: Props = {}, ...children: Children ): HTMLDetailsElement {
    return component( 'details', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog */
export function dialog( props: Props = {}, ...children: Children ): HTMLDialogElement {
    return component( 'dialog', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/search */
export function search( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'search', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/canvas */
export function canvas( props: Props = {}, ...children: Children ): HTMLCanvasElement {
    return component( 'canvas', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/svg */
export function svg( props: Props = {}, ...children: Children ): HTMLOrSVGElement {
    return component( 'svg', props, ...children );
}

//
// Table tags
//

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table */
export function table( props: Props = {}, ...children: Children ): HTMLTableElement {
    return component( 'table', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/thead */
export function thead( props: Props = {}, ...children: Children ): HTMLTableSectionElement {
    return component( 'thead', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tbody */
export function tbody( props: Props = {}, ...children: Children ): HTMLTableSectionElement {
    return component( 'tbody', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tfoot */
export function tfoot( props: Props = {}, ...children: Children ): HTMLTableSectionElement {
    return component( 'tfoot', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/th */
export function th( props: Props = {}, ...children: Children ): HTMLTableCellElement {
    return component( 'th', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tr */
export function tr( props: Props = {}, ...children: Children ): HTMLTableRowElement {
    return component( 'tr', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/td */
export function td( props: Props = {}, ...children: Children ): HTMLTableCellElement {
    return component( 'td', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/col */
export function col( props: Props = {}, ...children: Children ): HTMLTableColElement {
    return component( 'col', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/colgroup */
export function colgroup( props: Props = {}, ...children: Children ): HTMLTableSectionElement {
    return component( 'colgroup', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/caption */
export function caption( props: Props = {}, ...children: Children ): HTMLTableCaptionElement {
    return component( 'caption', props, ...children );
}

//
// Metadata and script tags
//

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title */
export function title( props: Props = {}, ...children: Children ): HTMLTitleElement {
    return component( 'title', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link */
export function link( props: Props = {}, ...children: Children ): HTMLLinkElement {
    return component( 'link', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta */
export function meta( props: Props = {}, ...children: Children ): HTMLMetaElement {
    return component( 'meta', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/style */
export function style( props: Props = {}, ...children: Children ): HTMLStyleElement {
    return component( 'style', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script */
export function script( props: Props = {}, ...children: Children ): HTMLScriptElement {
    return component( 'script', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/noscript */
export function noscript( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'noscript', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/template */
export function template( props: Props = {}, ...children: Children ): HTMLTemplateElement {
    return component( 'template', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/slot */
export function slot( props: Props = {}, ...children: Children ): HTMLSlotElement {
    return component( 'slot', props, ...children );
}

//
// Multimedia
//

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a */
export function a( props: Props = {}, ...children: Children ): HTMLAnchorElement {
    return component( 'a', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/base */
export function base( props: Props = {}, ...children: Children ): HTMLBaseElement {
    return component( 'base', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img */
export function img( props: Props = {}, ...children: Children ): HTMLImageElement {
    return component( 'img', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture */
export function picture( props: Props = {}, ...children: Children ): HTMLPictureElement {
    return component( 'picture', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/figure */
export function figure( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'figure', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/figcaption */
export function figcaption( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'figcaption', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/object */
export function object( props: Props = {}, ...children: Children ): HTMLObjectElement {
    return component( 'object', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio */
export function audio( props: Props = {}, ...children: Children ): HTMLAudioElement {
    return component( 'audio', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video */
export function video( props: Props = {}, ...children: Children ): HTMLVideoElement {
    return component( 'video', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/track */
export function track( props: Props = {}, ...children: Children ): HTMLTrackElement {
    return component( 'track', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe */
export function iframe( props: Props = {}, ...children: Children ): HTMLIFrameElement {
    return component( 'iframe', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/source */
export function source( props: Props = {}, ...children: Children ): HTMLSourceElement {
    return component( 'source', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/embed */
export function embed( props: Props = {}, ...children: Children ): HTMLEmbedElement {
    return component( 'embed', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/map */
export function map( props: Props = {}, ...children: Children ): HTMLMapElement {
    return component( 'map', props, ...children );
}

//
// List tags
//

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul */
export function ul( props: Props = {}, ...children: Children ): HTMLUListElement {
    return component( 'ul', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ol */
export function ol( props: Props = {}, ...children: Children ): HTMLOListElement {
    return component( 'ol', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li */
export function li( props: Props = {}, ...children: Children ): HTMLLIElement {
    return component( 'li', props, ...children );
}

// Definition list
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl */
export function dl( props: Props = {}, ...children: Children ): HTMLDListElement {
    return component( 'dl', props, ...children );
}

// Definition term
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dt */
export function dt( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'dt', props, ...children );
}

// Definition description
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dd */
export function dd( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'dd', props, ...children );
}

//
// Form and input tags
//

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form */
export function form( props: Props = {}, ...children: Children ): HTMLFormElement {
    return component( 'form', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset */
export function fieldset( props: Props = {}, ...children: Children ): HTMLFieldSetElement {
    return component( 'fieldset', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/legend */
export function legend( props: Props = {}, ...children: Children ): HTMLLegendElement {
    return component( 'legend', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label */
export function label( props: Props = {}, ...children: Children ): HTMLLabelElement {
    return component( 'label', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input */
export function input( props: Props = {}, ...children: Children ): HTMLInputElement {
    return component( 'input', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button */
export function button( props: Props = {}, ...children: Children ): HTMLButtonElement {
    return component( 'button', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select */
export function select( props: Props = {}, ...children: Children ): HTMLSelectElement {
    return component( 'select', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist */
export function datalist( props: Props = {}, ...children: Children ): HTMLDataListElement {
    return component( 'datalist', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/data */
export function data( props: Props = {}, ...children: Children ): HTMLDataElement {
    return component( 'data', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/optgroup */
export function optgroup( props: Props = {}, ...children: Children ): HTMLOptGroupElement {
    return component( 'optgroup', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option */
export function option( props: Props = {}, ...children: Children ): HTMLOptionElement {
    return component( 'option', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea */
export function textarea( props: Props = {}, ...children: Children ): HTMLTextAreaElement {
    return component( 'textarea', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/output */
export function output( props: Props = {}, ...children: Children ): HTMLOutputElement {
    return component( 'output', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/progress */
export function progress( props: Props = {}, ...children: Children ): HTMLProgressElement {
    return component( 'progress', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meter */
export function meter( props: Props = {}, ...children: Children ): HTMLMeterElement {
    return component( 'meter', props, ...children );
}

//
// Text tags
//

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p */
export function p( props: Props = {}, ...children: Children ): HTMLParagraphElement {
    return component( 'p', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/br */
export function br( props: Props = {} ): HTMLBRElement {
    return component( 'br', props );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/wbr */
export function wbr( props: Props = {} ): HTMLElement {
    return component( 'wbr', props );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/hr */
export function hr( props: Props = {} ): HTMLHRElement {
    return component( 'hr', props );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/code */
export function code( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'code', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/var */
export function var_( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'var', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/samp */
export function samp( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'samp', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/kdb */
export function kdb( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'kdb', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/pre */
export function pre( props: Props = {}, ...children: Children ): HTMLPreElement {
    return component( 'pre', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote */
export function blockquote( props: Props = {}, ...children: Children ): HTMLQuoteElement {
    return component( 'blockquote', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q */
export function q( props: Props = {}, ...children: Children ): HTMLQuoteElement {
    return component( 'q', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/cite */
export function cite( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'cite', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/abbr */
export function abbr( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'abbr', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dfn */
export function dfn( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'dfn', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/time */
export function time( props: Props = {}, ...children: Children ): HTMLTimeElement {
    return component( 'time', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/address */
export function address( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'address', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/sub */
export function sub( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'sub', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/sup */
export function sup( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'sup', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ruby */
export function ruby( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'ruby', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/rt */
export function rt( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'rt', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/rp */
export function rp( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'rp', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/bdo */
export function bdo( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'bdo', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/bdi */
export function bdi( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'bdi', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/em */
export function em( props: Props = {} ): HTMLElement {
    return component( 'em', props );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/strong */
export function strong( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'strong', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/mark */
export function mark( props: Props = {} ): HTMLElement {
    return component( 'mark', props );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/i */
export function i( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'i', props, ...children );
}

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/b */
export function b( props: Props = {}, ...children: Children ): HTMLElement {
    return component( 'b', props, ...children );
}