/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-size: calc(8px + 0.4vh + 0.4vw);\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.container {\n    min-height: 100vh;\n\n}\n\n.header {\n    background-color: rgb(228, 66, 50);\n    padding: 0.5rem;\n    text-align: center;\n    color: white;\n    width: 100%;\n    position: fixed;\n}\n\n.main {\n    display: grid;\n    grid-template-columns: minmax(calc(150px + 5vw), max-content) 1fr;\n    min-height: 100vh;\n}\n\n.sidebar {\n    background-color: rgb(245, 245, 245);\n    padding: 3.5rem 1.5rem 1.5rem;\n}\n\n.sidebar li {\n    cursor: pointer;\n}\n\n.sub::before {\n    content: \"・\";\n}\n\n.addProject {\n    color: grey;\n}\n\n.addProjectInput {\n    font-size: 0.9rem;\n    padding: 0.2rem 0.4rem;\n}\n\n.today {\n    margin-top: 1rem;\n}\n\nul {\n    list-style: none;\n\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n}\n\n.content {\n    padding: 3.5rem 3rem 2rem;\n\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\n.projectTitle {\n    padding: 1rem;\n    font-size: 1.6rem;\n}\n\n.todoItems {\n    padding: 0.5rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.todoItem .wrapper, .todoItem form {\n    border-bottom: solid 0.1rem lightgrey;\n    padding: 0 0 0.2rem 1rem;\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n    place-items: center start;\n    gap: 1rem;\n}\n\n.details {\n    padding: 0.2rem;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 1rem;\n}\n\n.left {\n    display: grid;\n    grid-template-rows: auto;\n    gap: 0.2rem;\n    align-self: center;\n}\n\n.title {\n    font-size: 1rem;\n    color: black;\n}\n\n.important .title {\n    font-weight: bold;\n}\n\n.important .title::after {\n    content: \" *\";\n    font-weight: bold;\n}\n\n.description {\n    font-size: 0.9rem;\n    color: grey;\n}\n\n.dueDate {\n    font-size: 0.9rem;\n    color: rgb(0, 155, 0);\n    padding: 0.1rem 0;\n}\n\n.past {\n    color: rgb(228, 66, 50);\n}\n\n.right {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.operationButtons {\n    display: grid;\n    grid-template-columns: auto auto;\n    gap: 0.5rem;\n}\n\n.project {\n    font-size: 0.9rem;\n    color: grey;\n    padding-top: 0.5rem;\n}\n\ninput {\n    border: none;\n}\n\ninput:focus {\n    outline: none;\n}\n\n.project.input {\n    padding: 0.1rem;\n}\n\n.button, input[type=submit] {\n    cursor: pointer;\n    border: none;\n    padding: 0.2rem 0.4rem;\n    font-size: 0.9rem;\n    color: grey;\n}\n\n.complete {\n    font-size: 2rem;\n    padding: 0;\n}\n\n.complete::before {\n    content: \"○\";\n}\n\n.completed, .completed .title, .completed .description, .completed .dueDate, .completed .project {\n    color: lightgrey;\n    border-color: lightgrey;\n}\n\n.completed .complete::before {\n    content: \"●\";\n}\n\n.otherDetails {\n    display: flex;\n    flex-direction: row;\n    gap: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;IACT,oCAAoC;IACpC,qHAAqH;AACzH;;AAEA;IACI,iBAAiB;;AAErB;;AAEA;IACI,kCAAkC;IAClC,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,iEAAiE;IACjE,iBAAiB;AACrB;;AAEA;IACI,oCAAoC;IACpC,6BAA6B;AACjC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;;IAEhB,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,yBAAyB;;IAEzB,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,eAAe;;IAEf,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,qCAAqC;IACrC,wBAAwB;;IAExB,aAAa;IACb,+BAA+B;IAC/B,yBAAyB;IACzB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,WAAW;IACX,aAAa;IACb,+BAA+B;IAC/B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,sBAAsB;IACtB,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb","sourcesContent":["* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-size: calc(8px + 0.4vh + 0.4vw);\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.container {\n    min-height: 100vh;\n\n}\n\n.header {\n    background-color: rgb(228, 66, 50);\n    padding: 0.5rem;\n    text-align: center;\n    color: white;\n    width: 100%;\n    position: fixed;\n}\n\n.main {\n    display: grid;\n    grid-template-columns: minmax(calc(150px + 5vw), max-content) 1fr;\n    min-height: 100vh;\n}\n\n.sidebar {\n    background-color: rgb(245, 245, 245);\n    padding: 3.5rem 1.5rem 1.5rem;\n}\n\n.sidebar li {\n    cursor: pointer;\n}\n\n.sub::before {\n    content: \"・\";\n}\n\n.addProject {\n    color: grey;\n}\n\n.addProjectInput {\n    font-size: 0.9rem;\n    padding: 0.2rem 0.4rem;\n}\n\n.today {\n    margin-top: 1rem;\n}\n\nul {\n    list-style: none;\n\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n}\n\n.content {\n    padding: 3.5rem 3rem 2rem;\n\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\n.projectTitle {\n    padding: 1rem;\n    font-size: 1.6rem;\n}\n\n.todoItems {\n    padding: 0.5rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.todoItem .wrapper, .todoItem form {\n    border-bottom: solid 0.1rem lightgrey;\n    padding: 0 0 0.2rem 1rem;\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n    place-items: center start;\n    gap: 1rem;\n}\n\n.details {\n    padding: 0.2rem;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 1rem;\n}\n\n.left {\n    display: grid;\n    grid-template-rows: auto;\n    gap: 0.2rem;\n    align-self: center;\n}\n\n.title {\n    font-size: 1rem;\n    color: black;\n}\n\n.important .title {\n    font-weight: bold;\n}\n\n.important .title::after {\n    content: \" *\";\n    font-weight: bold;\n}\n\n.description {\n    font-size: 0.9rem;\n    color: grey;\n}\n\n.dueDate {\n    font-size: 0.9rem;\n    color: rgb(0, 155, 0);\n    padding: 0.1rem 0;\n}\n\n.past {\n    color: rgb(228, 66, 50);\n}\n\n.right {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.operationButtons {\n    display: grid;\n    grid-template-columns: auto auto;\n    gap: 0.5rem;\n}\n\n.project {\n    font-size: 0.9rem;\n    color: grey;\n    padding-top: 0.5rem;\n}\n\ninput {\n    border: none;\n}\n\ninput:focus {\n    outline: none;\n}\n\n.project.input {\n    padding: 0.1rem;\n}\n\n.button, input[type=submit] {\n    cursor: pointer;\n    border: none;\n    padding: 0.2rem 0.4rem;\n    font-size: 0.9rem;\n    color: grey;\n}\n\n.complete {\n    font-size: 2rem;\n    padding: 0;\n}\n\n.complete::before {\n    content: \"○\";\n}\n\n.completed, .completed .title, .completed .description, .completed .dueDate, .completed .project {\n    color: lightgrey;\n    border-color: lightgrey;\n}\n\n.completed .complete::before {\n    content: \"●\";\n}\n\n.otherDetails {\n    display: flex;\n    flex-direction: row;\n    gap: 1rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addWeeks/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/addWeeks/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addWeeks)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */

function addWeeks(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  var days = amount * 7;
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, days);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isPast/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isPast/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPast)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * const result = isPast(new Date(2014, 6, 2))
 * //=> true
 */

function isPast(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime() < Date.now();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameMonth/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameMonth/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month (and year)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */

function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisMonth/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisMonth/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisMonth)
/* harmony export */ });
/* harmony import */ var _isSameMonth_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameMonth/index.js */ "./node_modules/date-fns/esm/isSameMonth/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * const result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */

function isThisMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameMonth_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Date.now(), dirtyDate);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isWithinInterval/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isWithinInterval/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isWithinInterval)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date }) // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end }) // => true
 */
function isWithinInterval(dirtyDate, interval) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var time = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var startTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.start).getTime();
  var endTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  return time >= startTime && time <= endTime;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMmanipulation.js":
/*!********************************!*\
  !*** ./src/DOMmanipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodoDOM": () => (/* binding */ addTodoDOM),
/* harmony export */   "clearDOM": () => (/* binding */ clearDOM),
/* harmony export */   "default": () => (/* binding */ homepageDOM),
/* harmony export */   "editTodoDOM": () => (/* binding */ editTodoDOM),
/* harmony export */   "projectTitleDOM": () => (/* binding */ projectTitleDOM),
/* harmony export */   "todoItemDOM": () => (/* binding */ todoItemDOM)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isPast/index.js");
/* harmony import */ var _displayTodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTodoList */ "./src/displayTodoList.js");
/* harmony import */ var _operateProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operateProject */ "./src/operateProject.js");
/* harmony import */ var _operateTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operateTodo */ "./src/operateTodo.js");





function homepageDOM(todoList, projectList) {

    const body = document.querySelector("body");
    body.textContent = "";

    const container = document.createElement("div");
    container.classList.add('container');

    const header = document.createElement("div");
    header.classList.add('header');
    header.textContent = "The Odin Project: Todo List";
    container.appendChild(header);

    const main = document.createElement("div");
    main.classList.add('main');

    const sidebar = document.createElement("div");
    sidebar.classList.add('sidebar');
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const allTodos = document.createElement("li");
    allTodos.textContent = "All";
    allTodos.addEventListener("click", function(){
        (0,_displayTodoList__WEBPACK_IMPORTED_MODULE_0__["default"])(todoList, projectList);
    });
    ul.appendChild(allTodos);

    for (let item of projectList.allProjects) {
        const project = document.createElement("li");
        project.textContent = item;
        project.classList.add("sub");
        project.addEventListener("click", function(){
            (0,_displayTodoList__WEBPACK_IMPORTED_MODULE_0__["default"])(todoList, projectList, item);
        });
        ul.appendChild(project);
    }

    const addProject = document.createElement("li");
    const addProjectForm = document.createElement("form");
    addProjectForm.name = "addProjectForm";
    addProjectForm.onsubmit = () => (0,_operateProject__WEBPACK_IMPORTED_MODULE_1__["default"])("add", projectList, todoList);
    const addProjectInput = document.createElement("input");
    addProjectInput.classList.add("input");
    addProjectInput.classList.add("addProjectInput");
    addProjectInput.name = "addProjectInput";
    addProjectInput.placeholder = "NEW PROJECT NAME";
    addProjectInput.required = true;
    addProjectInput.autocomplete = "off";
    addProjectInput.maxLength = 15;
    const addProjectButton = document.createElement("button");
    addProjectButton.classList.add("button");
    addProjectButton.classList.add("addProject");
    addProjectButton.textContent = "ADD";
    addProjectForm.appendChild(addProjectInput);
    addProjectForm.appendChild(addProjectButton);
    addProject.appendChild(addProjectForm);
    ul.appendChild(addProject);

    const today = document.createElement("li");
    today.classList.add("today");
    today.textContent = "Today";
    today.addEventListener("click", function(){
        (0,_displayTodoList__WEBPACK_IMPORTED_MODULE_0__["default"])(todoList, projectList, "Today");
    });
    ul.appendChild(today);
    const thisWeek = document.createElement("li");
    thisWeek.textContent = "Within a week";
    thisWeek.addEventListener("click", function(){
        (0,_displayTodoList__WEBPACK_IMPORTED_MODULE_0__["default"])(todoList, projectList, "Within a week");
    });
    ul.appendChild(thisWeek);
    const thisMonth = document.createElement("li");
    thisMonth.textContent = "This month";
    thisMonth.addEventListener("click", function(){
        (0,_displayTodoList__WEBPACK_IMPORTED_MODULE_0__["default"])(todoList, projectList, "This month");
    });
    ul.appendChild(thisMonth);
    nav.appendChild(ul);
    sidebar.appendChild(nav);
    main.appendChild(sidebar);

    const content = document.createElement("div");
    content.classList.add('content');
    const projectTitle = document.createElement("div");
    projectTitle.classList.add('projectTitle');
    projectTitle.id = "projectTitle";
    content.appendChild(projectTitle);
    const todoItems = document.createElement("div");
    todoItems.classList.add('todoItems');
    content.appendChild(todoItems);
    main.appendChild(content);

    container.appendChild(main);
    body.appendChild(container);

}

function projectTitleDOM(project) {
    const projectTitle = document.querySelector("#projectTitle");
    projectTitle.textContent = project;
}

function clearDOM() {
    const todoItems = document.querySelector(".todoItems");
    todoItems.textContent = "";
}

function addTodoDOM(todoList, projectList, projectPage) {

    const todoItems = document.querySelector(".todoItems");

    const addTodoForm = document.createElement("form");
    addTodoForm.name = "addTodoForm";
    addTodoForm.onsubmit = () => (0,_operateTodo__WEBPACK_IMPORTED_MODULE_2__["default"])("add", todoList, projectList, "NA", projectPage);

    const addTodo = document.createElement("div");
    addTodo.classList.add('todoItem');
    addTodo.id = generateId("add");
    addTodoForm.appendChild(addTodo);
    todoItems.appendChild(addTodoForm);
    const wrapper = document.createElement("div");
    wrapper.classList.add('wrapper');
    addTodo.appendChild(wrapper);

    todoCompleteButtonDOM(addTodo.id);

    const details = document.createElement("div");
    details.classList.add("details");
    const detailsLeft = document.createElement("div");
    detailsLeft.classList.add("left");
    details.appendChild(detailsLeft);
    const detailsRight = document.createElement("div");
    detailsRight.classList.add("right");
    details.appendChild(detailsRight);
    wrapper.appendChild(details);

    todoDeleteButtonDOM(addTodo.id);

    const left = document.querySelector(`#todo-add .left`);
    const titleInput = document.createElement("input");
    titleInput.classList.add("title");
    titleInput.classList.add("input");
    titleInput.type = "text";
    titleInput.autocomplete = "off";
    titleInput.name = "titleInput";
    titleInput.id = "titleInput";
    titleInput.placeholder = "Title";
    titleInput.required = true;
    left.appendChild(titleInput);

    const descriptionInput = document.createElement("input");
    descriptionInput.classList.add("description");
    descriptionInput.classList.add("input");
    descriptionInput.type = "text";
    descriptionInput.autocomplete = "off";
    descriptionInput.name = "descriptionInput";
    descriptionInput.id = "descriptionInput";
    descriptionInput.placeholder = "Notes";
    left.appendChild(descriptionInput);

    const otherDetails = document.createElement("div");
    otherDetails.classList.add("otherDetails");

    const dueDateInput = document.createElement("input");
    dueDateInput.classList.add("dueDate");
    dueDateInput.classList.add("input");
    dueDateInput.type = "date";
    dueDateInput.name = "dueDateInput";
    dueDateInput.id = "dueDateInput";
    otherDetails.appendChild(dueDateInput);

    const projectInput = document.createElement("select");
    projectInput.classList.add("project");
    projectInput.classList.add("input");
    projectInput.name = "projectInput";
    projectInput.id = "projectInput";
    for (let project of projectList.allProjects) {
        const option = document.createElement("option");
        option.value = project;
        option.textContent = project;
        if (projectPage === project) {
            option.selected = true;
        }
        projectInput.appendChild(option);
    }
    otherDetails.appendChild(projectInput);

    const priorityInput = document.createElement("input");
    priorityInput.classList.add("priority");
    priorityInput.classList.add("input");
    priorityInput.type = "checkbox";
    priorityInput.name = "priorityInput";
    priorityInput.id = "priorityInput";
    otherDetails.appendChild(priorityInput);

    left.appendChild(otherDetails);

    const right = document.querySelector(`#todo-add .right`);
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Add";
    right.appendChild(submitButton);

}

function editTodoDOM(id, index, todoList, projectList, projectPage) {

    (0,_displayTodoList__WEBPACK_IMPORTED_MODULE_0__["default"])(todoList, projectList, projectPage);

    const todoItem = document.querySelector(`#${id}`);
    todoItem.textContent = "";

    const editTodoForm = document.createElement("form");
    editTodoForm.name = "editTodoForm";
    editTodoForm.onsubmit = () => (0,_operateTodo__WEBPACK_IMPORTED_MODULE_2__["default"])("edit", todoList, projectList, index, projectPage);
    todoItem.appendChild(editTodoForm);

    const completeButton = document.createElement("div");
    completeButton.classList.add("button");
    completeButton.classList.add("complete");
    editTodoForm.appendChild(completeButton);

    const details = document.createElement("div");
    details.classList.add("details");

    const detailsLeft = document.createElement("div");
    detailsLeft.classList.add("left");
    details.appendChild(detailsLeft);

    const titleInput = document.createElement("input");
    titleInput.classList.add("title");
    titleInput.classList.add("input");
    titleInput.type = "text";
    titleInput.autocomplete = "off";
    titleInput.name = "titleInput";
    titleInput.id = "titleInput";
    titleInput.required = true;
    titleInput.value = todoList.allTodos[index]["title"];
    detailsLeft.appendChild(titleInput);

    const descriptionInput = document.createElement("input");
    descriptionInput.classList.add("description");
    descriptionInput.classList.add("input");
    descriptionInput.type = "text";
    descriptionInput.autocomplete = "off";
    descriptionInput.name = "descriptionInput";
    descriptionInput.id = "descriptionInput";
    descriptionInput.value = todoList.allTodos[index]["description"];
    detailsLeft.appendChild(descriptionInput);

    const otherDetails = document.createElement("div");
    otherDetails.classList.add("otherDetails");

    const dueDateInput = document.createElement("input");
    dueDateInput.classList.add("dueDate");
    dueDateInput.classList.add("input");
    dueDateInput.type = "date";
    dueDateInput.name = "dueDateInput";
    dueDateInput.id = "dueDateInput";
    dueDateInput.value = todoList.allTodos[index]["dueDate"];
    otherDetails.appendChild(dueDateInput);

    const projectInput = document.createElement("select");
    projectInput.classList.add("project");
    projectInput.classList.add("input");
    projectInput.name = "projectInput";
    projectInput.id = "projectInput";
    for (let project of projectList.allProjects) {
        const option = document.createElement("option");
        option.value = project;
        option.textContent = project;
        projectInput.appendChild(option);
    }
    projectInput.value = todoList.allTodos[index]["project"];
    otherDetails.appendChild(projectInput);

    const priorityInput = document.createElement("input");
    priorityInput.classList.add("priority");
    priorityInput.classList.add("input");
    priorityInput.type = "checkbox";
    priorityInput.name = "priorityInput";
    priorityInput.id = "priorityInput";
    priorityInput.checked = todoList.allTodos[index]["priority"];
    otherDetails.appendChild(priorityInput);

    detailsLeft.appendChild(otherDetails);

    const detailsRight = document.createElement("div");
    detailsRight.classList.add("right");
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Edit";
    detailsRight.appendChild(submitButton);
    details.appendChild(detailsRight);
    editTodoForm.appendChild(details);

}

function todoItemDOM(todo, index, todoList, projectList, projectPage) {

    const todoItems = document.querySelector(".todoItems");
    const todoItem = document.createElement("div");
    todoItem.classList.add('todoItem');
    todoItem.id = generateId(index);
    todoItems.appendChild(todoItem);
    const wrapper = document.createElement("div");
    wrapper.classList.add('wrapper');
    todoItem.appendChild(wrapper);

    todoCompleteButtonDOM(todoItem.id, index, todoList, projectList, projectPage);

    const details = document.createElement("div");
    details.classList.add("details");
    const detailsLeft = document.createElement("div");
    detailsLeft.classList.add("left");
    details.appendChild(detailsLeft);
    const detailsRight = document.createElement("div");
    detailsRight.classList.add("right");
    const operationButtons = document.createElement("div");
    operationButtons.classList.add("operationButtons");
    detailsRight.appendChild(operationButtons);
    details.appendChild(detailsRight);
    wrapper.appendChild(details);

    todoEditButtonDOM(todoItem.id, index, todoList, projectList, projectPage);
    todoDeleteButtonDOM(todoItem.id, index, todoList, projectList, projectPage);

    for (let property in todo) {
        todoPropertyDOM(index, trimPropertyName(property), todo[property]);
    }

}

function todoCompleteButtonDOM(id, index = "NA", todoList = {}, projectList = [], projectPage = "All"){

    const parent = document.querySelector(`#${id} div`);
    const completeButton = document.createElement("div");
    completeButton.classList.add("button");
    completeButton.classList.add("complete");
    if (!isNaN(index)) {
        completeButton.addEventListener("click", function(){
            (0,_operateTodo__WEBPACK_IMPORTED_MODULE_2__["default"])("changeStatus", todoList, projectList, index, projectPage);
        });
    }
    parent.appendChild(completeButton);

}

function todoPropertyDOM(index, propertyName, propertyValue) {

    if (propertyName === "status") {
        if (propertyValue) {
            const todoItem = document.querySelector(`#todo-${index}`);
            todoItem.classList.add("completed");
        }
    } else if (propertyName === "project") {
        const parent = document.querySelector(`#todo-${index} .right`);
        const property = document.createElement("div");
        property.classList.add(propertyName);
        property.textContent = propertyValue;
        parent.appendChild(property);
    } else {
        if (propertyValue) {
            const parent = document.querySelector(`#todo-${index} .left`);
            if (propertyName === "priority") {
                parent.classList.add("important");
            } else {
                const property = document.createElement("div");
                property.classList.add(propertyName);
                property.textContent = propertyValue;
                if (propertyName == "dueDate" && (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(propertyValue))) {
                        property.classList.add("past");
                }
                parent.appendChild(property);
            }
        }
    }

}

function todoEditButtonDOM(id, index = "NA", todoList = {}, projectList = [], projectPage = "All"){

    const parent = document.querySelector(`#${id} .operationButtons`);
    const editButton = document.createElement("button");
    editButton.classList.add("button");
    editButton.classList.add("edit");
    editButton.textContent = "E";
    if (!isNaN(index)) {
        editButton.addEventListener("click", function() {
            editTodoDOM(id, index, todoList, projectList, projectPage);
        });
    }
    parent.appendChild(editButton);

}

function todoDeleteButtonDOM(id, index = "NA", todoList = {}, projectList = [], projectPage){

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "X";
    if (!isNaN(index)) {
        deleteButton.addEventListener("click", function() {
            (0,_operateTodo__WEBPACK_IMPORTED_MODULE_2__["default"])("delete", todoList, projectList, index, projectPage);
        });
        const parent = document.querySelector(`#${id} .operationButtons`);
        parent.appendChild(deleteButton);
    } else {
        deleteButton.type = "reset";
        const parent = document.querySelector(`#${id} .right`);
        parent.appendChild(deleteButton);
    }

}

function generateId(index) {
    return `todo-${index}`;
}

function trimPropertyName(rawName) {
    return rawName.slice(1);
}

/***/ }),

/***/ "./src/addSamples.js":
/*!***************************!*\
  !*** ./src/addSamples.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addSamples)
/* harmony export */ });
/* harmony import */ var _classTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classTodo.js */ "./src/classTodo.js");


function addSamples(todoList, projectList) {

    let sampleTodo1 = new _classTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Sample Title 1", "sample 1", "2022-11-11", false, false, projectList.allProjects[0]);
    let sampleTodo2 = new _classTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Sample Title 2", "sample 2", "2022-11-17", false, true, projectList.allProjects[1]);
    let sampleTodo3 = new _classTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Sample Title 3", "sample 3", "2022-11-18", true, false, projectList.allProjects[2]);
    let sampleTodo4 = new _classTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Sample Title 4", "sample 4", "2022-10-19", true, false, projectList.allProjects[2]);
    
    todoList.allTodos = [sampleTodo1, sampleTodo2, sampleTodo3, sampleTodo4];

    console.log("Samples added.")

}


/***/ }),

/***/ "./src/classProjectList.js":
/*!*********************************!*\
  !*** ./src/classProjectList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectList)
/* harmony export */ });
class ProjectList {

    constructor(allProjects = ["Personal", "Study", "Work"]) {
        this._allProjects = allProjects;
    }

    get allProjects() {
        return this._allProjects;
    }

    set allProjects(listInput) {
        this._allProjects = listInput;
    }

    add(projectName) {
        this.allProjects.push(projectName);
    }

    delete(index) {
        this.allProjects.splice(index, 1);
    }

    edit(index, newProjectName) {
        this.allProjects[index] = newProjectName;
    }

}

/***/ }),

/***/ "./src/classTodo.js":
/*!**************************!*\
  !*** ./src/classTodo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
    
    constructor(title, description, dueDate, priority, status, project) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._status = status;
        this._project = project;
    }

    get title() {
        return this._title;
    }
    get description() {
        return this._description;
    }
    get dueDate() {
        return this._dueDate;
    }
    get priority() {
        return this._priority;
    }
    get status() {
        return this._status;
    }
    get project() {
        return this._project;
    }

    set title(titleInput) {
        this._title = titleInput;
    }
    set description(descriptionInput) {
        this._description = descriptionInput;
    }
    set dueDate(dueDateInput) {
        this._dueDate = dueDateInput;
    }
    set priority(priorityInput) {
        this._priority = priorityInput;
    }
    set status(statusInput) {
        this._status = statusInput;
    }
    set project(projectInput) {
        this._project = projectInput;
    }

}

/***/ }),

/***/ "./src/classTodoList.js":
/*!******************************!*\
  !*** ./src/classTodoList.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
class TodoList {

    constructor(allTodos = []) {
        this._allTodos = allTodos;
    }

    get allTodos() {
        return this._allTodos;
    }

    set allTodos(listInput) {
        this._allTodos = listInput;
    }

    add(todoItem) {
        this.allTodos.push(todoItem);
    }

    delete(index) {
        this.allTodos.splice(index, 1);
    }

    edit(index, newTodoItem) {
        this.allTodos[index] = newTodoItem;
    }

}

/***/ }),

/***/ "./src/displayTodoList.js":
/*!********************************!*\
  !*** ./src/displayTodoList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayTodoList)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addWeeks/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isWithinInterval/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisMonth/index.js");
/* harmony import */ var _DOMmanipulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMmanipulation.js */ "./src/DOMmanipulation.js");



function displayTodoList(todoList, projectList, projectToShow = "All") {

    (0,_DOMmanipulation_js__WEBPACK_IMPORTED_MODULE_0__.clearDOM)();
    (0,_DOMmanipulation_js__WEBPACK_IMPORTED_MODULE_0__.addTodoDOM)(todoList, projectList, projectToShow);
    (0,_DOMmanipulation_js__WEBPACK_IMPORTED_MODULE_0__.projectTitleDOM)(projectToShow);
    if (projectToShow === "All") {
        todoList.allTodos.forEach((todoItem, index) => (0,_DOMmanipulation_js__WEBPACK_IMPORTED_MODULE_0__.todoItemDOM)(todoItem, index, todoList, projectList, projectToShow));
    } else if (projectToShow === "Today") {
        todoList.allTodos.forEach((todoItem, index) => {     
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(todoItem.dueDate))) {
                (0,_DOMmanipulation_js__WEBPACK_IMPORTED_MODULE_0__.todoItemDOM)(todoItem, index, todoList, projectList, projectToShow);
            }
        });
    } else if (projectToShow === "Within a week") {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const oneWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(today, 1);
        oneWeek.setHours(0, 0, 0, 0);
        todoList.allTodos.forEach((todoItem, index) => {   
            const date = new Date(todoItem.dueDate);
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(date, {
                start: today,
                end: oneWeek
            })) {
                (0,_DOMmanipulation_js__WEBPACK_IMPORTED_MODULE_0__.todoItemDOM)(todoItem, index, todoList, projectList, projectToShow);
            }
        });
    } else if (projectToShow === "This month") {
        todoList.allTodos.forEach((todoItem, index) => {    
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(todoItem.dueDate))) {
                (0,_DOMmanipulation_js__WEBPACK_IMPORTED_MODULE_0__.todoItemDOM)(todoItem, index, todoList, projectList, projectToShow);
            }
        });
    } else {
        todoList.allTodos.forEach((todoItem, index) => {     
            if (todoItem.project === projectToShow) {
                (0,_DOMmanipulation_js__WEBPACK_IMPORTED_MODULE_0__.todoItemDOM)(todoItem, index, todoList, projectList, projectToShow);
            }
        });
    }
    
}

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "retrieveProjects": () => (/* binding */ retrieveProjects),
/* harmony export */   "retrieveTodos": () => (/* binding */ retrieveTodos),
/* harmony export */   "updateStorage": () => (/* binding */ updateStorage)
/* harmony export */ });
/* harmony import */ var _classTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classTodo */ "./src/classTodo.js");


function updateStorage(todoList, projectList) {
    localStorage.setItem("todos", JSON.stringify(todoList.allTodos));
    localStorage.setItem("projects", JSON.stringify(projectList.allProjects));
}

function retrieveTodos() {
    let todoInstanceArray = [];
    let jsonArray = JSON.parse(localStorage.getItem("todos"));
    for (let item of jsonArray) {
        let instance = Object.assign(new _classTodo__WEBPACK_IMPORTED_MODULE_0__["default"](), item);
        todoInstanceArray.push(instance);
    }
    return todoInstanceArray;
}

function retrieveProjects() {
    return JSON.parse(localStorage.getItem("projects"));
}

/***/ }),

/***/ "./src/operateProject.js":
/*!*******************************!*\
  !*** ./src/operateProject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ operateProject)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");



function operateProject(operation, projectList, todoList) {

    if (operation === "add") {
        const input = document.forms["addProjectForm"]["addProjectInput"].value;
        projectList.add(input);
    }

    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(todoList, projectList);
    (0,_pageLoad__WEBPACK_IMPORTED_MODULE_1__["default"])(todoList, projectList);
    return false;

}

/***/ }),

/***/ "./src/operateTodo.js":
/*!****************************!*\
  !*** ./src/operateTodo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ operateTodo)
/* harmony export */ });
/* harmony import */ var _classTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classTodo.js */ "./src/classTodo.js");
/* harmony import */ var _displayTodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTodoList */ "./src/displayTodoList.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");




function operateTodo(operation, todoList, projectList, index = "", projectPage = "All") {
    
    if (operation === "add") {

        let titleInput = document.forms["addTodoForm"]["titleInput"].value;
        let descriptionInput = document.forms["addTodoForm"]["descriptionInput"].value;
        let dueDateInput = document.forms["addTodoForm"]["dueDateInput"].value;
        let projectInput = document.forms["addTodoForm"]["projectInput"].value;
        let priorityInput = document.forms["addTodoForm"]["priorityInput"].checked;

        todoList.add(new _classTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"](titleInput, descriptionInput, dueDateInput, priorityInput, false, projectInput));

        if (projectPage != "All") {
            projectPage = projectInput;
        }

    } else if (operation === "delete") {

        todoList.delete(index);

    } else if (operation === "edit") {

        let titleInput = document.forms["editTodoForm"]["titleInput"].value;
        let descriptionInput = document.forms["editTodoForm"]["descriptionInput"].value;
        let dueDateInput = document.forms["editTodoForm"]["dueDateInput"].value;
        let projectInput = document.forms["editTodoForm"]["projectInput"].value;
        let priorityInput = document.forms["editTodoForm"]["priorityInput"].checked;

        todoList.edit(index, new _classTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"](titleInput, descriptionInput, dueDateInput, priorityInput, todoList.allTodos[index]["status"], projectInput));

    } else if (operation === "changeStatus") {

        todoList.edit(index, new _classTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"](todoList.allTodos[index]["title"], todoList.allTodos[index]["description"], todoList.allTodos[index]["dueDate"], todoList.allTodos[index]["priority"], !(todoList.allTodos[index]["status"]), todoList.allTodos[index]["project"]));

    }

    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.updateStorage)(todoList, projectList);
    (0,_displayTodoList__WEBPACK_IMPORTED_MODULE_1__["default"])(todoList, projectList, projectPage);

    return false;

}


/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _displayTodoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTodoList.js */ "./src/displayTodoList.js");
/* harmony import */ var _DOMmanipulation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMmanipulation.js */ "./src/DOMmanipulation.js");



function pageLoad(todoList, projectList) {

    (0,_DOMmanipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(todoList, projectList);
    (0,_displayTodoList_js__WEBPACK_IMPORTED_MODULE_0__["default"])(todoList, projectList);

}

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classProjectList.js */ "./src/classProjectList.js");
/* harmony import */ var _classTodoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classTodoList.js */ "./src/classTodoList.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");
/* harmony import */ var _addSamples_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addSamples.js */ "./src/addSamples.js");
/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageLoad.js */ "./src/pageLoad.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");







let allTodoList = new _classTodoList_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
let allProjectList = new _classProjectList_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.retrieveProjects)() && (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.retrieveTodos)()) {
    allTodoList.allTodos = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.retrieveTodos)();
    allProjectList.allProjects = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.retrieveProjects)();
} else {
    (0,_addSamples_js__WEBPACK_IMPORTED_MODULE_3__["default"])(allTodoList, allProjectList);
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.updateStorage)(allTodoList, allProjectList);
}

(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_4__["default"])(allTodoList, allProjectList);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIscURBQUk7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQSxNQUFNOztBQUVOOztBQUVBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMscURBQUk7O0FBRXJDLE1BQU07O0FBRU4saUNBQWlDLHFEQUFJOztBQUVyQzs7QUFFQSxJQUFJLCtEQUFhO0FBQ2pCLElBQUksNERBQWU7O0FBRW5COztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdDbUQ7QUFDSjs7QUFFaEM7O0FBRWYsSUFBSSwrREFBVztBQUNmLElBQUksK0RBQWU7O0FBRW5COzs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0Q7QUFDTjtBQUN5QztBQUMxQztBQUNKO0FBQ2hCOztBQUVyQixzQkFBc0IseURBQVE7QUFDOUIseUJBQXlCLDREQUFXOztBQUVwQyxJQUFJLGtFQUFnQixNQUFNLCtEQUFhO0FBQ3ZDLDJCQUEyQiwrREFBYTtBQUN4QyxpQ0FBaUMsa0VBQWdCO0FBQ2pELEVBQUU7QUFDRixJQUFJLDBEQUFVO0FBQ2QsSUFBSSwrREFBYTtBQUNqQjs7QUFFQSx3REFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkV2Vla3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzUGFzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVNb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzV2l0aGluSW50ZXJ2YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9ET01tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvYWRkU2FtcGxlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jbGFzc1Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NsYXNzVG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jbGFzc1RvZG9MaXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlUb2RvTGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvb3BlcmF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvb3BlcmF0ZVRvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IGNhbGMoOHB4ICsgMC40dmggKyAwLjR2dyk7XFxuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgNjYsIDUwKTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChjYWxjKDE1MHB4ICsgNXZ3KSwgbWF4LWNvbnRlbnQpIDFmcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgICBwYWRkaW5nOiAzLjVyZW0gMS41cmVtIDEuNXJlbTtcXG59XFxuXFxuLnNpZGViYXIgbGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdWI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCLjg7tcXFwiO1xcbn1cXG5cXG4uYWRkUHJvamVjdCB7XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4uYWRkUHJvamVjdElucHV0IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XFxufVxcblxcbi50b2RheSB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjZyZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgcGFkZGluZzogMy41cmVtIDNyZW0gMnJlbTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4udG9kb0l0ZW1zIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50b2RvSXRlbSAud3JhcHBlciwgLnRvZG9JdGVtIGZvcm0ge1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjFyZW0gbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nOiAwIDAgMC4ycmVtIDFyZW07XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgc3RhcnQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5sZWZ0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBnYXA6IDAuMnJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmltcG9ydGFudCAudGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmltcG9ydGFudCAudGl0bGU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiAqXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLmR1ZURhdGUge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgY29sb3I6IHJnYigwLCAxNTUsIDApO1xcbiAgICBwYWRkaW5nOiAwLjFyZW0gMDtcXG59XFxuXFxuLnBhc3Qge1xcbiAgICBjb2xvcjogcmdiKDIyOCwgNjYsIDUwKTtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5vcGVyYXRpb25CdXR0b25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QuaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwLjFyZW07XFxufVxcblxcbi5idXR0b24sIGlucHV0W3R5cGU9c3VibWl0XSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC40cmVtO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5jb21wbGV0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbXBsZXRlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi4peLXFxcIjtcXG59XFxuXFxuLmNvbXBsZXRlZCwgLmNvbXBsZXRlZCAudGl0bGUsIC5jb21wbGV0ZWQgLmRlc2NyaXB0aW9uLCAuY29tcGxldGVkIC5kdWVEYXRlLCAuY29tcGxldGVkIC5wcm9qZWN0IHtcXG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbi5jb21wbGV0ZWQgLmNvbXBsZXRlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi4pePXFxcIjtcXG59XFxuXFxuLm90aGVyRGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMscUhBQXFIO0FBQ3pIOztBQUVBO0lBQ0ksaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpRUFBaUU7SUFDakUsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7O0lBRXpCLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTs7SUFFZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyx3QkFBd0I7O0lBRXhCLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IGNhbGMoOHB4ICsgMC40dmggKyAwLjR2dyk7XFxuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgNjYsIDUwKTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChjYWxjKDE1MHB4ICsgNXZ3KSwgbWF4LWNvbnRlbnQpIDFmcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgICBwYWRkaW5nOiAzLjVyZW0gMS41cmVtIDEuNXJlbTtcXG59XFxuXFxuLnNpZGViYXIgbGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdWI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCLjg7tcXFwiO1xcbn1cXG5cXG4uYWRkUHJvamVjdCB7XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4uYWRkUHJvamVjdElucHV0IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XFxufVxcblxcbi50b2RheSB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjZyZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgcGFkZGluZzogMy41cmVtIDNyZW0gMnJlbTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4udG9kb0l0ZW1zIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50b2RvSXRlbSAud3JhcHBlciwgLnRvZG9JdGVtIGZvcm0ge1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjFyZW0gbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nOiAwIDAgMC4ycmVtIDFyZW07XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgc3RhcnQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5sZWZ0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBnYXA6IDAuMnJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmltcG9ydGFudCAudGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmltcG9ydGFudCAudGl0bGU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiAqXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLmR1ZURhdGUge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgY29sb3I6IHJnYigwLCAxNTUsIDApO1xcbiAgICBwYWRkaW5nOiAwLjFyZW0gMDtcXG59XFxuXFxuLnBhc3Qge1xcbiAgICBjb2xvcjogcmdiKDIyOCwgNjYsIDUwKTtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5vcGVyYXRpb25CdXR0b25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QuaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwLjFyZW07XFxufVxcblxcbi5idXR0b24sIGlucHV0W3R5cGU9c3VibWl0XSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC40cmVtO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5jb21wbGV0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbXBsZXRlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi4peLXFxcIjtcXG59XFxuXFxuLmNvbXBsZXRlZCwgLmNvbXBsZXRlZCAudGl0bGUsIC5jb21wbGV0ZWQgLmRlc2NyaXB0aW9uLCAuY29tcGxldGVkIC5kdWVEYXRlLCAuY29tcGxldGVkIC5wcm9qZWN0IHtcXG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbi5jb21wbGV0ZWQgLmNvbXBsZXRlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi4pePXFxcIjtcXG59XFxuXFxuLm90aGVyRGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZERheXMgZnJvbSBcIi4uL2FkZERheXMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZFdlZWtzXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygd2Vla3MgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygd2VlayB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2Ygd2Vla3MgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgd2Vla3MgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDQgd2Vla3MgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZFdlZWtzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA0KVxuICogLy89PiBNb24gU2VwIDI5IDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRXZWVrcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgdmFyIGRheXMgPSBhbW91bnQgKiA3O1xuICByZXR1cm4gYWRkRGF5cyhkaXJ0eURhdGUsIGRheXMpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNQYXN0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBwYXN0P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBwYXN0P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGUgcGFzdFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyAyIEp1bHkgMjAxNCBpbiB0aGUgcGFzdD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzUGFzdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUGFzdChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCkgPCBEYXRlLm5vdygpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgbW9udGggKGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgbW9udGggKGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIG1vbnRoIChhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDIgU2VwdGVtYmVyIDIwMTQgYW5kIDI1IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiksIG5ldyBEYXRlKDIwMTQsIDgsIDI1KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMiBTZXB0ZW1iZXIgMjAxNCBhbmQgMjUgU2VwdGVtYmVyIDIwMTUgaW4gdGhlIHNhbWUgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyKSwgbmV3IERhdGUoMjAxNSwgOCwgMjUpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZU1vbnRoKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgZGF0ZUxlZnQuZ2V0TW9udGgoKSA9PT0gZGF0ZVJpZ2h0LmdldE1vbnRoKCk7XG59IiwiaW1wb3J0IGlzU2FtZU1vbnRoIGZyb20gXCIuLi9pc1NhbWVNb250aC9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUaGlzTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSBtb250aCBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIG1vbnRoIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMTUgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyBtb250aD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc01vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDE1KSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc01vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZU1vbnRoKERhdGUubm93KCksIGRpcnR5RGF0ZSk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzV2l0aGluSW50ZXJ2YWxcbiAqIEBjYXRlZ29yeSBJbnRlcnZhbCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB3aXRoaW4gdGhlIGludGVydmFsP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgd2l0aGluIHRoZSBpbnRlcnZhbD8gKEluY2x1ZGluZyBzdGFydCBhbmQgZW5kLilcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7SW50ZXJ2YWx9IGludGVydmFsIC0gdGhlIGludGVydmFsIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgd2l0aGluIHRoZSBpbnRlcnZhbFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gVGhlIHN0YXJ0IG9mIGFuIGludGVydmFsIGNhbm5vdCBiZSBhZnRlciBpdHMgZW5kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBEYXRlIGluIGludGVydmFsIGNhbm5vdCBiZSBgSW52YWxpZCBEYXRlYFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgd2l0aGluIHRoZSBpbnRlcnZhbDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwobmV3IERhdGUoMjAxNCwgMCwgMyksIHtcbiAqICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTQsIDAsIDEpLFxuICogICBlbmQ6IG5ldyBEYXRlKDIwMTQsIDAsIDcpXG4gKiB9KVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgZGF0ZSBvdXRzaWRlIG9mIHRoZSBpbnRlcnZhbDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwobmV3IERhdGUoMjAxNCwgMCwgMTApLCB7XG4gKiAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCAwLCAxKSxcbiAqICAgZW5kOiBuZXcgRGF0ZSgyMDE0LCAwLCA3KVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGRhdGUgZXF1YWwgdG8gaW50ZXJ2YWwgc3RhcnQ6XG4gKiBpc1dpdGhpbkludGVydmFsKGRhdGUsIHsgc3RhcnQsIGVuZDogZGF0ZSB9KSAvLyA9PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBkYXRlIGVxdWFsIHRvIGludGVydmFsIGVuZDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwoZGF0ZSwgeyBzdGFydDogZGF0ZSwgZW5kIH0pIC8vID0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNXaXRoaW5JbnRlcnZhbChkaXJ0eURhdGUsIGludGVydmFsKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZSA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIHN0YXJ0VGltZSA9IHRvRGF0ZShpbnRlcnZhbC5zdGFydCkuZ2V0VGltZSgpO1xuICB2YXIgZW5kVGltZSA9IHRvRGF0ZShpbnRlcnZhbC5lbmQpLmdldFRpbWUoKTsgLy8gVGhyb3cgYW4gZXhjZXB0aW9uIGlmIHN0YXJ0IGRhdGUgaXMgYWZ0ZXIgZW5kIGRhdGUgb3IgaWYgYW55IGRhdGUgaXMgYEludmFsaWQgRGF0ZWBcblxuICBpZiAoIShzdGFydFRpbWUgPD0gZW5kVGltZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBpbnRlcnZhbCcpO1xuICB9XG5cbiAgcmV0dXJuIHRpbWUgPj0gc3RhcnRUaW1lICYmIHRpbWUgPD0gZW5kVGltZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGlzUGFzdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IGRpc3BsYXlUb2RvTGlzdCBmcm9tIFwiLi9kaXNwbGF5VG9kb0xpc3RcIjtcbmltcG9ydCBvcGVyYXRlUHJvamVjdCBmcm9tIFwiLi9vcGVyYXRlUHJvamVjdFwiO1xuaW1wb3J0IG9wZXJhdGVUb2RvIGZyb20gXCIuL29wZXJhdGVUb2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVwYWdlRE9NKHRvZG9MaXN0LCBwcm9qZWN0TGlzdCkge1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHkudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlRoZSBPZGluIFByb2plY3Q6IFRvZG8gTGlzdFwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IGFsbFRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGFsbFRvZG9zLnRleHRDb250ZW50ID0gXCJBbGxcIjtcbiAgICBhbGxUb2Rvcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgZGlzcGxheVRvZG9MaXN0KHRvZG9MaXN0LCBwcm9qZWN0TGlzdCk7XG4gICAgfSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoYWxsVG9kb3MpO1xuXG4gICAgZm9yIChsZXQgaXRlbSBvZiBwcm9qZWN0TGlzdC5hbGxQcm9qZWN0cykge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic3ViXCIpO1xuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgZGlzcGxheVRvZG9MaXN0KHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgYWRkUHJvamVjdEZvcm0ubmFtZSA9IFwiYWRkUHJvamVjdEZvcm1cIjtcbiAgICBhZGRQcm9qZWN0Rm9ybS5vbnN1Ym1pdCA9ICgpID0+IG9wZXJhdGVQcm9qZWN0KFwiYWRkXCIsIHByb2plY3RMaXN0LCB0b2RvTGlzdCk7XG4gICAgY29uc3QgYWRkUHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGFkZFByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIik7XG4gICAgYWRkUHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9qZWN0SW5wdXRcIik7XG4gICAgYWRkUHJvamVjdElucHV0Lm5hbWUgPSBcImFkZFByb2plY3RJbnB1dFwiO1xuICAgIGFkZFByb2plY3RJbnB1dC5wbGFjZWhvbGRlciA9IFwiTkVXIFBST0pFQ1QgTkFNRVwiO1xuICAgIGFkZFByb2plY3RJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgYWRkUHJvamVjdElucHV0LmF1dG9jb21wbGV0ZSA9IFwib2ZmXCI7XG4gICAgYWRkUHJvamVjdElucHV0Lm1heExlbmd0aCA9IDE1O1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9qZWN0XCIpO1xuICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFERFwiO1xuICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZFByb2plY3RJbnB1dCk7XG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG4gICAgYWRkUHJvamVjdC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Rm9ybSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB0b2RheS5jbGFzc0xpc3QuYWRkKFwidG9kYXlcIik7XG4gICAgdG9kYXkudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGRpc3BsYXlUb2RvTGlzdCh0b2RvTGlzdCwgcHJvamVjdExpc3QsIFwiVG9kYXlcIik7XG4gICAgfSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQodG9kYXkpO1xuICAgIGNvbnN0IHRoaXNXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHRoaXNXZWVrLnRleHRDb250ZW50ID0gXCJXaXRoaW4gYSB3ZWVrXCI7XG4gICAgdGhpc1dlZWsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGRpc3BsYXlUb2RvTGlzdCh0b2RvTGlzdCwgcHJvamVjdExpc3QsIFwiV2l0aGluIGEgd2Vla1wiKTtcbiAgICB9KTtcbiAgICB1bC5hcHBlbmRDaGlsZCh0aGlzV2Vlayk7XG4gICAgY29uc3QgdGhpc01vbnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHRoaXNNb250aC50ZXh0Q29udGVudCA9IFwiVGhpcyBtb250aFwiO1xuICAgIHRoaXNNb250aC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgZGlzcGxheVRvZG9MaXN0KHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgXCJUaGlzIG1vbnRoXCIpO1xuICAgIH0pO1xuICAgIHVsLmFwcGVuZENoaWxkKHRoaXNNb250aCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG5hdik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChzaWRlYmFyKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RUaXRsZScpO1xuICAgIHByb2plY3RUaXRsZS5pZCA9IFwicHJvamVjdFRpdGxlXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIGNvbnN0IHRvZG9JdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0l0ZW1zLmNsYXNzTGlzdC5hZGQoJ3RvZG9JdGVtcycpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0l0ZW1zKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdFRpdGxlRE9NKHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RUaXRsZVwiKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJET00oKSB7XG4gICAgY29uc3QgdG9kb0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvSXRlbXNcIik7XG4gICAgdG9kb0l0ZW1zLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG9ET00odG9kb0xpc3QsIHByb2plY3RMaXN0LCBwcm9qZWN0UGFnZSkge1xuXG4gICAgY29uc3QgdG9kb0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvSXRlbXNcIik7XG5cbiAgICBjb25zdCBhZGRUb2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGFkZFRvZG9Gb3JtLm5hbWUgPSBcImFkZFRvZG9Gb3JtXCI7XG4gICAgYWRkVG9kb0Zvcm0ub25zdWJtaXQgPSAoKSA9PiBvcGVyYXRlVG9kbyhcImFkZFwiLCB0b2RvTGlzdCwgcHJvamVjdExpc3QsIFwiTkFcIiwgcHJvamVjdFBhZ2UpO1xuXG4gICAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkVG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvSXRlbScpO1xuICAgIGFkZFRvZG8uaWQgPSBnZW5lcmF0ZUlkKFwiYWRkXCIpO1xuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGFkZFRvZG8pO1xuICAgIHRvZG9JdGVtcy5hcHBlbmRDaGlsZChhZGRUb2RvRm9ybSk7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG4gICAgYWRkVG9kby5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcblxuICAgIHRvZG9Db21wbGV0ZUJ1dHRvbkRPTShhZGRUb2RvLmlkKTtcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG4gICAgY29uc3QgZGV0YWlsc0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbHNMZWZ0LmNsYXNzTGlzdC5hZGQoXCJsZWZ0XCIpO1xuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZGV0YWlsc0xlZnQpO1xuICAgIGNvbnN0IGRldGFpbHNSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlsc1JpZ2h0LmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKTtcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGRldGFpbHNSaWdodCk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChkZXRhaWxzKTtcblxuICAgIHRvZG9EZWxldGVCdXR0b25ET00oYWRkVG9kby5pZCk7XG5cbiAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvZG8tYWRkIC5sZWZ0YCk7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICB0aXRsZUlucHV0LmF1dG9jb21wbGV0ZSA9IFwib2ZmXCI7XG4gICAgdGl0bGVJbnB1dC5uYW1lID0gXCJ0aXRsZUlucHV0XCI7XG4gICAgdGl0bGVJbnB1dC5pZCA9IFwidGl0bGVJbnB1dFwiO1xuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgbGVmdC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5hdXRvY29tcGxldGUgPSBcIm9mZlwiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9IFwiZGVzY3JpcHRpb25JbnB1dFwiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSBcImRlc2NyaXB0aW9uSW5wdXRcIjtcbiAgICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJOb3Rlc1wiO1xuICAgIGxlZnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICBjb25zdCBvdGhlckRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG90aGVyRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwib3RoZXJEZXRhaWxzXCIpO1xuXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGR1ZURhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZHVlRGF0ZVwiKTtcbiAgICBkdWVEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0XCIpO1xuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcImR1ZURhdGVJbnB1dFwiO1xuICAgIGR1ZURhdGVJbnB1dC5pZCA9IFwiZHVlRGF0ZUlucHV0XCI7XG4gICAgb3RoZXJEZXRhaWxzLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0XCIpO1xuICAgIHByb2plY3RJbnB1dC5uYW1lID0gXCJwcm9qZWN0SW5wdXRcIjtcbiAgICBwcm9qZWN0SW5wdXQuaWQgPSBcInByb2plY3RJbnB1dFwiO1xuICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdExpc3QuYWxsUHJvamVjdHMpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdDtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgaWYgKHByb2plY3RQYWdlID09PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cbiAgICBvdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcblxuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJpb3JpdHlJbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG4gICAgcHJpb3JpdHlJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIik7XG4gICAgcHJpb3JpdHlJbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIHByaW9yaXR5SW5wdXQubmFtZSA9IFwicHJpb3JpdHlJbnB1dFwiO1xuICAgIHByaW9yaXR5SW5wdXQuaWQgPSBcInByaW9yaXR5SW5wdXRcIjtcbiAgICBvdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG5cbiAgICBsZWZ0LmFwcGVuZENoaWxkKG90aGVyRGV0YWlscyk7XG5cbiAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvLWFkZCAucmlnaHRgKTtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IFwiQWRkXCI7XG4gICAgcmlnaHQuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRvZG9ET00oaWQsIGluZGV4LCB0b2RvTGlzdCwgcHJvamVjdExpc3QsIHByb2plY3RQYWdlKSB7XG5cbiAgICBkaXNwbGF5VG9kb0xpc3QodG9kb0xpc3QsIHByb2plY3RMaXN0LCBwcm9qZWN0UGFnZSk7XG5cbiAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xuICAgIHRvZG9JdGVtLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGNvbnN0IGVkaXRUb2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGVkaXRUb2RvRm9ybS5uYW1lID0gXCJlZGl0VG9kb0Zvcm1cIjtcbiAgICBlZGl0VG9kb0Zvcm0ub25zdWJtaXQgPSAoKSA9PiBvcGVyYXRlVG9kbyhcImVkaXRcIiwgdG9kb0xpc3QsIHByb2plY3RMaXN0LCBpbmRleCwgcHJvamVjdFBhZ2UpO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGVkaXRUb2RvRm9ybSk7XG5cbiAgICBjb25zdCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcbiAgICBjb21wbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIik7XG4gICAgZWRpdFRvZG9Gb3JtLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTtcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG5cbiAgICBjb25zdCBkZXRhaWxzTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlsc0xlZnQuY2xhc3NMaXN0LmFkZChcImxlZnRcIik7XG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZXRhaWxzTGVmdCk7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRpdGxlSW5wdXQuYXV0b2NvbXBsZXRlID0gXCJvZmZcIjtcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSBcInRpdGxlSW5wdXRcIjtcbiAgICB0aXRsZUlucHV0LmlkID0gXCJ0aXRsZUlucHV0XCI7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvZG9MaXN0LmFsbFRvZG9zW2luZGV4XVtcInRpdGxlXCJdO1xuICAgIGRldGFpbHNMZWZ0LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBkZXNjcmlwdGlvbklucHV0LmF1dG9jb21wbGV0ZSA9IFwib2ZmXCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gXCJkZXNjcmlwdGlvbklucHV0XCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9IFwiZGVzY3JpcHRpb25JbnB1dFwiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0b2RvTGlzdC5hbGxUb2Rvc1tpbmRleF1bXCJkZXNjcmlwdGlvblwiXTtcbiAgICBkZXRhaWxzTGVmdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAgIGNvbnN0IG90aGVyRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3RoZXJEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJvdGhlckRldGFpbHNcIik7XG5cbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZHVlRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJkdWVEYXRlXCIpO1xuICAgIGR1ZURhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIik7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9IFwiZHVlRGF0ZUlucHV0XCI7XG4gICAgZHVlRGF0ZUlucHV0LmlkID0gXCJkdWVEYXRlSW5wdXRcIjtcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSB0b2RvTGlzdC5hbGxUb2Rvc1tpbmRleF1bXCJkdWVEYXRlXCJdO1xuICAgIG90aGVyRGV0YWlscy5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuXG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgcHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFwiKTtcbiAgICBwcm9qZWN0SW5wdXQubmFtZSA9IFwicHJvamVjdElucHV0XCI7XG4gICAgcHJvamVjdElucHV0LmlkID0gXCJwcm9qZWN0SW5wdXRcIjtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RMaXN0LmFsbFByb2plY3RzKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3Q7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgICAgIHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cbiAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSB0b2RvTGlzdC5hbGxUb2Rvc1tpbmRleF1bXCJwcm9qZWN0XCJdO1xuICAgIG90aGVyRGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFwiKTtcbiAgICBwcmlvcml0eUlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgcHJpb3JpdHlJbnB1dC5uYW1lID0gXCJwcmlvcml0eUlucHV0XCI7XG4gICAgcHJpb3JpdHlJbnB1dC5pZCA9IFwicHJpb3JpdHlJbnB1dFwiO1xuICAgIHByaW9yaXR5SW5wdXQuY2hlY2tlZCA9IHRvZG9MaXN0LmFsbFRvZG9zW2luZGV4XVtcInByaW9yaXR5XCJdO1xuICAgIG90aGVyRGV0YWlscy5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcblxuICAgIGRldGFpbHNMZWZ0LmFwcGVuZENoaWxkKG90aGVyRGV0YWlscyk7XG5cbiAgICBjb25zdCBkZXRhaWxzUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbHNSaWdodC5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBzdWJtaXRCdXR0b24udmFsdWUgPSBcIkVkaXRcIjtcbiAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGRldGFpbHNSaWdodCk7XG4gICAgZWRpdFRvZG9Gb3JtLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvSXRlbURPTSh0b2RvLCBpbmRleCwgdG9kb0xpc3QsIHByb2plY3RMaXN0LCBwcm9qZWN0UGFnZSkge1xuXG4gICAgY29uc3QgdG9kb0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvSXRlbXNcIik7XG4gICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ3RvZG9JdGVtJyk7XG4gICAgdG9kb0l0ZW0uaWQgPSBnZW5lcmF0ZUlkKGluZGV4KTtcbiAgICB0b2RvSXRlbXMuYXBwZW5kQ2hpbGQodG9kb0l0ZW0pO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gICAgdG9kb0NvbXBsZXRlQnV0dG9uRE9NKHRvZG9JdGVtLmlkLCBpbmRleCwgdG9kb0xpc3QsIHByb2plY3RMaXN0LCBwcm9qZWN0UGFnZSk7XG5cbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpO1xuICAgIGNvbnN0IGRldGFpbHNMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXRhaWxzTGVmdC5jbGFzc0xpc3QuYWRkKFwibGVmdFwiKTtcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGRldGFpbHNMZWZ0KTtcbiAgICBjb25zdCBkZXRhaWxzUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbHNSaWdodC5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XG4gICAgY29uc3Qgb3BlcmF0aW9uQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3BlcmF0aW9uQnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwib3BlcmF0aW9uQnV0dG9uc1wiKTtcbiAgICBkZXRhaWxzUmlnaHQuYXBwZW5kQ2hpbGQob3BlcmF0aW9uQnV0dG9ucyk7XG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZXRhaWxzUmlnaHQpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG5cbiAgICB0b2RvRWRpdEJ1dHRvbkRPTSh0b2RvSXRlbS5pZCwgaW5kZXgsIHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgcHJvamVjdFBhZ2UpO1xuICAgIHRvZG9EZWxldGVCdXR0b25ET00odG9kb0l0ZW0uaWQsIGluZGV4LCB0b2RvTGlzdCwgcHJvamVjdExpc3QsIHByb2plY3RQYWdlKTtcblxuICAgIGZvciAobGV0IHByb3BlcnR5IGluIHRvZG8pIHtcbiAgICAgICAgdG9kb1Byb3BlcnR5RE9NKGluZGV4LCB0cmltUHJvcGVydHlOYW1lKHByb3BlcnR5KSwgdG9kb1twcm9wZXJ0eV0pO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiB0b2RvQ29tcGxldGVCdXR0b25ET00oaWQsIGluZGV4ID0gXCJOQVwiLCB0b2RvTGlzdCA9IHt9LCBwcm9qZWN0TGlzdCA9IFtdLCBwcm9qZWN0UGFnZSA9IFwiQWxsXCIpe1xuXG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9IGRpdmApO1xuICAgIGNvbnN0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb21wbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICAgIGNvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcbiAgICBpZiAoIWlzTmFOKGluZGV4KSkge1xuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIG9wZXJhdGVUb2RvKFwiY2hhbmdlU3RhdHVzXCIsIHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgaW5kZXgsIHByb2plY3RQYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XG5cbn1cblxuZnVuY3Rpb24gdG9kb1Byb3BlcnR5RE9NKGluZGV4LCBwcm9wZXJ0eU5hbWUsIHByb3BlcnR5VmFsdWUpIHtcblxuICAgIGlmIChwcm9wZXJ0eU5hbWUgPT09IFwic3RhdHVzXCIpIHtcbiAgICAgICAgaWYgKHByb3BlcnR5VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvZG8tJHtpbmRleH1gKTtcbiAgICAgICAgICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHByb3BlcnR5TmFtZSA9PT0gXCJwcm9qZWN0XCIpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvZG8tJHtpbmRleH0gLnJpZ2h0YCk7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvcGVydHkuY2xhc3NMaXN0LmFkZChwcm9wZXJ0eU5hbWUpO1xuICAgICAgICBwcm9wZXJ0eS50ZXh0Q29udGVudCA9IHByb3BlcnR5VmFsdWU7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9wZXJ0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHByb3BlcnR5VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b2RvLSR7aW5kZXh9IC5sZWZ0YCk7XG4gICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lID09PSBcInByaW9yaXR5XCIpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZChcImltcG9ydGFudFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LmNsYXNzTGlzdC5hZGQocHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS50ZXh0Q29udGVudCA9IHByb3BlcnR5VmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5TmFtZSA9PSBcImR1ZURhdGVcIiAmJiBpc1Bhc3QobmV3IERhdGUocHJvcGVydHlWYWx1ZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jbGFzc0xpc3QuYWRkKFwicGFzdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHByb3BlcnR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5mdW5jdGlvbiB0b2RvRWRpdEJ1dHRvbkRPTShpZCwgaW5kZXggPSBcIk5BXCIsIHRvZG9MaXN0ID0ge30sIHByb2plY3RMaXN0ID0gW10sIHByb2plY3RQYWdlID0gXCJBbGxcIil7XG5cbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH0gLm9wZXJhdGlvbkJ1dHRvbnNgKTtcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFXCI7XG4gICAgaWYgKCFpc05hTihpbmRleCkpIHtcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlZGl0VG9kb0RPTShpZCwgaW5kZXgsIHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgcHJvamVjdFBhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG59XG5cbmZ1bmN0aW9uIHRvZG9EZWxldGVCdXR0b25ET00oaWQsIGluZGV4ID0gXCJOQVwiLCB0b2RvTGlzdCA9IHt9LCBwcm9qZWN0TGlzdCA9IFtdLCBwcm9qZWN0UGFnZSl7XG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgIGlmICghaXNOYU4oaW5kZXgpKSB7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBvcGVyYXRlVG9kbyhcImRlbGV0ZVwiLCB0b2RvTGlzdCwgcHJvamVjdExpc3QsIGluZGV4LCBwcm9qZWN0UGFnZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH0gLm9wZXJhdGlvbkJ1dHRvbnNgKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnR5cGUgPSBcInJlc2V0XCI7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfSAucmlnaHRgKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSWQoaW5kZXgpIHtcbiAgICByZXR1cm4gYHRvZG8tJHtpbmRleH1gO1xufVxuXG5mdW5jdGlvbiB0cmltUHJvcGVydHlOYW1lKHJhd05hbWUpIHtcbiAgICByZXR1cm4gcmF3TmFtZS5zbGljZSgxKTtcbn0iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi9jbGFzc1RvZG8uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU2FtcGxlcyh0b2RvTGlzdCwgcHJvamVjdExpc3QpIHtcblxuICAgIGxldCBzYW1wbGVUb2RvMSA9IG5ldyBUb2RvKFwiU2FtcGxlIFRpdGxlIDFcIiwgXCJzYW1wbGUgMVwiLCBcIjIwMjItMTEtMTFcIiwgZmFsc2UsIGZhbHNlLCBwcm9qZWN0TGlzdC5hbGxQcm9qZWN0c1swXSk7XG4gICAgbGV0IHNhbXBsZVRvZG8yID0gbmV3IFRvZG8oXCJTYW1wbGUgVGl0bGUgMlwiLCBcInNhbXBsZSAyXCIsIFwiMjAyMi0xMS0xN1wiLCBmYWxzZSwgdHJ1ZSwgcHJvamVjdExpc3QuYWxsUHJvamVjdHNbMV0pO1xuICAgIGxldCBzYW1wbGVUb2RvMyA9IG5ldyBUb2RvKFwiU2FtcGxlIFRpdGxlIDNcIiwgXCJzYW1wbGUgM1wiLCBcIjIwMjItMTEtMThcIiwgdHJ1ZSwgZmFsc2UsIHByb2plY3RMaXN0LmFsbFByb2plY3RzWzJdKTtcbiAgICBsZXQgc2FtcGxlVG9kbzQgPSBuZXcgVG9kbyhcIlNhbXBsZSBUaXRsZSA0XCIsIFwic2FtcGxlIDRcIiwgXCIyMDIyLTEwLTE5XCIsIHRydWUsIGZhbHNlLCBwcm9qZWN0TGlzdC5hbGxQcm9qZWN0c1syXSk7XG4gICAgXG4gICAgdG9kb0xpc3QuYWxsVG9kb3MgPSBbc2FtcGxlVG9kbzEsIHNhbXBsZVRvZG8yLCBzYW1wbGVUb2RvMywgc2FtcGxlVG9kbzRdO1xuXG4gICAgY29uc29sZS5sb2coXCJTYW1wbGVzIGFkZGVkLlwiKVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0TGlzdCB7XG5cbiAgICBjb25zdHJ1Y3RvcihhbGxQcm9qZWN0cyA9IFtcIlBlcnNvbmFsXCIsIFwiU3R1ZHlcIiwgXCJXb3JrXCJdKSB7XG4gICAgICAgIHRoaXMuX2FsbFByb2plY3RzID0gYWxsUHJvamVjdHM7XG4gICAgfVxuXG4gICAgZ2V0IGFsbFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWxsUHJvamVjdHM7XG4gICAgfVxuXG4gICAgc2V0IGFsbFByb2plY3RzKGxpc3RJbnB1dCkge1xuICAgICAgICB0aGlzLl9hbGxQcm9qZWN0cyA9IGxpc3RJbnB1dDtcbiAgICB9XG5cbiAgICBhZGQocHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5hbGxQcm9qZWN0cy5wdXNoKHByb2plY3ROYW1lKTtcbiAgICB9XG5cbiAgICBkZWxldGUoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5hbGxQcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGVkaXQoaW5kZXgsIG5ld1Byb2plY3ROYW1lKSB7XG4gICAgICAgIHRoaXMuYWxsUHJvamVjdHNbaW5kZXhdID0gbmV3UHJvamVjdE5hbWU7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gICAgXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICAgIH1cbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgICB9XG4gICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcbiAgICB9XG4gICAgZ2V0IHByb2plY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0O1xuICAgIH1cblxuICAgIHNldCB0aXRsZSh0aXRsZUlucHV0KSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGVJbnB1dDtcbiAgICB9XG4gICAgc2V0IGRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uSW5wdXQpIHtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0O1xuICAgIH1cbiAgICBzZXQgZHVlRGF0ZShkdWVEYXRlSW5wdXQpIHtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dDtcbiAgICB9XG4gICAgc2V0IHByaW9yaXR5KHByaW9yaXR5SW5wdXQpIHtcbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eUlucHV0O1xuICAgIH1cbiAgICBzZXQgc3RhdHVzKHN0YXR1c0lucHV0KSB7XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1c0lucHV0O1xuICAgIH1cbiAgICBzZXQgcHJvamVjdChwcm9qZWN0SW5wdXQpIHtcbiAgICAgICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3RJbnB1dDtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XG5cbiAgICBjb25zdHJ1Y3RvcihhbGxUb2RvcyA9IFtdKSB7XG4gICAgICAgIHRoaXMuX2FsbFRvZG9zID0gYWxsVG9kb3M7XG4gICAgfVxuXG4gICAgZ2V0IGFsbFRvZG9zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWxsVG9kb3M7XG4gICAgfVxuXG4gICAgc2V0IGFsbFRvZG9zKGxpc3RJbnB1dCkge1xuICAgICAgICB0aGlzLl9hbGxUb2RvcyA9IGxpc3RJbnB1dDtcbiAgICB9XG5cbiAgICBhZGQodG9kb0l0ZW0pIHtcbiAgICAgICAgdGhpcy5hbGxUb2Rvcy5wdXNoKHRvZG9JdGVtKTtcbiAgICB9XG5cbiAgICBkZWxldGUoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5hbGxUb2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGVkaXQoaW5kZXgsIG5ld1RvZG9JdGVtKSB7XG4gICAgICAgIHRoaXMuYWxsVG9kb3NbaW5kZXhdID0gbmV3VG9kb0l0ZW07XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgYWRkV2Vla3MsIGlzVGhpc01vbnRoLCBpc1RvZGF5LCBpc1dpdGhpbkludGVydmFsfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGNsZWFyRE9NLCBwcm9qZWN0VGl0bGVET00sIHRvZG9JdGVtRE9NLCBhZGRUb2RvRE9NIH0gZnJvbSBcIi4vRE9NbWFuaXB1bGF0aW9uLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlUb2RvTGlzdCh0b2RvTGlzdCwgcHJvamVjdExpc3QsIHByb2plY3RUb1Nob3cgPSBcIkFsbFwiKSB7XG5cbiAgICBjbGVhckRPTSgpO1xuICAgIGFkZFRvZG9ET00odG9kb0xpc3QsIHByb2plY3RMaXN0LCBwcm9qZWN0VG9TaG93KTtcbiAgICBwcm9qZWN0VGl0bGVET00ocHJvamVjdFRvU2hvdyk7XG4gICAgaWYgKHByb2plY3RUb1Nob3cgPT09IFwiQWxsXCIpIHtcbiAgICAgICAgdG9kb0xpc3QuYWxsVG9kb3MuZm9yRWFjaCgodG9kb0l0ZW0sIGluZGV4KSA9PiB0b2RvSXRlbURPTSh0b2RvSXRlbSwgaW5kZXgsIHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgcHJvamVjdFRvU2hvdykpO1xuICAgIH0gZWxzZSBpZiAocHJvamVjdFRvU2hvdyA9PT0gXCJUb2RheVwiKSB7XG4gICAgICAgIHRvZG9MaXN0LmFsbFRvZG9zLmZvckVhY2goKHRvZG9JdGVtLCBpbmRleCkgPT4geyAgICAgXG4gICAgICAgICAgICBpZiAoaXNUb2RheShuZXcgRGF0ZSh0b2RvSXRlbS5kdWVEYXRlKSkpIHtcbiAgICAgICAgICAgICAgICB0b2RvSXRlbURPTSh0b2RvSXRlbSwgaW5kZXgsIHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgcHJvamVjdFRvU2hvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocHJvamVjdFRvU2hvdyA9PT0gXCJXaXRoaW4gYSB3ZWVrXCIpIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0b2RheS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgY29uc3Qgb25lV2VlayA9IGFkZFdlZWtzKHRvZGF5LCAxKTtcbiAgICAgICAgb25lV2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgdG9kb0xpc3QuYWxsVG9kb3MuZm9yRWFjaCgodG9kb0l0ZW0sIGluZGV4KSA9PiB7ICAgXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodG9kb0l0ZW0uZHVlRGF0ZSk7XG4gICAgICAgICAgICBpZiAoaXNXaXRoaW5JbnRlcnZhbChkYXRlLCB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IHRvZGF5LFxuICAgICAgICAgICAgICAgIGVuZDogb25lV2Vla1xuICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICB0b2RvSXRlbURPTSh0b2RvSXRlbSwgaW5kZXgsIHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgcHJvamVjdFRvU2hvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocHJvamVjdFRvU2hvdyA9PT0gXCJUaGlzIG1vbnRoXCIpIHtcbiAgICAgICAgdG9kb0xpc3QuYWxsVG9kb3MuZm9yRWFjaCgodG9kb0l0ZW0sIGluZGV4KSA9PiB7ICAgIFxuICAgICAgICAgICAgaWYgKGlzVGhpc01vbnRoKG5ldyBEYXRlKHRvZG9JdGVtLmR1ZURhdGUpKSkge1xuICAgICAgICAgICAgICAgIHRvZG9JdGVtRE9NKHRvZG9JdGVtLCBpbmRleCwgdG9kb0xpc3QsIHByb2plY3RMaXN0LCBwcm9qZWN0VG9TaG93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9kb0xpc3QuYWxsVG9kb3MuZm9yRWFjaCgodG9kb0l0ZW0sIGluZGV4KSA9PiB7ICAgICBcbiAgICAgICAgICAgIGlmICh0b2RvSXRlbS5wcm9qZWN0ID09PSBwcm9qZWN0VG9TaG93KSB7XG4gICAgICAgICAgICAgICAgdG9kb0l0ZW1ET00odG9kb0l0ZW0sIGluZGV4LCB0b2RvTGlzdCwgcHJvamVjdExpc3QsIHByb2plY3RUb1Nob3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG59IiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vY2xhc3NUb2RvXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdG9yYWdlKHRvZG9MaXN0LCBwcm9qZWN0TGlzdCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QuYWxsVG9kb3MpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0LmFsbFByb2plY3RzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZVRvZG9zKCkge1xuICAgIGxldCB0b2RvSW5zdGFuY2VBcnJheSA9IFtdO1xuICAgIGxldCBqc29uQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpO1xuICAgIGZvciAobGV0IGl0ZW0gb2YganNvbkFycmF5KSB7XG4gICAgICAgIGxldCBpbnN0YW5jZSA9IE9iamVjdC5hc3NpZ24obmV3IFRvZG8oKSwgaXRlbSk7XG4gICAgICAgIHRvZG9JbnN0YW5jZUFycmF5LnB1c2goaW5zdGFuY2UpO1xuICAgIH1cbiAgICByZXR1cm4gdG9kb0luc3RhbmNlQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZVByb2plY3RzKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xufSIsImltcG9ydCB7IHVwZGF0ZVN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9wYWdlTG9hZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcGVyYXRlUHJvamVjdChvcGVyYXRpb24sIHByb2plY3RMaXN0LCB0b2RvTGlzdCkge1xuXG4gICAgaWYgKG9wZXJhdGlvbiA9PT0gXCJhZGRcIikge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmZvcm1zW1wiYWRkUHJvamVjdEZvcm1cIl1bXCJhZGRQcm9qZWN0SW5wdXRcIl0udmFsdWU7XG4gICAgICAgIHByb2plY3RMaXN0LmFkZChpbnB1dCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3RvcmFnZSh0b2RvTGlzdCwgcHJvamVjdExpc3QpO1xuICAgIHBhZ2VMb2FkKHRvZG9MaXN0LCBwcm9qZWN0TGlzdCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuXG59IiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vY2xhc3NUb2RvLmpzXCI7XG5pbXBvcnQgZGlzcGxheVRvZG9MaXN0IGZyb20gXCIuL2Rpc3BsYXlUb2RvTGlzdFwiO1xuaW1wb3J0IHsgdXBkYXRlU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcGVyYXRlVG9kbyhvcGVyYXRpb24sIHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgaW5kZXggPSBcIlwiLCBwcm9qZWN0UGFnZSA9IFwiQWxsXCIpIHtcbiAgICBcbiAgICBpZiAob3BlcmF0aW9uID09PSBcImFkZFwiKSB7XG5cbiAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5mb3Jtc1tcImFkZFRvZG9Gb3JtXCJdW1widGl0bGVJbnB1dFwiXS52YWx1ZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5mb3Jtc1tcImFkZFRvZG9Gb3JtXCJdW1wiZGVzY3JpcHRpb25JbnB1dFwiXS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmZvcm1zW1wiYWRkVG9kb0Zvcm1cIl1bXCJkdWVEYXRlSW5wdXRcIl0udmFsdWU7XG4gICAgICAgIGxldCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5mb3Jtc1tcImFkZFRvZG9Gb3JtXCJdW1wicHJvamVjdElucHV0XCJdLnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmZvcm1zW1wiYWRkVG9kb0Zvcm1cIl1bXCJwcmlvcml0eUlucHV0XCJdLmNoZWNrZWQ7XG5cbiAgICAgICAgdG9kb0xpc3QuYWRkKG5ldyBUb2RvKHRpdGxlSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXQsIGR1ZURhdGVJbnB1dCwgcHJpb3JpdHlJbnB1dCwgZmFsc2UsIHByb2plY3RJbnB1dCkpO1xuXG4gICAgICAgIGlmIChwcm9qZWN0UGFnZSAhPSBcIkFsbFwiKSB7XG4gICAgICAgICAgICBwcm9qZWN0UGFnZSA9IHByb2plY3RJbnB1dDtcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09IFwiZGVsZXRlXCIpIHtcblxuICAgICAgICB0b2RvTGlzdC5kZWxldGUoaW5kZXgpO1xuXG4gICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09IFwiZWRpdFwiKSB7XG5cbiAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5mb3Jtc1tcImVkaXRUb2RvRm9ybVwiXVtcInRpdGxlSW5wdXRcIl0udmFsdWU7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZm9ybXNbXCJlZGl0VG9kb0Zvcm1cIl1bXCJkZXNjcmlwdGlvbklucHV0XCJdLnZhbHVlO1xuICAgICAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZm9ybXNbXCJlZGl0VG9kb0Zvcm1cIl1bXCJkdWVEYXRlSW5wdXRcIl0udmFsdWU7XG4gICAgICAgIGxldCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5mb3Jtc1tcImVkaXRUb2RvRm9ybVwiXVtcInByb2plY3RJbnB1dFwiXS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5mb3Jtc1tcImVkaXRUb2RvRm9ybVwiXVtcInByaW9yaXR5SW5wdXRcIl0uY2hlY2tlZDtcblxuICAgICAgICB0b2RvTGlzdC5lZGl0KGluZGV4LCBuZXcgVG9kbyh0aXRsZUlucHV0LCBkZXNjcmlwdGlvbklucHV0LCBkdWVEYXRlSW5wdXQsIHByaW9yaXR5SW5wdXQsIHRvZG9MaXN0LmFsbFRvZG9zW2luZGV4XVtcInN0YXR1c1wiXSwgcHJvamVjdElucHV0KSk7XG5cbiAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gXCJjaGFuZ2VTdGF0dXNcIikge1xuXG4gICAgICAgIHRvZG9MaXN0LmVkaXQoaW5kZXgsIG5ldyBUb2RvKHRvZG9MaXN0LmFsbFRvZG9zW2luZGV4XVtcInRpdGxlXCJdLCB0b2RvTGlzdC5hbGxUb2Rvc1tpbmRleF1bXCJkZXNjcmlwdGlvblwiXSwgdG9kb0xpc3QuYWxsVG9kb3NbaW5kZXhdW1wiZHVlRGF0ZVwiXSwgdG9kb0xpc3QuYWxsVG9kb3NbaW5kZXhdW1wicHJpb3JpdHlcIl0sICEodG9kb0xpc3QuYWxsVG9kb3NbaW5kZXhdW1wic3RhdHVzXCJdKSwgdG9kb0xpc3QuYWxsVG9kb3NbaW5kZXhdW1wicHJvamVjdFwiXSkpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlU3RvcmFnZSh0b2RvTGlzdCwgcHJvamVjdExpc3QpO1xuICAgIGRpc3BsYXlUb2RvTGlzdCh0b2RvTGlzdCwgcHJvamVjdExpc3QsIHByb2plY3RQYWdlKTtcblxuICAgIHJldHVybiBmYWxzZTtcblxufVxuIiwiaW1wb3J0IGRpc3BsYXlUb2RvTGlzdCBmcm9tIFwiLi9kaXNwbGF5VG9kb0xpc3QuanNcIjtcbmltcG9ydCBob21lcGFnZURPTSBmcm9tIFwiLi9ET01tYW5pcHVsYXRpb24uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxvYWQodG9kb0xpc3QsIHByb2plY3RMaXN0KSB7XG5cbiAgICBob21lcGFnZURPTSh0b2RvTGlzdCwgcHJvamVjdExpc3QpO1xuICAgIGRpc3BsYXlUb2RvTGlzdCh0b2RvTGlzdCwgcHJvamVjdExpc3QpO1xuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFByb2plY3RMaXN0IGZyb20gXCIuL2NsYXNzUHJvamVjdExpc3QuanNcIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi9jbGFzc1RvZG9MaXN0LmpzXCI7XG5pbXBvcnQgeyByZXRyaWV2ZVRvZG9zLCByZXRyaWV2ZVByb2plY3RzLCB1cGRhdGVTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlLmpzXCI7XG5pbXBvcnQgYWRkU2FtcGxlcyBmcm9tIFwiLi9hZGRTYW1wbGVzLmpzXCI7XG5pbXBvcnQgcGFnZUxvYWQgZnJvbSBcIi4vcGFnZUxvYWQuanNcIjtcbmltcG9ydCAnLi9zdHlsZXMuY3NzJ1xuXG5sZXQgYWxsVG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QoKTtcbmxldCBhbGxQcm9qZWN0TGlzdCA9IG5ldyBQcm9qZWN0TGlzdCgpO1xuXG5pZiAocmV0cmlldmVQcm9qZWN0cygpICYmIHJldHJpZXZlVG9kb3MoKSkge1xuICAgIGFsbFRvZG9MaXN0LmFsbFRvZG9zID0gcmV0cmlldmVUb2RvcygpO1xuICAgIGFsbFByb2plY3RMaXN0LmFsbFByb2plY3RzID0gcmV0cmlldmVQcm9qZWN0cygpO1xufSBlbHNlIHtcbiAgICBhZGRTYW1wbGVzKGFsbFRvZG9MaXN0LCBhbGxQcm9qZWN0TGlzdCk7XG4gICAgdXBkYXRlU3RvcmFnZShhbGxUb2RvTGlzdCwgYWxsUHJvamVjdExpc3QpO1xufVxuXG5wYWdlTG9hZChhbGxUb2RvTGlzdCwgYWxsUHJvamVjdExpc3QpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9