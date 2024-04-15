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

/***/ "./blocks/src/gridArea/index.js":
/*!***************************************************!*\
  !*** ./blocks/src/gridArea/index.js + 13 modules ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n;// CONCATENATED MODULE: external [\"wp\",\"blocks\"]\nconst external_wp_blocks_namespaceObject = window[\"wp\"][\"blocks\"];\n;// CONCATENATED MODULE: external \"React\"\nconst external_React_namespaceObject = window[\"React\"];\n;// CONCATENATED MODULE: external [\"wp\",\"primitives\"]\nconst external_wp_primitives_namespaceObject = window[\"wp\"][\"primitives\"];\n;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/map-marker.js\n\n/**\n * WordPress dependencies\n */\n\nconst mapMarker = (0,external_React_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG, {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 24 24\"\n}, (0,external_React_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path, {\n  d: \"M12 9c-.8 0-1.5.7-1.5 1.5S11.2 12 12 12s1.5-.7 1.5-1.5S12.8 9 12 9zm0-5c-3.6 0-6.5 2.8-6.5 6.2 0 .8.3 1.8.9 3.1.5 1.1 1.2 2.3 2 3.6.7 1 3 3.8 3.2 3.9l.4.5.4-.5c.2-.2 2.6-2.9 3.2-3.9.8-1.2 1.5-2.5 2-3.6.6-1.3.9-2.3.9-3.1C18.5 6.8 15.6 4 12 4zm4.3 8.7c-.5 1-1.1 2.2-1.9 3.4-.5.7-1.7 2.2-2.4 3-.7-.8-1.9-2.3-2.4-3-.8-1.2-1.4-2.3-1.9-3.3-.6-1.4-.7-2.2-.7-2.5 0-2.6 2.2-4.7 5-4.7s5 2.1 5 4.7c0 .2-.1 1-.7 2.4z\"\n}));\n/* harmony default export */ const map_marker = (mapMarker);\n//# sourceMappingURL=map-marker.js.map\n;// CONCATENATED MODULE: ./blocks/src/gridArea/block.json\nconst block_namespaceObject = /*#__PURE__*/JSON.parse('{\"$schema\":\"https://schemas.wp.org/trunk/block.json\",\"apiVersion\":3,\"name\":\"h2ml/grid-area\",\"version\":\"0.1.0\",\"title\":\"H2ML Grid Area\",\"category\":\"widgets\",\"icon\":\"smiley\",\"description\":\"A block for displaying content within grid based layouts.\",\"textdomain\":\"h2ml\",\"parent\":[\"h2ml/grid\"],\"supports\":{\"anchor\":true,\"reusable\":true,\"__experimentalSettings\":true,\"layout\":{\"allowSwitching\":false,\"allowInheriting\":false,\"allowEditing\":true,\"default\":{\"type\":\"flex\",\"flexWrap\":\"wrap\",\"verticalAlignment\":\"top\",\"justifyContent\":\"left\",\"orientation\":\"vertical\"}},\"spacing\":{\"blockGap\":true,\"margin\":[\"top\",\"bottom\"],\"padding\":true,\"__experimentalDefaultControls\":{\"margin\":true,\"blockGap\":true,\"padding\":true}},\"color\":{\"enableContrastChecker\":false,\"gradients\":true,\"text\":true,\"background\":true},\"__experimentalBorder\":{\"color\":true,\"radius\":true,\"style\":true,\"width\":true,\"__experimentalDefaultControls\":{\"color\":true,\"radius\":true,\"style\":true,\"width\":true}},\"typography\":{\"fontSize\":true,\"lineHeight\":true}},\"attributes\":{\"colStart\":{\"type\":\"number\",\"default\":1},\"colEnd\":{\"type\":\"number\",\"default\":1},\"rowStart\":{\"type\":\"number\",\"default\":2},\"rowEnd\":{\"type\":\"number\",\"default\":2}},\"editorScript\":\"file:./index.js\",\"style\":\"file:./style-index.js\"}');\n;// CONCATENATED MODULE: external [\"wp\",\"blockEditor\"]\nconst external_wp_blockEditor_namespaceObject = window[\"wp\"][\"blockEditor\"];\n;// CONCATENATED MODULE: external [\"wp\",\"data\"]\nconst external_wp_data_namespaceObject = window[\"wp\"][\"data\"];\n;// CONCATENATED MODULE: external [\"wp\",\"components\"]\nconst external_wp_components_namespaceObject = window[\"wp\"][\"components\"];\n;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js\n\n/**\n * WordPress dependencies\n */\n\nconst resizeCornerNE = (0,external_React_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG, {\n  viewBox: \"0 0 24 24\",\n  xmlns: \"http://www.w3.org/2000/svg\"\n}, (0,external_React_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path, {\n  d: \"M7 18h4.5v1.5h-7v-7H6V17L17 6h-4.5V4.5h7v7H18V7L7 18Z\"\n}));\n/* harmony default export */ const resize_corner_n_e = (resizeCornerNE);\n//# sourceMappingURL=resize-corner-n-e.js.map\n;// CONCATENATED MODULE: external [\"wp\",\"i18n\"]\nconst external_wp_i18n_namespaceObject = window[\"wp\"][\"i18n\"];\n;// CONCATENATED MODULE: ./blocks/src/gridArea/edit.js\n\n/**\n * Wordpress Dependencies\n */\n\n\n\n\n\n\n\n/**\n * Main\n */\n\nfunction Edit({\n  attributes: {\n    colStart,\n    colEnd,\n    rowStart,\n    rowEnd\n  },\n  clientId\n}) {\n  //\n  const innerBlocksProps = (0,external_wp_blockEditor_namespaceObject.useInnerBlocksProps)((0,external_wp_blockEditor_namespaceObject.useBlockProps)({\n    style: {\n      gridColumnStart: colStart,\n      gridColumnEnd: colEnd,\n      gridRowStart: rowStart,\n      gridRowEnd: rowEnd\n    }\n  }));\n\n  //\n  return (0,external_React_namespaceObject.createElement)(external_React_namespaceObject.Fragment, null, (0,external_React_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockControls, null, (0,external_React_namespaceObject.createElement)(external_wp_components_namespaceObject.ToolbarGroup, null, (0,external_React_namespaceObject.createElement)(external_wp_components_namespaceObject.ToolbarButton, {\n    icon: resize_corner_n_e,\n    label: (0,external_wp_i18n_namespaceObject.__)('Resize Grid Area', 'h2ml'),\n    onClick: () => {\n      const gridClientID = (0,external_wp_data_namespaceObject.select)('core/block-editor').getBlockRootClientId(clientId);\n      (0,external_wp_data_namespaceObject.dispatch)('h2ml/grid-data').setIsUpdating({\n        gridClientID,\n        gridAreaClientID: clientId\n      });\n    }\n  }))), (0,external_React_namespaceObject.createElement)(\"div\", {\n    ...innerBlocksProps\n  }));\n}\n;// CONCATENATED MODULE: ./blocks/src/gridArea/save.js\n\n/**\n * Wordpress Dependencies\n */\n\n\n\n/**\n * Internal Dependencies\n */\n\n/**\n * \n */\n\nfunction Save({\n  attributes\n}) {\n  //\n  const innerBlocksProps = external_wp_blockEditor_namespaceObject.useInnerBlocksProps.save(external_wp_blockEditor_namespaceObject.useBlockProps.save({\n    style: {\n      gridColumnStart: attributes.colStart,\n      gridColumnEnd: attributes.colEnd,\n      gridRowStart: attributes.rowStart,\n      gridRowEnd: attributes.rowEnd\n    }\n  }));\n\n  //\n  return (0,external_React_namespaceObject.createElement)(\"div\", {\n    ...innerBlocksProps\n  });\n}\n;// CONCATENATED MODULE: ./blocks/src/gridArea/style.scss\n// extracted by mini-css-extract-plugin\n\n;// CONCATENATED MODULE: ./blocks/src/gridArea/index.js\n/**\n * WordPress dependencies\n * WordPress dependencies\n */\n\n\n\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n/**\n * Register the Block\n */\n\n(0,external_wp_blocks_namespaceObject.registerBlockType)(block_namespaceObject.name, {\n  //\n  icon: map_marker,\n  edit: Edit,\n  save: Save\n});\n\n//# sourceURL=webpack://h2ml-grid/./blocks/src/gridArea/index.js_+_13_modules?");

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
/******/ 			"gridArea/index": 0,
/******/ 			"gridArea/style-index": 0
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkh2ml_grid"] = globalThis["webpackChunkh2ml_grid"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["gridArea/style-index"], () => (__webpack_require__("./blocks/src/gridArea/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;