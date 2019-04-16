(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[197],{

/***/ "./node_modules/prismjs/components/prism-php-extras.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-php-extras.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.insertBefore('php', 'variable', {
	'this': /\$this\b/,
	'global': /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
	'scope': {
		pattern: /\b[\w\\]+::/,
		inside: {
			keyword: /static|self|parent/,
			punctuation: /::|\\/
		}
	}
});

/***/ })

}]);
//# sourceMappingURL=197-108cda2d7f8fe9dbb90d.js.map