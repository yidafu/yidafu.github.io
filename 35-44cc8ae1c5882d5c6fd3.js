(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/prismjs/components/prism-bison.min.js":
/*!************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-bison.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.bison=Prism.languages.extend("c",{}),Prism.languages.insertBefore("bison","comment",{bison:{pattern:/^[\s\S]*?%%[\s\S]*?%%/,inside:{c:{pattern:/%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,inside:{delimiter:{pattern:/^%?\{|%?\}$/,alias:"punctuation"},"bison-variable":{pattern:/[$@](?:<[^\s>]+>)?[\w$]+/,alias:"variable",inside:{punctuation:/<|>/}},rest:Prism.languages.c}},comment:Prism.languages.c.comment,string:Prism.languages.c.string,property:/\S+(?=:)/,keyword:/%\w+/,number:{pattern:/(^|[^@])\b(?:0x[\da-f]+|\d+)/i,lookbehind:!0},punctuation:/%[%?]|[|:;\[\]<>]/}}});

/***/ })

}]);
//# sourceMappingURL=35-44cc8ae1c5882d5c6fd3.js.map