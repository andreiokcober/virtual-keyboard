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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var _modules_virtual_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/virtual-keyboard */ \"./src/modules/virtual-keyboard.js\");\n/* harmony import */ var _modules_main_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/main-container */ \"./src/modules/main-container.js\");\n/* harmony import */ var _modules_textArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/textArea */ \"./src/modules/textArea.js\");\n/* harmony import */ var _modules_description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/description */ \"./src/modules/description.js\");\n/* harmony import */ var _modules_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/item */ \"./src/modules/item.js\");\n\n\n\n\n\n\n\n\n\nvar mainContainer = new _modules_main_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nvar textArea = new _modules_textArea__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\nvar descriptionText = new _modules_description__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\nvar keyboard = new _modules_virtual_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nvar main = mainContainer.createElement();\nvar clickMouse = false;\nvar capsLock = false;\ndocument.body.append(main);\nmain.append(textArea.createElement());\nmain.append(keyboard.createElement());\nmain.append(descriptionText.createElement());\ndocument.addEventListener('keydown', function (e) {\n  e.preventDefault();\n  clickMouse = false;\n  capsLock = true;\n  var elem = document.getElementById(\"\".concat(e.code));\n  (0,_modules_item__WEBPACK_IMPORTED_MODULE_6__.clickItem)(elem, clickMouse, capsLock);\n});\ndocument.addEventListener('keyup', function (e) {\n  e.preventDefault();\n  clickMouse = false;\n  capsLock = false;\n  var elem = document.getElementById(\"\".concat(e.code));\n\n  if (elem.dataset.item === 'CapsLock' & capsLock == false) {\n    (0,_modules_item__WEBPACK_IMPORTED_MODULE_6__.itemToUpperCase)();\n    elem.classList.remove('bg-caps');\n    elem.classList.add('clickItem');\n  } else {\n    elem.classList.remove('clickItem');\n  }\n\n  if (elem.dataset.item === 'shift') {\n    (0,_modules_item__WEBPACK_IMPORTED_MODULE_6__.itemToUpperCase)();\n    (0,_modules_item__WEBPACK_IMPORTED_MODULE_6__.itemToUpperCaseShift)();\n  }\n});\ndocument.addEventListener('click', function (e) {\n  if (e.target.classList.contains('item')) {\n    e.preventDefault();\n    clickMouse = true;\n    var idElem = e.target.id;\n    var elem = document.getElementById(\"\".concat(idElem));\n\n    if (elem.dataset.item === 'CapsLock' & !elem.classList.contains('bg-caps')) {\n      elem.classList.add('bg-caps');\n      (0,_modules_item__WEBPACK_IMPORTED_MODULE_6__.itemToUpperCase)();\n    } else if (elem.dataset.item === 'CapsLock' & elem.classList.contains('bg-caps')) {\n      console.log('good');\n      (0,_modules_item__WEBPACK_IMPORTED_MODULE_6__.itemToUpperCase)();\n      elem.classList.remove('bg-caps');\n      elem.classList.add('clickItem');\n    }\n\n    (0,_modules_item__WEBPACK_IMPORTED_MODULE_6__.clickItem)(elem, clickMouse);\n  }\n});\n\n//# sourceURL=webpack://keyboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/description.js":
/*!************************************!*\
  !*** ./src/modules/description.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DescriptionText)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar DescriptionText = /*#__PURE__*/function () {\n  function DescriptionText() {\n    _classCallCheck(this, DescriptionText);\n\n    this.el = document.createElement('div');\n  }\n\n  _createClass(DescriptionText, [{\n    key: \"createElement\",\n    value: function createElement() {\n      this.el.innerHTML = \"<h2>\\n          \\u041A\\u043B\\u0430\\u0432\\u0438\\u0430\\u0442\\u0443\\u0440\\u0430 \\u0441\\u043E\\u0437\\u0434\\u0430\\u043D\\u0430 \\u0432 \\u043E\\u043F\\u0435\\u0440\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u043E\\u0439 \\u0441\\u0438\\u0441\\u0442\\u0435\\u043C\\u0435 macOS\\n        </h2>\\n        <h2>\\u0414\\u043B\\u044F \\u043F\\u0435\\u0440\\u0435\\u043A\\u043B\\u044E\\u0447\\u0435\\u043D\\u0438\\u044F \\u044F\\u0437\\u044B\\u043A\\u0430 \\u043A\\u043E\\u043C\\u0431\\u0438\\u043D\\u0430\\u0446\\u0438\\u044F: \\u043B\\u0435\\u0432\\u044B\\u0435 shift + option</h2>\";\n      return this.el;\n    }\n  }]);\n\n  return DescriptionText;\n}();\n\n\n\n//# sourceURL=webpack://keyboard/./src/modules/description.js?");

/***/ }),

/***/ "./src/modules/item.js":
/*!*****************************!*\
  !*** ./src/modules/item.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickItem\": () => (/* binding */ clickItem),\n/* harmony export */   \"itemToUpperCase\": () => (/* binding */ itemToUpperCase),\n/* harmony export */   \"itemToUpperCaseShift\": () => (/* binding */ itemToUpperCaseShift)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction clickItem(event, clickMouse) {\n  var capsLock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var inputText = document.querySelector('#inputText');\n  var backSpace = document.getElementById('CapsLock');\n  var backSpaceUp = backSpace.classList.contains('bg-caps');\n  var valueItem = backSpaceUp ? event.textContent.toUpperCase() : event.textContent;\n  var item = event.classList.contains('item');\n\n  if (item) {\n    event.classList.add('clickItem');\n  }\n\n  if (event.classList.contains('false') !== true) {\n    inputText.value += valueItem;\n  }\n\n  if (event.dataset.item === 'shift') {\n    itemToUpperCase();\n    itemToUpperCaseShift();\n  }\n\n  if (event.dataset.item === 'Backspace') {\n    var arr = inputText.value.split('');\n    arr.pop();\n    inputText.value = arr.join('');\n  }\n\n  if (event.dataset.item === 'Tab') {\n    var tab = ' ' + ' ' + ' ' + ' ';\n    inputText.value += tab;\n  }\n\n  if (event.dataset.item === 'Enter') {\n    var entr = '\\n';\n    inputText.value += entr;\n  }\n\n  if (event.classList.contains('back-slash')) {\n    inputText.value += valueItem;\n  }\n\n  if (event.dataset.item === 'CapsLock' & capsLock) {\n    itemToUpperCase();\n    event.classList.add('bg-caps');\n    event.addEventListener('animationend', function () {\n      event.classList.remove('clickItem');\n    });\n  }\n\n  if (clickMouse) {\n    event.addEventListener('animationend', function () {\n      event.classList.remove('clickItem');\n    });\n  }\n}\nfunction itemToUpperCase() {\n  var lock = document.querySelectorAll('.lock');\n\n  var _iterator = _createForOfIteratorHelper(lock),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var i = _step.value;\n\n      if (i.classList.contains('lock') & i.classList.contains('Up') === false) {\n        i.classList.add('Up');\n      } else {\n        i.classList.remove('Up');\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\nfunction itemToUpperCaseShift() {\n  var shiftItem = document.querySelectorAll('.shift-rule');\n\n  var _iterator2 = _createForOfIteratorHelper(shiftItem),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var i = _step2.value;\n      var item = i.querySelectorAll('span');\n\n      var _iterator3 = _createForOfIteratorHelper(item),\n          _step3;\n\n      try {\n        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n          var b = _step3.value;\n\n          if (b.classList.contains('hidden')) {\n            b.classList.remove('hidden');\n          } else {\n            b.classList.add('hidden');\n          }\n        }\n      } catch (err) {\n        _iterator3.e(err);\n      } finally {\n        _iterator3.f();\n      }\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n}\n\n//# sourceURL=webpack://keyboard/./src/modules/item.js?");

/***/ }),

/***/ "./src/modules/main-container.js":
/*!***************************************!*\
  !*** ./src/modules/main-container.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainContainer)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar MainContainer = /*#__PURE__*/function () {\n  function MainContainer() {\n    _classCallCheck(this, MainContainer);\n\n    this.el = document.createElement('div');\n  }\n\n  _createClass(MainContainer, [{\n    key: \"createElement\",\n    value: function createElement() {\n      this.el.classList.add('main');\n      return this.el;\n    }\n  }]);\n\n  return MainContainer;\n}();\n\n\n\n//# sourceURL=webpack://keyboard/./src/modules/main-container.js?");

/***/ }),

/***/ "./src/modules/textArea.js":
/*!*********************************!*\
  !*** ./src/modules/textArea.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TetArea)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar TetArea = /*#__PURE__*/function () {\n  function TetArea() {\n    _classCallCheck(this, TetArea);\n\n    this.el = document.createElement('div');\n  }\n\n  _createClass(TetArea, [{\n    key: \"createElement\",\n    value: function createElement() {\n      this.el.classList.add('main_text');\n      this.el.innerHTML = \"<textarea name=\\\"\\\" id=\\\"inputText\\\" cols=\\\"75\\\" rows=\\\"11\\\"></textarea>\";\n      return this.el;\n    }\n  }]);\n\n  return TetArea;\n}();\n\n\n\n//# sourceURL=webpack://keyboard/./src/modules/textArea.js?");

/***/ }),

/***/ "./src/modules/virtual-keyboard.js":
/*!*****************************************!*\
  !*** ./src/modules/virtual-keyboard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Keyboard)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Keyboard = /*#__PURE__*/function () {\n  function Keyboard(id) {\n    _classCallCheck(this, Keyboard);\n\n    this.inputId = id;\n    this.el = document.createElement('div');\n  }\n\n  _createClass(Keyboard, [{\n    key: \"createElement\",\n    value: function createElement() {\n      var backQuote = '`';\n      var backSlash = '\\\\';\n      this.el.classList.add('virtual-keyboard');\n      this.el.innerHTML = \"\\n      <div class=\\\"virtual-keyboard-str\\\">\\n        <div class=\\\"item\\\" id=\\\"Backquote\\\">\".concat(backQuote, \"</div>\\n        <div class=\\\"item shift-rule\\\" id=\\\"Digit1\\\"><span>1</span><span class=\\\"hidden shift\\\">!</span></div>\\n        <div class=\\\"item shift-rule\\\" id=\\\"Digit2\\\"><span>2</span><span class=\\\"hidden shift\\\">@</span></div>\\n        <div class=\\\"item shift-rule\\\" id=\\\"Digit3\\\"><span>3</span><span class=\\\"hidden shift\\\">#</span></div>\\n        <div class=\\\"item shift-rule\\\" id=\\\"Digit4\\\"><span>4</span><span class=\\\"hidden shift\\\">$</span></div>\\n        <div class=\\\"item shift-rule\\\" id=\\\"Digit5\\\"><span>5</span><span class=\\\"hidden shift\\\">%</span></div>\\n        <div class=\\\"item shift-rule\\\" id=\\\"Digit6\\\"><span>6</span><span class=\\\"hidden shift\\\">^</span></div>\\n        <div class=\\\"item shift-rule\\\" id=\\\"Digit7\\\"><span>7</span><span class=\\\"hidden shift\\\">&</span></div>\\n        <div class=\\\"item shift-rule\\\" id=\\\"Digit8\\\"><span>8</span><span class=\\\"hidden shift\\\">*</span></div>\\n        <div class=\\\"item shift-rule\\\" id=\\\"Digit8\\\"><span>9</span><span class=\\\"hidden shift\\\">(</span></div>\\n        <div class=\\\"item shift-rule\\\" id=\\\"Digit0\\\"><span>0</span><span class=\\\"hidden shift\\\">)</span></div>\\n        <div class=\\\"item shift-rule\\\" id=\\\"Minus\\\"><span>-</span><span class=\\\"hidden shift\\\">_</span></div>\\n        <div class=\\\"item shift-rule\\\" id=\\\"Equal\\\"><span>=</span><span class=\\\"hidden shift\\\">+</span></div>\\n        <div class=\\\"item button-key false\\\" data-item=\\\"Backspace\\\" id=\\\"Backspace\\\">delete</div>\\n      </div>\\n      <div class=\\\"virtual-keyboard-str\\\">\\n        <div class=\\\"item tab button-key false\\\" data-item=\\\"Tab\\\" id=\\\"Tab\\\">tab</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyQ\\\">q</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyW\\\">w</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyE\\\">e</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyR\\\">r</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyT\\\">t</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyY\\\">y</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyU\\\">u</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyI\\\">i</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyO\\\">o</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyP\\\">p</div>\\n        <div class=\\\"item shift-rule\\\" id=\\\"BracketLeft\\\"><span>[</span><span class=\\\"hidden shift\\\">{</span></div>\\n        <div class=\\\"item shift-rule\\\" id=\\\"BracketRight\\\"><span>]</span><span class=\\\"hidden shift\\\">}</span></div>\\n        <div class=\\\"item false back-slash\\\" id=\\\"Backslash\\\">\").concat(backSlash, \"</div>\\n      </div>\\n      <div class=\\\"virtual-keyboard-str\\\">\\n        <div class=\\\"item caps-lock button-key false\\\" data-item=\\\"CapsLock\\\" id=\\\"CapsLock\\\">caps lock</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyA\\\">a</div>\\n        <div class=\\\"item lock lock\\\" id=\\\"KeyS\\\">s</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyD\\\">d</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyF\\\">f</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyG\\\">g</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyH\\\">h</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyJ\\\">j</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyK\\\">k</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyL\\\">l</div>\\n        <div class=\\\"item shift-rule\\\" id=\\\"Semicolon\\\"><span>;</span><span class=\\\"hidden shift\\\">:</span></div>\\n        <div class=\\\"item shift-rule\\\" id=\\\"Quote\\\"><span>'</span><span class=\\\"hidden shift\\\">\\\"</span></div>\\n        <div class=\\\"item return button-key false\\\" data-item=\\\"Enter\\\" id=\\\"Enter\\\">return</div>\\n      </div>\\n      <div class=\\\"virtual-keyboard-str\\\">\\n        <div class=\\\"item shift-left button-key false\\\" id=\\\"ShiftLeft\\\" data-item=\\\"shift\\\">shift</div>\\n        <div class=\\\"item  lock\\\" id=\\\"KeyZ\\\">z</div>\\n        <div class=\\\"item  lock\\\" id=\\\"KeyX\\\">x</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyC\\\">c</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyV\\\">v</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyB\\\">b</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyN\\\">n</div>\\n        <div class=\\\"item lock\\\" id=\\\"KeyM\\\">m</div>\\n        <div class=\\\"item shift-rule\\\" id=\\\"Comma\\\"><span>,</span><span class=\\\"hidden shift\\\"><</span></div>\\n        <div class=\\\"item shift-rule\\\" id=\\\"Period\\\"><span>.</span><span class=\\\"hidden shift\\\">></span></div>\\n        <div class=\\\"item shift-rule\\\" id=\\\"Slash\\\"><span>/</span><span class=\\\"hidden shift\\\">?</span></div>\\n        <div class=\\\"item shift-right button-key false\\\" id=\\\"ShiftRight\\\" data-item=\\\"shift\\\">shift</div>\\n      </div>\\n      <div class=\\\"virtual-keyboard-str\\\">\\n        <div class=\\\"item false button-key\\\" id=\\\"ControlLeft\\\">control</div>\\n        <div class=\\\"item false button-key\\\" id=\\\"AltLeft\\\">option</div>\\n        <div class=\\\"item command false button-key\\\" id=\\\"MetaLeft\\\">command</div>\\n        <div class=\\\"item probel\\\" id=\\\"Space\\\"> </div>\\n        <div class=\\\"item command false button-key\\\" id=\\\"MetaRight\\\">command</div>\\n        <div class=\\\"item false button-key\\\" id=\\\"AltRight\\\">option</div>\\n        <div class=\\\"str-container\\\">\\n          <div class=\\\"item str str-key\\\" id=\\\"ArrowLeft\\\">&#9668</div>\\n          <div class=\\\"str-container-center\\\">\\n            <div class=\\\"item str-key\\\" id=\\\"ArrowUp\\\">&#9650</div>\\n            <div class=\\\"item str-key\\\" id=\\\"ArrowDown\\\">&#9660</div>\\n          </div>\\n          <div class=\\\"item str str-key\\\" id=\\\"ArrowRight\\\">&#9658</div>\\n        </div>\\n      </div>\");\n      return this.el;\n    }\n  }]);\n\n  return Keyboard;\n}();\n\n\n\n//# sourceURL=webpack://keyboard/./src/modules/virtual-keyboard.js?");

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