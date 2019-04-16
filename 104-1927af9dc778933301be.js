(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104],{

/***/ "./node_modules/prismjs/components/prism-handlebars.min.js":
/*!*****************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-handlebars.min.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(a){a.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,"boolean":/\b(?:true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/},a.hooks.add("before-tokenize",function(e){var n=/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;a.languages["markup-templating"].buildPlaceholders(e,"handlebars",n)}),a.hooks.add("after-tokenize",function(e){a.languages["markup-templating"].tokenizePlaceholders(e,"handlebars")})}(Prism);

/***/ })

}]);
//# sourceMappingURL=104-1927af9dc778933301be.js.map