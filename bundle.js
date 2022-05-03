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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/direction_icon.png */ \"./src/direction_icon.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);\\n}\\n\\nbody{\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background-color: rgb(225, 209, 187);\\n}\\n\\n.toggle{\\n  position: fixed;\\n  top: 15px;\\n  background-color: whitesmoke;\\n  width: 50px;\\n  height: 50px;\\n  left: calc(50% - 550px);\\n  border-radius: 10px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n}\\n\\n.toggle:hover{\\n  cursor: pointer;\\n}\\n\\n.ship-area{\\n  position: fixed;\\n  height: 80px;\\n  width: 900px;\\n  background-color: rgb(121, 76, 76);\\n  top: 0;\\n  border-radius: 10px;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\\n  align-items: center;\\n  justify-items: center;\\n}\\n\\n.ship-area > div{\\n  background-color: white;\\n  height: 45px;\\n  width: 90px;\\n}\\n\\n.playground{\\n  width: 1160px;\\n  height: 580px;\\n  background-color: gainsboro;\\n  margin-top: 9%;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n}\\n\\n.playground > *{\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.player-side{\\n  background-color: cadetblue;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 10px;\\n}\\n\\n.player-side > div{\\n  height: 60px;\\n  width: 60px;\\n  margin: 5px;\\n  background-color: white;\\n}\\n\\n.player-side > .water{\\n  background-color: rgb(143, 233, 203);\\n}\\n\\n.player-side > .patrolBoat{\\n  background: linear-gradient(rgb(247, 234, 137), rgb(169, 133, 213));\\n}\\n\\n.player-side > .carrier{\\n  background: linear-gradient(rgb(119, 87, 87), rgb(44, 44, 67));\\n}\\n\\n.player-side > .battleship{\\n  background: linear-gradient(rgb(188, 154, 126), rgb(84, 84, 183));\\n}\\n\\n.player-side > .destroyer{\\n  background: linear-gradient(rgb(245, 165, 94), rgb(123, 87, 150));\\n}\\n\\n.player-side > .submarine{\\n  background: linear-gradient(rgb(108, 52, 52), rgb(153, 153, 236));\\n}\\n\\n.player-side > .hit{\\n  background: none;\\n  background-color: red;\\n}\\n\\n.computer-side{\\n  padding: 10px;\\n  background-color: rgb(201, 109, 76);\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n.computer-side > div{\\n  height: 60px;\\n  width: 60px;\\n  margin: 5px;\\n  background-color: rgb(246, 243, 243);\\n}\\n\\n.computer-side > div:hover{\\n  cursor: crosshair;\\n}\\n\\n.computer-side > .hit:hover{\\n  cursor: crosshair;\\n}\\n\\n.computer-side > .hit{\\n  background-color: red;\\n  scale: 0.90;\\n}\\n\\n\\n.selected{\\n  background-color: orange !important;\\n}\\n\\n\\n.computer-side > .patrolBoat{\\n  background-color:rgb(84, 84, 183);\\n}\\n\\n.computer-side > .carrier{\\n  background-color: green;\\n}\\n\\n.computer-side > .battleship{\\n  background-color: orange;\\n}\\n\\n.computer-side > .destroyer{\\n  background-color:rgb(143, 233, 203);\\n}\\n\\n.computer-side > .submarine{\\n  background-color: black;\\n}\\n\\n.miss{\\n  background-color: rgba(179, 170, 170, 0.474) !important;\\n}\\n\\n.sunk{\\n  opacity: 0.5 !important;\\n  scale: 0.5 !important;\\n}\\n\\n.ship-area div{\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-family: monospace;\\n  font-weight: 500;\\n  border-radius: 5%;\\n  background-color: whitesmoke;\\n}\\n\\n.ship-area div:hover{\\n  cursor: pointer;\\n}\\n\\n.ship-area .chosen{\\n  background-color: grey;\\n  scale: 0.8;\\n}\\n\\n.grey-out{\\n  position: absolute;\\n  display: none;\\n  width: 100%;\\n  height: 100%;\\n  top: 0;\\n  background-color: rgba(179, 170, 170, 0.6);\\n}\\n\\n.pop-up{\\n  position: absolute;\\n  width: 600px;\\n  height: 400px;\\n  top: 20%;\\n  background-color: burlywood;\\n  display: none;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n  border-radius: 5%;\\n}\\n\\n.ok{\\n  background-color: lightgoldenrodyellow;\\n  font-family: monospace;\\n  margin-top: 4rem;\\n  padding: 5px;\\n}\\n\\n.ok:hover{\\n  cursor: pointer;\\n}\\n\\n.end{\\n  font-family: monospace;\\n  text-shadow: 2px 2px blanchedalmond;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"alreadyPlacedShipHuman\": () => (/* binding */ alreadyPlacedShipHuman),\n/* harmony export */   \"pcBoardEvListeners\": () => (/* binding */ pcBoardEvListeners),\n/* harmony export */   \"randomShips\": () => (/* binding */ randomShips),\n/* harmony export */   \"renderComputerBoard\": () => (/* binding */ renderComputerBoard),\n/* harmony export */   \"renderHumanBoard\": () => (/* binding */ renderHumanBoard),\n/* harmony export */   \"renderHumanShips\": () => (/* binding */ renderHumanShips),\n/* harmony export */   \"restartGame\": () => (/* binding */ restartGame)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n\n\n\n\n//win message area\nconst greyOut = document.createElement('div');\nconst popUp = document.createElement('div');\nconst okButton = document.createElement('button');\nconst endMessage = document.createElement('h1');\nendMessage.classList.add('end');\nendMessage.textContent = \"Ya won bud\";\nokButton.classList.add('ok');\nokButton.textContent = \"Ok, restart\";\npopUp.append(endMessage, okButton);\ngreyOut.classList.add('grey-out');\npopUp.classList.add('pop-up');\ndocument.body.append(greyOut, popUp);\nokButton.addEventListener('click', ()=>{\n    greyOut.style.display = \"none\";\n    popUp.style.display = \"none\";\n    (0,_game__WEBPACK_IMPORTED_MODULE_0__.newGame)();\n});\n//\n\nconst playerSide = document.querySelector('.player-side');\nconst computerSide = document.querySelector('.computer-side');\nconst shipArea = document.querySelector('.ship-area');\nconst toggle = document.querySelector('.toggle');\n\nlet currentShip = \"\";\nlet alreadyPlacedShipHuman = [];\nlet alreadyPlacedShipAI = [];\nlet shipDirection = \"horizontal\";\nlet bool = false;\nconst clickEvent = new Event('click');\n\nconst updateShips = function(){\n    alreadyPlacedShipHuman.forEach(ship => document.querySelector(`.ship-area .${ship}`).classList.add('chosen'));\n};\n\nfunction pcBoardEvListeners(players){\n    const pcBoard = [...computerSide.children];\n    pcBoard.forEach(cell =>{\n        cell.addEventListener('click', (e)=>attackAttempt(e.target, players));\n    });\n    computerSide.style.display = \"none\";\n};\n\nconst randomShips = function(players){\n    const ships = players.AI.myBoard.returnShips();\n    for(let i = 0; i<ships.length; i++){\n        let coord = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.generateRandomCoordinate)();\n        const cell = computerSide.querySelector(`[data-coordinate=${coord}]`);\n        let length = ships[i].showLength();\n        placeShipsRandomlyDOM(cell, length, ships[i].showName(), i, players);\n        while(bool == false && alreadyPlacedShipAI.length<5){\n            let newCoord = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.generateRandomCoordinate)();\n            let newCell = computerSide.querySelector(`[data-coordinate=${newCoord}]`);\n            placeShipsRandomlyDOM(newCell, length, ships[i].showName(), i, players);\n        };\n        toggle.dispatchEvent(clickEvent);\n    };\n};\n\nfunction placeShipsRandomlyDOM(cell, length, ship, index, players){\n    bool = false;\n    let array = selectSurroundingAreas(cell, length);\n    if(checkForBoatsRandom(players, array)){\n        insertShipRandom(array, index, players);\n        alreadyPlacedShipAI.push(ship);\n        bool = true;\n    };\n};\n\nfunction checkForBoatsRandom(players, array){\n    const checker = (coord) => players.AI.myBoard.returnBoard()[coord].length < 9;\n    let checkVal = array.every(checker);\n    return checkVal;\n};\n\nfunction insertShipRandom(array,index,players){\n    players.AI.myBoard.placeShip(array, index)\n};\n\nfunction attackAttempt(cell, players){\n        if(players.humanPlayer.showTurn()==true){\n            players.AI.myBoard.receiveAttack(`${cell.dataset.coordinate}`);\n            cell.className = players.AI.myBoard.returnBoard()[cell.dataset.coordinate];\n            for(let i = 0; i<Object.keys(players.AI.myBoard.returnBoard()).length; i++){\n                if(players.AI.myBoard.returnBoard()[Object.keys(players.AI.myBoard.returnBoard())[i]].includes('sunk')){\n                    let newCell = computerSide.querySelector(`[data-coordinate=${Object.keys(players.AI.myBoard.returnBoard())[i]}]`);\n                    newCell.classList.add('sunk');\n                };\n            };\n            if(players.AI.myBoard.allSunk()){\n                endMessage.textContent = \"Ya won bud\";\n                greyOut.style.display = \"flex\";\n                popUp.style.display = \"flex\";\n            };\n            computerStrikesBack(players);\n        };\n};\n\nfunction computerStrikesBack(players){\n    setTimeout(() => {\n        const move = players.AI.nextMove(players.AI.movePool, players.AI);\n        players.humanPlayer.myBoard.receiveAttack(move);\n        playerSide.querySelector(`[data-coordinate=${move}]`).className = players.humanPlayer.myBoard.returnBoard()[move];\n        for(let i = 0; i<Object.keys(players.humanPlayer.myBoard.returnBoard()).length; i++){\n            if(players.humanPlayer.myBoard.returnBoard()[Object.keys(players.humanPlayer.myBoard.returnBoard())[i]].includes('sunk')){\n                let newCell = playerSide.querySelector(`[data-coordinate=${Object.keys(players.humanPlayer.myBoard.returnBoard())[i]}]`);\n                newCell.classList.add('sunk');\n            };\n        };\n        if(players.humanPlayer.myBoard.allSunk()){\n            endMessage.textContent = \"Ya lost bud\";\n            greyOut.style.display = \"flex\";\n            popUp.style.display = \"flex\";\n        };\n    }, 300);\n}\n\ntoggle.addEventListener('click', ()=>{\n    toggleShipDirection();\n});\n\nfunction toggleShipDirection(){\n    shipDirection = shipDirection == \"vertical\" ? shipDirection = \"horizontal\" : shipDirection = \"vertical\";\n};\n\n\nfunction renderHumanBoard(boardObj, humanPlayer){\n    Object.keys(boardObj).forEach(coordKey =>{\n        const cell = document.createElement('div');\n        const coordinateTerrainArr = boardObj[coordKey].split(\" \");\n        coordinateTerrainArr.forEach(terr => cell.classList.add(terr));\n        cell.setAttribute('data-coordinate', coordKey);\n        cell.addEventListener('mouseover', (e)=> shipAreaSelection(e.target));\n        cell.addEventListener('mouseleave', (e)=>shipAreaSelectionRemoval(e.target));\n        cell.addEventListener('click', (e)=>placeShipDOM(e.target, humanPlayer));\n        playerSide.appendChild(cell);\n    });\n};\n\nfunction renderComputerBoard(obj){\n    Object.keys(obj).forEach(key =>{\n        const cell = document.createElement('div');\n        const words = obj[key].split(\" \");\n        cell.classList.add(words[0]);\n        cell.setAttribute('data-coordinate', key);\n        computerSide.appendChild(cell);\n    });\n};\n\nfunction renderHumanShips(arr){\n    arr.forEach(ship =>{\n        const shipDiv = document.createElement('div');\n        shipDiv.classList.add(ship.showName());\n        shipDiv.textContent = ship.showName();\n        shipArea.appendChild(shipDiv);\n    });\n};\n\nfunction shipAreaSelection(cell){\n    const currentLength = _utility__WEBPACK_IMPORTED_MODULE_1__.lengthObject[currentShip];\n    if(currentLength>1 && currentLength<6){\n        let array = selectSurroundingAreas(cell, currentLength);\n        drawSurroundingAreas(array);\n    };  \n};\nfunction shipAreaSelectionRemoval(cell){\n    const currentLength = _utility__WEBPACK_IMPORTED_MODULE_1__.lengthObject[currentShip];\n    if(currentLength>1 && currentLength<6){\n       let array = selectSurroundingAreas(cell, currentLength);\n       removeSurroundingAreas(array);\n    };  \n};\n\nfunction drawSurroundingAreas(array){\n    array.forEach(coord=> {\n        playerSide.querySelector(`[data-coordinate=${coord}]`).classList.add('selected');\n    });\n};\n\nfunction removeSurroundingAreas(array){\n    array.forEach(coord=> {\n        playerSide.querySelector(`[data-coordinate=${coord}]`).classList.remove('selected');\n    });\n};\n\nfunction selectSurroundingAreas(cell, shipSize){\n    const numberCoord = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.numberCoordinate)(cell);\n    let arrayOfCoords = [];\n    arrayOfCoords.push(numberCoord);\n    if(shipDirection == \"horizontal\"){\n        for(let i=1; i<shipSize; i++){\n            let newCoordFirst = numberCoord[0];\n            let newCoordLast = Number(numberCoord[1]) + i;\n            if((Number(numberCoord[1]) + i) <= 8){\n                newCoordLast = Number(numberCoord[1]) + i;\n            }else if(Number(numberCoord[1] + i) > 8){\n                newCoordLast = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.checkOffBoard)(Number(numberCoord[1]), i, shipSize)\n            };\n            let newCoord = newCoordFirst + newCoordLast;\n            arrayOfCoords.push(newCoord);\n        };   \n    }else if(shipDirection == \"vertical\"){\n        for(let i=1; i<shipSize; i++){\n            let newCoordFirst = Number(numberCoord[0]) + i;\n            let newCoordLast = numberCoord[1];\n            if((Number(numberCoord[0]) + i) <= 8){\n                newCoordFirst = Number(numberCoord[0]) + i;\n            }else if(Number(numberCoord[0] + i) > 8){\n                newCoordFirst = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.checkOffBoard)(Number(numberCoord[0]), i, shipSize)\n            };\n            let newCoord = newCoordFirst + newCoordLast;\n            arrayOfCoords.push(newCoord);\n        };  \n    };\n    \n    const newArray = arrayOfCoords.map(each => (0,_utility__WEBPACK_IMPORTED_MODULE_1__.letterCoordinate)(each));\n    return newArray\n};\n\nshipArea.addEventListener('click', (e)=>{shipChoose(e)});\n\nfunction shipChoose(e){\n    if(e.target.className == \"ship-area\"){\n        return false\n    }else if(alreadyPlacedShipHuman.includes(e.target.className)){\n        return false\n    };\n    currentShip = e.target.className;\n};\n\nfunction placeShipDOM(cell, humanPlayer){\n    const currentLength = _utility__WEBPACK_IMPORTED_MODULE_1__.lengthObject[currentShip];\n    if(currentLength>1 && currentLength<6){\n        let array = selectSurroundingAreas(cell, currentLength);\n        if(!array.some(checkForBoats)){\n            insertShip(array);\n            shipAreaSelectionRemoval(cell);\n            alreadyPlacedShipHuman.push(currentShip);\n            humanPlayer.myBoard.placeShip(array, _utility__WEBPACK_IMPORTED_MODULE_1__.indexCheck[currentShip]);\n            currentShip = \"\";\n            updateShips();\n            if(alreadyPlacedShipHuman.length ==5){ //game starts\n                computerSide.style.display = \"flex\";\n            };\n        };     \n    };  \n};\n\nfunction checkForBoats(coord){\n    return playerSide.querySelector(`[data-coordinate=${coord}]`).className.length > 14\n};\n\nfunction insertShip(array){\n    array.forEach(coord=> {\n        playerSide.querySelector(`[data-coordinate=${coord}]`).classList.add(`${currentShip}`);\n    });\n};\n\nconst restartGame = function(){\n   (0,_utility__WEBPACK_IMPORTED_MODULE_1__.removeAllChildNodes)(playerSide);\n   (0,_utility__WEBPACK_IMPORTED_MODULE_1__.removeAllChildNodes)(computerSide);\n   (0,_utility__WEBPACK_IMPORTED_MODULE_1__.removeAllChildNodes)(shipArea);\n   currentShip = \"\";\n   alreadyPlacedShipHuman = [];\n   alreadyPlacedShipAI = [];\n   shipDirection = \"horizontal\";\n   bool = false;\n};\n\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/DOM.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameMaker\": () => (/* binding */ gameMaker),\n/* harmony export */   \"newGame\": () => (/* binding */ newGame)\n/* harmony export */ });\n/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players.js */ \"./src/players.js\");\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n\n\n\nfunction gameMaker(playerName){\n    const humanPlayer = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__.humanFactory)(playerName);\n    const AI = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__.computerFactory)();\n    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.renderHumanBoard)(humanPlayer.myBoard.returnBoard(), humanPlayer);\n    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.renderComputerBoard)(AI.myBoard.returnBoard());\n    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.renderHumanShips)(humanPlayer.myBoard.returnShips());\n    return {humanPlayer, AI};\n};\n\nfunction startGame(playerName){\n    const players = gameMaker(playerName);\n    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.pcBoardEvListeners)(players);\n    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.randomShips)(players);\n};\n\n\nstartGame('playername');\n\nfunction newGame(){\n    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.restartGame)();\n    startGame('playername');\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameBoard\": () => (/* binding */ gameBoard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\n\nconst gameBoard = () =>{\n    const boardObj = \n    {   'A1': \"water\", 'A2': \"water\", 'A3': \"water\", 'A4': \"water\", 'A5': \"water\", 'A6': \"water\", 'A7': \"water\", 'A8': \"water\",\n        'B1': \"water\", 'B2': \"water\", 'B3': \"water\", 'B4': \"water\", 'B5': \"water\", 'B6': \"water\", 'B7': \"water\", 'B8': \"water\",\n        'C1': \"water\", 'C2': \"water\", 'C3': \"water\", 'C4': \"water\", 'C5': \"water\", 'C6': \"water\", 'C7': \"water\", 'C8': \"water\", \n        'D1': \"water\", 'D2': \"water\", 'D3': \"water\", 'D4': \"water\", 'D5': \"water\", 'D6': \"water\", 'D7': \"water\", 'D8': \"water\", \n        'E1': \"water\", 'E2': \"water\", 'E3': \"water\", 'E4': \"water\", 'E5': \"water\", 'E6': \"water\", 'E7': \"water\", 'E8': \"water\", \n        'F1': \"water\", 'F2': \"water\", 'F3': \"water\", 'F4': \"water\", 'F5': \"water\", 'F6': \"water\", 'F7': \"water\", 'F8': \"water\", \n        'G1': \"water\", 'G2': \"water\", 'G3': \"water\", 'G4': \"water\", 'G5': \"water\", 'G6': \"water\", 'G7': \"water\", 'G8': \"water\", \n        'H1': \"water\", 'H2': \"water\", 'H3': \"water\", 'H4': \"water\", 'H5': \"water\", 'H6': \"water\", 'H7': \"water\", 'H8': \"water\",  \n    };\n\n    const carrier = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(5, 'carrier');\n    const battleship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(4, 'battleship');\n    const destroyer = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(3, 'destroyer');\n    const submarine = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(3, 'submarine');\n    const patrolBoat = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(2, 'patrolBoat');\n\n    const ships = [carrier, battleship, destroyer, submarine, patrolBoat];\n\n    const placeShip = (coordinates, shipIndex) =>{\n        let warning = '';\n        coordinates.forEach(coord => {\n            if(boardObj[coord] == 'water') {\n                boardObj[coord] += (' ' +ships[shipIndex].showName());\n            }else{\n                warning = 'repeated spot';\n            }\n        });\n        return warning\n    };\n    function shipHitMessage(coordinate, shipName){\n        return `${shipName} has been hit at ${coordinate}!`\n    };\n\n    const receiveAttack = (coordinate) =>{\n        if(boardObj[coordinate] != 'water' && !boardObj[coordinate].includes('hit')){\n            ships.forEach(ship => {\n                if(boardObj[coordinate].includes(ship.showName())){\n                    ship.hit();\n                    hitSpot(coordinate, 'boat');\n                    if(ship.showSunk()){\n                        for(const property in boardObj){\n                            if(boardObj[property].includes(ship.showName())){\n                                boardObj[property] += ' sunk';\n                            };\n                        };\n                    };\n                };\n            });\n        }else if(!boardObj[coordinate].includes('hit')){\n            hitSpot(coordinate, 'water');\n        };\n    };\n\n    const hitSpot = (coordinate, type) =>{\n            if(type == 'boat'){\n                boardObj[coordinate] += ' hit';\n            }else if(type == 'water'){\n                boardObj[coordinate] += ' hit miss';\n            }\n            \n    };\n\n    const returnBoard = () =>{\n        return boardObj;\n    };\n\n    const returnShips = () =>{\n        return ships;\n    };\n\n    const allSunk = () =>{\n        const arraySunkStatus = (eachShip) => eachShip.showSunk();\n        return ships.every(arraySunkStatus);\n    };\n\n    return { placeShip, receiveAttack, returnBoard, returnShips, allSunk }\n\n};\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n\n\n\n\n// console.log(generateRandomCoordinate())\n// const players = gameMaker('pepe');\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"computerFactory\": () => (/* binding */ computerFactory),\n/* harmony export */   \"computerMoveAI\": () => (/* binding */ computerMoveAI),\n/* harmony export */   \"humanFactory\": () => (/* binding */ humanFactory)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility.js */ \"./src/utility.js\");\n\n\n\nconst humanFactory = (name) =>{\n    let myTurn = true;\n    let myBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameBoard)();\n    const showTurn = () => myTurn;\n    const myTurnSwitch = (player) =>myTurn = myTurn == false ? myTurn = true : myTurn = false;\n    return {myBoard, myTurnSwitch, name, showTurn}\n};\n\nconst computerFactory = () =>{\n    let myBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameBoard)();\n    let movePool = getMovePool();\n    const nextMove = (movePool, computerObj)=> computerMoveAI(movePool, computerObj);\n    return { nextMove, myBoard, movePool }\n};\n\nfunction computerMoveAI(movePool, self){\n    let moveNumber = getMove(movePool);\n    let move = movePool[moveNumber];\n    self['movePool'].splice(moveNumber, 1);\n    return move;\n};\n\nfunction getMovePool(){\n    const movePool = ['A1','A2','A3','A4','A5','A6','A7','A8',\n                      'B1','B2','B3','B4','B5','B6','B7','B8',\n                      'C1','C2','C3','C4','C5','C6','C7','C8',\n                      'D1','D2','D3','D4','D5','D6','D7','D8',\n                      'E1','E2','E3','E4','E5','E6','E7','E8',\n                      'F1','F2','F3','F4','F5','F6','F7','F8',\n                      'G1','G2','G3','G4','G5','G6','G7','G8',\n                      'H1','H2','H3','H4','H5','H6','H7','H8']\n    return movePool;\n};\n\nfunction getMove(movePool){\n    let moveNumber = getRandomNumberBetween(0, movePool.length-1);\n    return moveNumber;  \n};\n\nfunction getRandomNumberBetween(min,max){\n    return Math.floor(Math.random()*(max-min+1)+min);\n};\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/players.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shipFactory\": () => (/* binding */ shipFactory)\n/* harmony export */ });\n\nconst shipFactory = (length, name) =>{\n    let shotsReceived = 0;\n    let sunkStatus = false;\n    const showHits = () =>{\n        return shotsReceived;\n    };\n    const hit = () => {\n        shotsReceived ++;\n        isSunk();\n    };\n    const showSunk = () =>{\n        return sunkStatus;\n    };\n    const isSunk = () => {\n        if(shotsReceived == length){\n            sunkStatus = true;\n        };\n    };\n    const showName = () =>{\n        return name;\n    };\n    const showLength = () =>{\n        return length;\n    };\n\n    return{showLength, showName, hit, isSunk, showHits, showSunk}\n\n    //set length and name as return functions to keep those values private, affects players.js\n};\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkOffBoard\": () => (/* binding */ checkOffBoard),\n/* harmony export */   \"generateRandomCoordinate\": () => (/* binding */ generateRandomCoordinate),\n/* harmony export */   \"indexCheck\": () => (/* binding */ indexCheck),\n/* harmony export */   \"lengthObject\": () => (/* binding */ lengthObject),\n/* harmony export */   \"letterCoordinate\": () => (/* binding */ letterCoordinate),\n/* harmony export */   \"numberCoordinate\": () => (/* binding */ numberCoordinate),\n/* harmony export */   \"removeAllChildNodes\": () => (/* binding */ removeAllChildNodes)\n/* harmony export */ });\nconst lengthObject = {\n    'carrier': 5,\n    'battleship': 4,\n    'destroyer': 3,\n    'submarine': 3,\n    'patrolBoat': 2,\n};\n\nconst indexCheck = {\n    'carrier': 0,\n    'battleship': 1,\n    'destroyer': 2,\n    'submarine': 3,\n    'patrolBoat': 4,\n}\n\nconst letterToNumber = {\n    'A': 1,\n    'B': 2,\n    'C': 3,\n    'D': 4,\n    'E': 5,\n    'F': 6,\n    'G': 7,\n    'H': 8,\n};\n\nconst numberToLetter = {\n    '1': 'A',\n    '2': 'B',\n    '3': 'C',\n    '4': 'D',\n    '5': 'E',\n    '6': 'F',\n    '7': 'G',\n    '8': 'H',\n};\n\nconst numberCoordinate = function(cell){\n    let first = letterToNumber[cell.dataset.coordinate.substring(0,1)];\n    let second = cell.dataset.coordinate.substring(1,2);\n    return first+second;\n}\n\nconst letterCoordinate = function(numberCoord){\n    let first = numberToLetter[numberCoord.substring(0,1)];\n    let second = numberCoord.substring(1,2);\n    return first+second;\n};\n\nconst checkOffBoard =function(num, i, shipSize){\n    if((num + i) >= 8 && num==8 && shipSize ==2){ //for patrolBoat\n        return num - i;\n    }else if((num + i) >= 8 && num==7 && shipSize ==3){ //for destroyer n submarine\n        return num - i+1;\n    }else if((num + i) >= 8 && num==8 && shipSize ==3){ //for destroyer n submarine\n        return num - i;\n    }else if((num + i) >= 8 && num==6 && shipSize ==4){ //for battleShip\n        return num - i+2;\n    }else if((num + i) >= 8 && num==7 && shipSize ==4){ //for battleShip\n        return num - i+1;\n    }else if((num + i) >= 8 && num==8 && shipSize ==4){ //for battleShip\n        return num - i;\n    }else if((num + i) >= 8 && num==5 && shipSize ==5){ //for carrier\n        return num - i+3;\n    }else if((num + i) >= 8 && num==6 && shipSize ==5){ //for carrier\n        return num - i+2;\n    }else if((num + i) >= 8 && num==7 && shipSize ==5){ //for carrier\n        return num - i+1;\n    }else if((num + i) >= 8 && num==8 && shipSize ==5){ //for carrier\n        return num - i;\n    };\n};\n\nconst generateRandomCoordinate = function(){\n    const number1 = Math.floor(Math.random()*(8-1+1)+1);\n    const number2 = Math.floor(Math.random()*(8-1+1)+1);\n    const letter = numberToLetter[number1];\n    return letter + number2.toString()\n}\n\nfunction removeAllChildNodes(parent) {\n    while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n    }\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/utility.js?");

/***/ }),

/***/ "./src/direction_icon.png":
/*!********************************!*\
  !*** ./src/direction_icon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3167cac562c271a03706.png\";\n\n//# sourceURL=webpack://battleship/./src/direction_icon.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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