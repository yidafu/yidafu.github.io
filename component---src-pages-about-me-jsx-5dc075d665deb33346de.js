(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component---src-pages-about-me-jsx"],{

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

/***/ "./src/pages/about-me.jsx":
/*!********************************!*\
  !*** ./src/pages/about-me.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AboutMe; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/MainLayout */ "./src/layouts/MainLayout.jsx");





var styles = {
  content: {
    minHeight: '1000px',
    padding: '30px 100px'
  },
  todo: {
    padding: '30px',
    textAlign: 'center'
  }
};

var AboutMe =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(AboutMe, _Component);

  function AboutMe(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = AboutMe.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styles.content
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u65BD\u5DE5\u4E2D ... ..."))));
  };

  return AboutMe;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

AboutMe.displayName = 'Drink';
AboutMe.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};


/***/ })

}]);
//# sourceMappingURL=component---src-pages-about-me-jsx-5dc075d665deb33346de.js.map