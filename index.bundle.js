/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addSamples.js":
/*!***************************!*\
  !*** ./src/addSamples.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addSamples)
/* harmony export */ });
/* harmony import */ var _classTodoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classTodoList.js */ "./src/classTodoList.js");
/* harmony import */ var _classTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classTodo.js */ "./src/classTodo.js");
/* harmony import */ var _operateTodo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operateTodo.js */ "./src/operateTodo.js");




function addSamples() {

    let testList = new _classTodoList_js__WEBPACK_IMPORTED_MODULE_0__["default"]([]);
    let testTodo1 = new _classTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Test Title 1", "Test Des 1", "20221011", "1", false, "All");
    (0,_operateTodo_js__WEBPACK_IMPORTED_MODULE_2__["default"])("add", testList, testTodo1);
    let testTodo2 = new _classTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Test Title 2", "Test Des 2", "20221010", "1", true, "All");
    (0,_operateTodo_js__WEBPACK_IMPORTED_MODULE_2__["default"])("add", testList, testTodo2);
    let testTodo3 = new _classTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Test Title 3", "Test Des 3", "20221010", "1", true, "All");
    (0,_operateTodo_js__WEBPACK_IMPORTED_MODULE_2__["default"])("add", testList, testTodo3);

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

    constructor(allTodos) {
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

    delete(todoItem) {
        this.allTodos.splice(this.allTodos.indexOf(todoItem), 1);
    }

    edit(todoItem, newTodoItem) {
        this.allTodos[this.allTodos.indexOf(todoItem)] = newTodoItem;
    }

}

/***/ }),

/***/ "./src/displayTodo.js":
/*!****************************!*\
  !*** ./src/displayTodo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayTodo)
/* harmony export */ });
function displayTodo(todoItem) {

    for (let property in todoItem) {
        console.log(`${property} : ${todoItem[property]}`);
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
/* harmony import */ var _displayTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTodo.js */ "./src/displayTodo.js");


function displayTodoList(todoList) {

    console.clear();
    todoList.forEach((todoItem) => (0,_displayTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(todoItem));

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
/* harmony import */ var _displayTodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTodoList */ "./src/displayTodoList.js");


function operateTodo(operate, targetList, todo, newTodo = {}) {
    
    if (operate === "add") {
        targetList.add(todo);
    } else if (operate === "delete") {
        targetList.delete(todo);
    } else if (operate === "edit") {
        targetList.edit(todo, newTodo);
    }

    (0,_displayTodoList__WEBPACK_IMPORTED_MODULE_0__["default"])(targetList.allTodos);

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
/* harmony import */ var _addSamples_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addSamples.js */ "./src/addSamples.js");


function pageLoad() {


    (0,_addSamples_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ "./src/pageLoad.js");


console.log("Hello");

(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__["default"])();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ1I7QUFDUzs7QUFFNUI7O0FBRWYsdUJBQXVCLHlEQUFRO0FBQy9CLHdCQUF3QixxREFBSTtBQUM1QixJQUFJLDJEQUFXO0FBQ2Ysd0JBQXdCLHFEQUFJO0FBQzVCLElBQUksMkRBQVc7QUFDZix3QkFBd0IscURBQUk7QUFDNUIsSUFBSSwyREFBVzs7QUFFZjs7Ozs7Ozs7Ozs7Ozs7O0FDZGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNqRGU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDMUJlOztBQUVmO0FBQ0EsdUJBQXVCLFVBQVUsSUFBSSxtQkFBbUI7QUFDeEQ7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkM7O0FBRTVCOztBQUVmO0FBQ0EsbUNBQW1DLDJEQUFXOztBQUU5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDUGdEOztBQUVqQyw0REFBNEQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsSUFBSSw0REFBZTs7QUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkeUM7O0FBRTFCOzs7QUFHZixJQUFJLDBEQUFVOztBQUVkOzs7Ozs7OztVQ1BBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUM7O0FBRXJDOztBQUVBLHdEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvYWRkU2FtcGxlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jbGFzc1RvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY2xhc3NUb2RvTGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9kaXNwbGF5VG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9kaXNwbGF5VG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvb3BlcmF0ZVRvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vY2xhc3NUb2RvTGlzdC5qc1wiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vY2xhc3NUb2RvLmpzXCI7XG5pbXBvcnQgb3BlcmF0ZVRvZG8gZnJvbSBcIi4vb3BlcmF0ZVRvZG8uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU2FtcGxlcygpIHtcblxuICAgIGxldCB0ZXN0TGlzdCA9IG5ldyBUb2RvTGlzdChbXSk7XG4gICAgbGV0IHRlc3RUb2RvMSA9IG5ldyBUb2RvKFwiVGVzdCBUaXRsZSAxXCIsIFwiVGVzdCBEZXMgMVwiLCBcIjIwMjIxMDExXCIsIFwiMVwiLCBmYWxzZSwgXCJBbGxcIik7XG4gICAgb3BlcmF0ZVRvZG8oXCJhZGRcIiwgdGVzdExpc3QsIHRlc3RUb2RvMSk7XG4gICAgbGV0IHRlc3RUb2RvMiA9IG5ldyBUb2RvKFwiVGVzdCBUaXRsZSAyXCIsIFwiVGVzdCBEZXMgMlwiLCBcIjIwMjIxMDEwXCIsIFwiMVwiLCB0cnVlLCBcIkFsbFwiKTtcbiAgICBvcGVyYXRlVG9kbyhcImFkZFwiLCB0ZXN0TGlzdCwgdGVzdFRvZG8yKTtcbiAgICBsZXQgdGVzdFRvZG8zID0gbmV3IFRvZG8oXCJUZXN0IFRpdGxlIDNcIiwgXCJUZXN0IERlcyAzXCIsIFwiMjAyMjEwMTBcIiwgXCIxXCIsIHRydWUsIFwiQWxsXCIpO1xuICAgIG9wZXJhdGVUb2RvKFwiYWRkXCIsIHRlc3RMaXN0LCB0ZXN0VG9kbzMpO1xuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuICAgIGdldCBwcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICAgIH1cbiAgICBnZXQgc3RhdHVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICAgIH1cbiAgICBnZXQgcHJvamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3Q7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHRpdGxlSW5wdXQpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZUlucHV0O1xuICAgIH1cbiAgICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb25JbnB1dCkge1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQ7XG4gICAgfVxuICAgIHNldCBkdWVEYXRlKGR1ZURhdGVJbnB1dCkge1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZUlucHV0O1xuICAgIH1cbiAgICBzZXQgcHJpb3JpdHkocHJpb3JpdHlJbnB1dCkge1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5SW5wdXQ7XG4gICAgfVxuICAgIHNldCBzdGF0dXMoc3RhdHVzSW5wdXQpIHtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzSW5wdXQ7XG4gICAgfVxuICAgIHNldCBwcm9qZWN0KHByb2plY3RJbnB1dCkge1xuICAgICAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdElucHV0O1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGFsbFRvZG9zKSB7XG4gICAgICAgIHRoaXMuX2FsbFRvZG9zID0gYWxsVG9kb3M7XG4gICAgfVxuXG4gICAgZ2V0IGFsbFRvZG9zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWxsVG9kb3M7XG4gICAgfVxuXG4gICAgc2V0IGFsbFRvZG9zKGxpc3RJbnB1dCkge1xuICAgICAgICB0aGlzLl9hbGxUb2RvcyA9IGxpc3RJbnB1dDtcbiAgICB9XG5cbiAgICBhZGQodG9kb0l0ZW0pIHtcbiAgICAgICAgdGhpcy5hbGxUb2Rvcy5wdXNoKHRvZG9JdGVtKTtcbiAgICB9XG5cbiAgICBkZWxldGUodG9kb0l0ZW0pIHtcbiAgICAgICAgdGhpcy5hbGxUb2Rvcy5zcGxpY2UodGhpcy5hbGxUb2Rvcy5pbmRleE9mKHRvZG9JdGVtKSwgMSk7XG4gICAgfVxuXG4gICAgZWRpdCh0b2RvSXRlbSwgbmV3VG9kb0l0ZW0pIHtcbiAgICAgICAgdGhpcy5hbGxUb2Rvc1t0aGlzLmFsbFRvZG9zLmluZGV4T2YodG9kb0l0ZW0pXSA9IG5ld1RvZG9JdGVtO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlUb2RvKHRvZG9JdGVtKSB7XG5cbiAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiB0b2RvSXRlbSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcm9wZXJ0eX0gOiAke3RvZG9JdGVtW3Byb3BlcnR5XX1gKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBkaXNwbGF5VG9kbyBmcm9tIFwiLi9kaXNwbGF5VG9kby5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5VG9kb0xpc3QodG9kb0xpc3QpIHtcblxuICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICB0b2RvTGlzdC5mb3JFYWNoKCh0b2RvSXRlbSkgPT4gZGlzcGxheVRvZG8odG9kb0l0ZW0pKTtcblxufSIsImltcG9ydCBkaXNwbGF5VG9kb0xpc3QgZnJvbSBcIi4vZGlzcGxheVRvZG9MaXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZXJhdGVUb2RvKG9wZXJhdGUsIHRhcmdldExpc3QsIHRvZG8sIG5ld1RvZG8gPSB7fSkge1xuICAgIFxuICAgIGlmIChvcGVyYXRlID09PSBcImFkZFwiKSB7XG4gICAgICAgIHRhcmdldExpc3QuYWRkKHRvZG8pO1xuICAgIH0gZWxzZSBpZiAob3BlcmF0ZSA9PT0gXCJkZWxldGVcIikge1xuICAgICAgICB0YXJnZXRMaXN0LmRlbGV0ZSh0b2RvKTtcbiAgICB9IGVsc2UgaWYgKG9wZXJhdGUgPT09IFwiZWRpdFwiKSB7XG4gICAgICAgIHRhcmdldExpc3QuZWRpdCh0b2RvLCBuZXdUb2RvKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5VG9kb0xpc3QodGFyZ2V0TGlzdC5hbGxUb2Rvcyk7XG5cbn1cbiIsImltcG9ydCBhZGRTYW1wbGVzIGZyb20gXCIuL2FkZFNhbXBsZXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG5cblxuICAgIGFkZFNhbXBsZXMoKTtcblxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9wYWdlTG9hZC5qc1wiO1xuXG5jb25zb2xlLmxvZyhcIkhlbGxvXCIpO1xuXG5wYWdlTG9hZCgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=