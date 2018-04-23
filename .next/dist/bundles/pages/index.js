module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CharacterInfo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
var _jsxFileName = '/Users/jyotiarora/Documents/projects/crm/lifcare-blog-content/components/CharacterInfo.js';




var CharacterInfo = function CharacterInfo(_ref) {
  var character = _ref.character,
      error = _ref.error,
      fetchCharacter = _ref.fetchCharacter,
      _ref$isFetchedOnServe = _ref.isFetchedOnServer,
      isFetchedOnServer = _ref$isFetchedOnServe === undefined ? false : _ref$isFetchedOnServe;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-3002092771' + ' ' + 'CharacterInfo',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    error ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      {
        className: 'jsx-3002092771',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      'We encountered and error.'
    ) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'article',
      {
        className: 'jsx-3002092771',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'h3',
        {
          className: 'jsx-3002092771',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        'Character: ',
        character.name
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'p',
        {
          className: 'jsx-3002092771',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        'birth year: ',
        character.birth_year
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'p',
        {
          className: 'jsx-3002092771',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        'gender: ',
        character.gender
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'p',
        {
          className: 'jsx-3002092771',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        'skin color: ',
        character.skin_color
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'p',
        {
          className: 'jsx-3002092771',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        'eye color: ',
        character.eye_color
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      {
        className: 'jsx-3002092771',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      },
      '( was character fetched on server? -',
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'b',
        {
          className: 'jsx-3002092771',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        isFetchedOnServer.toString(),
        ')'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '3002092771',
      css: 'article.jsx-3002092771{background-color:#528CE0;border-radius:15px;padding:15px;width:250px;margin:15px 0;color:white;}button.jsx-3002092771{margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhcmFjdGVySW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmdCLEFBR2tDLEFBUVAsa0JBQ3BCLE9BUnFCLG1CQUNOLGFBQ0QsWUFDRSxjQUNGLFlBQ2QiLCJmaWxlIjoiY29tcG9uZW50cy9DaGFyYWN0ZXJJbmZvLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qeW90aWFyb3JhL0RvY3VtZW50cy9wcm9qZWN0cy9jcm0vbGlmY2FyZS1ibG9nLWNvbnRlbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmNvbnN0IENoYXJhY3RlckluZm8gPSAoe2NoYXJhY3RlciwgZXJyb3IsIGZldGNoQ2hhcmFjdGVyLCBpc0ZldGNoZWRPblNlcnZlciA9IGZhbHNlfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nQ2hhcmFjdGVySW5mbyc+XG4gICAge1xuICAgICAgZXJyb3IgPyA8cD5XZSBlbmNvdW50ZXJlZCBhbmQgZXJyb3IuPC9wPlxuICAgICAgICA6IDxhcnRpY2xlPlxuICAgICAgICAgIDxoMz5DaGFyYWN0ZXI6IHtjaGFyYWN0ZXIubmFtZX08L2gzPlxuICAgICAgICAgIDxwPmJpcnRoIHllYXI6IHtjaGFyYWN0ZXIuYmlydGhfeWVhcn08L3A+XG4gICAgICAgICAgPHA+Z2VuZGVyOiB7Y2hhcmFjdGVyLmdlbmRlcn08L3A+XG4gICAgICAgICAgPHA+c2tpbiBjb2xvcjoge2NoYXJhY3Rlci5za2luX2NvbG9yfTwvcD5cbiAgICAgICAgICA8cD5leWUgY29sb3I6IHtjaGFyYWN0ZXIuZXllX2NvbG9yfTwvcD5cbiAgICAgICAgPC9hcnRpY2xlPlxuXG4gICAgfVxuICAgIDxwPlxuICAgICAgKCB3YXMgY2hhcmFjdGVyIGZldGNoZWQgb24gc2VydmVyPyAtXG4gICAgICA8Yj57aXNGZXRjaGVkT25TZXJ2ZXIudG9TdHJpbmcoKX0pPC9iPlxuICAgIDwvcD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBhcnRpY2xlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUyOENFMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBtYXJnaW46IDE1cHggMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7XG4gICAgY2hhcmFjdGVyOiBzdGF0ZS5jaGFyYWN0ZXIsXG4gICAgZXJyb3I6IHN0YXRlLmVycm9yLFxuICAgIGlzRmV0Y2hlZE9uU2VydmVyOiBzdGF0ZS5pc0ZldGNoZWRPblNlcnZlclxuICB9KSxcbikoQ2hhcmFjdGVySW5mbylcbiJdfQ== */\n/*@ sourceURL=components/CharacterInfo.js */'
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
  return {
    character: state.character,
    error: state.error,
    isFetchedOnServer: state.isFetchedOnServer
  };
})(CharacterInfo));

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux__ = __webpack_require__("./redux/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_CharacterInfo__ = __webpack_require__("./components/CharacterInfo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_epics__ = __webpack_require__("./redux/epics.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux_actions__ = __webpack_require__("./redux/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_of__ = __webpack_require__("rxjs/observable/of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_of__);

var _jsxFileName = '/Users/jyotiarora/Documents/projects/crm/lifcare-blog-content/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter() {
    _classCallCheck(this, Counter);

    return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
  }

  _createClass(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.startFetchingCharacters();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.stopFetchingCharacters();
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          'Index Page'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_CharacterInfo__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'nav',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            { href: '/other', __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                }
              },
              'Navigate to "/other"'
            )
          )
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var store = _ref.store,
            isServer = _ref.isServer;
        var resultAction;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_6__redux_epics__["a" /* rootEpic */])(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_7__redux_actions__["a" /* fetchCharacter */](isServer)), store).toPromise();

              case 2:
                resultAction = _context.sent;
                // we need to convert Observable to Promise
                store.dispatch(resultAction);

                return _context.abrupt('return', { isServer: isServer });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Counter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_4__redux__["a" /* default */], null, {
  startFetchingCharacters: __WEBPACK_IMPORTED_MODULE_7__redux_actions__["d" /* startFetchingCharacters */],
  stopFetchingCharacters: __WEBPACK_IMPORTED_MODULE_7__redux_actions__["e" /* stopFetchingCharacters */]
})(Counter));

/***/ }),

/***/ "./redux/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_CHARACTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_CHARACTER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return START_FETCHING_CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return STOP_FETCHING_CHARACTERS; });
var FETCH_CHARACTER = 'FETCH_CHARACTER';
var FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
var FETCH_CHARACTER_FAILURE = 'FETCH_CHARACTER_FAILURE';
var START_FETCHING_CHARACTERS = 'START_FETCHING_CHARACTERS';
var STOP_FETCHING_CHARACTERS = 'STOP_FETCHING_CHARACTERS';

/***/ }),

/***/ "./redux/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return startFetchingCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return stopFetchingCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchCharacterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchCharacterFailure; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__("./redux/actionTypes.js");


var startFetchingCharacters = function startFetchingCharacters() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["d" /* START_FETCHING_CHARACTERS */]
  };
};
var stopFetchingCharacters = function stopFetchingCharacters() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["e" /* STOP_FETCHING_CHARACTERS */]
  };
};
var fetchCharacter = function fetchCharacter(isServer) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["a" /* FETCH_CHARACTER */],
    payload: { isServer: isServer }
  };
};
var fetchCharacterSuccess = function fetchCharacterSuccess(response, isServer) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["c" /* FETCH_CHARACTER_SUCCESS */],
    payload: { response: response, isServer: isServer }
  };
};

var fetchCharacterFailure = function fetchCharacterFailure(error, isServer) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["b" /* FETCH_CHARACTER_FAILURE */],
    payload: { error: error, isServer: isServer }
  };
};

/***/ }),

/***/ "./redux/epics.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fetchUserEpic */
/* unused harmony export fetchCharacterEpic */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootEpic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_interval__ = __webpack_require__("rxjs/observable/interval");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("rxjs/observable/of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("rxjs/operators");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_observable__ = __webpack_require__("redux-observable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_universal_rx_request__ = __webpack_require__("universal-rx-request");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_universal_rx_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_universal_rx_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__("./redux/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actionTypes__ = __webpack_require__("./redux/actionTypes.js");




 // because standard AjaxObservable only works in browser




var fetchUserEpic = function fetchUserEpic(action$, store) {
  return action$.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_redux_observable__["ofType"])(__WEBPACK_IMPORTED_MODULE_6__actionTypes__["d" /* START_FETCHING_CHARACTERS */]), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["mergeMap"])(function (action) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_interval__["interval"])(3000).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["mergeMap"])(function (x) {
      return __WEBPACK_IMPORTED_MODULE_5__actions__["a" /* fetchCharacter */]({
        isServer: store.getState().isServer
      });
    }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["takeUntil"])(action$.ofType(__WEBPACK_IMPORTED_MODULE_6__actionTypes__["e" /* STOP_FETCHING_CHARACTERS */])));
  }));
};

var fetchCharacterEpic = function fetchCharacterEpic(action$, store) {
  return action$.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_redux_observable__["ofType"])(__WEBPACK_IMPORTED_MODULE_6__actionTypes__["a" /* FETCH_CHARACTER */]), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["mergeMap"])(function (action) {
    return __WEBPACK_IMPORTED_MODULE_4_universal_rx_request___default()({
      url: 'https://swapi.co/api/people/' + store.getState().nextCharacterId
    }).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (response) {
      return __WEBPACK_IMPORTED_MODULE_5__actions__["c" /* fetchCharacterSuccess */](response.body, store.getState().isServer);
    }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (error) {
      return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_5__actions__["b" /* fetchCharacterFailure */](error.response.body, store.getState().isServer));
    }));
  }));
};

var rootEpic = Object(__WEBPACK_IMPORTED_MODULE_3_redux_observable__["combineEpics"])(fetchUserEpic, fetchCharacterEpic);

/***/ }),

/***/ "./redux/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_logger__ = __webpack_require__("redux-logger");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_observable__ = __webpack_require__("redux-observable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducer__ = __webpack_require__("./redux/reducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__epics__ = __webpack_require__("./redux/epics.js");







function initStore(initialState) {
  var epicMiddleware = Object(__WEBPACK_IMPORTED_MODULE_3_redux_observable__["createEpicMiddleware"])(__WEBPACK_IMPORTED_MODULE_5__epics__["a" /* rootEpic */]);
  var logger = Object(__WEBPACK_IMPORTED_MODULE_2_redux_logger__["createLogger"])({ collapsed: true }); // log every action to see what's happening behind the scenes.
  var reduxMiddleware = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a, epicMiddleware, logger);

  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */], initialState, reduxMiddleware);
};

/***/ }),

/***/ "./redux/reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__("./redux/actionTypes.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var INITIAL_STATE = {
  nextCharacterId: 1,
  character: {},
  isFetchedOnServer: false,
  error: null
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["c" /* FETCH_CHARACTER_SUCCESS */]:
      return _extends({}, state, {
        character: payload.response,
        isFetchedOnServer: payload.isServer,
        nextCharacterId: state.nextCharacterId + 1
      });
    case __WEBPACK_IMPORTED_MODULE_0__actionTypes__["b" /* FETCH_CHARACTER_FAILURE */]:
      return _extends({}, state, { error: payload.error, isFetchedOnServer: payload.isServer });
    default:
      return state;
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-observable":
/***/ (function(module, exports) {

module.exports = require("redux-observable");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "rxjs/observable/interval":
/***/ (function(module, exports) {

module.exports = require("rxjs/observable/interval");

/***/ }),

/***/ "rxjs/observable/of":
/***/ (function(module, exports) {

module.exports = require("rxjs/observable/of");

/***/ }),

/***/ "rxjs/operators":
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "universal-rx-request":
/***/ (function(module, exports) {

module.exports = require("universal-rx-request");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map