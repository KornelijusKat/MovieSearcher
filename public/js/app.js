/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_renderForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderForm */ "./src/modules/renderForm.js");
/* harmony import */ var _modules_eventFillDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/eventFillDetails */ "./src/modules/eventFillDetails.js");
/* harmony import */ var _modules_searchMovie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/searchMovie */ "./src/modules/searchMovie.js");
/* harmony import */ var _modules_viewHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/viewHistory */ "./src/modules/viewHistory.js");




(0,_modules_renderForm__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_searchMovie__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_eventFillDetails__WEBPACK_IMPORTED_MODULE_1__["default"])();
//viewHistory();

/***/ }),

/***/ "./src/modules/ajaxService.js":
/*!************************************!*\
  !*** ./src/modules/ajaxService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ajaxService = function ajaxService(type, term) {
  var key = "5925a40b";
  var uri = "http://www.omdbapi.com/?".concat(type, "=").concat(term, "&apikey=").concat(key);
  return fetch(uri).then(function (response) {
    return response.json();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ajaxService);

/***/ }),

/***/ "./src/modules/detilsHtml.js":
/*!***********************************!*\
  !*** ./src/modules/detilsHtml.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var detailsHtml = function detailsHtml(movie) {
  return "\n<div class=\"movie-card\">\n    <div class=\"movie-header\">\n        <p class=\"movie-rating\">Rated: <strong>".concat(movie.Rated || 'N/A', "</strong></p>\n    </div>\n    <div class=\"movie-body\">\n        <p><strong>Released:</strong> ").concat(movie.Released || 'N/A', "</p>\n        <p><strong>Runtime:</strong> ").concat(movie.Runtime || 'N/A', "</p>\n        <p><strong>Genre:</strong> ").concat(movie.Genre || 'N/A', "</p>\n        <p><strong>Director:</strong> ").concat(movie.Director || 'N/A', "</p>\n        <p><strong>Writer:</strong> ").concat(movie.Writer || 'N/A', "</p>\n        <p><strong>Actors:</strong> ").concat(movie.Actors || 'N/A', "</p>\n        <p class=\"movie-plot\"><strong>Plot:</strong> ").concat(movie.Plot || 'N/A', "</p>\n        <p><strong>Language:</strong> ").concat(movie.Language || 'N/A', "</p>\n        <p><strong>Country:</strong> ").concat(movie.Country || 'N/A', "</p>\n    </div>\n    <div class=\"movie-footer\">\n        <p><strong>IMDb Rating:</strong> ").concat(movie.imdbRating || 'N/A', "</p>\n    </div>\n</div>\n");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (detailsHtml);

/***/ }),

/***/ "./src/modules/eventFillDetails.js":
/*!*****************************************!*\
  !*** ./src/modules/eventFillDetails.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ajaxService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajaxService */ "./src/modules/ajaxService.js");
/* harmony import */ var _movieDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movieDetails */ "./src/modules/movieDetails.js");


var eventFillDetails = function eventFillDetails() {
  document.querySelector('.list-group').addEventListener('click', function (e) {
    var movieItem = e.target.closest('[data-value]');
    var detailsDiv = movieItem.querySelector('.tab-content');
    if (detailsDiv && detailsDiv.innerHTML.trim() !== "") {
      detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'block' : 'none';
    } else {
      (0,_ajaxService__WEBPACK_IMPORTED_MODULE_0__["default"])('i', movieItem.dataset.value).then(function (result) {
        (0,_movieDetails__WEBPACK_IMPORTED_MODULE_1__["default"])(result, movieItem);
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventFillDetails);

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var form = function form() {
  return "<form class=\"form-group\">\n    <div class=\"mb-3\">\n        <input type='text' class=\"form-control term\" placeholder=\"Movie name\">\n    <button type=\"submit\" class=\"btn btn-primary\">Ieskoti</button>\n    </div>\n    </form>";
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/modules/infoHtml.js":
/*!*********************************!*\
  !*** ./src/modules/infoHtml.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var infoHtml = function infoHtml(element) {
  return "\n            <div class=\"movie-card__center\">\n                <img src=\"".concat(element.Poster, "\" class=\"img-fluid\" alt=\"").concat(element.Title, " poster\" />\n                <h4 class=\"movie-title\">").concat(element.Title, "</h4>\n                <p class=\"movie-year\"><strong>Year:</strong> ").concat(element.Year, "</p>\n                <p class=\"movie-type\"><strong>Type:</strong> ").concat(element.Type, "</p>\n                <p class=\"movie-id\" style=\"display: none;\">").concat(element.imdbID, "</p>\n            </div>\n            <div class=\"tab-content\" style=\"display: none;\"></div>\n        ");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (infoHtml);

/***/ }),

/***/ "./src/modules/movieDetails.js":
/*!*************************************!*\
  !*** ./src/modules/movieDetails.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _detilsHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detilsHtml */ "./src/modules/detilsHtml.js");

var movieDetails = function movieDetails(movie, contentDiv) {
  var newDiv = contentDiv.querySelector('.tab-content');
  newDiv.innerHTML = "";
  newDiv.innerHTML = (0,_detilsHtml__WEBPACK_IMPORTED_MODULE_0__["default"])(movie);
  contentDiv.appendChild(newDiv);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieDetails);

/***/ }),

/***/ "./src/modules/movieInfo.js":
/*!**********************************!*\
  !*** ./src/modules/movieInfo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _infoHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infoHtml */ "./src/modules/infoHtml.js");

var movieInfo = function movieInfo(movies) {
  var listGroup = document.querySelector('.list-group');
  listGroup.innerHTML = "";
  movies.forEach(function (element) {
    var newDiv = document.createElement('div');
    newDiv.classList.add('movie-card');
    newDiv.dataset.value = element.imdbID;
    newDiv.innerHTML = (0,_infoHtml__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
    listGroup.appendChild(newDiv);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieInfo);

/***/ }),

/***/ "./src/modules/renderForm.js":
/*!***********************************!*\
  !*** ./src/modules/renderForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/modules/form.js");

var renderForm = function renderForm() {
  var formElement = document.createElement('form');
  formElement.className = "from-inline";
  formElement.innerHTML = (0,_form__WEBPACK_IMPORTED_MODULE_0__["default"])();
  document.querySelector('main .searchCard__body').appendChild(formElement);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderForm);

/***/ }),

/***/ "./src/modules/searchMovie.js":
/*!************************************!*\
  !*** ./src/modules/searchMovie.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ajaxService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajaxService */ "./src/modules/ajaxService.js");
/* harmony import */ var _movieInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movieInfo */ "./src/modules/movieInfo.js");
/* harmony import */ var _storeSearches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storeSearches */ "./src/modules/storeSearches.js");



var searchMovie = function searchMovie() {
  var queryArray = [];
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var inputVal = document.querySelector('input');
    (0,_storeSearches__WEBPACK_IMPORTED_MODULE_2__["default"])(queryArray, inputVal.value);
    var movies = document.querySelector('.list-group');
    var parsedData = JSON.parse(localStorage.getItem(inputVal.value));
    if (parsedData !== null) {
      movies.innerHTML = "";
      (0,_movieInfo__WEBPACK_IMPORTED_MODULE_1__["default"])(parsedData);
    } else {
      movies.innerHTML = "";
      (0,_ajaxService__WEBPACK_IMPORTED_MODULE_0__["default"])('s', inputVal.value).then(function (result) {
        (0,_movieInfo__WEBPACK_IMPORTED_MODULE_1__["default"])(result.Search);
        localStorage.setItem(inputVal.value, JSON.stringify(result.Search));
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchMovie);

/***/ }),

/***/ "./src/modules/storeSearches.js":
/*!**************************************!*\
  !*** ./src/modules/storeSearches.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var storeSearches = function storeSearches(queryArray, term) {
  queryArray.push(term);
  localStorage.setItem("searchedTerms", JSON.stringify(queryArray));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeSearches);

/***/ }),

/***/ "./src/modules/viewHistory.js":
/*!************************************!*\
  !*** ./src/modules/viewHistory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var viewHistory = function viewHistory() {
  document.querySelector('.history').addEventListener('click', function (e) {
    e.preventDefault();
    var movies = document.querySelector('.list-group');
    movies.innerHTML = "";
    var card = document.createElement('div');
    card.className = "movie-card";
    JSON.parse(localStorage.getItem("searchedTerms")).forEach(function (element) {
      var search = document.createElement('p');
      search.textContent = element;
      card.appendChild(search);
    });
    movies.appendChild(card);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewHistory);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/style": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmoviesearcher"] = self["webpackChunkmoviesearcher"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;