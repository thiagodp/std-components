//#region index.ts
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
function component(tag, props = {}, ...children) {
	let el;
	if (typeof props === "object") {
		let creationOptions = void 0;
		if (typeof props["is"] === "string") creationOptions = { is: props["is"] };
		el = document.createElement(tag, creationOptions);
		for (const p in props || {}) {
			if (p === "is") continue;
			const value = props[p];
			if (p === "events") {
				if (typeof value === "object") for (const event in value) {
					const fn = value[event];
					if (typeof fn === "function") el.addEventListener(event, fn);
				}
				continue;
			}
			el.setAttribute(p, value);
		}
	} else el = document.createElement(tag);
	el.append(...children);
	return el;
}
function fragment(...children) {
	const el = document.createDocumentFragment();
	el.append(...children);
	return el;
}
function text(value = "") {
	return document.createTextNode(value);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/html */
function html(props = {}, ...children) {
	return component("html", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/head */
function head(props = {}, ...children) {
	return component("head", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/body */
function body(props = {}, ...children) {
	return component("body", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/header */
function header(props = {}, ...children) {
	return component("header", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/main */
function main(props = {}, ...children) {
	return component("main", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/footer */
function footer(props = {}, ...children) {
	return component("footer", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/section */
function section(props = {}, ...children) {
	return component("section", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/article */
function article(props = {}, ...children) {
	return component("article", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/aside */
function aside(props = {}, ...children) {
	return component("aside", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav */
function nav(props = {}, ...children) {
	return component("nav", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/hgroup */
function hgroup(props = {}, ...children) {
	return component("hgroup", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h1 */
function h1(props = {}, ...children) {
	return component("h1", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h2 */
function h2(props = {}, ...children) {
	return component("h2", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h3 */
function h3(props = {}, ...children) {
	return component("h3", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h4 */
function h4(props = {}, ...children) {
	return component("h4", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h5 */
function h5(props = {}, ...children) {
	return component("h5", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/h6 */
function h6(props = {}, ...children) {
	return component("h6", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div */
function div(props = {}, ...children) {
	return component("div", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span */
function span(props = {}, ...children) {
	return component("span", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/menu */
function menu(props = {}, ...children) {
	return component("menu", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/summary */
function summary(props = {}, ...children) {
	return component("summary", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details */
function details(props = {}, ...children) {
	return component("details", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog */
function dialog(props = {}, ...children) {
	return component("dialog", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/search */
function search(props = {}, ...children) {
	return component("search", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/canvas */
function canvas(props = {}, ...children) {
	return component("canvas", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/svg */
function svg(props = {}, ...children) {
	return component("svg", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table */
function table(props = {}, ...children) {
	return component("table", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/thead */
function thead(props = {}, ...children) {
	return component("thead", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tbody */
function tbody(props = {}, ...children) {
	return component("tbody", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tfoot */
function tfoot(props = {}, ...children) {
	return component("tfoot", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/th */
function th(props = {}, ...children) {
	return component("th", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tr */
function tr(props = {}, ...children) {
	return component("tr", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/td */
function td(props = {}, ...children) {
	return component("td", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/col */
function col(props = {}, ...children) {
	return component("col", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/colgroup */
function colgroup(props = {}, ...children) {
	return component("colgroup", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/caption */
function caption(props = {}, ...children) {
	return component("caption", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title */
function title(props = {}, ...children) {
	return component("title", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link */
function link(props = {}, ...children) {
	return component("link", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta */
function meta(props = {}, ...children) {
	return component("meta", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/style */
function style(props = {}, ...children) {
	return component("style", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script */
function script(props = {}, ...children) {
	return component("script", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/noscript */
function noscript(props = {}, ...children) {
	return component("noscript", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/template */
function template(props = {}, ...children) {
	return component("template", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/slot */
function slot(props = {}, ...children) {
	return component("slot", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a */
function a(props = {}, ...children) {
	return component("a", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/base */
function base(props = {}, ...children) {
	return component("base", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img */
function img(props = {}, ...children) {
	return component("img", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture */
function picture(props = {}, ...children) {
	return component("picture", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/figure */
function figure(props = {}, ...children) {
	return component("figure", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/figcaption */
function figcaption(props = {}, ...children) {
	return component("figcaption", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/object */
function object(props = {}, ...children) {
	return component("object", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio */
function audio(props = {}, ...children) {
	return component("audio", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video */
function video(props = {}, ...children) {
	return component("video", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/track */
function track(props = {}, ...children) {
	return component("track", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe */
function iframe(props = {}, ...children) {
	return component("iframe", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/source */
function source(props = {}, ...children) {
	return component("source", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/embed */
function embed(props = {}, ...children) {
	return component("embed", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/map */
function map(props = {}, ...children) {
	return component("map", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul */
function ul(props = {}, ...children) {
	return component("ul", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ol */
function ol(props = {}, ...children) {
	return component("ol", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li */
function li(props = {}, ...children) {
	return component("li", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl */
function dl(props = {}, ...children) {
	return component("dl", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dt */
function dt(props = {}, ...children) {
	return component("dt", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dd */
function dd(props = {}, ...children) {
	return component("dd", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form */
function form(props = {}, ...children) {
	return component("form", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset */
function fieldset(props = {}, ...children) {
	return component("fieldset", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/legend */
function legend(props = {}, ...children) {
	return component("legend", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label */
function label(props = {}, ...children) {
	return component("label", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input */
function input(props = {}, ...children) {
	return component("input", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button */
function button(props = {}, ...children) {
	return component("button", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select */
function select(props = {}, ...children) {
	return component("select", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist */
function datalist(props = {}, ...children) {
	return component("datalist", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/data */
function data(props = {}, ...children) {
	return component("data", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/optgroup */
function optgroup(props = {}, ...children) {
	return component("optgroup", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option */
function option(props = {}, ...children) {
	return component("option", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea */
function textarea(props = {}, ...children) {
	return component("textarea", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/output */
function output(props = {}, ...children) {
	return component("output", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/progress */
function progress(props = {}, ...children) {
	return component("progress", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meter */
function meter(props = {}, ...children) {
	return component("meter", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p */
function p(props = {}, ...children) {
	return component("p", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/br */
function br(props = {}) {
	return component("br", props);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/wbr */
function wbr(props = {}) {
	return component("wbr", props);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/hr */
function hr(props = {}) {
	return component("hr", props);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/code */
function code(props = {}, ...children) {
	return component("code", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/var */
function var_(props = {}, ...children) {
	return component("var", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/samp */
function samp(props = {}, ...children) {
	return component("samp", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/kdb */
function kdb(props = {}, ...children) {
	return component("kdb", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/pre */
function pre(props = {}, ...children) {
	return component("pre", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote */
function blockquote(props = {}, ...children) {
	return component("blockquote", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q */
function q(props = {}, ...children) {
	return component("q", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/cite */
function cite(props = {}, ...children) {
	return component("cite", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/abbr */
function abbr(props = {}, ...children) {
	return component("abbr", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dfn */
function dfn(props = {}, ...children) {
	return component("dfn", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/time */
function time(props = {}, ...children) {
	return component("time", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/address */
function address(props = {}, ...children) {
	return component("address", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/sub */
function sub(props = {}, ...children) {
	return component("sub", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/sup */
function sup(props = {}, ...children) {
	return component("sup", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ruby */
function ruby(props = {}, ...children) {
	return component("ruby", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/rt */
function rt(props = {}, ...children) {
	return component("rt", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/rp */
function rp(props = {}, ...children) {
	return component("rp", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/bdo */
function bdo(props = {}, ...children) {
	return component("bdo", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/bdi */
function bdi(props = {}, ...children) {
	return component("bdi", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/em */
function em(props = {}) {
	return component("em", props);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/strong */
function strong(props = {}, ...children) {
	return component("strong", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/mark */
function mark(props = {}) {
	return component("mark", props);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/i */
function i(props = {}, ...children) {
	return component("i", props, ...children);
}
/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/b */
function b(props = {}, ...children) {
	return component("b", props, ...children);
}
//#endregion
export { a, abbr, address, article, aside, audio, b, base, bdi, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, component, data, datalist, dd, details, dfn, dialog, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, fragment, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html, i, iframe, img, input, kdb, label, legend, li, link, main, map, mark, menu, meta, meter, nav, noscript, object, ol, optgroup, option, output, p, picture, pre, progress, q, rp, rt, ruby, samp, script, search, section, select, slot, source, span, strong, style, sub, summary, sup, svg, table, tbody, td, template, text, textarea, tfoot, th, thead, time, title, tr, track, ul, var_, video, wbr };
