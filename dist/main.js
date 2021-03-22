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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);




let burgerBtn = document.querySelector(".Header__burgerMenu")
let burgerMenu = document.querySelector(".burgerMenu")
let body = document.querySelector("body")
let ModuleBtn = document.querySelector(".ContactUs__btn")
let ModuleBox = document.querySelector(".moduleBox")
let NameInput = document.querySelector("#NameInput")
let emailInput = document.querySelector("#emailInput")
let MessageTextArea = document.querySelector("#MessageTextArea")
let SubmitLetsTalkBtn = document.querySelector("#SubmitLetsTalkBtn")
let FormRequiredError = document.querySelector(".FormRequiredError")
let Form = document.querySelector(".moduleBox__form")
let sucsessFormSendMessage = document.querySelector(".sucsessFormSend")

SubmitLetsTalkBtn.addEventListener("mouseenter",()=>{
    FormRequiredError.classList.add("active")
    console.log("fvsgfdgdf");
    setTimeout(()=>{
        FormRequiredError.classList.remove("active")
    },3000)
})
SubmitLetsTalkBtn.disabled = true

SubmitLetsTalkBtn.addEventListener("click", (e)=>{
    console.log("FDFS");
    sucsessFormSendMessage.classList.add("active")
    ModuleBtn.classList.remove("active")
    ModuleBox.classList.remove("active")
    body.classList.remove("ModuleActive")
    setTimeout(()=> {
        Form.submit()}
        , 3000)
})

NameInput.addEventListener("input", ()=>{
    if(NameInput.value && emailInput.value && MessageTextArea.value){
        SubmitLetsTalkBtn.disabled = false
        FormRequiredError.classList.remove("active")
        FormRequiredError.innerHTML = ""
    } else{
        SubmitLetsTalkBtn.disabled = true
        FormRequiredError.classList.add("active")

    }
})
emailInput.addEventListener("input", ()=>{
    if(NameInput.value && emailInput.value && MessageTextArea.value){
        SubmitLetsTalkBtn.disabled = false
        FormRequiredError.classList.remove("active")
        FormRequiredError.innerHTML = ""
    } else{
        SubmitLetsTalkBtn.disabled = true
        FormRequiredError.classList.add("active")
    }
})
MessageTextArea.addEventListener("input", ()=>{
    if(NameInput.value && emailInput.value && MessageTextArea.value){
        SubmitLetsTalkBtn.disabled = false
        FormRequiredError.classList.remove("active")
        FormRequiredError.innerHTML = ""
    } else{
        SubmitLetsTalkBtn.disabled = true
        FormRequiredError.classList.add("active")
    }
})
burgerBtn.addEventListener("click", () => {
    if (burgerMenu.classList.contains("active")) {
        burgerMenu.classList.remove("active")
        burgerBtn.classList.remove("active")
        body.classList.remove("BurgerActive")
    } else {
        burgerBtn.classList.add("active")
        burgerMenu.classList.add("active")
        body.classList.add("BurgerActive")
    }
})

ModuleBtn.addEventListener("click", () => {
    if (ModuleBtn.classList.contains("active")) {
        ModuleBtn.classList.remove("active")
        ModuleBox.classList.remove("active")
        body.classList.remove("ModuleActive")
    } else {
        ModuleBtn.classList.add("active")
        ModuleBox.classList.add("active")
        body.classList.add("ModuleActive")
    }
})


window.addEventListener("click", (e) => {
    if (!e.target.classList.contains("ContactUs__btn")) {
        if (ModuleBtn.classList.contains("active")) {
            if (!e.target.classList.contains("moduleField")) {
                ModuleBtn.classList.remove("active")
                ModuleBox.classList.remove("active")
                body.classList.remove("ModuleActive")
            }
        }
    }
})

window.addEventListener("click", (e) => {
    if (!e.target.classList.contains("sucsessFormSend")) {
        if (sucsessFormSendMessage.classList.contains("active")) {
            if (!e.target.classList.contains("moduleField")) {
                sucsessFormSendMessage.classList.remove("active")
            }
        }
    }
})




/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map