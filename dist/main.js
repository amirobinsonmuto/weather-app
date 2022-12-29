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

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchWeather\": () => (/* binding */ fetchWeather)\n/* harmony export */ });\n/* harmony import */ var _city_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city-class */ \"./src/city-class.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n\nasync function fetchWeather(cityName) {\n  try {\n    const response = await fetch(\n      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=91bc32fed2e97847d9ec6eb7c87da3a5`,\n      { mode: \"cors\" }\n    );\n    const data = await response.json();\n    console.log(data);\n    let city = new _city_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\n    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.displayCard)(city);\n  } catch (err) {\n    console.error(err);\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/api.js?");

/***/ }),

/***/ "./src/city-class.js":
/*!***************************!*\
  !*** ./src/city-class.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ City)\n/* harmony export */ });\nclass City {\n  constructor(obj) {\n    this.name = obj.name;\n    this.mainWeather = obj.weather[0].description;\n    this.tempC = Math.round((obj.main.temp - 273.15) * 100) / 100;\n    this.windSpeed = obj.wind.speed;\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/city-class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\n\nconst form = document.getElementById(\"form\");\n\nform.addEventListener(\"submit\", (e) => {\n  (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)(document.getElementById(\"city\").value);\n  e.preventDefault();\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayCard\": () => (/* binding */ displayCard)\n/* harmony export */ });\nconst card = document.getElementById(\"card\");\n\nfunction displayCard(obj) {\n  while (card.firstChild) {\n    card.removeChild(card.firstChild);\n  }\n  card.classList.add(\"card-style\");\n  let cityPara = document.createElement(\"p\");\n  cityPara.classList.add(\"city-name\");\n  cityPara.textContent = obj.name;\n  let mainWeatherPara = document.createElement(\"p\");\n  mainWeatherPara.textContent = \"Weather: \" + obj.mainWeather;\n  let mainTempPara = document.createElement(\"p\");\n  mainTempPara.textContent = \"Temperature: \" + obj.tempC + \" °C\";\n  let windSpeedPara = document.createElement(\"p\");\n  windSpeedPara.textContent = \"Wind speed: \" + obj.windSpeed + \" km/h\";\n  card.append(cityPara, mainWeatherPara, mainTempPara, windSpeedPara);\n}\n\n\n//# sourceURL=webpack://weather-app/./src/ui.js?");

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