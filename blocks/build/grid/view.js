/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/src/grid/view.js":
/*!*********************************!*\
  !*** ./blocks/src/grid/view.js ***!
  \*********************************/
/***/ (() => {

eval("(function attachShadowRoots(root) {\n  // find all templates with a shadowrootmode attribute\n  root.querySelectorAll(\"template[shadowrootmode]\").forEach(template => {\n    // get the mode: open or closed\n    const mode = template.getAttribute(\"shadowrootmode\");\n    // attach a shadow to the component\n    const shadowRoot = template.parentNode.attachShadow({\n      mode\n    });\n    // append the content in the template\n    shadowRoot.appendChild(template.content);\n    // remove the template\n    template.remove();\n    attachShadowRoots(shadowRoot);\n  });\n})(document);\n\n//# sourceURL=webpack://h2ml-grid/./blocks/src/grid/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./blocks/src/grid/view.js"]();
/******/ 	
/******/ })()
;