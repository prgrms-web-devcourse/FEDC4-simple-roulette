/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



function Header() {
  const $element = document.querySelector('#header');
  $element.innerHTML = _header_html__WEBPACK_IMPORTED_MODULE_0__["default"];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<h1>부트캠프 시작 3일만에 사이드 프로젝트 진행하기</h1>\n<p>지각은 싫어요</p>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 4 */
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
/* 5 */
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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
/* 6 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#header {
  text-align: center;
}

#header h1 {
  color: #557AFE;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 11 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 12 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item_section_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _item_events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _item_section_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _item_item_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _item_states_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);







function ItemSection({ Roullet, StartBtn }) {
  const $wrapper = document.querySelector("#main .item-section");
  $wrapper.innerHTML = _item_section_html__WEBPACK_IMPORTED_MODULE_0__["default"];

  const $refreshButton = $wrapper.querySelector(
    ".item-section__refresh-button"
  );
  $refreshButton.addEventListener("click", () => {
    (0,_item_events_js__WEBPACK_IMPORTED_MODULE_1__.handleRefreshList)({ Roullet, StartBtn });
  });

  const $addButton = $wrapper.querySelector(".item-section__add-button");
  $addButton.addEventListener("click", () => {
    const newItem = (0,_item_states_js__WEBPACK_IMPORTED_MODULE_4__.addItem)();
    if (!newItem) return;
    (0,_item_events_js__WEBPACK_IMPORTED_MODULE_1__.handleAddItem)(newItem, _item_states_js__WEBPACK_IMPORTED_MODULE_4__.lists.length, { Roullet, StartBtn });
  });

  const initialId = _storage__WEBPACK_IMPORTED_MODULE_5__.storage.getItem("item_id", 0);
  const newItem = (0,_item_states_js__WEBPACK_IMPORTED_MODULE_4__.addItem)();
  if (!newItem) return;
  let initialList = _storage__WEBPACK_IMPORTED_MODULE_5__.storage.getItem("item_lists", newItem);
  let list = [];
  if (initialList === newItem) list.push(initialList);
  list.length ? (initialList = list) : initialList;

  (0,_item_states_js__WEBPACK_IMPORTED_MODULE_4__.setLocalInfo)(initialList, initialId);
  initialList.map((e, i) => {
    (0,_item_events_js__WEBPACK_IMPORTED_MODULE_1__.handleAddItem)(e, i + 1);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemSection);


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<header class=\"item-section__header\">\n  <span class=\"item-section__item-count\">0 / 10</span>\n  <span class=\"item-section__refresh-button\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" width=\"15\">\n      <path\n        d=\"M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z\"\n      />\n    </svg>\n  </span>\n</header>\n\n<ul class=\"item-section__list\"></ul>\n\n<footer class=\"item-section__footer\">\n  <button class=\"item-section__add-button\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" width=\"12\">\n      <path\n        d=\"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z\"\n      />\n    </svg>\n    <span>항목 추가</span>\n  </button>\n</footer>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleAddItem: () => (/* binding */ handleAddItem),
/* harmony export */   handleRefreshList: () => (/* binding */ handleRefreshList),
/* harmony export */   handleRemoveItem: () => (/* binding */ handleRemoveItem)
/* harmony export */ });
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _states_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);




/**
 * 항목 아이템을 생성하여 문서에 추가합니다.
 */
const handleAddItem = (
  { key, value, checked, ratio },
  index,
  { Roullet, StartBtn }
) => {
  const $list = document.querySelector("#main .item-section__list");

  const $listItem = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.createListItem)(key);
  const $checkbox = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.createCheckbox)(key, checked, { Roullet, StartBtn });
  const $itemName = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.createItemName)(key, value, index, { Roullet, StartBtn });
  const $ratio = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.createRatio)(key, ratio, { Roullet, StartBtn });
  const $removeButton = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.createRemoveButton)((0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.createCloseIcon)(), {
    Roullet,
    StartBtn,
  });

  $listItem.append($checkbox, $itemName, $ratio, $removeButton);
  $list.appendChild($listItem);

  (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.updateListCount)();

  Roullet.setState(_storage_js__WEBPACK_IMPORTED_MODULE_2__.storage.getItem("item_lists", []));
  StartBtn.setState(_storage_js__WEBPACK_IMPORTED_MODULE_2__.storage.getItem("item_lists", []));
};

/**
 * 항목에서 X 아이콘을 클릭하면 해당 항목을 제거합니다.
 */
const handleRemoveItem = (e) => {
  const key = Number(e.currentTarget.closest("li")?.getAttribute("data-key"));
  if (isNaN(key)) return;
  (0,_states_js__WEBPACK_IMPORTED_MODULE_1__.removeItem)(key);
  (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.updateListCount)();

  const $item = document.querySelector(
    `#main .item-section__item[data-key='${key}']`
  );
  $item.remove();
};

/**
 * 초기화 버튼을 클릭하면 모든 항목을 제거합니다.
 */
const handleRefreshList = ({ Roullet, StartBtn }) => {
  (0,_states_js__WEBPACK_IMPORTED_MODULE_1__.refreshList)();
  (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.updateListCount)();

  const $list = document.querySelector("#main .item-section__list");
  $list.innerHTML = "";

  const newItem = (0,_states_js__WEBPACK_IMPORTED_MODULE_1__.addItem)();
  if (!newItem) return;
  _storage_js__WEBPACK_IMPORTED_MODULE_2__.storage.setItem("item_lists", JSON.stringify([newItem]));
  handleAddItem(newItem, 1, { Roullet, StartBtn });
};


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCheckbox: () => (/* binding */ createCheckbox),
/* harmony export */   createCloseIcon: () => (/* binding */ createCloseIcon),
/* harmony export */   createItemName: () => (/* binding */ createItemName),
/* harmony export */   createListItem: () => (/* binding */ createListItem),
/* harmony export */   createRatio: () => (/* binding */ createRatio),
/* harmony export */   createRemoveButton: () => (/* binding */ createRemoveButton),
/* harmony export */   updateItemIndexes: () => (/* binding */ updateItemIndexes),
/* harmony export */   updateListCount: () => (/* binding */ updateListCount)
/* harmony export */ });
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _states_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);




function createCheckbox(key, checked, { Roullet, StartBtn }) {
  const $element = document.createElement("input");
  $element.classList = "item-section__item-checkbox";
  $element.setAttribute("type", "checkbox");
  if (checked) $element.setAttribute("checked", checked);
  $element.addEventListener("click", (e) => {
    (0,_states_js__WEBPACK_IMPORTED_MODULE_1__.setCheck)(key, e.target.checked);
    Roullet.setState(_storage_js__WEBPACK_IMPORTED_MODULE_2__.storage.getItem("item_lists", []));
    StartBtn.setState(_storage_js__WEBPACK_IMPORTED_MODULE_2__.storage.getItem("item_lists", []));
  });

  return $element;
}

function createItemName(key, value, index, { Roullet, StartBtn }) {
  const $wrapper = document.createElement("div");
  $wrapper.classList = "item-section__item-name";

  const $index = document.createElement("span");
  $index.classList = "item-section__item-name-index";
  $index.textContent = index;

  const $input = document.createElement("input");
  $input.classList = "item-section__item-name-input";
  $input.setAttribute("type", "text");
  value.length
    ? $input.setAttribute("value", value)
    : $input.setAttribute("placeholder", "항목 이름");
  $input.addEventListener("blur", (e) => {
    (0,_states_js__WEBPACK_IMPORTED_MODULE_1__.setValue)(key, e.target.value);
    Roullet.setState(_storage_js__WEBPACK_IMPORTED_MODULE_2__.storage.getItem("item_lists", []));
    StartBtn.setState(_storage_js__WEBPACK_IMPORTED_MODULE_2__.storage.getItem("item_lists", []));
  });

  $wrapper.append($index, $input);
  return $wrapper;
}

function createRatio(key, ratio, { Roullet, StartBtn }) {
  //숫자타입 외에 다른 글자 입력 안되게 하기
  const $element = document.createElement("input");
  $element.classList = "item-section__item-ratio";
  $element.setAttribute("type", "text");
  $element.setAttribute("placeholder", "비율");
  $element.value = ratio;
  $element.addEventListener("input", () => {
    $element.value = $element.value.replace(/[^0-9.]/g, "");
  });
  $element.addEventListener("blur", (e) => {
    (0,_states_js__WEBPACK_IMPORTED_MODULE_1__.setRatio)(key, e.target.value * 1);
    Roullet.setState(_storage_js__WEBPACK_IMPORTED_MODULE_2__.storage.getItem("item_lists", []));
    StartBtn.setState(_storage_js__WEBPACK_IMPORTED_MODULE_2__.storage.getItem("item_lists", []));
  });
  return $element;
}

function createListItem(key) {
  const $element = document.createElement("li");
  $element.classList = "item-section__item";
  $element.setAttribute("data-key", key);
  return $element;
}

const domParser = new DOMParser();
function createCloseIcon() {
  const closeIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20">
      <path
        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
      />
    </svg>
  `;
  return domParser.parseFromString(closeIcon, "image/svg+xml").documentElement;
}

/**
 * 삭제 버튼 요소를 만들고, 내부에 X 모양의 svg 이미지를 등록합니다.
 * @param {HTMLElement} $icon createCloseIcon() 함수가 생성하여 반환한 svg 요소를 인자로 전달받아야 합니다.
 */
function createRemoveButton($icon, { Roullet, StartBtn }) {
  const $element = document.createElement("span");
  $element.classList = "item-section__item-remove-button";
  $element.appendChild($icon);
  $element.addEventListener("click", (e) => {
    (0,_events_js__WEBPACK_IMPORTED_MODULE_0__.handleRemoveItem)(e);
    updateItemIndexes();
    Roullet.setState(_storage_js__WEBPACK_IMPORTED_MODULE_2__.storage.getItem("item_lists", []));
    StartBtn.setState(_storage_js__WEBPACK_IMPORTED_MODULE_2__.storage.getItem("item_lists", []));
  });
  return $element;
}

function updateListCount() {
  const $element = document.querySelector("#main .item-section__item-count");
  $element.textContent = `${_states_js__WEBPACK_IMPORTED_MODULE_1__.lists.length} / 10`;
}

function updateItemIndexes() {
  document
    .querySelectorAll("#main .item-section__item-name-index")
    .forEach(($element, i) => {
      $element.textContent = i + 1;
    });
}


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addItem: () => (/* binding */ addItem),
/* harmony export */   lists: () => (/* binding */ lists),
/* harmony export */   nextId: () => (/* binding */ nextId),
/* harmony export */   refreshList: () => (/* binding */ refreshList),
/* harmony export */   removeItem: () => (/* binding */ removeItem),
/* harmony export */   setCheck: () => (/* binding */ setCheck),
/* harmony export */   setLocalInfo: () => (/* binding */ setLocalInfo),
/* harmony export */   setRatio: () => (/* binding */ setRatio),
/* harmony export */   setValue: () => (/* binding */ setValue)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);


let lists = [];
let nextId = 0;

function refreshList() {
  lists = [];
}

function addItem() {
  if (lists.length >= 10) {
    alert("항목은 최대 10개 까지 추가할 수 있어요!");
    return;
  }

  _storage_js__WEBPACK_IMPORTED_MODULE_0__.storage.setItem("item_id", JSON.stringify(nextId));
  _storage_js__WEBPACK_IMPORTED_MODULE_0__.storage.setItem("item_lists", JSON.stringify(lists));

  const newItem = {
    key: nextId++,
    value: "",
    checked: true,
    ratio: 1,
  };

  lists.push(newItem);
  return newItem;
}

function removeItem(key) {
  lists = lists.filter((item) => item.key !== key);
  _storage_js__WEBPACK_IMPORTED_MODULE_0__.storage.setItem("item_lists", JSON.stringify(lists));
}

function setLocalInfo(local_list, local_nextId) {
  lists = local_list;
  nextId = local_nextId + 1 ?? 0;
}

function setCheck(selected_key, checked) {
  lists.map(({ key }, i) => {
    if (key === selected_key) {
      return (lists[i].checked = checked);
    }
  });
  _storage_js__WEBPACK_IMPORTED_MODULE_0__.storage.setItem("item_lists", JSON.stringify(lists));
}

function setValue(selected_key, value) {
  lists.map(({ key }, i) => {
    if (key === selected_key) lists[i].value = value;
  });
  _storage_js__WEBPACK_IMPORTED_MODULE_0__.storage.setItem("item_lists", JSON.stringify(lists));
}

function setRatio(selected_key, ratio) {
  lists.map(({ key }, i) => {
    if (key === selected_key) lists[i].ratio = ratio;
  });
  _storage_js__WEBPACK_IMPORTED_MODULE_0__.storage.setItem("item_lists", JSON.stringify(lists));
}


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storage: () => (/* binding */ storage)
/* harmony export */ });
const storage = (function (storage) {
  const setItem = (key, value) => {
    try {
      storage.setItem(key, value);
    } catch (e) {
      console.log(e.message);
    }
  };
  const getItem = (key, defaultValue) => {
    try {
      const storedValue = storage.getItem(key);

      if (storedValue) {
        return JSON.parse(storedValue);
      }
      return defaultValue;
    } catch (e) {
      console.log(e.message);
      return defaultValue;
    }
  };

  //keyword를 key로 가진 값 삭제하기
  const clearItem = (keword) => {
    try {
      storage.removeItem(keword);
    } catch (e) {
      console.log(e.message);
    }
  };

  return {
    setItem,
    getItem,
    clearItem,
  };
})(window.localStorage);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_item_section_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_item_section_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_item_section_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_item_section_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_item_section_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 20 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.item-section {
  width: 50em;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.item-section__header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1em;
}

.item-section__list {
  height: 30em;
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  border: 2px solid #2a58fe4e;
  border-radius: 15px;
  box-shadow: 2px 10px 11px 5px rgba(211, 211, 211, 0.75);
  overflow-y: scroll;
}

.item-section__list::-webkit-scrollbar {
  /* 스크롤바의 너비 */
  width: 0.5em;
  height: 0.5em;
}

.item-section__list::-webkit-scrollbar-thumb {
  height: 30%; /* 스크롤바의 길이 */
  background: rgb(58, 58, 58); /* 스크롤바의 색상 */
  border-radius: 0.7em;
}

.item-section__list::-webkit-scrollbar-track {
  background: rgba(33, 122, 244, 0.1); /* 스크롤바 뒷 배경 색상 */
}

.item-section__footer {
  display: flex;
  justify-content: flex-end;
}

.item-section__refresh-button {
  padding: 0.85em;
  display: inline-block;
  border-radius: 13px;
  box-shadow: 2px 10px 11px 5px rgba(211, 211, 211, 0.75);
  cursor: pointer;
  user-select: none;
  transition: all 0.25s;
}

.item-section__refresh-button:hover {
  background-color: rgb(240, 242, 245);
}

.item-section__add-button {
  padding: 1em;
  display: flex;
  align-items: center;
  gap: 1em;
  border: none;
  border-radius: 10px;
  background-color: #4e74ff;
  color: white;
  fill: white;
  cursor: pointer;
  user-select: none;
  transition: all 0.25s;
}

.item-section__add-button:hover {
  background-color: #2c58f7;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_item_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_item_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_item_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_item_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_item_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 22 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.item-section__item {
  display: flex;
  align-items: center;
  gap: 2em;
  list-style-type: none;
}

.item-section__item input {
  height: 3em;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
  transition: all 0.25s;
}

.item-section__item input:focus {
  outline: none;
}

.item-section__item-checkbox {
  background-color: red;
  transform: scale(2);
}

.item-section__item-name {
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 0 0.75em;
  border: 1px solid #7f9bfe9e;
  border-radius: 5px;
  transition: all 0.25s;
}

.item-section__item-name:focus-within {
  box-shadow: 0px 0px 1px 1px #7f9bfe;
}

.item-section__item-name-index {
  padding-right: 0.75em;
  border-right: 1px solid #2A59FE;
}

.item-section__item-name-input {
  flex-grow: 1;
  padding-left: 0.75em;
  border: none;
}

.item-section__item-ratio {
  width: 6em;
  border: 1px solid rgba(118, 118, 118, 0.362);
}

.item-section__item-ratio:focus {
  box-shadow: 0px 0px 1px 1px rgb(118, 118, 118);
}

.item-section__item-remove-button {
  padding: 0.25em;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.25s;
}

.item-section__item-remove-button svg path {
  fill: rgba(128, 128, 128, 0.79);
  transition: all 0.25s;
}

.item-section__item-remove-button:hover {
  background-color: rgba(235, 233, 233, 0.23);
}

.item-section__item-remove-button:hover svg path {
  fill: black;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _roullet_section_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _roullet_section_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _roullet_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _roullet_random_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);






// const lists = [
//   {
//     key: 1,
//     value: "A",
//     checked: false,
//     ratio: 3,
//   },
//   {
//     key: 2,
//     value: "B",
//     checked: false,
//     ratio: 2,
//   },
//   {
//     key: 3,
//     value: "C",
//     checked: false,
//     ratio: 4,
//   },
//   {
//     key: 4,
//     value: "D",
//     checked: false,
//     ratio: 6,
//   },
// ];

function RoulletSection() {
  const $wrapper = document.querySelector(".roullet-section");
  $wrapper.insertAdjacentHTML("afterbegin", _roullet_section_html__WEBPACK_IMPORTED_MODULE_0__["default"]);
  const $button = document.querySelector(".start-button");
  const $canvas = document.querySelector(".roullet-roll");

  const lists = _storage__WEBPACK_IMPORTED_MODULE_4__.storage.getItem("item_lists", []);

  const Roullet = new _roullet_canvas__WEBPACK_IMPORTED_MODULE_2__["default"]({
    $canvas,
    initialState: lists,
    sumRatio: (lists) =>
      lists.reduce(
        (acc, { ratio, checked }) => (!checked ? acc : acc + ratio),
        0
      ),
  });

  const StartBtn = new _roullet_random_item__WEBPACK_IMPORTED_MODULE_3__["default"]({
    $button,
    initialState: lists,
    sumRatio: (lists) =>
      lists.reduce(
        (acc, { ratio, checked }) => (!checked ? acc : acc + ratio),
        0
      ),
    setResult: _storage__WEBPACK_IMPORTED_MODULE_4__.storage.setItem.bind(_storage__WEBPACK_IMPORTED_MODULE_4__.storage),
    getResult: _storage__WEBPACK_IMPORTED_MODULE_4__.storage.getItem.bind(_storage__WEBPACK_IMPORTED_MODULE_4__.storage),
    $canvas,
  });

  return { Roullet, StartBtn };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoulletSection);


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(26), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<p class=\"roullet-section__winner\">결과 당첨!</p>\n\n<div class=\"roullet-section__roullet\">\n  <canvas class=\"roullet-roll\" width=\"490\" height=\"490\"></canvas>\n  <button class=\"start-button\">START</button>\n\n  <img class=\"roullet-arrow\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"arrow.svg\" />\n</div>\n\n<div class=\"result-history\">\n  <button id=\"open-history-modal\">결과내역</button>\n</div>\n\n<div class=\"history-modal hidden\">\n  <div class=\"history-modal_overlay\"></div>\n  <div class=\"history-modal_content\">\n    <button class=\"close-btn\">X</button>\n    <h1>결과 확인</h1>\n    <button class=\"clear-btn\">결과 전체 삭제</button>\n    <div class=\"results-section\"></div>\n  </div>\n</div>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),
/* 25 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "435d08e18396ad1046a2.svg";

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_roullet_section_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_roullet_section_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_roullet_section_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_roullet_section_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_roullet_section_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 28 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.roullet-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.roullet-section__winner {
  font-weight: 800;
  font-size: 25px;
  color: #5b71bd;
}

.roullet-section__roullet {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: rgba(192, 206, 194, 0.2);
  opacity: 90%;
  position: relative;
}

.start-button {
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 50%;
  border: none;
  box-shadow: 10px 5px 5px rgba(63, 63, 63, 0.2);
  cursor: pointer;
  font-weight: 600;
  position: absolute;
}

.start-button:active {
  margin-left: 3px;
  margin-top: 3px;
  box-shadow: none;
}

.roullet-arrow {
  position: absolute;
  top: -5px;
}

.result-history {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

.result-history button {
  width: 114px;
  height: 44px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  border: none;
  background-color: white;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  cursor: pointer;
}

.history-modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.history-modal_overlay {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(2px);
  width: 100vw;
  height: 100vh;
  position: absolute;
}

.history-modal_content {
  background-color: white;
  text-align: center;
  position: relative;
  padding: 40px 30px;
  top: 0px;
  width: 730px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  min-height: 400px;
}

h1 {
  margin: 0;
  color: #557afe;
  font-weight: 400;
  font-size: 30px;
}

.results-section {
  max-height: 300px;
  margin-top: 30px;
  padding: 5px 30px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 10px;
  overflow-y: auto;
  font-size: 16px;
  font-weight: 400px;
}

.results-item {
  display: flex;
  width: 100%;
  height: 45px;
  flex-direction: row;
  border: 1px solid #7f9bfe;
  border-radius: 4px;
  padding: 5px 10px;
  box-sizing: border-box;
  align-items: center;
}

.results-section p {
  text-align: left;
  margin-left: 20px;
}

.result_index {
  display: flex;
  align-items: center;
  height: 24px;
  padding: 0px 8px;
  border-right: 1px solid black;
  box-sizing: border-box;
  margin-right: 80px;
  margin-left: 5px;
  width: 40px;
}

.close-btn {
  border: none;
  background: none;
  font-weight: bold;
  position: absolute;
  top: 16px;
  right: 13px;
  cursor: pointer;
}

.clear-btn {
  width: 145px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  position: absolute;
  top: 30px;
  left: 500px;
  font-size: 16px;
  cursor: pointer;
}

.hidden {
  display: none;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function RoulletCanvas({ $canvas, initialState, sumRatio }) {
  const colors = [
    "#E4EAFF",
    "#C2D0FF",
    "#A1B5FE",
    "#7F9BFE",
    "#5D81FE",
    "#3C66FD",
    "#1A4CFD",
    "#0237F3",
    "#022FD1",
    "#0128B0",
  ];
  this.state = initialState;

  this.setState = (nextState) => {
    console.log(nextState);
    this.state = nextState;
    this.render(this.circleState);
  };

  this.circleState = {
    ctx: $canvas.getContext("2d"),
    centerX: $canvas.width / 2,
    centerY: $canvas.height / 2,
    radius: $canvas.width / 2 - 10,
  };

  this.render = ({ ctx, centerX, centerY, radius }) => {
    // 룰렛 원 영역
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI); // 원의중심 x좌표, 원의 중심 y좌표, 원의 반지름, 원호의 시작 각도, 원호의 종료 각도
    ctx.strokeStyle = "#DBDBDB";

    // 룰렛 부채꼴 영역
    const sum = sumRatio(this.state);
    let startAngle = -(1 / 2) * Math.PI;
    for (const { key, value, checked, ratio } of this.state) {
      if (!checked) continue;
      const percent = (ratio / sum) * 100;
      const angle = (360 * percent) / 100;
      const radian = (angle * Math.PI) / 180;
      const endAngle = radian + startAngle;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = colors[key - 1];
      ctx.fill();
      ctx.stroke();

      //텍스트 쓰기
      const textAngle = startAngle + radian / 2;

      const textX = centerX + (radius / 2) * Math.cos(textAngle);
      const textY = centerY + (radius / 2) * Math.sin(textAngle);

      ctx.save(); // 현재 캔버스 상태 저장
      ctx.translate(textX, textY); // 캔버스의 원점을 텍스트 위치로 이동
      ctx.rotate(textAngle); // 텍스트를 대각선으로 회전

      const fontSize = angle < 18 ? angle : 18;
      ctx.font = `bold ${fontSize}px Raleway`;
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText(value, 0, 0); // 회전한 캔버스에 텍스트를 그림
      ctx.restore();

      startAngle = endAngle;
    }
  };

  this.render(this.circleState);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoulletCanvas);


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function RandomItemBtn({
  $button,
  initialState,
  sumRatio,
  getResult,
  setResult,
  $canvas,
}) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render;
  };

  this.rotate = (totalRatio, randomValue) => {
    $canvas.style.transform = `initial`;
    $canvas.style.transition = `initial`;
    console.log(randomValue); // **추후 콘솔 삭제**

    setTimeout(() => {
      const angle = 360 / totalRatio;
      const rotate = randomValue * angle + 3600 + angle / 2;

      $canvas.style.transform = `rotate(-${rotate}deg)`;
      $canvas.style.transition = `3s`;
    }, 0);
  };

  this.render = (() => {
    $button.addEventListener("click", (e) => {
      const totalRatio = sumRatio(this.state);
      const randomValue = Math.floor(Math.random() * totalRatio);
      this.rotate(totalRatio, randomValue);

      let accumulatedRatio = 0;
      for (const { ratio, value } of this.state) {
        accumulatedRatio += ratio;
        if (randomValue < accumulatedRatio) {
          console.log(value); // **추후 콘솔 삭제**
          setResult(
            "results",
            JSON.stringify([...getResult("results", []), value])
          );
          return value;
        }
      }
    });
  })();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RandomItemBtn);


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 32 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  padding: 2em;
}

#main {
  display: flex;
  justify-content: center;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResultHistoryModal)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);


function ResultHistoryModal() {
  const openButton = document.getElementById("open-history-modal");
  const modal = document.querySelector(".history-modal");
  const overlay = modal.querySelector(".history-modal_overlay");
  const closeBtn = modal.querySelector("button");
  const resultList = document.querySelector(".results-section");
  const clearBtn = modal.querySelector(".clear-btn");

  const renderResults = () => {
    resultList.innerHTML = "";
    const results = _storage__WEBPACK_IMPORTED_MODULE_0__.storage.getItem("results", []);

    if (results.length === 0) {
      //결과 내역이 없을 때
      const message = document.createElement("p");
      message.textContent = "결과 내역이 없습니다";
      resultList.appendChild(message);
    } else {
      //결과 리스트 렌더링
      results.forEach((item, index) => {
        const resultItem = document.createElement("div");
        resultItem.classList = "results-item";
        resultItem.innerHTML = `
            <div class="result_index"> ${index + 1} </div>
            <p> ${item} </p> 
        `;
        resultList.appendChild(resultItem);
      });
    }
  };

  const clearHistory = () => {
    //결과 전체 삭제
    _storage__WEBPACK_IMPORTED_MODULE_0__.storage.clearItem("results");
    renderResults();
  };

  const openModal = () => {
    //모달 열기
    modal.classList.remove("hidden");
    renderResults();
  };

  const closeModal = () => {
    //모달 닫기
    modal.classList.add("hidden");
  };

  overlay.addEventListener("click", closeModal);
  openButton.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  clearBtn.addEventListener("click", clearHistory);
}


/***/ })
/******/ 	]);
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
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/******/ 			0: 0
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_item_section_item_section_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _components_roullet_section_roullet_section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _components_roullet_section_ResultHistoryModal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);






(0,_components_header_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_components_item_section_item_section_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_components_roullet_section_roullet_section_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
(0,_components_roullet_section_ResultHistoryModal_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

})();

/******/ })()
;