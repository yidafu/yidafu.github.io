(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[171],{

/***/ "./node_modules/prismjs/components/prism-n4js.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-n4js.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.n4js = Prism.languages.extend('javascript', {
	// Keywords from N4JS language spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html
	'keyword': /\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
});

Prism.languages.insertBefore('n4js', 'constant', {
	// Annotations in N4JS spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html#_annotations
	'annotation': {
		pattern: /@+\w+/,
		alias: 'operator'
	}
});

Prism.languages.n4jsd=Prism.languages.n4js;


/***/ })

}]);
//# sourceMappingURL=171-2cc42ce41c9a27eb4c9a.js.map