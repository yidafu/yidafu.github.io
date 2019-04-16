(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "./node_modules/prismjs/components/prism-graphql.js":
/*!**********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-graphql.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.graphql = {
	'comment': /#.*/,
	'string': {
		pattern: /"(?:\\.|[^\\"\r\n])*"/,
		greedy: true
	},
	'number': /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	'boolean': /\b(?:true|false)\b/,
	'variable': /\$[a-z_]\w*/i,
	'directive': {
		pattern: /@[a-z_]\w*/i,
		alias: 'function'
	},
	'attr-name': /[a-z_]\w*(?=\s*:)/i,
	'keyword': [
		{
			pattern: /(fragment\s+(?!on)[a-z_]\w*\s+|\.{3}\s*)on\b/,
			lookbehind: true
		},
		/\b(?:query|fragment|mutation)\b/
	],
	'operator': /!|=|\.{3}/,
	'punctuation': /[!(){}\[\]:=,]/
};

/***/ })

}]);
//# sourceMappingURL=97-623c852c2995ce14b4c5.js.map