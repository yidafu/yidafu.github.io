(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/prismjs/components/prism-erb.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-erb.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(e){e.languages.erb=e.languages.extend("ruby",{}),e.languages.insertBefore("erb","comment",{delimiter:{pattern:/^<%=?|%>$/,alias:"punctuation"}}),e.hooks.add("before-tokenize",function(a){var n=/<%=?[\s\S]+?%>/g;e.languages["markup-templating"].buildPlaceholders(a,"erb",n)}),e.hooks.add("after-tokenize",function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"erb")})}(Prism);

/***/ })

}]);
//# sourceMappingURL=78-8b899dbdfcddeee6a28a.js.map