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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home.jpg */ \"./src/images/home.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --heading: #ff7e5f;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    background-color: #aaa; \n    min-height: 100vh;\n    margin: 0;\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center/cover;\n}\n\nheader {\n   background-color: #333;\n   color: #fff;\n   padding: 10px 0;\n   text-align: center;\n   width: 100%;\n   position: fixed;\n}\n \nnav button {\n    background: none;\n    color: #fff;\n    border: none;\n    font-size: 16px;\n    margin: 0 15px;\n    cursor: pointer;\n}\n\n#content {\n    padding: 20px;\n}\n\n#content .home-page {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding:5rem ;\n    gap: 2rem;\n    margin: auto;\n}\n\n#content .home-page .home-content {\n    text-align: center;\n    width: 45rem;\n    opacity: 0;\n    transform: translateY(20px);\n    animation: fadeInUp 1s ease-out forwards;\n    background: rgba(0, 0, 0, 0.3);\n    padding: 1rem;\n    border-radius: 10px;\n}\n\n#content .home-page .home-content h1 {\n    margin-bottom: 1rem;\n    font-size: 2rem;\n    text-transform: capitalize;\n    color: #fff;\n    background: linear-gradient(to right, #ff7e5f, #feb47b);\n    -webkit-text-fill-color: transparent;\n    -webkit-background-clip: text;\n    \n}\n\n#content .home-page .home-content p {\n    font-size: 1rem;\n    padding-bottom: 1rem;\n    line-height: 2;\n    color:#fff;\n    \n}\n\n.menu-page {\n    display: flex;\n    flex-direction: column;\n    padding: 2em;\n    color: #fff;\n    align-items: center;\n}\n\n.menu-page h1 {\n    font-size: 2em;\n    margin-bottom: 0.5em;\n    color: var(--heading);\n    text-align: center;\n}\n\n.menu-page p {\n    font-size: 1.2em;\n    margin-bottom: 2em;\n    text-align: center;\n    max-width: 800px;\n    color: #fff;\n    \n}\n\n.menu-items {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n   \n}\n\n.menu-item {\n    background: rgba(0, 0, 0, 0.3);\n    margin: 0.6em;\n    padding: 1em;\n    width: 200px;\n    height: 350px;\n    display: flex;\n    flex-direction: column;\n    align-items: center; \n    justify-content: center;\n    transition: transform 0.3s;\n}\n\n.menu-item:hover {\n    transform: scale(1.05);\n}\n\n\n.menu-item img {\n    border-radius: 10px;\n    width: 100px;\n    height: 100px;\n    \n\n}\n\n.menu-item h2 {\n    font-size: 1em;\n    margin: 1em 0;\n    color: var(--heading);\n}\n\n.menu-item p {\n    font-size: 0.9em;\n    text-align: start;\n}\n\n.menu-item .price {\n    font-weight: bold;\n    align-self: center;\n}\n\n.contact-page {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 2em;\n    color: #fff;\n}\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --heading: #ff7e5f;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    background-color: #aaa; \n    min-height: 100vh;\n    margin: 0;\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center/cover;\n}\n\nheader {\n   background-color: #333;\n   color: #fff;\n   padding: 10px 0;\n   text-align: center;\n   width: 100%;\n   position: fixed;\n}\n \nnav button {\n    background: none;\n    color: #fff;\n    border: none;\n    font-size: 16px;\n    margin: 0 15px;\n    cursor: pointer;\n}\n\n#content {\n    padding: 20px;\n}\n\n#content .home-page {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding:5rem ;\n    gap: 2rem;\n    margin: auto;\n}\n\n#content .home-page .home-content {\n    text-align: center;\n    width: 45rem;\n    opacity: 0;\n    transform: translateY(20px);\n    animation: fadeInUp 1s ease-out forwards;\n    background: rgba(0, 0, 0, 0.3);\n    padding: 1rem;\n    border-radius: 10px;\n}\n\n#content .home-page .home-content h1 {\n    margin-bottom: 1rem;\n    font-size: 2rem;\n    text-transform: capitalize;\n    color: #fff;\n    background: linear-gradient(to right, #ff7e5f, #feb47b);\n    -webkit-text-fill-color: transparent;\n    -webkit-background-clip: text;\n    \n}\n\n#content .home-page .home-content p {\n    font-size: 1rem;\n    padding-bottom: 1rem;\n    line-height: 2;\n    color:#fff;\n    \n}\n\n.menu-page {\n    display: flex;\n    flex-direction: column;\n    padding: 2em;\n    color: #fff;\n    align-items: center;\n}\n\n.menu-page h1 {\n    font-size: 2em;\n    margin-bottom: 0.5em;\n    color: var(--heading);\n    text-align: center;\n}\n\n.menu-page p {\n    font-size: 1.2em;\n    margin-bottom: 2em;\n    text-align: center;\n    max-width: 800px;\n    color: #fff;\n    \n}\n\n.menu-items {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n   \n}\n\n.menu-item {\n    background: rgba(0, 0, 0, 0.3);\n    margin: 0.6em;\n    padding: 1em;\n    width: 200px;\n    height: 350px;\n    display: flex;\n    flex-direction: column;\n    align-items: center; \n    justify-content: center;\n    transition: transform 0.3s;\n}\n\n.menu-item:hover {\n    transform: scale(1.05);\n}\n\n\n.menu-item img {\n    border-radius: 10px;\n    width: 100px;\n    height: 100px;\n    \n\n}\n\n.menu-item h2 {\n    font-size: 1em;\n    margin: 1em 0;\n    color: var(--heading);\n}\n\n.menu-item p {\n    font-size: 0.9em;\n    text-align: start;\n}\n\n.menu-item .price {\n    font-weight: bold;\n    align-self: center;\n}\n\n.contact-page {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 2em;\n    color: #fff;\n}\n\n.contact-page h1 {\n    font-size: 2em;\n    margin-bottom: 0.5em;\n    color: var(--heading);\n    text-align: center;\n}\n\n.contact-page p {\n    font-size: 1em;\n    margin-bottom: 0.8em;\n    text-align: center;\n    max-width: 800px;\n}\n\n.contact-details {\n    margin-bottom: 2em;\n}\n\n.contact-details p {\n    font-size: 1em;\n    margin-bottom: 0.5em;\n}\n\n.contact-form {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    max-width: 600px;\n    background: rgba(0, 0, 0, 0.3);\n    padding: 1em;\n    border-radius: 10px;\n}\n\n.contact-form label {\n    font-size: 1em;\n    margin-bottom: 0.5em;\n    color: #fff;\n}\n\n.contact-form input,\n.contact-form textarea {\n    font-size: 0.8em;\n    padding: 0.3em;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.contact-form button{\n    width: 7rem;\n    height: 2rem;\n    padding: 2px;\n    margin-top: 1rem;\n    background: none;\n    color: #fff;\n    border-radius: .3rem;\n    border-radius: .3rem;\n\n}\n\n\n\n.contact-form button:hover {\n    background-color: var(--heading);\n}\n\n\n@keyframes fadeInUp {\n    to {\n        opacity: 1;\n        transform: translateY(0); \n    }\n}\n\n\n\n\n\n\n.contact-page h1 {\n    font-size: 2em;\n    margin-bottom: 0.5em;\n    color: var(--heading);\n    text-align: center;\n}\n\n.contact-page p {\n    font-size: 1em;\n    margin-bottom: 0.8em;\n    text-align: center;\n    max-width: 800px;\n}\n\n.contact-details {\n    margin-bottom: 2em;\n}\n\n.contact-details p {\n    font-size: 1em;\n    margin-bottom: 0.5em;\n}\n\n.contact-form {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    max-width: 600px;\n    background: rgba(0, 0, 0, 0.3);\n    padding: 1em;\n    border-radius: 10px;\n}\n\n.contact-form label {\n    font-size: 1em;\n    margin-bottom: 0.3em;\n    color: #fff;\n}\n\n.contact-form input,\n.contact-form textarea {\n    font-size: 0.8em;\n    padding: 0.3em;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    margin-bottom: 0.5em;\n}\n\n.contact-form textarea {\n    width: 100%;\n    max-width: 100%;\n    height: 100px;\n    resize: none;\n}\n\n.contact-form button{\n    width: 7rem;\n    height: 2rem;\n    padding: 2px;\n    margin-top: 1rem;\n    background: none;\n    color: #fff;\n    border-radius: .3rem;\n    cursor: pointer;\n    border: 1px solid #fff;\n    margin-left: auto;\n}\n\n\n\n.contact-form button:hover {\n    background-color: var(--heading);\n}\n\n\n@keyframes fadeInUp {\n    to {\n        opacity: 1;\n        transform: translateY(0); \n    }\n}\n\n\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contactpage.js":
/*!****************************!*\
  !*** ./src/contactpage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContactPage: () => (/* binding */ loadContactPage)\n/* harmony export */ });\nfunction loadContactPage () {\n    const contactPage = document.createElement('div');\n    contactPage.className = 'contact-page';\n\n    const heading = document.createElement('h1');\n    heading.textContent = 'Contact Us';\n    contactPage.appendChild(heading);\n\n    const description = document.createElement('p');\n    description.textContent = 'Get in touch with us for reservations, catering, or any other inquiries. We look forward to hearing from you!';\n    contactPage.appendChild(description);\n\n    const contactDetails = document.createElement('div');\n    contactDetails.className = 'contact-details';\n    contactPage.appendChild(contactDetails);\n\n    const address = document.createElement('p');\n    address.innerHTML = '<strong>Address:</strong> 123 Main Street, Anytown, AN 12345';\n    contactDetails.appendChild(address);\n\n    const phone = document.createElement('p');\n    phone.innerHTML = '<strong>Phone:</strong> (123) 456-7890';\n    contactDetails.appendChild(phone);\n\n    const email = document.createElement('p');\n    email.innerHTML = '<strong>Email:</strong> contact@restaurant.com';\n    contactDetails.appendChild(email);\n\n    const contactForm = document.createElement('form');\n    contactForm.className = 'contact-form';\n\n\n    const nameLabel = document.createElement('label');\n    nameLabel.textContent = 'Name:';\n    contactForm.appendChild(nameLabel);\n\n    const nameInput = document.createElement('input');\n    nameInput.type = 'text';\n    nameInput.name = 'name';\n    nameInput.required = true;\n    contactForm.appendChild(nameInput);\n\n    const emailLabel = document.createElement('label');\n    emailLabel.textContent = 'Email:';\n    contactForm.appendChild(emailLabel);\n\n    const emailInput = document.createElement('input');\n    emailInput.type = 'email';\n    emailInput.name = 'email';\n    emailInput.required = true;\n    contactForm.appendChild(emailInput);\n\n    const messageLabel = document.createElement('label');\n    messageLabel.textContent = 'Message:';\n    contactForm.appendChild(messageLabel);\n\n    const messageInput = document.createElement('textarea');\n    messageInput.name = 'message';\n    messageInput.required = true;\n    contactForm.appendChild(messageInput);\n\n    const submitButton = document.createElement('button');\n    submitButton.type = 'submit';\n    submitButton.textContent = 'Send Message';\n    contactForm.appendChild(submitButton);\n\n    contactPage.appendChild(contactForm);\n\n\n    const content = document.querySelector('#content');\n    content.appendChild(contactPage);\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contactpage.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHomePage: () => (/* binding */ loadHomePage)\n/* harmony export */ });\n\nfunction loadHomePage() {\n    const content = document.querySelector('#content');\n\n    const homePage = document.createElement('div');\n    homePage.className = 'home-page';\n   \n\n    const homeContent = document.createElement('div');\n    homeContent.className='home-content';\n    const headline = document.createElement('h1');\n    headline.textContent = 'Welcome to Our Restaurant';\n    const paragraph = document.createElement('p');\n    paragraph.textContent = 'Experience the finest dining with a blend of exquisite flavors and a warm ambiance. Our restaurant is dedicated to providing you with an unforgettable culinary journey.';\n\n\n\n    content.appendChild(homePage);\n    homePage.appendChild(homeContent);\n    homeContent.appendChild(headline);\n    homeContent.appendChild(paragraph);\n\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _menupage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menupage.js */ \"./src/menupage.js\");\n/* harmony import */ var _contactpage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactpage.js */ \"./src/contactpage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    \n    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();\n    (0,_menupage_js__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)();\n    (0,_contactpage_js__WEBPACK_IMPORTED_MODULE_2__.loadContactPage)();\n});\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)\n/* harmony export */ });\n/* harmony import */ var _images_spaghetti_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/spaghetti.png */ \"./src/images/spaghetti.png\");\n\n\nfunction loadMenuPage () {\n    const menuPage = document.createElement('div');\n    menuPage.className = 'menu-page';\n\n    const heading = document.createElement('h1');\n    heading.textContent = 'our Menu';\n    menuPage.appendChild(heading);\n\n    const description = document.createElement('p');\n    description.textContent = 'Explore our delicious range of authentic Italian dishes, crafted with love and the finest ingredients.';\n    menuPage.appendChild(description);\n\n    const menuItemsContainer = document.createElement('div');\n    menuItemsContainer.className = 'menu-items';\n    menuPage.appendChild(menuItemsContainer);\n\n    const menuItems = [\n        {\n            imgSrc: _images_spaghetti_png__WEBPACK_IMPORTED_MODULE_0__,\n            title: 'Spaghetti Aglio e Olio', \n            description: 'Aglio e olio is a deliciously simple Italian dish of fresh garlic, olive oil, and Parmesan cheese tossed with freshly cooked spaghetti pasta.',\n            price: '$12'\n        },\n        {\n            imgSrc: _images_spaghetti_png__WEBPACK_IMPORTED_MODULE_0__,\n            title: 'Spaghetti Aglio e Olio', \n            description: 'Aglio e olio is a deliciously simple Italian dish of fresh garlic, olive oil, and Parmesan cheese tossed with freshly cooked spaghetti pasta.',\n            price: '$12'\n        },\n        {\n            imgSrc: _images_spaghetti_png__WEBPACK_IMPORTED_MODULE_0__,\n            title: 'Spaghetti Aglio e Olio', \n            description: 'Aglio e olio is a deliciously simple Italian dish of fresh garlic, olive oil, and Parmesan cheese tossed with freshly cooked spaghetti pasta.',\n            price: '$12'\n        },\n\n        {\n            imgSrc: _images_spaghetti_png__WEBPACK_IMPORTED_MODULE_0__,\n            title: 'Spaghetti Aglio e Olio', \n            description: 'Aglio e olio is a deliciously simple Italian dish of fresh garlic, olive oil, and Parmesan cheese tossed with freshly cooked spaghetti pasta.',\n            price: '$12'\n        },\n\n        {\n            imgSrc: _images_spaghetti_png__WEBPACK_IMPORTED_MODULE_0__,\n            title: 'Spaghetti Aglio e Olio', \n            description: 'Aglio e olio is a deliciously simple Italian dish of fresh garlic, olive oil, and Parmesan cheese tossed with freshly cooked spaghetti pasta.',\n            price: '$12'\n        },\n    ];\n\n    menuItems.forEach(item => {\n        const menuItem = document.createElement('div');\n        menuItem.className = 'menu-item';\n\n\n        const img = document.createElement('img');\n        img.src = item.imgSrc;\n        img.alt = item.title;\n\n        const title = document.createElement('h2');\n        title.textContent = item.title;\n\n        const description = document.createElement('p');\n        description.textContent = item.description;\n\n        const price = document.createElement('p');\n        price.className = 'price';\n        price.textContent = item.price;\n\n\n        menuItem.appendChild(img);\n        menuItem.appendChild(title);\n        menuItem.appendChild(description);\n        menuItem.appendChild(price);\n\n        menuItemsContainer.appendChild(menuItem);\n    })\n\n    const content = document.getElementById('content');\n    content.appendChild(menuPage);\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menupage.js?");

/***/ }),

/***/ "./src/images/home.jpg":
/*!*****************************!*\
  !*** ./src/images/home.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/457e447721227da5eaf3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/home.jpg?");

/***/ }),

/***/ "./src/images/spaghetti.png":
/*!**********************************!*\
  !*** ./src/images/spaghetti.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/051229e93f5ccc04a02d.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/spaghetti.png?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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