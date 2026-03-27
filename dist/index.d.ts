//#region index.d.ts
type Props = {
  [key: string]: any;
};
type Children = Array<string | Node | HTMLElement>;
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
declare function component<T extends HTMLElement>(tag: string, props?: Props, ...children: Children): T;
declare function fragment(...children: Children): DocumentFragment;
declare function text(value?: string): Text;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/html */
declare function html(props?: Props, ...children: Children): HTMLHtmlElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/head */
declare function head(props?: Props, ...children: Children): HTMLHeadElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/body */
declare function body(props?: Props, ...children: Children): HTMLBodyElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/header */
declare function header(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/main */
declare function main(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/footer */
declare function footer(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/section */
declare function section(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/article */
declare function article(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/aside */
declare function aside(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav */
declare function nav(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/hgroup */
declare function hgroup(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h1 */
declare function h1(props?: Props, ...children: Children): HTMLHeadingElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h2 */
declare function h2(props?: Props, ...children: Children): HTMLHeadingElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h3 */
declare function h3(props?: Props, ...children: Children): HTMLHeadingElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h4 */
declare function h4(props?: Props, ...children: Children): HTMLHeadingElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h5 */
declare function h5(props?: Props, ...children: Children): HTMLHeadingElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h6 */
declare function h6(props?: Props, ...children: Children): HTMLHeadingElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div */
declare function div(props?: Props, ...children: Children): HTMLDivElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span */
declare function span(props?: Props, ...children: Children): HTMLSpanElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/menu */
declare function menu(props?: Props, ...children: Children): HTMLMenuElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/summary */
declare function summary(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details */
declare function details(props?: Props, ...children: Children): HTMLDetailsElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog */
declare function dialog(props?: Props, ...children: Children): HTMLDialogElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/search */
declare function search(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/canvas */
declare function canvas(props?: Props, ...children: Children): HTMLCanvasElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/svg */
declare function svg(props?: Props, ...children: Children): HTMLOrSVGElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table */
declare function table(props?: Props, ...children: Children): HTMLTableElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/thead */
declare function thead(props?: Props, ...children: Children): HTMLTableSectionElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tbody */
declare function tbody(props?: Props, ...children: Children): HTMLTableSectionElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tfoot */
declare function tfoot(props?: Props, ...children: Children): HTMLTableSectionElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/th */
declare function th(props?: Props, ...children: Children): HTMLTableCellElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tr */
declare function tr(props?: Props, ...children: Children): HTMLTableRowElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/td */
declare function td(props?: Props, ...children: Children): HTMLTableCellElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/col */
declare function col(props?: Props, ...children: Children): HTMLTableColElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/colgroup */
declare function colgroup(props?: Props, ...children: Children): HTMLTableSectionElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/caption */
declare function caption(props?: Props, ...children: Children): HTMLTableCaptionElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title */
declare function title(props?: Props, ...children: Children): HTMLTitleElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link */
declare function link(props?: Props, ...children: Children): HTMLLinkElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta */
declare function meta(props?: Props, ...children: Children): HTMLMetaElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/style */
declare function style(props?: Props, ...children: Children): HTMLStyleElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script */
declare function script(props?: Props, ...children: Children): HTMLScriptElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/noscript */
declare function noscript(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/template */
declare function template(props?: Props, ...children: Children): HTMLTemplateElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/slot */
declare function slot(props?: Props, ...children: Children): HTMLSlotElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a */
declare function a(props?: Props, ...children: Children): HTMLAnchorElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/base */
declare function base(props?: Props, ...children: Children): HTMLBaseElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img */
declare function img(props?: Props, ...children: Children): HTMLImageElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture */
declare function picture(props?: Props, ...children: Children): HTMLPictureElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/figure */
declare function figure(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/figcaption */
declare function figcaption(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/object */
declare function object(props?: Props, ...children: Children): HTMLObjectElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio */
declare function audio(props?: Props, ...children: Children): HTMLAudioElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video */
declare function video(props?: Props, ...children: Children): HTMLVideoElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/track */
declare function track(props?: Props, ...children: Children): HTMLTrackElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe */
declare function iframe(props?: Props, ...children: Children): HTMLIFrameElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/source */
declare function source(props?: Props, ...children: Children): HTMLSourceElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/embed */
declare function embed(props?: Props, ...children: Children): HTMLEmbedElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/map */
declare function map(props?: Props, ...children: Children): HTMLMapElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul */
declare function ul(props?: Props, ...children: Children): HTMLUListElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ol */
declare function ol(props?: Props, ...children: Children): HTMLOListElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li */
declare function li(props?: Props, ...children: Children): HTMLLIElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl */
declare function dl(props?: Props, ...children: Children): HTMLDListElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dt */
declare function dt(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dd */
declare function dd(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form */
declare function form(props?: Props, ...children: Children): HTMLFormElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset */
declare function fieldset(props?: Props, ...children: Children): HTMLFieldSetElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/legend */
declare function legend(props?: Props, ...children: Children): HTMLLegendElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label */
declare function label(props?: Props, ...children: Children): HTMLLabelElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input */
declare function input(props?: Props, ...children: Children): HTMLInputElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button */
declare function button(props?: Props, ...children: Children): HTMLButtonElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select */
declare function select(props?: Props, ...children: Children): HTMLSelectElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist */
declare function datalist(props?: Props, ...children: Children): HTMLDataListElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/data */
declare function data(props?: Props, ...children: Children): HTMLDataElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/optgroup */
declare function optgroup(props?: Props, ...children: Children): HTMLOptGroupElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option */
declare function option(props?: Props, ...children: Children): HTMLOptionElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea */
declare function textarea(props?: Props, ...children: Children): HTMLTextAreaElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/output */
declare function output(props?: Props, ...children: Children): HTMLOutputElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/progress */
declare function progress(props?: Props, ...children: Children): HTMLProgressElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meter */
declare function meter(props?: Props, ...children: Children): HTMLMeterElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p */
declare function p(props?: Props, ...children: Children): HTMLParagraphElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/br */
declare function br(props?: Props): HTMLBRElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/wbr */
declare function wbr(props?: Props): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/hr */
declare function hr(props?: Props): HTMLHRElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/code */
declare function code(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/var */
declare function var_(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/samp */
declare function samp(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/kdb */
declare function kdb(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/pre */
declare function pre(props?: Props, ...children: Children): HTMLPreElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote */
declare function blockquote(props?: Props, ...children: Children): HTMLQuoteElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q */
declare function q(props?: Props, ...children: Children): HTMLQuoteElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/cite */
declare function cite(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/abbr */
declare function abbr(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dfn */
declare function dfn(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/time */
declare function time(props?: Props, ...children: Children): HTMLTimeElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/address */
declare function address(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/sub */
declare function sub(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/sup */
declare function sup(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ruby */
declare function ruby(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/rt */
declare function rt(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/rp */
declare function rp(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/bdo */
declare function bdo(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/bdi */
declare function bdi(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/em */
declare function em(props?: Props): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/strong */
declare function strong(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/mark */
declare function mark(props?: Props): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/i */
declare function i(props?: Props, ...children: Children): HTMLElement;
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/b */
declare function b(props?: Props, ...children: Children): HTMLElement;
//#endregion
export { Props, a, abbr, address, article, aside, audio, b, base, bdi, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, component, data, datalist, dd, details, dfn, dialog, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, fragment, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html, i, iframe, img, input, kdb, label, legend, li, link, main, map, mark, menu, meta, meter, nav, noscript, object, ol, optgroup, option, output, p, picture, pre, progress, q, rp, rt, ruby, samp, script, search, section, select, slot, source, span, strong, style, sub, summary, sup, svg, table, tbody, td, template, text, textarea, tfoot, th, thead, time, title, tr, track, ul, var_, video, wbr };