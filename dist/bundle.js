/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var _modules_virtual_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/virtual-keyboard */ \"./src/modules/virtual-keyboard.js\");\n/* harmony import */ var _modules_main_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/main-container */ \"./src/modules/main-container.js\");\n/* harmony import */ var _modules_textArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/textArea */ \"./src/modules/textArea.js\");\n/* harmony import */ var _modules_description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/description */ \"./src/modules/description.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\nvar mainContainer = new _modules_main_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nvar textArea = new _modules_textArea__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\nvar descriptionText = new _modules_description__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\ndescriptionText.createElement();\nvar mainCont = document.querySelector('.main');\nvar inputText = document.querySelector('#inputText');\nmainCont.append(descriptionText.createElement());\nvar keyboard = new _modules_virtual_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"](inputText);\ndocument.addEventListener('keydown', function (e) {\n  console.log(e.code);\n  var elem = document.getElementById(\"\".concat(e.code));\n  serfItem(elem);\n});\n\nfunction serfItem(event) {\n  var inputValue = inputText.value;\n  var valueItem = event.textContent;\n\n  if (event.classList.contains('false') !== true) {\n    inputText.value += valueItem;\n  }\n\n  if (event.dataset.item === 'Backspace') {\n    var arr = inputText.value.split('');\n    arr.pop();\n    inputText.value = arr.join('');\n  }\n\n  if (event.dataset.item === 'Tab') {\n    var tab = ' ' + ' ' + ' ' + ' ';\n    inputText.value += tab;\n  }\n\n  if (event.dataset.item === 'Enter') {\n    var entr = '\\n';\n    inputText.value += entr;\n  }\n\n  if (event.dataset.item === 'CapsLock') {\n    var lock = document.querySelectorAll('.lock');\n\n    var _iterator = _createForOfIteratorHelper(lock),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var i = _step.value;\n\n        if (i.classList.contains('lock') & i.classList.contains('Up') === false) {\n          i.classList.add('Up');\n        } else if (i.classList.contains('Up')) {\n          i.classList.remove('Up');\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    if (event.classList.contains('bg-caps')) {\n      event.classList.remove('bg-caps');\n    } else {\n      event.classList.add('bg-caps');\n    }\n  }\n\n  var item = event.classList.contains('item');\n\n  if (item) {\n    event.classList.add('clickItem');\n  } else {}\n\n  event.addEventListener('animationend', function () {\n    event.classList.remove('clickItem');\n  });\n}\n\n//# sourceURL=webpack://keyboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/description.js":
/*!************************************!*\
  !*** ./src/modules/description.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DescriptionText)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar DescriptionText = /*#__PURE__*/function () {\n  function DescriptionText() {\n    _classCallCheck(this, DescriptionText);\n\n    this.el = this.createElement();\n  }\n\n  _createClass(DescriptionText, [{\n    key: \"createElement\",\n    value: function createElement() {\n      var el = document.createElement('div');\n      el.innerHTML = \"<h2>\\n          \\u041A\\u043B\\u0430\\u0432\\u0438\\u0430\\u0442\\u0443\\u0440\\u0430 \\u0441\\u043E\\u0437\\u0434\\u0430\\u043D\\u0430 \\u0432 \\u043E\\u043F\\u0435\\u0440\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u043E\\u0439 \\u0441\\u0438\\u0441\\u0442\\u0435\\u043C\\u0435 Windows\\n        </h2>\\n        <h2>\\u0414\\u043B\\u044F \\u043F\\u0435\\u0440\\u0435\\u043A\\u043B\\u044E\\u0447\\u0435\\u043D\\u0438\\u044F \\u044F\\u0437\\u044B\\u043A\\u0430 \\u043A\\u043E\\u043C\\u0431\\u0438\\u043D\\u0430\\u0446\\u0438\\u044F: \\u043B\\u0435\\u0432\\u044B\\u0435 shift + alt</h2>\";\n      return el;\n    }\n  }]);\n\n  return DescriptionText;\n}();\n\n\n\n//# sourceURL=webpack://keyboard/./src/modules/description.js?");

/***/ }),

/***/ "./src/modules/main-container.js":
/*!***************************************!*\
  !*** ./src/modules/main-container.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainContainer)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar MainContainer = /*#__PURE__*/function () {\n  function MainContainer() {\n    _classCallCheck(this, MainContainer);\n\n    this.el = this.createElement();\n  }\n\n  _createClass(MainContainer, [{\n    key: \"createElement\",\n    value: function createElement() {\n      var el = document.createElement('div');\n      el.classList.add('main');\n      document.body.append(el);\n      return el;\n    }\n  }]);\n\n  return MainContainer;\n}();\n\n\n\n//# sourceURL=webpack://keyboard/./src/modules/main-container.js?");

/***/ }),

/***/ "./src/modules/textArea.js":
/*!*********************************!*\
  !*** ./src/modules/textArea.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TetArea)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar TetArea = /*#__PURE__*/function () {\n  function TetArea() {\n    _classCallCheck(this, TetArea);\n\n    this.el = this.createElement();\n  }\n\n  _createClass(TetArea, [{\n    key: \"createElement\",\n    value: function createElement() {\n      var el = document.createElement('div');\n      el.classList.add('main_text');\n      el.innerHTML = \"<textarea name=\\\"\\\" id=\\\"inputText\\\" cols=\\\"65\\\" rows=\\\"10\\\"></textarea>\";\n      document.querySelector('.main').insertAdjacentElement('afterbegin', el);\n    }\n  }]);\n\n  return TetArea;\n}();\n\n\n\n//# sourceURL=webpack://keyboard/./src/modules/textArea.js?");

/***/ }),

/***/ "./src/modules/virtual-keyboard.js":
/*!*****************************************!*\
  !*** ./src/modules/virtual-keyboard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Keyboard)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Keyboard = /*#__PURE__*/function () {\n  function Keyboard(id) {\n    _classCallCheck(this, Keyboard);\n\n    this.inputId = id;\n    this.el = this.createElement();\n    this.setEventHandlers();\n  }\n\n  _createClass(Keyboard, [{\n    key: \"createElement\",\n    value: function createElement() {\n      var el = document.createElement('div');\n      el.classList.add('virtual-keyboard');\n      el.innerHTML = \"<div class=\\\"virtual-keyboard-str\\\">\\n          <div class=\\\"item\\\"></div>\\n          <div class=\\\"item\\\" id=\\\"Digit1\\\">1</div>\\n          <div class=\\\"item\\\" id=\\\"Digit2\\\">2</div>\\n          <div class=\\\"item\\\" id=\\\"Digit3\\\">3</div>\\n          <div class=\\\"item\\\" id=\\\"Digit4\\\">4</div>\\n          <div class=\\\"item\\\" id=\\\"Digit5\\\">5</div>\\n          <div class=\\\"item\\\" id=\\\"Digit6\\\">6</div>\\n          <div class=\\\"item\\\" id=\\\"Digit7\\\">7</div>\\n          <div class=\\\"item\\\" id=\\\"Digit8\\\">9</div>\\n          <div class=\\\"item\\\" id=\\\"Digit0\\\">0</div>\\n          <div class=\\\"item\\\" id=\\\"Minus\\\">-</div>\\n          <div class=\\\"item\\\" id=\\\"Equal\\\">=</div>\\n          <div class=\\\"item false\\\" data-item=\\\"Backspace\\\" id=\\\"Backspace\\\">Backspace</div>\\n        </div>\\n        <div class=\\\"virtual-keyboard-str\\\">\\n          <div class=\\\"item false\\\" data-item=\\\"Tab\\\" id=\\\"Tab\\\">Tab</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyQ\\\">q</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyW\\\">w</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyE\\\">e</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyR\\\">r</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyT\\\">t</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyY\\\">y</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyU\\\">u</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyI\\\">i</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyO\\\">o</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyP\\\">p</div>\\n          <div class=\\\"item\\\" id=\\\"BracketLeft\\\">[</div>\\n          <div class=\\\"item\\\" id=\\\"BracketRight\\\">]</div>\\n          <div class=\\\"item\\\"></div>\\n          <div class=\\\"item false\\\" id=\\\"Delete\\\">Del</div>\\n        </div>\\n        <div class=\\\"virtual-keyboard-str\\\">\\n          <div class=\\\"item false\\\" data-item=\\\"CapsLock\\\" id=\\\"CapsLock\\\">CapsLock</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyA\\\">a</div>\\n          <div class=\\\"item lock lock\\\" id=\\\"Keys\\\">s</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyD\\\">d</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyF\\\">f</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyG\\\">g</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyH\\\">h</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyJ\\\">j</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyK\\\">k</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyL\\\">l</div>\\n          <div class=\\\"item\\\" id=\\\"Semicolon\\\">;</div>\\n          <div class=\\\"item\\\" id=\\\"Quote\\\">'</div>\\n          <div class=\\\"item false\\\" data-item=\\\"Enter\\\" id=\\\"Enter\\\">Enter</div>\\n        </div>\\n        <div class=\\\"virtual-keyboard-str\\\">\\n          <div class=\\\"item false\\\" id=\\\"ShiftLeft\\\">Shift</div>\\n          <div class=\\\"item  lock\\\" id=\\\"KeyZ\\\">z</div>\\n          <div class=\\\"item  lock\\\" id=\\\"KeyX\\\">x</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyC\\\">c</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyV\\\">v</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyB\\\">b</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyN\\\">n</div>\\n          <div class=\\\"item lock\\\" id=\\\"KeyM\\\">m</div>\\n          <div class=\\\"item\\\" id=\\\"Comma\\\">,</div>\\n          <div class=\\\"item\\\" id=\\\"Period\\\">.</div>\\n          <div class=\\\"item\\\" id=\\\"Slash\\\">/</div>\\n          <div class=\\\"item\\\" id=\\\"ArrowUp\\\">&#8593</div>\\n          <div class=\\\"item false\\\" id=\\\"ShiftRight\\\">Shift</div>\\n        </div>\\n        <div class=\\\"virtual-keyboard-str\\\">\\n          <div class=\\\"item false\\\" id=\\\"ControlLeft\\\">Ctrl</div>\\n          <div class=\\\"item false\\\" id=\\\"MetaLeft\\\">Win</div>\\n          <div class=\\\"item false\\\" id=\\\"AltLeft\\\">Alt</div>\\n          <div class=\\\"item probel\\\" id=\\\"Space\\\"> </div>\\n          <div class=\\\"item false\\\" id=\\\"AltRight\\\">Alt</div>\\n          <div class=\\\"item false\\\" id=\\\"ControlRight\\\">Ctrl</div>\\n          <div class=\\\"item str\\\" id=\\\"ArrowLeft\\\">&#8596</div>\\n          <div class=\\\"item\\\" id=\\\"ArrowDown\\\">&#8595</div>\\n          <div class=\\\"item str\\\" id=\\\"ArrowRight\\\">&#8596</div>\\n      </div>\";\n      document.querySelector('.main').append(el);\n      return el;\n    }\n  }, {\n    key: \"setEventHandlers\",\n    value: function setEventHandlers() {\n      this.el.addEventListener('click', function surItem(event) {\n        var inputValue = this.inputId.value;\n        var valueItem = event.target.textContent;\n\n        if (event.target.classList.contains('false') !== true) {\n          this.inputId.value += valueItem;\n        }\n\n        if (event.target.dataset.item === 'Backspace') {\n          var arr = this.inputId.value.split('');\n          arr.pop();\n          this.inputId.value = arr.join('');\n        }\n\n        if (event.target.dataset.item === 'Tab') {\n          var tab = ' ' + ' ' + ' ' + ' ';\n          this.inputId.value += tab;\n        }\n\n        if (event.target.dataset.item === 'Enter') {\n          var entr = '\\n';\n          this.inputId.value += entr;\n        }\n\n        if (event.target.dataset.item === 'CapsLock') {\n          var lock = document.querySelectorAll('.lock');\n\n          var _iterator = _createForOfIteratorHelper(lock),\n              _step;\n\n          try {\n            for (_iterator.s(); !(_step = _iterator.n()).done;) {\n              var i = _step.value;\n\n              if (i.classList.contains('lock') & i.classList.contains('Up') === false) {\n                i.classList.add('Up');\n              } else if (i.classList.contains('Up')) {\n                i.classList.remove('Up');\n              }\n            }\n          } catch (err) {\n            _iterator.e(err);\n          } finally {\n            _iterator.f();\n          }\n\n          if (event.target.classList.contains('bg-caps')) {\n            event.target.classList.remove('bg-caps');\n          } else {\n            event.target.classList.add('bg-caps');\n          }\n        }\n\n        var item = event.target.classList.contains('item');\n\n        if (item) {\n          event.target.classList.add('clickItem');\n        } else {}\n\n        event.target.addEventListener('animationend', function () {\n          event.target.classList.remove('clickItem');\n        });\n      }.bind(this));\n    }\n  }]);\n\n  return Keyboard;\n}();\n\n\n\n//# sourceURL=webpack://keyboard/./src/modules/virtual-keyboard.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://keyboard/./src/scss/index.scss?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://keyboard/./src/css/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;