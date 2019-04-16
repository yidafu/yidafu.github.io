(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/prismjs/components/prism-erb.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-erb.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	Prism.languages.erb = Prism.languages.extend('ruby', {});
	Prism.languages.insertBefore('erb', 'comment', {
		'delimiter': {
			pattern: /^<%=?|%>$/,
			alias: 'punctuation'
		}
	});

	Prism.hooks.add('before-tokenize', function(env) {
		var erbPattern = /<%=?[\s\S]+?%>/g;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'erb', erbPattern);
	});

	Prism.hooks.add('after-tokenize', function(env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'erb');
	});

}(Prism));

/***/ })

}]);
//# sourceMappingURL=77-79da327c853d4b1b7042.js.map