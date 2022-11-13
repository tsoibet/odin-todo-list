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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-size: calc(8px + 0.4vh + 0.4vw);\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.container {\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\n.header {\n    background-color: rgb(255, 55, 55);\n    padding: 0.5rem;\n    text-align: center;\n    color: white;\n}\n\n.main {\n    display: grid;\n    grid-template-columns: minmax(calc(150px + 5vw), max-content) 1fr;\n}\n\n.sidebar {\n    background-color: rgb(224, 224, 224);\n    padding: 1.5rem;\n}\n\n.sidebar li {\n    cursor: pointer;\n}\n\n.sub::before {\n    content: \"・\";\n}\n\n.addProject {\n    color: grey;\n}\n\n.addProjectInput {\n    font-size: 0.9rem;\n    padding: 0.2rem 0.4rem;\n}\n\n.today {\n    margin-top: 1rem;\n}\n\nul {\n    list-style: none;\n\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.content {\n    padding: 2rem 3rem;\n\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\n.projectTitle {\n    padding: 1rem;\n    font-size: 1.6rem;\n}\n\n.todoItems {\n    padding: 0.5rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.todoItem .wrapper, .todoItem form {\n    border-bottom: solid 0.1rem lightgrey;\n    padding: 0 0 0.2rem 1rem;\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n    place-items: center start;\n    gap: 1rem;\n}\n\n.details {\n    padding: 0.2rem;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr auto;\n    place-items: stretch;\n    gap: 1rem;\n}\n\n.left {\n    display: grid;\n    grid-template-rows: auto;\n    gap: 0.2rem;\n}\n\n.title {\n    font-size: 1rem;\n    color: black;\n}\n\n.important .title {\n    font-weight: bold;\n}\n\n.important .title::after {\n    content: \" *\";\n    font-weight: bold;\n}\n\n.description {\n    font-size: 0.9rem;\n    color: grey;\n}\n\n.dueDate {\n    font-size: 0.9rem;\n    color: green;\n    padding: 0.1rem 0;\n}\n\n.right {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.operationButtons {\n    display: grid;\n    grid-template-columns: auto auto;\n    gap: 0.5rem;\n}\n\n.project {\n    font-size: 0.9rem;\n    color: grey;\n}\n\ninput {\n    border: none;\n}\n\ninput:focus {\n    outline: none;\n}\n\n.project.input {\n    padding: 0.1rem;\n}\n\n.button, input[type=submit] {\n    cursor: pointer;\n    border: none;\n    padding: 0.2rem 0.4rem;\n    font-size: 0.9rem;\n}\n\n.complete {\n    font-size: 2rem;\n    padding: 0;\n}\n\n.complete::before {\n    content: \"○\";\n}\n\n.completed, .completed .title, .completed .description, .completed .dueDate, .completed .project, .completed .delete, .completed .edit {\n    color: lightgrey;\n    border-color: lightgrey;\n}\n\n.completed .complete::before {\n    content: \"●\";\n}\n\n.otherDetails {\n    display: flex;\n    flex-direction: row;\n    gap: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;IACT,oCAAoC;IACpC,qHAAqH;AACzH;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,kCAAkC;IAClC,eAAe;IACf,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,iEAAiE;AACrE;;AAEA;IACI,oCAAoC;IACpC,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;;IAEhB,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,kBAAkB;;IAElB,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,eAAe;;IAEf,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,qCAAqC;IACrC,wBAAwB;;IAExB,aAAa;IACb,+BAA+B;IAC/B,yBAAyB;IACzB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,WAAW;IACX,aAAa;IACb,+BAA+B;IAC/B,oBAAoB;IACpB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb","sourcesContent":["* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-size: calc(8px + 0.4vh + 0.4vw);\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.container {\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\n.header {\n    background-color: rgb(255, 55, 55);\n    padding: 0.5rem;\n    text-align: center;\n    color: white;\n}\n\n.main {\n    display: grid;\n    grid-template-columns: minmax(calc(150px + 5vw), max-content) 1fr;\n}\n\n.sidebar {\n    background-color: rgb(224, 224, 224);\n    padding: 1.5rem;\n}\n\n.sidebar li {\n    cursor: pointer;\n}\n\n.sub::before {\n    content: \"・\";\n}\n\n.addProject {\n    color: grey;\n}\n\n.addProjectInput {\n    font-size: 0.9rem;\n    padding: 0.2rem 0.4rem;\n}\n\n.today {\n    margin-top: 1rem;\n}\n\nul {\n    list-style: none;\n\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.content {\n    padding: 2rem 3rem;\n\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\n.projectTitle {\n    padding: 1rem;\n    font-size: 1.6rem;\n}\n\n.todoItems {\n    padding: 0.5rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.todoItem .wrapper, .todoItem form {\n    border-bottom: solid 0.1rem lightgrey;\n    padding: 0 0 0.2rem 1rem;\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n    place-items: center start;\n    gap: 1rem;\n}\n\n.details {\n    padding: 0.2rem;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr auto;\n    place-items: stretch;\n    gap: 1rem;\n}\n\n.left {\n    display: grid;\n    grid-template-rows: auto;\n    gap: 0.2rem;\n}\n\n.title {\n    font-size: 1rem;\n    color: black;\n}\n\n.important .title {\n    font-weight: bold;\n}\n\n.important .title::after {\n    content: \" *\";\n    font-weight: bold;\n}\n\n.description {\n    font-size: 0.9rem;\n    color: grey;\n}\n\n.dueDate {\n    font-size: 0.9rem;\n    color: green;\n    padding: 0.1rem 0;\n}\n\n.right {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.operationButtons {\n    display: grid;\n    grid-template-columns: auto auto;\n    gap: 0.5rem;\n}\n\n.project {\n    font-size: 0.9rem;\n    color: grey;\n}\n\ninput {\n    border: none;\n}\n\ninput:focus {\n    outline: none;\n}\n\n.project.input {\n    padding: 0.1rem;\n}\n\n.button, input[type=submit] {\n    cursor: pointer;\n    border: none;\n    padding: 0.2rem 0.4rem;\n    font-size: 0.9rem;\n}\n\n.complete {\n    font-size: 2rem;\n    padding: 0;\n}\n\n.complete::before {\n    content: \"○\";\n}\n\n.completed, .completed .title, .completed .description, .completed .dueDate, .completed .project, .completed .delete, .completed .edit {\n    color: lightgrey;\n    border-color: lightgrey;\n}\n\n.completed .complete::before {\n    content: \"●\";\n}\n\n.otherDetails {\n    display: flex;\n    flex-direction: row;\n    gap: 1rem;\n}"],"sourceRoot":""}]);
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

/***/ "./src/displayAddTodo.js":
/*!*******************************!*\
  !*** ./src/displayAddTodo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayAddTodo)
/* harmony export */ });
/* harmony import */ var _DOMmanipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMmanipulation */ "./src/DOMmanipulation.js");


function displayAddTodo(todoList, projectList, projectPage) {
    (0,_DOMmanipulation__WEBPACK_IMPORTED_MODULE_0__.addTodoDOM)(todoList, projectList, projectPage);
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addWeeks/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isWithinInterval/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisMonth/index.js");
/* harmony import */ var _displayAddTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayAddTodo.js */ "./src/displayAddTodo.js");
/* harmony import */ var _DOMmanipulation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMmanipulation.js */ "./src/DOMmanipulation.js");






function displayTodoList(todoList, projectList, projectToShow = "All") {

    (0,_DOMmanipulation_js__WEBPACK_IMPORTED_MODULE_1__.clearDOM)();
    (0,_displayAddTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(todoList, projectList, projectToShow);
    (0,_DOMmanipulation_js__WEBPACK_IMPORTED_MODULE_1__.projectTitleDOM)(projectToShow);
    if (projectToShow === "All") {
        todoList.allTodos.forEach((todoItem, index) => (0,_DOMmanipulation_js__WEBPACK_IMPORTED_MODULE_1__.todoItemDOM)(todoItem, index, todoList, projectList, projectToShow));
    } else if (projectToShow === "Today") {
        todoList.allTodos.forEach((todoItem, index) => {     
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(todoItem.dueDate))) {
                (0,_DOMmanipulation_js__WEBPACK_IMPORTED_MODULE_1__.todoItemDOM)(todoItem, index, todoList, projectList, projectToShow);
            }
        });
    } else if (projectToShow === "Within a week") {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const oneWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(today, 1);
        oneWeek.setHours(0, 0, 0, 0);
        todoList.allTodos.forEach((todoItem, index) => {   
            const date = new Date(todoItem.dueDate);
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(date, {
                start: today,
                end: oneWeek
            })) {
                (0,_DOMmanipulation_js__WEBPACK_IMPORTED_MODULE_1__.todoItemDOM)(todoItem, index, todoList, projectList, projectToShow);
            }
        });
    } else if (projectToShow === "This month") {
        todoList.allTodos.forEach((todoItem, index) => {    
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(todoItem.dueDate))) {
                (0,_DOMmanipulation_js__WEBPACK_IMPORTED_MODULE_1__.todoItemDOM)(todoItem, index, todoList, projectList, projectToShow);
            }
        });
    } else {
        todoList.allTodos.forEach((todoItem, index) => {     
            if (todoItem.project === projectToShow) {
                (0,_DOMmanipulation_js__WEBPACK_IMPORTED_MODULE_1__.todoItemDOM)(todoItem, index, todoList, projectList, projectToShow);
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
    console.log("Retrieve todos:", todoInstanceArray);
    return todoInstanceArray;
}

function retrieveProjects() {
    console.log("Retrieve projects:", JSON.parse(localStorage.getItem("projects")));
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
/* harmony import */ var _addSamples_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addSamples.js */ "./src/addSamples.js");
/* harmony import */ var _classProjectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classProjectList.js */ "./src/classProjectList.js");
/* harmony import */ var _classTodoList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classTodoList.js */ "./src/classTodoList.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");
/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageLoad.js */ "./src/pageLoad.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");







let allTodoList = new _classTodoList_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
let allProjectList = new _classProjectList_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.retrieveProjects)() && (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.retrieveTodos)()) {
    allTodoList.allTodos = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.retrieveTodos)();
    allProjectList.allProjects = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.retrieveProjects)();
} else {
    (0,_addSamples_js__WEBPACK_IMPORTED_MODULE_0__["default"])(allTodoList, allProjectList);
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.updateStorage)(allTodoList, allProjectList);
}

(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_4__["default"])(allTodoList, allProjectList);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsNkJBQTZCLGlCQUFpQixnQkFBZ0IsMkNBQTJDLDRIQUE0SCxHQUFHLGdCQUFnQix3QkFBd0Isb0JBQW9CLG1DQUFtQyxHQUFHLGFBQWEseUNBQXlDLHNCQUFzQix5QkFBeUIsbUJBQW1CLEdBQUcsV0FBVyxvQkFBb0Isd0VBQXdFLEdBQUcsY0FBYywyQ0FBMkMsc0JBQXNCLEdBQUcsaUJBQWlCLHNCQUFzQixHQUFHLGtCQUFrQixxQkFBcUIsR0FBRyxpQkFBaUIsa0JBQWtCLEdBQUcsc0JBQXNCLHdCQUF3Qiw2QkFBNkIsR0FBRyxZQUFZLHVCQUF1QixHQUFHLFFBQVEsdUJBQXVCLHNCQUFzQiw2QkFBNkIsa0JBQWtCLEdBQUcsY0FBYyx5QkFBeUIsc0JBQXNCLG1DQUFtQyxHQUFHLG1CQUFtQixvQkFBb0Isd0JBQXdCLEdBQUcsZ0JBQWdCLHNCQUFzQixzQkFBc0IsNkJBQTZCLGdCQUFnQixHQUFHLHdDQUF3Qyw0Q0FBNEMsK0JBQStCLHNCQUFzQixzQ0FBc0MsZ0NBQWdDLGdCQUFnQixHQUFHLGNBQWMsc0JBQXNCLGtCQUFrQixvQkFBb0Isc0NBQXNDLDJCQUEyQixnQkFBZ0IsR0FBRyxXQUFXLG9CQUFvQiwrQkFBK0Isa0JBQWtCLEdBQUcsWUFBWSxzQkFBc0IsbUJBQW1CLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLDhCQUE4QixzQkFBc0Isd0JBQXdCLEdBQUcsa0JBQWtCLHdCQUF3QixrQkFBa0IsR0FBRyxjQUFjLHdCQUF3QixtQkFBbUIsd0JBQXdCLEdBQUcsWUFBWSxvQkFBb0IsNkJBQTZCLHFDQUFxQyw0QkFBNEIsR0FBRyx1QkFBdUIsb0JBQW9CLHVDQUF1QyxrQkFBa0IsR0FBRyxjQUFjLHdCQUF3QixrQkFBa0IsR0FBRyxXQUFXLG1CQUFtQixHQUFHLGlCQUFpQixvQkFBb0IsR0FBRyxvQkFBb0Isc0JBQXNCLEdBQUcsaUNBQWlDLHNCQUFzQixtQkFBbUIsNkJBQTZCLHdCQUF3QixHQUFHLGVBQWUsc0JBQXNCLGlCQUFpQixHQUFHLHVCQUF1QixxQkFBcUIsR0FBRyw0SUFBNEksdUJBQXVCLDhCQUE4QixHQUFHLGtDQUFrQyxxQkFBcUIsR0FBRyxtQkFBbUIsb0JBQW9CLDBCQUEwQixnQkFBZ0IsR0FBRyxPQUFPLGlGQUFpRixZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLDRCQUE0Qiw2QkFBNkIsaUJBQWlCLGdCQUFnQiwyQ0FBMkMsNEhBQTRILEdBQUcsZ0JBQWdCLHdCQUF3QixvQkFBb0IsbUNBQW1DLEdBQUcsYUFBYSx5Q0FBeUMsc0JBQXNCLHlCQUF5QixtQkFBbUIsR0FBRyxXQUFXLG9CQUFvQix3RUFBd0UsR0FBRyxjQUFjLDJDQUEyQyxzQkFBc0IsR0FBRyxpQkFBaUIsc0JBQXNCLEdBQUcsa0JBQWtCLHFCQUFxQixHQUFHLGlCQUFpQixrQkFBa0IsR0FBRyxzQkFBc0Isd0JBQXdCLDZCQUE2QixHQUFHLFlBQVksdUJBQXVCLEdBQUcsUUFBUSx1QkFBdUIsc0JBQXNCLDZCQUE2QixrQkFBa0IsR0FBRyxjQUFjLHlCQUF5QixzQkFBc0IsbUNBQW1DLEdBQUcsbUJBQW1CLG9CQUFvQix3QkFBd0IsR0FBRyxnQkFBZ0Isc0JBQXNCLHNCQUFzQiw2QkFBNkIsZ0JBQWdCLEdBQUcsd0NBQXdDLDRDQUE0QywrQkFBK0Isc0JBQXNCLHNDQUFzQyxnQ0FBZ0MsZ0JBQWdCLEdBQUcsY0FBYyxzQkFBc0Isa0JBQWtCLG9CQUFvQixzQ0FBc0MsMkJBQTJCLGdCQUFnQixHQUFHLFdBQVcsb0JBQW9CLCtCQUErQixrQkFBa0IsR0FBRyxZQUFZLHNCQUFzQixtQkFBbUIsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsOEJBQThCLHNCQUFzQix3QkFBd0IsR0FBRyxrQkFBa0Isd0JBQXdCLGtCQUFrQixHQUFHLGNBQWMsd0JBQXdCLG1CQUFtQix3QkFBd0IsR0FBRyxZQUFZLG9CQUFvQiw2QkFBNkIscUNBQXFDLDRCQUE0QixHQUFHLHVCQUF1QixvQkFBb0IsdUNBQXVDLGtCQUFrQixHQUFHLGNBQWMsd0JBQXdCLGtCQUFrQixHQUFHLFdBQVcsbUJBQW1CLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLG9CQUFvQixzQkFBc0IsR0FBRyxpQ0FBaUMsc0JBQXNCLG1CQUFtQiw2QkFBNkIsd0JBQXdCLEdBQUcsZUFBZSxzQkFBc0IsaUJBQWlCLEdBQUcsdUJBQXVCLHFCQUFxQixHQUFHLDRJQUE0SSx1QkFBdUIsOEJBQThCLEdBQUcsa0NBQWtDLHFCQUFxQixHQUFHLG1CQUFtQixvQkFBb0IsMEJBQTBCLGdCQUFnQixHQUFHLG1CQUFtQjtBQUM3Nk87QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNKZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNabUQ7QUFDWDtBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CLGVBQWUsbUVBQVM7O0FBRXhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENtRDtBQUNUO0FBQ2U7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsZUFBZSxtRUFBUztBQUN4QjtBQUNBLFNBQVMsNkRBQU87QUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQmdEO0FBQ1M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCwyQkFBMkIsZ0VBQVU7QUFDckMsNEJBQTRCLGdFQUFVO0FBQ3RDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ3dDO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxpQkFBaUIsNERBQU07QUFDdkIsa0JBQWtCLDREQUFNO0FBQ3hCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQmtEO0FBQ087QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLFNBQVMsaUVBQVc7QUFDcEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQjhDO0FBQ1c7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLFNBQVMsK0RBQVM7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQndDO0FBQ2lCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsVUFBVTtBQUNyQixhQUFhLFNBQVM7QUFDdEIsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksWUFBWTtBQUN4QixZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ2U7QUFDZixFQUFFLHNFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQixrQkFBa0IsNERBQU07QUFDeEIsZ0JBQWdCLDREQUFNLDBCQUEwQjs7QUFFaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRHdDO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBLHdCQUF3QiwyQkFBMkIsMkVBQTJFLGtDQUFrQyx3QkFBd0IsT0FBTyxrQ0FBa0MsbUlBQW1JOztBQUUzUztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QseURBQXlEOztBQUV6RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLDBPQUEwTzs7QUFFMU87QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZ0Q7QUFDRjtBQUNOOztBQUV6Qjs7QUFFZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQWU7QUFDdkIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDREQUFlO0FBQzNCLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywyREFBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFlO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQWU7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBZTtBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLHdEQUFXOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVPOztBQUVQLGdEQUFnRCxHQUFHO0FBQ25EOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0Msd0RBQVc7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOERBQThEOztBQUU5RCw4Q0FBOEMsSUFBSTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBVztBQUN2QixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNkRBQTZELE1BQU07QUFDbkU7QUFDQTtBQUNBLE1BQU07QUFDTix1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLDJEQUEyRCxPQUFPO0FBQ2xFO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMERBQTBEOztBQUUxRCw4Q0FBOEMsSUFBSTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBLDREQUE0RDs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBVztBQUN2QixTQUFTO0FBQ1Qsa0RBQWtELElBQUk7QUFDdEQ7QUFDQSxNQUFNO0FBQ047QUFDQSxrREFBa0QsSUFBSTtBQUN0RDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUJBQW1CLE1BQU07QUFDekI7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwYWtDOztBQUVuQjs7QUFFZiwwQkFBMEIscURBQUk7QUFDOUIsMEJBQTBCLHFEQUFJO0FBQzlCLDBCQUEwQixxREFBSTtBQUM5QiwwQkFBMEIscURBQUk7QUFDOUI7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDYmU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDMUJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDakRlOztBQUVmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQitDOztBQUVoQztBQUNmLElBQUksNERBQVU7QUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKMkU7QUFDMUI7QUFDRTtBQUNIO0FBQ087O0FBRXhDOztBQUVmLElBQUksNkRBQVE7QUFDWixJQUFJLDhEQUFjO0FBQ2xCLElBQUksb0VBQWU7QUFDbkI7QUFDQSx1REFBdUQsZ0VBQVc7QUFDbEUsTUFBTTtBQUNOO0FBQ0EsZ0JBQWdCLG9EQUFPO0FBQ3ZCLGdCQUFnQixnRUFBVztBQUMzQjtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQTtBQUNBLHdCQUF3QixvREFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQWdCO0FBQ2hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsZ0JBQWdCLGdFQUFXO0FBQzNCO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBLGdCQUFnQixvREFBVztBQUMzQixnQkFBZ0IsZ0VBQVc7QUFDM0I7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQSxnQkFBZ0IsZ0VBQVc7QUFDM0I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9DK0I7O0FBRXhCO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGtEQUFJO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQitDO0FBQ2I7O0FBRW5COztBQUVmO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksNERBQWE7QUFDakIsSUFBSSxxREFBUTtBQUNaOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RrQztBQUNjO0FBQ21DOztBQUVwRTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIscURBQUk7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQSxNQUFNOztBQUVOOztBQUVBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMscURBQUk7O0FBRXJDLE1BQU07O0FBRU4saUNBQWlDLHFEQUFJOztBQUVyQzs7QUFFQSxJQUFJLCtEQUFhO0FBQ2pCLElBQUksNERBQWU7O0FBRW5COztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdDbUQ7QUFDSjs7QUFFaEM7O0FBRWYsSUFBSSwrREFBVztBQUNmLElBQUksK0RBQWU7O0FBRW5COzs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUM7QUFDTztBQUNOO0FBQ3lDO0FBQzlDO0FBQ2hCOztBQUVyQixzQkFBc0IseURBQVE7QUFDOUIseUJBQXlCLDREQUFXOztBQUVwQyxJQUFJLGtFQUFnQixNQUFNLCtEQUFhO0FBQ3ZDLDJCQUEyQiwrREFBYTtBQUN4QyxpQ0FBaUMsa0VBQWdCO0FBQ2pELEVBQUU7QUFDRixJQUFJLDBEQUFVO0FBQ2QsSUFBSSwrREFBYTtBQUNqQjs7QUFFQSx3REFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkV2Vla3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc01vbnRoL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1dpdGhpbkludGVydmFsL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvRE9NbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2FkZFNhbXBsZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY2xhc3NQcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jbGFzc1RvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY2xhc3NUb2RvTGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9kaXNwbGF5QWRkVG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9kaXNwbGF5VG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL29wZXJhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL29wZXJhdGVUb2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDhweCArIDAuNHZoICsgMC40dncpO1xcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDU1LCA1NSk7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoY2FsYygxNTBweCArIDV2dyksIG1heC1jb250ZW50KSAxZnI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjI0LCAyMjQpO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbi5zaWRlYmFyIGxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3ViOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi44O7XFxcIjtcXG59XFxuXFxuLmFkZFByb2plY3Qge1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLmFkZFByb2plY3RJbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC40cmVtO1xcbn1cXG5cXG4udG9kYXkge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDJyZW0gM3JlbTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4udG9kb0l0ZW1zIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50b2RvSXRlbSAud3JhcHBlciwgLnRvZG9JdGVtIGZvcm0ge1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjFyZW0gbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nOiAwIDAgMC4ycmVtIDFyZW07XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXIgc3RhcnQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgICBwbGFjZS1pdGVtczogc3RyZXRjaDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubGVmdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaW1wb3J0YW50IC50aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaW1wb3J0YW50IC50aXRsZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiICpcXFwiO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4uZHVlRGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBjb2xvcjogZ3JlZW47XFxuICAgIHBhZGRpbmc6IDAuMXJlbSAwO1xcbn1cXG5cXG4ucmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLm9wZXJhdGlvbkJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC5pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDAuMXJlbTtcXG59XFxuXFxuLmJ1dHRvbiwgaW5wdXRbdHlwZT1zdWJtaXRdIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uY29tcGxldGUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb21wbGV0ZTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIuKXi1xcXCI7XFxufVxcblxcbi5jb21wbGV0ZWQsIC5jb21wbGV0ZWQgLnRpdGxlLCAuY29tcGxldGVkIC5kZXNjcmlwdGlvbiwgLmNvbXBsZXRlZCAuZHVlRGF0ZSwgLmNvbXBsZXRlZCAucHJvamVjdCwgLmNvbXBsZXRlZCAuZGVsZXRlLCAuY29tcGxldGVkIC5lZGl0IHtcXG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbi5jb21wbGV0ZWQgLmNvbXBsZXRlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi4pePXFxcIjtcXG59XFxuXFxuLm90aGVyRGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMscUhBQXFIO0FBQ3pIOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlFQUFpRTtBQUNyRTs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlOztJQUVmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLHdCQUF3Qjs7SUFFeEIsYUFBYTtJQUNiLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IGNhbGMoOHB4ICsgMC40dmggKyAwLjR2dyk7XFxuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNTUsIDU1KTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChjYWxjKDE1MHB4ICsgNXZ3KSwgbWF4LWNvbnRlbnQpIDFmcjtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjQsIDIyNCk7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuXFxuLnNpZGViYXIgbGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdWI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCLjg7tcXFwiO1xcbn1cXG5cXG4uYWRkUHJvamVjdCB7XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4uYWRkUHJvamVjdElucHV0IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XFxufVxcblxcbi50b2RheSB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgcGFkZGluZzogMnJlbSAzcmVtO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi50b2RvSXRlbXMge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRvZG9JdGVtIC53cmFwcGVyLCAudG9kb0l0ZW0gZm9ybSB7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuMXJlbSBsaWdodGdyZXk7XFxuICAgIHBhZGRpbmc6IDAgMCAwLjJyZW0gMXJlbTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBzdGFydDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgIHBsYWNlLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5sZWZ0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5pbXBvcnRhbnQgLnRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pbXBvcnRhbnQgLnRpdGxlOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIgKlxcXCI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5kdWVEYXRlIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGNvbG9yOiBncmVlbjtcXG4gICAgcGFkZGluZzogMC4xcmVtIDA7XFxufVxcblxcbi5yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4ub3BlcmF0aW9uQnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LmlucHV0IHtcXG4gICAgcGFkZGluZzogMC4xcmVtO1xcbn1cXG5cXG4uYnV0dG9uLCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5jb21wbGV0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbXBsZXRlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi4peLXFxcIjtcXG59XFxuXFxuLmNvbXBsZXRlZCwgLmNvbXBsZXRlZCAudGl0bGUsIC5jb21wbGV0ZWQgLmRlc2NyaXB0aW9uLCAuY29tcGxldGVkIC5kdWVEYXRlLCAuY29tcGxldGVkIC5wcm9qZWN0LCAuY29tcGxldGVkIC5kZWxldGUsIC5jb21wbGV0ZWQgLmVkaXQge1xcbiAgICBjb2xvcjogbGlnaHRncmV5O1xcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLmNvbXBsZXRlZCAuY29tcGxldGU6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCLil49cXFwiO1xcbn1cXG5cXG4ub3RoZXJEZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxcmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkRGF5cyBmcm9tIFwiLi4vYWRkRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkV2Vla3NcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiB3ZWVrcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSB3ZWVrcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNCB3ZWVrcyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkV2Vla3MobmV3IERhdGUoMjAxNCwgOCwgMSksIDQpXG4gKiAvLz0+IE1vbiBTZXAgMjkgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFdlZWtzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICB2YXIgZGF5cyA9IGFtb3VudCAqIDc7XG4gIHJldHVybiBhZGREYXlzKGRpcnR5RGF0ZSwgZGF5cyk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZU1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBtb250aCAoYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBtb250aCAoYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgbW9udGggKGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMiBTZXB0ZW1iZXIgMjAxNCBhbmQgMjUgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyKSwgbmV3IERhdGUoMjAxNCwgOCwgMjUpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAyIFNlcHRlbWJlciAyMDE0IGFuZCAyNSBTZXB0ZW1iZXIgMjAxNSBpbiB0aGUgc2FtZSBtb250aD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZU1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIpLCBuZXcgRGF0ZSgyMDE1LCA4LCAyNSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lTW9udGgoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdC5nZXRGdWxsWWVhcigpID09PSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBkYXRlTGVmdC5nZXRNb250aCgpID09PSBkYXRlUmlnaHQuZ2V0TW9udGgoKTtcbn0iLCJpbXBvcnQgaXNTYW1lTW9udGggZnJvbSBcIi4uL2lzU2FtZU1vbnRoL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RoaXNNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIG1vbnRoIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgbW9udGggYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAxNSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMTUpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lTW9udGgoRGF0ZS5ub3coKSwgZGlydHlEYXRlKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNXaXRoaW5JbnRlcnZhbFxuICogQGNhdGVnb3J5IEludGVydmFsIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHdpdGhpbiB0aGUgaW50ZXJ2YWw/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB3aXRoaW4gdGhlIGludGVydmFsPyAoSW5jbHVkaW5nIHN0YXJ0IGFuZCBlbmQuKVxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtJbnRlcnZhbH0gaW50ZXJ2YWwgLSB0aGUgaW50ZXJ2YWwgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB3aXRoaW4gdGhlIGludGVydmFsXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBUaGUgc3RhcnQgb2YgYW4gaW50ZXJ2YWwgY2Fubm90IGJlIGFmdGVyIGl0cyBlbmRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IERhdGUgaW4gaW50ZXJ2YWwgY2Fubm90IGJlIGBJbnZhbGlkIERhdGVgXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgZGF0ZSB3aXRoaW4gdGhlIGludGVydmFsOlxuICogaXNXaXRoaW5JbnRlcnZhbChuZXcgRGF0ZSgyMDE0LCAwLCAzKSwge1xuICogICBzdGFydDogbmV3IERhdGUoMjAxNCwgMCwgMSksXG4gKiAgIGVuZDogbmV3IERhdGUoMjAxNCwgMCwgNylcbiAqIH0pXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBkYXRlIG91dHNpZGUgb2YgdGhlIGludGVydmFsOlxuICogaXNXaXRoaW5JbnRlcnZhbChuZXcgRGF0ZSgyMDE0LCAwLCAxMCksIHtcbiAqICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTQsIDAsIDEpLFxuICogICBlbmQ6IG5ldyBEYXRlKDIwMTQsIDAsIDcpXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgZGF0ZSBlcXVhbCB0byBpbnRlcnZhbCBzdGFydDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwoZGF0ZSwgeyBzdGFydCwgZW5kOiBkYXRlIH0pIC8vID0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGRhdGUgZXF1YWwgdG8gaW50ZXJ2YWwgZW5kOlxuICogaXNXaXRoaW5JbnRlcnZhbChkYXRlLCB7IHN0YXJ0OiBkYXRlLCBlbmQgfSkgLy8gPT4gdHJ1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1dpdGhpbkludGVydmFsKGRpcnR5RGF0ZSwgaW50ZXJ2YWwpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgc3RhcnRUaW1lID0gdG9EYXRlKGludGVydmFsLnN0YXJ0KS5nZXRUaW1lKCk7XG4gIHZhciBlbmRUaW1lID0gdG9EYXRlKGludGVydmFsLmVuZCkuZ2V0VGltZSgpOyAvLyBUaHJvdyBhbiBleGNlcHRpb24gaWYgc3RhcnQgZGF0ZSBpcyBhZnRlciBlbmQgZGF0ZSBvciBpZiBhbnkgZGF0ZSBpcyBgSW52YWxpZCBEYXRlYFxuXG4gIGlmICghKHN0YXJ0VGltZSA8PSBlbmRUaW1lKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIGludGVydmFsJyk7XG4gIH1cblxuICByZXR1cm4gdGltZSA+PSBzdGFydFRpbWUgJiYgdGltZSA8PSBlbmRUaW1lO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGRpc3BsYXlUb2RvTGlzdCBmcm9tIFwiLi9kaXNwbGF5VG9kb0xpc3RcIjtcbmltcG9ydCBvcGVyYXRlUHJvamVjdCBmcm9tIFwiLi9vcGVyYXRlUHJvamVjdFwiO1xuaW1wb3J0IG9wZXJhdGVUb2RvIGZyb20gXCIuL29wZXJhdGVUb2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVwYWdlRE9NKHRvZG9MaXN0LCBwcm9qZWN0TGlzdCkge1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHkudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlRoZSBPZGluIFByb2plY3Q6IFRvZG8gTGlzdFwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IGFsbFRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGFsbFRvZG9zLnRleHRDb250ZW50ID0gXCJBbGxcIjtcbiAgICBhbGxUb2Rvcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgZGlzcGxheVRvZG9MaXN0KHRvZG9MaXN0LCBwcm9qZWN0TGlzdCk7XG4gICAgfSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoYWxsVG9kb3MpO1xuXG4gICAgZm9yIChsZXQgaXRlbSBvZiBwcm9qZWN0TGlzdC5hbGxQcm9qZWN0cykge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic3ViXCIpO1xuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgZGlzcGxheVRvZG9MaXN0KHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgYWRkUHJvamVjdEZvcm0ubmFtZSA9IFwiYWRkUHJvamVjdEZvcm1cIjtcbiAgICBhZGRQcm9qZWN0Rm9ybS5vbnN1Ym1pdCA9ICgpID0+IG9wZXJhdGVQcm9qZWN0KFwiYWRkXCIsIHByb2plY3RMaXN0LCB0b2RvTGlzdCk7XG4gICAgY29uc3QgYWRkUHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGFkZFByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIik7XG4gICAgYWRkUHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9qZWN0SW5wdXRcIik7XG4gICAgYWRkUHJvamVjdElucHV0Lm5hbWUgPSBcImFkZFByb2plY3RJbnB1dFwiO1xuICAgIGFkZFByb2plY3RJbnB1dC5wbGFjZWhvbGRlciA9IFwiTkVXIFBST0pFQ1QgTkFNRVwiO1xuICAgIGFkZFByb2plY3RJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgYWRkUHJvamVjdElucHV0LmF1dG9jb21wbGV0ZSA9IFwib2ZmXCI7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFByb2plY3RcIik7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQUREXCI7XG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdElucHV0KTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbiAgICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKGFkZFByb2plY3RGb3JtKTtcbiAgICB1bC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcblxuICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHRvZGF5LmNsYXNzTGlzdC5hZGQoXCJ0b2RheVwiKTtcbiAgICB0b2RheS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICB0b2RheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgZGlzcGxheVRvZG9MaXN0KHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgXCJUb2RheVwiKTtcbiAgICB9KTtcbiAgICB1bC5hcHBlbmRDaGlsZCh0b2RheSk7XG4gICAgY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgdGhpc1dlZWsudGV4dENvbnRlbnQgPSBcIldpdGhpbiBhIHdlZWtcIjtcbiAgICB0aGlzV2Vlay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgZGlzcGxheVRvZG9MaXN0KHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgXCJXaXRoaW4gYSB3ZWVrXCIpO1xuICAgIH0pO1xuICAgIHVsLmFwcGVuZENoaWxkKHRoaXNXZWVrKTtcbiAgICBjb25zdCB0aGlzTW9udGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgdGhpc01vbnRoLnRleHRDb250ZW50ID0gXCJUaGlzIG1vbnRoXCI7XG4gICAgdGhpc01vbnRoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBkaXNwbGF5VG9kb0xpc3QodG9kb0xpc3QsIHByb2plY3RMaXN0LCBcIlRoaXMgbW9udGhcIik7XG4gICAgfSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQodGhpc01vbnRoKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRpdGxlJyk7XG4gICAgcHJvamVjdFRpdGxlLmlkID0gXCJwcm9qZWN0VGl0bGVcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgY29uc3QgdG9kb0l0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvSXRlbXMuY2xhc3NMaXN0LmFkZCgndG9kb0l0ZW1zJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvSXRlbXMpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0VGl0bGVET00ocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFRpdGxlXCIpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckRPTSgpIHtcbiAgICBjb25zdCB0b2RvSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9JdGVtc1wiKTtcbiAgICB0b2RvSXRlbXMudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kb0RPTSh0b2RvTGlzdCwgcHJvamVjdExpc3QsIHByb2plY3RQYWdlKSB7XG5cbiAgICBjb25zdCB0b2RvSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9JdGVtc1wiKTtcblxuICAgIGNvbnN0IGFkZFRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgYWRkVG9kb0Zvcm0ubmFtZSA9IFwiYWRkVG9kb0Zvcm1cIjtcbiAgICBhZGRUb2RvRm9ybS5vbnN1Ym1pdCA9ICgpID0+IG9wZXJhdGVUb2RvKFwiYWRkXCIsIHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgXCJOQVwiLCBwcm9qZWN0UGFnZSk7XG5cbiAgICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRUb2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG9JdGVtJyk7XG4gICAgYWRkVG9kby5pZCA9IGdlbmVyYXRlSWQoXCJhZGRcIik7XG4gICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVG9kbyk7XG4gICAgdG9kb0l0ZW1zLmFwcGVuZENoaWxkKGFkZFRvZG9Gb3JtKTtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcbiAgICBhZGRUb2RvLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gICAgdG9kb0NvbXBsZXRlQnV0dG9uRE9NKGFkZFRvZG8uaWQpO1xuXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKTtcbiAgICBjb25zdCBkZXRhaWxzTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlsc0xlZnQuY2xhc3NMaXN0LmFkZChcImxlZnRcIik7XG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZXRhaWxzTGVmdCk7XG4gICAgY29uc3QgZGV0YWlsc1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXRhaWxzUmlnaHQuY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZGV0YWlsc1JpZ2h0KTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuXG4gICAgdG9kb0RlbGV0ZUJ1dHRvbkRPTShhZGRUb2RvLmlkKTtcblxuICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kby1hZGQgLmxlZnRgKTtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRpdGxlSW5wdXQuYXV0b2NvbXBsZXRlID0gXCJvZmZcIjtcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSBcInRpdGxlSW5wdXRcIjtcbiAgICB0aXRsZUlucHV0LmlkID0gXCJ0aXRsZUlucHV0XCI7XG4gICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGl0bGVcIjtcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBsZWZ0LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBkZXNjcmlwdGlvbklucHV0LmF1dG9jb21wbGV0ZSA9IFwib2ZmXCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gXCJkZXNjcmlwdGlvbklucHV0XCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9IFwiZGVzY3JpcHRpb25JbnB1dFwiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIk5vdGVzXCI7XG4gICAgbGVmdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAgIGNvbnN0IG90aGVyRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3RoZXJEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJvdGhlckRldGFpbHNcIik7XG5cbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZHVlRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJkdWVEYXRlXCIpO1xuICAgIGR1ZURhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIik7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9IFwiZHVlRGF0ZUlucHV0XCI7XG4gICAgZHVlRGF0ZUlucHV0LmlkID0gXCJkdWVEYXRlSW5wdXRcIjtcbiAgICBvdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIik7XG4gICAgcHJvamVjdElucHV0Lm5hbWUgPSBcInByb2plY3RJbnB1dFwiO1xuICAgIHByb2plY3RJbnB1dC5pZCA9IFwicHJvamVjdElucHV0XCI7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0TGlzdC5hbGxQcm9qZWN0cykge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0O1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgICBpZiAocHJvamVjdFBhZ2UgPT09IHByb2plY3QpIHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdElucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuICAgIG90aGVyRGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFwiKTtcbiAgICBwcmlvcml0eUlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgcHJpb3JpdHlJbnB1dC5uYW1lID0gXCJwcmlvcml0eUlucHV0XCI7XG4gICAgcHJpb3JpdHlJbnB1dC5pZCA9IFwicHJpb3JpdHlJbnB1dFwiO1xuICAgIG90aGVyRGV0YWlscy5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcblxuICAgIGxlZnQuYXBwZW5kQ2hpbGQob3RoZXJEZXRhaWxzKTtcblxuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvZG8tYWRkIC5yaWdodGApO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgc3VibWl0QnV0dG9uLnZhbHVlID0gXCJBZGRcIjtcbiAgICByaWdodC5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VG9kb0RPTShpZCwgaW5kZXgsIHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgcHJvamVjdFBhZ2UpIHtcblxuICAgIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gICAgdG9kb0l0ZW0udGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgY29uc3QgZWRpdFRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZWRpdFRvZG9Gb3JtLm5hbWUgPSBcImVkaXRUb2RvRm9ybVwiO1xuICAgIGVkaXRUb2RvRm9ybS5vbnN1Ym1pdCA9ICgpID0+IG9wZXJhdGVUb2RvKFwiZWRpdFwiLCB0b2RvTGlzdCwgcHJvamVjdExpc3QsIGluZGV4LCBwcm9qZWN0UGFnZSk7XG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZWRpdFRvZG9Gb3JtKTtcblxuICAgIGNvbnN0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb21wbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICAgIGNvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcbiAgICBlZGl0VG9kb0Zvcm0uYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xuXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKTtcblxuICAgIGNvbnN0IGRldGFpbHNMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXRhaWxzTGVmdC5jbGFzc0xpc3QuYWRkKFwibGVmdFwiKTtcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGRldGFpbHNMZWZ0KTtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdGl0bGVJbnB1dC5hdXRvY29tcGxldGUgPSBcIm9mZlwiO1xuICAgIHRpdGxlSW5wdXQubmFtZSA9IFwidGl0bGVJbnB1dFwiO1xuICAgIHRpdGxlSW5wdXQuaWQgPSBcInRpdGxlSW5wdXRcIjtcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gdG9kb0xpc3QuYWxsVG9kb3NbaW5kZXhdW1widGl0bGVcIl07XG4gICAgZGV0YWlsc0xlZnQuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0XCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuYXV0b2NvbXBsZXRlID0gXCJvZmZcIjtcbiAgICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSBcImRlc2NyaXB0aW9uSW5wdXRcIjtcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gXCJkZXNjcmlwdGlvbklucHV0XCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRvZG9MaXN0LmFsbFRvZG9zW2luZGV4XVtcImRlc2NyaXB0aW9uXCJdO1xuICAgIGRldGFpbHNMZWZ0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gICAgY29uc3Qgb3RoZXJEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdGhlckRldGFpbHMuY2xhc3NMaXN0LmFkZChcIm90aGVyRGV0YWlsc1wiKTtcblxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkdWVEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImR1ZURhdGVcIik7XG4gICAgZHVlRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFwiKTtcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gXCJkdWVEYXRlSW5wdXRcIjtcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSBcImR1ZURhdGVJbnB1dFwiO1xuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IHRvZG9MaXN0LmFsbFRvZG9zW2luZGV4XVtcImR1ZURhdGVcIl07XG4gICAgb3RoZXJEZXRhaWxzLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0XCIpO1xuICAgIHByb2plY3RJbnB1dC5uYW1lID0gXCJwcm9qZWN0SW5wdXRcIjtcbiAgICBwcm9qZWN0SW5wdXQuaWQgPSBcInByb2plY3RJbnB1dFwiO1xuICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdExpc3QuYWxsUHJvamVjdHMpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdDtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgcHJvamVjdElucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuICAgIHByb2plY3RJbnB1dC52YWx1ZSA9IHRvZG9MaXN0LmFsbFRvZG9zW2luZGV4XVtcInByb2plY3RcIl07XG4gICAgb3RoZXJEZXRhaWxzLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG5cbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0XCIpO1xuICAgIHByaW9yaXR5SW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBwcmlvcml0eUlucHV0Lm5hbWUgPSBcInByaW9yaXR5SW5wdXRcIjtcbiAgICBwcmlvcml0eUlucHV0LmlkID0gXCJwcmlvcml0eUlucHV0XCI7XG4gICAgcHJpb3JpdHlJbnB1dC5jaGVja2VkID0gdG9kb0xpc3QuYWxsVG9kb3NbaW5kZXhdW1wicHJpb3JpdHlcIl07XG4gICAgb3RoZXJEZXRhaWxzLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuXG4gICAgZGV0YWlsc0xlZnQuYXBwZW5kQ2hpbGQob3RoZXJEZXRhaWxzKTtcblxuICAgIGNvbnN0IGRldGFpbHNSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlsc1JpZ2h0LmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKTtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IFwiRWRpdFwiO1xuICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZGV0YWlsc1JpZ2h0KTtcbiAgICBlZGl0VG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9JdGVtRE9NKHRvZG8sIGluZGV4LCB0b2RvTGlzdCwgcHJvamVjdExpc3QsIHByb2plY3RQYWdlKSB7XG5cbiAgICBjb25zdCB0b2RvSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9JdGVtc1wiKTtcbiAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgndG9kb0l0ZW0nKTtcbiAgICB0b2RvSXRlbS5pZCA9IGdlbmVyYXRlSWQoaW5kZXgpO1xuICAgIHRvZG9JdGVtcy5hcHBlbmRDaGlsZCh0b2RvSXRlbSk7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgICB0b2RvQ29tcGxldGVCdXR0b25ET00odG9kb0l0ZW0uaWQsIGluZGV4LCB0b2RvTGlzdCwgcHJvamVjdExpc3QsIHByb2plY3RQYWdlKTtcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG4gICAgY29uc3QgZGV0YWlsc0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbHNMZWZ0LmNsYXNzTGlzdC5hZGQoXCJsZWZ0XCIpO1xuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZGV0YWlsc0xlZnQpO1xuICAgIGNvbnN0IGRldGFpbHNSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlsc1JpZ2h0LmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKTtcbiAgICBjb25zdCBvcGVyYXRpb25CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvcGVyYXRpb25CdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJvcGVyYXRpb25CdXR0b25zXCIpO1xuICAgIGRldGFpbHNSaWdodC5hcHBlbmRDaGlsZChvcGVyYXRpb25CdXR0b25zKTtcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGRldGFpbHNSaWdodCk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChkZXRhaWxzKTtcblxuICAgIHRvZG9FZGl0QnV0dG9uRE9NKHRvZG9JdGVtLmlkLCBpbmRleCwgdG9kb0xpc3QsIHByb2plY3RMaXN0LCBwcm9qZWN0UGFnZSk7XG4gICAgdG9kb0RlbGV0ZUJ1dHRvbkRPTSh0b2RvSXRlbS5pZCwgaW5kZXgsIHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgcHJvamVjdFBhZ2UpO1xuXG4gICAgZm9yIChsZXQgcHJvcGVydHkgaW4gdG9kbykge1xuICAgICAgICB0b2RvUHJvcGVydHlET00oaW5kZXgsIHRyaW1Qcm9wZXJ0eU5hbWUocHJvcGVydHkpLCB0b2RvW3Byb3BlcnR5XSk7XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHRvZG9Db21wbGV0ZUJ1dHRvbkRPTShpZCwgaW5kZXggPSBcIk5BXCIsIHRvZG9MaXN0ID0ge30sIHByb2plY3RMaXN0ID0gW10sIHByb2plY3RQYWdlID0gXCJBbGxcIil7XG5cbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH0gZGl2YCk7XG4gICAgY29uc3QgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gICAgY29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpO1xuICAgIGlmICghaXNOYU4oaW5kZXgpKSB7XG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgb3BlcmF0ZVRvZG8oXCJjaGFuZ2VTdGF0dXNcIiwgdG9kb0xpc3QsIHByb2plY3RMaXN0LCBpbmRleCwgcHJvamVjdFBhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTtcblxufVxuXG5mdW5jdGlvbiB0b2RvUHJvcGVydHlET00oaW5kZXgsIHByb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZSkge1xuXG4gICAgaWYgKHByb3BlcnR5TmFtZSA9PT0gXCJzdGF0dXNcIikge1xuICAgICAgICBpZiAocHJvcGVydHlWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kby0ke2luZGV4fWApO1xuICAgICAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAocHJvcGVydHlOYW1lID09PSBcInByb2plY3RcIikge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9kby0ke2luZGV4fSAucmlnaHRgKTtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9wZXJ0eS5jbGFzc0xpc3QuYWRkKHByb3BlcnR5TmFtZSk7XG4gICAgICAgIHByb3BlcnR5LnRleHRDb250ZW50ID0gcHJvcGVydHlWYWx1ZTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHByb3BlcnR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJvcGVydHlWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvZG8tJHtpbmRleH0gLmxlZnRgKTtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eU5hbWUgPT09IFwicHJpb3JpdHlcIikge1xuICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwiaW1wb3J0YW50XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY2xhc3NMaXN0LmFkZChwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5LnRleHRDb250ZW50ID0gcHJvcGVydHlWYWx1ZTtcbiAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvcGVydHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHRvZG9FZGl0QnV0dG9uRE9NKGlkLCBpbmRleCA9IFwiTkFcIiwgdG9kb0xpc3QgPSB7fSwgcHJvamVjdExpc3QgPSBbXSwgcHJvamVjdFBhZ2UgPSBcIkFsbFwiKXtcblxuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfSAub3BlcmF0aW9uQnV0dG9uc2ApO1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVcIjtcbiAgICBpZiAoIWlzTmFOKGluZGV4KSkge1xuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGVkaXRUb2RvRE9NKGlkLCBpbmRleCwgdG9kb0xpc3QsIHByb2plY3RMaXN0LCBwcm9qZWN0UGFnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbn1cblxuZnVuY3Rpb24gdG9kb0RlbGV0ZUJ1dHRvbkRPTShpZCwgaW5kZXggPSBcIk5BXCIsIHRvZG9MaXN0ID0ge30sIHByb2plY3RMaXN0ID0gW10sIHByb2plY3RQYWdlKXtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgaWYgKCFpc05hTihpbmRleCkpIHtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG9wZXJhdGVUb2RvKFwiZGVsZXRlXCIsIHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgaW5kZXgsIHByb2plY3RQYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfSAub3BlcmF0aW9uQnV0dG9uc2ApO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGVCdXR0b24udHlwZSA9IFwicmVzZXRcIjtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9IC5yaWdodGApO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJZChpbmRleCkge1xuICAgIHJldHVybiBgdG9kby0ke2luZGV4fWA7XG59XG5cbmZ1bmN0aW9uIHRyaW1Qcm9wZXJ0eU5hbWUocmF3TmFtZSkge1xuICAgIHJldHVybiByYXdOYW1lLnNsaWNlKDEpO1xufSIsImltcG9ydCBUb2RvIGZyb20gXCIuL2NsYXNzVG9kby5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRTYW1wbGVzKHRvZG9MaXN0LCBwcm9qZWN0TGlzdCkge1xuXG4gICAgbGV0IHNhbXBsZVRvZG8xID0gbmV3IFRvZG8oXCJTYW1wbGUgVGl0bGUgMVwiLCBcInNhbXBsZSAxXCIsIFwiMjAyMi0xMS0xMVwiLCBmYWxzZSwgZmFsc2UsIHByb2plY3RMaXN0LmFsbFByb2plY3RzWzBdKTtcbiAgICBsZXQgc2FtcGxlVG9kbzIgPSBuZXcgVG9kbyhcIlNhbXBsZSBUaXRsZSAyXCIsIFwic2FtcGxlIDJcIiwgXCIyMDIyLTExLTE3XCIsIGZhbHNlLCB0cnVlLCBwcm9qZWN0TGlzdC5hbGxQcm9qZWN0c1sxXSk7XG4gICAgbGV0IHNhbXBsZVRvZG8zID0gbmV3IFRvZG8oXCJTYW1wbGUgVGl0bGUgM1wiLCBcInNhbXBsZSAzXCIsIFwiMjAyMi0xMS0xOFwiLCB0cnVlLCBmYWxzZSwgcHJvamVjdExpc3QuYWxsUHJvamVjdHNbMl0pO1xuICAgIGxldCBzYW1wbGVUb2RvNCA9IG5ldyBUb2RvKFwiU2FtcGxlIFRpdGxlIDRcIiwgXCJzYW1wbGUgNFwiLCBcIjIwMjItMTAtMTlcIiwgdHJ1ZSwgZmFsc2UsIHByb2plY3RMaXN0LmFsbFByb2plY3RzWzJdKTtcbiAgICBcbiAgICB0b2RvTGlzdC5hbGxUb2RvcyA9IFtzYW1wbGVUb2RvMSwgc2FtcGxlVG9kbzIsIHNhbXBsZVRvZG8zLCBzYW1wbGVUb2RvNF07XG5cbiAgICBjb25zb2xlLmxvZyhcIlNhbXBsZXMgYWRkZWQuXCIpXG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RMaXN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGFsbFByb2plY3RzID0gW1wiUGVyc29uYWxcIiwgXCJTdHVkeVwiLCBcIldvcmtcIl0pIHtcbiAgICAgICAgdGhpcy5fYWxsUHJvamVjdHMgPSBhbGxQcm9qZWN0cztcbiAgICB9XG5cbiAgICBnZXQgYWxsUHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbGxQcm9qZWN0cztcbiAgICB9XG5cbiAgICBzZXQgYWxsUHJvamVjdHMobGlzdElucHV0KSB7XG4gICAgICAgIHRoaXMuX2FsbFByb2plY3RzID0gbGlzdElucHV0O1xuICAgIH1cblxuICAgIGFkZChwcm9qZWN0TmFtZSkge1xuICAgICAgICB0aGlzLmFsbFByb2plY3RzLnB1c2gocHJvamVjdE5hbWUpO1xuICAgIH1cblxuICAgIGRlbGV0ZShpbmRleCkge1xuICAgICAgICB0aGlzLmFsbFByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgZWRpdChpbmRleCwgbmV3UHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5hbGxQcm9qZWN0c1tpbmRleF0gPSBuZXdQcm9qZWN0TmFtZTtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuICAgIGdldCBwcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICAgIH1cbiAgICBnZXQgc3RhdHVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICAgIH1cbiAgICBnZXQgcHJvamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3Q7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHRpdGxlSW5wdXQpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZUlucHV0O1xuICAgIH1cbiAgICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb25JbnB1dCkge1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQ7XG4gICAgfVxuICAgIHNldCBkdWVEYXRlKGR1ZURhdGVJbnB1dCkge1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZUlucHV0O1xuICAgIH1cbiAgICBzZXQgcHJpb3JpdHkocHJpb3JpdHlJbnB1dCkge1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5SW5wdXQ7XG4gICAgfVxuICAgIHNldCBzdGF0dXMoc3RhdHVzSW5wdXQpIHtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzSW5wdXQ7XG4gICAgfVxuICAgIHNldCBwcm9qZWN0KHByb2plY3RJbnB1dCkge1xuICAgICAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdElucHV0O1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGFsbFRvZG9zID0gW10pIHtcbiAgICAgICAgdGhpcy5fYWxsVG9kb3MgPSBhbGxUb2RvcztcbiAgICB9XG5cbiAgICBnZXQgYWxsVG9kb3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbGxUb2RvcztcbiAgICB9XG5cbiAgICBzZXQgYWxsVG9kb3MobGlzdElucHV0KSB7XG4gICAgICAgIHRoaXMuX2FsbFRvZG9zID0gbGlzdElucHV0O1xuICAgIH1cblxuICAgIGFkZCh0b2RvSXRlbSkge1xuICAgICAgICB0aGlzLmFsbFRvZG9zLnB1c2godG9kb0l0ZW0pO1xuICAgIH1cblxuICAgIGRlbGV0ZShpbmRleCkge1xuICAgICAgICB0aGlzLmFsbFRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgZWRpdChpbmRleCwgbmV3VG9kb0l0ZW0pIHtcbiAgICAgICAgdGhpcy5hbGxUb2Rvc1tpbmRleF0gPSBuZXdUb2RvSXRlbTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBhZGRUb2RvRE9NIH0gZnJvbSBcIi4vRE9NbWFuaXB1bGF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlBZGRUb2RvKHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgcHJvamVjdFBhZ2UpIHtcbiAgICBhZGRUb2RvRE9NKHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgcHJvamVjdFBhZ2UpO1xufSIsImltcG9ydCB7IGFkZFdlZWtzLCBpc1RoaXNNb250aCwgaXNUb2RheSwgaXNXaXRoaW5JbnRlcnZhbH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgZGlzcGxheUFkZFRvZG8gZnJvbSBcIi4vZGlzcGxheUFkZFRvZG8uanNcIjtcbmltcG9ydCB7IHRvZG9JdGVtRE9NIH0gZnJvbSBcIi4vRE9NbWFuaXB1bGF0aW9uLmpzXCI7XG5pbXBvcnQgeyBjbGVhckRPTSB9IGZyb20gXCIuL0RPTW1hbmlwdWxhdGlvbi5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdFRpdGxlRE9NIH0gZnJvbSBcIi4vRE9NbWFuaXB1bGF0aW9uLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlUb2RvTGlzdCh0b2RvTGlzdCwgcHJvamVjdExpc3QsIHByb2plY3RUb1Nob3cgPSBcIkFsbFwiKSB7XG5cbiAgICBjbGVhckRPTSgpO1xuICAgIGRpc3BsYXlBZGRUb2RvKHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgcHJvamVjdFRvU2hvdyk7XG4gICAgcHJvamVjdFRpdGxlRE9NKHByb2plY3RUb1Nob3cpO1xuICAgIGlmIChwcm9qZWN0VG9TaG93ID09PSBcIkFsbFwiKSB7XG4gICAgICAgIHRvZG9MaXN0LmFsbFRvZG9zLmZvckVhY2goKHRvZG9JdGVtLCBpbmRleCkgPT4gdG9kb0l0ZW1ET00odG9kb0l0ZW0sIGluZGV4LCB0b2RvTGlzdCwgcHJvamVjdExpc3QsIHByb2plY3RUb1Nob3cpKTtcbiAgICB9IGVsc2UgaWYgKHByb2plY3RUb1Nob3cgPT09IFwiVG9kYXlcIikge1xuICAgICAgICB0b2RvTGlzdC5hbGxUb2Rvcy5mb3JFYWNoKCh0b2RvSXRlbSwgaW5kZXgpID0+IHsgICAgIFxuICAgICAgICAgICAgaWYgKGlzVG9kYXkobmV3IERhdGUodG9kb0l0ZW0uZHVlRGF0ZSkpKSB7XG4gICAgICAgICAgICAgICAgdG9kb0l0ZW1ET00odG9kb0l0ZW0sIGluZGV4LCB0b2RvTGlzdCwgcHJvamVjdExpc3QsIHByb2plY3RUb1Nob3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHByb2plY3RUb1Nob3cgPT09IFwiV2l0aGluIGEgd2Vla1wiKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdG9kYXkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIGNvbnN0IG9uZVdlZWsgPSBhZGRXZWVrcyh0b2RheSwgMSk7XG4gICAgICAgIG9uZVdlZWsuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIHRvZG9MaXN0LmFsbFRvZG9zLmZvckVhY2goKHRvZG9JdGVtLCBpbmRleCkgPT4geyAgIFxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRvZG9JdGVtLmR1ZURhdGUpO1xuICAgICAgICAgICAgaWYgKGlzV2l0aGluSW50ZXJ2YWwoZGF0ZSwge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiB0b2RheSxcbiAgICAgICAgICAgICAgICBlbmQ6IG9uZVdlZWtcbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgdG9kb0l0ZW1ET00odG9kb0l0ZW0sIGluZGV4LCB0b2RvTGlzdCwgcHJvamVjdExpc3QsIHByb2plY3RUb1Nob3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHByb2plY3RUb1Nob3cgPT09IFwiVGhpcyBtb250aFwiKSB7XG4gICAgICAgIHRvZG9MaXN0LmFsbFRvZG9zLmZvckVhY2goKHRvZG9JdGVtLCBpbmRleCkgPT4geyAgICBcbiAgICAgICAgICAgIGlmIChpc1RoaXNNb250aChuZXcgRGF0ZSh0b2RvSXRlbS5kdWVEYXRlKSkpIHtcbiAgICAgICAgICAgICAgICB0b2RvSXRlbURPTSh0b2RvSXRlbSwgaW5kZXgsIHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgcHJvamVjdFRvU2hvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9MaXN0LmFsbFRvZG9zLmZvckVhY2goKHRvZG9JdGVtLCBpbmRleCkgPT4geyAgICAgXG4gICAgICAgICAgICBpZiAodG9kb0l0ZW0ucHJvamVjdCA9PT0gcHJvamVjdFRvU2hvdykge1xuICAgICAgICAgICAgICAgIHRvZG9JdGVtRE9NKHRvZG9JdGVtLCBpbmRleCwgdG9kb0xpc3QsIHByb2plY3RMaXN0LCBwcm9qZWN0VG9TaG93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxufSIsImltcG9ydCBUb2RvIGZyb20gXCIuL2NsYXNzVG9kb1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RvcmFnZSh0b2RvTGlzdCwgcHJvamVjdExpc3QpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0LmFsbFRvZG9zKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdC5hbGxQcm9qZWN0cykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0cmlldmVUb2RvcygpIHtcbiAgICBsZXQgdG9kb0luc3RhbmNlQXJyYXkgPSBbXTtcbiAgICBsZXQganNvbkFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKTtcbiAgICBmb3IgKGxldCBpdGVtIG9mIGpzb25BcnJheSkge1xuICAgICAgICBsZXQgaW5zdGFuY2UgPSBPYmplY3QuYXNzaWduKG5ldyBUb2RvKCksIGl0ZW0pO1xuICAgICAgICB0b2RvSW5zdGFuY2VBcnJheS5wdXNoKGluc3RhbmNlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJSZXRyaWV2ZSB0b2RvczpcIiwgdG9kb0luc3RhbmNlQXJyYXkpO1xuICAgIHJldHVybiB0b2RvSW5zdGFuY2VBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHJpZXZlUHJvamVjdHMoKSB7XG4gICAgY29uc29sZS5sb2coXCJSZXRyaWV2ZSBwcm9qZWN0czpcIiwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG59IiwiaW1wb3J0IHsgdXBkYXRlU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHBhZ2VMb2FkIGZyb20gXCIuL3BhZ2VMb2FkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZXJhdGVQcm9qZWN0KG9wZXJhdGlvbiwgcHJvamVjdExpc3QsIHRvZG9MaXN0KSB7XG5cbiAgICBpZiAob3BlcmF0aW9uID09PSBcImFkZFwiKSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZm9ybXNbXCJhZGRQcm9qZWN0Rm9ybVwiXVtcImFkZFByb2plY3RJbnB1dFwiXS52YWx1ZTtcbiAgICAgICAgcHJvamVjdExpc3QuYWRkKGlucHV0KTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdG9yYWdlKHRvZG9MaXN0LCBwcm9qZWN0TGlzdCk7XG4gICAgcGFnZUxvYWQodG9kb0xpc3QsIHByb2plY3RMaXN0KTtcbiAgICByZXR1cm4gZmFsc2U7XG5cbn0iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi9jbGFzc1RvZG8uanNcIjtcbmltcG9ydCBkaXNwbGF5VG9kb0xpc3QgZnJvbSBcIi4vZGlzcGxheVRvZG9MaXN0XCI7XG5pbXBvcnQgeyByZXRyaWV2ZVByb2plY3RzLCByZXRyaWV2ZVRvZG9zLCB1cGRhdGVTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZXJhdGVUb2RvKG9wZXJhdGlvbiwgdG9kb0xpc3QsIHByb2plY3RMaXN0LCBpbmRleCA9IFwiXCIsIHByb2plY3RQYWdlID0gXCJBbGxcIikge1xuICAgIFxuICAgIGlmIChvcGVyYXRpb24gPT09IFwiYWRkXCIpIHtcblxuICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmZvcm1zW1wiYWRkVG9kb0Zvcm1cIl1bXCJ0aXRsZUlucHV0XCJdLnZhbHVlO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmZvcm1zW1wiYWRkVG9kb0Zvcm1cIl1bXCJkZXNjcmlwdGlvbklucHV0XCJdLnZhbHVlO1xuICAgICAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZm9ybXNbXCJhZGRUb2RvRm9ybVwiXVtcImR1ZURhdGVJbnB1dFwiXS52YWx1ZTtcbiAgICAgICAgbGV0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmZvcm1zW1wiYWRkVG9kb0Zvcm1cIl1bXCJwcm9qZWN0SW5wdXRcIl0udmFsdWU7XG4gICAgICAgIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuZm9ybXNbXCJhZGRUb2RvRm9ybVwiXVtcInByaW9yaXR5SW5wdXRcIl0uY2hlY2tlZDtcblxuICAgICAgICB0b2RvTGlzdC5hZGQobmV3IFRvZG8odGl0bGVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgZHVlRGF0ZUlucHV0LCBwcmlvcml0eUlucHV0LCBmYWxzZSwgcHJvamVjdElucHV0KSk7XG5cbiAgICAgICAgaWYgKHByb2plY3RQYWdlICE9IFwiQWxsXCIpIHtcbiAgICAgICAgICAgIHByb2plY3RQYWdlID0gcHJvamVjdElucHV0O1xuICAgICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gXCJkZWxldGVcIikge1xuXG4gICAgICAgIHRvZG9MaXN0LmRlbGV0ZShpbmRleCk7XG5cbiAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gXCJlZGl0XCIpIHtcblxuICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmZvcm1zW1wiZWRpdFRvZG9Gb3JtXCJdW1widGl0bGVJbnB1dFwiXS52YWx1ZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5mb3Jtc1tcImVkaXRUb2RvRm9ybVwiXVtcImRlc2NyaXB0aW9uSW5wdXRcIl0udmFsdWU7XG4gICAgICAgIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5mb3Jtc1tcImVkaXRUb2RvRm9ybVwiXVtcImR1ZURhdGVJbnB1dFwiXS52YWx1ZTtcbiAgICAgICAgbGV0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmZvcm1zW1wiZWRpdFRvZG9Gb3JtXCJdW1wicHJvamVjdElucHV0XCJdLnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmZvcm1zW1wiZWRpdFRvZG9Gb3JtXCJdW1wicHJpb3JpdHlJbnB1dFwiXS5jaGVja2VkO1xuXG4gICAgICAgIHRvZG9MaXN0LmVkaXQoaW5kZXgsIG5ldyBUb2RvKHRpdGxlSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXQsIGR1ZURhdGVJbnB1dCwgcHJpb3JpdHlJbnB1dCwgdG9kb0xpc3QuYWxsVG9kb3NbaW5kZXhdW1wic3RhdHVzXCJdLCBwcm9qZWN0SW5wdXQpKTtcblxuICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSBcImNoYW5nZVN0YXR1c1wiKSB7XG5cbiAgICAgICAgdG9kb0xpc3QuZWRpdChpbmRleCwgbmV3IFRvZG8odG9kb0xpc3QuYWxsVG9kb3NbaW5kZXhdW1widGl0bGVcIl0sIHRvZG9MaXN0LmFsbFRvZG9zW2luZGV4XVtcImRlc2NyaXB0aW9uXCJdLCB0b2RvTGlzdC5hbGxUb2Rvc1tpbmRleF1bXCJkdWVEYXRlXCJdLCB0b2RvTGlzdC5hbGxUb2Rvc1tpbmRleF1bXCJwcmlvcml0eVwiXSwgISh0b2RvTGlzdC5hbGxUb2Rvc1tpbmRleF1bXCJzdGF0dXNcIl0pLCB0b2RvTGlzdC5hbGxUb2Rvc1tpbmRleF1bXCJwcm9qZWN0XCJdKSk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGVTdG9yYWdlKHRvZG9MaXN0LCBwcm9qZWN0TGlzdCk7XG4gICAgZGlzcGxheVRvZG9MaXN0KHRvZG9MaXN0LCBwcm9qZWN0TGlzdCwgcHJvamVjdFBhZ2UpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG59XG4iLCJpbXBvcnQgZGlzcGxheVRvZG9MaXN0IGZyb20gXCIuL2Rpc3BsYXlUb2RvTGlzdC5qc1wiO1xuaW1wb3J0IGhvbWVwYWdlRE9NIGZyb20gXCIuL0RPTW1hbmlwdWxhdGlvbi5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCh0b2RvTGlzdCwgcHJvamVjdExpc3QpIHtcblxuICAgIGhvbWVwYWdlRE9NKHRvZG9MaXN0LCBwcm9qZWN0TGlzdCk7XG4gICAgZGlzcGxheVRvZG9MaXN0KHRvZG9MaXN0LCBwcm9qZWN0TGlzdCk7XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgYWRkU2FtcGxlcyBmcm9tIFwiLi9hZGRTYW1wbGVzLmpzXCI7XG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4vY2xhc3NQcm9qZWN0TGlzdC5qc1wiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL2NsYXNzVG9kb0xpc3QuanNcIjtcbmltcG9ydCB7IHJldHJpZXZlVG9kb3MsIHJldHJpZXZlUHJvamVjdHMsIHVwZGF0ZVN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2UuanNcIjtcbmltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9wYWdlTG9hZC5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5cbmxldCBhbGxUb2RvTGlzdCA9IG5ldyBUb2RvTGlzdCgpO1xubGV0IGFsbFByb2plY3RMaXN0ID0gbmV3IFByb2plY3RMaXN0KCk7XG5cbmlmIChyZXRyaWV2ZVByb2plY3RzKCkgJiYgcmV0cmlldmVUb2RvcygpKSB7XG4gICAgYWxsVG9kb0xpc3QuYWxsVG9kb3MgPSByZXRyaWV2ZVRvZG9zKCk7XG4gICAgYWxsUHJvamVjdExpc3QuYWxsUHJvamVjdHMgPSByZXRyaWV2ZVByb2plY3RzKCk7XG59IGVsc2Uge1xuICAgIGFkZFNhbXBsZXMoYWxsVG9kb0xpc3QsIGFsbFByb2plY3RMaXN0KTtcbiAgICB1cGRhdGVTdG9yYWdlKGFsbFRvZG9MaXN0LCBhbGxQcm9qZWN0TGlzdCk7XG59XG5cbnBhZ2VMb2FkKGFsbFRvZG9MaXN0LCBhbGxQcm9qZWN0TGlzdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=