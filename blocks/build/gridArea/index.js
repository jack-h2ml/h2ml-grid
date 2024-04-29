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
  !*** ./blocks/src/gridArea/index.js + 17 modules ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n;// CONCATENATED MODULE: external [\"wp\",\"blocks\"]\nconst external_wp_blocks_namespaceObject = window[\"wp\"][\"blocks\"];\n;// CONCATENATED MODULE: external \"React\"\nconst external_React_namespaceObject = window[\"React\"];\n;// CONCATENATED MODULE: external [\"wp\",\"primitives\"]\nconst external_wp_primitives_namespaceObject = window[\"wp\"][\"primitives\"];\n;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/symbol-filled.js\n\n/**\n * WordPress dependencies\n */\n\nconst symbolFilled = (0,external_React_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG, {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 24 24\"\n}, (0,external_React_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path, {\n  d: \"M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-17.6 1L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z\"\n}));\n/* harmony default export */ const symbol_filled = (symbolFilled);\n//# sourceMappingURL=symbol-filled.js.map\n;// CONCATENATED MODULE: ./blocks/src/gridArea/block.json\nconst block_namespaceObject = /*#__PURE__*/JSON.parse('{\"$schema\":\"https://schemas.wp.org/trunk/block.json\",\"apiVersion\":3,\"name\":\"h2ml/grid-area\",\"version\":\"0.1.0\",\"title\":\"H2ML Grid Area\",\"category\":\"widgets\",\"icon\":\"smiley\",\"description\":\"A block for displaying content within grid based layouts.\",\"textdomain\":\"h2ml\",\"parent\":[\"h2ml/grid\"],\"supports\":{\"anchor\":true,\"reusable\":true,\"__experimentalSettings\":true,\"layout\":{\"allowSwitching\":false,\"allowInheriting\":false,\"allowEditing\":true,\"default\":{\"type\":\"flex\",\"flexWrap\":\"wrap\",\"verticalAlignment\":\"top\",\"justifyContent\":\"left\",\"orientation\":\"vertical\"}},\"spacing\":{\"blockGap\":true,\"margin\":[\"top\",\"bottom\"],\"padding\":true,\"__experimentalDefaultControls\":{\"margin\":true,\"blockGap\":true,\"padding\":true}},\"color\":{\"enableContrastChecker\":false,\"gradients\":true,\"text\":true,\"background\":true},\"__experimentalBorder\":{\"color\":true,\"radius\":true,\"style\":true,\"width\":true,\"__experimentalDefaultControls\":{\"color\":true,\"radius\":true,\"style\":true,\"width\":true}},\"typography\":{\"fontSize\":true,\"lineHeight\":true}},\"attributes\":{\"breakpoints\":{\"type\":\"array\",\"default\":[]}},\"editorScript\":\"file:./index.js\",\"style\":\"file:./style-index.css\"}');\n;// CONCATENATED MODULE: external [\"wp\",\"blockEditor\"]\nconst external_wp_blockEditor_namespaceObject = window[\"wp\"][\"blockEditor\"];\n;// CONCATENATED MODULE: external [\"wp\",\"data\"]\nconst external_wp_data_namespaceObject = window[\"wp\"][\"data\"];\n;// CONCATENATED MODULE: external [\"wp\",\"i18n\"]\nconst external_wp_i18n_namespaceObject = window[\"wp\"][\"i18n\"];\n;// CONCATENATED MODULE: ./blocks/src/grid/dependencies/findByProperty/index.js\n/**\n * \n */\n\n/* harmony default export */ function findByProperty(arr, property, val) {\n  const breakpointIndex = arr.findIndex(breakpoint => breakpoint[property] === val);\n  return [breakpointIndex, arr[breakpointIndex]];\n}\n;// CONCATENATED MODULE: external [\"wp\",\"components\"]\nconst external_wp_components_namespaceObject = window[\"wp\"][\"components\"];\n;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js\n\n/**\n * WordPress dependencies\n */\n\nconst resizeCornerNE = (0,external_React_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG, {\n  viewBox: \"0 0 24 24\",\n  xmlns: \"http://www.w3.org/2000/svg\"\n}, (0,external_React_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path, {\n  d: \"M7 18h4.5v1.5h-7v-7H6V17L17 6h-4.5V4.5h7v7H18V7L7 18Z\"\n}));\n/* harmony default export */ const resize_corner_n_e = (resizeCornerNE);\n//# sourceMappingURL=resize-corner-n-e.js.map\n;// CONCATENATED MODULE: ./blocks/src/gridArea/editorDependencies/toolbar/index.js\n\n/**\n * \n */\n\n\n\n\n\n\n/**\n * Main\n */\n\n/* harmony default export */ function toolbar({\n  updateGridArea,\n  hideGridArea\n}) {\n  const resizeLabel = (0,external_wp_i18n_namespaceObject.__)('Resize Grid Area', 'h2ml');\n  const hideLabel = (0,external_wp_i18n_namespaceObject.__)('Hides Grid Area for current breakpoint', 'h2ml');\n  const hideText = (0,external_wp_i18n_namespaceObject.__)('Hide', 'h2ml');\n  return (0,external_React_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockControls, null, (0,external_React_namespaceObject.createElement)(external_wp_components_namespaceObject.ToolbarGroup, null, (0,external_React_namespaceObject.createElement)(external_wp_components_namespaceObject.ToolbarButton, {\n    icon: resize_corner_n_e,\n    label: resizeLabel,\n    onClick: updateGridArea\n  }), (0,external_React_namespaceObject.createElement)(external_wp_components_namespaceObject.ToolbarButton, {\n    label: hideLabel,\n    showTooltip: true,\n    onClick: hideGridArea\n  }, hideText)));\n}\n;// CONCATENATED MODULE: ./blocks/src/gridArea/edit.js\n\n/**\n * Wordpress Dependencies\n */\n\n\n\n\n\n/**\n * Internal Imports\n */\n\n\n\n\n/**\n * Main\n */\n\nfunction Edit({\n  attributes,\n  clientId,\n  context,\n  __unstableLayoutClassNames,\n  setAttributes\n}) {\n  /**\n   * Global\n   */\n\n  const {\n    breakpoints\n  } = attributes;\n  const {\n    \"h2ml-grid/activeBreakpointId\": activeBreakpointId = breakpoints[0].id,\n    \"h2ml-grid/definingGridArea\": definingGridArea\n  } = context;\n  console.log(activeBreakpointId);\n\n  //\n  const [breakpointIndex, breakpoint] = findByProperty(breakpoints, 'id', activeBreakpointId);\n\n  // Allows us to use setAttributes where we might otherwise fall into an undo trap.\n  const {\n    __unstableMarkNextChangeAsNotPersistent\n  } = (0,external_wp_data_namespaceObject.useDispatch)('core/block-editor');\n\n  /**\n   * Manage Grid Area\n   */\n\n  const updateGridArea = () => {\n    const gridClientId = (0,external_wp_data_namespaceObject.select)('core/block-editor').getBlockRootClientId(clientId);\n    __unstableMarkNextChangeAsNotPersistent();\n    (0,external_wp_data_namespaceObject.dispatch)('core/block-editor').updateBlockAttributes(gridClientId, {\n      definingGridArea: {\n        gridAreaClientId: clientId,\n        existingBreakpoints: breakpoints\n      }\n    });\n  };\n  const hideGridArea = () => {\n    setAttributes({\n      breakpoints: breakpoints.toSpliced(breakpointIndex, 1, {\n        id: breakpoint.id,\n        mediaQuery: breakpoint.mediaQuery\n      })\n    });\n  };\n\n  /**\n   * Rendering\n   */\n\n  // Adds style attributes for Grid's columns and rows\n  const style = {\n    gridColumnStart: breakpoint.colStart,\n    gridColumnEnd: breakpoint.colEnd,\n    gridRowStart: breakpoint.rowStart,\n    gridRowEnd: breakpoint.rowEnd\n  };\n\n  // Sets the WP Block Props\n  const innerBlocksProps = (0,external_wp_blockEditor_namespaceObject.useInnerBlocksProps)((0,external_wp_blockEditor_namespaceObject.useBlockProps)({\n    style\n  }));\n\n  // The JSX\n  return Object.keys(breakpoint).length > 2 && (0,external_React_namespaceObject.createElement)(external_React_namespaceObject.Fragment, null, !definingGridArea && (0,external_React_namespaceObject.createElement)(toolbar, {\n    updateGridArea: updateGridArea,\n    hideGridArea: hideGridArea\n  }), (0,external_React_namespaceObject.createElement)(\"div\", {\n    ...innerBlocksProps\n  }));\n}\n;// CONCATENATED MODULE: external [\"wp\",\"element\"]\nconst external_wp_element_namespaceObject = window[\"wp\"][\"element\"];\n;// CONCATENATED MODULE: ./blocks/src/gridArea/save.js\n\n/**\n * Wordpress Dependencies\n */\n\n\n\n\n/**\n * \n */\n\nfunction Save({\n  attributes: {\n    breakpoints\n  }\n}) {\n  //\n  const {\n    children,\n    ...innerBlocksProps\n  } = external_wp_blockEditor_namespaceObject.useInnerBlocksProps.save(external_wp_blockEditor_namespaceObject.useBlockProps.save());\n\n  //\n  const style = breakpoints.reduce((style, {\n    mediaQuery,\n    ...definition\n  }) => {\n    return style += `@media screen and ${mediaQuery} {\n\t\t\t:host {\n\t\t\t\t${Object.keys(definition).length > 1 ? `\n\t\t\t\t\t\tdisplay: flex !important;\n\t\t\t\t\t\tgrid-column-start: ${definition.colStart} !important;\n\t\t\t\t\t\tgrid-column-end: ${definition.colEnd} !important;\n\t\t\t\t\t\tgrid-row-start: ${definition.rowStart} !important;\n\t\t\t\t\t\tgrid-row-end: ${definition.rowEnd} !important;\n\t\t\t\t\t` : `\n\t\t\t\t\t\tdisplay: none !important;\n\t\t\t\t\t`}\n\t\t\t}\n\t\t}`;\n  }, '').replace(/\t|\\r\\n|\\n|\\r/gm, \"\");\n\n  //\n  return (0,external_React_namespaceObject.createElement)(\"div\", {\n    ...innerBlocksProps\n  }, (0,external_React_namespaceObject.createElement)(\"template\", {\n    shadowrootmode: \"closed\"\n  }, (0,external_React_namespaceObject.createElement)(\"style\", null, style), (0,external_React_namespaceObject.createElement)(\"slot\", null)), children);\n}\n;// CONCATENATED MODULE: ./blocks/src/gridArea/deprecated.js\n\n/**\n * Wordpress Dependencies\n */\n\n\n\n/**\n * \n */\n\nconst v1 = {\n  //\n  attributes: {\n    breakpoints: {\n      type: 'object',\n      default: {}\n    }\n  },\n  //\n  migrate({\n    breakpoints\n  }) {\n    const convertedBreakpoints = Object.entries(breakpoints).map(([id, breakpoint]) => ({\n      id,\n      ...breakpoint\n    }));\n    return {\n      breakpoints: convertedBreakpoints\n    };\n  },\n  //\n  save({\n    attributes: {\n      breakpoints\n    }\n  }) {\n    //\n    const {\n      children,\n      ...innerBlocksProps\n    } = external_wp_blockEditor_namespaceObject.useInnerBlocksProps.save(external_wp_blockEditor_namespaceObject.useBlockProps.save());\n\n    //\n    const style = Object.keys(breakpoints).reduce((style, breakpointId) => {\n      const {\n        mediaQuery,\n        ...definition\n      } = breakpoints[breakpointId];\n      return style += `@media screen and ${mediaQuery} {\n\t\t\t\t@scope {\n\t\t\t\t\t:scope.wp-block-h2ml-grid-area {\n\t\t\t\t\t\t${Object.keys(definition).length ? `\n\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\tgrid-column-start: ${definition.colStart};\n\t\t\t\t\t\t\t\tgrid-column-end: ${definition.colEnd};\n\t\t\t\t\t\t\t\tgrid-row-start: ${definition.rowStart};\n\t\t\t\t\t\t\t\tgrid-row-end: ${definition.rowEnd};\n\t\t\t\t\t\t\t` : `\n\t\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t\t`}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}`;\n    }, '').replace(/\t|\\r\\n|\\n|\\r/gm, \"\");\n\n    //\n    return (0,external_React_namespaceObject.createElement)(\"div\", {\n      ...innerBlocksProps\n    }, (0,external_React_namespaceObject.createElement)(\"style\", null, style), children);\n  }\n};\n\n/**\n * \n */\n\nconst v2 = {\n  //\n  attributes: {\n    breakpoints: {\n      type: 'array',\n      default: []\n    }\n  },\n  //\n  migrate({\n    breakpoints\n  }) {\n    const convertedBreakpoints = Object.entries(breakpoints).map(([id, breakpoint]) => ({\n      id,\n      ...breakpoint\n    }));\n    return {\n      breakpoints: convertedBreakpoints\n    };\n  },\n  //\n  save({\n    attributes: {\n      breakpoints\n    }\n  }) {\n    //\n    const {\n      children,\n      ...innerBlocksProps\n    } = external_wp_blockEditor_namespaceObject.useInnerBlocksProps.save(external_wp_blockEditor_namespaceObject.useBlockProps.save());\n\n    //\n    const style = breakpoints.reduce((style, {\n      mediaQuery,\n      ...definition\n    }) => {\n      return style += `@media screen and ${mediaQuery} {\n\t\t\t\t@scope {\n\t\t\t\t\t:scope.wp-block-h2ml-grid-area {\n\t\t\t\t\t\t${Object.keys(definition).length ? `\n\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\tgrid-column-start: ${definition.colStart};\n\t\t\t\t\t\t\t\tgrid-column-end: ${definition.colEnd};\n\t\t\t\t\t\t\t\tgrid-row-start: ${definition.rowStart};\n\t\t\t\t\t\t\t\tgrid-row-end: ${definition.rowEnd};\n\t\t\t\t\t\t\t` : `\n\t\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t\t`}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}`;\n    }, '').replace(/\t|\\r\\n|\\n|\\r/gm, \"\");\n\n    //\n    return (0,external_React_namespaceObject.createElement)(\"div\", {\n      ...innerBlocksProps\n    }, (0,external_React_namespaceObject.createElement)(\"style\", null, style), children);\n  }\n};\n\n/**\n * \n */\n\n/* harmony default export */ const deprecated = ([v2, v1]);\n;// CONCATENATED MODULE: ./blocks/src/gridArea/style.scss\n// extracted by mini-css-extract-plugin\n\n;// CONCATENATED MODULE: ./blocks/src/gridArea/index.js\n/**\n * WordPress dependencies\n * WordPress dependencies\n */\n\n\n\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n\n/**\n * Register the Block\n */\n\n(0,external_wp_blocks_namespaceObject.registerBlockType)(block_namespaceObject.name, {\n  //\n  icon: symbol_filled,\n  edit: Edit,\n  save: Save,\n  usesContext: ['h2ml-grid/activeBreakpointId', 'h2ml-grid/definingGridArea'],\n  deprecated: deprecated\n});\n\n//# sourceURL=webpack://h2ml-grid/./blocks/src/gridArea/index.js_+_17_modules?");

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