(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[272],{

/***/ "./node_modules/prismjs/components/prism-tt2.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-tt2.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(e){e.languages.tt2=e.languages.extend("clike",{comment:{pattern:/#.*|\[%#[\s\S]*?%\]/,lookbehind:!0},keyword:/\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|TAGS|THROW|TRY|SWITCH|UNLESS|USE|WHILE|WRAPPER)\b/,punctuation:/[[\]{},()]/}),delete e.languages.tt2.operator,delete e.languages.tt2.variable,e.languages.insertBefore("tt2","number",{operator:/=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|or|not)\b/,variable:{pattern:/[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*/i}}),delete e.languages.tt2.delimiter,e.languages.insertBefore("tt2","keyword",{delimiter:{pattern:/^(?:\[%|%%)-?|-?%]$/,alias:"punctuation"}}),e.languages.insertBefore("tt2","string",{"single-quoted-string":{pattern:/'[^\\']*(?:\\[\s\S][^\\']*)*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,greedy:!0,alias:"string",inside:{variable:{pattern:/\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i}}}}),delete e.languages.tt2.string,e.hooks.add("before-tokenize",function(t){var a=/\[%[\s\S]+?%\]/g;e.languages["markup-templating"].buildPlaceholders(t,"tt2",a)}),e.hooks.add("after-tokenize",function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"tt2")})}(Prism);

/***/ })

}]);
//# sourceMappingURL=272-216c462d1d65eea357ff.js.map