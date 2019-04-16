(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component---src-templates-blog-post-jsx"],{

/***/ "./src/components/PostContainer.jsx":
/*!******************************************!*\
  !*** ./src/components/PostContainer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostContainer; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var PostContainer =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PostContainer, _Component);

  function PostContainer(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = PostContainer.prototype;

  _proto.render = function render() {
    var html = this.props.html;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  };

  return PostContainer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

PostContainer.dislayName = 'templates';
PostContainer.propTypes = {
  html: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
PostContainer.defaultProps = {};


/***/ }),

/***/ "./src/components/PostHeader.jsx":
/*!***************************************!*\
  !*** ./src/components/PostHeader.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostHander; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var PostHander =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PostHander, _Component);

  function PostHander(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = PostHander.prototype;

  _proto.render = function render() {
    var title = this.props.title;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      style: styles.header
    }, title);
  };

  return PostHander;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

PostHander.dislayName = 'post-header';
PostHander.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
PostHander.defaultProps = {
  title: '无题'
};

var styles = {
  header: {
    textAlign: 'center',
    fontSize: '40px'
  }
};

/***/ }),

/***/ "./src/components/PreOrNext.jsx":
/*!**************************************!*\
  !*** ./src/components/PreOrNext.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");






var styles = function styles(theme) {
  return {
    button: {
      margin: theme.spacing.unit
    },
    leftIcon: {
      marginRight: theme.spacing.unit
    },
    rightIcon: {
      marginLeft: theme.spacing.unit
    },
    iconSmall: {
      fontSize: 20
    }
  };
};

var PreOrNext =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PreOrNext, _Component);

  function PreOrNext(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = PreOrNext.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        next = _this$props.next,
        pre = _this$props.pre,
        disabled = _this$props.disabled,
        href = _this$props.href;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      variant: "contained",
      color: "default",
      disabled: disabled
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: href
    }, pre && '<PRE', next && 'NEXT>'));
  };

  return PreOrNext;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

PreOrNext.displayname = 'PreOrNext';
PreOrNext.propTypes = {
  next: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  pre: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
PreOrNext.defaultProps = {
  disabled: false,
  href: '#'
};
/* harmony default export */ __webpack_exports__["default"] = (PreOrNext);

/***/ }),

/***/ "./src/layouts/PostLayout.jsx":
/*!************************************!*\
  !*** ./src/layouts/PostLayout.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostLayout; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar.jsx");
/* harmony import */ var _components_LeftSide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/LeftSide */ "./src/components/LeftSide.jsx");
/* harmony import */ var _components_FooterContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/FooterContent */ "./src/components/FooterContent.jsx");






var mainStyles = {
  bgc: {
    backgroundColor: '#e5e5e5'
  },
  footerBgc: ''
};

var PostLayout =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PostLayout, _Component);

  function PostLayout(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = PostLayout.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      md: {
        span: 8,
        offset: 2
      }
    }, children))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FooterContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: mainStyles.footerBgc
    }));
  };

  return PostLayout;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

PostLayout.dispalyName = 'PostLayout';
PostLayout.propTypes = {};


/***/ }),

/***/ "./src/templates/BlogPost.jsx":
/*!************************************!*\
  !*** ./src/templates/BlogPost.jsx ***!
  \************************************/
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _layouts_PostLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/PostLayout */ "./src/layouts/PostLayout.jsx");
/* harmony import */ var _components_PostHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostHeader */ "./src/components/PostHeader.jsx");
/* harmony import */ var _components_PostContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostContainer */ "./src/components/PostContainer.jsx");
/* harmony import */ var _components_PreOrNext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PreOrNext */ "./src/components/PreOrNext.jsx");









var BlogPost =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(BlogPost, _Component);

  function BlogPost(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = BlogPost.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        data = _this$props.data,
        pageContext = _this$props.pageContext;
    var pre = pageContext.pre,
        next = pageContext.next;
    var post = data.markdownRemark;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_PostLayout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: post.frontmatter.title
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      html: post.html
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PreOrNext__WEBPACK_IMPORTED_MODULE_7__["default"], {
      disabled: pre == '',
      pre: true,
      href: pre
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PreOrNext__WEBPACK_IMPORTED_MODULE_7__["default"], {
      disabled: next == '',
      next: true,
      href: next
    })));
  };

  return BlogPost;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

BlogPost.displayname = 'BlogPost';
BlogPost.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  pageContext: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
var query = "861893041";
/* harmony default export */ __webpack_exports__["default"] = (BlogPost);

/***/ })

}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-a39ce5b2769275e44ba3.js.map