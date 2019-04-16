(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, waitForRouteChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _wait_for_route_change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wait-for-route-change */ "./.cache/wait-for-route-change.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "waitForRouteChange", function() { return _wait_for_route_change__WEBPACK_IMPORTED_MODULE_3__["waitForRouteChange"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _parse_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parse-path */ "./.cache/parse-path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _parse_path__WEBPACK_IMPORTED_MODULE_5__["default"]; });







var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ "./.cache/public-page-renderer-prod.js":
/*!*********************************************!*\
  !*** ./.cache/public-page-renderer-prod.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-renderer */ "./.cache/page-renderer.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");






var ProdPageRenderer = function ProdPageRenderer(_ref) {
  var location = _ref.location;
  var pageResources = _loader__WEBPACK_IMPORTED_MODULE_4__["default"].getResourcesForPathnameSync(location.pathname);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({
    location: location,
    pageResources: pageResources
  }, pageResources.json));
};

ProdPageRenderer.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProdPageRenderer);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (true) {
  module.exports = preferDefault(__webpack_require__(/*! ./public-page-renderer-prod */ "./.cache/public-page-renderer-prod.js"));
} else {}

/***/ }),

/***/ "./public/static/d/1506232949.json":
/*!*****************************************!*\
  !*** ./public/static/d/1506232949.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"allMarkdownRemark":{"totalCount":21,"edges":[{"node":{"frontmatter":{"date":"2018-07-31"}}},{"node":{"frontmatter":{"date":"2018-06-14"}}},{"node":{"frontmatter":{"date":"2018-06-03"}}},{"node":{"frontmatter":{"date":"2018-05-19"}}},{"node":{"frontmatter":{"date":"2018-05-19"}}},{"node":{"frontmatter":{"date":"2018-05-12"}}},{"node":{"frontmatter":{"date":"2018-05-07"}}},{"node":{"frontmatter":{"date":"2018-05-07"}}},{"node":{"frontmatter":{"date":"2017-12-18"}}},{"node":{"frontmatter":{"date":"2017-11-18"}}},{"node":{"frontmatter":{"date":"2017-11-17"}}},{"node":{"frontmatter":{"date":"2017-11-17"}}},{"node":{"frontmatter":{"date":"2017-10-21"}}},{"node":{"frontmatter":{"date":"2017-10-16"}}},{"node":{"frontmatter":{"date":"2017-10-16"}}},{"node":{"frontmatter":{"date":"2017-10-16"}}},{"node":{"frontmatter":{"date":"2017-10-09"}}},{"node":{"frontmatter":{"date":"2017-10-09"}}},{"node":{"frontmatter":{"date":"2017-10-09"}}},{"node":{"frontmatter":{"date":"2017-08-01"}}},{"node":{"frontmatter":{"date":"2017-07-31"}}}]}}};

/***/ }),

/***/ "./public/static/d/1904020567.json":
/*!*****************************************!*\
  !*** ./public/static/d/1904020567.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"allMarkdownRemark":{"totalCount":21,"edges":[{"node":{"fields":{"category":"CAndC++"}}},{"node":{"fields":{"category":"CAndC++"}}},{"node":{"fields":{"category":"CAndC++"}}},{"node":{"fields":{"category":"Java"}}},{"node":{"fields":{"category":"CAndC++"}}},{"node":{"fields":{"category":"JavaScript"}}},{"node":{"fields":{"category":"JavaScript"}}},{"node":{"fields":{"category":"JavaScript"}}},{"node":{"fields":{"category":"JavaScript"}}},{"node":{"fields":{"category":"JavaScript"}}},{"node":{"fields":{"category":"JavaScript"}}},{"node":{"fields":{"category":"JavaScript"}}},{"node":{"fields":{"category":"A-cup-of-code"}}},{"node":{"fields":{"category":"PHP"}}},{"node":{"fields":{"category":"PHP"}}},{"node":{"fields":{"category":"atom"}}},{"node":{"fields":{"category":"atom"}}},{"node":{"fields":{"category":"atom"}}},{"node":{"fields":{"category":"git&github"}}},{"node":{"fields":{"category":"Linux"}}},{"node":{"fields":{"category":"ruby"}}}]}}};

/***/ }),

/***/ "./public/static/d/299507749.json":
/*!****************************************!*\
  !*** ./public/static/d/299507749.json ***!
  \****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"customTagsNode":{"tags":["wabpack","eslint","javascript","axios","api","react","babel","algorihm","linix","app","git","gogs","nginx","proxy","ruby","language","php","shell","cpp","language-feature","c","recursion","java","jsp","mysql","atom","markdown","nodejs","error"]}}};

/***/ }),

/***/ "./src/components/Archives.jsx":
/*!*************************************!*\
  !*** ./src/components/Archives.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");
/* harmony import */ var core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_static_d_1506232949_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/static/d/1506232949.json */ "./public/static/d/1506232949.json");
var _public_static_d_1506232949_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/1506232949.json */ "./public/static/d/1506232949.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _utils_str2Color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/str2Color */ "./src/utils/str2Color.js");












var Category =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_5___default()(Category, _Component);

  function Category(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = Category.prototype;

  _proto.renderTags = function renderTags(edges) {
    // 数组去重
    var archives = Array.from(new Set(edges.map(function (edge) {
      var postCreatedAt = new Date(edge.node.frontmatter.date);
      return postCreatedAt.getFullYear() + '/' + postCreatedAt.getMonth();
    })));
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", null, archives.map(function (archive, idx) {
      var hex = Object(_utils_str2Color__WEBPACK_IMPORTED_MODULE_10__["default"])(archive);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: "/archives/" + archive,
        key: idx
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        style: {
          backgroundColor: hex
        },
        button: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        primary: archive
      })));
    }));
  };

  _proto.render = function render() {
    var _this2 = this;

    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_9__["StaticQuery"], {
      query: "1506232949",
      render: function render(data) {
        return _this2.renderTags(data.allMarkdownRemark.edges);
      },
      data: _public_static_d_1506232949_json__WEBPACK_IMPORTED_MODULE_6__
    });
  };

  return Category;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Category.dislayName = 'templates';
Category.propTypes = {};
Category.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "./src/components/Category.jsx":
/*!*************************************!*\
  !*** ./src/components/Category.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");
/* harmony import */ var core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_static_d_1904020567_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/static/d/1904020567.json */ "./public/static/d/1904020567.json");
var _public_static_d_1904020567_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/1904020567.json */ "./public/static/d/1904020567.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _utils_str2Color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/str2Color */ "./src/utils/str2Color.js");












var Category =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_5___default()(Category, _Component);

  function Category(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = Category.prototype;

  _proto.renderTags = function renderTags(edges) {
    // 数组去重
    var categories = Array.from(new Set(edges.map(function (edge) {
      return edge.node.fields.category;
    })));
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", null, categories.map(function (category, idx) {
      var hex = Object(_utils_str2Color__WEBPACK_IMPORTED_MODULE_10__["default"])(category);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        to: "/categories/" + category,
        key: idx
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          backgroundColor: hex
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        primary: category
      })));
    }));
  };

  _proto.render = function render() {
    var _this2 = this;

    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_9__["StaticQuery"], {
      query: "1904020567",
      render: function render(data) {
        return _this2.renderTags(data.allMarkdownRemark.edges);
      },
      data: _public_static_d_1904020567_json__WEBPACK_IMPORTED_MODULE_6__
    });
  };

  return Category;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Category.dislayName = 'templates';
Category.propTypes = {};
Category.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "./src/components/FooterContent.jsx":
/*!******************************************!*\
  !*** ./src/components/FooterContent.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var styles = {
  footerCenter: {
    textAlign: 'center',
    paddingTop: '20px',
    backgroundColor: '#f8f9fa'
  }
};

var FooterContent =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(FooterContent, _Component);

  function FooterContent(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = FooterContent.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styles.footerCenter
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        color: '#999'
      }
    }, "\xA9 2017-2018 \u4ED8\u8FBE\u610F \u7248\u6743\u6240\u6709 \u7EF4\u62A4\u8005\uFF1A@Dov Yih \u5982\u6709\u95EE\u9898\u968F\u65F6\u8054\u7CFB\uFF01", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "Power By\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://www.gatsbyjs.org/"
    }, "Gatsy"), "\xA0 & \xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://material-ui.com/"
    }, "Material-UI"), "\xA0"));
  };

  return FooterContent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

FooterContent.displayName = 'FooterContent';
/* harmony default export */ __webpack_exports__["default"] = (FooterContent);

/***/ }),

/***/ "./src/components/LeftSide.jsx":
/*!*************************************!*\
  !*** ./src/components/LeftSide.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tags */ "./src/components/Tags.jsx");
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Category */ "./src/components/Category.jsx");
/* harmony import */ var _Archives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Archives */ "./src/components/Archives.jsx");






function Tab(props) {
  return props.children;
}

var Logo =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Logo, _Component);

  function Logo(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.handleChange = function (event, value) {// do nothing
    };

    _this.state = {
      value: 0
    };
    return _this;
  }

  var _proto = Logo.prototype;

  _proto.render = function render() {
    var value = this.state.value;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Categories"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Category__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Archives"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Archives__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Tags"), value === 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Tags__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  };

  return Logo;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Logo.displayName = 'LeftSide';


/***/ }),

/***/ "./src/components/NavBar.jsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");






var NavBar =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(NavBar, _Component);

  function NavBar() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = NavBar.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
      bg: "light",
      expand: "lg"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"].Brand, {
      href: "#home"
    }, "\u4ED8\u8FBE\u610F\u7684\u535A\u5BA2"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"].Toggle, {
      "aria-controls": "basic-navbar-nav"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"].Collapse, {
      id: "basic-navbar-nav"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
      className: "mr-auto"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
      href: "/"
    }, "Home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
      href: "/about-me"
    }, "AboutMe"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
      href: "/drink"
    }, "Drink?"))));
  };

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

NavBar.displayName = 'NavBar';
NavBar.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/components/Tags.jsx":
/*!*********************************!*\
  !*** ./src/components/Tags.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_static_d_299507749_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/static/d/299507749.json */ "./public/static/d/299507749.json");
var _public_static_d_299507749_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/299507749.json */ "./public/static/d/299507749.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");







var Tags =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Tags, _Component);

  function Tags(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = Tags.prototype;

  _proto.renderTags = function renderTags(tags) {
    var badgeTypeList = ['info', 'success', 'warning', 'danger', 'rose'];
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, tags.map(function (tag, idx) {
      // TODO 改进随机算法
      var tagsTypeIndex = parseInt(Math.random() * badgeTypeList.length);
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/tags/" + tag,
        key: idx
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
        color: badgeTypeList[tagsTypeIndex]
      }, tag));
    }));
  };

  _proto.render = function render() {
    var _this2 = this;

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["StaticQuery"], {
      query: "299507749",
      render: function render(data) {
        return _this2.renderTags(data.customTagsNode.tags);
      },
      data: _public_static_d_299507749_json__WEBPACK_IMPORTED_MODULE_1__
    });
  };

  return Tags;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

Tags.dislayName = 'templates';
Tags.propTypes = {};
Tags.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Tags);

/***/ }),

/***/ "./src/layouts/MainLayout.jsx":
/*!************************************!*\
  !*** ./src/layouts/MainLayout.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.jsx");
/* harmony import */ var _components_LeftSide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LeftSide */ "./src/components/LeftSide.jsx");
/* harmony import */ var _components_FooterContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FooterContent */ "./src/components/FooterContent.jsx");





 // @ref https://material-ui.com/customization/css-in-js/#creategenerateclassname-options-class-name-generator

var mainStyles = {
  bgc: {
    backgroundColor: '#e5e5e5'
  },
  footerBgc: ''
};

var MainLayout =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(MainLayout, _Component);

  function MainLayout(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = MainLayout.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      md: 3,
      sm: 3
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_LeftSide__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      md: 9,
      sm: 9
    }, children))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FooterContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: mainStyles.footerBgc
    }));
  };

  return MainLayout;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

MainLayout.dispalyName = 'MainLayout';
MainLayout.propTypes = {// classes: PropTypes.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MainLayout);

/***/ }),

/***/ "./src/utils/colors.js":
/*!*****************************!*\
  !*** ./src/utils/colors.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Colors = {
  // Dust Red / 薄暮
  // 斗志、 奔放
  red1: '#fff1f0',
  red2: '#ffccc7',
  red3: '#ffa39e',
  red4: '#ff7875',
  red5: '#ff4d4f',
  red6: '#f5222d',
  red7: '#cf1322',
  red8: '#a8071a',
  red9: '#820014',
  red10: '#5c0011',
  // Volcano / 火山
  // 醒目、 澎湃
  volcano1: '#fff2e8',
  volcano2: '#ffd8bf',
  volcano3: '#ffbb96',
  volcano4: '#ff9c6e',
  volcano5: '#ff7a45',
  volcano6: '#fa541c',
  volcano7: '#d4380d',
  volcano8: '#ad2102',
  volcano9: '#871400',
  volcano10: '#610b00',
  // Sunset Orange / 日暮
  // 温暖、 欢快
  orange1: '#fff7e6',
  orange2: '#ffe7ba',
  orange3: '#ffd591',
  orange4: '#ffc069',
  orange5: '#ffa940',
  orange6: '#fa8c16',
  orange7: '#d46b08',
  orange8: '#ad4e00',
  orange9: '#873800',
  orange10: '#612500',
  // Calendula Gold / 金盏花
  // 活力、 积极
  gold1: '#fffbe6',
  gold2: '#fff1b8',
  gold3: '#ffe58f',
  gold4: '#ffd666',
  gold5: '#ffc53d',
  gold6: '#faad14',
  gold7: '#d48806',
  gold8: '#ad6800',
  gold9: '#874d00',
  gold10: '#613400',
  // Sunrise Yellow / 日出
  // 出生、 阳光
  yellow1: '#feffe6',
  yellow2: '#ffffb8',
  yellow3: '#fffb8f',
  yellow4: '#fff566',
  yellow5: '#ffec3d',
  yellow6: '#fadb14',
  yellow7: '#d4b106',
  yellow8: '#ad8b00',
  yellow9: '#876800',
  yellow10: '#614700',
  // Lime / 青柠
  // 自然、 生机
  lime1: '#fcffe6',
  lime2: '#f4ffb8',
  lime3: '#eaff8f',
  lime4: '#d3f261',
  lime5: '#bae637',
  lime6: '#a0d911',
  lime7: '#7cb305',
  lime8: '#5b8c00',
  lime9: '#3f6600',
  lime10: '#254000',
  // Polar Green / 极光绿
  // 健康、 创新
  green1: '#f6ffed',
  green2: '#d9f7be',
  green3: '#b7eb8f',
  green4: '#95de64',
  green5: '#73d13d',
  green6: '#52c41a',
  green7: '#389e0d',
  green8: '#237804',
  green9: '#135200',
  green10: '#092b00',
  // Cyan / 明青
  // 希望、 坚强
  cyan1: '#e6fffb',
  cyan2: '#b5f5ec',
  cyan3: '#87e8de',
  cyan4: '#5cdbd3',
  cyan5: '#36cfc9',
  cyan6: '#13c2c2',
  cyan7: '#08979c',
  cyan8: '#006d75',
  cyan9: '#00474f',
  cyan10: '#002329',
  //   Daybreak Blue / 拂晓蓝
  // 包容、科技、普惠
  blue1: '#e6f7ff',
  blue2: '#bae7ff',
  blue3: '#91d5ff',
  blue4: '#69c0ff',
  blue5: '#40a9ff',
  blue6: '#1890ff',
  blue7: '#096dd9',
  blue8: '#0050b3',
  blue9: '#003a8c',
  blue10: '#002766',
  //   Geek Blue / 极客蓝
  // 探索、钻研
  geekblue1: '#f0f5ff',
  geekblue2: '#d6e4ff',
  geekblue3: '#adc6ff',
  geekblue4: '#85a5ff',
  geekblue5: '#597ef7',
  geekblue6: '#2f54eb',
  geekblue7: '#1d39c4',
  geekblue8: '#10239e',
  geekblue9: '#061178',
  geekblue10: '#030852',
  //   Golden Purple / 酱紫
  // 优雅、浪漫
  purple1: '#f9f0ff',
  purple2: '#efdbff',
  purple3: '#d3adf7',
  purple4: '#b37feb',
  purple5: '#9254de',
  purple6: '#722ed1',
  purple7: '#531dab',
  purple8: '#391085',
  purple9: '#22075e',
  purple10: '#120338',
  //   Magenta / 法式洋红
  // 明快、感性
  magenta1: '#fff0f6',
  magenta2: '#ffd6e7',
  magenta3: '#ffadd2',
  magenta4: '#ff85c0',
  magenta5: '#f759ab',
  magenta6: '#eb2f96',
  magenta7: '#c41d7f',
  magenta8: '#9e1068',
  magenta9: '#780650',
  magenta10: '#520339',
  // 中性色板
  grey1: '#ffffff',
  grey2: '#fafafa',
  grey3: '#f5f5f5',
  grey4: '#e8e8e8',
  grey5: '#d9d9d9',
  grey6: '#bfbfbf',
  grey7: '#8c8c8c',
  grey8: '#595959',
  grey9: '#262626',
  grey10: '#000000',
  // 热力图专用
  thermodynamic1: '#531DAB',
  thermodynamic2: '#2F54EB',
  thermodynamic3: '#40A9FF',
  thermodynamic4: '#5CDBD3',
  thermodynamic5: '#B7EB8F',
  thermodynamic6: '#FFE58F',
  thermodynamic7: '#FFC069',
  thermodynamic8: '#FF7A45',
  thermodynamic9: '#F53B44',
  thermodynamic10: '#A8071A'
};
/* harmony default export */ __webpack_exports__["default"] = (Colors); // module.exports = Colors

/***/ }),

/***/ "./src/utils/str2Color.js":
/*!********************************!*\
  !*** ./src/utils/str2Color.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");
/* harmony import */ var core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto */ "./node_modules/crypto-browserify/index.js");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colors */ "./src/utils/colors.js");





var colorsPool = Object.values(_colors__WEBPACK_IMPORTED_MODULE_4__["default"]) // 选择较浅的前 7 号颜色
.filter(function (color, idx) {
  return idx % 10 < 6;
});
/* harmony default export */ __webpack_exports__["default"] = (function (str) {
  var hash = crypto__WEBPACK_IMPORTED_MODULE_3___default.a.createHash('md5').update(str).digest('hex').substr(0, 6);
  return colorsPool[parseInt(hash, 16) % colorsPool.length];
});

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=1-377c41245e4d47e4bf73.js.map