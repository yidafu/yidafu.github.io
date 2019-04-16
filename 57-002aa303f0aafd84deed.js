(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/prismjs/components/prism-css-extras.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-css-extras.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.css.selector = {
	pattern: /[^{}\s][^{}]*(?=\s*\{)/,
	inside: {
		'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
		'pseudo-class': /:[-\w]+(?:\(.*\))?/,
		'class': /\.[-:.\w]+/,
		'id': /#[-:.\w]+/,
		'attribute': /\[[^\]]+\]/
	}
};

Prism.languages.insertBefore('css', 'function', {
	'hexcode': /#[\da-f]{3,8}/i,
	'entity': /\\[\da-f]{1,8}/i,
	'number': /[\d%.]+/
});

/***/ })

}]);
//# sourceMappingURL=57-002aa303f0aafd84deed.js.map