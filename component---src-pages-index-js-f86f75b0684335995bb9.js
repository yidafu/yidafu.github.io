(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component---src-pages-index-js"],{

/***/ "./src/components/ArticleItem.jsx":
/*!****************************************!*\
  !*** ./src/components/ArticleItem.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArticleItem; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");






var ArticleItem =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ArticleItem, _Component);

  function ArticleItem(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = ArticleItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        content = _this$props.content,
        to = _this$props.to;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: to
    }, " ", title, " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, content)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Read More"));
  };

  return ArticleItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

ArticleItem.dispalyName = 'ArticleItem';
ArticleItem.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  to: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};


/***/ }),

/***/ "./src/components/Pagination.jsx":
/*!***************************************!*\
  !*** ./src/components/Pagination.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-pagination */ "./node_modules/rc-pagination/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var rc_pagination_dist_rc_pagination_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-pagination/dist/rc-pagination.css */ "./node_modules/rc-pagination/dist/rc-pagination.css");
/* harmony import */ var rc_pagination_dist_rc_pagination_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rc_pagination_dist_rc_pagination_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");









var Pagination =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Pagination, _Component);

  function Pagination(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.renderPaginationItem = function (current) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: '/posts/' + (current == 1 ? '' : current)
      }, current);
    };

    _this.state = {};
    return _this;
  }

  var _proto = Pagination.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      md: {
        offset: 8
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_pagination__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, this.props, {
      itemRender: this.renderPaginationItem
    }))));
  };

  return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

Pagination.displayName = 'Pagination';
Pagination.propTypes = {
  total: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  pageSize: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  current: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired
};


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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _templates_MainPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/templates/MainPagination */ "./src/templates/MainPagination.jsx");






var Index =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Index, _Component);

  function Index(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = Index.prototype;

  _proto.render = function render() {
    var data = this.props.data;
    var pageContext = {
      group: data.allMarkdownRemark.edges,
      first: true,
      last: false,
      index: 1,
      PageCount: 10,
      additionalContext: {
        totalCount: data.allMarkdownRemark.totalCount
      }
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_templates_MainPagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
      pageContext: pageContext
    }));
  };

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]); // @NOTE http://es6.ruanyifeng.com/#docs/string#标签模板


Index.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
var query = "4110914780";
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/templates/MainPagination.jsx":
/*!******************************************!*\
  !*** ./src/templates/MainPagination.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainPagination; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/layouts/MainLayout */ "./src/layouts/MainLayout.jsx");
/* harmony import */ var _components_ArticleItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ArticleItem */ "./src/components/ArticleItem.jsx");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Pagination */ "./src/components/Pagination.jsx");







var MainPagination =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(MainPagination, _Component);

  function MainPagination(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.handleChange = function (idx) {
      console.log(idx);
    };

    _this.state = {};
    return _this;
  }

  var _proto = MainPagination.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        pageContext = _this$props.pageContext,
        data = _this$props.data;
    var group = pageContext.group,
        index = pageContext.index,
        first = pageContext.first,
        last = pageContext.last,
        pageCount = pageContext.pageCount,
        additionalContext = pageContext.additionalContext;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styles.content
    }, group.map(function (_ref) {
      var node = _ref.node;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ArticleItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: node.id,
        to: node.fields.slug,
        title: node.frontmatter.title,
        content: node.excerpt,
        hideOnSinglePage: true
      });
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
      total: additionalContext.totalCount,
      pageSize: 10,
      current: index,
      onChange: this.handleChange
    }));
  };

  return MainPagination;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

MainPagination.displayname = 'MainPagination';
MainPagination.propTypes = {
  pathContext: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    group: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
    index: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    first: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
    last: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
    additionalContext: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
  })
};

var styles = {
  content: {
    minHeight: '1000px',
    padding: '20px'
  }
};

/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-js-f86f75b0684335995bb9.js.map