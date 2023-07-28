/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _header_Header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _itemSection_ItemSection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _roulletSection_RoulletSection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _roulletHistorySection_RoulletHistorySection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _stores_itemListStore_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34);
/* harmony import */ var _stores_resultStore_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);







class App {
  constructor({ $target }) {
    this.$target = $target;
    this.itemListStore = new _stores_itemListStore_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.resultsStore = new _stores_resultStore_js__WEBPACK_IMPORTED_MODULE_5__["default"](); //결과 내역을 관리하는 스토어

    this.initialComponents();
    this.render();
  }

  initialComponents() {
    const { itemListStore, resultsStore } = this;

    new _header_Header_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ $target: document.querySelector("#header") });

    this.itemSection = new _itemSection_ItemSection_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      $target: document.querySelector(".item-section"),
      initialState: itemListStore.state,
      addItem: () => {
        itemListStore.addItem();
        this.render();
      },
      removeItem: (key) => {
        itemListStore.removeItem(key);
        if (itemListStore.state.length === 0) itemListStore.refreshList();
        this.render();
      },
      setCheck: (key, checked) => {
        itemListStore.setCheck(key, checked);
        this.roulletRender();
      },
      setValue: (key, value) => {
        itemListStore.setValue(key, value);
        this.roulletRender();
      },
      setRatio: (key, ratio) => {
        itemListStore.setRatio(key, ratio);
        this.roulletRender();
      },
      refreshList: () => {
        itemListStore.refreshList();
        this.render();
      },
    });

    this.roulletSection = new _roulletSection_RoulletSection_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      $target: document.querySelector(".roullet-section"),
      initialState: itemListStore.state,
      addHistory: (results) => {
        resultsStore.setState([...resultsStore.state.results, results]);
        this.render();
      },
    });

    this.roulletHistorySection = new _roulletHistorySection_RoulletHistorySection_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
      $target: this.$target.querySelector(".roullet-history-section"),
      initialState: resultsStore.state.results,
      clearHistory: () => {
        resultsStore.deleteAllResults();
        this.render();
      },
    });
  }

  render() {
    const {
      itemSection,
      itemListStore,
      roulletSection,
      resultsStore,
      roulletHistorySection,
    } = this;

    itemSection.setState(itemListStore.state);
    roulletSection.setState(itemListStore.state);

    const resultState = resultsStore.state.results; //스토어에서 state가져오기
    roulletHistorySection.setState(resultState); //state 재설정
  }

  roulletRender() {
    const { itemListStore, roulletSection } = this;

    roulletSection.setState(itemListStore.state);
  }
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _Header_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



class Header {
  constructor({ $target }) {
    this.$target = $target;
    
    this.render();
  }

  render() {
    this.$target.innerHTML = _Header_html__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
}

/***/ }),
/* 3 */
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
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
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
/* 12 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 13 */
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
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemSection)
/* harmony export */ });
/* harmony import */ var _ItemSection_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _ItemSection_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _Item_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);




class ItemSection {
  constructor({ $target, initialState, addItem, removeItem, setCheck, setValue, setRatio, refreshList }) {
    $target.innerHTML = _ItemSection_html__WEBPACK_IMPORTED_MODULE_0__["default"];

    this.$list = $target.querySelector('.item-section__list');
    this.$count = $target.querySelector('.item-section__item-count');
    this.$addButton = $target.querySelector('.item-section__add-button');
    this.$refreshButton = $target.querySelector('.item-section__refresh-button');

    this.state = initialState;
    this.addItem = addItem;
    this.removeItem = removeItem;
    this.setCheck = setCheck;
    this.setValue = setValue;
    this.setRatio = setRatio;
    this.refreshList = refreshList;

    this.render();
    this.initEvents();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  initEvents() {
    this.$addButton.addEventListener('click', this.addItem);

    // 초기화 이벤트
    this.$refreshButton.addEventListener('click', this.refreshList);

    // 아이템 클릭 이벤트
    this.$list.addEventListener('click', e => {
      const key = Number(e.target.closest('li')?.getAttribute('data-key'));
      if (isNaN(key)) return;

      // 삭제 이벤트
      if (e.target.closest('.item-section__item-remove-button')) this.removeItem(key);

      // 체크박스 이벤트
      if (e.target.closest('.item-section__item-checkbox')) this.setCheck(key, e.target.checked);
    });

    // 아이템 입력 이벤트
    this.$list.addEventListener('input', e => {
      const key = Number(e.target.closest('li')?.getAttribute('data-key'));
      if (isNaN(key)) return;

      // 이름 입력 이벤트
      if (e.target.closest('.item-section__item-name-input')) this.setValue(key, e.target.value);

      // 비율 입력 이벤트
      const $ratio = e.target.closest('.item-section__item-ratio');
      if ($ratio) {
        const nextValue = Number($ratio.value.replace(/[^0-9.]/g, '')) || 0;
        this.setRatio(key, nextValue);
        $ratio.value = nextValue;
      }
    });
  }

  render() {
    const { state } = this;

    const listItem = ({ key, value, checked, ratio }, index) => `
      <li class="item-section__item" data-key="${key}">
        <input class="item-section__item-checkbox" type="checkbox" ${checked ? 'checked' : ''} />
        <div class="item-section__item-name">
          <span class="item-section__item-name-index">${index + 1}</span>
          <input
            class="item-section__item-name-input"
            placeholder="항목 이름"
            type="text"
            value="${value}"
            maxlength="20"
          />
        </div>
        <input
          class="item-section__item-ratio"
          placeholder="비율"
          type="text"
          value="${ratio}"
          maxlength="20"
        />
        <span class="item-section__item-remove-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20">
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        </span>
      </li>
    `;

    this.$count.innerHTML = `${state.length} / 10`;
    this.$list.innerHTML = `${state.map(listItem).join('')}`;
  }
}


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<header class=\"item-section__header\">\n  <span class=\"item-section__item-count\">0 / 10</span>\n  <span class=\"item-section__refresh-button\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" width=\"15\">\n      <path\n        d=\"M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z\"\n      />\n    </svg>\n  </span>\n</header>\n\n<ul class=\"item-section__list\"></ul>\n\n<footer class=\"item-section__footer\">\n  <button class=\"item-section__add-button\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" width=\"12\">\n      <path\n        d=\"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z\"\n      />\n    </svg>\n    <span>항목 추가</span>\n  </button>\n</footer>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ItemSection_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ItemSection_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ItemSection_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ItemSection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ItemSection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 17 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.item-section {
  width: 100%;
  max-width: 50em;
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
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Item_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Item_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Item_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Item_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Item_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 19 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
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
  font-size: 1em;
  text-align: center;
  transition: all 0.25s;
}

.item-section__item input:focus {
  outline: none;
}

.item-section__item-checkbox {
  transform: scale(2);
}

.item-section__item-name {
  width: 100%;
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
  width: 2em;
  display: inline-block;
  padding-right: 0.25em;
  border-right: 1px solid #2A59FE;
}

.item-section__item-name-input {
  width: 100%;
  min-width: 3em;
  padding-left: 0.75em;
  border: none;
}

.item-section__item-ratio {
  min-width: 2em;
  max-width: 6em;
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

@media screen and (max-width: 650px) {
  .item-section__item {
    gap: 1em;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RoulletSection)
/* harmony export */ });
/* harmony import */ var _Roullet_section_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _Roullet_section_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _RoulletCanvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _RoulletRandomItemBtn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var _RoulletWinner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);






class RoulletSection {
  constructor({ $target, initialState, addHistory }) {
    $target.insertAdjacentHTML("afterbegin", _Roullet_section_html__WEBPACK_IMPORTED_MODULE_0__["default"]);
    this.$button = document.querySelector(".start-button");
    this.$canvas = document.querySelector(".roullet-roll");
    this.$winner = document.querySelector(".roullet-section__winner")

    this.addHistory = addHistory;

    this.state = initialState;
    this.initComponent();
  }

  initComponent() {
    const { $canvas, $button, addHistory, state, $winner } = this;

    this.Roullet = new _RoulletCanvas_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      $target: $canvas,
      initialState: state,
    });

    this.StartBtn = new _RoulletRandomItemBtn_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
      $target: $button,
      initialState: state,
      addHistory,
      $canvas,
      getWinner : (value) =>{
        this.winner.setState(value)
      }
    });

    this.winner = new _RoulletWinner_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      $target : $winner,
    })
  }

  setState(nextState) {
    this.state = nextState;

    this.StartBtn.setState(nextState);
    this.Roullet.setState(nextState);
  }
}


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(23), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<p class=\"roullet-section__winner\"></p>\n\n<div class=\"roullet-section__roullet\">\n  <canvas class=\"roullet-roll\" width=\"550\" height=\"550\"></canvas>\n  <button class=\"start-button\">START</button>\n\n  <img class=\"roullet-arrow\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"arrow.svg\" />\n</div>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),
/* 22 */
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
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "435d08e18396ad1046a2.svg";

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Roullet_section_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Roullet_section_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Roullet_section_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Roullet_section_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Roullet_section_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 25 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
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
  display: block;
  max-width: 25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font-weight: 800;
  font-size: 25px;
  color: #5b71bd;
}

.roullet-section__roullet {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(192, 206, 194, 0.2);
  opacity: 90%;
  position: relative;
}

.start-button {
  width: 5.5rem;
  height: 5.5rem;
  background-color: white;
  border-radius: 50%;
  border: none;
  box-shadow: 10px 5px 5px rgba(63, 63, 63, 0.2);
  cursor: pointer;
  font-weight: 600;
  position: absolute;
  font-size: 16px;
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

h1 {
  margin: 0;
  color: #557afe;
  font-weight: 400;
  font-size: 30px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RoulletCanvas)
/* harmony export */ });
/* harmony import */ var _constants_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);


class RoulletCanvas {
  constructor({ $target, initialState }) {
    this.state = initialState;

    this.circleState = {
      ctx: $target.getContext("2d"),
      centerX: $target.width / 2,
      centerY: $target.height / 2,
      radius: $target.width / 2 - 10,
    };

    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    const { ctx, centerX, centerY, radius } = this.circleState;
    // 룰렛 원 영역
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI); // 원의중심 x좌표, 원의 중심 y좌표, 원의 반지름, 원호의 시작 각도, 원호의 종료 각도
    ctx.strokeStyle = "#DBDBDB";

    // 룰렛 부채꼴 영역
    const totalRatio = this.state.reduce(
      (acc, { ratio, checked }) => (!checked ? acc : acc + ratio),
      0
    );
    let startAngle = -(1 / 2) * Math.PI;

    let colorindex = -1;
    for (const { value, checked, ratio } of this.state) {
      //forEach로 진행 안한 이유 : checked 진행 된 배열 index를 세는 변수를 따로 만들어 줘야함
      //따라서 of문으로 진행하는게 더 깔끔하다고 생각
      //확인 후 삭제 부탁드립니다.

      if (!checked) continue;
      colorindex++;
      const percent = (ratio / totalRatio) * 100;
      const angle = (360 * percent) / 100;
      const radian = (angle * Math.PI) / 180;
      const endAngle = radian + startAngle;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = _constants_style_js__WEBPACK_IMPORTED_MODULE_0__.CLOLOR[colorindex];
      ctx.fill();
      ctx.stroke();

      //텍스트 쓰기
      const textAngle = startAngle + radian / 2;

      const textX = centerX + (radius / 2) * Math.cos(textAngle);
      const textY = centerY + (radius / 2) * Math.sin(textAngle);

      ctx.save(); // 현재 캔버스 상태 저장
      ctx.translate(textX, textY); // 캔버스의 원점을 텍스트 위치로 이동
      ctx.rotate(textAngle); // 텍스트를 대각선으로 회전

      let fontSize = _constants_style_js__WEBPACK_IMPORTED_MODULE_0__.LENGTH_SIZE - value.length; //글자 수에 따라서 폰트 크기 조절
      if (fontSize > angle) {
        fontSize = angle < _constants_style_js__WEBPACK_IMPORTED_MODULE_0__.ANGLE_SIZE ? angle : fontSize; //비율에 따라서 폰트 크기 조절
      }

      ctx.font = `bold ${fontSize}px Raleway`;
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText(value, 0, 0); // 회전한 캔버스에 텍스트를 그림
      ctx.restore();

      startAngle = endAngle;
    }
  }
}


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANGLE_SIZE: () => (/* binding */ ANGLE_SIZE),
/* harmony export */   CLOLOR: () => (/* binding */ CLOLOR),
/* harmony export */   LENGTH_SIZE: () => (/* binding */ LENGTH_SIZE)
/* harmony export */ });
const CLOLOR = [
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

const LENGTH_SIZE = 25;

const ANGLE_SIZE = 18;


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RandomItemBtn)
/* harmony export */ });
class RandomItemBtn {
  constructor({ $target, initialState, addHistory, $canvas, getWinner}) {
    this.$target = $target;
    this.$canvas = $canvas;
    this.state = initialState;
    this.addHistory = addHistory;
    this.getWinner = getWinner

    this.initEvent();
  }

  setState(nextState) {
    this.state = nextState;
  }

  rotate(totalRatio, randomValue) {
    this.$canvas.style.transform = `initial`;
    this.$canvas.style.transition = `initial`;

    setTimeout(() => {
      const angle = 360 / totalRatio;
      const rotate = randomValue * angle + 3600 + angle / 2;

      this.$canvas.style.transform = `rotate(-${rotate}deg)`;
      this.$canvas.style.transition = `3s`;
    }, 0);
  }

  randomValue() {
    const { state, rotate, addHistory , getWinner} = this;

    const isValue = state.length > 0 && state.every(({ value }) => value);

    if (isValue) {
      const totalRatio = state.reduce(
        (acc, { ratio, checked }) => (!checked ? acc : acc + ratio),
        0
      );
      const randomValue = Math.floor(Math.random() * totalRatio);
      rotate.call(this, totalRatio, randomValue);

      let accumulatedRatio = 0;
      for (const { ratio, value, checked } of state) {
        if (!checked) continue;
        accumulatedRatio += ratio;
        if (randomValue < accumulatedRatio) {
          setTimeout(() => {
            addHistory(value);
            getWinner(value)
          }, 3100);
          break;
        }
      }
    } else {
      alert("모든 항목에 값이 있어야 합니다!");
    }
  }

  initEvent() {
    let isClicked = false;
    this.$target.addEventListener("click", () => {
      if (!isClicked) {
        isClicked = true;
        this.randomValue();
        setTimeout(() => {
          isClicked = false;
        }, 3200);
      }
    });
  }
}


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RoulletWinner)
/* harmony export */ });
class RoulletWinner{
    constructor({$target}){
        this.$target = $target
        this.state =""
        this.render()
    }

    setState(nextState){
        this.state = nextState
        this.render()
    }

    render(){
        this.$target.textContent = `${this.state} 결과 당첨!`
    }
}

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RoulletHistorySection)
/* harmony export */ });
/* harmony import */ var _RoulletHistorySection_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _RoulletHistorySection_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);



class RoulletHistorySection {
  constructor({ $target, initialState, clearHistory }) {
    $target.innerHTML = _RoulletHistorySection_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.state = initialState;
    this.clearHistory = clearHistory;

    this.openButton = $target.querySelector("#open-modal-btn");
    this.modal = $target.querySelector(".history-modal");
    this.overlay = this.modal.querySelector(".history-modal_overlay");
    this.closeBtn = this.modal.querySelector("button");
    this.resultList = document.querySelector(".results-section");
    this.clearBtn = this.modal.querySelector(".clear-btn");

    $target.addEventListener("click", this.handleEvent.bind(this));
  }

  setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  handleEvent(event) {
    const { target } = event;

    if (target.id === "open-modal-btn") {
      this.openModal();
    } else if (target.classList.contains("history-modal_overlay")) {
      this.closeModal();
    } else if (target.classList.contains("clear-btn")) {
      this.clearHistory();
    } else {
      this.closeModal();
    }
  }

  openModal() {
    // 모달 열기
    this.modal.classList.remove("hidden");
    this.render();
  }

  closeModal() {
    // 모달 닫기
    this.modal.classList.add("hidden");
  }

  render() {
    this.resultList.innerHTML = "";
    const results = this.state;
    if (results.length === 0) {
      // 결과 내역이 없을 때
      const message = document.createElement("p");
      message.textContent = "결과 내역이 없습니다";
      this.resultList.appendChild(message);
    } else {
      // 결과 리스트 렌더링
      results.forEach((item, index) => {
        const resultItem = document.createElement("div");
        resultItem.classList = "results-item";
        resultItem.innerHTML = `
          <div class="result_index"> ${index + 1} </div>
          <p> ${item} </p> 
        `;
        this.resultList.appendChild(resultItem);
      });
    }
  }
}


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"result-history\">\n  <button id=\"open-modal-btn\">결과내역</button>\n</div>\n\n<div class=\"history-modal hidden\">\n  <div class=\"history-modal_overlay\"></div>\n  <div class=\"history-modal_content\">\n    <button class=\"close-btn\">X</button>\n    <h1>결과 확인</h1>\n    <button class=\"clear-btn\">결과 전체 삭제</button>\n    <div class=\"results-section\"></div>\n  </div>\n</div>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_RoulletHistorySection_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_RoulletHistorySection_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_RoulletHistorySection_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_RoulletHistorySection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_RoulletHistorySection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 33 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.result-history {
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

button {
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
  height: 120vh;
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
}

.close-btn {
  border: none;
  background: none;
  font-weight: bold;
  position: absolute;
  top: 16px;
  right: 13px;
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
  top: 28px;
  left: 481px;
  font-size: 16px;
}
.hidden {
  display: none;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultItemId: () => (/* binding */ defaultItemId),
/* harmony export */   defaultItemList: () => (/* binding */ defaultItemList)
/* harmony export */ });
/* harmony import */ var _utils_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _constants_storageKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);



const defaultItemList = [
  {
    key: 0,
    value: '',
    checked: true,
    ratio: 1,
  },
];

const defaultItemId = 1;

class ItemListStore {
  constructor() {
    this.state = _utils_storage_js__WEBPACK_IMPORTED_MODULE_0__.storage.getItem(_constants_storageKeys_js__WEBPACK_IMPORTED_MODULE_1__.ITEM_LISTS, defaultItemList);
  }

  setState(nextState) {
    this.state = nextState;
    _utils_storage_js__WEBPACK_IMPORTED_MODULE_0__.storage.setItem(_constants_storageKeys_js__WEBPACK_IMPORTED_MODULE_1__.ITEM_LISTS, JSON.stringify(nextState));
  }

  refreshList() {
    const confirmation = confirm('정말로 모든 항목을 초기화 하시겠습니까?');
    if (!confirmation) return;

    this.state = defaultItemList;
    _utils_storage_js__WEBPACK_IMPORTED_MODULE_0__.storage.setItem(_constants_storageKeys_js__WEBPACK_IMPORTED_MODULE_1__.ITEM_LISTS, JSON.stringify(defaultItemList));
    _utils_storage_js__WEBPACK_IMPORTED_MODULE_0__.storage.setItem(_constants_storageKeys_js__WEBPACK_IMPORTED_MODULE_1__.ITEM_ID, JSON.stringify(defaultItemId));
  }

  addItem() {
    const { state } = this;

    if (state.length >= 10) {
      alert('항목은 최대 10개 까지 추가할 수 있어요!');
      return;
    }

    const nextId = _utils_storage_js__WEBPACK_IMPORTED_MODULE_0__.storage.getItem(_constants_storageKeys_js__WEBPACK_IMPORTED_MODULE_1__.ITEM_ID, defaultItemId);

    const newItem = {
      key: nextId,
      value: '',
      checked: true,
      ratio: 1,
    };

    _utils_storage_js__WEBPACK_IMPORTED_MODULE_0__.storage.setItem(_constants_storageKeys_js__WEBPACK_IMPORTED_MODULE_1__.ITEM_ID, JSON.stringify(nextId + 1));

    const nextState = [...state, newItem];
    this.setState(nextState);
  }

  removeItem(key) {
    const nextState = this.state.filter((item) => item.key !== key);
    this.setState(nextState);
  }

  setCheck(key, checked) {
    const nextState = this.state.map((item) => (item.key === key ? { ...item, checked } : item));
    this.setState(nextState);
  }

  setValue(key, value) {
    const nextState = this.state.map((item) => (item.key === key ? { ...item, value } : item));
    this.setState(nextState);
  }

  setRatio(key, ratio) {
    const nextState = this.state.map((item) => (item.key === key ? { ...item, ratio } : item));
    this.setState(nextState);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemListStore);


/***/ }),
/* 35 */
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

  const clearItem = (keyword) => {
    try {
      storage.removeItem(keyword);
    } catch (e) {
      console.log(e.message);
    }
  };

  return { setItem, getItem, clearItem };
})(window.localStorage);


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ITEM_ID: () => (/* binding */ ITEM_ID),
/* harmony export */   ITEM_LISTS: () => (/* binding */ ITEM_LISTS),
/* harmony export */   RESULTS: () => (/* binding */ RESULTS)
/* harmony export */ });
const ITEM_LISTS = "item_lists";
const ITEM_ID = "item_id";
const RESULTS = "results";


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _constants_storageKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);



class ResultsStore {
  constructor() {
    const results = _utils_storage_js__WEBPACK_IMPORTED_MODULE_0__.storage.getItem(_constants_storageKeys_js__WEBPACK_IMPORTED_MODULE_1__.RESULTS, []);
    this.state = this.makeResultsStoreState(results);
  }

  makeResultsStoreState(results) {
    return {
      results,
    };
  }

  setState(results) {
    _utils_storage_js__WEBPACK_IMPORTED_MODULE_0__.storage.setItem(_constants_storageKeys_js__WEBPACK_IMPORTED_MODULE_1__.RESULTS, JSON.stringify(results));
    this.state = this.makeResultsStoreState(results);
  }

  deleteAllResults() {
    const removeConfirm = confirm("결과 내역을 전체 삭제하시겠습니까?");
    if (removeConfirm) {
      this.setState([]);
      _utils_storage_js__WEBPACK_IMPORTED_MODULE_0__.storage.clearItem(_constants_storageKeys_js__WEBPACK_IMPORTED_MODULE_1__.RESULTS);
    } else {
      alert("결과 내역이 삭제되지 않았습니다!");
    }
  }

  //결과 내역 추가 함수 구현 필요
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResultsStore);


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 39 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  padding: 2em;
}

#main {
  margin: 0 auto;
  max-width: 100rem;
  display: flex;
  gap: 3rem;
  justify-content: space-between;
}

.roullet-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 1100px) {
  #main {
    flex-direction: column-reverse;
    align-items: center;
  }
  
  body {
    padding: 0.5em;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);



const $target = document.getElementById('app');

new _components_App_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ $target });

})();

/******/ })()
;