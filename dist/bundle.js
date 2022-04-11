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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody{\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background-color: rgb(225, 209, 187);\\n}\\n\\n.toggle{\\n  position: fixed;\\n  top: 15px;\\n  background-color: aliceblue;\\n  width: 50px;\\n  height: 50px;\\n  left: calc(50% - 550px);\\n  border-radius: 10px;\\n}\\n\\n.ship-area{\\n  position: fixed;\\n  height: 80px;\\n  width: 900px;\\n  background-color: rgb(121, 76, 76);\\n  top: 0;\\n  border-radius: 10px;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\\n  align-items: center;\\n  justify-items: center;\\n}\\n\\n.ship-area > div{\\n  background-color: white;\\n  height: 45px;\\n  width: 90px;\\n}\\n\\n.playground{\\n  width: 1160px;\\n  height: 580px;\\n  background-color: gainsboro;\\n  margin-top: 9%;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n}\\n\\n.playground > *{\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.player-side{\\n  background-color: cadetblue;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 10px;\\n}\\n\\n.player-side > div{\\n  height: 60px;\\n  width: 60px;\\n  margin: 5px;\\n  background-color: white;\\n}\\n\\n.player-side > .water{\\n  background-color: rgb(143, 233, 203);\\n}\\n\\n.player-side > .patrolBoat{\\n  background-color: bisque;\\n}\\n\\n.player-side > .carrier{\\n  background-color: bisque;\\n}\\n\\n.player-side > .battleship{\\n  background-color: bisque;\\n}\\n\\n.player-side > .destroyer{\\n  background-color: bisque;\\n}\\n\\n.player-side > .submarine{\\n  background-color: bisque;\\n}\\n\\n.player-side > .hit{\\n  background-color: red;\\n}\\n\\n.computer-side{\\n  padding: 10px;\\n  background-color: rgb(201, 109, 76);\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n.computer-side > div{\\n  height: 60px;\\n  width: 60px;\\n  margin: 5px;\\n  background-color: rgb(246, 243, 243);\\n}\\n\\n\\n.selected{\\n  background-color: orange !important;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderComputerBoard\": () => (/* binding */ renderComputerBoard),\n/* harmony export */   \"renderHumanBoard\": () => (/* binding */ renderHumanBoard),\n/* harmony export */   \"renderHumanShips\": () => (/* binding */ renderHumanShips)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n\n\nconst playerSide = document.querySelector('.player-side');\nconst computerSide = document.querySelector('.computer-side');\nconst shipArea = document.querySelector('.ship-area');\nconst toggle = document.querySelector('.toggle');\n\nlet currentShip = \"\";\nlet alreadyPlacedShip = [];\nlet shipDirection = \"vertical\";\n\ntoggle.addEventListener('click', ()=>{\n    toggleShipDirection();\n});\n\nfunction toggleShipDirection(){\n    shipDirection = shipDirection == \"vertical\" ? shipDirection = \"horizontal\" : shipDirection = \"vertical\";\n};\n\nfunction renderHumanBoard(boardObj){\n    Object.keys(boardObj).forEach(coordKey =>{\n        const cell = document.createElement('div');\n        const coordinateTerrainArr = boardObj[coordKey].split(\" \");\n        coordinateTerrainArr.forEach(terr => cell.classList.add(terr));\n        cell.setAttribute('data-coordinate', coordKey);\n        cell.addEventListener('mouseover', (e)=> shipAreaSelection(e.target));\n        cell.addEventListener('mouseleave', (e)=>shipAreaSelectionRemoval(e.target));\n        playerSide.appendChild(cell);\n    });\n};\n\nfunction renderComputerBoard(obj){\n    Object.keys(obj).forEach(key =>{\n        const cell = document.createElement('div');\n        const words = obj[key].split(\" \");\n        cell.classList.add(words[0]);\n        cell.setAttribute('data-coordinate', key);\n        computerSide.appendChild(cell);\n    });\n};\n\nfunction renderHumanShips(arr){\n    arr.forEach(ship =>{\n        const shipDiv = document.createElement('div');\n        shipDiv.classList.add(ship.name);\n        shipDiv.textContent = ship.name;\n        shipArea.appendChild(shipDiv);\n    });\n};\n\nfunction shipAreaSelection(cell){\n    const currentLength = _utility__WEBPACK_IMPORTED_MODULE_0__.lengthObject[currentShip];\n    if(currentLength>1 && currentLength<6){\n        let array = selectSurroundingAreas(cell, currentLength);\n        drawSurroundingAreas(array);\n    };  \n};\nfunction shipAreaSelectionRemoval(cell){\n    const currentLength = _utility__WEBPACK_IMPORTED_MODULE_0__.lengthObject[currentShip];\n    if(currentLength>1 && currentLength<6){\n       let array = selectSurroundingAreas(cell, currentLength);\n       removeSurroundingAreas(array);\n    };  \n};\n\nfunction drawSurroundingAreas(array){\n    array.forEach(coord=> {\n        document.querySelector(`[data-coordinate=${coord}]`).classList.add('selected');\n    });\n};\n\nfunction removeSurroundingAreas(array){\n    array.forEach(coord=> {\n        document.querySelector(`[data-coordinate=${coord}]`).classList.remove('selected');\n    });\n};\n\nfunction selectSurroundingAreas(cell, shipSize){\n    const numberCoord = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.numberCoordinate)(cell);\n    let arrayOfCoords = [];\n    arrayOfCoords.push(numberCoord);\n    //horizontal logic:\n    if(shipDirection == \"horizontal\"){\n        for(let i=1; i<shipSize; i++){\n            let newCoordFirst = numberCoord[0];\n            let newCoordLast = Number(numberCoord[1]) + i;\n            if((Number(numberCoord[1]) + i) <= 8){\n                newCoordLast = Number(numberCoord[1]) + i;\n            }else if(Number(numberCoord[1] + i) > 8){\n                newCoordLast = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.checkOffBoard)(Number(numberCoord[1]), i, shipSize)\n            };\n            let newCoord = newCoordFirst + newCoordLast;\n            arrayOfCoords.push(newCoord);\n        };   \n    }else if(shipDirection == \"vertical\"){\n        for(let i=1; i<shipSize; i++){\n            let newCoordFirst = Number(numberCoord[0]) + i;\n            let newCoordLast = numberCoord[1];\n            if((Number(numberCoord[0]) + i) <= 8){\n                newCoordFirst = Number(numberCoord[0]) + i;\n            }else if(Number(numberCoord[0] + i) > 8){\n                newCoordFirst = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.checkOffBoard)(Number(numberCoord[0]), i, shipSize)\n            };\n            let newCoord = newCoordFirst + newCoordLast;\n            arrayOfCoords.push(newCoord);\n        };  \n    };\n    const newArray = arrayOfCoords.map(each => (0,_utility__WEBPACK_IMPORTED_MODULE_0__.letterCoordinate)(each));\n    return newArray\n};\n\nshipArea.addEventListener('click', (e)=>{shipChoose(e)});\n\nfunction shipChoose(e){\n    if(e.target.className == \"ship-area\"){\n        return false\n    }else if(alreadyPlacedShip.includes(e.target.className)){\n        return false\n    };\n    currentShip = e.target.className;\n};\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/DOM.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameMaker\": () => (/* binding */ gameMaker)\n/* harmony export */ });\n/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players.js */ \"./src/players.js\");\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n\n\n\nfunction gameMaker(playerName){\n    const humanPlayer = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__.humanFactory)(playerName);\n    const AI = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__.computerFactory)();\n    // placeShips(humanPlayer);\n    // placeShips(AI);\n    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.renderHumanBoard)(humanPlayer.myBoard.returnBoard());\n    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.renderComputerBoard)(AI.myBoard.returnBoard());\n    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.renderHumanShips)(humanPlayer.myBoard.returnShips());\n    return {humanPlayer, AI};\n};\n\n// function placeShips(player){\n//     player.myBoard.placeShip(['A1', 'A2', 'A3', 'A4', 'A5'], 0);\n//     player.myBoard.placeShip(['C1', 'C2', 'C3', 'C4'], 1);\n//     player.myBoard.placeShip(['F5', 'G5', 'H5'], 2);\n//     player.myBoard.placeShip(['H1', 'H2', 'H3'], 3);\n//     player.myBoard.placeShip(['C7', 'C8'], 4);\n// };\n\n\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameBoard\": () => (/* binding */ gameBoard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n\n\n\nconst gameBoard = () =>{\n    const boardObj = \n    {   'A1': \"water\", 'A2': \"water\", 'A3': \"water\", 'A4': \"water\", 'A5': \"water\", 'A6': \"water\", 'A7': \"water\", 'A8': \"water\",\n        'B1': \"water\", 'B2': \"water\", 'B3': \"water\", 'B4': \"water\", 'B5': \"water\", 'B6': \"water\", 'B7': \"water\", 'B8': \"water\",\n        'C1': \"water\", 'C2': \"water\", 'C3': \"water\", 'C4': \"water\", 'C5': \"water\", 'C6': \"water\", 'C7': \"water\", 'C8': \"water\", \n        'D1': \"water\", 'D2': \"water\", 'D3': \"water\", 'D4': \"water\", 'D5': \"water\", 'D6': \"water\", 'D7': \"water\", 'D8': \"water\", \n        'E1': \"water\", 'E2': \"water\", 'E3': \"water\", 'E4': \"water\", 'E5': \"water\", 'E6': \"water\", 'E7': \"water\", 'E8': \"water\", \n        'F1': \"water\", 'F2': \"water\", 'F3': \"water\", 'F4': \"water\", 'F5': \"water\", 'F6': \"water\", 'F7': \"water\", 'F8': \"water\", \n        'G1': \"water\", 'G2': \"water\", 'G3': \"water\", 'G4': \"water\", 'G5': \"water\", 'G6': \"water\", 'G7': \"water\", 'G8': \"water\", \n        'H1': \"water\", 'H2': \"water\", 'H3': \"water\", 'H4': \"water\", 'H5': \"water\", 'H6': \"water\", 'H7': \"water\", 'H8': \"water\",  \n    };\n\n    const carrier = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(5, 'carrier');\n    const battleship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(4, 'battleship');\n    const destroyer = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(3, 'destroyer');\n    const submarine = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(3, 'submarine');\n    const patrolBoat = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(2, 'patrolBoat');\n\n    const ships = [carrier, battleship, destroyer, submarine, patrolBoat];\n\n    const placeShip = (coordinates, shipIndex) =>{\n        let warning = '';\n        coordinates.forEach(coord => {\n            if(boardObj[coord] == 'water') {\n                boardObj[coord] += (' ' +ships[shipIndex].name);\n            }else{\n                warning = 'repeated spot';\n            }\n        });\n        return warning\n    };\n    function shipHitMessage(coordinate, shipName){\n        return `${shipName} has been hit at ${coordinate}!`\n    };\n\n    const receiveAttack = (coordinate) =>{\n        if(coordinate != 'water' && !coordinate.includes('hit')){\n            ships.forEach(ship => {\n                if(boardObj[coordinate].includes(ship.name)){\n                    ship.hit();\n                    shipHitMessage(coordinate, ship.name);\n                };\n            });\n            hitSpot(coordinate);\n        }else if(coordinate.includes('hit')){\n            return\n        }else{\n            hitSpot(coordinate);\n        };\n    };\n\n    const hitSpot = (coordinate) =>{\n            boardObj[coordinate] += ' hit';\n    };\n\n    const returnBoard = () =>{\n        return boardObj;\n    };\n\n    const returnShips = () =>{\n        return ships;\n    };\n\n    const allSunk = () =>{\n        const arraySunkStatus = (eachShip) => eachShip.showSunk();\n        return ships.every(arraySunkStatus);\n    };\n\n    return { placeShip, receiveAttack, returnBoard, returnShips, allSunk }\n\n};\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\nconst players = (0,_game__WEBPACK_IMPORTED_MODULE_1__.gameMaker)('pepe');\n\n\nplayers['humanPlayer']['myBoard'].returnBoard();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"computerFactory\": () => (/* binding */ computerFactory),\n/* harmony export */   \"computerMoveAI\": () => (/* binding */ computerMoveAI),\n/* harmony export */   \"humanFactory\": () => (/* binding */ humanFactory)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n\n\nconst humanFactory = (name) =>{\n    let myTurn = true;\n    let myBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameBoard)();\n    const turnSwitch = (player) => myTurnSwitch(player);\n    const showTurn = () => myTurn;\n    return {myBoard, turnSwitch, name, showTurn}\n};\n\nconst computerFactory = () =>{\n    let myTurn = false;\n    let myBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameBoard)();\n    let movePool = getMovePool();\n    const turnSwitch = (player)=> myTurnSwitch(player);\n    const nextMove = (movePool, computerObj)=> computerMoveAI(movePool, computerObj);\n    const showTurn = () => myTurn;\n    return {turnSwitch, nextMove, showTurn, myBoard, movePool }\n};\n\nfunction computerMoveAI(movePool, self){\n    let moveNumber = getMove(movePool);\n    let move = movePool[moveNumber];\n    self['movePool'].splice(moveNumber, 1);\n    return move;\n};\n\nfunction getMovePool(){\n    const movePool = ['A1','A2','A3','A4','A5','A6','A7','A8',\n                      'B1','B2','B3','B4','B5','B6','B7','B8',\n                      'C1','C2','C3','C4','C5','C6','C7','C8',\n                      'D1','D2','D3','D4','D5','D6','D7','D8',\n                      'E1','E2','E3','E4','E5','E6','E7','E8',\n                      'F1','F2','F3','F4','F5','F6','F7','F8',\n                      'G1','G2','G3','G4','G5','G6','G7','G8',\n                      'H1','H2','H3','H4','H5','H6','H7','H8']\n    return movePool;\n};\n\nfunction getMove(movePool){\n    let moveNumber = getRandomNumberBetween(0, movePool.length-1);\n    return moveNumber;  \n};\n\nfunction getRandomNumberBetween(min,max){\n    return Math.floor(Math.random()*(max-min+1)+min);\n};\n\nfunction myTurnSwitch(player){\n    player.myTurn = player.myTurn == false ? player.myTurn = true : player.myTurn = false;\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/players.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shipFactory\": () => (/* binding */ shipFactory)\n/* harmony export */ });\n\nconst shipFactory = (length, name) =>{\n    let shotsReceived = 0;\n    let sunkStatus = false;\n    const showHits = () =>{\n        return shotsReceived;\n    };\n    const hit = () => {\n        shotsReceived ++;\n        isSunk();\n    };\n    const showSunk = () =>{\n        return sunkStatus;\n    };\n    const isSunk = () => {\n        if(shotsReceived == length){\n            sunkStatus = true;\n        };\n    };\n    return{length, name, hit, isSunk, showHits, showSunk}\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkOffBoard\": () => (/* binding */ checkOffBoard),\n/* harmony export */   \"lengthObject\": () => (/* binding */ lengthObject),\n/* harmony export */   \"letterCoordinate\": () => (/* binding */ letterCoordinate),\n/* harmony export */   \"numberCoordinate\": () => (/* binding */ numberCoordinate)\n/* harmony export */ });\nconst lengthObject = {\n    'carrier': 5,\n    'battleship': 4,\n    'destroyer': 3,\n    'submarine': 3,\n    'patrolBoat': 2,\n};\n\nconst letterToNumber = {\n    'A': 1,\n    'B': 2,\n    'C': 3,\n    'D': 4,\n    'E': 5,\n    'F': 6,\n    'G': 7,\n    'H': 8,\n};\n\nconst numberToLetter = {\n    '1': 'A',\n    '2': 'B',\n    '3': 'C',\n    '4': 'D',\n    '5': 'E',\n    '6': 'F',\n    '7': 'G',\n    '8': 'H',\n};\n\nconst numberCoordinate = function(cell){\n    let first = letterToNumber[cell.dataset.coordinate.substring(0,1)];\n    let second = cell.dataset.coordinate.substring(1,2);\n    return first+second;\n}\n\nconst letterCoordinate = function(numberCoord){\n    let first = numberToLetter[numberCoord.substring(0,1)];\n    let second = numberCoord.substring(1,2);\n    return first+second;\n};\n\nconst checkOffBoard =function(num, i, shipSize){\n    if((num + i) >= 8 && num==8 && shipSize ==2){ //for patrolBoat\n        return num - i;\n    }else if((num + i) >= 8 && num==7 && shipSize ==3){ //for destroyer n submarine\n        return num - i+1;\n    }else if((num + i) >= 8 && num==8 && shipSize ==3){ //for destroyer n submarine\n        return num - i;\n    }else if((num + i) >= 8 && num==6 && shipSize ==4){ //for battleShip\n        return num - i+2;\n    }else if((num + i) >= 8 && num==7 && shipSize ==4){ //for battleShip\n        return num - i+1;\n    }else if((num + i) >= 8 && num==8 && shipSize ==4){ //for battleShip\n        return num - i;\n    }else if((num + i) >= 8 && num==5 && shipSize ==5){ //for carrier\n        return num - i+3;\n    }else if((num + i) >= 8 && num==6 && shipSize ==5){ //for carrier\n        return num - i+2;\n    }else if((num + i) >= 8 && num==7 && shipSize ==5){ //for carrier\n        return num - i+1;\n    }else if((num + i) >= 8 && num==8 && shipSize ==5){ //for carrier\n        return num - i;\n    };\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/utility.js?");

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