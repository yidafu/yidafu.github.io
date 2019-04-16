(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/prismjs/components/prism-diff.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-diff.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.diff = {
	'coord': [
		// Match all kinds of coord lines (prefixed by "+++", "---" or "***").
		/^(?:\*{3}|-{3}|\+{3}).*$/m,
		// Match "@@ ... @@" coord lines in unified diff.
		/^@@.*@@$/m,
		// Match coord lines in normal diff (starts with a number).
		/^\d+.*$/m
	],

	// Match inserted and deleted lines. Support both +/- and >/< styles.
	'deleted': /^[-<].*$/m,
	'inserted': /^[+>].*$/m,

	// Match "different" lines (prefixed with "!") in context diff.
	'diff': {
		'pattern': /^!(?!!).+$/m,
		'alias': 'important'
	}
};


/***/ })

}]);
//# sourceMappingURL=65-047fcae79804fd7702f5.js.map