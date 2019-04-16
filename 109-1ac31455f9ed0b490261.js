(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ "./node_modules/prismjs/components/prism-hpkp.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-hpkp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Original by Scott Helme.
 *
 * Reference: https://scotthelme.co.uk/hpkp-cheat-sheet/
 */

Prism.languages.hpkp = {
	'directive':  {
		pattern: /\b(?:(?:includeSubDomains|preload|strict)(?: |;)|pin-sha256="[a-zA-Z\d+=/]+"|(?:max-age|report-uri)=|report-to )/,
		alias: 'keyword'
	},
	'safe': {
		pattern: /\d{7,}/,
		alias: 'selector'
	},
	'unsafe': {
		pattern: /\d{0,6}/,
		alias: 'function'
	}
};

/***/ })

}]);
//# sourceMappingURL=109-1ac31455f9ed0b490261.js.map