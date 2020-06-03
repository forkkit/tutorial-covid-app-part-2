/******/ (function(modules) { // webpackBootstrap
/******/ 	self["webpackChunk"] = function webpackChunkCallback(chunkIds, moreModules) {
/******/ 		for(var moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		while(chunkIds.length)
/******/ 			installedChunks[chunkIds.pop()] = 1;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "1" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"Covid": 1
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/ 		promises.push(Promise.resolve().then(function() {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				importScripts(__webpack_require__.p + "" + chunkId + ".js");
/******/ 			}
/******/ 		}));
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./buildScripts/entrypoints/Covid.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/covid/Util.mjs":
/*!*****************************!*\
  !*** ./apps/covid/Util.mjs ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_neo_mjs_src_core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/neo.mjs/src/core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Static utility class
 * @class Covid.Util
 * @extends Neo.core.Base
 */
class Util extends _node_modules_neo_mjs_src_core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
         * Change this config to enforce a county specific formatting (e.g. 'de-DE')
         * @member {String} locales='default'
         * @private
         * @static
         */
        locales: 'default'
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Covid.Util'
         * @private
         */
        className: 'Covid.Util'
    }}

    /**
     * This method will get used as a grid renderer, so the 2nd param is an overload (would be {Object} record)
     * @param {Object} data
     * @param {Number} data.value
     * @param {String} [color]
     * @return {String}
     */
    static formatNumber(data, color) {
        let value = data.value;

        if (!Neo.isNumber(value)) {
            return value || 'N/A';
        }

        value = value.toLocaleString(Util.locales);

        return typeof color !== 'string' ? value : `<span style="color:${color};">${value}</span>`;
    }
}

Neo.applyClassConfig(Util);

/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ }),

/***/ "./apps/covid/app.mjs":
/*!****************************!*\
  !*** ./apps/covid/app.mjs ***!
  \****************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/MainContainer.mjs */ "./apps/covid/view/MainContainer.mjs");


Neo.onStart = () => {
    Neo.app({
        appPath : 'apps/covid/',
        mainView: _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
        name    : 'Covid'
    });
};

/***/ }),

/***/ "./apps/covid/view/HeaderContainer.mjs":
/*!*********************************************!*\
  !*** ./apps/covid/view/HeaderContainer.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderContainer; });
/* harmony import */ var _node_modules_neo_mjs_src_component_Button_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/Button.mjs */ "./node_modules/neo.mjs/src/component/Button.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_component_Label_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/Label.mjs */ "./node_modules/neo.mjs/src/component/Label.mjs");




/**
 * @class Covid.view.HeaderContainer
 * @extends Neo.container.Base
 */
class HeaderContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.HeaderContainer'
         * @private
         */
        className: 'Covid.view.HeaderContainer',
        /**
         * @member {String[]} cls=['covid-header-container']
         */
        cls: ['covid-header-container'],
        /**
         * @member {Object} layout={ntype: 'hbox', align: 'stretch'}
         */
        layout: {ntype: 'hbox', align: 'stretch'},
        /**
         * @member {Array} items
         */
        items: [{
            ntype    : 'component',
            minWidth : 267,
            reference: 'logo',
            style    : {margin: '10px'},
            width    : 267,

            vdom: {tag: 'img', src: 'https://raw.githubusercontent.com/neomjs/pages/master/resources/images/apps/covid/covid_logo_dark.jpg'}
        }, {
            ntype : 'container',
            layout: {ntype: 'vbox', align: 'stretch'},
            items : [{
                ntype    : 'container',
                height   : 65,
                layout   : {ntype: 'hbox'},
                reference: 'total-stats',

                itemDefaults: {
                    ntype: 'component'
                },

                items: [{
                    cls : ['covid-numberbox'],
                    vdom: {
                        cn: [
                            {cls: ['covid-numberbox-title',  'cases'], html: 'Cases'},
                            {cls: ['covid-numberbox-number', 'cases']}
                        ]
                    }
                }, {
                    cls : ['covid-numberbox'],
                    vdom: {
                        cn: [
                            {cls: ['covid-numberbox-title',  'active'], html: 'Active'},
                            {cls: ['covid-numberbox-number', 'active']}
                        ]
                    }
                }, {
                    cls : ['covid-numberbox'],
                    vdom: {
                        cn: [
                            {cls: ['covid-numberbox-title',  'recovered'], html: 'Recovered'},
                            {cls: ['covid-numberbox-number', 'recovered']}
                        ]
                    }
                }, {
                    cls : ['covid-numberbox'],
                    vdom: {
                        cn: [
                            {cls: ['covid-numberbox-title',  'deaths'], html: 'Deaths'},
                            {cls: ['covid-numberbox-number', 'deaths']}
                        ]
                    }
                }]
            }, {
                ntype : 'container',
                layout: {ntype: 'hbox'},

                itemDefaults: {
                    ntype: 'component'
                },

                items: [{
                    module : _node_modules_neo_mjs_src_component_Button_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                    flex   : 'none',
                    handler: 'onSwitchThemeButtonClick',
                    height : 25,
                    iconCls: 'fa fa-sun',
                    style  : {marginLeft: '10px', marginTop: '15px'},
                    text   : 'Theme Light'
                }, {
                    module : _node_modules_neo_mjs_src_component_Button_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                    flex   : 'none',
                    handler: 'onReloadDataButtonClick',
                    height : 25,
                    iconCls: 'fa fa-sync-alt',
                    style  : {marginLeft: '10px', marginTop: '15px'},
                    text   : 'Reload Data'
                }, {
                    module   : _node_modules_neo_mjs_src_component_Label_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
                    height   : 25,
                    reference: 'last-update',
                    style    : {marginLeft: '10px', marginTop: '18px'},
                    text     : 'Last Update:'
                }]
            }]
        }]
    }}
}

Neo.applyClassConfig(HeaderContainer);



/***/ }),

/***/ "./apps/covid/view/MainContainer.mjs":
/*!*******************************************!*\
  !*** ./apps/covid/view/MainContainer.mjs ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _HeaderContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderContainer.mjs */ "./apps/covid/view/HeaderContainer.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./apps/covid/view/MainContainerController.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");




/**
 * @class Covid.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getConfig() {return {
        className: 'Covid.view.MainContainer',
        ntype    : 'main-container',

        autoMount : true,
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
        layout    : {ntype: 'vbox', align: 'stretch'},

        items: [
            {module: _HeaderContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"], height: 120},
            {ntype : 'component',     vdom  : {innerHTML: 'Center'}},
            {ntype : 'component',     vdom  : {innerHTML: 'Footer'}}
        ]
    }}
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./apps/covid/view/MainContainerController.mjs":
/*!*****************************************************!*\
  !*** ./apps/covid/view/MainContainerController.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainerController; });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util.mjs */ "./apps/covid/Util.mjs");




/**
 * @class Covid.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.MainContainerController'
         * @private
         */
        className: 'Covid.view.MainContainerController',
        /**
         * @member {String} apiSummaryUrl='https://corona.lmao.ninja/v2/all'
         */
        apiSummaryUrl: 'https://corona.lmao.ninja/v2/all'
    }}

    onConstructed() {
        super.onConstructed();
        this.loadSummaryData();
    }

    /**
     *
     * @param {Object} data
     * @param {Number} data.active
     * @param {Number} data.cases
     * @param {Number} data.deaths
     * @param {Number} data.recovered
     * @param {Number} data.updated // timestamp
     */
    applySummaryData(data) {
        let me        = this,
            container = me.getReference('total-stats'),
            vdom      = container.vdom;

        me.summaryData = data;

        vdom.cn[0].cn[1].html = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber({value: data.cases});
        vdom.cn[1].cn[1].html = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber({value: data.active});
        vdom.cn[2].cn[1].html = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber({value: data.recovered});
        vdom.cn[3].cn[1].html = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber({value: data.deaths});

        container.vdom = vdom;

        container = me.getReference('last-update');
        vdom      = container.vdom;

        vdom.html = 'Last Update: ' + new Intl.DateTimeFormat('default', {
            hour  : 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }).format(new Date(data.updated));

        container.vdom = vdom;
    }

    /**
     *
     */
    loadSummaryData() {
        const me = this;

        fetch(me.apiSummaryUrl)
            .then(response => response.json())
            .then(data => me.applySummaryData(data))
            .catch(err => console.log('Can’t access ' + me.apiSummaryUrl, err));
    }

    /**
     * @param {Object} data
     */
    onReloadDataButtonClick(data) {
        this.loadSummaryData();
    }

    /**
     * @param {Object} data
     */
    onSwitchThemeButtonClick(data) {
        let me       = this,
            button   = data.component,
            logo     = me.getReference('logo'),
            logoPath = 'https://raw.githubusercontent.com/neomjs/pages/master/resources/images/apps/covid/',
            vdom     = logo.vdom,
            view     = me.view,
            buttonText, cls, iconCls, theme;

        if (button.text === 'Theme Light') {
            buttonText = 'Theme Dark';
            iconCls    = 'fa fa-moon';
            theme      = 'neo-theme-light';
        } else {
            buttonText = 'Theme Light';
            iconCls    = 'fa fa-sun';
            theme      = 'neo-theme-dark';
        }

        vdom.src = logoPath + (theme === 'neo-theme-dark' ? 'covid_logo_dark.jpg' : 'covid_logo_light.jpg');
        logo.vdom = vdom;

        button.set({
            iconCls: iconCls,
            text   : buttonText
        });

        cls = [...view.cls];

        view.cls.forEach(item => {
            if (item.includes('neo-theme')) {
                _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, item);
            }
        });

        _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, theme);
        view.cls = cls;

        button.set({
            iconCls: iconCls,
            text   : buttonText
        });
    }
}

Neo.applyClassConfig(MainContainerController);



/***/ }),

/***/ "./buildScripts/entrypoints/Covid.mjs":
/*!********************************************!*\
  !*** ./buildScripts/entrypoints/Covid.mjs ***!
  \********************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_neo_mjs_src_worker_App_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/neo.mjs/src/worker/App.mjs */ "./node_modules/neo.mjs/src/worker/App.mjs");
/* harmony import */ var _apps_covid_app_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apps/covid/app.mjs */ "./apps/covid/app.mjs");



/***/ }),

/***/ "./node_modules/neo.mjs/src/DefaultConfig.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/DefaultConfig.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultConfig; });
const Neo = self.Neo || {};

Neo.config = Neo.config || {};

/**
 * Config object for the neo.mjs framework which will get passed to all workers
 * You can change the configs, e.g. inside the index.html of your app
 * @memberOf module:Neo
 * @name config
 * @type Object
 */
const DefaultConfig = {
    /**
     * true will apply 'neo-body' to the document.body classList
     * @default true
     * @memberOf! module:Neo
     * @name config.applyBodyCls
     * @type Boolean
     */
    applyBodyCls: true,
    /**
     * Path to your app.mjs file. You can create multiple apps there if needed.
     * @default null
     * @memberOf! module:Neo
     * @name config.appPath
     * @type String|null
     */
    appPath: null,
    /**
     * Path to the neo.mjs directory
     * @default './'
     * @memberOf! module:Neo
     * @name config.basePath
     * @type String
     */
    basePath: './',
    /**
     * Path to the neo.mjs theme css files
     * See main.addon.Stylesheet => createStyleSheet()
     * @default Neo.config.basePath + 'build/' + Neo.config.environment
     * @memberOf! module:Neo
     * @name [config.cssPath]
     * @optional
     * @type String|null
     */
    cssPath: null,
    /**
     * The current build => dist environment. Valid values: 'development', 'production'
     * Used for automatically including the matching theme files
     * @default 'production'
     * @memberOf! module:Neo
     * @name config.environment
     * @type String
     */
    environment: 'production',
    /**
     * In case you are using the GoogleAnalytics mainThreadAddon or useGoogleAnalytics: true,
     * you can change the gtag id here. Required for the online examples (gh pages)
     * @default 'UA-153734404-1'
     * @memberOf! module:Neo
     * @name config.gtagId
     * @type String
     */
    gtagId: 'UA-153734404-1',
    /**
     * Flag if Neo is running without any JS builds
     * @default false
     * @memberOf! module:Neo
     * @name config.isExperimental
     * @type Boolean
     */
    isExperimental: false,
    /**
     * Flag for running on https://neomjs.github.io/pages/
     * => to use local images paths instead of raw.githubusercontent.com
     * @default false
     * @memberOf! module:Neo
     * @name config.isGitHubPages
     * @type Boolean
     */
    isGitHubPages: false,
    /**
     * Flag for running the Neo main thread inside an iframe (Siesta Browser Harness)
     * @default false
     * @memberOf! module:Neo
     * @name config.isInsideSiesta
     * @type Boolean
     */
    isInsideSiesta: false,
    /**
     * Used by Intl.DateTimeFormat, for details take a look at:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @default 'default'
     * @memberOf! module:Neo
     * @name config.locale
     * @type String
     */
    locale: 'default',
    /**
     * Add addons for the main thread
     * Possible values: AmCharts, AnalyticsByGoogle, HighlightJS, LocalStorage, MapboxGL, Markdown, Siesta, Stylesheet
     * (src/main/addon)
     * @default ['Stylesheet']
     * @memberOf! module:Neo
     * @name config.mainThreadAddons
     * @type String[]
     */
    mainThreadAddons: ['Stylesheet'],
    /**
     * Add themes you want to use here. The first theme will get applied.
     * If config.useCss4 === true, other theme variables will get included as well
     * @default ['neo-theme-light', 'neo-theme-dark']
     * @memberOf! module:Neo
     * @name config.themes
     * @type String[]
     */
    themes: ['neo-theme-light', 'neo-theme-dark'],
    /**
     * Flag for standalone Siesta module tests => prevent registerRemote worker messages
     * @default false
     * @memberOf! module:Neo
     * @name config.unitTestMode
     * @type Boolean
     */
    unitTestMode: false,
    /**
     * Flag if CSS4 stylesheets are in use (important for switching themes)
     * @default true
     * @memberOf! module:Neo
     * @name config.useCss4
     * @type Boolean
     */
    useCss4: true,
    /**
     * True will automatically include the stylesheet
     * @default true
     * @memberOf! module:Neo
     * @name config.useFontAwesome
     * @type Boolean
     */
    useFontAwesome: true,
    /**
     * Intended for the online examples where we need an easy way to add GA to every generated app
     * @default false
     * @memberOf! module:Neo
     * @name config.useGoogleAnalytics
     * @type Boolean
     */
    useGoogleAnalytics: false,
    /**
     * Adds global dom event listeners for mobile related events like rotate, swipe, tap
     * @default true
     * @memberOf! module:Neo
     * @name config.useTouchEvents
     * @type Boolean
     */
    useTouchEvents: true
};

Object.assign(DefaultConfig, {
    /**
     * Path to the top level neo.mjs resources folder
     * @default Neo.config.basePath + 'resources/'
     * @memberOf! module:Neo
     * @name config.resourcesPath
     * @type String
     */
    resourcesPath: (Neo.config.basePath || DefaultConfig.basePath) + 'resources/',
    /**
     * The default base URL for web worker entry points (App, Data, Vdom)
     * @default Neo.config.basePath + 'src/worker/'
     * @memberOf! module:Neo
     * @name config.workerBasePath
     * @type String
     */
    workerBasePath: (Neo.config.basePath || DefaultConfig.basePath) + 'src/worker/'
});



/***/ }),

/***/ "./node_modules/neo.mjs/src/Neo.mjs":
/*!******************************************!*\
  !*** ./node_modules/neo.mjs/src/Neo.mjs ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Neo; });
/* harmony import */ var _DefaultConfig_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultConfig.mjs */ "./node_modules/neo.mjs/src/DefaultConfig.mjs");


const configSymbol = Symbol.for('configSymbol'),
      getSetCache  = Symbol('getSetCache');

/**
 * The base module to enhance classes, create instances and the Neo namespace
 * @module Neo
 * @singleton
 * @borrows Neo.core.Util.capitalize        as capitalize
 * @borrows Neo.core.Util.createStyleObject as createStyleObject
 * @borrows Neo.core.Util.createStyles      as createStyles
 * @borrows Neo.core.Util.decamel           as decamel
 * @borrows Neo.core.Util.isArray           as isArray
 * @borrows Neo.core.Util.isBoolean         as isBoolean
 * @borrows Neo.core.Util.isDefined         as isDefined
 * @borrows Neo.core.Util.isNumber          as isNumber
 * @borrows Neo.core.Util.isObject          as isObject
 * @borrows Neo.core.Util.isString          as isString
 * @borrows Neo.core.Util.toArray           as toArray
 * @tutorial 01_Concept
 */
let Neo = self.Neo || {};

Neo = self.Neo = Object.assign({
    /**
     * A map containing ntypes as key and Neo classes or singletons as values
     * @memberOf! module:Neo
     * @private
     * @type Object
     */
    ntypeMap: {},
    /**
     * Needed for Neo.create. False for the main thread, true for the App, Data & Vdom worker
     * @memberOf! module:Neo
     * @private
     * @type Boolean
     */
    insideWorker: typeof DedicatedWorkerGlobalScope !== 'undefined' || typeof WorkerGlobalScope !== 'undefined',

    /**
     * Internally used at the end of each class / module definition
     * @memberOf module:Neo
     * @param {Neo.core.Base} cls The Neo class to apply configs to
     * @private
     * @tutorial 02_ClassSystem
     */
    applyClassConfig(cls) {
        let baseCfg       = null,
            baseStaticCfg = null,
            config        = {},
            proto         = cls.prototype || cls,
            protos        = [],
            staticConfig  = {},
            ctor;

        while (proto.__proto__) {
            ctor = proto.constructor;

            if (ctor.hasOwnProperty('classConfigApplied')) {
                baseCfg       = Neo.clone(ctor.config, true);
                baseStaticCfg = Neo.clone(ctor.staticConfig, true);
                break;
            }

            protos.unshift(proto);
            proto = proto.__proto__;
        }

        config       = baseCfg       ? baseCfg       : config;
        staticConfig = baseStaticCfg ? baseStaticCfg : staticConfig;

        protos.forEach(element => {
            ctor = element.constructor;
            let cfg       = ctor.getConfig       && ctor.getConfig()       || {},
                staticCfg = ctor.getStaticConfig && ctor.getStaticConfig() || {},
                mixins;

            if (cfg) {
                Object.entries(cfg).forEach(([key, value]) => {
                    if (key.slice(-1) === '_') {
                        delete cfg[key];
                        key = key.slice(0, -1);
                        cfg[key] = value;
                        autoGenerateGetSet(element, key);
                    }

                    // only apply properties which have no setters inside the prototype chain
                    // those will get applied on create (Neo.core.Base -> initConfig)
                    else if (!hasPropertySetter(element, key)) {
                        Object.defineProperty(element, key, {
                            enumerable: true,
                            value     : value,
                            writable  : true
                        });
                    }
                });
            }

            Object.assign(ctor, staticCfg);

            if (cfg.hasOwnProperty('ntype')) {
                Neo.ntypeMap[cfg.ntype] = cfg.className;
            }

            mixins = config.hasOwnProperty('mixins') && config.mixins || [];

            if (staticCfg && staticCfg.observable) {
                mixins.push('Neo.core.Observable');
            }

            if (cfg.hasOwnProperty('mixins') && Array.isArray(cfg.mixins) && cfg.mixins.length > 0) {
                mixins.push(...cfg.mixins);
            }

            if (mixins.length) {
                applyMixins(ctor, mixins);
            }

            delete cfg.mixins;
            delete config.mixins;

            Object.assign(config, cfg);
            Object.assign(staticConfig, staticCfg);

            Object.assign(ctor, {
                classConfigApplied: true,
                config            : Neo.clone(config, true),
                isClass           : true,
                staticConfig      : Neo.clone(staticConfig, true)
            });

            delete ctor.getConfig;
            delete ctor.getStaticConfig;

            if (!config.singleton) {
                this.applyToGlobalNs(cls);
            }
        });
    },

    /**
     * Maps methods from one namespace to another one
     * @example
     * // aliases
     * Neo.applyFromNs(Neo, Util, {
     *     createStyleObject: 'createStyleObject',
     *     createStyles     : 'createStyles',
     *     capitalize       : 'capitalize',
     *     decamel          : 'decamel',
     *     isArray          : 'isArray',
     *     isBoolean        : 'isBoolean',
     *     isDefined        : 'isDefined',
     *     isNumber         : 'isNumber',
     *     isObject         : 'isObject',
     *     isString         : 'isString',
     *     toArray          : 'toArray'
     * }, true);
     *
     * // e.g. Neo.core.Util.isObject => Neo.isObject
     * @memberOf module:Neo
     * @param {Neo|Neo.core.Base} target The target class or singleton Instance or Neo
     * @param {Neo.core.Base} namespace The class containing the methods
     * @param {Object} config
     * @param {Boolean} [bind] set this to true in case you want to bind methods to the "from" namespace
     * @returns {Object} target
     */
    applyFromNs(target, namespace, config, bind) {
        let fnName;

        if (target && config && typeof config === 'object') {
            Object.entries(config).forEach(([key, value]) => {
                fnName = namespace[value];
                target[key] = bind ? fnName.bind(namespace) : fnName;
            });
        }

        return target;
    },

    /**
     * Maps a class to the global Neo or App namespace.
     * Can get called for classes and singleton instances
     * @memberOf module:Neo
     * @param {Neo.core.Base} cls
     */
    applyToGlobalNs(cls) {
        let proto = typeof cls === 'function' ? cls.prototype: cls,
            className, nsArray, key, ns;

        if (proto.constructor.registerToGlobalNs === true) {
            className = proto.isClass ? proto.config.className : proto.className;

            nsArray = className.split('.');
            key     = nsArray.pop();
            ns      = Neo.ns(nsArray, true);
            ns[key] = cls;
        }
    },

    /**
     * Copies all keys of defaults into target, in case they don't already exist
     * @memberOf module:Neo
     * @param {Object} target The target object
     * @param {Object} defaults The object containing the keys you want to copy
     * @returns {Object} target
     */
    assignDefaults(target, defaults) {
        if (target && defaults && typeof defaults === 'object') {
            Object.entries(defaults).forEach(([key, value]) => {
                if (!target.hasOwnProperty(key)) {
                    target[key] = value;
                }
            });
        }

        return target;
    },

    /**
     * @memberOf module:Neo
     * @param {Object|Array|*} obj
     * @param {Boolean} [deep=false] Set this to true in case you want to clone nested objects as well
     * @param {Boolean} [ignoreNeoInstances=false] returns existing instances if set to true
     * @returns {Object|Array|*} the cloned input
     */
    clone(obj, deep, ignoreNeoInstances) {
        let out;

        if (Array.isArray(obj)) {
            return obj.map(val => {
                return Neo.clone(val, deep, ignoreNeoInstances);
            });
        }
        if (obj !== null && typeof obj === 'object') {
            if (obj.constructor.isClass && obj instanceof Neo.core.Base) {
                return ignoreNeoInstances ? obj : this.cloneNeoInstance(obj);
            } else if(obj.constructor.isClass) {
                return obj;
            } else {
                out = {};
                Object.entries(obj).forEach(([key, value]) => {
                    if (deep) {
                        value = Neo.clone(value, deep, ignoreNeoInstances);
                    }
                    out[key] = value;
                });
                return out;
            }
        }
        return obj; // return all other data types
    },

    /**
     * Creates a new instance using the originalConfig without the id
     * @memberOf module:Neo
     * @param {Neo.core.Base} instance
     * @returns {Neo.core.Base} the cloned instance
     */
    cloneNeoInstance(instance) {
        let config = {...instance.originalConfig};
        delete config._id;
        delete config.id;
        return Neo.create(instance.className, config);
    },

    /**
     * Use Neo.create() instead of "new" to create instances of all Neo classes
     * @example
     * import Button from './Button.mjs';
     *
     * Neo.create(Button, {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * import Button from './Button.mjs';
     *
     * Neo.create({
     *     module : Button,
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.create('Neo.component.Button' {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.create({
     *     className: 'Neo.component.Button',
     *     iconCls  : 'fa fa-home',
     *     text     : 'Home'
     * });
     * @memberOf module:Neo
     * @param {String|Object|Neo.core.Base} className
     * @param {Object} [config]
     * @returns {Neo.core.Base|null} The new class instance
     * @tutorial 02_ClassSystem
     */
    create(className, config) {
        let cls, instance;

        if (typeof className === 'function' && undefined !== className.constructor) {
            cls = className;
        } else {
            if (typeof className === 'object') {
                config = className;

                if (!config.className && !config.module) {
                    // using console.error instead of throw to show the config object
                    console.error('Class created with object configuration missing className or module property', config);
                    return null;
                }

                className = config.className ? config.className : config.module.prototype.className;
            }

            if (!exists(className)) {
                throw new Error('Class ' + className + ' does not exist');
            }

            cls = Neo.ns(className);
        }

        instance = new cls(config);

        instance.onConstructed();
        instance.init();

        return instance;
    },

    emptyFn() {},

    /**
     * Maps a className string into a global namespace
     * @example
     * Neo.ns('Neo.component.Button', true);
     * // =>
     * // self.Neo = self.Neo || {};
     * // self.Neo.component = self.Neo.component || {};
     * // self.Neo.component.Button = self.Neo.component.Button || {};
     * // return self.Neo.component.Button;
     *
     * @memberOf module:Neo
     * @param {Array|String} names The class name string containing dots or an Array of the string parts
     * @param {Boolean} [create] Set create to true to create empty objects for non existing parts
     * @param {Object} [scope] Set a different starting point as self
     * @returns {Object} reference to the toplevel namespace
     */
    ns(names, create, scope) {
        names = Array.isArray(names) ? names : names.split('.');

        return names.reduce((prev, current) => {
            if (create && !prev[current]) {
                prev[current] = {};
            }
            if (prev) {
                return prev[current];
            }
        }, scope || self);
    },

    /**
     * Creates instances of Neo classes using their ntype instead of the class name
     * @example
     * Neo.ntype('button' {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.ntype({
     *     ntype  : 'button',
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @memberOf module:Neo
     * @param {String|Object} ntype
     * @param {Object} [config]
     * @returns {Neo.core.Base}
     * @see {@link module:Neo.create create}
     */
    ntype(ntype, config) {
        if (typeof ntype === 'object') {
            config = ntype;
            if (!config.ntype) {
                throw new Error('Class defined with object configuration missing ntype property. ' + config.ntype);
            }
            ntype = config.ntype;
        }

        let className = Neo.ntypeMap[ntype];

        if (!className) {
            throw new Error('ntype ' + ntype + ' does not exist');
        }
        return Neo.create(className, config);
    },

    onStart: Neo.emptyFn
}, Neo);

/**
 * List of class properties which are not supposed to get mixed into other classes
 * @type {string[]}
 * @private
 */
const ignoreMixin = [
    '_name',
    'classConfigApplied',
    'className',
    'constructor',
    'isClass',
    'mixin',
    'ntype',
    'observable',
    'registerToGlobalNs'
];

/**
 *
 * @param {Neo.core.Base} cls
 * @param {Array} mixins
 * @private
 */
function applyMixins(cls, mixins) {
    if (!Array.isArray(mixins)) {
        mixins = [mixins];
    }

    let i            = 0,
        len          = mixins.length,
        mixinClasses = {},
        mixin, mixinCls, mixinProto;

    for (;i < len;i++) {
        mixin = mixins[i];

        if (mixin.isClass) {
            mixinProto = mixin.prototype;
            mixinCls   = Neo.ns(mixinProto.className);
        } else {
            if (!exists(mixin)) {
                throw new Error('Attempting to mixin an undefined class: ' + mixin + ', ' + cls.prototype.className);
            }
            mixinCls   = Neo.ns(mixin);
            mixinProto = mixinCls.prototype;
        }

        mixinProto.className.split('.').reduce(mixReduce(mixinCls), mixinClasses);

        Object.getOwnPropertyNames(mixinProto).forEach(mixinProperty(cls.prototype, mixinProto));
    }

    cls.prototype.mixins = mixinClasses; // todo: we should do a deep merge
}

/**
 * Creates get / set methods for class configs ending with an underscore
 * @param {Neo.core.Base} proto
 * @param {String} key
 * @private
 * @tutorial 02_ClassSystem
 */
function autoGenerateGetSet(proto, key) {
    if (hasPropertySetter(proto, key)) {
        throw('Config ' + key + '_ (' + proto.className + ') already has a set method, use beforeGet, beforeSet & afterSet instead');
    }

    if (!Neo[getSetCache]) {
        Neo[getSetCache] = {};
    }

    if (!Neo[getSetCache][key]) {
        Neo[getSetCache][key] = {
            get() {
                let me        = this,
                    beforeGet = 'beforeGet' + Neo.capitalize(key),
                    hasNewKey = me[configSymbol].hasOwnProperty(key),
                    newKey    = me[configSymbol][key],
                    value     = hasNewKey ? newKey : me['_' + key];

                if (Array.isArray(value)) {
                    if (key !== 'items') {
                        value = [...value];
                    }
                } else if (value instanceof Date) {
                    value = new Date(value.valueOf());
                }

                if (hasNewKey) {
                    me[key] = value; // we do want to trigger the setter => beforeSet, afterSet
                    value = me['_' + key]; // return the value parsed by the setter
                }

                if (me[beforeGet] && typeof me[beforeGet] === 'function') {
                    value = me[beforeGet](value);
                }

                return value;
            },

            set(value) {
                let me        = this,
                    _key      = '_' + key,
                    uKey      = Neo.capitalize(key),
                    beforeSet = 'beforeSet' + uKey,
                    afterSet  = 'afterSet'  + uKey,
                    oldValue  = me[_key];

                // every set call has to delete the matching symbol
                delete me[configSymbol][key];

                // we do want to store the value before the beforeSet modification as well,
                // since it could get pulled by other beforeSet methods of different configs
                me[_key] = value;

                if (me[beforeSet] && typeof me[beforeSet] === 'function') {
                    value = me[beforeSet](value, oldValue);

                    // If they don't return a value, that means no change
                    if (value === undefined) {
                        me[_key] = oldValue;
                        return;
                    }

                    me[_key] = value;
                }

                // todo: we could compare objects & arrays for equality
                if (Neo.isObject(value) || Array.isArray(value) || value !== oldValue) {
                    if (me[afterSet] && typeof me[afterSet] === 'function') {
                        me[afterSet](value, oldValue);
                    }
                }
            }
        };
    }

    Object.defineProperty(proto, key, Neo[getSetCache][key]);
}

/**
 * Checks if the class name exists inside the Neo or app namespace
 * @param {String} className
 * @returns {Boolean}
 * @private
 */
function exists(className) {
    try {
        return !!className.split('.').reduce((prev, current) => {
            return prev[current];
        }, self);
    } catch(e) {
        return false;
    }
}

/**
 * Checks if there is a set method for a given property key inside the prototype chain
 * @param {Neo.core.Base} proto The top level prototype of a class
 * @param {String} key the property key to test
 * @returns {Boolean}
 * @private
 */
function hasPropertySetter(proto, key) {
    let descriptor;

    while (proto.__proto__) {
        descriptor = Object.getOwnPropertyDescriptor(proto, key);

        if (typeof descriptor === 'object' && typeof descriptor.set === 'function') {
            return true;
        }
        proto = proto.__proto__;
    }

    return false;
}

/**
 *
 * @param {Neo.core.Base} proto
 * @param {Neo.core.Base} mixinProto
 * @returns {Function}
 * @private
 */
function mixinProperty(proto, mixinProto) {
    return function(key) {
        if (~ignoreMixin.indexOf(key)) {
            return;
        }
        if (proto[key] && proto[key]._from) {
            if (mixinProto.className === proto[key]._from) {
                console.warn('Mixin set multiple times or already defined on a Base Class', proto.className, mixinProto.className, key);
                return;
            }
            throw new Error(
                proto.className + ': Multiple mixins defining same property (' +
                mixinProto.className + ', ' +
                proto[key]._from + ') => ' +
                key
            );
        }

        proto[key] = mixinProto[key];

        Object.getOwnPropertyDescriptor(proto, key)._from = mixinProto.className;

        if (typeof proto[key] === 'function') {
            proto[key]._name = key;
        }
    };
}

/**
 *
 * @param mixinCls
 * @returns {Function}
 * @private
 */
function mixReduce(mixinCls) {
    return (prev, current, idx, arr) => {
        return prev[current] = idx !== arr.length -1 ? prev[current] || {} : mixinCls;
    };
}

Neo.config = Neo.config || {};

Neo.assignDefaults(Neo.config, _DefaultConfig_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/neo.mjs/src/collection/Base.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/collection/Base.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _Filter_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter.mjs */ "./node_modules/neo.mjs/src/collection/Filter.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony import */ var _Sorter_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sorter.mjs */ "./node_modules/neo.mjs/src/collection/Sorter.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Util.mjs */ "./node_modules/neo.mjs/src/core/Util.mjs");







const countMutations   = Symbol('countMutations'),
      isFiltered       = Symbol('isFiltered'),
      isSorted         = Symbol('isSorted'),
      silentUpdateMode = Symbol('silentUpdateMode'),
      toAddArray       = Symbol('toAddArray'),
      toRemoveArray    = Symbol('toRemoveArray'),
      updatingIndex    = Symbol('updatingIndex');

/**
 * @class Neo.collection.Base
 * @extends Neo.core.Base
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.collection.Base'
         * @private
         */
        className: 'Neo.collection.Base',
        /**
         * @member {String} ntype='collection'
         * @private
         */
        ntype: 'collection',
        /**
         * When filtering the collection for the first time, allItems will become a new collection for the unfiltered
         * state, using this id as the sourceCollectionId
         * @member {Neo.collection.Base|null} allItems
         * @private
         */
        allItems: null,
        /**
         * True to sort the collection items when adding / inserting new ones
         * @member {Boolean} autoSort
         */
        autoSort: true,
        /**
         * Use 'primitive' for default filters, use 'advanced' for filters using a filterBy method
         * which need to iterate over other collection items
         * @member {String} filterMode='primitive'
         */
        filterMode: 'primitive',
        /**
         * An Array containing Neo.util.Filter config objects or instances
         * @member {Array} filters_=[]
         */
        filters_: [],
        /**
         * The unique(!) key property of each collection item
         * @member {Array} items_=[]
         */
        items_: [],
        /**
         * The unique(!) key property of each collection item
         * @member {string} keyProperty='id'
         */
        keyProperty: 'id',
        /**
         * A map containing the key & reference of each collection item for faster access
         * @member {Map} map_=null
         */
        map_: null,
        /**
         * An internal Array of the sort directions for faster access
         * @member {Array} sortDirections=null
         * @private
         */
        sortDirections: null,
        /**
         * An internal Array of the sort properties for faster access
         * @member {Array} sortProperties=null
         * @private
         */
        sortProperties: null,
        /**
         * An Array containing Neo.util.Sorter config objects or instances
         * @member {Array} sorters_=[]
         */
        sorters_: [],
        /**
         * The id of another collection instance to use as this data source
         * @member {String|null} sourceId_=null
         */
        sourceId_: null
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);

        let me           = this,
            symbolConfig = {enumerable: false, writable: true};

        Object.defineProperties(me, {
            [countMutations]  : {...symbolConfig, value: false},
            [isFiltered]      : {...symbolConfig, value: false},
            [isSorted]        : {...symbolConfig, value: false},
            [silentUpdateMode]: {...symbolConfig, value: false},
            [toAddArray]      : {...symbolConfig, value: []},
            [toRemoveArray]   : {...symbolConfig, value: []},
            [updatingIndex]   : {...symbolConfig, value: 0}
        });

        if (me.autoSort && me._sorters.length > 0) {
            me.doSort();
        }
    }

    /**
     * Adds one or more items to the end of the collection and returns the new length of the collection.
     * @param {Array|Object} item The item(s) to add
     * @returns {Number} the collection count
     */
    add(item) {
        this.splice(0, null, item);
        return this.getCount();
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @private
     */
    afterSetFilters(value, oldValue) {
        let me = this;

        value.forEach(filter => {
            if (filter.listenerApplied === false) {
                filter.on('change', me.onFilterChange, me);
                filter.listenerApplied = true;
            }
        });

        if (oldValue) {
            me.filter();
        }
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @private
     */
    afterSetItems(value, oldValue) {
        let me          = this,
            keyProperty = me.keyProperty,
            i           = 0,
            len         = value.length,
            item;

        for (; i < len; i++) {
            item = value[i];
            me.map.set(item[keyProperty], item);
        }
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @private
     */
    afterSetSorters(value, oldValue) {
        let me = this;

        me.applySorterConfigs();

        value.forEach(sorter => {
            if (sorter.listenerApplied === false) {
                sorter.on('change', me.onSorterChange, me);
                sorter.listenerApplied = true;
            }
        });

        if (oldValue && me.autoSort) {
            me.doSort();
        }
    }

    /**
     *
     * @param {Number|String} value
     * @param {Number|String} oldValue
     * @private
     */
    afterSetSourceId(value, oldValue) {
        if (value) {
            let me     = this,
                source = Neo.get(value);

            me._items = [...source._items];
            me.map    = new Map(source.map); // creates a clone of the original map

            const listenersConfig = {
                mutate: me.onMutate,
                scope : me
            };

            source.on(listenersConfig);

            // console.log('afterSetSourceId', source);

            if (oldValue) {
                source = Neo.get(oldValue);
                source.un(listenersConfig); // todo: core.Observable.un needs to support this syntax
            }
        }
    }

    /**
     * Saves the sort property & direction multiplier of each sorter inside 2 arrays for faster access when sorting
     * @private
     */
    applySorterConfigs() {
        let me = this;

        me.sortDirections = [];
        me.sortProperties = [];

        me.sorters.forEach(sorter => {//console.log('forEach', sorter);
            me.sortDirections.push(sorter.directionMultiplier);
            me.sortProperties.push(sorter.property);
        });
    }

    /**
     *
     * @param {Map|null} value
     * @param {Map|null} oldValue
     * @private
     */
    beforeSetMap(value, oldValue) {
        return !value ? new Map() : value;
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @private
     */
    beforeSetFilters(value, oldValue) {
        if (!Array.isArray(value)) {
            value = value ? [value] : [];
        }

        let len = oldValue && oldValue.length || 0,
            hasMatch, i;

        value.forEach((key, index) => {
            if (!(key instanceof _Sorter_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])) {
                if (oldValue) {
                    hasMatch = false;
                    i        = 0;

                    for (; i < len; i++) {
                        if (oldValue[i].operator === (key.operator || '===') &&
                            oldValue[i].property === key.property &&
                            oldValue[i].value    === key.value
                        ) {
                            value[index] = oldValue[i];
                            hasMatch = true;
                            oldValue.splice(i, 1);
                            len--;
                            break;
                        }
                    }
                }

                if (!hasMatch) {
                    value[index] = Neo.create(_Filter_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], key);
                }
            }
        });

        if (Array.isArray(oldValue)) {
            oldValue.forEach(key => {
                key.destroy();
            });
        }

        return value;
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @private
     */
    beforeSetSorters(value, oldValue) {
        if (!Array.isArray(value)) {
            value = value ? [value] : [];
        }

        let len = oldValue && oldValue.length || 0,
            hasMatch, i;

        value.forEach((key, index) => {
            if (!(key instanceof _Sorter_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])) {
                if (oldValue) {
                    hasMatch = false;
                    i        = 0;

                    for (; i < len; i++) {
                        if (oldValue[i].property === key.property && oldValue[i].direction === key.direction) {
                            value[index] = oldValue[i];
                            hasMatch = true;
                            oldValue.splice(i, 1);
                            len--;
                            break;
                        }
                    }
                }

                if (!hasMatch) {
                    value[index] = Neo.create(_Sorter_mjs__WEBPACK_IMPORTED_MODULE_3__["default"], key);
                }
            }
        });

        if (Array.isArray(oldValue)) {
            oldValue.forEach(key => {
                key.destroy();
            });
        }

        return value;
    }

    /**
     *
     * @param opts
     * @private
     */
    cacheUpdate(opts) {
        console.log('cacheUpdate', opts, this[toAddArray]);return;

        let me          = this,
            keyProperty = me.keyProperty,
            index, toAddMap, toRemoveMap;

        if (!me[silentUpdateMode]) {
            toAddMap    = me[toAddArray]   .map(e => e[keyProperty]);
            toRemoveMap = me[toRemoveArray].map(e => e[keyProperty]);

            opts.addedItems.forEach(item => {
                if (index = toRemoveMap.indexOf(item[keyProperty]) > - 1) {
                    me[toRemoveArray].splice(index, 1);
                } else if (toAddMap.indexOf(item[keyProperty]) < 0) {
                    me[toAddArray].push(item);
                }
            });

            opts.removedItems.forEach(item => {
                if (index = toAddMap.indexOf(item[keyProperty]) > - 1) {
                    me[toAddArray].splice(index, 1);
                } else if (toRemoveMap.indexOf(item[keyProperty]) < 0) {
                    me[toRemoveArray].push(item);
                }
            });
        }
    }

    /**
     * Removes all items and clears the map
     */
    clear() {
        let me = this;

        me._items.splice(0, me.getCount());
        me.map.clear();
    }

    /**
     * Clears all current filters and optionally restores the original ones in case they existed.
     * @param {boolean} [restoreOriginalFilters=false]
     */
    clearFilters(restoreOriginalFilters) {
        this.filters = restoreOriginalFilters ? Neo.clone(this.originalConfig.filters, true, true) : null;
    }

    /**
     * Clears all current sorters and optionally restores the original ones in case they existed.
     * Without restoreInitialState as true this will not affect the current sorting of this collection.
     * @param {boolean} [restoreOriginalSorters=false]
     */
    clearSorters(restoreOriginalSorters) {
        this.sorters = restoreOriginalSorters ? Neo.clone(this.originalConfig.sorters, true, true) : null;
    }

    /**
     *
     * @returns {Neo.collection.Base} The cloned collection
     */
    clone() {
        let me      = this,
            config  = Neo.clone(me.originalConfig, true),
            filters = me._filters || [],
            sorters = me._sorters || [];

        delete config.id;
        delete config.filters;
        delete config.items;
        delete config.sorters;

        if (me._items.length > 0) {
            config.items = [...me._items];
        }

        config.filters = [];
        config.sorters = [];

        // todo: filters & sorters should push their current state and not the original one

        filters.forEach(function(filter) {
            config.filters.push(filter.originalConfig);
        });

        sorters.forEach(function(sorter) {
            config.sorters.push(sorter.originalConfig);
        });

        return Neo.create(Base, config);
    }

    /**
     * Clears the map & items array before the super call
     */
    destroy() {
        let me = this;

        me.items.splice(0, me._items.length);
        me.map.clear();

        super.destroy();
    }

    /**
     * @private
     */
    doSort() {
        let me                = this,
            items             = me._items,
            sorters           = me.sorters,
            sortDirections    = me.sortDirections,
            sortProperties    = me.sortProperties,
            countSorters      = sortProperties.length || 0,
            hasSortByMethod   = false,
            hasTransformValue = false,
            i, mappedItems, obj, sorter, sortProperty, sortValue;

        if (countSorters > 0) {
            sorters.forEach(key => {
                if (key.sortBy) {
                    hasSortByMethod = true;
                }

                if (key.useTransformValue) {
                    hasTransformValue = true;
                }
            });

            if (hasSortByMethod) {
                me._items.sort((a, b) => {
                    i = 0;

                    for (; i < countSorters; i++) {
                        sorter    = sorters[i];
                        sortValue = sorter[sorter.sortBy ? 'sortBy' : 'defaultSortBy'](a, b);

                        if (sortValue !== 0) {
                            return sortValue;
                        }
                    }

                    return 0;
                });
            } else {
                if (hasTransformValue) {
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Sorting_with_map
                    mappedItems = items.map((item, index) => {
                        obj = {index: index};
                        i   = 0;

                        for (; i < countSorters; i++) {
                            if (sorters[i].useTransformValue) {
                                obj[sortProperties[i]] = sorters[i].transformValue(item[sortProperties[i]]);
                            } else {
                                obj[sortProperties[i]] = item[sortProperties[i]];
                            }
                        }

                        return obj;
                    });
                } else {
                    mappedItems = items;
                }

                mappedItems.sort((a, b) => {
                    i = 0;

                    for (; i < countSorters; i++) {
                        sortProperty = sortProperties[i];

                        if (a[sortProperty] > b[sortProperty]) {
                            return 1 * sortDirections[i];
                        }

                        if (a[sortProperty] < b[sortProperty]) {
                            return -1 * sortDirections[i];
                        }
                    }

                    return 0;
                });

                if (hasTransformValue) {
                    me._items = mappedItems.map(el => {
                        return items[el.index];
                    });
                }
            }
        }

        me[isSorted] = countSorters > 0;

        if (me[updatingIndex] === 0) {
            me.fire('sort');
        }
    }

    /**
     * Resumes the collection events.
     * If you started an update using the startSilentUpdateMode flag,
     * you must use the endSilentUpdateMode param for this call.
     * Using the endSilentUpdateMode param will not fire a mutation event.
     * @param {Boolean} [endSilentUpdateMode]
     * @see {@link Neo.collection.Base#startUpdate startUpdate}
     */
    endUpdate(endSilentUpdateMode) {
        const me = this;

        if (me[updatingIndex] > 0) {
            me[updatingIndex]--;
        }

        if (endSilentUpdateMode) {
            me[silentUpdateMode] = false;
        } else {
            me.fire('mutate', {
                addedItems  : me[toAddArray],
                removedItems: me[toRemoveArray]
            });

            me[toAddArray]   .splice(0, me[toAddArray]   .length);
            me[toRemoveArray].splice(0, me[toRemoveArray].length);
        }
    }

    /**
     * @private
     */
    filter() {
        let me              = this,
            filters         = me._filters,
            countAllFilters = filters.length,
            countFilters    = 0,
            items           = me.allItems && me.allItems._items || me._items,
            i               = 0,
            countItems      = items.length,
            filteredItems   = [],
            config, isIncluded, item, j, tmpItems;

        for (; i < countAllFilters; i++) {
            if (!filters[i].disabled) {
                countFilters++;
            }
        }

        if (countFilters === 0 && me.allItems) {
            me.clear();

            me.items = [...me.allItems._items];
            me.map.set(...me.allItems.map);
        } else {
            if (!me.allItems) {
                config = {...me.originalConfig};

                delete config.filters;
                delete config.items;
                delete config.sorters;

                me.allItems = Neo.create(Base, {
                    ...Neo.clone(config, true, true),
                    keyProperty: me.keyProperty,
                    sourceId   : me.id
                });

                // console.log('child collection', me.allItems);
            }

            me.map.clear();

            if (me.filterMode === 'primitive') {
                // using for loops on purpose -> performance
                for (i = 0; i < countItems; i++) {
                    isIncluded = true;
                    item       = items[i];
                    j          = 0;

                    for (; j < countAllFilters; j++) {
                        if (filters[j].isFiltered(item, items, items)) {
                            isIncluded = false;
                            break;
                        }
                    }

                    if (isIncluded) {
                        filteredItems.push(item);
                        me.map.set(item[me.keyProperty], item);
                    }
                }

                me._items = filteredItems; // silent update, the map is already in place
            } else {
                filteredItems = [...items];

                for (j=0; j < countAllFilters; j++) {
                    tmpItems = [];

                    for (i = 0; i < countItems; i++) {
                        if (!filters[j].isFiltered(filteredItems[i], filteredItems, items)) {
                            tmpItems.push(filteredItems[i]);
                        }
                    }

                    filteredItems = [...tmpItems];
                    countItems    = filteredItems.length;
                }

                me.items = filteredItems; // update the map
            }
        }

        me[isFiltered] = countFilters !== 0;

        me.fire('filter');
    }

    /**
     * Returns all items which match the property and value
     * @param {Object|String} property
     * @param {String|Number} value
     * @returns {Array} Returns an empty Array in case no items are found
     */
    find(property, value) {
        let me               = this,
            items            = [],
            isObjectProperty = Neo.isObject(property),
            matchArray, propertiesArray, propertiesLength;

        if (isObjectProperty) {
            propertiesArray  = Object.entries(property);
            propertiesLength = propertiesArray.length;
        }

        me.items.forEach(item => {
            if (isObjectProperty) {
                matchArray = [];

                propertiesArray.forEach(([key, value]) => {
                    if (item[key] === value) {
                        matchArray.push(true);
                    }
                });

                if (matchArray.length === propertiesLength) {
                    items.push(item);
                }
            }
            else if (item[property] === value) {
                items.push(item);
            }
        });

        return items;
    }

    /**
     * Returns all items in the collection for which the passed function returns true
     * @param {function} fn The function to run for each item inside the start-end range. Return true for a match.
     * @param {Object} fn.item The current collection item
     * @param {Object} [scope=this] The scope in which the passed function gets executed
     * @param {Number} [start=0] The start index
     * @param {Number} [end=this.getCount()] The end index (up to, last value excluded)
     * @returns {Array} Returns an empty Array in case no items are found
     */
    findBy(fn, scope, start, end) {
        let me    = this,
            items = [],
            i     = start || 0,
            len   = end   || me.getCount();

        scope = scope || me;

        for (; i < len; i++) {
            if (fn.call(scope, me.items[i])) {
                items.push(me.items[i]);
            }
        }

        return items;
    }

    /**
     * Returns the first item inside the collection
     * @returns {Object}
     */
    first() {
        return this._items[0];
    }

    /**
     * Returns the object associated to the key, or undefined if there is none.
     * @param key
     * @returns {Object|undefined}
     */
    get(key) {
        return this.map.get(key);
    }

    /**
     * Returns the item for a given index
     * @param {Number} index
     * @returns {Object|undefined}
     */
    getAt(index) {
        return this._items[index];
    }

    /**
     * Returns the length of the internal items array
     * @returns {Number}
     */
    getCount() {
        return this._items.length;
    }

    /**
     *
     * @return {Number}
     */
    getCountMutations() {
        return this[countMutations];
    }

    /**
     * Returns the first matching filter for the given property config
     * @param {String} property
     * @return {Neo.collection.Filter|null}
     */
    getFilter(property) {
        let filters = this.filters || [],
            i       = 0,
            len     = filters.length;

        for (; i < len; i++) {
            if (filters[i].property === property) {
                return filters[i];
            }
        }

        return null;
    }

    /**
     * Returns the key for a given index
     * @param {Number} index
     * @returns {Number|String|undefined}
     */
    getKeyAt(index) {
        let item = this._items[index];
        return item && item[this.keyProperty];
    }

    /**
     * Returns a shallow copy of a portion of the items array
     * @param {Number} [start] Zero-based index at which to begin extraction.
     * @param {Number} [end] Zero-based index before which to end extraction (extracts up to but not including end).
     * @returns {Array}
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
     */
    getRange(start, end) {
        return this._items.slice(start, end);
    }

    /**
     * Returns the Source Collection in case the sourceCollectionId config was set
     * @returns {Neo.collection.Base|undefined}
     */
    getSource() {
        return this.sourceId && Neo.get(this.sourceId);
    }

    /**
     *
     * Returns a boolean asserting whether a value has been associated to the key in the Collection or not
     * @param {Number|String} key
     * @returns {Boolean}
     */
    has(key) {
        return this.map.has(key);
    }

    /**
     * Returns a boolean asserting whether an item exists in the Collection or not
     * @param {Object} item
     * @returns {Boolean}
     */
    hasItem(item) {
        return this.map.has(item[this.keyProperty]);
    }

    /**
     * Returns the index for a given key or item
     * @param {Number|String|Object} key
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOf(key) {
        return this._items.indexOf(_core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isObject(key) ? key : this.map.get(key));
    }

    /**
     * Returns the index for a given item
     * @param {Object} item
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOfItem(item) {
        return this._items.indexOf(item);
    }

    /**
     * Returns the index for a given key
     * @param {Number|String} key
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOfKey(key) {
        return this._items.indexOf(this.map.get(key));
    }

    /**
     * Inserts an item or an array of items at the specified index
     * @param {Number} index
     * @param {Array|Object} item
     * @returns {Number} the collection count
     */
    insert(index, item) {
        this.splice(index, 0, item);
        return this.getCount();
    }

    /**
     *
     * @returns {Boolean} true in case the collection is filtered
     */
    isFiltered() {
        return this[isFiltered];
    }

    /**
     *
     * @param {Object} item
     * @returns {boolean}
     * @private
     */
    isFilteredItem(item) {
        let me         = this,
            filters    = me._filters,
            i          = 0,
            len        = filters.length,
            isFiltered = false;

        for (; i < len; i++) {
            if (filters[i].isFiltered(item)) {
                isFiltered = true;
                break;
            }
        }

        return isFiltered;
    }

    /**
     *
     * @returns {Boolean} true in case the collection is sorted
     */
    isSorted() {
        return this[isSorted];
    }

    /**
     * Returns the last item inside the collection
     * @returns {Object}
     */
    last() {
        return this._items[this.getCount() -1];
    }

    /**
     *
     * @param {Object} opts
     * @private
     */
    onFilterChange(opts) {
        this.filter();
    }

    /**
     *
     * @param {Object} opts
     * @private
     */
    onMutate(opts) {
        let me = this;

        if (opts.preventBubbleUp) {
            me.preventBubbleUp = true;
        }

        me.splice(null, opts.removedItems, opts.addedItems);

        // console.log('onMutate', me.getCount(), me.id, opts);
    }

    /**
     *
     * @param {Object} opts
     * @private
     */
    onSorterChange(opts) {
        this.applySorterConfigs();
        this.doSort();
    }

    /**
     * Removes the last element from the items array and returns this element.
     * @returns {Object} The removed element from the collection; undefined if the collection is empty.
     */
    pop() {
        let mutation = this.splice(this.getCount() -1, 1);
        return mutation.removedItems[0];
    }

    /**
     * Adds one or more items to the end of the collection and returns the new items count
     * @param {Array|Object} item The item(s) to add
     * @returns {Number} the collection count
     */
    push(item) {
        return this.add(item);
    }

    /**
     * Removes a given key, item or Array containing keys|items
     * @param {Number|String|Object|Array} key
     * @returns {Number} the collection count
     */
    remove(key) {
        this.splice(0, Array.isArray(key) ? key : [key]);
        return this.getCount();
    }

    /**
     * Removes the item at the given index
     * @param {Number} index
     * @returns {Number} the collection count
     */
    removeAt(index) {
        this.splice(index, 1);
        return this.getCount();
    }

    /**
     * Reverses the items array in place.
     * Intended for collections without sorters.
     * @returns {Array} items
     */
    reverse() {
        return this._items.reverse();
    }

    /**
     * Removes the first element from the items array and returns this element.
     * @returns {Object} The removed element from the collection; undefined if the collection is empty.
     */
    shift() {
        let mutation = this.splice(0, 1);
        return mutation.addedItems[0];
    }

    /**
     *
     * @param {function} callback Function to test for each item, taking three parameters:
     * @param {Object}   callback.item The current collection item being processed
     * @param {Number}  [callback.index] The index of the current item being processed
     * @param {Array}   [callback.items] The items array of the collection
     *
     * @param {Object} [scope] Value to use as "this" when executing the callback
     * @returns {boolean} true if the callback function returns a truthy value for any collection item, otherwise false
     */
    some(...args) {
        return this._items.some(...args);
    }

    /**
     * Removes items from and/or adds items to this collection
     * If the toRemoveArray is used, then the index is not used for removing, the entries are found by key and removed from where they are.
     * If index is not passed, toAddArray is appended to the Collection.
     * @param {Number|null} index
     * @param {Number|Array} [removeCountOrToRemoveArray]
     * @param {Array| Object} [toAddArray]
     * @returns {Object} An object containing the addedItems & removedItems arrays
     */
    splice(index, removeCountOrToRemoveArray, toAddArray) {
        let me                 = this,
            source             = me.getSource(),
            addedItems         = [],
            items              = me._items,
            keyProperty        = me.keyProperty,
            map                = me.map,
            removedItems       = [],
            removeCountAtIndex = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isNumber(removeCountOrToRemoveArray) ? removeCountOrToRemoveArray : null,
            toRemoveArray      = Array.isArray(removeCountOrToRemoveArray) ? removeCountOrToRemoveArray : null,
            i, item, key, len, toAddMap;

        if (!index && removeCountAtIndex) {
            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].error(me.id + ': If index is not passed, removeCountAtIndex cannot be used');
        }

        toAddArray = toAddArray && !Array.isArray(toAddArray) ? [toAddArray] : toAddArray;

        if (toRemoveArray && (len = toRemoveArray.length) > 0) {
            if (toAddArray && toAddArray.length > 0) {
                toAddMap = toAddArray.map(e => e[keyProperty]);
            }

            for (i=0; i < len; i++) {
                item = toRemoveArray[i];
                key  = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isObject(item) ? item[keyProperty] : item;

                if (map.has(key)) {
                    if (!toAddMap || (toAddMap && toAddMap.indexOf(key) < 0)) {
                        removedItems.push(items.splice(me.indexOfKey(key), 1)[0]);
                        map.delete(key);
                    }
                }
            }
        } else if (removeCountAtIndex && removeCountAtIndex > 0) {
            removedItems.push(...items.splice(index, removeCountAtIndex));
            removedItems.forEach(e => {
                map.delete(e[keyProperty]);
            });
        }

        if (toAddArray && (len = toAddArray.length) > 0) {
            for (i=0; i < len; i++) {
                item = toAddArray[i];
                key  = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isObject(item) ? item[keyProperty] : item;

                if (!map.has(key) && !me.isFilteredItem(item)) {
                    addedItems.push(item);
                    map.set(key, item);
                }
            }

            if (addedItems.length > 0) {
                items.splice(_core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isNumber(index) ? index : items.length, 0, ...addedItems);

                if (me.autoSort && me._sorters.length > 0) {
                    me.doSort();
                }
            }
        }

        if (source) {
            if (!source.getSource()) {
                source.preventBubbleUp = true;
            }

            if (!me.preventBubbleUp) {
                // console.log('source splice', source.id, 'added:', ...toAddArray, 'removed:', ...removedItems);
                me.startUpdate(true);
                source.splice(null, toRemoveArray || removedItems, toAddArray);
                me.endUpdate(true);
            }

            delete source.preventBubbleUp;
        }

        if (addedItems.length > 0 || removedItems.length > 0) {
            me[countMutations]++;
        }

        if(me[updatingIndex] === 0) {
            me.fire('mutate', {
                addedItems     : toAddArray,
                preventBubbleUp: me.preventBubbleUp,
                removedItems   : toRemoveArray || removedItems
            });

        } else if (!me[silentUpdateMode]) {
            me.cacheUpdate({
                addedItems  : addedItems,
                removedItems: removedItems
            });
        }

        if (me[updatingIndex] === 0) {
            delete me.preventBubbleUp;
        }

        return {
            addedItems  : addedItems,
            removedItems: removedItems
        };
    }

    /**
     * Prevents the collection from firing events until endUpdate gets called.
     * If you start an update using the startSilentUpdateMode param,
     * the mutation event will not fire after using endUpdate()
     * (you must use the endSilentUpdateMode param for the endUpdate call in case you used
     * startSilentUpdateMode here)
     * @param {Boolean} [startSilentUpdateMode]
     * @see {@link Neo.collection.Base#endUpdate endUpdate}
     */
    startUpdate(startSilentUpdateMode) {
        if (startSilentUpdateMode) {
            this[silentUpdateMode] = true;
        }

        this[updatingIndex]++;
    }

    /**
     * Adds one or more elements to the beginning of the collection and returns the new items count
     * @param {Array|Object} item The item(s) to add
     * @returns {Number} the collection count
     */
    unshift(item) {
        this.splice(0, 0, item);
        return this.getCount();
    }
}

/**
 * The mutate event fires after every splice call (invoked by all methods which change the content of the items array).
 * @event mutate
 * @param {Object[]} addedItems
 * @param {Boolean} preventBubbleUp private
 * @param {Object[]} removedItems
 * @returns {Object}
 */

Neo.applyClassConfig(Base);

/* harmony default export */ __webpack_exports__["default"] = (Base);

/***/ }),

/***/ "./node_modules/neo.mjs/src/collection/Filter.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/collection/Filter.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");



/**
 * @class Neo.collection.Filter
 * @extends Neo.core.Base
 */
class Filter extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true,
        /**
         * Valid values for the operator config:<br>
         * ['==', '===', '!=', '!==', '<', '<=', '>', '>=', 'excluded', 'included', 'isDefined', 'isUndefined', 'like']
         * @member {String[]} operators
         * @private
         * @static
         */
        operators: ['==', '===', '!=', '!==', '<', '<=', '>', '>=', 'excluded', 'included', 'isDefined', 'isUndefined', 'like']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.collection.Filter'
         * @private
         */
        className: 'Neo.collection.Filter',
        /**
         * @member {String} ntype='filter'
         * @private
         */
        ntype: 'filter',
        /**
         * Setting disabled to true will exclude this filter from the collection filtering logic
         * @member {Boolean} disabled_=false
         */
        disabled_: false,
        /**
         * Provide a custom filtering function, has a higher priority than property, operator & value
         * @member {Function|null} filterBy_=null
         */
        filterBy_: null,
        /**
         * True means not filtering out items in case the value is '', null, [] or {}
         * @member {Boolean} includeEmptyValues=false
         */
        includeEmptyValues: false,
        /**
         * Set this flag to true before starting bulk updates (e.g. changing property & value)
         * to prevent multiple change events
         * @member {Boolean} isUpdating_=false
         */
        isUpdating_: false,
        /**
         * The owner util.Collection needs to apply an onChange listener once
         * @member {Boolean} listenerApplied=false
         * @private
         */
        listenerApplied: false,
        /**
         * The operator to filter by (use the combination of property, operator & value)
         * Valid values:
         *
         * == (not recommended)
         * ===
         * != (not recommended)
         * !==
         * <
         * >=
         * >
         * >=
         * like (collectionValue.toLowerCase().indexOf(filterValue.toLowerCase()) > -1)
         * included (expects value to be an array)
         * excluded (expects value to be an array)
         * @member {String} operator='==='
         */
        operator_: '===',
        /**
         * The property to filter by (use the combination of property, operator & value)
         * @member {String} property_='id'
         */
        property_: 'id',
        /**
         * The scope to use for the filterBy method, in case it is provided. Defaults to this instance.
         * @member {Object|null} scope=null
         */
        scope: null,
        /**
         * The value to filter by (use the combination of property, operator & value)
         * @member {String} value_=null
         */
        value_: null
    }}

    afterSetDisabled(...args) {
        this.fireChangeEvent(...args);
    }

    afterSetFilterBy(value, oldValue) {
        // todo
    }

    afterSetIsUpdating(value, oldValue) {
        if (value === false) {
            this.fireChangeEvent(value, oldValue);
        }
    }

    afterSetOperator(...args) {
        this.fireChangeEvent(...args);
    }

    afterSetProperty(...args) {
        this.fireChangeEvent(...args);
    }

    afterSetValue(...args) {
        this.fireChangeEvent(...args);
    }

    beforeSetFilterBy(value, oldValue) {
        if (value && typeof value !== 'function') {
            Neo.logError('filterBy has to be a function', this);
            return oldValue;
        }

        return value;
    }

    /**
     * Triggered before the operator config gets changed.
     * @param {String|null} value
     * @param {String} oldValue
     * @returns {String}
     * @private
     */
    beforeSetOperator(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'operator');
    }

    /**
     *
     * @param value
     * @param oldValue
     */
    fireChangeEvent(value, oldValue) {
        let me = this;

        if (oldValue !== undefined && me.isUpdating !== true) {
            me.fire('change', {
                operator: me.operator,
                property: me.property,
                value   : me.value
            });
        }
    }

    /**
     * Checks if a colletion item matches this filter
     * @param {Object} item The current collection item
     * @param {Array} filteredItems If the collection filterMode is not primitive contains the items which passed
     * the previous filters, otherwise all collection items
     * @param {Array} allItems all collection items
     * @returns {Boolean}
     */
    isFiltered(item, filteredItems, allItems) {
        let me = this;

        if (me._disabled) {
            return false;
        }

        if (me.includeEmptyValues && (me._value === null || Neo.isEmpty(me._value))) {
            return false;
        }

        if (me._filterBy) {
            return me.filterBy.call(me.scope || me, item, filteredItems, allItems);
        } else {
            return !Filter[me._operator](item[me._property], me._value);
        }
    }

    static ['=='] (a, b) {return a == b;}
    static ['==='](a, b) {return a === b;}
    static ['!='] (a, b) {return a != b;}
    static ['!=='](a, b) {return a !== b;}
    static ['<']  (a, b) {return a < b;}
    static ['<='] (a, b) {return a <= b;}
    static ['>']  (a, b) {return a > b;}
    static ['>='] (a, b) {return a >= b;}

    static ['excluded'](a, b) {
        return b.indexOf(a) < 0;
    }

    static ['included'](a, b) {
        return b.indexOf(a) > -1;
    }

    static ['isDefined'](a, b) {
        return a !== undefined;
    }

    static ['isUndefined'](a, b) {
        return a === undefined;
    }

    static ['like'](a, b) {
        return a.toLowerCase().includes(b.toLowerCase());
    }
}

Neo.applyClassConfig(Filter);

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./node_modules/neo.mjs/src/collection/Sorter.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/collection/Sorter.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");



/**
 * @class Neo.collection.Sorter
 * @extends Neo.core.Base
 */
class Sorter extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.collection.Sorter'
         * @private
         */
        className: 'Neo.collection.Sorter',
        /**
         * @member {String} ntype='sorter'
         * @private
         */
        ntype: 'sorter',
        /**
         * Internal config which mapps the direction ASC to 1, -1 otherwise
         * @member {Number} directionMultiplier=1
         * @private
         */
        directionMultiplier: 1,
        /**
         * The sort direction when using a property.
         * @member {String} direction_='ASC'
         */
        direction_: 'ASC',
        /**
         * The owner util.Collection needs to apply an onChange listener once
         * @member {boolean} listenerApplied=false
         * @private
         */
        listenerApplied: false,
        /**
         * The property to sort by.
         * @member {String} property_='id'
         */
        property_: 'id',
        /**
         * Provide a custom sorting function, has a higher priority than property & direction
         * @member {Function|null} sortBy=null
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator
         */
        sortBy: null,
        /**
         * True to use the transformValue method for each item (the method can get overridden)
         * @member {Boolean} useTransformValue=true
         * @private
         */
        useTransformValue: true
    }}

    /**
     *
     * @param {String} value
     * @param {String} oldValue
     */
    afterSetDirection(value, oldValue) {
        let me = this;

        me.directionMultiplier = value === 'ASC' ? 1 : -1;

        if (oldValue) {
            me.fire('change', {
                direction: me.direction,
                property : me.property
            });
        }
    }

    /**
     *
     * @param {String} value
     * @param {String} oldValue
     */
    afterSetProperty(value, oldValue) {
        let me = this;

        if (oldValue) {
            me.fire('change', {
                direction: me.direction,
                property : me.property
            });
        }
    }

    /**
     * Default sorter function which gets used by collections in case at least one sorter has a real sortBy method
     * @param a
     * @param b
     */
    defaultSortBy(a, b) {
        let me = this;

        a = a[me.property];
        b = b[me.property];

        if (me.useTransformValue) {
            a = me.transformValue(a);
            b = me.transformValue(b);
        }

        if (a > b) {
            return 1 * me.directionMultiplier;
        }

        if (a < b) {
            return -1 * me.directionMultiplier;
        }

        return 0;
    }

    /**
     *
     * @param {*} value
     * @returns {*} value
     */
    transformValue(value) {
        if (typeof value === 'string') {
            value = value.toLowerCase();
        }

        return value;
    }
}

Neo.applyClassConfig(Sorter);

/* harmony default export */ __webpack_exports__["default"] = (Sorter);

/***/ }),

/***/ "./node_modules/neo.mjs/src/component/Base.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/Base.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager/Component.mjs */ "./node_modules/neo.mjs/src/manager/Component.mjs");
/* harmony import */ var _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/DomEvent.mjs */ "./node_modules/neo.mjs/src/manager/DomEvent.mjs");
/* harmony import */ var _util_KeyNavigation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/KeyNavigation.mjs */ "./node_modules/neo.mjs/src/util/KeyNavigation.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _util_Style_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/Style.mjs */ "./node_modules/neo.mjs/src/util/Style.mjs");
/* harmony import */ var _core_Util_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/Util.mjs */ "./node_modules/neo.mjs/src/core/Util.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");
/* harmony import */ var _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/VNode.mjs */ "./node_modules/neo.mjs/src/util/VNode.mjs");












/**
 * @class Neo.component.Base
 * @extends Neo.core.Base
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.Base'
         * @private
         */
        className: 'Neo.component.Base',
        /**
         * @member {String} ntype='component'
         * @private
         */
        ntype: 'component',
        /**
         * True automatically mounts a component after being rendered.
         * Use this for the top level component of your app.
         * @member {Boolean} autoMount=false
         * @tutorial 02_ClassSystem
         */
        autoMount: false,
        /**
         * True automatically renders a component after being created inside the init call.
         * Use this for the top level component of your app.
         * @member {Boolean} autoRender=false
         * @see {@link Neo.component.Base#init init}
         * @tutorial 02_ClassSystem
         */
        autoRender: false,
        /**
         * manager.Focus will change this flag on focusin & out dom events
         * @member {Boolean} containsFocus_=false
         * @private
         */
        containsFocus_: false,
        /**
         * Assign a component controller to this component (pass an imported module or the string based class name)
         * @member {Neo.controller.Component|String} controller_=null
         */
        controller_: null,
        /**
         * Disabled components will get the neo-disabled cls applied and won't receive DOM events
         * @member {Boolean} disabled_=false
         */
        disabled_: false,
        /**
         * An array of domListener configs
         * @member {Object[]|null} domListeners_=null
         * @example
         * afterSetStayOnHover(value, oldValue) {
         *     if (value) {
         *         let me           = this,
         *             domListeners = me.domListeners || [];
         *
         *         domListeners.push({
         *             mouseenter: me.onMouseEnter,
         *             scope     : me
         *         }, {
         *             mouseleave: me.onMouseLeave,
         *             scope     : me
         *         });
         *
         *        me.domListeners = domListeners;
         *    }
         *}
         */
        domListeners_: null,
        /**
         * Internal flag which will get set to true on mount
         * @member {Boolean} hasBeenMounted=false
         * @private
         */
        hasBeenMounted: false,
        /**
         * Internal flag for vdom changes after a component got unmounted
         * (delta updates can no longer get applied & a new render call is required before re-mounting)
         * @member {Boolean} hasUnmountedVdomChanges_=false
         * @private
         */
        hasUnmountedVdomChanges_: false,
        /**
         * Shortcut for style.height, defaults to px
         * @member {Number|String|null} height_=null
         */
        height_: null,
        /**
         * The top level innerHTML of the component
         * @member {String|null} html_=null
         */
        html_: null,
        /**
         * The unique component id
         * @member {String|null} id_=null
         */
        id_: null,
        /**
         * Internal flag which will get set to true while an update request (worker messages) is in progress
         * @member {Boolean} isVdomUpdating=false
         * @private
         */
        isVdomUpdating: false,
        /**
         * Using the keys config will create an instance of Neo.util.KeyNavigation.
         * @see {@link Neo.util.KeyNavigation KeyNavigation}
         * @member {Object} keys_=null
         */
        keys_: null,
        /**
         * Shortcut for style.maxHeight, defaults to px
         * @member {Number|String|null} maxHeight_=null
         */
        maxHeight_: null,
        /**
         * Shortcut for style.maxWidth, defaults to px
         * @member {Number|String|null} maxWidth_=null
         */
        maxWidth_: null,
        /**
         * Shortcut for style.minHeight, defaults to px
         * @member {Number|String|null} minHeight_=null
         */
        minHeight_: null,
        /**
         * Shortcut for style.minWidth, defaults to px
         * @member {Number|String|null} minWidth_=null
         */
        minWidth_: null,
        /**
         * True in case the component is mounted to the DOM
         * @member {Boolean} mounted_=false
         * @private
         */
        mounted_: false,
        /**
         * Internal flag which will get set to true in case an update call arrives while another update is running
         * @member {Boolean} needsVdomUpdate=false
         * @private
         */
        needsVdomUpdate: false,
        /**
         * True in case the component is rendering the vnode
         * @member {Boolean} rendering_=false
         * @private
         */
        rendering: false,
        /**
         * Set this to true for bulk updates.
         * Ensure to set it back to false afterwards.
         * @member {Boolean} silentVdomUpdate=false
         */
        silentVdomUpdate: false,
        /**
         * Top level style attributes
         * @member {Object} style={}
         */
        style: {},
        /**
         * Add tooltip config objects
         * See tooltip/Base.mjs
         * @member {Array|Object} tooltips_=null
         */
        tooltips_: null,
        /**
         * The component vnode tree. Available after the component got rendered.
         * @member {Object} vnode_=null
         * @private
         */
        vnode_: null,
        /**
         * Shortcut for style.width, defaults to px
         * @member {Number|String|null} width_=null
         */
        width_: null,
        /**
         * Top level style attributes. Useful in case getVdomRoot() does not point to the top level DOM node.
         * @member {Object} wrapperStyle_={}
         */
        wrapperStyle_: {},
        /**
         * The vdom markup for this component.
         * @member {Object} _vdom={}
         */
        _vdom: {}
    }}

    /**
     * Specify a different vdom root if needed to apply the top level style attributes on a different level.
     * Make sure to use getVnodeRoot() as well, to keep the vdom & vnode trees in sync.
     * @returns {Object} The new vdom root
     */
    getVdomRoot() {
        return this.vdom;
    }

    /**
     * Specify a different vnode root if needed to apply the top level style attributes on a different level.
     * Make sure to use getVdomRoot() as well, to keep the vdom & vnode trees in sync.
     * @returns {Object} The new vnode root
     */
    getVnodeRoot() {
        return this.vnode;
    }

    /**
     * Override this method to change the order configs are applied to this instance.
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     * @returns {Object} config
     */
    mergeConfig(...args) {
        let me     = this,
            config = super.mergeConfig(...args),

            // it should be possible to set custom configs for the vdom on instance level,
            // however there will be already added attributes (e.g. id), so a merge seems to be the best strategy.
            vdom = {...me._vdom || {}, ...config.vdom || {}};

        // avoid any interference on prototype level
        // does not clone existing Neo instances
        me._vdom        = Neo.clone(vdom, true, true);
        me.cls          = config.cls;
        me._style       = config.style;
        me.wrapperStyle = Neo.clone(config.wrapperStyle, false);

        delete config.cls;
        delete config.style;
        delete config._vdom;
        delete config.vdom;
        delete config.wrapperStyle;

        return config;
    }

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);
        _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].register(this);
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        me.fire('constructed', {id: me.id}); // testing

        if (me.keys) {
            me.keys.register(me);
        }
    }

    /**
     *
     */
    init() {
        if (this.autoRender) {
            this.render();
        }
    }

    /**
     * CSS selectors to apply to the top level node of this component
     * @member {String[]} cls=['neo-component']
     */
    get cls() {
        return this._cls ? Neo.clone(this._cls) : ['neo-component'];
    }
    set cls(value) {
        value = value ? value : [];

        let me       = this,
            vdom     = me.vdom,
            vdomRoot = me.getVdomRoot(),
            oldCls;

        if (typeof value === 'string') {
            value = value.split('');
        }

        if (me.mounted) {
            oldCls = Neo.clone(me._cls);
        }

        me._cls = value;

        if (vdomRoot) {
            vdomRoot.cls = [...value];
        }

        me._vdom = vdom; // silent update

        if (me.mounted) {
            me.updateCls(value, oldCls);
        }
    }

    /**
     * Apply component based listeners
     * @member {Object} listeners={}
     */
    get listeners() {
        return this._listeners || {};
    }
    set listeners(value) {
        this._listeners = value;
    }

    /**
     * True after the component render() method was called. Also fires the rendered event.
     * @member {Boolean} rendered=false
     * @private
     */
    get rendered() {
        return this._rendered || false;
    }
    set rendered(value) {
        let me = this;

        me._rendered = value;

        if (value === true) {
            me.fire('rendered', me.id);
        }
    }

    /**
     * Top level style attributes
     * @member {Object} style={}
     */
    get style() {
        // we need to "clone" the object, otherwise changes will get applied directly and there are no deltas
        // this only affects non vdom related style to DOM deltas
        return Neo.clone(this._style);
    }
    set style(value) {
        let me       = this,
            vdomRoot = me.getVdomRoot(),
            oldStyle;

        if (me.mounted) {
            oldStyle = me._style;
        }

        me._style = value;

        vdomRoot.style = Object.assign(vdomRoot.style || {}, value);

        if (me.mounted) {
            me.updateStyle(value, oldStyle);
        }
    }

    /**
     * The setter will handle vdom updates automatically
     * @member {Object} vdom=this._vdom
     */
    get vdom() {
        return this._vdom;
    }
    set vdom(value) {
        let me       = this,
            app      = Neo.apps[me.appName],
            vdom     = value,
            cls      = me.cls,
            height   = me.height,
            style    = me.style,
            vdomRoot = me.getVdomRoot(),
            width    = me.width,
            listenerId;

        if (vdomRoot) {
            if (cls) {
                vdomRoot.cls = cls;
            }

            if (height) {
                vdomRoot.height = height;
            }

            if (width) {
                vdomRoot.width = width;
            }

            if (style) {
                // todo: string based styles
                vdomRoot.style = Object.assign(vdomRoot.style || {}, style);
            }
        }

        // It is important to keep the vdom tree stable to ensure that containers do not lose the references to their
        // child vdom trees. The if case should not happen, but in case it does, keeping the reference and merging
        // the content over seems to be the best strategy
        if (me._vdom !== vdom) {
            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].warn('vdom got replaced for: ' + me.id + '. Copying the content into the reference holder object');

            Object.keys(me._vdom).forEach(key => {
                delete me._vdom[key];
            });

            Object.assign(me._vdom, vdom);
        } else {
            me._vdom = vdom;
        }

        if (!me.silentVdomUpdate) {
            if (!me.mounted && app && app.rendering === true) {
                listenerId = app.on('render', () => {
                    app.un('render', listenerId);

                    setTimeout(() => {
                        me.updateVdom(me.vdom, me.vnode);
                    }, 50);
                });
            } else if (me.mounted) {
                me.updateVdom(vdom, me.vnode);
            }

            me.hasUnmountedVdomChanges = !me.mounted && me.hasBeenMounted;
        }
    }

    /**
     * Either a string like 'color: red; background-color: blue;'
     * or an object containing style attributes
     * @param {String|Object} value
     * @returns {Object} all styles of this.el
     */
    addStyle(value) {
        if (typeof value === 'string') {
            value = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_8__["default"].createStyleObject(value);
        }

        // todo: add a check if something has changed

        return this.style = Object.assign(this.style, value);
    }

    /**
     * Triggered after the disabled config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @private
     */
    afterSetDisabled(value, oldValue) {
        let me  = this,
            cls = me.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_5__["default"][value ? 'add' : 'remove'](cls, 'neo-disabled');
        me.cls = cls;
    }

    /**
     * Registers the domListeners inside the Neo.manager.DomEvent
     * @param {Array} value
     * @param {Array} oldValue
     * @private
     */
    afterSetDomListeners(value, oldValue) {
        _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].updateDomListeners(this, value, oldValue);
    }

    /**
     * Triggered after the hasUnmountedVdomChanges config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @private
     */
    afterSetHasUnmountedVdomChanges(value, oldValue) {
        if (value || (!value && oldValue)) {
            let parentIds = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getParentIds(this),
                i         = 0,
                len       = parentIds.length,
                parent;

            for (; i < len; i++) {
                parent = Neo.getComponent(parentIds[i]);

                if (parent) {
                    parent._hasUnmountedVdomChanges = value; // silent update
                }
            }
        }
    }

    /**
     * Triggered after the height config got changed
     * @param {Number|String|null} value
     * @param {Number|String|null} oldValue
     * @private
     */
    afterSetHeight(value, oldValue) {
        this.changeVdomRootKey('height', value);
    }

    /**
     * Triggered after the html config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @private
     */
    afterSetHtml(value, oldValue) {
        this.changeVdomRootKey('html', value);
    }

    /**
     * Triggered after the id config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @private
     */
    afterSetId(value, oldValue) {
        this.changeVdomRootKey('id', value);
    }

    /**
     * Triggered after the maxHeight config got changed
     * @param {Number|String|null} value
     * @param {Number|String|null} oldValue
     * @private
     */
    afterSetMaxHeight(value, oldValue) {
        this.changeVdomRootKey('maxHeight', value);
    }

    /**
     * Triggered after the maxWidth config got changed
     * @param {Number|String|null} value
     * @param {Number|String|null} oldValue
     * @private
     */
    afterSetMaxWidth(value, oldValue) {
        this.changeVdomRootKey('maxWidth', value);
    }

    /**
     * Triggered after the minHeight config got changed
     * @param {Number|String|null} value
     * @param {Number|String|null} oldValue
     * @private
     */
    afterSetMinHeight(value, oldValue) {
        this.changeVdomRootKey('minHeight', value);
    }

    /**
     * Triggered after the minWidth config got changed
     * @param {Number|String|null} value
     * @param {Number|String|null} oldValue
     * @private
     */
    afterSetMinWidth(value, oldValue) {
        this.changeVdomRootKey('minWidth', value);
    }

    /**
     * Triggered after the mounted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @private
     */
    afterSetMounted(value, oldValue) {
        let me = this;

        if (value) {
            me.hasBeenMounted = true;
        }

        if (value || (!value && oldValue)) {
            let childIds = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getChildIds(me.vnode),
                i        = 0,
                len      = childIds.length,
                child;

            for (; i < len; i++) {
                child = Neo.getComponent(childIds[i]);

                if (child) {
                    child.mounted = value; // silent update

                    if (value) {
                        child.hasBeenMounted = true;
                    }
                }
            }
        }

        if (value) {
            if (me.domListeners && me.domListeners.length > 0) {
                // todo: the main thread reply of mount arrives after pushing the task into the queue which does not ensure the dom is mounted
                setTimeout(() => {
                    _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].mountDomListeners(me);
                }, 50);
            }

            me.fire('mounted', me.id);
        }
    }

    /**
     * Triggered after the tooltips config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @private
     */
    afterSetTooltips(value, oldValue) {
        if (value) {
            let me = this;

            if (Neo.ns('Neo.tooltip.Base')) {
                me.createTooltips(value);
            } else {
                __webpack_require__.e(/*! import() | src/tooltip/Base */ "src/tooltip/Base").then(__webpack_require__.bind(null, /*! ../tooltip/Base.mjs */ "./node_modules/neo.mjs/src/tooltip/Base.mjs")).then((module) => {
                        me.createTooltips(value);
                    }
                );
            }
        }
    }

    /**
     * Triggered after the vnode config got changed
     * @param {Object} value
     * @param {Object|null} oldValue
     * @private
     */
    afterSetVnode(value, oldValue) {
        if (value) {
            this.syncVnodeTree();
        }
    }

    /**
     * Triggered after the width config got changed
     * @param {Number|String|null} value
     * @param {Number|String|null} oldValue
     * @private
     */
    afterSetWidth(value, oldValue) {
        this.changeVdomRootKey('width', value);
    }

    /**
     * Triggered after the wrapperStyle config got changed
     * @param {Object} value
     * @param {Object} oldValue
     * @private
     */
    afterSetWrapperStyle(value, oldValue) {
        if (value && !Neo.isEmpty(value)) {
            let vdom = this.vdom;

            vdom.style = vdom.style || {};
            Object.assign(vdom.style, value);
            this.vdom  = vdom;
        }
    }

    /**
     * Triggered when accessing the controller config
     * @param {Object} value
     * @private
     */
    beforeGetController(value) {
        return value && Neo.get(value);
    }

    /**
     * Triggered before the controller config gets changed. Creates a ComponentController instance if needed.
     * @param {Object} value
     * @param {Object} oldValue
     * @private
     */
    beforeSetController(value, oldValue) {
        let me = this;

        if (oldValue) {
            oldValue.destroy();
        }

        if (value) {
            if (_core_Util_mjs__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(value) && value instanceof Neo.controller.Component) {
                // use the provided instance
                value.view = me;
            } else if ((value.prototype && value.prototype.constructor.isClass)|| _core_Util_mjs__WEBPACK_IMPORTED_MODULE_8__["default"].isString(value)) {
                value = Neo.create(value, {
                    view: me
                });
            } else if (value.ntype) {
                value.view = me;
                value = Neo.ntype(value);
            }

            return value.id;
        }

        return value;
    }

    /**
     * Triggered before the domListeners config gets changed.
     * @param {Object} value
     * @param {Object} oldValue
     * @private
     */
    beforeSetDomListeners(value, oldValue) {
        if (Neo.isObject(value)) {
            value = [value];
        }

        return value || [];
    }

    /**
     * Triggered before the keys config gets changed. Creates a KeyNavigation instance if needed.
     * @param {Object} value
     * @param {Object} oldValue
     * @private
     */
    beforeSetKeys(value, oldValue) {
        if (oldValue) {
            oldValue.destroy();
        }

        if (_core_Util_mjs__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(value)) {
            if (value instanceof _util_KeyNavigation_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]) {
                // use the provided instance
            } else if (value.constructor.isClass) {
                value = Neo.create(value);
            }  else {
                value = Neo.create(_util_KeyNavigation_mjs__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    keys: value
                });
            }
        }

        return value;
    }

    /**
     * Changes the value of a vdom object attribute or removes it in case it has no value
     * @param {String} key
     * @param {Array|Number|Object|String|null} value
     */
    changeVdomRootKey(key, value) {
        let me   = this,
            vdom = me.vdom;

        if (value) {
            me.getVdomRoot()[key] = value;
        } else {
            delete me.getVdomRoot()[key];
        }

        me.vdom = vdom;
    }

    /**
     * Creates the tooltip instances
     * @param {Array|Object} value
     * @private
     */
    createTooltips(value) {
        if (!Array.isArray(value)) {
            value = [value];
        }

        let me       = this,
            tooltips = [],
            tip;

        value.forEach(item => {
            // todo: check for existing tooltips

            tip = Neo.create('Neo.tooltip.Base', {
                appName    : me.appName,
                componentId: me.id,
                ...item
            });

            tooltips.push(tip);
        });

        me._tooltips = tooltips; // silent update
    }

    /**
     * Unregisters this instance from the ComponentManager
     * @param {Boolean} [updateParentVdom=false] true to remove the component from the parent vdom => real dom
     * @param {Boolean} [silent=false] true to update the vdom silently (useful for destroying multiple child items in a row)
     * todo: unregister events
     */
    destroy(updateParentVdom=false, silent=false) {
        let me = this,
            parent, parentVdom;

        if (updateParentVdom && me.parentId) {
            parent     = Neo.getComponent(me.parentId);
            parentVdom = parent.vdom;

            _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_9__["default"].removeVdomChild(parentVdom, me.id);
            parent[silent ? '_vdom' : 'vdom'] = parentVdom;
        }

        _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].unregister(this);

        super.destroy();
    }

    /**
     * Convenience shortcut for Neo.manager.Component.down
     * @param {Object|String} config
     * @returns {Neo.core.Base} The matching instance or null
     */
    down(config) {
        return _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].down(this.id, config);
    }

    /**
     * Calls focus() on the top level DOM node of this component or on a given node via id
     * @param {String} [id]
     */
    focus(id) {
        let me = this;

        // remote method access
        Neo.main.DomAccess.focus({
            id: id || me.id
        }).then(data => {
            // console.log('focus received: ' + id || me.id);
        }).catch(err => {
            console.log('Error attempting to receive focus for component', err, me);
        });
    }

    /**
     * Returns this.controller or the closest parent controller
     * @param {String} [ntype]
     * @returns {Neo.controller.Base|null}
     */
    getController(ntype) {
        let controller = this.controller,
            i, len, parents;

        if (controller && (!ntype || ntype === controller.ntype)) {
            return controller;
        }

        parents = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getParents(this);
        i       = 0;
        len     = parents.length;

        for (; i < len; i++) {
            if (parents[i].controller && (!ntype || ntype === parents[i].controller.ntype)) {
                return parents[i].controller;
            }
        }

        return null;
    }

    /**
     * Search vdom child nodes by id for a given vdom tree
     * @param {String} id
     * @param {Object} [vdom]
     * @returns {Object}
     */
    getVdomChild(id, vdom) {
        vdom = vdom || this.vdom;
        let child = null,
            i     = 0,
            len   = vdom.cn && vdom.cn.length,
            subChild;

        if (vdom.id === id) {
            return vdom;
        }

        if (vdom.cn) {
            for (; i < len; i++) {
                subChild = this.getVdomChild(id, vdom.cn[i]);
                if (subChild) {
                    child = subChild;
                    break;
                }
            }
        }

        return child;
    }

    /**
     * Can get called after the component got rendered. See the autoMount config as well.
     */
    mount() {
        let me = this,
            child, childIds, i, len;

        if (!me.vnode) {
            throw new Error('Component vnode must be generated before mounting, use Component.render()');
        }

        // In case the component was already mounted, got unmounted and received vdom changes afterwards,
        // a new render() call is mandatory since delta updates could not get applied.
        // We need to clear the hasUnmountedVdomChanges state for all child components
        if (me.hasUnmountedVdomChanges) {
            // todo: the hasUnmountedVdomChanges flag changes should happen on render
            me.hasUnmountedVdomChanges = false;

            childIds = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getChildIds(me.vnode);

            childIds.forEach(id => {
                child = Neo.getComponent(id);

                if (child) {
                    child._hasUnmountedVdomChanges = false; // silent update
                }
            });
            // end todo

            me.render(true);
        } else {
            // console.log('mount', me.parentId, me.id);

            Neo.currentWorker.promiseMessage('main', {
                action     : 'mountDom',
                id         : me.id,
                html       : me.vnode.outerHTML,
                parentId   : me.parentId,
                parentIndex: me.parentIndex
            }).then(() => {
                me.mounted = true;
            }).catch(err => {
                console.log('Error attempting to mount component', err, me);
            });
        }
    }

    /**
     * Triggered by manager.Focus
     * @name onFocusEnter
     * @function
     * @param {Array} path dom element ids upwards
     */

    /**
     * Triggered by manager.Focus
     * @name onFocusLeave
     * @function
     * @param {Array} path dom element ids upwards
     */

    /**
     * Triggered by manager.Focus
     * @name onFocusMove
     * @function
     * @param {Object} opts
     * @param {Array}  opts.newPath dom element ids upwards
     * @param {Array}  opts.oldPath dom element ids upwards
     */

    /**
     * Gets called from the render() promise success handler
     * @param {Object} data
     * @param {Boolean} autoMount Mount the DOM after the vnode got created
     * @private
     */
    onRender(data, autoMount) {
        let me  = this,
            app = Neo.apps[me.appName];

        me.rendering = false;

        if (!app.rendered) {
            app.rendering = false;
            app.rendered  = true;
            app.fire('render');
        }

        me.vnode = data;

        let childIds  = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getChildIds(data),
            i         = 0,
            len       = childIds.length,
            child;

        for (; i < len; i++) {
            child = Neo.getComponent(childIds[i]);

            if (child) {
                child.rendered = true;
            }
        }

        me._rendered = true; // silent update
        me.fire('rendered', me.id);

        console.log('rendered: ' + me.appName + ' ' + me.id, me);

        if (autoMount) {
            me.mounted = true;
        }
    }

    /**
     * Promise based vdom update
     * @param {Object} [vdom=this.vdom]
     * @param {Neo.vdom.VNode} [vnode= this.vnode]
     */
    promiseVdomUpdate(vdom=this.vdom, vnode=this.vnode) {
        let me = this;

        // todo: updateVdom() should handle this
        // It is important to keep the vdom tree stable to ensure that containers do not lose the references to their
        // child vdom trees. The if case should not happen, but in case it does, keeping the reference and merging
        // the content over seems to be the best strategy
        if (me._vdom !== vdom) {
            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].warn('vdom got replaced for: ' + me.id + '. Copying the content into the reference holder object');

            Object.keys(me._vdom).forEach(key => {
                delete me._vdom[key];
            });

            Object.assign(me._vdom, vdom);
        } else {
            me._vdom = vdom;
        }

        return new Promise((resolve, reject) => {
            if (me.mounted) {
                me.updateVdom(vdom, vnode, resolve, reject);
            } else {
                resolve();
            }
        });
    }

    /**
     * Either a string like 'color' or an array containing style attributes to remove
     * @param {String|Array} value camelCase only
     * @returns {Object} all styles of this.el
     */
    removeStyle(value) {
        if (typeof value === 'string') {
            value = [value];
        }

        let style    = this.style,
            doUpdate = false;

        Object.entries(style).forEach(key => {
            if (value.indexOf(key) > -1) {
                delete style[key];
                doUpdate = true;
            }
        });

        if (doUpdate) {
            this.style = style;
        }

        return style;
    }

    /**
     * Creates the vnode tree for this component and mounts the component in case
     * - you pass true for the mount param
     * - or the autoMount config is set to true
     * @param {Boolean} [mount] Mount the DOM after the vnode got created
     */
    render(mount) {
        let me        = this,
            autoMount = mount || me.autoMount,
            app       = Neo.apps[me.appName];

        me.rendering = true;

        if (!app.rendered) {
            app.rendering = true;
        }

        if (me.vdom) {
            Neo.vdom.Helper.create({
                autoMount  : autoMount,
                cls        : me.cls,
                parentId   : autoMount ? me.parentId    : undefined,
                parentIndex: autoMount ? me.parentIndex : undefined,
                style      : me.style,
                ...me.vdom
            }).then(data => {
                me.onRender(data, autoMount);
            }).catch(err => {
                console.log('Error attempting to render component', err, me);
            });
        }
    }

    /**
     * Change multiple configs at once, ensuring that all afterSet methods get all new assigned values
     * @param {Object} values={}
     * @param {Boolean} [silent=false]
     */
    set(values={}, silent=false) {
        let me   = this,
            vdom = me.vdom;

        me.silentVdomUpdate = true;

        super.set(values);

        me.silentVdomUpdate = false;

        if (silent) {
            me._vdom = vdom;
        } else {
            return me.promiseVdomUpdate();
        }
    }

    /**
     * Placeholder method for util.VDom.syncVdomIds to allow overriding (disabling) it
     * @param {Neo.vdom.VNode} [vnode=this.vnode]
     * @param {Object} [vdom=this.vdom]
     */
    syncVdomIds(vnode=this.vnode, vdom=this.vdom) {
        _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_9__["default"].syncVdomIds(vnode, vdom);
    }

    /**
     * Placeholder method for util.VDom.syncVdomIds to allow overriding (disabling) it
     * @param {Neo.vdom.VNode} [vnode=this.vnode]
     */
    syncVnodeTree(vnode=this.vnode) {
        let me    = this,
            debug = false,
            childVnode;

        if (debug) {
            let start = performance.now();
        }

        me.syncVdomIds();

        // delegate the latest node updates to all possible child components found inside the vnode tree
        _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getChildren(me).forEach(component => {
            childVnode = _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_10__["default"].findChildVnode(me.vnode, component.vdom.id);

            if (childVnode) {
                component._vnode = childVnode.vnode; // silent update

                if (!component.rendered) {
                    component._rendered = true;
                    component.fire('rendered', component.id);
                }

                component.mounted = true;
            } else {
                console.warn('syncVnodeTree: Could not replace the child vnode for', component.id);
            }
        });

        // console.log(me.vnode, me.mounted);

        // keep the vnode parent tree in sync
        _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getParents(me).forEach((component, index) => {
            // check for dynamically rendered components which get inserted into the component tree
            if (index === 0 && me.vnode.outerHTML) {
                // console.log('dyn item', me.vnode, me.parentIndex);
                component.vnode.childNodes.splice(me.parentIndex || 0, 0, me.vnode);
            }

            else if (!_util_VNode_mjs__WEBPACK_IMPORTED_MODULE_10__["default"].replaceChildVnode(component.vnode, me.vnode.id, me.vnode)) {
                // todo: can happen for dynamically inserted container items
                // console.warn('syncVnodeTree: Could not replace the parent vnode for', me.vnode.id, component);
            }
        });

        if (debug) {
            let end = performance.now();
            console.log('syncVnodeTree', me.id, end - start);
        }

    }

    /**
     * Removes the component DOM
     */
    unmount() {
        let me = this;

        Neo.currentWorker.promiseMessage('main', {
            action: 'updateDom',
            deltas: [{
                action: 'removeNode',
                id    : me.id
            }]
        }).then(() => {
            me.mounted = false;
        }).catch(err => {
            console.log('Error attempting to unmount component', err, me);
        });
    }

    /**
     * Convenience shortcut for Neo.manager.Component.up
     * @param {Object|String} config
     * @returns {Neo.core.Base} The matching instance or null
     */
    up(config) {
        return _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].up(this.id, config);
    }

    /**
     * Delta updates for the cls config. Gets called after the cls config gets changed in case the component is mounted.
     * @param {Array} cls
     * @param {Array} oldCls
     * @private
     */
    updateCls(cls, oldCls) {
        let me    = this,
            vnode = me.vnode;

        if (!_util_Array_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isEqual(cls, oldCls)) {
            if (vnode) {
                vnode.className = cls; // keep the vnode in sync
                me.vnode = vnode;
            }

            Neo.currentWorker.promiseMessage('main', {
                action: 'updateDom',
                deltas: [{
                    id : me.id,
                    cls: {
                        add   : Neo.util.Array.difference(cls, oldCls),
                        remove: Neo.util.Array.difference(oldCls, cls)
                    }
                }]
            }).then(() => {
                //console.log(me.vnode);
            }).catch(err => {
                console.log('Error attempting to update Component cls', err, me);
            });
        }
    }

    /**
     * Creates the style deltas for newValue & oldValue and applies them directly to the DOM.
     * @param newValue
     * @param oldValue
     * @private
     */
    updateStyle(newValue, oldValue) {
        let me    = this,
            delta = _util_Style_mjs__WEBPACK_IMPORTED_MODULE_7__["default"].compareStyles(newValue, oldValue),
            vnode = me.vnode;

        if (delta) {
            // console.log('updateStyle', 'new', newValue, 'old', oldValue, 'delta', delta);
            if (vnode) {
                vnode.style = newValue; // keep the vnode in sync
                me.vnode = vnode;
            }

            Neo.currentWorker.promiseMessage('main', {
                action: 'updateDom',
                deltas: [{
                    id   : me.id,
                    style: delta
                }]
            }).then(() => {
                // console.log('Component style updated');
            }).catch(err => {
                console.log('Error attempting to update component style', err, me);
            });
        }
    }

    /**
     * Gets called after the vdom config gets changed in case the component is already mounted (delta updates).
     * @param {Object} vdom
     * @param {Neo.vdom.VNode} vnode
     * @param {function} [resolve] used by promiseVdomUpdate()
     * @param {function} [reject] used by promiseVdomUpdate()
     * @private
     */
    updateVdom(vdom, vnode, resolve, reject) {
        let me = this;

        // console.log('updateVdom', me.id, Neo.clone(vdom, true), Neo.clone(vnode, true));
        // console.log('updateVdom', me.isVdomUpdating);

        if (me.isVdomUpdating) {
            me.needsVdomUpdate = true;
        } else {
            me.isVdomUpdating = true;

            Neo.vdom.Helper.update({
                vdom : vdom,
                vnode: vnode
            }).then(data => {
                // console.log('Component vnode updated', data.vnode);
                me.vnode          = data.vnode;
                me.isVdomUpdating = false;

                if (resolve) {
                    resolve();
                }

                if (me.needsVdomUpdate) {
                    me.needsVdomUpdate = false;
                    me.vdom = me.vdom;
                }
            }).catch(err => {
                console.log('Error attempting to update component dom', err, me);
                me.isVdomUpdating = false;

                if (reject) {
                    reject();
                }
            });
        }
    }
}

/**
 * manager.Focus fires the event when the component id is included inside the dom id path
 * @event focusEnter
 * @param {Array} path dom element ids upwards
 */

/**
 * manager.Focus fires the event when the component id is not included inside the dom id path
 * @event focusLeave
 * @param {Array} path dom element ids upwards
 */

/**
 * manager.Focus fires the event when the component id is included inside the dom id path, but the path itself changed
 * @event focusMove
 * @param {Object} opts
 * @param {Array}  opts.newPath dom element ids upwards
 * @param {Array}  opts.oldPath dom element ids upwards
 */

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/component/Button.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/Button.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Neo.component.Button
 * @extends Neo.component.Base
 */
class Button extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid values for iconPosition
         * @member {String[]} iconPositions=['top', 'right', 'bottom', 'left']
         * @private
         * @static
         */
        iconPositions: ['top', 'right', 'bottom', 'left']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.Button'
         * @private
         */
        className: 'Neo.component.Button',
        /**
         * @member {String} ntype='button'
         * @private
         */
        ntype: 'button',
        /**
         * @member {String[]} cls=['neo-button']
         */
        cls: ['neo-button'],
        /**
         * false calls Neo.Main.setRoute()
         * @member {Boolean} editRoute=true
         */
        editRoute: true,
        /**
         * Shortcut for domListeners={click:handler}
         * A string based value assumes that the handlerFn lives inside a ComponentController
         * @member {Function|String|null} handler_=null
         */
        handler_: null,
        /**
         * The scope (this pointer) inside the handler function.
         * Points to the button instance by default.
         * @member {Object|null} handlerScope=null
         */
        handlerScope: null,
        /**
         * The CSS class to use for an icon, e.g. 'fa fa-home'
         * @member {String|null} [iconCls_=null]
         */
        iconCls_: null,
        /**
         * The color to use for an icon, e.g. '#ff0000' [optional]
         * @member {String|null} iconColor_=null
         */
        iconColor_: null,
        /**
         * The position of the icon in case iconCls has a value.
         * Valid values are: 'top', 'right', 'bottom', 'left'
         * @member {String} iconPosition_='left'
         */
        iconPosition_: 'left',
        /**
         * The pressed state of the Button
         * @member {Boolean} pressed_=false
         */
        pressed_: false,
        /**
         * Change the browser hash value on click
         * @member {String|null} route_=null
         */
        route_: null,
        /**
         * The text displayed on the button [optional]
         * @member {String} text_=''
         */
        text_: '',
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            tag: 'button',
            cn : [
                {tag: 'span', cls: ['neo-button-glyph']},
                {tag: 'span', cls: ['neo-button-text']}
            ]
        }
    }}

    /**
     * Triggered after the handler config got changed
     * @param {String} value
     * @param {String} oldValue
     * @private
     */
    afterSetHandler(value, oldValue) {
        if (value) {
            let me           = this,
                domListeners = me.domListeners || [];

            domListeners.push({
                click: value,
                scope: me.handlerScope || me
            });

            me.domListeners = domListeners;
        }
    }

    /**
     * Triggered after the iconCls config got changed
     * @param {String} value
     * @param {String} oldValue
     * @private
     */
    afterSetIconCls(value, oldValue) {
        let me       = this,
            vdom     = me.vdom,
            iconNode = me.getVdomRoot().cn[0];

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(iconNode.cls, oldValue);

        if (!value || value === '') {
            iconNode.removeDom = true;
        } else {
            iconNode.removeDom = false;
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(iconNode.cls, value);
        }

        me.vdom = vdom;
    }

    /**
     * Triggered after the iconColor config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @private
     */
    afterSetIconColor(value, oldValue) {
        let me       = this,
            vdom     = me.vdom,
            iconNode = me.getVdomRoot().cn[0];

        if (!iconNode.style) {
            iconNode.style = {};
        }

        if (value === '') {
            value = null;
        }

        iconNode.style.color = value;
        me.vdom = vdom;
    }

    /**
     * Triggered after the iconPosition config got changed
     * @param {String} value
     * @param {String} oldValue
     * @private
     */
    afterSetIconPosition(value, oldValue) {
        let cls = this.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, 'icon-' + oldValue);
        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, 'icon-' + value);

        this.cls = cls;
    }

    /**
     * Triggered after the pressed config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @private
     */
    afterSetPressed(value, oldValue) {
        let cls = this.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"][value === true ? 'add' : 'remove'](cls, 'pressed');
        this.cls = cls;
    }

    /**
     * Triggered after the route config got changed
     * @param {String} value
     * @param {String} oldValue
     * @private
     */
    afterSetRoute(value, oldValue) {
        if (value) {
            let me           = this,
                domListeners = me.domListeners || [];

            domListeners.push({
                click: me.changeRoute,
                scope: me
            });

            me.domListeners = domListeners;
        }
    }

    /**
     * Triggered after the text config got changed
     * @param {String} value
     * @param {String} oldValue
     * @private
     */
    afterSetText(value, oldValue) {
        let me       = this,
            vdom     = me.vdom,
            vdomRoot = me.getVdomRoot(),
            textNode = vdomRoot.cn[1];

        if (value === '') {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(me._cls,      'no-text');
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(vdomRoot.cls, 'no-text');
            textNode.removeDom = true;
        } else {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(me._cls,      'no-text');
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(vdomRoot.cls, 'no-text');
            textNode.removeDom = false;
            textNode.innerHTML = value;
        }

        me.vdom = vdom;
    }

    /**
     * Converts the iconCls array into a string on beforeGet
     * @returns {String}
     * @private
     */
    beforeGetIconCls() {
        let iconCls = this._iconCls;

        if (Array.isArray(iconCls)) {
            return iconCls.join(' ');
        }

        return iconCls;
    }

    /**
     * Triggered before the iconCls config gets changed. Converts the string into an array if needed.
     * @param {Array|String|null} value
     * @param {Array|String|null} oldValue
     * @returns {Array}
     * @private
     */
    beforeSetIconCls(value, oldValue) {
        if (value && !Array.isArray(value)) {
            value = value.split(' ');
        }

        return value;
    }

    /**
     * Triggered before the iconPosition config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @private
     */
    beforeSetIconPosition(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'iconPosition');
    }

    /**
     * @private
     */
    changeRoute() {
        const me = this;

        if (me.editRoute) {
            Neo.Main.editRoute(this.route);
        } else {
            Neo.Main.setRoute({
                value: me.route
            });
        }
    }
}

Neo.applyClassConfig(Button);



/***/ }),

/***/ "./node_modules/neo.mjs/src/component/Label.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/Label.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Label; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * Convenience class to render a label with a text
 * @class Neo.component.Label
 * @extends Neo.component.Base
 */
class Label extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.Label'
         * @private
         */
        className: 'Neo.component.Label',
        /**
         * @member {String} ntype='label'
         * @private
         */
        ntype: 'label',
        /**
         * @member {String[]} cls=['neo-label']
         */
        cls: ['neo-label'],
        /**
         * @member {String} text_=''
         */
        text_: '',
        /**
         * @member {Object} _vdom={tag: 'label'}
         */
        _vdom: {
            tag: 'label'
        }
    }}

    /**
     * Triggered after the text config got changed
     * @param {String} value
     * @param {String} oldValue
     * @private
     */
    afterSetText(value, oldValue) {
        let vdom = this.vdom;
        vdom.html = value;
        this.vdom = vdom;
    }
}

Neo.applyClassConfig(Label);



/***/ }),

/***/ "./node_modules/neo.mjs/src/container/Base.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/container/Base.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _layout_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/Base.mjs */ "./node_modules/neo.mjs/src/layout/Base.mjs");
/* harmony import */ var _layout_Card_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Card.mjs */ "./node_modules/neo.mjs/src/layout/Card.mjs");
/* harmony import */ var _layout_Fit_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/Fit.mjs */ "./node_modules/neo.mjs/src/layout/Fit.mjs");
/* harmony import */ var _layout_HBox_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/HBox.mjs */ "./node_modules/neo.mjs/src/layout/HBox.mjs");
/* harmony import */ var _layout_VBox_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/VBox.mjs */ "./node_modules/neo.mjs/src/layout/VBox.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");









/**
 * @class Neo.container.Base
 * @extends Neo.component.Base
 */
class Base extends _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.container.Base'
         * @private
         */
        className: 'Neo.container.Base',
        /**
         * @member {String} ntype='container'
         * @private
         */
        ntype: 'container',
        /**
         * @member {String[]} cls=['neo-container']
         */
        cls: ['neo-container'],
        /**
         * @member {Object} itemDefaults_=null
         */
        itemDefaults_: null,
        /**
         * An array of config objects|instances|modules for each child component
         * @member {Object[]} items_=[]
         * @example
         * import Button      from '../component/Button.mjs';
         * import MyRedButton from 'myapp/MyRedButton.mjs';
         * import Toolbar     from '../container/Toolbar.mjs';
         *
         * let myButton = Neo.create(Button, {
         *     text: 'Button1'
         * });
         *
         * Neo.create(Toolbar, {
         *     //...
         *     items: [
         *         myButton,              // passed instance
         *         {
         *             ntype: 'button',   // by ntype
         *             text : 'Button 2'
         *         },
         *         {
         *             module: Button,    // by imported module
         *             text  : 'Button 3'
         *         },
         *         MyRedButton            // you can drop imported modules directly into the items array
         *     ]
         * });
         */
        items_: [],
        /**
         * @member {Object} layout_={ntype: 'vbox', align: 'stretch'}
         */
        layout_: {
            ntype: 'vbox',
            align: 'stretch'
        },
        /**
         * @member {Object} _vdom={cn: []}
         */
        _vdom: {
            cn: []
        }
    }}

    /**
     * Override this method to change the order configs are applied to this instance.
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     * @returns {Object} config
     */
    mergeConfig(...args) {
        let me     = this,
            config = super.mergeConfig(...args);

        // avoid any interference on prototype level
        // does not clone existing Neo instances

        if (config.itemDefaults) {
            me._itemDefaults = Neo.clone(config.itemDefaults, true, true);
            delete config.itemDefaults;
        }

        if (config.items) {
            me._items = Neo.clone(config.items, true, true);
            delete config.items;
        }

        return config;
    }

    /**
     *
     */
    onConstructed() {
        let me = this;

        // in case the Container does not have a layout config, the setter won't trigger
        me._layout = me.createLayout(me.layout);
        me._layout.applyRenderAttributes();

        super.onConstructed();

        me.parseItemConfigs(me.items);
        me.createItems();
    }

    /**
     * Inserts an item or array of items at the last index
     * @param {Object|Array} item
     * @returns {Neo.component.Base|Neo.component.Base[]}
     */
    add(item) {
        let me = this;
        return me.insert(me.items ? me.items.length : 0, item);
    }

    /**
     *
     * @param {Neo.layout.Base} value
     * @param {Neo.layout.Base} oldValue
     * @private
     */
    afterSetLayout(value, oldValue) {
        let me = this;

        if (me.rendered) {
            oldValue.removeRenderAttributes();
            value.applyRenderAttributes();

            me.items.forEach((item, index) => {
                oldValue.removeChildAttributes(item, index);
                value.applyChildAttributes(item, index);
            });
        }
    }

    /**
     *
     * @param {Object|String} value
     * @returns {Neo.layout.Base}
     * @private
     */
    beforeSetLayout(value) {
        return this.createLayout(value);
    }

    /**
     *
     * @private
     */
    createItems() {
        let me       = this,
            items    = me._items,
            defaults = me.itemDefaults,
            layout   = me.layout,
            vdom     = me.vdom,
            vdomRoot = me.getVdomRoot();

        items.forEach((item, index) => {
            if (item.constructor.isClass && item instanceof Neo.core.Base) {
                Object.assign(item, {
                    appName : me.appName,
                    parentId: me.id
                });
            } else if(item.isClass) {
                item = Neo.create(item, {
                    appName : me.appName,
                    parentId: me.id
                });
            } else if (typeof item === 'string') {
                item = Neo.ntype({
                    ntype  : 'component',
                    appName: me.appName,
                    vdom   : {innerHTML: item}
                });
            } else {
                if (defaults) {
                    Neo.assignDefaults(item, defaults);
                }

                if (item.module) {
                    item.className = item.module.prototype.className;
                }

                Object.assign(item, {
                    appName : me.appName,
                    parentId: me.id,
                    style   : item.style || {}
                });

                item = Neo[item.className ? 'create' : 'ntype'](item);
            }

            items[index] = item;

            layout.applyChildAttributes(item, index);

            vdomRoot.cn.push(item.vdom);
        });

        me.vdom = vdom;
    }

    /**
     *
     * @param {Object|String|Neo.layout.Base} value
     * @private
     * @returns {Neo.layout.Base}
     */
    createLayout(value) {
        let me = this;

        if (value) {
            if (value instanceof _layout_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] && value.isLayout) {
                value.containerId = me.id;
            } else {
                value = me.parseLayoutClass(value);
                value.containerId = me.id;
                value = Neo.ntype(value);
            }
        }

        return value;
    }

    /**
     * Destroys all components inside this.items before the super() call.
     */
    destroy() {
        this.items.forEach(item => {
            item.destroy();
        });

        super.destroy();
    }

    /**
     * Finds the index of a direct child component inside this.items.
     * @param {Neo.component.Base|String} itemId Either the item reference or the item id
     * @return {Number} -1 in case no match was found
     */
    indexOf(itemId) {
        let me  = this,
            i   = 0,
            len = me.items && me.items.length || 0;

        if (!Neo.isString(itemId)) {
            itemId = itemId.id;
        }

        for (; i < len; i++) {
            if (me.items[i].id === itemId) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Inserts an item or array of items at a specific index
     * @param {Number} index
     * @param {Object|Array} item
     * @returns {Neo.component.Base|Neo.component.Base[]}
     */
    insert(index, item) {
        let me    = this,
            items = me.items,
            vdom  = me.vdom,
            cn, i, len;

        if (Array.isArray(item)) {
            i   = 0;
            len = item.length;

            for (; i < len; i++) {
                // todo: render is async, ensure the order of items is correct

                // insert the array backwards
                item[i] = me.insert(item[len - 1], index);
            }
        } else if (typeof item === 'object') {
            if (item instanceof Neo.component.Base !== true) {
                if (item.module) {
                    item.className = item.module.prototype.className;
                }

                item = {
                    ...me.itemDefaults || {},

                    appName    : me.appName,
                    autoMount  : me.mounted,
                    parentId   : me.id,
                    parentIndex: index,

                    ...item
                };

                item = Neo[item.className ? 'create' : 'ntype'](item);
            }

            me.layout.applyChildAttributes(item, index);

            items.splice(index, 0, item);

            me.items = items;

            cn = vdom.cn || vdom.childNodes || vdom.children;

            cn.splice(index, 0, item.vdom);
            me.vdom = vdom;
        }

        return item;
    }

    /**
     * todo
     * Moves an existing item to a new index
     * @param {String} itemId
     * @param {Number} index
     * @returns {Neo.component.Base|Neo.component.Base[]}
     */
    moveTo(itemId, index) {
        let me           = this,
            currentIndex = me.indexOf(itemId);

        console.log(currentIndex);
    }

    parseItemConfigs(items) {
        let me = this;

        items.forEach(item => {
            Object.entries(item).forEach(([key, value]) => {
                if (key === 'items') {
                    me.parseItemConfigs(value);
                } else if (typeof value === 'string' && value.startsWith('@config:')) {
                    value = value.substr(8);

                    if (!me[value]) {
                        _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].logError('The used @config does not exist:', value, me);
                    } else {
                        item[key] = me[value];
                    }
                }
            });
        });
    }

    /**
     *
     * @param {Object|String} config
     * @private
     * @returns {Object} layoutConfig
     */
    parseLayoutClass(config) {
        if (Neo.isObject(config)) {
            if (config.ntype.indexOf('layout-') < 0) {
                config.ntype = 'layout-' + config.ntype;
            }
        }
        else if (config.indexOf('layout-') < 0) {
            config = {
                ntype: 'layout-' + config
            };
        } else {
            config = {
                ntype: config
            };
        }

        return config;
    }

    /**
     * Removes a container item by reference
     * @param {Neo.component.Base} component
     * @param {Boolean} [destroyItem=true]
     * @param {Boolean} [silent=false]
     */
    remove(component, destroyItem=true, silent=false) {
        let items = this.items,
            i     = 0,
            len   = items.length;

        for (; i < len; i++) {
            if (items[i].id === component.id) {
                this.removeAt(i, destroyItem, silent);
            }
        }
    }

    /**
     * Removes a container item at a given index
     * @param {Number} index
     * @param {Boolean} [destroyItem=true]
     * @param {Boolean} [silent=false]
     */
    removeAt(index, destroyItem=true, silent=false) {
        let me    = this,
            items = me.items,
            vdom  = me.vdom,
            cn, item;

        if (index >= items.length) {
            Neo.warn('Container.removeAt: index >= items.length. ' + me.id);
        } else {
            item = items[index];

            // console.log('remove item', item.id);

            items.splice(index, 1);

            cn = vdom.cn || vdom.childNodes || vdom.children;

            cn.splice(index, 1);

            me[silent ? '_vdom' : 'vdom'] = vdom;

            if (destroyItem) {
                item.destroy();
            }
        }
    }

    /**
     * Switches the position of 2 direct child items
     * @param {String} item1id
     * @param {String} item2id
     */
    switchItems(item1id, item2id) {
        let me         = this,
            item1Index = me.indexOf(item1id),
            item2Index = me.indexOf(item2id),
            vdom       = me.vdom;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_7__["default"].move(me.items,              item2Index, item1Index);
        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_7__["default"].move(me.getVdomItemsRoot(), item2Index, item1Index);

        me.vdom = vdom;
    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/container/Viewport.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/neo.mjs/src/container/Viewport.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Viewport; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");


/**
 * @class Neo.container.Viewport
 * @extends Neo.container.Base
 */
class Viewport extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.container.Viewport'
         * @private
         */
        className: 'Neo.container.Viewport',
        /**
         * @member {String} ntype='viewport'
         * @private
         */
        ntype: 'viewport',
        /**
         * true applies 'neo-body-viewport' to the document.body
         * @member {Boolean} applyBodyCls=true
         */
        applyBodyCls: true,
        /**
         * @member {String[]} cls=['neo-viewport']
         */
        cls: ['neo-viewport']
    }}

    onConstructed() {
        super.onConstructed();

        if (this.applyBodyCls) {
            Neo.main.DomAccess.applyBodyCls({cls: ['neo-body-viewport']});
        }
    }
}

Neo.applyClassConfig(Viewport);



/***/ }),

/***/ "./node_modules/neo.mjs/src/controller/Application.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/neo.mjs/src/controller/Application.mjs ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Application; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/controller/Base.mjs");


/**
 * @class Neo.controller.Application
 * @extends Neo.controller.Base
 */
class Application extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.controller.Application'
         * @private
         */
        className: 'Neo.controller.Application',
        /**
         * @member {Boolean} createMainView=true
         */
        createMainView: true,
        /**
         * @member {Neo.component.Base} mainView_=null
         */
        mainView_: null,
        /**
         * @member {String} name='MyApp'
         */
        name: 'MyApp',
        /**
         * @member {String} parentId='document.body'
         */
        parentId: 'document.body',
        /**
         * @member {Boolean} rendered=false
         * @private
         */
        rendered: false,
        /**
         * @member {Boolean} rendering=false
         * @private
         */
        rendering: false
    }}

    constructor(config) {
        super(config);

        let me = this;

        Neo.apps = Neo.apps || {};

        Neo.apps[me.name] = me;

        if (me.createMainView) {
            me.renderMainView(config);
        }
    }

    renderMainView() {
        let me = this;

        me.mainViewInstance = Neo.create(me.mainView, {
            appName   : me.name,
            autoRender: true,
            parentId  : me.parentId
        });
    }
}

Neo.applyClassConfig(Application);

// shortcut
Neo.app = config => Neo.create(Application, config);



/***/ }),

/***/ "./node_modules/neo.mjs/src/controller/Base.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/controller/Base.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/HashHistory.mjs */ "./node_modules/neo.mjs/src/util/HashHistory.mjs");



/**
 * @class Neo.controller.Base
 * @extends Neo.core.Base
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.controller.Base'
         * @private
         */
        className: 'Neo.controller.Base',
        /**
         * @member {String} ntype='controller'
         * @private
         */
        ntype: 'controller'
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].on('change', this.onHashChange, this);
    }

    /**
     * Placeholder method which gets triggered when the hash inside the browser url changes
     * @param {Object} value
     * @param {Object} oldValue
     * @param {String} hashString
     */
    onHashChange(value, oldValue, hashString) {

    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/controller/Component.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/neo.mjs/src/controller/Component.mjs ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/controller/Base.mjs");
/* harmony import */ var _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager/Component.mjs */ "./node_modules/neo.mjs/src/manager/Component.mjs");
/* harmony import */ var _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/DomEvent.mjs */ "./node_modules/neo.mjs/src/manager/DomEvent.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony import */ var _util_Function_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Function.mjs */ "./node_modules/neo.mjs/src/util/Function.mjs");






/**
 * @class Neo.controller.Component
 * @extends Neo.controller.Base
 */
class Component extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.controller.Component'
         * @private
         */
        className: 'Neo.controller.Component',
        /**
         * @member {String} ntype='view-controller'
         * @private
         */
        ntype: 'component-controller',
        /**
         * @member {Object} references=null
         * @private
         */
        references: null,
        /**
         * @member {Object} view_=null
         * @private
         */
        view_: null
    }}

    constructor(config) {
        super(config);

        let me = this;

        me.references = {};

        _util_Function_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].createSequence(me.view, 'onConstructed', me.onViewConstructed, me);
    }

    /**
     * Triggered when accessing the view config
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @private
     */
    beforeGetView(value, oldValue) {
        return Neo.get(value);
    }

    /**
     * Triggered before the view config gets changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @private
     */
    beforeSetView(value, oldValue) {
        return value.id;
    }

    /**
     *
     * @param {String} [ntype]
     * @returns {Neo.controller.Component|null}
     */
    getParent(ntype) {
        let me      = this,
            view    = me.view,
            parents = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getParents(view),
            i       = 0,
            len     = parents.length,
            controller;

        for (; i < len; i++) {
            controller = parents[i].controller;

            if (controller) {
                if (ntype) {
                    if (ntype === controller.ntype) {
                        return controller;
                    }
                } else {
                    return controller;
                }
            }
        }

        return null;
    }

    /**
     *
     * @param {String} handlerName
     * @returns {Neo.controller.Component|null}
     */
    getParentHandlerScope(handlerName) {
        let me      = this,
            view    = me.view,
            parents = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getParents(view),
            i       = 0,
            len     = parents.length,
            controller;

        for (; i < len; i++) {
            controller = parents[i].controller;

            if (controller && controller[handlerName]) {
                return controller;
            }
        }

        return null;
    }

    /**
     * todo: cleanup no longer existing references
     * todo: update changed references (e.g. container.remove() then container.add() using the same key)
     * @param {String} name
     * @returns {*}
     */
    getReference(name) {
        let me          = this,
            componentId = me.references[name],
            component;

        if (componentId) {
            component = Neo.getComponent(componentId);
        }

        if (!component) {
            component = me.view.down({reference: name});

            if (component) {
                me.references[name] = component.id;
            }
        }

        return component || null;
    }

    /**
     *
     * @param {Neo.component.Base} view
     */
    onViewConstructed(view) {
        let me = this,
            domListeners, eventHandler, fn, parentController;

        view = view || me.view;

        view.domListeners = Neo.clone(view.domListeners, true, true); // ensure there is no interference on prototype level
        domListeners = view.domListeners;

        if (domListeners) {
            if (!Array.isArray(domListeners)) {
                domListeners = [domListeners];
            }

            domListeners.forEach(domListener => {
                Object.entries(domListener).forEach(([key, value]) => {
                    eventHandler = null;

                    if (key !== 'scope' && key !== 'delegate') {
                        if (Neo.isString(value)) {
                            eventHandler = value;
                        } else if (Neo.isObject(value) && value.hasOwnProperty('fn') && Neo.isString(value.fn)) {
                            eventHandler = value.fn;
                        }

                        if (eventHandler) {
                            if (!me[eventHandler]) {
                                parentController = me.getParentHandlerScope(eventHandler);

                                if (!parentController) {
                                    _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].logError('Unknown domEvent handler for', view, eventHandler);
                                } else {
                                    fn               = parentController[eventHandler].bind(parentController);
                                    domListener[key] = fn;

                                    _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].updateListenerPlaceholder({
                                        componentId       : view.id,
                                        eventHandlerMethod: fn,
                                        eventHandlerName  : eventHandler,
                                        eventName         : key,
                                        scope             : parentController
                                    });
                                }
                            } else {
                                fn               = me[eventHandler].bind(me);
                                domListener[key] = fn;

                                _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].updateListenerPlaceholder({
                                    componentId       : view.id,
                                    eventHandlerMethod: fn,
                                    eventHandlerName  : eventHandler,
                                    eventName         : key,
                                    scope             : me
                                });
                            }
                        }
                    }
                });
            });
        }

        if (view.listeners) {
            Object.entries(view.listeners).forEach(([name, listener]) => {
                if (Array.isArray(listener)) {
                    listener.forEach(key => {
                        eventHandler = null;

                        if (Neo.isObject(key) && key.hasOwnProperty('fn') && Neo.isString(key.fn)) {
                            eventHandler = key.fn;

                            if (!me[eventHandler]) {
                                _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].logError('Unknown event handler for', view, eventHandler);
                            } else {
                                key.fn = me[eventHandler].bind(me);
                            }
                        }
                    });
                }
            });
        }

        if (view.items) {
            view.items.forEach(item => {
                if (!item.controller) {
                    me.onViewConstructed(item);
                }
            });
        }
    }

    /**
     *
     * @param {Object} config
     */
    parseConfig(config) {
        let me           = this,
            view         = config || me.view,
            domListeners = view.domListeners,
            eventHandler;

        if (domListeners) {
            if (!Array.isArray(domListeners)) {
                domListeners = [domListeners];
            }

            domListeners.forEach(domListener => {
                Object.entries(domListener).forEach(([key, value]) => {
                    eventHandler = null;

                    if (key !== 'scope' && key !== 'delegate') {
                        if (Neo.isString(value)) {
                            eventHandler = value;
                        } else if (Neo.isObject(value) && value.hasOwnProperty('fn') && Neo.isString(value.fn)) {
                            eventHandler = value.fn;
                        }

                        if (eventHandler) {
                            if (!me[eventHandler]) {
                                _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].logError('Unknown domEvent handler for', view, eventHandler);
                            } else {console.log('#', key, me.id);
                                console.log('parseConfig', eventHandler);
                                domListener[key] = me[eventHandler].bind(me);
                            }
                        }
                    }
                });
            });
        }

        if (view.listeners) {
            Object.entries(view.listeners).forEach(([key, value]) => {
                eventHandler = null;

                if (key !== 'scope' && key !== 'delegate') {
                    if (Neo.isString(value)) {
                        eventHandler = value;
                    } else if (Neo.isObject(value) && value.hasOwnProperty('fn') && Neo.isString(value.fn)) {
                        eventHandler = value.fn;
                    }

                    if (eventHandler) {
                        if (!me[eventHandler]) {
                            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].logError('Unknown event handler for', view, eventHandler);
                        } else {
                            view.listeners[key] = me[eventHandler].bind(me);
                        }
                    }
                }
            });
        }

        if (view.headers) {
            view.headers.forEach(header => {
                if (!header.controller) {
                    me.parseConfig(header);
                }
            });
        }

        if (view.items) {
            view.items.forEach(item => {
                if (!item.controller) {
                    me.parseConfig(item);
                }
            });
        }
    }
}

Neo.applyClassConfig(Component);



/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Base.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Base.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");


const configSymbol = Symbol.for('configSymbol'),
      isInstance   = Symbol('isInstance');

/**
 * The base class for (almost) all classes inside the Neo namespace
 * Exceptions are e.g. core.IdGenerator, vdom.VNode
 * @class Neo.core.Base
 */
class Base {
    /**
     * The return value will get applied to the class constructor
     * @returns {Object} staticConfig
     * @tutorial 02_ClassSystem
     */
    static getStaticConfig() {return {
        /**
         * Set this one to false in case you don't want to stick
         * to the "anti-pattern" to apply classes to the global Neo or App namespace
         * @member {Boolean} registerToGlobalNs=true
         * @private
         * @static
         */
        registerToGlobalNs: true
    }}

    /**
     * The return value will get applied to each class instance
     * @returns {Object} staticConfig
     * @tutorial 02_ClassSystem
     */
    static getConfig() {return {
        /**
         * The class name which will get mapped into the Neo or app namespace
         * @member {String} className='Neo.core.Base'
         * @private
         */
        className: 'Neo.core.Base',
        /**
         * The class shortcut-name to use for e.g. creating child components inside a JSON-format
         * @member {String} ntype='base'
         * @private
         */
        ntype: 'base',
        /**
         * Add mixins as an array of classNames, imported modules or a mixed version
         * @member {String[]|Neo.core.Base[]|null} mixins=null
         */
        mixins: null
    }}

    /**
     * Consumes the static getConfig() object
     * Applies the observable mixin if needed, grants remote access if needed
     * @param {Object} config
     */
    constructor(config) {
        config = config || {};

        let me = this;

        Object.defineProperties(me, {
            [configSymbol]: {
                configurable: true,
                enumerable  : false,
                value       : {},
                writable    : true
            },
            [isInstance]: {
                enumerable: false,
                value     : true
            }
        });

        me.createId(config.id || me.id);
        delete config.id;

        if (me.constructor.config) {
            delete me.constructor.config.id;
        }

        if (me.getStaticConfig('observable') || me.mixins && Neo.ns('Neo.core.Observable', me.mixins)) {
            me.initObservable(config);
        }

        me.initConfig(config);

        if (me.controller) {
            me.controller.parseConfig();
        }

        Object.defineProperty(me, 'configsApplied', {
            enumerable: false,
            value     : true
        });

        if (me.remote) {
            setTimeout(me.initRemote.bind(me), 1);
        }
    }

    /**
     * Gets triggered after all constructors are done
     * @tutorial 02_ClassSystem
     */
    onConstructed() {}

    /**
     * Gets triggered after onConstructed is done
     * @see {@link Neo.core.Base#onConstructed onConstructed}
     * @tutorial 02_ClassSystem
     */
    init() {}

    /**
     * Convenience method for beforeSet functions which test if a given value is inside a static array
     * @param {String|Number} value
     * @param {String|Number} oldValue
     * @param {String} name config name
     * @param {String} [staticName=name + 's'] name of the static config array
     */
    beforeSetEnumValue(value, oldValue, name, staticName = name + 's') {
        const values = this.getStaticConfig(staticName);

        if (!values.includes(value)) {
            Neo.logError('Supported values for ' + name + ' are:', values.join(', '), this);
            return oldValue;
        }

        return value;
    }

    /**
     * Uses the IdGenerator to create an id if a static one is not explicitly set.
     * Registers the instance to manager.Instance if this one is already created,
     * otherwise stores it inside a tmp map.
     * @param {String} id
     */
    createId(id) {
        let me = this;

        me.id = id || _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getId(me.ntype);

        if (Base.instanceManagerAvailable === true) {
            Neo.manager.Instance.register(me);
        } else {
            if (!Neo.idMap) {
                Neo.idMap = {};
            }

            Neo.idMap[me.id] = me;
        }
    }

    /**
     * Unregisters this instance from Neo.manager.Instance
     * and removes all object entries from this instance
     */
    destroy() {
        let me = this;

        if (Base.instanceManagerAvailable === true) {
            Neo.manager.Instance.unregister(me);
        } else if (Neo.idMap) {
            delete Neo.idMap[me.id];
        }

        Object.keys(me).forEach(key => {
            if (Object.getOwnPropertyDescriptor(me, key).writable) {
                delete me[key];
            }
        });
    }

    /**
     * Returns the value of a static config key or the staticConfig object itself in case no value is set
     * @param {String} [key] The key of a staticConfig defined inside static getStaticConfig
     * @returns {*}
     */
    getStaticConfig(key) {
        let cfg = this.constructor.staticConfig;
        return (key ? cfg[key] : cfg);
    }

    /**
     * Applies all class configs to this instance
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     */
    initConfig(config, preventOriginalConfig) {
        let me = this;

        Object.assign(me[configSymbol], me.mergeConfig(config, preventOriginalConfig));
        me.processConfigs();
    }

    /**
     *
     */
    processConfigs() {
        let me   = this,
            keys = Object.keys(me[configSymbol]);

        // We do not want to iterate over the keys, since 1 config can remove more than 1 key (beforeSetX, afterSetX)
        if (keys.length > 0) {
            // The hasOwnProperty check is intended for configs without a trailing underscore
            // => they could already got assigned inside an afterSet-method
            if (!me.hasOwnProperty(keys[0])) {
                me[keys[0]] = me[configSymbol][keys[0]];
            }

            // there is a delete call inside the config getter as well (Neo.mjs => autoGenerateGetSet())
            // we need to keep this one for configs, which do not use getters (no trailing underscore)
            delete me[configSymbol][keys[0]];

            me.processConfigs();
        }
    }

    /**
     * Does get triggered with a delay to ensure that Neo.workerId & Neo.worker.Manager are defined
     * Remote method access via promises
     */
    initRemote() {
        let me        = this,
            remote    = me.remote,
            className = me.className,
            origin;

        if (!me.singleton) {
            throw new Error('Remote method access only functional for Singleton classes ' + className);
        }

        if (!Neo.config.unitTestMode && Neo.isObject(remote)) {
            Object.entries(remote).forEach(([worker, methods]) => {
                if (Neo.workerId !== worker) {
                    origin = Neo.workerId === 'main' ? Neo.worker.Manager : Neo.currentWorker;

                    origin.sendMessage(worker, {
                        action   : 'registerRemote',
                        methods  : methods,
                        className: className
                    });
                }
            });
        }
    }

    /**
     * Override this method to change the order configs are applied to this instance.
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     * @returns {Object} config
     */
    mergeConfig(config, preventOriginalConfig) {
        let me   = this,
            ctor = me.constructor;

        if (!ctor.config) {
            throw new Error('Neo.applyClassConfig has not been run on ' + me.className);
        }

        if (!preventOriginalConfig) {
            me.originalConfig = Neo.clone(config, true, true);
        }

        return {...ctor.config, ...config};
    }

    /**
     * Change multiple configs at once, ensuring that all afterSet methods get all new assigned values
     * @param {Object} values={}
     */
    set(values={}) {
        let me = this;

        // instead of using:
        // me[configSymbol] = values;
        // we keep the Object instance (defined via Object.defineProperties() => non enumerable)

        Object.keys(me[configSymbol]).forEach(key => {
            delete me[configSymbol][key];
        });

        Object.assign(me[configSymbol], values);

        me.processConfigs();
    }

    /**
     * Sets the value of a static config by a given key
     * @param {String} key The key of a staticConfig defined inside static getStaticConfig
     * @param {*} value
     * @returns {Boolean} true in case the config exists and got changed
     */
    setStaticConfig(key, value) {
        let staticConfig = this.constructor.staticConfig;

        if (staticConfig.hasOwnProperty(key)) {
            staticConfig[key] = value;
            return true;
        }

        return false;
    }

    /**
     * <p>Enhancing the toString() method, e.g.</p>
     * `Neo.create('Neo.component.Button').toString() => "[object Neo.component.Button (neo-button-1)]"`
     * @returns {String}
     */
    get [Symbol.toStringTag]() {
        return `${this.className} (id: ${this.id})`;
    }

    /**
     * <p>Enhancing the instanceof method. Without this change:</p>
     * `Neo.collection.Base.prototype instanceof Neo.core.Base => true`
     * <p>With this change:</p>
     * `Neo.collection.Base.prototype instanceof Neo.core.Base => false`<br>
     * `Neo.create(Neo.collection.Base) instanceof Neo.core.Base => true`
     * @returns {Boolean}
     */
    static [Symbol.hasInstance](instance) {
        if (!instance) {
            return false;
        }

        return instance[isInstance] === true ? super[Symbol.hasInstance](instance) : false;
    }
}

Neo.applyClassConfig(Base);

Base.instanceManagerAvailable = false;



/***/ }),

/***/ "./node_modules/neo.mjs/src/core/IdGenerator.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/IdGenerator.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This class gets used by core.Base, so it can not extend it.
 * It could get simplified to just being an object (needs to manually get put into the Neo namespace in this case).
 * @class Neo.core.IdGenerator
 * @singleton
 */
class IdGenerator {
    static getStaticConfig() {return {
        /**
         * Set this one to false in case you don't want to stick
         * to the "anti-pattern" to apply classes to the global Neo or App namespace
         * @member {Boolean} registerToGlobalNs=true
         * @private
         * @static
         */
        registerToGlobalNs: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.IdGenerator'
         * @private
         */
        className: 'Neo.core.IdGenerator',
        /**
         * @member {String} ntype='id-generator'
         * @private
         */
        ntype: 'id-generator',
        /**
         * The default prefix for neo instance ids
         * @member {String} base='neo-'
         */
        base: 'neo-',
        /**
         * @member {Boolean} singleton='true
         * @private
         */
        singleton: true
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        let me = this;

        me.idCounter = {};

        // alias
        Neo.getId = me.getId.bind(me);
    }

    onConstructed() {}

    init() {}

    /**
     *
     * @param name
     * @returns {string}
     */
    getId(name) {
        name = name || 'neo';

        let me      = this,
            counter = me.idCounter,
            count   = counter[name] || 0;

        counter[name] = ++count;

        return me.base + (name === 'neo' ? '' : name + '-') + count;
    }
}

Neo.applyClassConfig(IdGenerator);

let instance = Neo.create(IdGenerator);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Logger.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Logger.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Logger
 * @extends Neo.core.Base
 * @singleton
 */
class Logger extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Logger'
         * @private
         */
        className: 'Neo.core.Logger',
        /**
         * @member {String} ntype='logger'
         * @private
         */
        ntype: 'logger',
        /**
         * Set this config to false to disable the logging
         * @member {boolean} enableLogs=true
         */
        enableLogs: true,
        /**
         * @member {String} level='log'
         * @private
         */
        level: 'log',
        /**
         * @member {boolean} enableLogs=true
         * @private
         */
        singleton: true
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);

        // aliases
        Neo.applyFromNs(Neo, this, {
            error   : 'error',
            info    : 'info',
            log     : 'log',
            logError: 'logError',
            warn    : 'warn'
        }, true);
    }

    /**
     *
     * @param value
     */
    error(value) {
        throw new Error(value);
    }

    /**
     *
     * @param args
     */
    log(...args) {
        this.level = 'log';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    info(...args) {
        this.level = 'info';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    logError(...args) {
        this.level = 'error';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    warn(...args) {
        this.level = 'warn';
        this.write(...args);
    }

    /**
     *
     * @param args
     * @private
     */
    write(...args) {
        if (this.enableLogs === true) {
            console[this.level](...args);
        }
    }
}

Neo.applyClassConfig(Logger);

let instance = Neo.create(Logger);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Observable.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Observable.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Observable; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Observable
 * @extends Neo.core.Base
 */
class Observable extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Observable'
         * @private
         */
        className: 'Neo.core.Observable',
        /**
         * @member {String} ntype='mixin-observable'
         * @private
         */
        ntype: 'mixin-observable',
        /**
         * @member {Boolean} mixin=true
         * @private
         */
        mixin: true
    }}

    initObservable(config) {
        let me = this,
            proto = me.__proto__,
            listeners;

        if (config.listeners) {
            me.listeners = config.listeners;
            delete config.listeners;
        }

        listeners = me.listeners;

        me.listeners = {};

        if (listeners) {
            me.addListener(listeners);
        }

        while (proto && proto.constructor.isClass) {
            if (proto.constructor.staticConfig.observable && !proto.constructor.listeners) {
                Object.assign(proto.constructor, {
                    addListener   : me.addListener,
                    fire          : me.fire,
                    listeners     : {},
                    on            : me.on,
                    removeListener: me.removeListener,
                    un            : me.un
                });
            }
            proto = proto.__proto__;
        }
    }

    /**
     *
     * @param {Object|String} name
     * @param {Object} [opts]
     * @param {Object} [scope]
     * @param {String} [eventId]
     * @param {Object} [data]
     * @param {Number} [order]
     * @returns {String} eventId
     */
    addListener(name, opts, scope, eventId, data, order) {
        let me = this,
            listener, existing, eventConfig;

        if (typeof name === 'object') {
            if (name.hasOwnProperty('scope')) {
                scope = name.scope;
                delete name.scope;
            }

            Object.entries(name).forEach(([key, value]) => {
                me.addListener(key, value, scope);
            });
        } else if (typeof opts === 'object') {
            scope = scope || opts.scope;
            listener = opts.fn;
            order = order || opts.order;
            eventId = eventId || opts.eventId;
        } else if (typeof opts === 'function') {
            listener = opts;
        } else if (typeof opts === 'string') {
            listener = opts; // VC hook, can get parsed after onConstructed in case the view uses the parent VC
        } else {
            throw new Error('Invalid addListener call: ' + name);
        }

        eventConfig = {
            fn    : listener,
            scope : scope,
            data  : data,
            id    : eventId || Neo.getId('event')
        };

        if (existing = me.listeners && me.listeners[name]) {
            existing.forEach(cfg => {
                if (cfg.id === eventId || (cfg.fn === listener && cfg.scope === scope)) {
                    throw new Error('Duplicate event handler attached: ' + name);
                }
            });

            if (typeof order === 'number') {
                existing.splice(order, 0, eventConfig);
            } else if (order === 'before') {
                existing.unshift(eventConfig);
            } else {
                existing.push(eventConfig);
            }
        } else {
            me.listeners[name] = [eventConfig];
        }

        return eventConfig.id;
    }

    /**
     *
     * @param name
     */
    fire(name) {
        let me        = this,
            args      = [].slice.call(arguments, 1),
            listeners = me.listeners,
            eventConfig, events, i, len;

        if (listeners && listeners[name]) {
            events = [...listeners[name]];
            len    = events.length;

            for (i = 0; i < len; i++) {
                eventConfig = events[i];

                eventConfig.fn.apply(eventConfig.scope || me, eventConfig.data ? args.concat(eventConfig.data) : args);
            }
        }
    }

    /**
     *
     * @param name
     * @param eventId
     */
    removeListener(name, eventId) {
        if (Neo.isString(eventId)) {
            let listeners   = this.listeners[name],
                match       = false;

            listeners.forEach((eventConfig, idx) => {
                if (eventConfig.id === eventId) {
                    return match = idx;
                }
            });

            if (match !== false) {
                listeners.splice(match, 1);
            }
        }
    }

    // removeAllListeners: function(name) {

    // },

    // suspendListeners: function(queue) {

    // },

    // resumeListeners: function() {

    // }

    /**
     * Alias for addListener
     * @param {Object|String} name
     * @param {Object} [opts]
     * @param {Object} [scope]
     * @param {String} [eventId]
     * @param {Object} [data]
     * @param {Number} [order]
     * @returns {String} eventId
     */
    on(...args) {
        return this.addListener(...args);
    }

    /**
     * Alias for removeListener
     * @param name
     * @param eventId
     */
    un(...args) {
        this.removeListener(...args);
    }
}

Neo.applyClassConfig(Observable);



/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Util.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Util.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Util
 * @extends Neo.core.Base
 */
class Util extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * A regex to remove camel case syntax
         * @member {RegExp} decamelRegEx=/([a-z])([A-Z])/g
         * @private
         * @static
         */
        decamelRegEx: /([a-z])([A-Z])/g
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Util'
         * @private
         */
        className: 'Neo.core.Util',
        /**
         * @member {String} ntype='core-util'
         * @private
         */
        ntype: 'core-util',
    }}

    /**
     * Converts a syles object which can use camelcase syntax into a styles string
     * @param {Object} styles The styles object
     * @returns {String} The styles string (DOM ready)
     */
    static createStyles(styles) {
        let style = '';

        Object.entries(styles).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                style += Util.decamel(key) + ':' + value + ';';
            }
        });

        return style;
    }

    /**
     * Makes the first character of a string uppercase
     * @param {String} string
     * @returns {Boolean|String} Returns false for non string inputs
     */
    static capitalize(string) {
        return Util.isString(string) && string[0].toUpperCase() + string.slice(1);
    }

    /**
     * Transforms all uppercase characters of a string into lowercase.
     * Does not touch special characters.
     * @param {String} value The input containing uppercase characters
     * @returns {String} The lowercase output
     */
    static decamel(value) {
        return value.replace(Util.decamelRegEx, '$1-$2').toLowerCase();
    }

    /**
     * Transforms a styles string into a styles object using camelcase syntax
     * @param {String} string The styles string to parse
     * @returns {Object} The camelcase styles object
     */
    static createStyleObject(string) {
        if (!string) {
            return null;
        }

        let parts;

        // split(';') does fetch semicolons inside brackets
        // -> background-image: "url('data:image/png;base64,...

        // TODO: Cache all regex
        return string.split(/;(?=[^\)]*(?:\(|$))/g).reduce((obj, el) => {
            // we have to split by the first colon only
            // -> background-image: url('http://example.com/image.png')
            parts = el.split((/:(.+)/)).map(function (x) {
                let num = parseFloat(x);

                return x == num ? num : x.trim();
            });

            if (parts[0] !== '') {
                parts[0] = parts[0].replace(/-([a-z])/g, (str, letter) => {
                    return letter.toUpperCase();
                });
                obj[parts[0]] = parts[1];
            }
            return obj;
        }, {});
    }

    /**
     * Returns true if the passed value is an array
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isArray(value) {
        return Array.isArray(value)
    }

    /**
     * Returns true if the passed value is a boolean
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isBoolean(value) {
        return typeof value === 'boolean';
    }

    /**
     * Returns true if the passed value is not undefined
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isDefined(value) {
        return typeof value !== 'undefined';
    }

    /**
     * Returns true if the passed value is an empty Array, Object or String
     * @param {Array|Object|String} value The value to test
     * @returns {Boolean}
     */
    static isEmpty(value) {
        if (Array.isArray(value)) {
            return value.length === 0;
        }

        if (Util.isObject(value)) {
            return Object.keys(value).length === 0;
        }

        if (Util.isString(value)) {
            return value === '';
        }

        return false;
    }

    /**
     * Returns true if the passed value is a function
     * @param {Function} value The value to test
     * @returns {Boolean}
     */
    static isFunction(value) {
        return typeof value === 'function';
    }

    /**
     * Returns true if the passed value is a number. Returns false for non-finite numbers
     * @param {Number} value The value to test
     * @returns {Boolean}
     */
    static isNumber(value){
        return typeof value === 'number' && isFinite(value);
    }

    /**
     * Returns true if the passed value is an object
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isObject(value) {
        return value !== null && typeof value === 'object' && !Array.isArray(value);
    }

    /**
     * Returns true if the passed value is a string
     * @param {String} value The value to test
     * @returns {Boolean}
     */
    static isString(value) {
        return typeof value === 'string';
    }

    /**
     * Converts any iterable (strings, numeric indices and a length property) into a true array
     * @param {Object|String} iterable
     * @param {Number} [start=0] start index
     * @param {Number} [end=iterable.length] end index
     * @returns {Array}
     */
    static toArray(iterable, start, end) {
        let len;

        if (!iterable || !(len = iterable.length)) {
            return [];
        }

        if (typeof iterable === 'string') {
            return iterable.split('');
        }

        return Array.prototype.slice.call(iterable, start || 0, end || len);
    }
}

Neo.applyClassConfig(Util);

// aliases
Neo.applyFromNs(Neo, Util, {
    createStyleObject: 'createStyleObject',
    createStyles     : 'createStyles',
    capitalize       : 'capitalize',
    decamel          : 'decamel',
    isArray          : 'isArray',
    isBoolean        : 'isBoolean',
    isDefined        : 'isDefined',
    isEmpty          : 'isEmpty',
    isFunction       : 'isFunction',
    isNumber         : 'isNumber',
    isObject         : 'isObject',
    isString         : 'isString',
    toArray          : 'toArray'
}, true);

/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ }),

/***/ "./node_modules/neo.mjs/src/core/_export.mjs":
/*!***************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/_export.mjs ***!
  \***************************************************/
/*! exports provided: Base, Logger, Observable, Util */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Logger_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _Logger_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Observable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _Observable_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util.mjs */ "./node_modules/neo.mjs/src/core/Util.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return _Util_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]; });








/***/ }),

/***/ "./node_modules/neo.mjs/src/layout/Base.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/layout/Base.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * The base class for all other layouts.
 * Use it directly in case you want to create a container without a layout.
 * @class Neo.layout.Base
 * @extends Neo.core.Base
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.layout.Base'
         * @private
         */
        className: 'Neo.layout.Base',
        /**
         * @member {String} ntype='layout-base'
         * @private
         */
        ntype: 'layout-base',
        /**
         * The Id of the Container instance this layout is bound to
         * @member {?String} containerId=null
         * @private
         */
        containerId: null,
        /**
         * Identifier for all classes that extend layout.Base
         * @member {Boolean} isLayout=true
         * @private
         */
        isLayout: true
    }}

    /**
     * Placeholder Method
     * @param {Neo.component.Base} item
     * @private
     */
    applyChildAttributes(item) {}

    /**
     * Placeholder Method
     * @private
     */
    applyRenderAttributes() {}

    /**
     * Placeholder Method
     * @param {Neo.component.Base} item
     * @private
     */
    removeChildAttributes(item) {}

    /**
     * Placeholder Method
     * @private
     */
    removeRenderAttributes() {}
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/layout/Card.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/layout/Card.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/layout/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Neo.layout.Card
 * @extends Neo.layout.Base
 */
class Card extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /*
         * The name of the CSS class for an active item inside the card layout
         * @member activeItemCls
         * @static
         */
        activeItemCls: 'active-item',
        /*
         * The name of the CSS class for an inactive item inside the card layout
         * @member inactiveItemCls
         * @static
         */
        inactiveItemCls: 'inactive-item',
        /*
         * The name of the CSS class for an item inside the card layout
         * @member itemCls
         * @static
         */
        itemCls: 'neo-layout-card-item'
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.layout.Card'
         * @private
         */
        className: 'Neo.layout.Card',
        /**
         * @member {String} ntype='layout-card'
         * @private
         */
        ntype: 'layout-card',
        /*
         * The item index of the card, which is currently active.
         * Change this value to activate a different card.
         * @member {Number} activeIndex_=0
         */
        activeIndex_: 0
    }}

    /**
     * Modifies the CSS classes of the container items this layout is bound to.
     * Automatically gets triggered after changing the value of activeIndex.
     * @param value
     * @param oldValue
     * @private
     */
    afterSetActiveIndex(value, oldValue) {
        let me        = this,
            container = Neo.getComponent(me.containerId),
            sCfg      = me.getStaticConfig(),
            isActiveIndex, cls, items;

        if (container && container.rendered) {
            items = container.items;

            if (!items[value]) {
                Neo.error('Trying to activate a non existing card', value, items);
            }

            items.forEach((item, index) => {
                cls           = item.cls;
                isActiveIndex = index === value;

                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, isActiveIndex ? sCfg.inactiveItemCls : sCfg.activeItemCls);
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(   cls, isActiveIndex ? sCfg.activeItemCls   : sCfg.inactiveItemCls);

                item.cls = cls;
            });
        }
    }

    /**
     * Initially sets the CSS classes of the container items this layout is bound to.
     * @param child
     * @param index
     */
    applyChildAttributes(child, index) {
        let me       = this,
            sCfg     = me.getStaticConfig(),
            childCls = child.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(childCls, sCfg.itemCls);
        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(childCls, me.activeIndex === index ? sCfg.activeItemCls : sCfg.inactiveItemCls);

        child.cls = childCls;
    }

    /**
     * Applies CSS classes to the container this layout is bound to
     */
    applyRenderAttributes() {
        let me        = this,
            container = Neo.getComponent(me.containerId),
            cls       = container && container.cls;

        if (!container) {
            Neo.logError('layout.Card: applyRenderAttributes -> container not yet created', me.containerId);
        }

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls || [], 'neo-layout-card');

        container.cls = cls;
    }

    /**
     * Removes all CSS rules from the container this layout is bound to.
     * Gets called when switching to a different layout.
     */
    removeRenderAttributes() {
        let me        = this,
            container = Neo.getComponent(me.containerId),
            cls       = container && container.cls;

        if (!container) {
            Neo.logError('layout.Card: removeRenderAttributes -> container not yet created', me.containerId);
        }

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, 'neo-layout-card');

        container.cls = cls;
    }
}

Neo.applyClassConfig(Card);



/***/ }),

/***/ "./node_modules/neo.mjs/src/layout/Fit.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/layout/Fit.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fit; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/layout/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Neo.layout.Fit
 * @extends Neo.layout.Base
 */
class Fit extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.layout.Fit'
         * @private
         */
        className: 'Neo.layout.Fit',
        /**
         * @member {String} ntype='layout-fit'
         * @private
         */
        ntype: 'layout-fit'
    }}

    /**
     * Initially sets the CSS classes of the container items this layout is bound to.
     * @param {Neo.component.Base} child
     * @param {Number} index
     */
    applyChildAttributes(child, index) {
        if (!child.ignoreLayout) {
            child.cls = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].union(child.cls, 'neo-layout-fit-item');
        }
    }

    /**
     * Applies CSS classes to the container this layout is bound to
     */
    applyRenderAttributes() {
        let me        = this,
            container = Neo.getComponent(me.containerId),
            cls       = container && container.cls;

        if (!container) {
            Neo.logError('layout.Fit: applyRenderAttributes -> container not yet created', me.containerId);
        }

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls || [], 'neo-layout-fit');

        container.cls = cls;
    }

    /**
     * Removes all CSS rules from the container this layout is bound to.
     * Gets called when switching to a different layout.
     */
    removeRenderAttributes() {
        let me        = this,
            container = Neo.getComponent(me.containerId),
            cls       = container && container.cls;

        if (!container) {
            Neo.logError('layout.Fit: removeRenderAttributes -> container not yet created', me.containerId);
        }

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, 'neo-layout-fit');

        container.cls = cls;
    }
}

Neo.applyClassConfig(Fit);



/***/ }),

/***/ "./node_modules/neo.mjs/src/layout/Flexbox.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/layout/Flexbox.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Flexbox; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/layout/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Neo.layout.Flexbox
 * @extends Neo.layout.Base
 */
class Flexbox extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid values for align
         * @member {String[]} alignValues=['center', 'end', 'start', 'stretch', null]
         * @private
         * @static
         */
        alignValues: ['center', 'end', 'start', 'stretch', null],
        /**
         * Valid values for direction
         * @member {String[]} directionValues=['column', 'column-reverse', 'row', 'row-reverse', null]
         * @private
         * @static
         */
        directionValues: ['column', 'column-reverse', 'row', 'row-reverse', null],
        /**
         * Valid values for pack
         * @member {String[]} packValues=['center', 'end', 'start', null]
         * @private
         * @static
         */
        packValues: ['center', 'end', 'start', null],
        /**
         * Valid values for wrap
         * @member {String[]} wrapValues=['nowrap', 'wrap', 'wrap-reverse']
         * @private
         * @static
         */
        wrapValues: ['nowrap', 'wrap', 'wrap-reverse'],
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.layout.Flexbox'
         * @private
         */
        className: 'Neo.layout.Flexbox',
        /**
         * @member {String} ntype='layout-flexbox'
         * @private
         */
        ntype: 'layout-flexbox',
        /**
         * Valid values: 'center', 'end', 'start', 'stretch', null
         * @member {String|null} align_=null
         */
        align_: null,
        /**
         * Valid values: 'column', 'column-reverse', 'row', 'row-reverse', null
         * @member {String|null} direction_=null
         */
        direction_: null,
        /**
         * Valid values: 'center', 'end', 'start', null
         * @member {String|null} pack_=null
         */
        pack_: null,
        /**
         * CSS className prefix
         * @member {String} prefix='neo-flex-'
         */
        prefix: 'neo-flex-',
        /**
         * Valid values: nowrap, wrap, wrapreverse
         * @member {String} wrap_='nowrap'
         */
        wrap_: 'nowrap'
    }}

    /**
     * Updates the Container CSS cls after "align" gets changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @private
     */
    afterSetAlign(value, oldValue) {
        this.updateInputValue(value, oldValue, 'align');
    }

    /**
     * Updates the Container CSS cls after "direction" gets changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @private
     */
    afterSetDirection(value, oldValue) {
        this.updateInputValue(value, oldValue, 'direction');
    }

    /**
     * Updates the Container CSS cls after "pack" gets changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @private
     */
    afterSetPack(value, oldValue) {
        this.updateInputValue(value, oldValue, 'pack');
    }

    /**
     * Updates the Container CSS cls after "wrap" gets changed
     * @param {String} value
     * @param {String} oldValue
     * @private
     */
    afterSetWrap(value, oldValue) {
        this.updateInputValue(value, oldValue, 'wrap');
    }

    /**
     * Applies the flex value to an item of the container this layout is bound to
     * @param {Object} item
     */
    applyChildAttributes(item) {
        let style = item.style || {};

        style.flex = style.flex || item.flex || (this.align === 'stretch' ? 1 : '0 1 auto');
        item.style = style;
    }

    /**
     * Applies CSS classes to the container this layout is bound to
     */
    applyRenderAttributes() {
        let me        = this,
            container = Neo.getComponent(me.containerId),
            prefix    = me.prefix,
            cls       = container && container.cls;

        if (!container) {
            Neo.logError('layout.Flexbox: applyRenderAttributes -> container not yet created', me.containerId);
        }

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls || [], prefix + 'container');

        if (me.align) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, prefix + 'align-' + me.align);
        }
        if (me.direction) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, prefix + 'direction-' + me.direction);
        }
        if (me.pack) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, prefix + 'pack-' + me.pack);
        }
        if (me.wrap) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, prefix + 'wrap-' + me.wrap);
        }

        container.cls = cls;
    }

    /**
     * Checks if the new value for "align" is valid
     * @param {String|null} value
     * @param {String|null} oldValue
     * @private
     * @returns {String|null} value
     */
    beforeSetAlign(value, oldValue) {
        return this.testInputValue(value, oldValue, 'alignValues', 'align');
    }

    /**
     * Checks if the new value for "direction" is valid
     * @param {String|null} value
     * @param {String|null} oldValue
     * @private
     * @returns {String|null} value
     */
    beforeSetDirection(value, oldValue) {
        return this.testInputValue(value, oldValue, 'directionValues', 'direction');
    }

    /**
     * Checks if the new value for "pack" is valid
     * @param {String|null} value
     * @param {String|null} oldValue
     * @private
     * @returns {String|null} value
     */
    beforeSetPack(value, oldValue) {
        return this.testInputValue(value, oldValue, 'packValues', 'pack');
    }

    /**
     * Checks if the new value for "wrap" is valid
     * @param {String} value
     * @param {String} oldValue
     * @private
     * @returns {String} value
     */
    beforeSetWrap(value, oldValue) {
        return this.testInputValue(value, oldValue, 'wrapValues', 'wrap');
    }

    /**
     * Removes all CSS rules from an container item this layout is bound to.
     * Gets called when switching to a different layout.
     * @param item
     * @private
     */
    removeChildAttributes(item) {
        let style = item.style || {};

        style.flex = item.flex || null;
        item.style = style;
    }

    /**
     * Removes all CSS rules from the container this layout is bound to.
     * Gets called when switching to a different layout.
     * @private
     */
    removeRenderAttributes() {
        let me        = this,
            container = Neo.getComponent(me.containerId),
            prefix    = me.prefix,
            cls       = container && container.cls;

        if (!container) {
            Neo.logError('layout.Flexbox: removeRenderAttributes -> container not yet created', me.containerId);
        }

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, prefix + 'container');

        if (me.align) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, prefix + 'align-' + me.align);
        }
        if (me.direction) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, prefix + 'direction-' + me.direction);
        }
        if (me.pack) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, prefix + 'pack-' + me.pack);
        }
        if (me.wrap) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, prefix + 'wrap-' + me.wrap);
        }

        container.cls = cls;
    }

    /**
     * Checks if the new value for propertyName is valid
     * @param {String|null} value
     * @param {String|null} oldValue
     * @param {String} validValuesName
     * @param {String} propertyName
     * @private
     * @returns {String|null} value
     */
    testInputValue(value, oldValue, validValuesName, propertyName) {
        const validValues = this.getStaticConfig(validValuesName);

        if (!_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].hasItem(validValues, value)) {
            Neo.logError(this.containerId, '-> layout: supported values for "' + propertyName + '" are' , validValues);
            return oldValue;
        }

        return value;
    }

    /**
     * Updates the Container CSS cls
     * @param {String|null} value
     * @param {String|null} oldValue
     * @param {String} propertyName
     * @private
     */
    updateInputValue(value, oldValue, propertyName) {
        let me        = this,
            container = Neo.getComponent(me.containerId),
            prefix    = me.prefix,
            cls       = container && container.cls;

        if (container && container.rendered) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, prefix + propertyName + '-' + oldValue);

            if (value !== null) {
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, prefix + propertyName + '-' + value);
            }

            container.cls = cls;
        }
    }
}

Neo.applyClassConfig(Flexbox);



/***/ }),

/***/ "./node_modules/neo.mjs/src/layout/HBox.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/layout/HBox.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HBox; });
/* harmony import */ var _Flexbox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Flexbox.mjs */ "./node_modules/neo.mjs/src/layout/Flexbox.mjs");


/**
 * @class Neo.layout.HBox
 * @extends Neo.layout.Flexbox
 */
class HBox extends _Flexbox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.layout.HBox'
         * @private
         */
        className: 'Neo.layout.HBox',
        /**
         * @member {String} ntype='layout-hbox'
         * @private
         */
        ntype: 'layout-hbox',
        /**
         * @member {String} direction='row'
         * @private
         */
        direction: 'row'
    }}

    /**
     * Applies the flex value to an item of the container this layout is bound to
     * @param {Object} item
     */
    applyChildAttributes(item) {
        // Do not apply flex if fixed width
        if (!item.width) {
            super.applyChildAttributes(item);
        }
    }
}

Neo.applyClassConfig(HBox);



/***/ }),

/***/ "./node_modules/neo.mjs/src/layout/VBox.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/layout/VBox.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VBox; });
/* harmony import */ var _Flexbox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Flexbox.mjs */ "./node_modules/neo.mjs/src/layout/Flexbox.mjs");


/**
 * @class Neo.layout.VBox
 * @extends Neo.layout.Flexbox
 */
class VBox extends _Flexbox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.layout.VBox'
         * @private
         */
        className: 'Neo.layout.VBox',
        /**
         * @member {String} ntype='layout-vbox'
         * @private
         */
        ntype: 'layout-vbox',
        /**
         * @member {String} direction='column'
         * @private
         */
        direction: 'column'
    }}

    /**
     * Applies the flex value to an item of the container this layout is bound to
     * @param {Object} item
     */
    applyChildAttributes(item) {
        // Do not apply flex if fixed height
        if (!item.height) {
            super.applyChildAttributes(item);
        }
    }
}

Neo.applyClassConfig(VBox);



/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/Base.mjs":
/*!***************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/Base.mjs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");


/**
 * Abstract base class for the other manager classes
 * @class Neo.manager.Base
 * @extends Neo.collection.Base
 */
class Base extends _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]{
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Base'
         * @private
         */
        className: 'Neo.manager.Base',
        /**
         * @member {String} ntype='base-manager'
         * @private
         */
        ntype: 'base-manager'
    }}

    /**
     *
     * @param {Number|String} id
     * @returns {Object}
     */
    getById(id) {
        return this.get(id);
    }

    /**
     *
     * @param {Object} item
     */
    register(item) {
        let me = this;

        if (me.get(item.id)) {
            Neo.logError('Trying to create an item with an already existing id', item, me.get(item.id));
        } else {
            me.push(item);
        }
    }

    /**
     *
     * @param {Object} item
     */
    unregister(item) {
        this.remove(item);
    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/Component.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/Component.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/manager/Base.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");
/* harmony import */ var _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/VNode.mjs */ "./node_modules/neo.mjs/src/util/VNode.mjs");




/**
 * @class Neo.manager.Component
 * @extends Neo.manager.Base
 * @singleton
 */
class Component extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Component'
         * @private
         */
        className: 'Neo.manager.Component',
        /**
         * @member {String} ntype='component-manager'
         * @private
         */
        ntype: 'component-manager',
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);
        Neo.getComponent = this.getById.bind(this); // alias
    }

    /**
     * Returns the first component which matches the config-selector moving down the component items tree
     * @param {String} componentId
     * @param {Object|String} config
     * @returns {Neo.component.Base|null}
     */
    down(componentId, config) {
        let me          = this,
            component   = me.getById(componentId),
            matchArray  = [],
            returnValue = null,
            i           = 0,
            len         = component.items && component.items.length || 0,
            configArray, configLength;

        if (Neo.isString(config)) {
            config = {
                ntype: config
            };
        }

        configArray  = Object.entries(config);
        configLength = configArray.length;

        configArray.forEach(([key, value]) => {
            if (component.hasOwnProperty(key) && component[key] === value) {
                matchArray.push(true);
            }
        });

        if (matchArray.length === configLength) {
            return component;
        }

        for (; i < len; i++) {
            returnValue = me.down(component.items[i].id, config);
            if (returnValue !== null) {
                return returnValue;
            }
        }

        return null;
    }

    /**
     *
     * @param {Array} path
     * @returns {String|null} the component id in case there is a match
     */
    findParentComponent(path) {
        let me  = this,
            i   = 0,
            len = path && path.length || 0,
            id;

        for (; i < len; i++) {
            id = path[i];

            if (id && me.has(id)) {
                return id;
            }
        }

        return null;
    }

    /**
     * todo: replace all calls of this method to calls using the util.VNode class
     * Get the ids of all child nodes of the given vnode
     * @param vnode
     * @param childIds
     * @returns {Array} childIds
     */
    getChildIds(vnode, childIds) {
        return _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getChildIds(vnode, childIds);
    }

    /**
     * Returns all child components found inside the vdom tree
     * @param {Neo.component.Base} component
     * @returns {Neo.component.Base[]} childComponents
     */
    getChildren(component) {
        let childComponents = [],
            childNodes      = _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getChildIds(component.vnode),
            childComponent;

        childNodes.forEach(node => {
            childComponent = this.get(node);

            if (childComponent) {
                childComponents.push(childComponent);
            }
        });

        return childComponents;
    }

    /**
     * Returns an Array containing the ids of all parent components for a given component
     * @param {Neo.component.Base} component
     * @returns {String[]} parentIds
     */
    getParentIds(component) {
        let parentIds = [];

        while (component && component.parentId) {
            component = this.getById(component.parentId);

            if (component) {
                parentIds.push(component.id);
            }
        }

        return parentIds;
    }

    /**
     *
     * @param {Array} path
     * @returns {Array}
     */
    getParentPath(path) {
        let me            = this,
            componentPath = [],
            i             = 0,
            len           = path && path.length || 0;

        for (; i < len; i++) {
            if (me.has(path[i])) {
                componentPath.push(path[i]);
            }
        }

        return componentPath;
    }

    /**
     * Returns an Array containing all parent components for a given component
     * @param {Neo.component.Base} component
     * @returns {Neo.component.Base[]} parents
     */
    getParents(component) {
        let parents = [];

        while (component && component.parentId) {
            component = this.getById(component.parentId);

            if (component) {
                parents.push(component);
            }
        }

        return parents;
    }

    /**
     * Returns the first component which matches the config-selector
     * @param {String} componentId
     * @param {Object|String} config
     * @returns {Neo.component.Base|null}
     */
    up(componentId, config) {
        let component = this.getById(componentId),
            configArray, configLength, matchArray;

        if (Neo.isString(config)) {
            config = {
                ntype: config
            };
        }

        configArray  = Object.entries(config);
        configLength = configArray.length;

        while (component && component.parentId) {
            component = this.getById(component.parentId);

            if (!component) {
                return null;
            }

            matchArray = [];

            configArray.forEach(([key, value]) => {
                if (component.hasOwnProperty(key) && component[key] === value) {
                    matchArray.push(true);
                }
            });

            if (matchArray.length === configLength) {
                return component;
            }
        }
    }
}

Neo.applyClassConfig(Component);

let instance = Neo.create(Component);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/DomEvent.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/DomEvent.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _Component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component.mjs */ "./node_modules/neo.mjs/src/manager/Component.mjs");
/* harmony import */ var _Focus_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Focus.mjs */ "./node_modules/neo.mjs/src/manager/Focus.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");







const eventConfigKeys = [
    'bubble',
    'delegate',
    'local',
    'scope',
    'vnodeId'
];

const globalDomEvents = [
    'change',
    'click',
    'contextmenu',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'mouseenter',
    'mouseleave',
    'wheel'
];

/**
 * @class Neo.manager.DomEvent
 * @extends Neo.core.Base
 * @singleton
 */
class DomEvent extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.DomEvent'
         * @private
         */
        className: 'Neo.manager.DomEvent',
        /**
         * @member {String} ntype='dom-event-manager'
         * @private
         */
        ntype: 'dom-event-manager',
        /**
         * @member {Object} listeners={}
         * @private
         */
        items: {},
        /**
         * @member {Object} map={}
         * @private
         */
        map: {},
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true
    }}

    /**
     *
     * @param {Object} event
     * @private
     */
    fire(event) {
        let me         = this,
            bubble     = true,
            data       = event.data || {},
            eventName  = event.eventName,
            i          = 0,
            listeners  = null,
            pathIds    = data.path.map(e => e.id),
            path       = _Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getParentPath(pathIds),
            len        = path.length,
            component, delegationVdom, delegationTargetId, id, preventFire, targetId;

        for (; i < len; i++) {
            id        = path[i];
            component = Neo.getComponent(id);

            if (!component || component.disabled) {
                break;
            }

            listeners = me.items[id] && me.items[id][eventName];

            if (listeners) {
                // console.log('fire', eventName, data, listeners, path);

                if (Array.isArray(listeners)) {
                    listeners.forEach(listener => {
                        if (listener && listener.fn) {
                            delegationTargetId = me.verifyDelegationPath(listener, data.path);

                            if (delegationTargetId !== false) {
                                preventFire = false;

                                // we only want mouseenter & leave to fire on their top level nodes, not for children
                                if (eventName === 'mouseenter' || eventName === 'mouseleave') {
                                    targetId = eventName === 'mouseenter' ? data.fromElementId : data.toElementId;
                                    // console.log(targetId, delegationTargetId);

                                    if (targetId && targetId !== delegationTargetId) {
                                        delegationVdom = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].findVdomChild(component.vdom, delegationTargetId);

                                        if (delegationVdom.vdom && _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].findVdomChild(delegationVdom.vdom, targetId)) {
                                            preventFire = true;
                                        }
                                    }
                                }

                                if (!preventFire) {
                                    // console.log(Neo.get(id));
                                    data.component = component;
                                    listener.fn.apply(listener.scope || self, [data]);

                                    if (!listener.bubble) {
                                        bubble = false;
                                    }
                                }
                            }
                        }
                    });
                }
            }

            // we do want to trigger the FocusManager after normal domListeners on these events got executed
            if (eventName === 'focusin' || eventName === 'focusout') {
                _Focus_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]['on' + Neo.capitalize(eventName)]({
                    componentPath: path,
                    data         : data
                });

                break;
            }

            if (!bubble) {
                break;
            }
        }
    }

    /**
     *
     * @param config
     * @param scope
     * @returns {Object}
     */
    generateListenerConfig(config, scope) {
        return {
            delegate : config.delegate,
            eventName: config.eventName,
            id       : scope.id,
            opts     : config,
            scope    : config.scope   || scope,
            vnodeId  : config.vnodeId || scope.id
        };
    }

    getEventName(config) {
        let eventName = null;

        if (Neo.isObject(config)) {
            Object.keys(config).forEach(key => {
                if (!eventConfigKeys.includes(key)) {
                    eventName = key;
                }
            });
        }

        return eventName;
    }

    /**
     * @param {Object} config
     * @param {String} config.delegate
     * @param {String} config.eventName
     * @param {String} config.id
     * @param {Object} config.opts
     * @param {Object} config.scope
     * @param {String} config.vnodeId
     * @returns {Object}
     */
    getListener(config) {
        let listeners = this.items,
            event;

        if (listeners && listeners[config.id]) {
            event = listeners[config.id][config.eventName];

            if (event) {
                console.log(event);
            }
        }
    }

    /**
     * Mounts local domEvent listeners for a given component
     * @param {Neo.component.Base} component
     * @private
     */
    mountDomListeners(component) {
        let listeners   = component.domListeners,
            localEvents = [],
            event, eventName;

        Object.keys(listeners).forEach(eventId => {
            event     = listeners[eventId];
            eventName = event.eventName;

            if (eventName && (event.local || !globalDomEvents.includes(eventName))) {
                console.log('localEvents', eventName);

                localEvents.push({
                    name   : eventName,
                    handler: 'domEventListener',
                    vnodeId: event.vnodeId
                });
            }
        });

        if (localEvents.length > 0) {
            Neo.worker.App.promiseMessage('main', {
                action : 'addDomListener',
                appName: component.appName,
                events : localEvents
            }).then(data => {
                // console.log('added domListener', data);
            }).catch(err => {
                console.log('App: Got error attempting to add a domListener', err);
            });
        }
    }

    /**
     * @param {Object} config
     * @param {String} config.delegate
     * @param {String} config.eventName
     * @param {String} config.id
     * @param {Boolean} config.local
     * @param {Number} config.opts
     * @param {Number} config.originalConfig
     * @param {Number} config.priority
     * @param {Object} config.scope
     * @param {String} config.vnodeId
     * @returns {Boolean} true if the listener got registered successfully (false in case it was already there)
     */
    register(config) {
        let alreadyRegistered = false,
            eventName         = config.eventName,
            id                = config.id,
            listeners         = this.items,
            opts              = config.opts,
            scope             = config.scope,
            fnType            = typeof opts,
            fn, listener, listenerConfig, listenerId;

        if (fnType === 'function' || fnType === 'string') {
            fn = opts;
        } else {
            fn    = opts.fn;
            scope = opts.scope || scope;
        }

        if (!listeners[id]) {
            listeners[id] = {};
        }

        if (listeners[id][eventName]) {
            listener = listeners[id][eventName];

            Object.keys(listener).forEach(key => {
                if (
                    listener[key].fn.toString() === fn.toString() && // todo: add a better check
                    listener[key].scope         === scope &&
                    listener[key].delegate      === config.delegate
                ) {
                    alreadyRegistered = true;
                }
            });
        } else {
            listeners[id][eventName] = [];
        }

        if (alreadyRegistered === true) {
            return false;
        }

        // console.log('manager.DomEvent register', eventName, config);

        listenerId = Neo.getId('dom-event');

        config.listenerId = listenerId;

        listenerConfig = {
            bubble        : config.hasOwnProperty('bubble') ? config.bubble : opts.hasOwnProperty('bubble') ? opts.bubble : true,
            delegate      : config.delegate,
            fn            : fn,
            id            : listenerId,
            mounted       : !config.local && globalDomEvents.includes(eventName),
            originalConfig: config.originalConfig,
            priority      : config.priority || 1,
            scope         : scope,
            vnodeId       : config.vnodeId
        };

        this.map[listenerId] = listenerConfig;

        listeners[id][eventName].push(listenerConfig);

        listeners[id][eventName].sort((a, b) => a.priority > b.priority);

        // console.log(this.map);

        return true;
    }

    /**
     * @param {Object} config
     * @param {String} config.eventName
     * @param {String} config.id
     * @param {Object} config.opts
     * @param {Object} config.scope
     * @param {String} config.vnodeId
     * @param {Object} scope
     * @returns {Boolean} true in case the listener did exist and got removed
     */
    unregister(config, scope) {
        console.log('unregister', config);
        console.log(this.generateListenerConfig(config, scope));
        return;

        let listener = this.getListener(config);

        if (listener) {
            console.log('listener found', listener);
        }
    }

    updateDomListeners(component, domListeners, oldDomListeners) {
        let me                  = this,
            registeredListeners = me.items[component.id] || {},
            i, len, listeners;

        if (Array.isArray(domListeners)) {
            if (Array.isArray(oldDomListeners)) {
                oldDomListeners.forEach(oldDomListener => {
                    // find & remove no longer existing listeners
                    if (!domListeners.includes(oldDomListener)) {
                        listeners = registeredListeners[me.getEventName(oldDomListener)] || [];
                        i         = 0;
                        len       = listeners.length;

                        for (; i < len; i++) {
                            if (listeners[i].originalConfig === oldDomListener) {
                                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].remove(listeners, listeners[i]);
                                break;
                            }
                        }
                    }
                });
            }

            // add new listeners
            domListeners.forEach(domListener => {
                Object.entries(domListener).forEach(([key, value]) => {
                    if (!eventConfigKeys.includes(key)) {
                        me.register({
                            delegate      : value.delegate || domListener.delegate || '#' + component.id,
                            eventName     : key,
                            id            : component.id,
                            opts          : value,
                            originalConfig: domListener,
                            scope         : domListener.scope || component,
                            vnodeId       : value.vnodeId || component.id
                        });
                    }
                });
            });

            if (component.mounted) {
                me.mountDomListeners(component);
            }
        } else {
            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].logError('Component.domListeners have to be an array', component);
        }
    }

    /**
     * Intended for Neo.controller.Component to replace listener placeholders provided as a string
     * @param {Object} config
     * @param {String} config.componentId
     * @param {Function} config.eventHandlerMethod
     * @param {String} config.eventHandlerName
     * @param {String} config.eventName
     * @param {Neo.core.Base} config.scope
     */
    updateListenerPlaceholder(config) {
        let me             = this,
            items          = me.items[config.componentId] || {},
            eventListeners = items[config.eventName] || [],
            i              = 0,
            len            = eventListeners.length,
            listener;

        for (; i < len; i++) {
            listener = eventListeners[i];

            if (listener.fn === config.eventHandlerName) {
                listener.fn    = config.eventHandlerMethod;
                listener.scope = config.scope;
                break;
            }
        }
    }

    /**
     *
     * @param {Object} listener
     * @param {Array} path
     * @returns {Boolean|String} true in case the delegation string matches the event path
     */
    verifyDelegationPath(listener, path) {
        let delegationArray = listener.delegate.split(' '),
            j               = 0,
            len             = delegationArray.length,
            pathLen         = path.length,
            hasMatch, i, item, isId, targetId;

        for (i=len-1; i >= 0; i--) {
            hasMatch = false;
            item     = delegationArray[i];
            isId     = item.startsWith('#');

            if (isId || item.startsWith('.')) {
                item = item.substr(1);
            }

            for (; j < pathLen; j++) {
                if (
                    (isId && path[j].id === item) ||
                    path[j].cls.includes(item)
                ) {
                    hasMatch = true;
                    targetId = path[j].id;
                    break;
                }
            }

            if (!hasMatch) {
                return false;
            }
        }

        // ensure the delegation path is a child of the owner components root node
        for (; j < pathLen; j++) {
            if (path[j].id === listener.vnodeId) {
                return targetId;
            }
        }

        return false;
    }
}

Neo.applyClassConfig(DomEvent);

let instance = Neo.create(DomEvent);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/Focus.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/Focus.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Neo.manager.Focus
 * @extends Neo.core.Base
 * @singleton
 */
class Focus extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Focus'
         * @private
         */
        className: 'Neo.manager.Focus',
        /**
         * @member {String} ntype='focus-manager'
         * @private
         */
        ntype: 'focus-manager',
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * An array containing opts objects.
         * opts.componentPath
         * opts.data
         * @member {Object[]} history=[]
         */
        history: [],
        /**
         * The Date object when the last focusin event has occured
         * @member {Date|null} lastFocusInDate=null
         * @private
         */
        lastFocusInDate: null,
        /**
         * The Date object when the last focusout event has occured
         * @member {Date|null} lastFocusInDate=null
         * @private
         */
        lastFocusOutDate: null,
        /**
         * The amount of time for a focusIn to occur after the last focusOut
         * to be threated as a focusmove
         * @member {Number} maxFocusInOutGap=10
         */
        maxFocusInOutGap: 10,
        /**
         * The maximum amount of items stored inside the history array
         * @member {Number} maxHistoryLength=20
         */
        maxHistoryLength: 20
    }}

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @private
     */
    addToHistory(opts) {
        let history = this.history;

        history.unshift(opts);

        if (history.length >= this.maxHistoryLength) {
            history.pop();
        }
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @private
     */
    focusEnter(opts) {
        this.setComponentFocus(opts, true);
        this.addToHistory(opts);
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @private
     */
    focusLeave(opts) {
        this.setComponentFocus(opts, false);
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @private
     */
    focusMove(opts) {
        let me               = this,
            history          = me.history,
            newComponentPath = opts.componentPath,
            oldComponentPath = history[0].componentPath,
            focusEnter       = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].difference(newComponentPath, oldComponentPath),
            focusLeave       = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].difference(oldComponentPath, newComponentPath),
            focusMove        = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].intersection(newComponentPath, oldComponentPath),
            component, data;

        me.setComponentFocus({componentPath: focusEnter, data: opts.data}, true);
        me.setComponentFocus({componentPath: focusLeave, data: opts.data}, false);

        focusMove.forEach(id => {
            component = Neo.getComponent(id);

            if (component) {
                data = {
                    newPath: opts.data.path,
                    oldPath: history[0].data.path
                };

                if (typeof component.onFocusMove === 'function') {
                    component.onFocusMove(data);
                }

                component.fire('focusMove', data);
            }
        });

        me.addToHistory(opts);
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @private
     */
    onFocusin(opts) {
        let me = this;

        me.lastFocusInDate = new Date();

        if (me.lastFocusOutDate && me.lastFocusInDate - me.lastFocusOutDate < me.maxFocusInOutGap) {
            me.focusMove(opts);
        } else {
            me.focusEnter(opts);
        }
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @private
     */
    onFocusout(opts) {
        let me = this;

        me.lastFocusOutDate = new Date();

        setTimeout(() => {
            if (me.lastFocusOutDate > me.lastFocusInDate) {
                me.focusLeave(opts);
            }
        }, me.maxFocusInOutGap);
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @param {Boolean} containsFocus
     * @private
     */
    setComponentFocus(opts, containsFocus) {
        let component, handler;

        opts.componentPath.forEach(id => {
            component = Neo.getComponent(id);

            if (component) {
                component.containsFocus = containsFocus;

                handler = containsFocus ? 'onFocusEnter' : 'onFocusLeave';

                if (typeof component[handler] === 'function') {
                    component[handler](opts.data.path);
                }

                component.fire(containsFocus ? 'focusEnter' : 'focusLeave', opts.data.path);
            }
        });
    }
}

Neo.applyClassConfig(Focus);

let instance = Neo.create(Focus);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/Instance.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/Instance.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/manager/Base.mjs");
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");



/**
 * @class Neo.manager.Instance
 * @extends Neo.manager.Base
 * @singleton
 */
class Instance extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Instance'
         * @private
         */
        className: 'Neo.manager.Instance',
        /**
         * @member {String} ntype='instance-manager'
         * @private
         */
        ntype: 'instance-manager',
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        _core_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].instanceManagerAvailable = true;

        me.consumeNeoIdMap();

        Neo.get = me.get.bind(me); // alias
    }

    /**
     * Register all ids which got applied to the Neo namespace before this instance got created
     * @private
     */
    consumeNeoIdMap() {
        if (Neo.idMap) {
            this.add(Object.values(Neo.idMap));
            delete Neo.idMap;
        }
    }
}

Neo.applyClassConfig(Instance);

let instance = Neo.create(Instance);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/util/Array.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Array.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.Array
 * @extends Neo.core.Base
 */
class NeoArray extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.Array'
         * @private
         */
        className: 'Neo.util.Array'
    }}

    /**
     * Adds an item or Array of items to an array in case it does not already exist.
     * Only primitive items will get found as duplicates
     * @param {Array} arr
     * @param {*} items
     */
    static add(arr, items) {
        if (!Array.isArray(items)) {
            items = [items];
        }

        items.forEach(item => {
            if (!arr.includes(item)) {
                arr.push(item);
            }
        });
    }

    /**
     * Returns an array of items which are present in array1, but not in array2
     * @param {Array} array1=[]
     * @param {Array} array2=[]
     * @returns {Array}
     */
    static difference(array1=[], array2=[]) {
        return array1.filter(item => !array2.includes(item));
    }

    /**
     * Checks if the index of item is > -1
     * @param {Array} arr
     * @param {*} item
     */
    static hasItem(arr, item) {
        return arr.includes(item);
    }

    /**
     * Returns an array of items which are present in array1 and array2
     * Only supports primitive items
     * @param {Array} array1=[]
     * @param {Array} array2=[]
     * @returns {Array}
     */
    static intersection(array1=[], array2=[]) {
        return array1.filter(item => array2.includes(item));
    }

    /**
     * Returns true if all items of array1 are present in array 2
     * Supports Arrays containing Objects, not Arrays containing Arrays
     * @param {Array} array1=[]
     * @param {Array} array2=[]
     * @returns {Boolean}
     */
    static isEqual(array1=[], array2=[]) {
        let i    = 0,
            len  = array1.length,
            len2 = array2.length,
            hasObject, j, value;

        for (; i < len; i++) {
            value = array1[i];

            if (Neo.isObject(value)) {
                hasObject = false;
                j         = 0;

                for (; j < len2; j++) {
                    if (Neo.isObject(array2[j]) && Neo.util.Object.isEqual(value, array2[j])) {
                        hasObject = true;
                        break;
                    }
                }

                if (!hasObject) {
                    return false;
                }
            }

            else if (!array2.includes(value)) {
                return false;
            }
        }

        return array1.length === array2.length;
    }

    /**
     * Moves an item inside arr from fromIndex to toIndex
     * @param {Array} arr
     * @param {Number} fromIndex
     * @param {Number} toIndex
     */
    static move(arr, fromIndex, toIndex) {
        if (fromIndex === toIndex) {
            return arr;
        }

        if (fromIndex >= arr.length) {
            fromIndex = arr.length - 1;
        }

        arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
        return arr;
    }

    /**
     * Removes an item or array of items from an array. Only primitive items will get found
     * @param {Array} arr
     * @param {*} items
     */
    static remove(arr, items) {
        let index;

        if (!Array.isArray(items)) {
            items = [items];
        }

        items.forEach(item => {
            index = arr.indexOf(item);

            if (index > -1) {
                arr.splice(index, 1);
            }
        });
    }

    /**
     * Removes an item from an array in case it does  exist, otherwise adds it
     * @param {Array} arr
     * @param {*} item
     */
    static toggle(arr, item) {
        if (this.hasItem(arr, item)) {
            this.remove(arr, item);
        } else {
            this.add(arr, item);
        }
    }

    /**
     * Returns an array of items which are present in array1 and array2
     * Only supports primitive items
     * @param {Array} array1
     * @param {Array} array2
     * @returns {Array}
     */
    static union(array1, array2) {
        let result = [],
            merge  = array1.concat(array2),
            len    = merge.length,
            assoc  = {},
            item;

        while (len--) {
            item = merge[len];

            if (!assoc[item]) {
                result.unshift(item);
                assoc[item] = true;
            }
        }

        return result;
    }

    /**
     * Adds an item or Array of items to an array in case it does not already exist.
     * Only primitive items will get found as duplicates
     * @param {Array} arr
     * @param {*} items
     */
    static unshift(arr, items) {
        if (!Array.isArray(items)) {
            items = [items];
        }

        items.forEach(item => {
            if (!arr.includes(item)) {
                arr.unshift(item);
            }
        });
    }
}

Neo.applyClassConfig(NeoArray);

/* harmony default export */ __webpack_exports__["default"] = (NeoArray);

/***/ }),

/***/ "./node_modules/neo.mjs/src/util/Function.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Function.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.Function
 * @extends Neo.core.Base
 */
class NeoFunction extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.Function'
         * @private
         */
        className: 'Neo.util.Function'
    }}

    /**
     * Append args instead of prepending them
     * @param {Object} scope
     * @returns {Function}
     */
    static bindAppend(scope) {
        const fn   = this,
              args = [].slice.call(arguments).slice(1);

        return function() {
            return fn.apply(scope, [].slice.call(arguments).concat(args));
        }
    }

    /**
     *
     * @param {Neo.core.Base} target
     * @param {String} methodName
     * @param {Function} fn
     * @param {Object} scope
     * @returns {Function}
     */
    static createSequence(target, methodName, fn, scope) {
        let method = target[methodName] || Neo.emptyFn;

        return (target[methodName] = function() {
            method.apply(this, arguments);
            return fn.apply(scope || this, arguments);
        });
    }

    /**
     *
     * @param {Neo.core.Base} target
     * @param {String} methodName
     * @param {Function} fn
     * @param {Object} scope
     * @returns {Function}
     */
    static intercept(target, methodName, fn, scope) {
        let method = target[methodName] || Neo.emptyFn;

        return (target[methodName] = function() {
            let returnValue = fn.apply(scope || this, arguments);
            method.apply(this, arguments);

            return returnValue;
        });
    }
}

Neo.applyClassConfig(NeoFunction);

/* harmony default export */ __webpack_exports__["default"] = (NeoFunction);

/***/ }),

/***/ "./node_modules/neo.mjs/src/util/HashHistory.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/HashHistory.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.HashHistory
 * @extends Neo.core.Base
 * @singleton
 */
class HashHistory extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.ClassSystem'
         * @private
         */
        className: 'Neo.util.HashHistory',
        /**
         * @member {String} ntype='hash-history'
         * @private
         */
        ntype: 'hash-history',
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * @member {Array} stack=[]
         * @private
         */
        stack: []
    }}

    /**
     *
     * @returns {Object}
     */
    first() {
        return this.stack[0];
    }

    /**
     *
     * @returns {Number}
     */
    getCount() {
        return this.stack.length;
    }

    /**
     *
     * @param {Object} hash
     * @param {String} hashString
     */
    push(hash, hashString) {
        let me = this;

        me.stack.unshift(hash);
        me.fire('change', hash, me.stack[1], hashString);
    }
}

Neo.applyClassConfig(HashHistory);

let instance = Neo.create(HashHistory);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/util/KeyNavigation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/KeyNavigation.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _util_Object_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Object.mjs */ "./node_modules/neo.mjs/src/util/Object.mjs");




/**
 * @class Neo.util.KeyNavigation
 * @extends Neo.core.Base
 */
class KeyNavigation extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.KeyNavigation'
         * @private
         */
        className: 'Neo.util.KeyNavigation',
        /**
         * @member {String} ntype='keynav'
         * @private
         */
        ntype: 'keynav',
        /**
         * Internally stores the component id inside _component
         * @member {Neo.component.Base|null} component_=null
         */
        component_: null,
        /**
         * Set this to true in case the keydown event is supposed to bubble upwards inside the component tree
         * @member {Boolean} keyDownEventBubble=false
         */
        keyDownEventBubble: false,
        /**
         * @member {Array|null} keys_=null
         */
        keys_: null
    }}

    add(value) {
        this._keys.push(...this.parseKeys(value));
    }

    /**
     *
     * @private
     * @returns {Neo.component.Base}
     */
    beforeGetComponent() {
        return Neo.getComponent(this._component);
    }

    /**
     *
     * @param {Neo.component.Base} value
     * @private
     * @returns {String} the component id
     */
    beforeSetComponent(value) {
        return value && value.id;
    }

    /**
     *
     */
    destroy() {
        this.unregister();
        super.destroy();
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDown(data) {
        // Using the chrome auto-fill feature does trigger a keydown event, not containing a key. See: #64
        if (data.key) {
            let me           = this,
                upperCaseKey = data.key.toUpperCase(),
                scope;

            upperCaseKey = me.parseUpperCaseKey(upperCaseKey);

            // console.log('KeyNavigation onKeyDown', upperCaseKey, data, me.keys);

            me.keys.forEach(key => {
                scope = Neo.get(key.scope);

                if (key.key.toUpperCase() === upperCaseKey) {
                    if (scope[key.fn]) {
                        scope[key.fn].apply(scope, [data]);
                    }
                }
            });
        }
    }

    /**
     *
     * @param {Object} value
     * @returns {Object}
     */
    parseKeys(value) {
        if (!Array.isArray(value)) {
            let componentId = this._component,
                keyArray    = [];

            if (componentId) {
                Object.entries(value).forEach(([key, value]) => {
                    keyArray.push({
                        fn   : value,
                        key  : key,
                        scope: componentId // todo: support VCs later on
                    })
                });

                value = keyArray;
            }
        }

        return value;
    }

    /**
     * Replaces specific key names, e.g. " " => SPACE
     * @param {String} key
     * @private
     * @returns {String}
     */
    parseUpperCaseKey(key) {
        switch (key) {
            case ' ':
                key = 'SPACE';
                break;
            case 'ARROWDOWN':
                key = 'DOWN';
                break;
            case 'ARROWLEFT':
                key = 'LEFT';
                break;
            case 'ARROWRIGHT':
                key = 'RIGHT';
                break;
            case 'ARROWUP':
                key = 'UP';
                break;
        }

        return key;
    }

    /**
     *
     * @param {Neo.component.Base} component
     */
    register(component) {
        let me           = this,
            domListeners = component.domListeners;

        me.component = component;
        me.keys      = me.parseKeys(me.keys);

        if (domListeners) {
            domListeners.push({
                keydown: {
                    fn    : me.onKeyDown,
                    bubble: me.keyDownEventBubble,
                    scope : me
                }
            });

            component.domListeners = domListeners;
        }
    }

    /**
     * Remove a key listener using the same config used when creating it
     * @param {Object} config
     */
    removeKey(config) {
        let me   = this,
            keys = me._keys,
            i    = 0,
            len  = keys.length,
            key;

        for (; i < len; i++) {
            key = keys[i];

            if (_util_Object_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].isEqual(key, config)) {
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(keys, key);
                break;
            }
        }
    }

    /**
     * Remove multiple key listeners passing an array of config items
     * @param {Array} items
     */
    removeKeys(items) {
        if (Array.isArray(items)) {
            items.forEach(item => this.removeKey(item));
        }
    }

    /**
     *
     */
    unregister() {
        // todo: remove the dom listener from the owner component
    }
}

Neo.applyClassConfig(KeyNavigation);

/* harmony default export */ __webpack_exports__["default"] = (KeyNavigation);

/***/ }),

/***/ "./node_modules/neo.mjs/src/util/Object.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Object.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.Object
 * @extends Neo.core.Base
 */
class NeoObject extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.Object'
         * @private
         */
        className: 'Neo.util.Object'
    }}

    /**
     * Returns true if all properties of x match with the properties of y
     * Supports nested Objects, but not arrays as prop values
     * @param {Object} x
     * @param {Object} y
     * @returns {Boolean}
     */
    static isEqual(x, y) {
        return (Neo.isObject(x) && Neo.isObject(y)) ?
            (
                Object.keys(x).length === Object.keys(y).length) &&
                Object.keys(x).reduce(function(isEqual, key) {
                    return isEqual && NeoObject.isEqual(x[key], y[key]);
                }, true
            ) : (x === y);
    }
}

Neo.applyClassConfig(NeoObject);

/* harmony default export */ __webpack_exports__["default"] = (NeoObject);

/***/ }),

/***/ "./node_modules/neo.mjs/src/util/Style.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Style.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.Style
 * @extends Neo.core.Base
 */
class Style extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.Style'
         * @private
         */
        className: 'Neo.util.Style'
    }}

    /**
     * Creates an delta object, containing the styles of newStyle which are not included or different than in oldStyle
     * Styles included in oldStyle but missing in newStyle will get a value of null
     * see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
     * @param {Object|String} newStyle
     * @param {Object|String} oldStyle
     * @returns {Object} style delta
     */
    static compareStyles(newStyle, oldStyle) {
        let styles = {};

        if (Neo.isString(newStyle)) {
            newStyle = Neo.core.Util.createStyleObject(newStyle);
        }

        if (Neo.isString(oldStyle)) {
            oldStyle = Neo.core.Util.createStyleObject(oldStyle);
        }

        if (!newStyle && !oldStyle) {
            return null;
        } else if (!oldStyle) {
            return Neo.clone(newStyle);
        } else if (!newStyle) {
            Object.keys(oldStyle).forEach(function(style) {
                styles[style] = null;
            });
        } else {
            Object.keys(newStyle).forEach(function(style) {
                if (!oldStyle.hasOwnProperty(style) || oldStyle[style] !== newStyle[style]) {
                    styles[style] = newStyle[style];
                }
            });

            Object.keys(oldStyle).forEach(function(style) {
                if (!newStyle.hasOwnProperty(style)) {
                    styles[style] = null;
                }
            });

            if (Object.keys(styles).length > 0) {
                return styles;
            }

            return null;
        }
    }
}

Neo.applyClassConfig(Style);

/* harmony default export */ __webpack_exports__["default"] = (Style);

/***/ }),

/***/ "./node_modules/neo.mjs/src/util/VDom.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/VDom.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.VDom
 * @extends Neo.core.Base
 */
class VDom extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.VDom'
         * @private
         */
        className: 'Neo.util.VDom'
    }}

    /**
     * Search vdom child nodes by id or opts object for a given vdom tree
     * @param {Object} vdom
     * @param {Object|String} opts Either an object containing vdom node attributes or a string based id
     * @param {Number} [index] Internal flag, do not use it
     * @param {Object} [parentNode] Internal flag, do not use it
     * @returns {Object}
     *     {Number} index
     *     {String} parentId
     *     {Object} vdom
     */
    static findVdomChild(vdom, opts, index, parentNode) {
        index = index || 0;
        opts  = typeof opts !== 'string' ? opts : {id:opts};

        let child      = null,
            matchArray = [],
            styleMatch = true,
            i          = 0,
            len        = vdom.cn && vdom.cn.length,
            optsArray, optsLength, subChild;

        optsArray  = Object.entries(opts);
        optsLength = optsArray.length;

        optsArray.forEach(([key, value]) => {
            if (vdom.hasOwnProperty(key)) {
                switch(key) {
                    case 'cls':
                        if (typeof value === 'string' && Neo.isArray(vdom[key])) {
                            if (vdom[key].includes(value)) {
                                matchArray.push(true);
                            }
                        } else if (typeof value === 'string' && typeof vdom[key] === 'string') {
                            if (vdom[key] === value) {
                                matchArray.push(true);
                            }
                        } else if (Neo.isArray(value) && Neo.isArray(vdom[key])) {
                            // todo: either search the vdom array for all keys or compare if the arrays are equal.
                            throw new Error('findVdomChild: cls matching not supported for target & source types of Arrays');
                        }
                        break;
                    case 'style':
                        if (typeof value === 'string' && typeof vdom[key] === 'string') {
                            if (vdom[key] === value) {
                                matchArray.push(true);
                            }
                        } else if (Neo.isObject(value) && Neo.isObject(vdom[key])) {
                            Object.entries(value).forEach(([styleKey, styleValue]) => {
                                if (!(vdom[key].hasOwnProperty(styleKey) && vdom[key][styleKey] === styleValue)) {
                                    styleMatch = false;
                                }
                            });

                            if (styleMatch) {
                                matchArray.push(true);
                            }
                        } else {
                            throw new Error('findVdomChild: style matching not supported for mixed target & source types (Object VS String)');
                        }
                        break;
                    default:
                        if (vdom[key] === value) {
                            matchArray.push(true);
                        }
                        break;
                }
            }
        });

        if (matchArray.length === optsLength) {
            return {
                index     : index,
                parentNode: parentNode,
                vdom      : vdom
            };
        }

        if (vdom.cn) {
            for (; i < len; i++) {
                if (vdom.cn[i]) {
                    subChild = VDom.findVdomChild(vdom.cn[i], opts, i, vdom);

                    if (subChild) {
                        child = {
                            index     : subChild.index,
                            parentNode: subChild.parentNode,
                            vdom      : subChild.vdom
                        };
                        break;
                    }
                }
            }
        }

        return child;
    }

    /**
     * Convenience shortcut for findVdomChild(vdom, {flag: flag});
     * @param {Object} vdom
     * @param {String} flag The flag reference specified on the target vdom child node
     * @returns {Object} vdom
     */
    static getByFlag(vdom, flag) {
        let node = VDom.findVdomChild(vdom, {flag: flag});
        return node && node.vdom;
    }

    /**
     * Get the ids of all child nodes of the given vdom tree
     * @param vdom
     * @param [childIds=[]]
     * @returns {Array} childIds
     */
    static getChildIds(vdom, childIds=[]) {
        let childNodes = vdom && vdom.cn || [];

        childNodes.forEach(childNode => {
            if (childNode.id) {
                childIds.push(childNode.id);
            }

            childIds = VDom.getChildIds(childNode, childIds);
        });

        return childIds;
    }

    /**
     *
     * @param {Object} vdom
     * @param {Number} index
     * @returns {Array}
     */
    static getColumnNodes(vdom, index) {
        let columnNodes = [];

        if (vdom.cn) {
            vdom.cn.forEach(row => {
                if (row.cn && row.cn[index]) {
                    columnNodes.push(row.cn[index]);
                }
            });
        }

        return columnNodes;
    }

    /**
     *
     * @param {Object} vdom
     * @param {Number} index
     * @returns {Array}
     */
    static getColumnNodesIds(vdom, index) {
        return VDom.getColumnNodes(vdom, index).map(e => e.id);
    }

    /**
     *
     * @param {Object} vdom
     * @param {String} flag
     * @param {Array} [matchArray]
     * @return {Array} an array of vdom nodes which match the flag
     */
    static getFlags(vdom, flag, matchArray) {
        if (!matchArray) {
            matchArray = [];

            if (vdom.flag === flag) {
                matchArray.push(vdom);
            }
        }

        const childNodes = vdom && vdom.cn || [];

        childNodes.forEach(childNode => {
            if (childNode.flag === flag) {
                matchArray.push(childNode);
            }

            matchArray = VDom.getFlags(childNode, flag, matchArray);
        });

        return matchArray;
    }

    /**
     * Insert a given nodeToInsert after a targetNode inside a given vdom tree
     * @param {Object} vdom The vdom tree containing the targetNode
     * @param {Object} nodeToInsert The new vdom to insert
     * @param {Object|String} targetNodeId Either a vdom node or a vdom node id
     * @returns {Boolean}
     */
    static insertAfterNode(vdom, nodeToInsert, targetNodeId) {
        return VDom.insertNode(vdom, nodeToInsert, targetNodeId, false);
    }

    /**
     * Insert a given nodeToInsert before a targetNode inside a given vdom tree
     * @param {Object} vdom The vdom tree containing the targetNode
     * @param {Object} nodeToInsert The new vdom to insert
     * @param {Object|String} targetNodeId Either a vdom node or a vdom node id
     * @returns {Boolean}
     */
    static insertBeforeNode(vdom, nodeToInsert, targetNodeId) {
        return VDom.insertNode(vdom, nodeToInsert, targetNodeId, true);
    }

    /**
     * Insert a given nodeToInsert before a targetNode inside a given vdom tree
     * @param {Object} vdom The vdom tree containing the targetNode
     * @param {Object} nodeToInsert The new vdom to insert
     * @param {Object|String} targetNodeId Either a vdom node or a vdom node id
     * @param {Boolean} insertBefore true inserts the new node at the same index, index+1 otherwise
     * @returns {Boolean}
     */
    static insertNode(vdom, nodeToInsert, targetNodeId, insertBefore) {
        if (Neo.isObject(targetNodeId)) {
            targetNodeId = targetNodeId.id;
        }

        let targetNode = VDom.findVdomChild(vdom, {id: targetNodeId}),
            index;

        if (targetNode) {
            index = insertBefore ? targetNode.index : targetNode.index + 1;
            targetNode.parentNode.cn.splice(index, 0, nodeToInsert);
            return true;
        }

        return false;
    }

    /**
     * Search vdom child nodes by id or opts object for a given vdom tree
     * @param {Object} [vdom]
     * @param {Object|String} opts Either an object containing vdom node attributes or a string based id
     * @returns {Boolean} true in case the node was found & removed
     */
    static removeVdomChild(vdom, opts) {
        let child = VDom.findVdomChild(vdom, opts);

        if (child) {
            child.parentNode.cn.splice(child.index, 1);
            return true;
        }

        return false;
    }

    /**
     * Replaces a child node inside a vdom tree by a given id
     * @param {Object} vdom
     * @param {String} id
     * @param {Object} newChildNode
     * @returns {Boolean} true in case the node was found and replaced
     */
    static replaceVdomChild(vdom, id, newChildNode) {
        let cn  = vdom.cn || [],
            i   = 0,
            len = cn.length,
            childNode;

        if (vdom.id === id) {
            throw new Error('replaceVdomChild: target id matches the root vnode id: ' + id);
        }

        for (; i < len; i++) {
            childNode = cn[i];

            if (childNode.id === id) {
                cn[i] = newChildNode;
                return true;
            }

            if (VDom.replaceVdomChild(childNode, id, newChildNode)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Neo.vdom.Helper will create ids for each vnode, so we need to sync them into the vdom
     * @param {Neo.vdom.VNode} vnode
     * @param {Object} vdom
     */
    static syncVdomIds(vnode, vdom) {
        if (vnode && vdom) {
            let childNodes = vdom.childNodes || vdom.cn,
                cn, i, len;

            if (vnode.id && vnode.id !== vdom.id) {
                vdom.id = vnode.id;
                // console.log('vdom id set to', vnode.id);
            }

            if (childNodes) {
                cn   = childNodes.filter(item => item.removeDom !== true);
                i    = 0;
                len  = cn && cn.length || 0;

                for (; i < len; i++) {
                    if (vnode.childNodes) {
                        VDom.syncVdomIds(vnode.childNodes[i], cn[i]);
                    }
                }
            }
        }
    }
}

Neo.applyClassConfig(VDom);

/* harmony default export */ __webpack_exports__["default"] = (VDom);

/***/ }),

/***/ "./node_modules/neo.mjs/src/util/VNode.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/VNode.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.VNode
 * @extends Neo.core.Base
 */
class VNode extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.VNode'
         * @private
         */
        className: 'Neo.util.VNode'
    }}

    /**
     * Search vnode child nodes by id or opts object for a given vdom tree
     * @param {Object} vnode
     * @param {Object|String} opts Either an object containing vdom node attributes or a string based id
     * @param {Number} [index] Internal flag, do not use it
     * @param {Object} [parentNode] Internal flag, do not use it
     * @returns {Object}
     *     {Number} index
     *     {String} parentId
     *     {Object} vnode
     */
    static findChildVnode(vnode, opts, index, parentNode) {
        index = index || 0;
        opts  = typeof opts !== 'string' ? opts : {id: opts};

        let child      = null,
            attrMatch  = true,
            matchArray = [],
            styleMatch = true,
            i          = 0,
            len        = vnode.childNodes && vnode.childNodes.length,
            optsArray, optsLength, subChild;

        optsArray  = Object.entries(opts);
        optsLength = optsArray.length;

        optsArray.forEach(([key, value]) => {
            if (vnode.hasOwnProperty(key)) {
                switch(key) {
                    case 'attributes':
                        if (Neo.isObject(value) && Neo.isObject(vnode[key])) {
                            Object.entries(value).forEach(([attrKey, attrValue]) => {
                                if (!(vnode[key].hasOwnProperty(attrKey) && vnode[key][attrKey] === attrValue)) {
                                    attrMatch = false;
                                }
                            });

                            if (attrMatch) {
                                matchArray.push(true);
                            }
                        }
                        break;
                    case 'className':
                        if (typeof value === 'string' && Neo.isArray(vnode[key])) {
                            if (vnode[key].includes(value)) {
                                matchArray.push(true);
                            }
                        } else if (typeof value === 'string' && typeof vnode[key] === 'string') {
                            if (vnode[key] === value) {
                                matchArray.push(true);
                            }
                        } else if (Neo.isArray(value) && Neo.isArray(vnode[key])) {
                            // todo: either search the vnode array for all keys or compare if the arrays are equal.
                            throw new Error('findChildVnode: cls matching not supported for target & source types of Arrays');
                        }
                        break;
                    case 'style':
                        if (Neo.isObject(value) && Neo.isObject(vnode[key])) {
                            Object.entries(value).forEach(([styleKey, styleValue]) => {
                                if (!(vnode[key].hasOwnProperty(styleKey) && vnode[key][styleKey] === styleValue)) {
                                    styleMatch = false;
                                }
                            });

                            if (styleMatch) {
                                matchArray.push(true);
                            }
                        }
                        break;
                    default:
                        if (vnode[key] === value) {
                            matchArray.push(true);
                        }
                        break;
                }
            }
        });

        if (matchArray.length === optsLength) {
            return {
                index     : index,
                parentNode: parentNode,
                vnode     : vnode
            };
        }

        if (vnode.childNodes) {
            for (; i < len; i++) {
                subChild = VNode.findChildVnode(vnode.childNodes[i], opts, i, vnode);

                if (subChild) {
                    child = {
                        index     : subChild.index,
                        parentNode: subChild.parentNode,
                        vnode     : subChild.vnode
                    };
                    break;
                }
            }
        }

        return child;
    }

    /**
     * Finds a child vnode inside a vnode tree by a given id
     * @param {Object} vnode
     * @param {String|null} id
     * @returns {Object|null} child vnode or null
     */
    static findChildVnodeById(vnode, id) {
        let childNodes = vnode.childNodes || [],
            i          = 0,
            len        = childNodes.length,
            childNode;

        if (vnode.id === id) {
            return vnode;
        }

        for (; i < len; i++) {
            childNode = childNodes[i];

            if (childNode.id === id) {
                return childNode
            }

            childNode = VNode.findChildVnodeById(childNode, id);

            if (childNode) {
                return childNode;
            }
        }

        return null;
    }

    /**
     * Get the ids of all child nodes of the given vnode
     * @param vnode
     * @param [childIds=[]]
     * @returns {Array} childIds
     */
    static getChildIds(vnode, childIds=[]) {
        let childNodes = vnode && vnode.childNodes || [];

        childNodes.forEach(childNode => {
            if (childNode.id) {
                childIds.push(childNode.id);
            }

            childIds = VNode.getChildIds(childNode, childIds);
        });

        return childIds;
    }

    /**
     * Replaces a child vnode inside a vnode tree by a given id
     * @param {Object} vnode
     * @param {String} id
     * @param {Object} newChildVnode
     * @returns {Boolean} true in case the node was found and replaced
     */
    static replaceChildVnode(vnode, id, newChildVnode) {
        let childNodes = vnode.childNodes || [],
            i          = 0,
            len        = childNodes.length,
            childNode;

        if (vnode.id === id) {
            throw new Error('replaceChildVnode: target id matches the root vnode id: ' + id);
        }

        for (; i < len; i++) {
            childNode = childNodes[i];

            if (childNode.id === id) {
                childNodes[i] = newChildVnode;
                return true;
            }

            if (VNode.replaceChildVnode(childNode, id, newChildVnode)) {
                return true;
            }
        }

        return false;
    }
}

Neo.applyClassConfig(VNode);

/* harmony default export */ __webpack_exports__["default"] = (VNode);

/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/App.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/App.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Neo.mjs */ "./node_modules/neo.mjs/src/Neo.mjs");
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/worker/Base.mjs");
/* harmony import */ var _core_export_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/_export.mjs */ "./node_modules/neo.mjs/src/core/_export.mjs");
/* harmony import */ var _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manager/DomEvent.mjs */ "./node_modules/neo.mjs/src/manager/DomEvent.mjs");
/* harmony import */ var _manager_Instance_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../manager/Instance.mjs */ "./node_modules/neo.mjs/src/manager/Instance.mjs");
/* harmony import */ var _controller_Application_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controller/Application.mjs */ "./node_modules/neo.mjs/src/controller/Application.mjs");
/* harmony import */ var _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/HashHistory.mjs */ "./node_modules/neo.mjs/src/util/HashHistory.mjs");








/**
 * The App worker contains most parts of the framework as well as all apps which get created.
 * See the tutorials for further infos.
 * @class Neo.worker.App
 * @extends Neo.worker.Base
 * @singleton
 */
class App extends _Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.App'
         * @private
         */
        className: 'Neo.worker.App',
        /**
         * @member {String} ntype='app-worker'
         * @private
         */
        ntype: 'app-worker',
        /**
         * @member {Object|null} data=null
         * @private
         */
        data: null,
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * @member {String} workerId='app'
         * @private
         */
        workerId: 'app'
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        const me = this;

        me.on('remoteregistered', me.onRemoteRegistered, me);
    }

    /**
     * Every dom event will get forwarded as a worker message from main and ends up here first
     * @param {Object} data useful event properties, differs for different event types. See Neo.main.DomEvents.
     */
    onDomEvent(data) {
        _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].fire(data);
    }

    /**
     * Every URL hash-change will create a post message in main and end up here first.
     * @param {Object} data parsed key-value pairs for each hash value
     */
    onHashChange(data) {
        _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].push(data.hash, data.hashString);
    }

    /**
     * The starting point for apps
     * @param {Object} data
     */
    onLoadApplication(data) {
        let me = this;

        if (data) {
            me.data = data;
            _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.resourcesPath = data.resourcesPath;
        }

        if (!_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.isExperimental) {
            _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].onStart();

            if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hash) {
                _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].push(_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hash, _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hashString);
            }
        } else {
            import(
                /* webpackIgnore: true */
                `../../${me.data.path}`).then(module => {
                    _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].onStart();

                    if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hash) {
                        _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].push(_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hash, _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hashString);
                    }
                }
            );
        }
    }

    /**
     * Keeping this one for debugging reasons
     * @param {Object} remote
     */
    onRemoteRegistered(remote) {
        // console.log('app worker onRemoteRegistered');
    }
}

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyClassConfig(App);

let instance = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].create(App);

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/Base.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Base.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _Message_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message.mjs */ "./node_modules/neo.mjs/src/worker/Message.mjs");
/* harmony import */ var _mixins_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixins/RemoteMethodAccess.mjs */ "./node_modules/neo.mjs/src/worker/mixins/RemoteMethodAccess.mjs");





/**
 * The abstract base class for the App, Data & VDom worker
 * @class Neo.worker.Base
 * @extends Neo.core.Base
 * @abstract
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.Worker'
         * @private
         */
        className: 'Neo.worker.Worker',
        /**
         * @member {String} ntype='worker'
         * @private
         */
        ntype: 'worker',
        /**
         * @member {String[]|Neo.core.Base[]|null} mixins=[Observable, RemoteMethodAccess]
         */
        mixins: [_core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]],
        /**
         * @member {String|null} workerId=null
         * @private
         */
        workerId: null
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        config = config || {};

        super(config);

        let me = this;

        me.promises = {};

        self.addEventListener('message', me.onMessage.bind(me), false);

        Neo.workerId      = me.workerId;
        Neo.currentWorker = me;
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();
        this.sendMessage('main', {action: 'workerConstructed'});
    }

    /**
     *
     * @param {Object} e
     */
    onMessage(e) {
        let me      = this,
            data    = e.data,
            action  = data.action,
            replyId = data.replyId,
            promise;

        if (!action) {
            throw new Error('Message action is missing: ' + data.id);
        }

        if (action !== 'reply') {
            try {
                this['on' + Neo.capitalize(action)](data);
            } catch(err) {
                console.log('error', data, err, e);

                this.reject(data.id, {
                    error : err.message
                });
            }
        } else if (promise = action === 'reply' && me.promises[replyId]) {
            if (data.reject) {
                promise.reject(data.data);
            } else {
                promise.resolve(data.data);
            }

            delete me.promises[replyId];
        }
    }

    /**
     *
     * @param {Object} msg
     */
    onPing(msg) {
        this.resolve(msg, {
            originMsg: msg
        });
    }

    /**
     *
     * @param {Object} msg
     */
    onRegisterNeoConfig(msg) {
        Neo.config = Neo.config || {};
        Object.assign(Neo.config, msg.data);
    }

    /**
     *
     * @param {String} dest app, data, main or vdom (excluding the current worker)
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Promise<any>}
     */
    promiseMessage(dest, opts, transfer) {
        let me = this;

        return new Promise(function(resolve, reject) {
            let message = me.sendMessage(dest, opts, transfer),
                msgId   = message.id;

            me.promises[msgId] = {
                resolve: resolve,
                reject : reject
            };
        });
    }

    /**
     * @param {String} dest app, data, main or vdom (excluding the current worker)
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Neo.worker.Message}
     * @private
     */
    sendMessage(dest, opts, transfer) {
        opts.destination = dest;

        let message = new _Message_mjs__WEBPACK_IMPORTED_MODULE_2__["default"](opts);

        self.postMessage(message, transfer);
        return message;
    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/Message.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Message.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
/* harmony import */ var _core_IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");


/**
 * A wrapper for worker post messages sent between the App, Data, VDom worker & the main thread.
 * You can add optional params as needed.
 * @class Neo.worker.Message
 */
class Message {
    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        /**
         * @member {String} action
         */

        /**
         * @member {String} destination='main'
         */

        /**
         * @member {String} id=IdGenerator.getId(Neo.workerId)
         */

        /**
         * @member {String} origin=Neo.workerId
         */

        config.destination = config.destination || 'main';
        config.id          = config.id          || _core_IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getId(Neo.workerId);
        config.origin      = config.origin      || Neo.workerId;

        Object.assign(this, config);
    }
}

const ns = Neo.ns('Neo.worker', true);
ns['Message'] = Message;



/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/mixins/RemoteMethodAccess.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/mixins/RemoteMethodAccess.mjs ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RemoteMethodAccess; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.worker.mixins.RemoteMethodAccess
 * @extends Neo.core.Base
 */
class RemoteMethodAccess extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.mixins.RemoteMethodAccess'
         * @private
         */
        className: 'Neo.worker.mixins.RemoteMethodAccess',
        /**
         * @member {String} ntype='mixin-remote-method-access'
         * @private
         */
        ntype: 'mixin-remote-method-access',
        /**
         * @member {Boolean} mixin=true
         * @private
         */
        mixin: true
    }}

    /**
     *
     * @param {Object} remote
     * @param method
     * @returns {function(*=, *=): Promise<any>}
     */
    generateRemote(remote, method) {
        let me     = this,
            origin = remote.origin;

        return function(data, buffer) {
            let opts = {
                action         : 'remoteMethod',
                data           : data,
                destination    : origin,
                remoteClassName: remote.className,
                remoteMethod   : method
            };
            return me.promiseMessage(origin, opts, buffer);
        };
    }

    /**
     *
     * @param {Object} remote
     */
    onRegisterRemote(remote) {
        if (remote.destination === Neo.workerId) {
            let me        = this,
                className = remote.className,
                methods   = remote.methods,
                pkg       = Neo.ns(className, true);

            methods.forEach(function(method) {
                if (pkg[method]) {
                    throw new Error('Duplicate remote method definition ' + className + '.' + method);
                }

                pkg[method] = me.generateRemote(remote, method);
            });

            if (Neo.workerId !== 'main') {
                me.fire('remoteregistered', remote);
            }
        }
    }

    /**
     *
     * @param {Object} msg
     */
    onRemoteMethod(msg) {
        let me  = this,
            pkg = Neo.ns(msg.remoteClassName),
            out, method;

        if (!pkg) {
            throw new Error('Invalid remote namespace "' + msg.remoteClassName + '"');
        }

        method = pkg[msg.remoteMethod];

        if (!method) {
            throw new Error('Invalid remote method name "' + msg.remoteMethod + '"');
        }

        if (Array.isArray(msg.data)) {
            out = method.call(pkg, ...msg.data);
        } else {
            out = method.call(pkg, msg.data);
        }

        if (out instanceof Promise) {
            out.then(function(data) {
                me.resolve(msg, data);
            })
            .catch(function(err) {
                me.reject(msg, err);
            });
        } else {
            me.resolve(msg, out);
        }
    }

    /**
     * Gets called when promiseMessage gets rejected
     * @param {Object} msg
     * @param {Object} data
     */
    reject(msg, data) {
        this.sendMessage(msg.origin, {
            action : 'reply',
            data   : data,
            reject : true,
            replyId: msg.id
        });
    }

    /**
     * Gets called when promiseMessage gets resolved
     * @param {Object} msg
     * @param {Object} data
     */
    resolve(msg, data) {
        this.sendMessage(msg.origin, {
            action : 'reply',
            data   : data,
            replyId: msg.id
        });
    }
}

Neo.applyClassConfig(RemoteMethodAccess);



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9jb3ZpZC9VdGlsLm1qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL2NvdmlkL2FwcC5tanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9jb3ZpZC92aWV3L0hlYWRlckNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9jb3ZpZC92aWV3L01haW5Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL2FwcHMvY292aWQvdmlldy9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL2VudHJ5cG9pbnRzL0NvdmlkLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvRGVmYXVsdENvbmZpZy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL05lby5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbGxlY3Rpb24vQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbGxlY3Rpb24vRmlsdGVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29sbGVjdGlvbi9Tb3J0ZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CdXR0b24ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvTGFiZWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9WaWV3cG9ydC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRyb2xsZXIvQXBwbGljYXRpb24ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250cm9sbGVyL0Jhc2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250cm9sbGVyL0NvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvSWRHZW5lcmF0b3IubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL0xvZ2dlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvT2JzZXJ2YWJsZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvVXRpbC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvX2V4cG9ydC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2xheW91dC9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbGF5b3V0L0NhcmQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9sYXlvdXQvRml0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbGF5b3V0L0ZsZXhib3gubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9sYXlvdXQvSEJveC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2xheW91dC9WQm94Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFuYWdlci9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFuYWdlci9Db21wb25lbnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYW5hZ2VyL0RvbUV2ZW50Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFuYWdlci9Gb2N1cy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21hbmFnZXIvSW5zdGFuY2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0FycmF5Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9GdW5jdGlvbi5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvSGFzaEhpc3RvcnkubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0tleU5hdmlnYXRpb24ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL09iamVjdC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvU3R5bGUubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL1ZEb20ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL1ZOb2RlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL0FwcC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3dvcmtlci9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL01lc3NhZ2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy93b3JrZXIvbWl4aW5zL1JlbW90ZU1ldGhvZEFjY2Vzcy5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1R0E7QUFBQTtBQUFnRTs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrRUFBSTtBQUN2Qiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQSxv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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNoTEQ7QUFBQTtBQUFBO0FBQWdEOztBQUVoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFn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LG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBIiwiZmlsZSI6Ii9hcHBzL2NvdmlkL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gPSBmdW5jdGlvbiB3ZWJwYWNrQ2h1bmtDYWxsYmFjayhjaHVua0lkcywgbW9yZU1vZHVsZXMpIHtcbiBcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG4gXHRcdHdoaWxlKGNodW5rSWRzLmxlbmd0aClcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHMucG9wKCldID0gMTtcbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjFcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiQ292aWRcIjogMVxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcbiBcdFx0cHJvbWlzZXMucHVzaChQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdC8vIFwiMVwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRcdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdGltcG9ydFNjcmlwdHMoX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiKTtcbiBcdFx0XHR9XG4gXHRcdH0pKTtcbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9idWlsZFNjcmlwdHMvZW50cnlwb2ludHMvQ292aWQubWpzXCIpO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIFN0YXRpYyB1dGlsaXR5IGNsYXNzXG4gKiBAY2xhc3MgQ292aWQuVXRpbFxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBVdGlsIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTnVtYmVyL3RvTG9jYWxlU3RyaW5nXG4gICAgICAgICAqIENoYW5nZSB0aGlzIGNvbmZpZyB0byBlbmZvcmNlIGEgY291bnR5IHNwZWNpZmljIGZvcm1hdHRpbmcgKGUuZy4gJ2RlLURFJylcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsb2NhbGVzPSdkZWZhdWx0J1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBsb2NhbGVzOiAnZGVmYXVsdCdcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLlV0aWwnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC5VdGlsJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIGdldCB1c2VkIGFzIGEgZ3JpZCByZW5kZXJlciwgc28gdGhlIDJuZCBwYXJhbSBpcyBhbiBvdmVybG9hZCAod291bGQgYmUge09iamVjdH0gcmVjb3JkKVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEudmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2NvbG9yXVxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZm9ybWF0TnVtYmVyKGRhdGEsIGNvbG9yKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGRhdGEudmFsdWU7XG5cbiAgICAgICAgaWYgKCFOZW8uaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgfHwgJ04vQSc7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG9jYWxlU3RyaW5nKFV0aWwubG9jYWxlcyk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycgPyB2YWx1ZSA6IGA8c3BhbiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9O1wiPiR7dmFsdWV9PC9zcGFuPmA7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhVdGlsKTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiLCJpbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuL3ZpZXcvTWFpbkNvbnRhaW5lci5tanMnO1xuXG5OZW8ub25TdGFydCA9ICgpID0+IHtcbiAgICBOZW8uYXBwKHtcbiAgICAgICAgYXBwUGF0aCA6ICdhcHBzL2NvdmlkLycsXG4gICAgICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgICAgICBuYW1lICAgIDogJ0NvdmlkJ1xuICAgIH0pO1xufTsiLCJpbXBvcnQgQnV0dG9uICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0J1dHRvbi5tanMnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIENvbnRhaW5lcn0gZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5pbXBvcnQgTGFiZWwgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0xhYmVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuSGVhZGVyQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgSGVhZGVyQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5IZWFkZXJDb250YWluZXInXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3LkhlYWRlckNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnY292aWQtaGVhZGVyLWNvbnRhaW5lciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnY292aWQtaGVhZGVyLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBudHlwZSAgICA6ICdjb21wb25lbnQnLFxuICAgICAgICAgICAgbWluV2lkdGggOiAyNjcsXG4gICAgICAgICAgICByZWZlcmVuY2U6ICdsb2dvJyxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpbjogJzEwcHgnfSxcbiAgICAgICAgICAgIHdpZHRoICAgIDogMjY3LFxuXG4gICAgICAgICAgICB2ZG9tOiB7dGFnOiAnaW1nJywgc3JjOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL25lb21qcy9wYWdlcy9tYXN0ZXIvcmVzb3VyY2VzL2ltYWdlcy9hcHBzL2NvdmlkL2NvdmlkX2xvZ29fZGFyay5qcGcnfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgICAgICBpdGVtcyA6IFt7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQgICA6IDY1LFxuICAgICAgICAgICAgICAgIGxheW91dCAgIDoge250eXBlOiAnaGJveCd9LFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ3RvdGFsLXN0YXRzJyxcblxuICAgICAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCdcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIGNscyA6IFsnY292aWQtbnVtYmVyYm94J10sXG4gICAgICAgICAgICAgICAgICAgIHZkb206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydjb3ZpZC1udW1iZXJib3gtdGl0bGUnLCAgJ2Nhc2VzJ10sIGh0bWw6ICdDYXNlcyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnY292aWQtbnVtYmVyYm94LW51bWJlcicsICdjYXNlcyddfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ2NvdmlkLW51bWJlcmJveCddLFxuICAgICAgICAgICAgICAgICAgICB2ZG9tOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnY292aWQtbnVtYmVyYm94LXRpdGxlJywgICdhY3RpdmUnXSwgaHRtbDogJ0FjdGl2ZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnY292aWQtbnVtYmVyYm94LW51bWJlcicsICdhY3RpdmUnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWydjb3ZpZC1udW1iZXJib3gnXSxcbiAgICAgICAgICAgICAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC10aXRsZScsICAncmVjb3ZlcmVkJ10sIGh0bWw6ICdSZWNvdmVyZWQnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC1udW1iZXInLCAncmVjb3ZlcmVkJ119XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNscyA6IFsnY292aWQtbnVtYmVyYm94J10sXG4gICAgICAgICAgICAgICAgICAgIHZkb206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydjb3ZpZC1udW1iZXJib3gtdGl0bGUnLCAgJ2RlYXRocyddLCBodG1sOiAnRGVhdGhzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydjb3ZpZC1udW1iZXJib3gtbnVtYmVyJywgJ2RlYXRocyddfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCd9LFxuXG4gICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50J1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlIDogQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICBmbGV4ICAgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblN3aXRjaFRoZW1lQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiAyNSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLXN1bicsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICA6IHttYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblRvcDogJzE1cHgnfSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1RoZW1lIExpZ2h0J1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlIDogQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICBmbGV4ICAgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblJlbG9hZERhdGFCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA6IDI1LFxuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtc3luYy1hbHQnLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxNXB4J30sXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdSZWxvYWQgRGF0YSdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgIDogTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCAgIDogMjUsXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ2xhc3QtdXBkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxOHB4J30sXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0xhc3QgVXBkYXRlOidcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIZWFkZXJDb250YWluZXIpO1xuXG5leHBvcnQge0hlYWRlckNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgSGVhZGVyQ29udGFpbmVyICAgICAgICAgZnJvbSAnLi9IZWFkZXJDb250YWluZXIubWpzJztcbmltcG9ydCBNYWluQ29udGFpbmVyQ29udHJvbGxlciBmcm9tICcuL01haW5Db250YWluZXJDb250cm9sbGVyLm1qcyc7XG5pbXBvcnQgVmlld3BvcnQgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9WaWV3cG9ydC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3Lk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuVmlld3BvcnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIFZpZXdwb3J0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuTWFpbkNvbnRhaW5lcicsXG4gICAgICAgIG50eXBlICAgIDogJ21haW4tY29udGFpbmVyJyxcblxuICAgICAgICBhdXRvTW91bnQgOiB0cnVlLFxuICAgICAgICBjb250cm9sbGVyOiBNYWluQ29udGFpbmVyQ29udHJvbGxlcixcbiAgICAgICAgbGF5b3V0ICAgIDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7bW9kdWxlOiBIZWFkZXJDb250YWluZXIsIGhlaWdodDogMTIwfSxcbiAgICAgICAgICAgIHtudHlwZSA6ICdjb21wb25lbnQnLCAgICAgdmRvbSAgOiB7aW5uZXJIVE1MOiAnQ2VudGVyJ319LFxuICAgICAgICAgICAge250eXBlIDogJ2NvbXBvbmVudCcsICAgICB2ZG9tICA6IHtpbm5lckhUTUw6ICdGb290ZXInfX1cbiAgICAgICAgXVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IHtkZWZhdWx0IGFzIENvbXBvbmVudENvbnRyb2xsZXJ9IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250cm9sbGVyL0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgVXRpbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vVXRpbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlcidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBhcGlTdW1tYXJ5VXJsPSdodHRwczovL2Nvcm9uYS5sbWFvLm5pbmphL3YyL2FsbCdcbiAgICAgICAgICovXG4gICAgICAgIGFwaVN1bW1hcnlVcmw6ICdodHRwczovL2Nvcm9uYS5sbWFvLm5pbmphL3YyL2FsbCdcbiAgICB9fVxuXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuICAgICAgICB0aGlzLmxvYWRTdW1tYXJ5RGF0YSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5hY3RpdmVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5jYXNlc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLmRlYXRoc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLnJlY292ZXJlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLnVwZGF0ZWQgLy8gdGltZXN0YW1wXG4gICAgICovXG4gICAgYXBwbHlTdW1tYXJ5RGF0YShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGFpbmVyID0gbWUuZ2V0UmVmZXJlbmNlKCd0b3RhbC1zdGF0cycpLFxuICAgICAgICAgICAgdmRvbSAgICAgID0gY29udGFpbmVyLnZkb207XG5cbiAgICAgICAgbWUuc3VtbWFyeURhdGEgPSBkYXRhO1xuXG4gICAgICAgIHZkb20uY25bMF0uY25bMV0uaHRtbCA9IFV0aWwuZm9ybWF0TnVtYmVyKHt2YWx1ZTogZGF0YS5jYXNlc30pO1xuICAgICAgICB2ZG9tLmNuWzFdLmNuWzFdLmh0bWwgPSBVdGlsLmZvcm1hdE51bWJlcih7dmFsdWU6IGRhdGEuYWN0aXZlfSk7XG4gICAgICAgIHZkb20uY25bMl0uY25bMV0uaHRtbCA9IFV0aWwuZm9ybWF0TnVtYmVyKHt2YWx1ZTogZGF0YS5yZWNvdmVyZWR9KTtcbiAgICAgICAgdmRvbS5jblszXS5jblsxXS5odG1sID0gVXRpbC5mb3JtYXROdW1iZXIoe3ZhbHVlOiBkYXRhLmRlYXRoc30pO1xuXG4gICAgICAgIGNvbnRhaW5lci52ZG9tID0gdmRvbTtcblxuICAgICAgICBjb250YWluZXIgPSBtZS5nZXRSZWZlcmVuY2UoJ2xhc3QtdXBkYXRlJyk7XG4gICAgICAgIHZkb20gICAgICA9IGNvbnRhaW5lci52ZG9tO1xuXG4gICAgICAgIHZkb20uaHRtbCA9ICdMYXN0IFVwZGF0ZTogJyArIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdkZWZhdWx0Jywge1xuICAgICAgICAgICAgaG91ciAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnXG4gICAgICAgIH0pLmZvcm1hdChuZXcgRGF0ZShkYXRhLnVwZGF0ZWQpKTtcblxuICAgICAgICBjb250YWluZXIudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBsb2FkU3VtbWFyeURhdGEoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBmZXRjaChtZS5hcGlTdW1tYXJ5VXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBtZS5hcHBseVN1bW1hcnlEYXRhKGRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnQ2Fu4oCZdCBhY2Nlc3MgJyArIG1lLmFwaVN1bW1hcnlVcmwsIGVycikpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25SZWxvYWREYXRhQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmxvYWRTdW1tYXJ5RGF0YSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Td2l0Y2hUaGVtZUJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGJ1dHRvbiAgID0gZGF0YS5jb21wb25lbnQsXG4gICAgICAgICAgICBsb2dvICAgICA9IG1lLmdldFJlZmVyZW5jZSgnbG9nbycpLFxuICAgICAgICAgICAgbG9nb1BhdGggPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL25lb21qcy9wYWdlcy9tYXN0ZXIvcmVzb3VyY2VzL2ltYWdlcy9hcHBzL2NvdmlkLycsXG4gICAgICAgICAgICB2ZG9tICAgICA9IGxvZ28udmRvbSxcbiAgICAgICAgICAgIHZpZXcgICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIGJ1dHRvblRleHQsIGNscywgaWNvbkNscywgdGhlbWU7XG5cbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0ID09PSAnVGhlbWUgTGlnaHQnKSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ID0gJ1RoZW1lIERhcmsnO1xuICAgICAgICAgICAgaWNvbkNscyAgICA9ICdmYSBmYS1tb29uJztcbiAgICAgICAgICAgIHRoZW1lICAgICAgPSAnbmVvLXRoZW1lLWxpZ2h0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvblRleHQgPSAnVGhlbWUgTGlnaHQnO1xuICAgICAgICAgICAgaWNvbkNscyAgICA9ICdmYSBmYS1zdW4nO1xuICAgICAgICAgICAgdGhlbWUgICAgICA9ICduZW8tdGhlbWUtZGFyayc7XG4gICAgICAgIH1cblxuICAgICAgICB2ZG9tLnNyYyA9IGxvZ29QYXRoICsgKHRoZW1lID09PSAnbmVvLXRoZW1lLWRhcmsnID8gJ2NvdmlkX2xvZ29fZGFyay5qcGcnIDogJ2NvdmlkX2xvZ29fbGlnaHQuanBnJyk7XG4gICAgICAgIGxvZ28udmRvbSA9IHZkb207XG5cbiAgICAgICAgYnV0dG9uLnNldCh7XG4gICAgICAgICAgICBpY29uQ2xzOiBpY29uQ2xzLFxuICAgICAgICAgICAgdGV4dCAgIDogYnV0dG9uVGV4dFxuICAgICAgICB9KTtcblxuICAgICAgICBjbHMgPSBbLi4udmlldy5jbHNdO1xuXG4gICAgICAgIHZpZXcuY2xzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5pbmNsdWRlcygnbmVvLXRoZW1lJykpIHtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgdGhlbWUpO1xuICAgICAgICB2aWV3LmNscyA9IGNscztcblxuICAgICAgICBidXR0b24uc2V0KHtcbiAgICAgICAgICAgIGljb25DbHM6IGljb25DbHMsXG4gICAgICAgICAgICB0ZXh0ICAgOiBidXR0b25UZXh0XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXJDb250cm9sbGVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3dvcmtlci9BcHAubWpzJztcbmltcG9ydCAnLi4vLi4vYXBwcy9jb3ZpZC9hcHAubWpzJzsiLCJjb25zdCBOZW8gPSBzZWxmLk5lbyB8fCB7fTtcblxuTmVvLmNvbmZpZyA9IE5lby5jb25maWcgfHwge307XG5cbi8qKlxuICogQ29uZmlnIG9iamVjdCBmb3IgdGhlIG5lby5tanMgZnJhbWV3b3JrIHdoaWNoIHdpbGwgZ2V0IHBhc3NlZCB0byBhbGwgd29ya2Vyc1xuICogWW91IGNhbiBjaGFuZ2UgdGhlIGNvbmZpZ3MsIGUuZy4gaW5zaWRlIHRoZSBpbmRleC5odG1sIG9mIHlvdXIgYXBwXG4gKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICogQG5hbWUgY29uZmlnXG4gKiBAdHlwZSBPYmplY3RcbiAqL1xuY29uc3QgRGVmYXVsdENvbmZpZyA9IHtcbiAgICAvKipcbiAgICAgKiB0cnVlIHdpbGwgYXBwbHkgJ25lby1ib2R5JyB0byB0aGUgZG9jdW1lbnQuYm9keSBjbGFzc0xpc3RcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmFwcGx5Qm9keUNsc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBhcHBseUJvZHlDbHM6IHRydWUsXG4gICAgLyoqXG4gICAgICogUGF0aCB0byB5b3VyIGFwcC5tanMgZmlsZS4gWW91IGNhbiBjcmVhdGUgbXVsdGlwbGUgYXBwcyB0aGVyZSBpZiBuZWVkZWQuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5hcHBQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nfG51bGxcbiAgICAgKi9cbiAgICBhcHBQYXRoOiBudWxsLFxuICAgIC8qKlxuICAgICAqIFBhdGggdG8gdGhlIG5lby5tanMgZGlyZWN0b3J5XG4gICAgICogQGRlZmF1bHQgJy4vJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5iYXNlUGF0aFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIGJhc2VQYXRoOiAnLi8nLFxuICAgIC8qKlxuICAgICAqIFBhdGggdG8gdGhlIG5lby5tanMgdGhlbWUgY3NzIGZpbGVzXG4gICAgICogU2VlIG1haW4uYWRkb24uU3R5bGVzaGVldCA9PiBjcmVhdGVTdHlsZVNoZWV0KClcbiAgICAgKiBAZGVmYXVsdCBOZW8uY29uZmlnLmJhc2VQYXRoICsgJ2J1aWxkLycgKyBOZW8uY29uZmlnLmVudmlyb25tZW50XG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgW2NvbmZpZy5jc3NQYXRoXVxuICAgICAqIEBvcHRpb25hbFxuICAgICAqIEB0eXBlIFN0cmluZ3xudWxsXG4gICAgICovXG4gICAgY3NzUGF0aDogbnVsbCxcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBidWlsZCA9PiBkaXN0IGVudmlyb25tZW50LiBWYWxpZCB2YWx1ZXM6ICdkZXZlbG9wbWVudCcsICdwcm9kdWN0aW9uJ1xuICAgICAqIFVzZWQgZm9yIGF1dG9tYXRpY2FsbHkgaW5jbHVkaW5nIHRoZSBtYXRjaGluZyB0aGVtZSBmaWxlc1xuICAgICAqIEBkZWZhdWx0ICdwcm9kdWN0aW9uJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5lbnZpcm9ubWVudFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIGVudmlyb25tZW50OiAncHJvZHVjdGlvbicsXG4gICAgLyoqXG4gICAgICogSW4gY2FzZSB5b3UgYXJlIHVzaW5nIHRoZSBHb29nbGVBbmFseXRpY3MgbWFpblRocmVhZEFkZG9uIG9yIHVzZUdvb2dsZUFuYWx5dGljczogdHJ1ZSxcbiAgICAgKiB5b3UgY2FuIGNoYW5nZSB0aGUgZ3RhZyBpZCBoZXJlLiBSZXF1aXJlZCBmb3IgdGhlIG9ubGluZSBleGFtcGxlcyAoZ2ggcGFnZXMpXG4gICAgICogQGRlZmF1bHQgJ1VBLTE1MzczNDQwNC0xJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5ndGFnSWRcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICBndGFnSWQ6ICdVQS0xNTM3MzQ0MDQtMScsXG4gICAgLyoqXG4gICAgICogRmxhZyBpZiBOZW8gaXMgcnVubmluZyB3aXRob3V0IGFueSBKUyBidWlsZHNcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5pc0V4cGVyaW1lbnRhbFxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBpc0V4cGVyaW1lbnRhbDogZmFsc2UsXG4gICAgLyoqXG4gICAgICogRmxhZyBmb3IgcnVubmluZyBvbiBodHRwczovL25lb21qcy5naXRodWIuaW8vcGFnZXMvXG4gICAgICogPT4gdG8gdXNlIGxvY2FsIGltYWdlcyBwYXRocyBpbnN0ZWFkIG9mIHJhdy5naXRodWJ1c2VyY29udGVudC5jb21cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5pc0dpdEh1YlBhZ2VzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGlzR2l0SHViUGFnZXM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEZsYWcgZm9yIHJ1bm5pbmcgdGhlIE5lbyBtYWluIHRocmVhZCBpbnNpZGUgYW4gaWZyYW1lIChTaWVzdGEgQnJvd3NlciBIYXJuZXNzKVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmlzSW5zaWRlU2llc3RhXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGlzSW5zaWRlU2llc3RhOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBVc2VkIGJ5IEludGwuRGF0ZVRpbWVGb3JtYXQsIGZvciBkZXRhaWxzIHRha2UgYSBsb29rIGF0OlxuICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XG4gICAgICogQGRlZmF1bHQgJ2RlZmF1bHQnXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmxvY2FsZVxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIGxvY2FsZTogJ2RlZmF1bHQnLFxuICAgIC8qKlxuICAgICAqIEFkZCBhZGRvbnMgZm9yIHRoZSBtYWluIHRocmVhZFxuICAgICAqIFBvc3NpYmxlIHZhbHVlczogQW1DaGFydHMsIEFuYWx5dGljc0J5R29vZ2xlLCBIaWdobGlnaHRKUywgTG9jYWxTdG9yYWdlLCBNYXBib3hHTCwgTWFya2Rvd24sIFNpZXN0YSwgU3R5bGVzaGVldFxuICAgICAqIChzcmMvbWFpbi9hZGRvbilcbiAgICAgKiBAZGVmYXVsdCBbJ1N0eWxlc2hlZXQnXVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5tYWluVGhyZWFkQWRkb25zXG4gICAgICogQHR5cGUgU3RyaW5nW11cbiAgICAgKi9cbiAgICBtYWluVGhyZWFkQWRkb25zOiBbJ1N0eWxlc2hlZXQnXSxcbiAgICAvKipcbiAgICAgKiBBZGQgdGhlbWVzIHlvdSB3YW50IHRvIHVzZSBoZXJlLiBUaGUgZmlyc3QgdGhlbWUgd2lsbCBnZXQgYXBwbGllZC5cbiAgICAgKiBJZiBjb25maWcudXNlQ3NzNCA9PT0gdHJ1ZSwgb3RoZXIgdGhlbWUgdmFyaWFibGVzIHdpbGwgZ2V0IGluY2x1ZGVkIGFzIHdlbGxcbiAgICAgKiBAZGVmYXVsdCBbJ25lby10aGVtZS1saWdodCcsICduZW8tdGhlbWUtZGFyayddXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnRoZW1lc1xuICAgICAqIEB0eXBlIFN0cmluZ1tdXG4gICAgICovXG4gICAgdGhlbWVzOiBbJ25lby10aGVtZS1saWdodCcsICduZW8tdGhlbWUtZGFyayddLFxuICAgIC8qKlxuICAgICAqIEZsYWcgZm9yIHN0YW5kYWxvbmUgU2llc3RhIG1vZHVsZSB0ZXN0cyA9PiBwcmV2ZW50IHJlZ2lzdGVyUmVtb3RlIHdvcmtlciBtZXNzYWdlc1xuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVuaXRUZXN0TW9kZVxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1bml0VGVzdE1vZGU6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEZsYWcgaWYgQ1NTNCBzdHlsZXNoZWV0cyBhcmUgaW4gdXNlIChpbXBvcnRhbnQgZm9yIHN3aXRjaGluZyB0aGVtZXMpXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VDc3M0XG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZUNzczQ6IHRydWUsXG4gICAgLyoqXG4gICAgICogVHJ1ZSB3aWxsIGF1dG9tYXRpY2FsbHkgaW5jbHVkZSB0aGUgc3R5bGVzaGVldFxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlRm9udEF3ZXNvbWVcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlRm9udEF3ZXNvbWU6IHRydWUsXG4gICAgLyoqXG4gICAgICogSW50ZW5kZWQgZm9yIHRoZSBvbmxpbmUgZXhhbXBsZXMgd2hlcmUgd2UgbmVlZCBhbiBlYXN5IHdheSB0byBhZGQgR0EgdG8gZXZlcnkgZ2VuZXJhdGVkIGFwcFxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUdvb2dsZUFuYWx5dGljc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VHb29nbGVBbmFseXRpY3M6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEFkZHMgZ2xvYmFsIGRvbSBldmVudCBsaXN0ZW5lcnMgZm9yIG1vYmlsZSByZWxhdGVkIGV2ZW50cyBsaWtlIHJvdGF0ZSwgc3dpcGUsIHRhcFxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlVG91Y2hFdmVudHNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlVG91Y2hFdmVudHM6IHRydWVcbn07XG5cbk9iamVjdC5hc3NpZ24oRGVmYXVsdENvbmZpZywge1xuICAgIC8qKlxuICAgICAqIFBhdGggdG8gdGhlIHRvcCBsZXZlbCBuZW8ubWpzIHJlc291cmNlcyBmb2xkZXJcbiAgICAgKiBAZGVmYXVsdCBOZW8uY29uZmlnLmJhc2VQYXRoICsgJ3Jlc291cmNlcy8nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnJlc291cmNlc1BhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICByZXNvdXJjZXNQYXRoOiAoTmVvLmNvbmZpZy5iYXNlUGF0aCB8fCBEZWZhdWx0Q29uZmlnLmJhc2VQYXRoKSArICdyZXNvdXJjZXMvJyxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBiYXNlIFVSTCBmb3Igd2ViIHdvcmtlciBlbnRyeSBwb2ludHMgKEFwcCwgRGF0YSwgVmRvbSlcbiAgICAgKiBAZGVmYXVsdCBOZW8uY29uZmlnLmJhc2VQYXRoICsgJ3NyYy93b3JrZXIvJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy53b3JrZXJCYXNlUGF0aFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIHdvcmtlckJhc2VQYXRoOiAoTmVvLmNvbmZpZy5iYXNlUGF0aCB8fCBEZWZhdWx0Q29uZmlnLmJhc2VQYXRoKSArICdzcmMvd29ya2VyLydcbn0pO1xuXG5leHBvcnQge0RlZmF1bHRDb25maWcgYXMgZGVmYXVsdH07IiwiaW1wb3J0IERlZmF1bHRDb25maWcgZnJvbSAnLi9EZWZhdWx0Q29uZmlnLm1qcyc7XG5cbmNvbnN0IGNvbmZpZ1N5bWJvbCA9IFN5bWJvbC5mb3IoJ2NvbmZpZ1N5bWJvbCcpLFxuICAgICAgZ2V0U2V0Q2FjaGUgID0gU3ltYm9sKCdnZXRTZXRDYWNoZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIG1vZHVsZSB0byBlbmhhbmNlIGNsYXNzZXMsIGNyZWF0ZSBpbnN0YW5jZXMgYW5kIHRoZSBOZW8gbmFtZXNwYWNlXG4gKiBAbW9kdWxlIE5lb1xuICogQHNpbmdsZXRvblxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jYXBpdGFsaXplICAgICAgICBhcyBjYXBpdGFsaXplXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmNyZWF0ZVN0eWxlT2JqZWN0IGFzIGNyZWF0ZVN0eWxlT2JqZWN0XG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmNyZWF0ZVN0eWxlcyAgICAgIGFzIGNyZWF0ZVN0eWxlc1xuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5kZWNhbWVsICAgICAgICAgICBhcyBkZWNhbWVsXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzQXJyYXkgICAgICAgICAgIGFzIGlzQXJyYXlcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNCb29sZWFuICAgICAgICAgYXMgaXNCb29sZWFuXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzRGVmaW5lZCAgICAgICAgIGFzIGlzRGVmaW5lZFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc051bWJlciAgICAgICAgICBhcyBpc051bWJlclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc09iamVjdCAgICAgICAgICBhcyBpc09iamVjdFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc1N0cmluZyAgICAgICAgICBhcyBpc1N0cmluZ1xuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC50b0FycmF5ICAgICAgICAgICBhcyB0b0FycmF5XG4gKiBAdHV0b3JpYWwgMDFfQ29uY2VwdFxuICovXG5sZXQgTmVvID0gc2VsZi5OZW8gfHwge307XG5cbk5lbyA9IHNlbGYuTmVvID0gT2JqZWN0LmFzc2lnbih7XG4gICAgLyoqXG4gICAgICogQSBtYXAgY29udGFpbmluZyBudHlwZXMgYXMga2V5IGFuZCBOZW8gY2xhc3NlcyBvciBzaW5nbGV0b25zIGFzIHZhbHVlc1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUgT2JqZWN0XG4gICAgICovXG4gICAgbnR5cGVNYXA6IHt9LFxuICAgIC8qKlxuICAgICAqIE5lZWRlZCBmb3IgTmVvLmNyZWF0ZS4gRmFsc2UgZm9yIHRoZSBtYWluIHRocmVhZCwgdHJ1ZSBmb3IgdGhlIEFwcCwgRGF0YSAmIFZkb20gd29ya2VyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgaW5zaWRlV29ya2VyOiB0eXBlb2YgRGVkaWNhdGVkV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcsXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbGx5IHVzZWQgYXQgdGhlIGVuZCBvZiBlYWNoIGNsYXNzIC8gbW9kdWxlIGRlZmluaXRpb25cbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gY2xzIFRoZSBOZW8gY2xhc3MgdG8gYXBwbHkgY29uZmlncyB0b1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgYXBwbHlDbGFzc0NvbmZpZyhjbHMpIHtcbiAgICAgICAgbGV0IGJhc2VDZmcgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgYmFzZVN0YXRpY0NmZyA9IG51bGwsXG4gICAgICAgICAgICBjb25maWcgICAgICAgID0ge30sXG4gICAgICAgICAgICBwcm90byAgICAgICAgID0gY2xzLnByb3RvdHlwZSB8fCBjbHMsXG4gICAgICAgICAgICBwcm90b3MgICAgICAgID0gW10sXG4gICAgICAgICAgICBzdGF0aWNDb25maWcgID0ge30sXG4gICAgICAgICAgICBjdG9yO1xuXG4gICAgICAgIHdoaWxlIChwcm90by5fX3Byb3RvX18pIHtcbiAgICAgICAgICAgIGN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcjtcblxuICAgICAgICAgICAgaWYgKGN0b3IuaGFzT3duUHJvcGVydHkoJ2NsYXNzQ29uZmlnQXBwbGllZCcpKSB7XG4gICAgICAgICAgICAgICAgYmFzZUNmZyAgICAgICA9IE5lby5jbG9uZShjdG9yLmNvbmZpZywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYmFzZVN0YXRpY0NmZyA9IE5lby5jbG9uZShjdG9yLnN0YXRpY0NvbmZpZywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb3Rvcy51bnNoaWZ0KHByb3RvKTtcbiAgICAgICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnICAgICAgID0gYmFzZUNmZyAgICAgICA/IGJhc2VDZmcgICAgICAgOiBjb25maWc7XG4gICAgICAgIHN0YXRpY0NvbmZpZyA9IGJhc2VTdGF0aWNDZmcgPyBiYXNlU3RhdGljQ2ZnIDogc3RhdGljQ29uZmlnO1xuXG4gICAgICAgIHByb3Rvcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY3RvciA9IGVsZW1lbnQuY29uc3RydWN0b3I7XG4gICAgICAgICAgICBsZXQgY2ZnICAgICAgID0gY3Rvci5nZXRDb25maWcgICAgICAgJiYgY3Rvci5nZXRDb25maWcoKSAgICAgICB8fCB7fSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDZmcgPSBjdG9yLmdldFN0YXRpY0NvbmZpZyAmJiBjdG9yLmdldFN0YXRpY0NvbmZpZygpIHx8IHt9LFxuICAgICAgICAgICAgICAgIG1peGlucztcblxuICAgICAgICAgICAgaWYgKGNmZykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNmZykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc2xpY2UoLTEpID09PSAnXycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjZmdba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZmdba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0dlbmVyYXRlR2V0U2V0KGVsZW1lbnQsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGFwcGx5IHByb3BlcnRpZXMgd2hpY2ggaGF2ZSBubyBzZXR0ZXJzIGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXG4gICAgICAgICAgICAgICAgICAgIC8vIHRob3NlIHdpbGwgZ2V0IGFwcGxpZWQgb24gY3JlYXRlIChOZW8uY29yZS5CYXNlIC0+IGluaXRDb25maWcpXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFoYXNQcm9wZXJ0eVNldHRlcihlbGVtZW50LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwga2V5LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZSAgOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGN0b3IsIHN0YXRpY0NmZyk7XG5cbiAgICAgICAgICAgIGlmIChjZmcuaGFzT3duUHJvcGVydHkoJ250eXBlJykpIHtcbiAgICAgICAgICAgICAgICBOZW8ubnR5cGVNYXBbY2ZnLm50eXBlXSA9IGNmZy5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1peGlucyA9IGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnbWl4aW5zJykgJiYgY29uZmlnLm1peGlucyB8fCBbXTtcblxuICAgICAgICAgICAgaWYgKHN0YXRpY0NmZyAmJiBzdGF0aWNDZmcub2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgICAgIG1peGlucy5wdXNoKCdOZW8uY29yZS5PYnNlcnZhYmxlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZmcuaGFzT3duUHJvcGVydHkoJ21peGlucycpICYmIEFycmF5LmlzQXJyYXkoY2ZnLm1peGlucykgJiYgY2ZnLm1peGlucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbWl4aW5zLnB1c2goLi4uY2ZnLm1peGlucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtaXhpbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYXBwbHlNaXhpbnMoY3RvciwgbWl4aW5zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIGNmZy5taXhpbnM7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLm1peGlucztcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGNmZyk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0YXRpY0NvbmZpZywgc3RhdGljQ2ZnKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjdG9yLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NDb25maWdBcHBsaWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZyAgICAgICAgICAgIDogTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSksXG4gICAgICAgICAgICAgICAgaXNDbGFzcyAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NvbmZpZyAgICAgIDogTmVvLmNsb25lKHN0YXRpY0NvbmZpZywgdHJ1ZSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRDb25maWc7XG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRTdGF0aWNDb25maWc7XG5cbiAgICAgICAgICAgIGlmICghY29uZmlnLnNpbmdsZXRvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUb0dsb2JhbE5zKGNscyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYXBzIG1ldGhvZHMgZnJvbSBvbmUgbmFtZXNwYWNlIHRvIGFub3RoZXIgb25lXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAvLyBhbGlhc2VzXG4gICAgICogTmVvLmFwcGx5RnJvbU5zKE5lbywgVXRpbCwge1xuICAgICAqICAgICBjcmVhdGVTdHlsZU9iamVjdDogJ2NyZWF0ZVN0eWxlT2JqZWN0JyxcbiAgICAgKiAgICAgY3JlYXRlU3R5bGVzICAgICA6ICdjcmVhdGVTdHlsZXMnLFxuICAgICAqICAgICBjYXBpdGFsaXplICAgICAgIDogJ2NhcGl0YWxpemUnLFxuICAgICAqICAgICBkZWNhbWVsICAgICAgICAgIDogJ2RlY2FtZWwnLFxuICAgICAqICAgICBpc0FycmF5ICAgICAgICAgIDogJ2lzQXJyYXknLFxuICAgICAqICAgICBpc0Jvb2xlYW4gICAgICAgIDogJ2lzQm9vbGVhbicsXG4gICAgICogICAgIGlzRGVmaW5lZCAgICAgICAgOiAnaXNEZWZpbmVkJyxcbiAgICAgKiAgICAgaXNOdW1iZXIgICAgICAgICA6ICdpc051bWJlcicsXG4gICAgICogICAgIGlzT2JqZWN0ICAgICAgICAgOiAnaXNPYmplY3QnLFxuICAgICAqICAgICBpc1N0cmluZyAgICAgICAgIDogJ2lzU3RyaW5nJyxcbiAgICAgKiAgICAgdG9BcnJheSAgICAgICAgICA6ICd0b0FycmF5J1xuICAgICAqIH0sIHRydWUpO1xuICAgICAqXG4gICAgICogLy8gZS5nLiBOZW8uY29yZS5VdGlsLmlzT2JqZWN0ID0+IE5lby5pc09iamVjdFxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW98TmVvLmNvcmUuQmFzZX0gdGFyZ2V0IFRoZSB0YXJnZXQgY2xhc3Mgb3Igc2luZ2xldG9uIEluc3RhbmNlIG9yIE5lb1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gbmFtZXNwYWNlIFRoZSBjbGFzcyBjb250YWluaW5nIHRoZSBtZXRob2RzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2JpbmRdIHNldCB0aGlzIHRvIHRydWUgaW4gY2FzZSB5b3Ugd2FudCB0byBiaW5kIG1ldGhvZHMgdG8gdGhlIFwiZnJvbVwiIG5hbWVzcGFjZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRhcmdldFxuICAgICAqL1xuICAgIGFwcGx5RnJvbU5zKHRhcmdldCwgbmFtZXNwYWNlLCBjb25maWcsIGJpbmQpIHtcbiAgICAgICAgbGV0IGZuTmFtZTtcblxuICAgICAgICBpZiAodGFyZ2V0ICYmIGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBmbk5hbWUgPSBuYW1lc3BhY2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gYmluZCA/IGZuTmFtZS5iaW5kKG5hbWVzcGFjZSkgOiBmbk5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBjbGFzcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlLlxuICAgICAqIENhbiBnZXQgY2FsbGVkIGZvciBjbGFzc2VzIGFuZCBzaW5nbGV0b24gaW5zdGFuY2VzXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xuICAgICAqL1xuICAgIGFwcGx5VG9HbG9iYWxOcyhjbHMpIHtcbiAgICAgICAgbGV0IHByb3RvID0gdHlwZW9mIGNscyA9PT0gJ2Z1bmN0aW9uJyA/IGNscy5wcm90b3R5cGU6IGNscyxcbiAgICAgICAgICAgIGNsYXNzTmFtZSwgbnNBcnJheSwga2V5LCBucztcblxuICAgICAgICBpZiAocHJvdG8uY29uc3RydWN0b3IucmVnaXN0ZXJUb0dsb2JhbE5zID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBwcm90by5pc0NsYXNzID8gcHJvdG8uY29uZmlnLmNsYXNzTmFtZSA6IHByb3RvLmNsYXNzTmFtZTtcblxuICAgICAgICAgICAgbnNBcnJheSA9IGNsYXNzTmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAga2V5ICAgICA9IG5zQXJyYXkucG9wKCk7XG4gICAgICAgICAgICBucyAgICAgID0gTmVvLm5zKG5zQXJyYXksIHRydWUpO1xuICAgICAgICAgICAgbnNba2V5XSA9IGNscztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYWxsIGtleXMgb2YgZGVmYXVsdHMgaW50byB0YXJnZXQsIGluIGNhc2UgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzIFRoZSBvYmplY3QgY29udGFpbmluZyB0aGUga2V5cyB5b3Ugd2FudCB0byBjb3B5XG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgYXNzaWduRGVmYXVsdHModGFyZ2V0LCBkZWZhdWx0cykge1xuICAgICAgICBpZiAodGFyZ2V0ICYmIGRlZmF1bHRzICYmIHR5cGVvZiBkZWZhdWx0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRlZmF1bHRzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fCp9IG9ialxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2RlZXA9ZmFsc2VdIFNldCB0aGlzIHRvIHRydWUgaW4gY2FzZSB5b3Ugd2FudCB0byBjbG9uZSBuZXN0ZWQgb2JqZWN0cyBhcyB3ZWxsXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbaWdub3JlTmVvSW5zdGFuY2VzPWZhbHNlXSByZXR1cm5zIGV4aXN0aW5nIGluc3RhbmNlcyBpZiBzZXQgdG8gdHJ1ZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8QXJyYXl8Kn0gdGhlIGNsb25lZCBpbnB1dFxuICAgICAqL1xuICAgIGNsb25lKG9iaiwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKSB7XG4gICAgICAgIGxldCBvdXQ7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9iai5tYXAodmFsID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTmVvLmNsb25lKHZhbCwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmIChvYmouY29uc3RydWN0b3IuaXNDbGFzcyAmJiBvYmogaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlnbm9yZU5lb0luc3RhbmNlcyA/IG9iaiA6IHRoaXMuY2xvbmVOZW9JbnN0YW5jZShvYmopO1xuICAgICAgICAgICAgfSBlbHNlIGlmKG9iai5jb25zdHJ1Y3Rvci5pc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0ID0ge307XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMob2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTmVvLmNsb25lKHZhbHVlLCBkZWVwLCBpZ25vcmVOZW9JbnN0YW5jZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG91dFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqOyAvLyByZXR1cm4gYWxsIG90aGVyIGRhdGEgdHlwZXNcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSB1c2luZyB0aGUgb3JpZ2luYWxDb25maWcgd2l0aG91dCB0aGUgaWRcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvcmUuQmFzZX0gdGhlIGNsb25lZCBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNsb25lTmVvSW5zdGFuY2UoaW5zdGFuY2UpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IHsuLi5pbnN0YW5jZS5vcmlnaW5hbENvbmZpZ307XG4gICAgICAgIGRlbGV0ZSBjb25maWcuX2lkO1xuICAgICAgICBkZWxldGUgY29uZmlnLmlkO1xuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShpbnN0YW5jZS5jbGFzc05hbWUsIGNvbmZpZyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVzZSBOZW8uY3JlYXRlKCkgaW5zdGVhZCBvZiBcIm5ld1wiIHRvIGNyZWF0ZSBpbnN0YW5jZXMgb2YgYWxsIE5lbyBjbGFzc2VzXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uLm1qcyc7XG4gICAgICpcbiAgICAgKiBOZW8uY3JlYXRlKEJ1dHRvbiwge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbi5tanMnO1xuICAgICAqXG4gICAgICogTmVvLmNyZWF0ZSh7XG4gICAgICogICAgIG1vZHVsZSA6IEJ1dHRvbixcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcbiAgICAgKiB9KTtcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5jcmVhdGUoJ05lby5jb21wb25lbnQuQnV0dG9uJyB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8uY3JlYXRlKHtcbiAgICAgKiAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbXBvbmVudC5CdXR0b24nLFxuICAgICAqICAgICBpY29uQ2xzICA6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgICAgOiAnSG9tZSdcbiAgICAgKiB9KTtcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdHxOZW8uY29yZS5CYXNlfSBjbGFzc05hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2NvbmZpZ11cbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvcmUuQmFzZXxudWxsfSBUaGUgbmV3IGNsYXNzIGluc3RhbmNlXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgY3JlYXRlKGNsYXNzTmFtZSwgY29uZmlnKSB7XG4gICAgICAgIGxldCBjbHMsIGluc3RhbmNlO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSAnZnVuY3Rpb24nICYmIHVuZGVmaW5lZCAhPT0gY2xhc3NOYW1lLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICBjbHMgPSBjbGFzc05hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjbGFzc05hbWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZy5jbGFzc05hbWUgJiYgIWNvbmZpZy5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNpbmcgY29uc29sZS5lcnJvciBpbnN0ZWFkIG9mIHRocm93IHRvIHNob3cgdGhlIGNvbmZpZyBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2xhc3MgY3JlYXRlZCB3aXRoIG9iamVjdCBjb25maWd1cmF0aW9uIG1pc3NpbmcgY2xhc3NOYW1lIG9yIG1vZHVsZSBwcm9wZXJ0eScsIGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbmZpZy5jbGFzc05hbWUgPyBjb25maWcuY2xhc3NOYW1lIDogY29uZmlnLm1vZHVsZS5wcm90b3R5cGUuY2xhc3NOYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWV4aXN0cyhjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyAnICsgY2xhc3NOYW1lICsgJyBkb2VzIG5vdCBleGlzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbHMgPSBOZW8ubnMoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluc3RhbmNlID0gbmV3IGNscyhjb25maWcpO1xuXG4gICAgICAgIGluc3RhbmNlLm9uQ29uc3RydWN0ZWQoKTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdCgpO1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuXG4gICAgZW1wdHlGbigpIHt9LFxuXG4gICAgLyoqXG4gICAgICogTWFwcyBhIGNsYXNzTmFtZSBzdHJpbmcgaW50byBhIGdsb2JhbCBuYW1lc3BhY2VcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5ucygnTmVvLmNvbXBvbmVudC5CdXR0b24nLCB0cnVlKTtcbiAgICAgKiAvLyA9PlxuICAgICAqIC8vIHNlbGYuTmVvID0gc2VsZi5OZW8gfHwge307XG4gICAgICogLy8gc2VsZi5OZW8uY29tcG9uZW50ID0gc2VsZi5OZW8uY29tcG9uZW50IHx8IHt9O1xuICAgICAqIC8vIHNlbGYuTmVvLmNvbXBvbmVudC5CdXR0b24gPSBzZWxmLk5lby5jb21wb25lbnQuQnV0dG9uIHx8IHt9O1xuICAgICAqIC8vIHJldHVybiBzZWxmLk5lby5jb21wb25lbnQuQnV0dG9uO1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gbmFtZXMgVGhlIGNsYXNzIG5hbWUgc3RyaW5nIGNvbnRhaW5pbmcgZG90cyBvciBhbiBBcnJheSBvZiB0aGUgc3RyaW5nIHBhcnRzXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbY3JlYXRlXSBTZXQgY3JlYXRlIHRvIHRydWUgdG8gY3JlYXRlIGVtcHR5IG9iamVjdHMgZm9yIG5vbiBleGlzdGluZyBwYXJ0c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdIFNldCBhIGRpZmZlcmVudCBzdGFydGluZyBwb2ludCBhcyBzZWxmXG4gICAgICogQHJldHVybnMge09iamVjdH0gcmVmZXJlbmNlIHRvIHRoZSB0b3BsZXZlbCBuYW1lc3BhY2VcbiAgICAgKi9cbiAgICBucyhuYW1lcywgY3JlYXRlLCBzY29wZSkge1xuICAgICAgICBuYW1lcyA9IEFycmF5LmlzQXJyYXkobmFtZXMpID8gbmFtZXMgOiBuYW1lcy5zcGxpdCgnLicpO1xuXG4gICAgICAgIHJldHVybiBuYW1lcy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChjcmVhdGUgJiYgIXByZXZbY3VycmVudF0pIHtcbiAgICAgICAgICAgICAgICBwcmV2W2N1cnJlbnRdID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzY29wZSB8fCBzZWxmKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBpbnN0YW5jZXMgb2YgTmVvIGNsYXNzZXMgdXNpbmcgdGhlaXIgbnR5cGUgaW5zdGVhZCBvZiB0aGUgY2xhc3MgbmFtZVxuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLm50eXBlKCdidXR0b24nIHtcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcbiAgICAgKiB9KTtcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5udHlwZSh7XG4gICAgICogICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBudHlwZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfVxuICAgICAqIEBzZWUge0BsaW5rIG1vZHVsZTpOZW8uY3JlYXRlIGNyZWF0ZX1cbiAgICAgKi9cbiAgICBudHlwZShudHlwZSwgY29uZmlnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25maWcgPSBudHlwZTtcbiAgICAgICAgICAgIGlmICghY29uZmlnLm50eXBlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyBkZWZpbmVkIHdpdGggb2JqZWN0IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBudHlwZSBwcm9wZXJ0eS4gJyArIGNvbmZpZy5udHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBudHlwZSA9IGNvbmZpZy5udHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBOZW8ubnR5cGVNYXBbbnR5cGVdO1xuXG4gICAgICAgIGlmICghY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ250eXBlICcgKyBudHlwZSArICcgZG9lcyBub3QgZXhpc3QnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShjbGFzc05hbWUsIGNvbmZpZyk7XG4gICAgfSxcblxuICAgIG9uU3RhcnQ6IE5lby5lbXB0eUZuXG59LCBOZW8pO1xuXG4vKipcbiAqIExpc3Qgb2YgY2xhc3MgcHJvcGVydGllcyB3aGljaCBhcmUgbm90IHN1cHBvc2VkIHRvIGdldCBtaXhlZCBpbnRvIG90aGVyIGNsYXNzZXNcbiAqIEB0eXBlIHtzdHJpbmdbXX1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGlnbm9yZU1peGluID0gW1xuICAgICdfbmFtZScsXG4gICAgJ2NsYXNzQ29uZmlnQXBwbGllZCcsXG4gICAgJ2NsYXNzTmFtZScsXG4gICAgJ2NvbnN0cnVjdG9yJyxcbiAgICAnaXNDbGFzcycsXG4gICAgJ21peGluJyxcbiAgICAnbnR5cGUnLFxuICAgICdvYnNlcnZhYmxlJyxcbiAgICAncmVnaXN0ZXJUb0dsb2JhbE5zJ1xuXTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBjbHNcbiAqIEBwYXJhbSB7QXJyYXl9IG1peGluc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYXBwbHlNaXhpbnMoY2xzLCBtaXhpbnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWl4aW5zKSkge1xuICAgICAgICBtaXhpbnMgPSBbbWl4aW5zXTtcbiAgICB9XG5cbiAgICBsZXQgaSAgICAgICAgICAgID0gMCxcbiAgICAgICAgbGVuICAgICAgICAgID0gbWl4aW5zLmxlbmd0aCxcbiAgICAgICAgbWl4aW5DbGFzc2VzID0ge30sXG4gICAgICAgIG1peGluLCBtaXhpbkNscywgbWl4aW5Qcm90bztcblxuICAgIGZvciAoO2kgPCBsZW47aSsrKSB7XG4gICAgICAgIG1peGluID0gbWl4aW5zW2ldO1xuXG4gICAgICAgIGlmIChtaXhpbi5pc0NsYXNzKSB7XG4gICAgICAgICAgICBtaXhpblByb3RvID0gbWl4aW4ucHJvdG90eXBlO1xuICAgICAgICAgICAgbWl4aW5DbHMgICA9IE5lby5ucyhtaXhpblByb3RvLmNsYXNzTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWV4aXN0cyhtaXhpbikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dGVtcHRpbmcgdG8gbWl4aW4gYW4gdW5kZWZpbmVkIGNsYXNzOiAnICsgbWl4aW4gKyAnLCAnICsgY2xzLnByb3RvdHlwZS5jbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWl4aW5DbHMgICA9IE5lby5ucyhtaXhpbik7XG4gICAgICAgICAgICBtaXhpblByb3RvID0gbWl4aW5DbHMucHJvdG90eXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWl4aW5Qcm90by5jbGFzc05hbWUuc3BsaXQoJy4nKS5yZWR1Y2UobWl4UmVkdWNlKG1peGluQ2xzKSwgbWl4aW5DbGFzc2VzKTtcblxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhtaXhpblByb3RvKS5mb3JFYWNoKG1peGluUHJvcGVydHkoY2xzLnByb3RvdHlwZSwgbWl4aW5Qcm90bykpO1xuICAgIH1cblxuICAgIGNscy5wcm90b3R5cGUubWl4aW5zID0gbWl4aW5DbGFzc2VzOyAvLyB0b2RvOiB3ZSBzaG91bGQgZG8gYSBkZWVwIG1lcmdlXG59XG5cbi8qKlxuICogQ3JlYXRlcyBnZXQgLyBzZXQgbWV0aG9kcyBmb3IgY2xhc3MgY29uZmlncyBlbmRpbmcgd2l0aCBhbiB1bmRlcnNjb3JlXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcHJpdmF0ZVxuICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gKi9cbmZ1bmN0aW9uIGF1dG9HZW5lcmF0ZUdldFNldChwcm90bywga2V5KSB7XG4gICAgaWYgKGhhc1Byb3BlcnR5U2V0dGVyKHByb3RvLCBrZXkpKSB7XG4gICAgICAgIHRocm93KCdDb25maWcgJyArIGtleSArICdfICgnICsgcHJvdG8uY2xhc3NOYW1lICsgJykgYWxyZWFkeSBoYXMgYSBzZXQgbWV0aG9kLCB1c2UgYmVmb3JlR2V0LCBiZWZvcmVTZXQgJiBhZnRlclNldCBpbnN0ZWFkJyk7XG4gICAgfVxuXG4gICAgaWYgKCFOZW9bZ2V0U2V0Q2FjaGVdKSB7XG4gICAgICAgIE5lb1tnZXRTZXRDYWNoZV0gPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIU5lb1tnZXRTZXRDYWNoZV1ba2V5XSkge1xuICAgICAgICBOZW9bZ2V0U2V0Q2FjaGVdW2tleV0gPSB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZUdldCA9ICdiZWZvcmVHZXQnICsgTmVvLmNhcGl0YWxpemUoa2V5KSxcbiAgICAgICAgICAgICAgICAgICAgaGFzTmV3S2V5ID0gbWVbY29uZmlnU3ltYm9sXS5oYXNPd25Qcm9wZXJ0eShrZXkpLFxuICAgICAgICAgICAgICAgICAgICBuZXdLZXkgICAgPSBtZVtjb25maWdTeW1ib2xdW2tleV0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICA9IGhhc05ld0tleSA/IG5ld0tleSA6IG1lWydfJyArIGtleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2l0ZW1zJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBbLi4udmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZS52YWx1ZU9mKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChoYXNOZXdLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVba2V5XSA9IHZhbHVlOyAvLyB3ZSBkbyB3YW50IHRvIHRyaWdnZXIgdGhlIHNldHRlciA9PiBiZWZvcmVTZXQsIGFmdGVyU2V0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbJ18nICsga2V5XTsgLy8gcmV0dXJuIHRoZSB2YWx1ZSBwYXJzZWQgYnkgdGhlIHNldHRlclxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtZVtiZWZvcmVHZXRdICYmIHR5cGVvZiBtZVtiZWZvcmVHZXRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbYmVmb3JlR2V0XSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIF9rZXkgICAgICA9ICdfJyArIGtleSxcbiAgICAgICAgICAgICAgICAgICAgdUtleSAgICAgID0gTmVvLmNhcGl0YWxpemUoa2V5KSxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2V0ID0gJ2JlZm9yZVNldCcgKyB1S2V5LFxuICAgICAgICAgICAgICAgICAgICBhZnRlclNldCAgPSAnYWZ0ZXJTZXQnICArIHVLZXksXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlICA9IG1lW19rZXldO1xuXG4gICAgICAgICAgICAgICAgLy8gZXZlcnkgc2V0IGNhbGwgaGFzIHRvIGRlbGV0ZSB0aGUgbWF0Y2hpbmcgc3ltYm9sXG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5XTtcblxuICAgICAgICAgICAgICAgIC8vIHdlIGRvIHdhbnQgdG8gc3RvcmUgdGhlIHZhbHVlIGJlZm9yZSB0aGUgYmVmb3JlU2V0IG1vZGlmaWNhdGlvbiBhcyB3ZWxsLFxuICAgICAgICAgICAgICAgIC8vIHNpbmNlIGl0IGNvdWxkIGdldCBwdWxsZWQgYnkgb3RoZXIgYmVmb3JlU2V0IG1ldGhvZHMgb2YgZGlmZmVyZW50IGNvbmZpZ3NcbiAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1lW2JlZm9yZVNldF0gJiYgdHlwZW9mIG1lW2JlZm9yZVNldF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBtZVtiZWZvcmVTZXRdKHZhbHVlLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhleSBkb24ndCByZXR1cm4gYSB2YWx1ZSwgdGhhdCBtZWFucyBubyBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lW19rZXldID0gb2xkVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHRvZG86IHdlIGNvdWxkIGNvbXBhcmUgb2JqZWN0cyAmIGFycmF5cyBmb3IgZXF1YWxpdHlcbiAgICAgICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lW2FmdGVyU2V0XSAmJiB0eXBlb2YgbWVbYWZ0ZXJTZXRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZVthZnRlclNldF0odmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIGtleSwgTmVvW2dldFNldENhY2hlXVtrZXldKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGNsYXNzIG5hbWUgZXhpc3RzIGluc2lkZSB0aGUgTmVvIG9yIGFwcCBuYW1lc3BhY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZXhpc3RzKGNsYXNzTmFtZSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAhIWNsYXNzTmFtZS5zcGxpdCgnLicpLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF07XG4gICAgICAgIH0sIHNlbGYpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIHNldCBtZXRob2QgZm9yIGEgZ2l2ZW4gcHJvcGVydHkga2V5IGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvIFRoZSB0b3AgbGV2ZWwgcHJvdG90eXBlIG9mIGEgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgdGhlIHByb3BlcnR5IGtleSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhc1Byb3BlcnR5U2V0dGVyKHByb3RvLCBrZXkpIHtcbiAgICBsZXQgZGVzY3JpcHRvcjtcblxuICAgIHdoaWxlIChwcm90by5fX3Byb3RvX18pIHtcbiAgICAgICAgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGtleSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkZXNjcmlwdG9yID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZGVzY3JpcHRvci5zZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBwcm90b1xuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBtaXhpblByb3RvXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBtaXhpblByb3BlcnR5KHByb3RvLCBtaXhpblByb3RvKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAofmlnbm9yZU1peGluLmluZGV4T2Yoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm90b1trZXldICYmIHByb3RvW2tleV0uX2Zyb20pIHtcbiAgICAgICAgICAgIGlmIChtaXhpblByb3RvLmNsYXNzTmFtZSA9PT0gcHJvdG9ba2V5XS5fZnJvbSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTWl4aW4gc2V0IG11bHRpcGxlIHRpbWVzIG9yIGFscmVhZHkgZGVmaW5lZCBvbiBhIEJhc2UgQ2xhc3MnLCBwcm90by5jbGFzc05hbWUsIG1peGluUHJvdG8uY2xhc3NOYW1lLCBrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBwcm90by5jbGFzc05hbWUgKyAnOiBNdWx0aXBsZSBtaXhpbnMgZGVmaW5pbmcgc2FtZSBwcm9wZXJ0eSAoJyArXG4gICAgICAgICAgICAgICAgbWl4aW5Qcm90by5jbGFzc05hbWUgKyAnLCAnICtcbiAgICAgICAgICAgICAgICBwcm90b1trZXldLl9mcm9tICsgJykgPT4gJyArXG4gICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdG9ba2V5XSA9IG1peGluUHJvdG9ba2V5XTtcblxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBrZXkpLl9mcm9tID0gbWl4aW5Qcm90by5jbGFzc05hbWU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwcm90b1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBwcm90b1trZXldLl9uYW1lID0ga2V5O1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIG1peGluQ2xzXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBtaXhSZWR1Y2UobWl4aW5DbHMpIHtcbiAgICByZXR1cm4gKHByZXYsIGN1cnJlbnQsIGlkeCwgYXJyKSA9PiB7XG4gICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdID0gaWR4ICE9PSBhcnIubGVuZ3RoIC0xID8gcHJldltjdXJyZW50XSB8fCB7fSA6IG1peGluQ2xzO1xuICAgIH07XG59XG5cbk5lby5jb25maWcgPSBOZW8uY29uZmlnIHx8IHt9O1xuXG5OZW8uYXNzaWduRGVmYXVsdHMoTmVvLmNvbmZpZywgRGVmYXVsdENvbmZpZyk7XG5cbmV4cG9ydCB7TmVvIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb3JlQmFzZSAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IEZpbHRlciAgICAgZnJvbSAnLi9GaWx0ZXIubWpzJztcbmltcG9ydCBMb2dnZXIgICAgIGZyb20gJy4uL2NvcmUvTG9nZ2VyLm1qcyc7XG5pbXBvcnQgU29ydGVyICAgICBmcm9tICcuL1NvcnRlci5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5pbXBvcnQgVXRpbCAgICAgICBmcm9tICcuLi9jb3JlL1V0aWwubWpzJztcblxuY29uc3QgY291bnRNdXRhdGlvbnMgICA9IFN5bWJvbCgnY291bnRNdXRhdGlvbnMnKSxcbiAgICAgIGlzRmlsdGVyZWQgICAgICAgPSBTeW1ib2woJ2lzRmlsdGVyZWQnKSxcbiAgICAgIGlzU29ydGVkICAgICAgICAgPSBTeW1ib2woJ2lzU29ydGVkJyksXG4gICAgICBzaWxlbnRVcGRhdGVNb2RlID0gU3ltYm9sKCdzaWxlbnRVcGRhdGVNb2RlJyksXG4gICAgICB0b0FkZEFycmF5ICAgICAgID0gU3ltYm9sKCd0b0FkZEFycmF5JyksXG4gICAgICB0b1JlbW92ZUFycmF5ICAgID0gU3ltYm9sKCd0b1JlbW92ZUFycmF5JyksXG4gICAgICB1cGRhdGluZ0luZGV4ICAgID0gU3ltYm9sKCd1cGRhdGluZ0luZGV4Jyk7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb2xsZWN0aW9uLkJhc2VcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvcmVCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS9PYnNlcnZhYmxlLm1qcyBtaXhpblxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbGxlY3Rpb24uQmFzZSdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb2xsZWN0aW9uLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29sbGVjdGlvbidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29sbGVjdGlvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIGZpbHRlcmluZyB0aGUgY29sbGVjdGlvbiBmb3IgdGhlIGZpcnN0IHRpbWUsIGFsbEl0ZW1zIHdpbGwgYmVjb21lIGEgbmV3IGNvbGxlY3Rpb24gZm9yIHRoZSB1bmZpbHRlcmVkXG4gICAgICAgICAqIHN0YXRlLCB1c2luZyB0aGlzIGlkIGFzIHRoZSBzb3VyY2VDb2xsZWN0aW9uSWRcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbGxlY3Rpb24uQmFzZXxudWxsfSBhbGxJdGVtc1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgYWxsSXRlbXM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHNvcnQgdGhlIGNvbGxlY3Rpb24gaXRlbXMgd2hlbiBhZGRpbmcgLyBpbnNlcnRpbmcgbmV3IG9uZXNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b1NvcnRcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Tb3J0OiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVXNlICdwcmltaXRpdmUnIGZvciBkZWZhdWx0IGZpbHRlcnMsIHVzZSAnYWR2YW5jZWQnIGZvciBmaWx0ZXJzIHVzaW5nIGEgZmlsdGVyQnkgbWV0aG9kXG4gICAgICAgICAqIHdoaWNoIG5lZWQgdG8gaXRlcmF0ZSBvdmVyIG90aGVyIGNvbGxlY3Rpb24gaXRlbXNcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBmaWx0ZXJNb2RlPSdwcmltaXRpdmUnXG4gICAgICAgICAqL1xuICAgICAgICBmaWx0ZXJNb2RlOiAncHJpbWl0aXZlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEFycmF5IGNvbnRhaW5pbmcgTmVvLnV0aWwuRmlsdGVyIGNvbmZpZyBvYmplY3RzIG9yIGluc3RhbmNlc1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gZmlsdGVyc189W11cbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlcnNfOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUoISkga2V5IHByb3BlcnR5IG9mIGVhY2ggY29sbGVjdGlvbiBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc189W11cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zXzogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlKCEpIGtleSBwcm9wZXJ0eSBvZiBlYWNoIGNvbGxlY3Rpb24gaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGtleVByb3BlcnR5PSdpZCdcbiAgICAgICAgICovXG4gICAgICAgIGtleVByb3BlcnR5OiAnaWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQSBtYXAgY29udGFpbmluZyB0aGUga2V5ICYgcmVmZXJlbmNlIG9mIGVhY2ggY29sbGVjdGlvbiBpdGVtIGZvciBmYXN0ZXIgYWNjZXNzXG4gICAgICAgICAqIEBtZW1iZXIge01hcH0gbWFwXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtYXBfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gaW50ZXJuYWwgQXJyYXkgb2YgdGhlIHNvcnQgZGlyZWN0aW9ucyBmb3IgZmFzdGVyIGFjY2Vzc1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gc29ydERpcmVjdGlvbnM9bnVsbFxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgc29ydERpcmVjdGlvbnM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBpbnRlcm5hbCBBcnJheSBvZiB0aGUgc29ydCBwcm9wZXJ0aWVzIGZvciBmYXN0ZXIgYWNjZXNzXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBzb3J0UHJvcGVydGllcz1udWxsXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0UHJvcGVydGllczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEFycmF5IGNvbnRhaW5pbmcgTmVvLnV0aWwuU29ydGVyIGNvbmZpZyBvYmplY3RzIG9yIGluc3RhbmNlc1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gc29ydGVyc189W11cbiAgICAgICAgICovXG4gICAgICAgIHNvcnRlcnNfOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpZCBvZiBhbm90aGVyIGNvbGxlY3Rpb24gaW5zdGFuY2UgdG8gdXNlIGFzIHRoaXMgZGF0YSBzb3VyY2VcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHNvdXJjZUlkXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzb3VyY2VJZF86IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBzeW1ib2xDb25maWcgPSB7ZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlfTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtZSwge1xuICAgICAgICAgICAgW2NvdW50TXV0YXRpb25zXSAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW2lzRmlsdGVyZWRdICAgICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW2lzU29ydGVkXSAgICAgICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW3NpbGVudFVwZGF0ZU1vZGVdOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW3RvQWRkQXJyYXldICAgICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogW119LFxuICAgICAgICAgICAgW3RvUmVtb3ZlQXJyYXldICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogW119LFxuICAgICAgICAgICAgW3VwZGF0aW5nSW5kZXhdICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogMH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1lLmF1dG9Tb3J0ICYmIG1lLl9zb3J0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1lLmRvU29ydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBvbmUgb3IgbW9yZSBpdGVtcyB0byB0aGUgZW5kIG9mIHRoZSBjb2xsZWN0aW9uIGFuZCByZXR1cm5zIHRoZSBuZXcgbGVuZ3RoIG9mIHRoZSBjb2xsZWN0aW9uLlxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtIFRoZSBpdGVtKHMpIHRvIGFkZFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XG4gICAgICovXG4gICAgYWRkKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5zcGxpY2UoMCwgbnVsbCwgaXRlbSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldEZpbHRlcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgdmFsdWUuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgICAgICAgICAgaWYgKGZpbHRlci5saXN0ZW5lckFwcGxpZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLm9uKCdjaGFuZ2UnLCBtZS5vbkZpbHRlckNoYW5nZSwgbWUpO1xuICAgICAgICAgICAgICAgIGZpbHRlci5saXN0ZW5lckFwcGxpZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmZpbHRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldEl0ZW1zKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAga2V5UHJvcGVydHkgPSBtZS5rZXlQcm9wZXJ0eSxcbiAgICAgICAgICAgIGkgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgID0gdmFsdWUubGVuZ3RoLFxuICAgICAgICAgICAgaXRlbTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpdGVtID0gdmFsdWVbaV07XG4gICAgICAgICAgICBtZS5tYXAuc2V0KGl0ZW1ba2V5UHJvcGVydHldLCBpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTb3J0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmFwcGx5U29ydGVyQ29uZmlncygpO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goc29ydGVyID0+IHtcbiAgICAgICAgICAgIGlmIChzb3J0ZXIubGlzdGVuZXJBcHBsaWVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHNvcnRlci5vbignY2hhbmdlJywgbWUub25Tb3J0ZXJDaGFuZ2UsIG1lKTtcbiAgICAgICAgICAgICAgICBzb3J0ZXIubGlzdGVuZXJBcHBsaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICYmIG1lLmF1dG9Tb3J0KSB7XG4gICAgICAgICAgICBtZS5kb1NvcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0U291cmNlSWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgc291cmNlID0gTmVvLmdldCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIG1lLl9pdGVtcyA9IFsuLi5zb3VyY2UuX2l0ZW1zXTtcbiAgICAgICAgICAgIG1lLm1hcCAgICA9IG5ldyBNYXAoc291cmNlLm1hcCk7IC8vIGNyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgb3JpZ2luYWwgbWFwXG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVyc0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBtdXRhdGU6IG1lLm9uTXV0YXRlLFxuICAgICAgICAgICAgICAgIHNjb3BlIDogbWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHNvdXJjZS5vbihsaXN0ZW5lcnNDb25maWcpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWZ0ZXJTZXRTb3VyY2VJZCcsIHNvdXJjZSk7XG5cbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9IE5lby5nZXQob2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgIHNvdXJjZS51bihsaXN0ZW5lcnNDb25maWcpOyAvLyB0b2RvOiBjb3JlLk9ic2VydmFibGUudW4gbmVlZHMgdG8gc3VwcG9ydCB0aGlzIHN5bnRheFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZXMgdGhlIHNvcnQgcHJvcGVydHkgJiBkaXJlY3Rpb24gbXVsdGlwbGllciBvZiBlYWNoIHNvcnRlciBpbnNpZGUgMiBhcnJheXMgZm9yIGZhc3RlciBhY2Nlc3Mgd2hlbiBzb3J0aW5nXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhcHBseVNvcnRlckNvbmZpZ3MoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuc29ydERpcmVjdGlvbnMgPSBbXTtcbiAgICAgICAgbWUuc29ydFByb3BlcnRpZXMgPSBbXTtcblxuICAgICAgICBtZS5zb3J0ZXJzLmZvckVhY2goc29ydGVyID0+IHsvL2NvbnNvbGUubG9nKCdmb3JFYWNoJywgc29ydGVyKTtcbiAgICAgICAgICAgIG1lLnNvcnREaXJlY3Rpb25zLnB1c2goc29ydGVyLmRpcmVjdGlvbk11bHRpcGxpZXIpO1xuICAgICAgICAgICAgbWUuc29ydFByb3BlcnRpZXMucHVzaChzb3J0ZXIucHJvcGVydHkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TWFwfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtNYXB8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGJlZm9yZVNldE1hcCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICF2YWx1ZSA/IG5ldyBNYXAoKSA6IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYmVmb3JlU2V0RmlsdGVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA/IFt2YWx1ZV0gOiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsZW4gPSBvbGRWYWx1ZSAmJiBvbGRWYWx1ZS5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIGhhc01hdGNoLCBpO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICghKGtleSBpbnN0YW5jZW9mIFNvcnRlcikpIHtcbiAgICAgICAgICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaSAgICAgICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbGRWYWx1ZVtpXS5vcGVyYXRvciA9PT0gKGtleS5vcGVyYXRvciB8fCAnPT09JykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZVtpXS5wcm9wZXJ0eSA9PT0ga2V5LnByb3BlcnR5ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWVbaV0udmFsdWUgICAgPT09IGtleS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gb2xkVmFsdWVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW4tLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghaGFzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gTmVvLmNyZWF0ZShGaWx0ZXIsIGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBrZXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRTb3J0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID8gW3ZhbHVlXSA6IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxlbiA9IG9sZFZhbHVlICYmIG9sZFZhbHVlLmxlbmd0aCB8fCAwLFxuICAgICAgICAgICAgaGFzTWF0Y2gsIGk7XG5cbiAgICAgICAgdmFsdWUuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEoa2V5IGluc3RhbmNlb2YgU29ydGVyKSkge1xuICAgICAgICAgICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpICAgICAgICA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlW2ldLnByb3BlcnR5ID09PSBrZXkucHJvcGVydHkgJiYgb2xkVmFsdWVbaV0uZGlyZWN0aW9uID09PSBrZXkuZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gb2xkVmFsdWVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW4tLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghaGFzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gTmVvLmNyZWF0ZShTb3J0ZXIsIGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBrZXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0c1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY2FjaGVVcGRhdGUob3B0cykge1xuICAgICAgICBjb25zb2xlLmxvZygnY2FjaGVVcGRhdGUnLCBvcHRzLCB0aGlzW3RvQWRkQXJyYXldKTtyZXR1cm47XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGtleVByb3BlcnR5ID0gbWUua2V5UHJvcGVydHksXG4gICAgICAgICAgICBpbmRleCwgdG9BZGRNYXAsIHRvUmVtb3ZlTWFwO1xuXG4gICAgICAgIGlmICghbWVbc2lsZW50VXBkYXRlTW9kZV0pIHtcbiAgICAgICAgICAgIHRvQWRkTWFwICAgID0gbWVbdG9BZGRBcnJheV0gICAubWFwKGUgPT4gZVtrZXlQcm9wZXJ0eV0pO1xuICAgICAgICAgICAgdG9SZW1vdmVNYXAgPSBtZVt0b1JlbW92ZUFycmF5XS5tYXAoZSA9PiBlW2tleVByb3BlcnR5XSk7XG5cbiAgICAgICAgICAgIG9wdHMuYWRkZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9IHRvUmVtb3ZlTWFwLmluZGV4T2YoaXRlbVtrZXlQcm9wZXJ0eV0pID4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW3RvUmVtb3ZlQXJyYXldLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b0FkZE1hcC5pbmRleE9mKGl0ZW1ba2V5UHJvcGVydHldKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWVbdG9BZGRBcnJheV0ucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgb3B0cy5yZW1vdmVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPSB0b0FkZE1hcC5pbmRleE9mKGl0ZW1ba2V5UHJvcGVydHldKSA+IC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBtZVt0b0FkZEFycmF5XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG9SZW1vdmVNYXAuaW5kZXhPZihpdGVtW2tleVByb3BlcnR5XSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW3RvUmVtb3ZlQXJyYXldLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBpdGVtcyBhbmQgY2xlYXJzIHRoZSBtYXBcbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5faXRlbXMuc3BsaWNlKDAsIG1lLmdldENvdW50KCkpO1xuICAgICAgICBtZS5tYXAuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGN1cnJlbnQgZmlsdGVycyBhbmQgb3B0aW9uYWxseSByZXN0b3JlcyB0aGUgb3JpZ2luYWwgb25lcyBpbiBjYXNlIHRoZXkgZXhpc3RlZC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXN0b3JlT3JpZ2luYWxGaWx0ZXJzPWZhbHNlXVxuICAgICAqL1xuICAgIGNsZWFyRmlsdGVycyhyZXN0b3JlT3JpZ2luYWxGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuZmlsdGVycyA9IHJlc3RvcmVPcmlnaW5hbEZpbHRlcnMgPyBOZW8uY2xvbmUodGhpcy5vcmlnaW5hbENvbmZpZy5maWx0ZXJzLCB0cnVlLCB0cnVlKSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBjdXJyZW50IHNvcnRlcnMgYW5kIG9wdGlvbmFsbHkgcmVzdG9yZXMgdGhlIG9yaWdpbmFsIG9uZXMgaW4gY2FzZSB0aGV5IGV4aXN0ZWQuXG4gICAgICogV2l0aG91dCByZXN0b3JlSW5pdGlhbFN0YXRlIGFzIHRydWUgdGhpcyB3aWxsIG5vdCBhZmZlY3QgdGhlIGN1cnJlbnQgc29ydGluZyBvZiB0aGlzIGNvbGxlY3Rpb24uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcmVzdG9yZU9yaWdpbmFsU29ydGVycz1mYWxzZV1cbiAgICAgKi9cbiAgICBjbGVhclNvcnRlcnMocmVzdG9yZU9yaWdpbmFsU29ydGVycykge1xuICAgICAgICB0aGlzLnNvcnRlcnMgPSByZXN0b3JlT3JpZ2luYWxTb3J0ZXJzID8gTmVvLmNsb25lKHRoaXMub3JpZ2luYWxDb25maWcuc29ydGVycywgdHJ1ZSwgdHJ1ZSkgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge05lby5jb2xsZWN0aW9uLkJhc2V9IFRoZSBjbG9uZWQgY29sbGVjdGlvblxuICAgICAqL1xuICAgIGNsb25lKCkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb25maWcgID0gTmVvLmNsb25lKG1lLm9yaWdpbmFsQ29uZmlnLCB0cnVlKSxcbiAgICAgICAgICAgIGZpbHRlcnMgPSBtZS5fZmlsdGVycyB8fCBbXSxcbiAgICAgICAgICAgIHNvcnRlcnMgPSBtZS5fc29ydGVycyB8fCBbXTtcblxuICAgICAgICBkZWxldGUgY29uZmlnLmlkO1xuICAgICAgICBkZWxldGUgY29uZmlnLmZpbHRlcnM7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuaXRlbXM7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuc29ydGVycztcblxuICAgICAgICBpZiAobWUuX2l0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbmZpZy5pdGVtcyA9IFsuLi5tZS5faXRlbXNdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnLmZpbHRlcnMgPSBbXTtcbiAgICAgICAgY29uZmlnLnNvcnRlcnMgPSBbXTtcblxuICAgICAgICAvLyB0b2RvOiBmaWx0ZXJzICYgc29ydGVycyBzaG91bGQgcHVzaCB0aGVpciBjdXJyZW50IHN0YXRlIGFuZCBub3QgdGhlIG9yaWdpbmFsIG9uZVxuXG4gICAgICAgIGZpbHRlcnMuZm9yRWFjaChmdW5jdGlvbihmaWx0ZXIpIHtcbiAgICAgICAgICAgIGNvbmZpZy5maWx0ZXJzLnB1c2goZmlsdGVyLm9yaWdpbmFsQ29uZmlnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc29ydGVycy5mb3JFYWNoKGZ1bmN0aW9uKHNvcnRlcikge1xuICAgICAgICAgICAgY29uZmlnLnNvcnRlcnMucHVzaChzb3J0ZXIub3JpZ2luYWxDb25maWcpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShCYXNlLCBjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgbWFwICYgaXRlbXMgYXJyYXkgYmVmb3JlIHRoZSBzdXBlciBjYWxsXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pdGVtcy5zcGxpY2UoMCwgbWUuX2l0ZW1zLmxlbmd0aCk7XG4gICAgICAgIG1lLm1hcC5jbGVhcigpO1xuXG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGRvU29ydCgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1zICAgICAgICAgICAgID0gbWUuX2l0ZW1zLFxuICAgICAgICAgICAgc29ydGVycyAgICAgICAgICAgPSBtZS5zb3J0ZXJzLFxuICAgICAgICAgICAgc29ydERpcmVjdGlvbnMgICAgPSBtZS5zb3J0RGlyZWN0aW9ucyxcbiAgICAgICAgICAgIHNvcnRQcm9wZXJ0aWVzICAgID0gbWUuc29ydFByb3BlcnRpZXMsXG4gICAgICAgICAgICBjb3VudFNvcnRlcnMgICAgICA9IHNvcnRQcm9wZXJ0aWVzLmxlbmd0aCB8fCAwLFxuICAgICAgICAgICAgaGFzU29ydEJ5TWV0aG9kICAgPSBmYWxzZSxcbiAgICAgICAgICAgIGhhc1RyYW5zZm9ybVZhbHVlID0gZmFsc2UsXG4gICAgICAgICAgICBpLCBtYXBwZWRJdGVtcywgb2JqLCBzb3J0ZXIsIHNvcnRQcm9wZXJ0eSwgc29ydFZhbHVlO1xuXG4gICAgICAgIGlmIChjb3VudFNvcnRlcnMgPiAwKSB7XG4gICAgICAgICAgICBzb3J0ZXJzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnNvcnRCeSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNTb3J0QnlNZXRob2QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChrZXkudXNlVHJhbnNmb3JtVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzVHJhbnNmb3JtVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoaGFzU29ydEJ5TWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgbWUuX2l0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBjb3VudFNvcnRlcnM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVyICAgID0gc29ydGVyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRWYWx1ZSA9IHNvcnRlcltzb3J0ZXIuc29ydEJ5ID8gJ3NvcnRCeScgOiAnZGVmYXVsdFNvcnRCeSddKGEsIGIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc29ydFZhbHVlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvcnRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzVHJhbnNmb3JtVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc29ydCNTb3J0aW5nX3dpdGhfbWFwXG4gICAgICAgICAgICAgICAgICAgIG1hcHBlZEl0ZW1zID0gaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0ge2luZGV4OiBpbmRleH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGNvdW50U29ydGVyczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRlcnNbaV0udXNlVHJhbnNmb3JtVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3NvcnRQcm9wZXJ0aWVzW2ldXSA9IHNvcnRlcnNbaV0udHJhbnNmb3JtVmFsdWUoaXRlbVtzb3J0UHJvcGVydGllc1tpXV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtzb3J0UHJvcGVydGllc1tpXV0gPSBpdGVtW3NvcnRQcm9wZXJ0aWVzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcHBlZEl0ZW1zID0gaXRlbXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWFwcGVkSXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGNvdW50U29ydGVyczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0UHJvcGVydHkgPSBzb3J0UHJvcGVydGllc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFbc29ydFByb3BlcnR5XSA+IGJbc29ydFByb3BlcnR5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxICogc29ydERpcmVjdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhW3NvcnRQcm9wZXJ0eV0gPCBiW3NvcnRQcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEgKiBzb3J0RGlyZWN0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc1RyYW5zZm9ybVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLl9pdGVtcyA9IG1hcHBlZEl0ZW1zLm1hcChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXNbZWwuaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZVtpc1NvcnRlZF0gPSBjb3VudFNvcnRlcnMgPiAwO1xuXG4gICAgICAgIGlmIChtZVt1cGRhdGluZ0luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgbWUuZmlyZSgnc29ydCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzdW1lcyB0aGUgY29sbGVjdGlvbiBldmVudHMuXG4gICAgICogSWYgeW91IHN0YXJ0ZWQgYW4gdXBkYXRlIHVzaW5nIHRoZSBzdGFydFNpbGVudFVwZGF0ZU1vZGUgZmxhZyxcbiAgICAgKiB5b3UgbXVzdCB1c2UgdGhlIGVuZFNpbGVudFVwZGF0ZU1vZGUgcGFyYW0gZm9yIHRoaXMgY2FsbC5cbiAgICAgKiBVc2luZyB0aGUgZW5kU2lsZW50VXBkYXRlTW9kZSBwYXJhbSB3aWxsIG5vdCBmaXJlIGEgbXV0YXRpb24gZXZlbnQuXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZW5kU2lsZW50VXBkYXRlTW9kZV1cbiAgICAgKiBAc2VlIHtAbGluayBOZW8uY29sbGVjdGlvbi5CYXNlI3N0YXJ0VXBkYXRlIHN0YXJ0VXBkYXRlfVxuICAgICAqL1xuICAgIGVuZFVwZGF0ZShlbmRTaWxlbnRVcGRhdGVNb2RlKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWVbdXBkYXRpbmdJbmRleF0gPiAwKSB7XG4gICAgICAgICAgICBtZVt1cGRhdGluZ0luZGV4XS0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZFNpbGVudFVwZGF0ZU1vZGUpIHtcbiAgICAgICAgICAgIG1lW3NpbGVudFVwZGF0ZU1vZGVdID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5maXJlKCdtdXRhdGUnLCB7XG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtcyAgOiBtZVt0b0FkZEFycmF5XSxcbiAgICAgICAgICAgICAgICByZW1vdmVkSXRlbXM6IG1lW3RvUmVtb3ZlQXJyYXldXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWVbdG9BZGRBcnJheV0gICAuc3BsaWNlKDAsIG1lW3RvQWRkQXJyYXldICAgLmxlbmd0aCk7XG4gICAgICAgICAgICBtZVt0b1JlbW92ZUFycmF5XS5zcGxpY2UoMCwgbWVbdG9SZW1vdmVBcnJheV0ubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZmlsdGVyKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGZpbHRlcnMgICAgICAgICA9IG1lLl9maWx0ZXJzLFxuICAgICAgICAgICAgY291bnRBbGxGaWx0ZXJzID0gZmlsdGVycy5sZW5ndGgsXG4gICAgICAgICAgICBjb3VudEZpbHRlcnMgICAgPSAwLFxuICAgICAgICAgICAgaXRlbXMgICAgICAgICAgID0gbWUuYWxsSXRlbXMgJiYgbWUuYWxsSXRlbXMuX2l0ZW1zIHx8IG1lLl9pdGVtcyxcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBjb3VudEl0ZW1zICAgICAgPSBpdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zICAgPSBbXSxcbiAgICAgICAgICAgIGNvbmZpZywgaXNJbmNsdWRlZCwgaXRlbSwgaiwgdG1wSXRlbXM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudEFsbEZpbHRlcnM7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFmaWx0ZXJzW2ldLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgY291bnRGaWx0ZXJzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnRGaWx0ZXJzID09PSAwICYmIG1lLmFsbEl0ZW1zKSB7XG4gICAgICAgICAgICBtZS5jbGVhcigpO1xuXG4gICAgICAgICAgICBtZS5pdGVtcyA9IFsuLi5tZS5hbGxJdGVtcy5faXRlbXNdO1xuICAgICAgICAgICAgbWUubWFwLnNldCguLi5tZS5hbGxJdGVtcy5tYXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFtZS5hbGxJdGVtcykge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IHsuLi5tZS5vcmlnaW5hbENvbmZpZ307XG5cbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLmZpbHRlcnM7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5pdGVtcztcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLnNvcnRlcnM7XG5cbiAgICAgICAgICAgICAgICBtZS5hbGxJdGVtcyA9IE5lby5jcmVhdGUoQmFzZSwge1xuICAgICAgICAgICAgICAgICAgICAuLi5OZW8uY2xvbmUoY29uZmlnLCB0cnVlLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAga2V5UHJvcGVydHk6IG1lLmtleVByb3BlcnR5LFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VJZCAgIDogbWUuaWRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGlsZCBjb2xsZWN0aW9uJywgbWUuYWxsSXRlbXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5tYXAuY2xlYXIoKTtcblxuICAgICAgICAgICAgaWYgKG1lLmZpbHRlck1vZGUgPT09ICdwcmltaXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgLy8gdXNpbmcgZm9yIGxvb3BzIG9uIHB1cnBvc2UgLT4gcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnRJdGVtczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzSW5jbHVkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtICAgICAgID0gaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGogICAgICAgICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgY291bnRBbGxGaWx0ZXJzOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJzW2pdLmlzRmlsdGVyZWQoaXRlbSwgaXRlbXMsIGl0ZW1zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5jbHVkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0luY2x1ZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5tYXAuc2V0KGl0ZW1bbWUua2V5UHJvcGVydHldLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1lLl9pdGVtcyA9IGZpbHRlcmVkSXRlbXM7IC8vIHNpbGVudCB1cGRhdGUsIHRoZSBtYXAgaXMgYWxyZWFkeSBpbiBwbGFjZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zID0gWy4uLml0ZW1zXTtcblxuICAgICAgICAgICAgICAgIGZvciAoaj0wOyBqIDwgY291bnRBbGxGaWx0ZXJzOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdG1wSXRlbXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnRJdGVtczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbHRlcnNbal0uaXNGaWx0ZXJlZChmaWx0ZXJlZEl0ZW1zW2ldLCBmaWx0ZXJlZEl0ZW1zLCBpdGVtcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBJdGVtcy5wdXNoKGZpbHRlcmVkSXRlbXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcyA9IFsuLi50bXBJdGVtc107XG4gICAgICAgICAgICAgICAgICAgIGNvdW50SXRlbXMgICAgPSBmaWx0ZXJlZEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5pdGVtcyA9IGZpbHRlcmVkSXRlbXM7IC8vIHVwZGF0ZSB0aGUgbWFwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZVtpc0ZpbHRlcmVkXSA9IGNvdW50RmlsdGVycyAhPT0gMDtcblxuICAgICAgICBtZS5maXJlKCdmaWx0ZXInKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBpdGVtcyB3aGljaCBtYXRjaCB0aGUgcHJvcGVydHkgYW5kIHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYW4gZW1wdHkgQXJyYXkgaW4gY2FzZSBubyBpdGVtcyBhcmUgZm91bmRcbiAgICAgKi9cbiAgICBmaW5kKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgID0gW10sXG4gICAgICAgICAgICBpc09iamVjdFByb3BlcnR5ID0gTmVvLmlzT2JqZWN0KHByb3BlcnR5KSxcbiAgICAgICAgICAgIG1hdGNoQXJyYXksIHByb3BlcnRpZXNBcnJheSwgcHJvcGVydGllc0xlbmd0aDtcblxuICAgICAgICBpZiAoaXNPYmplY3RQcm9wZXJ0eSkge1xuICAgICAgICAgICAgcHJvcGVydGllc0FycmF5ICA9IE9iamVjdC5lbnRyaWVzKHByb3BlcnR5KTtcbiAgICAgICAgICAgIHByb3BlcnRpZXNMZW5ndGggPSBwcm9wZXJ0aWVzQXJyYXkubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdFByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hBcnJheS5sZW5ndGggPT09IHByb3BlcnRpZXNMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpdGVtW3Byb3BlcnR5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgaXRlbXMgaW4gdGhlIGNvbGxlY3Rpb24gZm9yIHdoaWNoIHRoZSBwYXNzZWQgZnVuY3Rpb24gcmV0dXJucyB0cnVlXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHJ1biBmb3IgZWFjaCBpdGVtIGluc2lkZSB0aGUgc3RhcnQtZW5kIHJhbmdlLiBSZXR1cm4gdHJ1ZSBmb3IgYSBtYXRjaC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZm4uaXRlbSBUaGUgY3VycmVudCBjb2xsZWN0aW9uIGl0ZW1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlPXRoaXNdIFRoZSBzY29wZSBpbiB3aGljaCB0aGUgcGFzc2VkIGZ1bmN0aW9uIGdldHMgZXhlY3V0ZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0PTBdIFRoZSBzdGFydCBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZW5kPXRoaXMuZ2V0Q291bnQoKV0gVGhlIGVuZCBpbmRleCAodXAgdG8sIGxhc3QgdmFsdWUgZXhjbHVkZWQpXG4gICAgICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGFuIGVtcHR5IEFycmF5IGluIGNhc2Ugbm8gaXRlbXMgYXJlIGZvdW5kXG4gICAgICovXG4gICAgZmluZEJ5KGZuLCBzY29wZSwgc3RhcnQsIGVuZCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbXMgPSBbXSxcbiAgICAgICAgICAgIGkgICAgID0gc3RhcnQgfHwgMCxcbiAgICAgICAgICAgIGxlbiAgID0gZW5kICAgfHwgbWUuZ2V0Q291bnQoKTtcblxuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IG1lO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmbi5jYWxsKHNjb3BlLCBtZS5pdGVtc1tpXSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKG1lLml0ZW1zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBpdGVtIGluc2lkZSB0aGUgY29sbGVjdGlvblxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZmlyc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBvYmplY3QgYXNzb2NpYXRlZCB0byB0aGUga2V5LCBvciB1bmRlZmluZWQgaWYgdGhlcmUgaXMgbm9uZS5cbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge09iamVjdHx1bmRlZmluZWR9XG4gICAgICovXG4gICAgZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaXRlbSBmb3IgYSBnaXZlbiBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGdldEF0KGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1tpbmRleF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBpbnRlcm5hbCBpdGVtcyBhcnJheVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0Q291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0Q291bnRNdXRhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW2NvdW50TXV0YXRpb25zXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBtYXRjaGluZyBmaWx0ZXIgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eSBjb25maWdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAgICAgKiBAcmV0dXJuIHtOZW8uY29sbGVjdGlvbi5GaWx0ZXJ8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRGaWx0ZXIocHJvcGVydHkpIHtcbiAgICAgICAgbGV0IGZpbHRlcnMgPSB0aGlzLmZpbHRlcnMgfHwgW10sXG4gICAgICAgICAgICBpICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgPSBmaWx0ZXJzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyc1tpXS5wcm9wZXJ0eSA9PT0gcHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGtleSBmb3IgYSBnaXZlbiBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ8U3RyaW5nfHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBnZXRLZXlBdChpbmRleCkge1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1zW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIGl0ZW0gJiYgaXRlbVt0aGlzLmtleVByb3BlcnR5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc2hhbGxvdyBjb3B5IG9mIGEgcG9ydGlvbiBvZiB0aGUgaXRlbXMgYXJyYXlcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0XSBaZXJvLWJhc2VkIGluZGV4IGF0IHdoaWNoIHRvIGJlZ2luIGV4dHJhY3Rpb24uXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtlbmRdIFplcm8tYmFzZWQgaW5kZXggYmVmb3JlIHdoaWNoIHRvIGVuZCBleHRyYWN0aW9uIChleHRyYWN0cyB1cCB0byBidXQgbm90IGluY2x1ZGluZyBlbmQpLlxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKiBAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zbGljZVxuICAgICAqL1xuICAgIGdldFJhbmdlKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIFNvdXJjZSBDb2xsZWN0aW9uIGluIGNhc2UgdGhlIHNvdXJjZUNvbGxlY3Rpb25JZCBjb25maWcgd2FzIHNldFxuICAgICAqIEByZXR1cm5zIHtOZW8uY29sbGVjdGlvbi5CYXNlfHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBnZXRTb3VyY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZUlkICYmIE5lby5nZXQodGhpcy5zb3VyY2VJZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIGEgYm9vbGVhbiBhc3NlcnRpbmcgd2hldGhlciBhIHZhbHVlIGhhcyBiZWVuIGFzc29jaWF0ZWQgdG8gdGhlIGtleSBpbiB0aGUgQ29sbGVjdGlvbiBvciBub3RcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGtleVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmhhcyhrZXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBib29sZWFuIGFzc2VydGluZyB3aGV0aGVyIGFuIGl0ZW0gZXhpc3RzIGluIHRoZSBDb2xsZWN0aW9uIG9yIG5vdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzSXRlbShpdGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5oYXMoaXRlbVt0aGlzLmtleVByb3BlcnR5XSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW5kZXggZm9yIGEgZ2l2ZW4ga2V5IG9yIGl0ZW1cbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8T2JqZWN0fSBrZXlcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBpbmRleCAoLTEgaW4gY2FzZSBubyBtYXRjaCBpcyBmb3VuZClcbiAgICAgKi9cbiAgICBpbmRleE9mKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZihVdGlsLmlzT2JqZWN0KGtleSkgPyBrZXkgOiB0aGlzLm1hcC5nZXQoa2V5KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW5kZXggZm9yIGEgZ2l2ZW4gaXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICogQHJldHVybnMge051bWJlcn0gaW5kZXggKC0xIGluIGNhc2Ugbm8gbWF0Y2ggaXMgZm91bmQpXG4gICAgICovXG4gICAgaW5kZXhPZkl0ZW0oaXRlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBmb3IgYSBnaXZlbiBrZXlcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGtleVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IGluZGV4ICgtMSBpbiBjYXNlIG5vIG1hdGNoIGlzIGZvdW5kKVxuICAgICAqL1xuICAgIGluZGV4T2ZLZXkoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKHRoaXMubWFwLmdldChrZXkpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIGFuIGl0ZW0gb3IgYW4gYXJyYXkgb2YgaXRlbXMgYXQgdGhlIHNwZWNpZmllZCBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtXG4gICAgICogQHJldHVybnMge051bWJlcn0gdGhlIGNvbGxlY3Rpb24gY291bnRcbiAgICAgKi9cbiAgICBpbnNlcnQoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgY29sbGVjdGlvbiBpcyBmaWx0ZXJlZFxuICAgICAqL1xuICAgIGlzRmlsdGVyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW2lzRmlsdGVyZWRdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlzRmlsdGVyZWRJdGVtKGl0ZW0pIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmlsdGVycyAgICA9IG1lLl9maWx0ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgID0gZmlsdGVycy5sZW5ndGgsXG4gICAgICAgICAgICBpc0ZpbHRlcmVkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGZpbHRlcnNbaV0uaXNGaWx0ZXJlZChpdGVtKSkge1xuICAgICAgICAgICAgICAgIGlzRmlsdGVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzRmlsdGVyZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBjb2xsZWN0aW9uIGlzIHNvcnRlZFxuICAgICAqL1xuICAgIGlzU29ydGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tpc1NvcnRlZF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGFzdCBpdGVtIGluc2lkZSB0aGUgY29sbGVjdGlvblxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGFzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zW3RoaXMuZ2V0Q291bnQoKSAtMV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25GaWx0ZXJDaGFuZ2Uob3B0cykge1xuICAgICAgICB0aGlzLmZpbHRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uTXV0YXRlKG9wdHMpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAob3B0cy5wcmV2ZW50QnViYmxlVXApIHtcbiAgICAgICAgICAgIG1lLnByZXZlbnRCdWJibGVVcCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5zcGxpY2UobnVsbCwgb3B0cy5yZW1vdmVkSXRlbXMsIG9wdHMuYWRkZWRJdGVtcyk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uTXV0YXRlJywgbWUuZ2V0Q291bnQoKSwgbWUuaWQsIG9wdHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uU29ydGVyQ2hhbmdlKG9wdHMpIHtcbiAgICAgICAgdGhpcy5hcHBseVNvcnRlckNvbmZpZ3MoKTtcbiAgICAgICAgdGhpcy5kb1NvcnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBsYXN0IGVsZW1lbnQgZnJvbSB0aGUgaXRlbXMgYXJyYXkgYW5kIHJldHVybnMgdGhpcyBlbGVtZW50LlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZW1vdmVkIGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbjsgdW5kZWZpbmVkIGlmIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIHBvcCgpIHtcbiAgICAgICAgbGV0IG11dGF0aW9uID0gdGhpcy5zcGxpY2UodGhpcy5nZXRDb3VudCgpIC0xLCAxKTtcbiAgICAgICAgcmV0dXJuIG11dGF0aW9uLnJlbW92ZWRJdGVtc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIG9uZSBvciBtb3JlIGl0ZW1zIHRvIHRoZSBlbmQgb2YgdGhlIGNvbGxlY3Rpb24gYW5kIHJldHVybnMgdGhlIG5ldyBpdGVtcyBjb3VudFxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtIFRoZSBpdGVtKHMpIHRvIGFkZFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XG4gICAgICovXG4gICAgcHVzaChpdGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZChpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgZ2l2ZW4ga2V5LCBpdGVtIG9yIEFycmF5IGNvbnRhaW5pbmcga2V5c3xpdGVtc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xPYmplY3R8QXJyYXl9IGtleVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XG4gICAgICovXG4gICAgcmVtb3ZlKGtleSkge1xuICAgICAgICB0aGlzLnNwbGljZSgwLCBBcnJheS5pc0FycmF5KGtleSkgPyBrZXkgOiBba2V5XSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxuICAgICAqL1xuICAgIHJlbW92ZUF0KGluZGV4KSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXZlcnNlcyB0aGUgaXRlbXMgYXJyYXkgaW4gcGxhY2UuXG4gICAgICogSW50ZW5kZWQgZm9yIGNvbGxlY3Rpb25zIHdpdGhvdXQgc29ydGVycy5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zXG4gICAgICovXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBmaXJzdCBlbGVtZW50IGZyb20gdGhlIGl0ZW1zIGFycmF5IGFuZCByZXR1cm5zIHRoaXMgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVtb3ZlZCBlbGVtZW50IGZyb20gdGhlIGNvbGxlY3Rpb247IHVuZGVmaW5lZCBpZiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBzaGlmdCgpIHtcbiAgICAgICAgbGV0IG11dGF0aW9uID0gdGhpcy5zcGxpY2UoMCwgMSk7XG4gICAgICAgIHJldHVybiBtdXRhdGlvbi5hZGRlZEl0ZW1zWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgRnVuY3Rpb24gdG8gdGVzdCBmb3IgZWFjaCBpdGVtLCB0YWtpbmcgdGhyZWUgcGFyYW1ldGVyczpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICBjYWxsYmFjay5pdGVtIFRoZSBjdXJyZW50IGNvbGxlY3Rpb24gaXRlbSBiZWluZyBwcm9jZXNzZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gIFtjYWxsYmFjay5pbmRleF0gVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IGl0ZW0gYmVpbmcgcHJvY2Vzc2VkXG4gICAgICogQHBhcmFtIHtBcnJheX0gICBbY2FsbGJhY2suaXRlbXNdIFRoZSBpdGVtcyBhcnJheSBvZiB0aGUgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV0gVmFsdWUgdG8gdXNlIGFzIFwidGhpc1wiIHdoZW4gZXhlY3V0aW5nIHRoZSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBjYWxsYmFjayBmdW5jdGlvbiByZXR1cm5zIGEgdHJ1dGh5IHZhbHVlIGZvciBhbnkgY29sbGVjdGlvbiBpdGVtLCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBzb21lKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnNvbWUoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBpdGVtcyBmcm9tIGFuZC9vciBhZGRzIGl0ZW1zIHRvIHRoaXMgY29sbGVjdGlvblxuICAgICAqIElmIHRoZSB0b1JlbW92ZUFycmF5IGlzIHVzZWQsIHRoZW4gdGhlIGluZGV4IGlzIG5vdCB1c2VkIGZvciByZW1vdmluZywgdGhlIGVudHJpZXMgYXJlIGZvdW5kIGJ5IGtleSBhbmQgcmVtb3ZlZCBmcm9tIHdoZXJlIHRoZXkgYXJlLlxuICAgICAqIElmIGluZGV4IGlzIG5vdCBwYXNzZWQsIHRvQWRkQXJyYXkgaXMgYXBwZW5kZWQgdG8gdGhlIENvbGxlY3Rpb24uXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8bnVsbH0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcnxBcnJheX0gW3JlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5XVxuICAgICAqIEBwYXJhbSB7QXJyYXl8IE9iamVjdH0gW3RvQWRkQXJyYXldXG4gICAgICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGFkZGVkSXRlbXMgJiByZW1vdmVkSXRlbXMgYXJyYXlzXG4gICAgICovXG4gICAgc3BsaWNlKGluZGV4LCByZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSwgdG9BZGRBcnJheSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHNvdXJjZSAgICAgICAgICAgICA9IG1lLmdldFNvdXJjZSgpLFxuICAgICAgICAgICAgYWRkZWRJdGVtcyAgICAgICAgID0gW10sXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgICAgPSBtZS5faXRlbXMsXG4gICAgICAgICAgICBrZXlQcm9wZXJ0eSAgICAgICAgPSBtZS5rZXlQcm9wZXJ0eSxcbiAgICAgICAgICAgIG1hcCAgICAgICAgICAgICAgICA9IG1lLm1hcCxcbiAgICAgICAgICAgIHJlbW92ZWRJdGVtcyAgICAgICA9IFtdLFxuICAgICAgICAgICAgcmVtb3ZlQ291bnRBdEluZGV4ID0gVXRpbC5pc051bWJlcihyZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSkgPyByZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSA6IG51bGwsXG4gICAgICAgICAgICB0b1JlbW92ZUFycmF5ICAgICAgPSBBcnJheS5pc0FycmF5KHJlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5KSA/IHJlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5IDogbnVsbCxcbiAgICAgICAgICAgIGksIGl0ZW0sIGtleSwgbGVuLCB0b0FkZE1hcDtcblxuICAgICAgICBpZiAoIWluZGV4ICYmIHJlbW92ZUNvdW50QXRJbmRleCkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKG1lLmlkICsgJzogSWYgaW5kZXggaXMgbm90IHBhc3NlZCwgcmVtb3ZlQ291bnRBdEluZGV4IGNhbm5vdCBiZSB1c2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0b0FkZEFycmF5ID0gdG9BZGRBcnJheSAmJiAhQXJyYXkuaXNBcnJheSh0b0FkZEFycmF5KSA/IFt0b0FkZEFycmF5XSA6IHRvQWRkQXJyYXk7XG5cbiAgICAgICAgaWYgKHRvUmVtb3ZlQXJyYXkgJiYgKGxlbiA9IHRvUmVtb3ZlQXJyYXkubGVuZ3RoKSA+IDApIHtcbiAgICAgICAgICAgIGlmICh0b0FkZEFycmF5ICYmIHRvQWRkQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRvQWRkTWFwID0gdG9BZGRBcnJheS5tYXAoZSA9PiBlW2tleVByb3BlcnR5XSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaT0wOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gdG9SZW1vdmVBcnJheVtpXTtcbiAgICAgICAgICAgICAgICBrZXkgID0gVXRpbC5pc09iamVjdChpdGVtKSA/IGl0ZW1ba2V5UHJvcGVydHldIDogaXRlbTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXAuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0b0FkZE1hcCB8fCAodG9BZGRNYXAgJiYgdG9BZGRNYXAuaW5kZXhPZihrZXkpIDwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWRJdGVtcy5wdXNoKGl0ZW1zLnNwbGljZShtZS5pbmRleE9mS2V5KGtleSksIDEpWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZW1vdmVDb3VudEF0SW5kZXggJiYgcmVtb3ZlQ291bnRBdEluZGV4ID4gMCkge1xuICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zLnB1c2goLi4uaXRlbXMuc3BsaWNlKGluZGV4LCByZW1vdmVDb3VudEF0SW5kZXgpKTtcbiAgICAgICAgICAgIHJlbW92ZWRJdGVtcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIG1hcC5kZWxldGUoZVtrZXlQcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9BZGRBcnJheSAmJiAobGVuID0gdG9BZGRBcnJheS5sZW5ndGgpID4gMCkge1xuICAgICAgICAgICAgZm9yIChpPTA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB0b0FkZEFycmF5W2ldO1xuICAgICAgICAgICAgICAgIGtleSAgPSBVdGlsLmlzT2JqZWN0KGl0ZW0pID8gaXRlbVtrZXlQcm9wZXJ0eV0gOiBpdGVtO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFtYXAuaGFzKGtleSkgJiYgIW1lLmlzRmlsdGVyZWRJdGVtKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZGVkSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgbWFwLnNldChrZXksIGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFkZGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShVdGlsLmlzTnVtYmVyKGluZGV4KSA/IGluZGV4IDogaXRlbXMubGVuZ3RoLCAwLCAuLi5hZGRlZEl0ZW1zKTtcblxuICAgICAgICAgICAgICAgIGlmIChtZS5hdXRvU29ydCAmJiBtZS5fc29ydGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmRvU29ydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmICghc291cmNlLmdldFNvdXJjZSgpKSB7XG4gICAgICAgICAgICAgICAgc291cmNlLnByZXZlbnRCdWJibGVVcCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghbWUucHJldmVudEJ1YmJsZVVwKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NvdXJjZSBzcGxpY2UnLCBzb3VyY2UuaWQsICdhZGRlZDonLCAuLi50b0FkZEFycmF5LCAncmVtb3ZlZDonLCAuLi5yZW1vdmVkSXRlbXMpO1xuICAgICAgICAgICAgICAgIG1lLnN0YXJ0VXBkYXRlKHRydWUpO1xuICAgICAgICAgICAgICAgIHNvdXJjZS5zcGxpY2UobnVsbCwgdG9SZW1vdmVBcnJheSB8fCByZW1vdmVkSXRlbXMsIHRvQWRkQXJyYXkpO1xuICAgICAgICAgICAgICAgIG1lLmVuZFVwZGF0ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIHNvdXJjZS5wcmV2ZW50QnViYmxlVXA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWRkZWRJdGVtcy5sZW5ndGggPiAwIHx8IHJlbW92ZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBtZVtjb3VudE11dGF0aW9uc10rKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG1lW3VwZGF0aW5nSW5kZXhdID09PSAwKSB7XG4gICAgICAgICAgICBtZS5maXJlKCdtdXRhdGUnLCB7XG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtcyAgICAgOiB0b0FkZEFycmF5LFxuICAgICAgICAgICAgICAgIHByZXZlbnRCdWJibGVVcDogbWUucHJldmVudEJ1YmJsZVVwLFxuICAgICAgICAgICAgICAgIHJlbW92ZWRJdGVtcyAgIDogdG9SZW1vdmVBcnJheSB8fCByZW1vdmVkSXRlbXNcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIW1lW3NpbGVudFVwZGF0ZU1vZGVdKSB7XG4gICAgICAgICAgICBtZS5jYWNoZVVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtcyAgOiBhZGRlZEl0ZW1zLFxuICAgICAgICAgICAgICAgIHJlbW92ZWRJdGVtczogcmVtb3ZlZEl0ZW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZVt1cGRhdGluZ0luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIG1lLnByZXZlbnRCdWJibGVVcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRlZEl0ZW1zICA6IGFkZGVkSXRlbXMsXG4gICAgICAgICAgICByZW1vdmVkSXRlbXM6IHJlbW92ZWRJdGVtc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXZlbnRzIHRoZSBjb2xsZWN0aW9uIGZyb20gZmlyaW5nIGV2ZW50cyB1bnRpbCBlbmRVcGRhdGUgZ2V0cyBjYWxsZWQuXG4gICAgICogSWYgeW91IHN0YXJ0IGFuIHVwZGF0ZSB1c2luZyB0aGUgc3RhcnRTaWxlbnRVcGRhdGVNb2RlIHBhcmFtLFxuICAgICAqIHRoZSBtdXRhdGlvbiBldmVudCB3aWxsIG5vdCBmaXJlIGFmdGVyIHVzaW5nIGVuZFVwZGF0ZSgpXG4gICAgICogKHlvdSBtdXN0IHVzZSB0aGUgZW5kU2lsZW50VXBkYXRlTW9kZSBwYXJhbSBmb3IgdGhlIGVuZFVwZGF0ZSBjYWxsIGluIGNhc2UgeW91IHVzZWRcbiAgICAgKiBzdGFydFNpbGVudFVwZGF0ZU1vZGUgaGVyZSlcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzdGFydFNpbGVudFVwZGF0ZU1vZGVdXG4gICAgICogQHNlZSB7QGxpbmsgTmVvLmNvbGxlY3Rpb24uQmFzZSNlbmRVcGRhdGUgZW5kVXBkYXRlfVxuICAgICAqL1xuICAgIHN0YXJ0VXBkYXRlKHN0YXJ0U2lsZW50VXBkYXRlTW9kZSkge1xuICAgICAgICBpZiAoc3RhcnRTaWxlbnRVcGRhdGVNb2RlKSB7XG4gICAgICAgICAgICB0aGlzW3NpbGVudFVwZGF0ZU1vZGVdID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNbdXBkYXRpbmdJbmRleF0rKztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIG9uZSBvciBtb3JlIGVsZW1lbnRzIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGNvbGxlY3Rpb24gYW5kIHJldHVybnMgdGhlIG5ldyBpdGVtcyBjb3VudFxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtIFRoZSBpdGVtKHMpIHRvIGFkZFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XG4gICAgICovXG4gICAgdW5zaGlmdChpdGVtKSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKDAsIDAsIGl0ZW0pO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgbXV0YXRlIGV2ZW50IGZpcmVzIGFmdGVyIGV2ZXJ5IHNwbGljZSBjYWxsIChpbnZva2VkIGJ5IGFsbCBtZXRob2RzIHdoaWNoIGNoYW5nZSB0aGUgY29udGVudCBvZiB0aGUgaXRlbXMgYXJyYXkpLlxuICogQGV2ZW50IG11dGF0ZVxuICogQHBhcmFtIHtPYmplY3RbXX0gYWRkZWRJdGVtc1xuICogQHBhcmFtIHtCb29sZWFufSBwcmV2ZW50QnViYmxlVXAgcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3RbXX0gcmVtb3ZlZEl0ZW1zXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlOyIsImltcG9ydCBCYXNlICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb2xsZWN0aW9uLkZpbHRlclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS9PYnNlcnZhYmxlLm1qcyBtaXhpblxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgdGhlIG9wZXJhdG9yIGNvbmZpZzo8YnI+XG4gICAgICAgICAqIFsnPT0nLCAnPT09JywgJyE9JywgJyE9PScsICc8JywgJzw9JywgJz4nLCAnPj0nLCAnZXhjbHVkZWQnLCAnaW5jbHVkZWQnLCAnaXNEZWZpbmVkJywgJ2lzVW5kZWZpbmVkJywgJ2xpa2UnXVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gb3BlcmF0b3JzXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9wZXJhdG9yczogWyc9PScsICc9PT0nLCAnIT0nLCAnIT09JywgJzwnLCAnPD0nLCAnPicsICc+PScsICdleGNsdWRlZCcsICdpbmNsdWRlZCcsICdpc0RlZmluZWQnLCAnaXNVbmRlZmluZWQnLCAnbGlrZSddXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29sbGVjdGlvbi5GaWx0ZXInXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29sbGVjdGlvbi5GaWx0ZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nZmlsdGVyJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdmaWx0ZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0dGluZyBkaXNhYmxlZCB0byB0cnVlIHdpbGwgZXhjbHVkZSB0aGlzIGZpbHRlciBmcm9tIHRoZSBjb2xsZWN0aW9uIGZpbHRlcmluZyBsb2dpY1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBkaXNhYmxlZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm92aWRlIGEgY3VzdG9tIGZpbHRlcmluZyBmdW5jdGlvbiwgaGFzIGEgaGlnaGVyIHByaW9yaXR5IHRoYW4gcHJvcGVydHksIG9wZXJhdG9yICYgdmFsdWVcbiAgICAgICAgICogQG1lbWJlciB7RnVuY3Rpb258bnVsbH0gZmlsdGVyQnlfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlckJ5XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgbWVhbnMgbm90IGZpbHRlcmluZyBvdXQgaXRlbXMgaW4gY2FzZSB0aGUgdmFsdWUgaXMgJycsIG51bGwsIFtdIG9yIHt9XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGluY2x1ZGVFbXB0eVZhbHVlcz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaW5jbHVkZUVtcHR5VmFsdWVzOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIGZsYWcgdG8gdHJ1ZSBiZWZvcmUgc3RhcnRpbmcgYnVsayB1cGRhdGVzIChlLmcuIGNoYW5naW5nIHByb3BlcnR5ICYgdmFsdWUpXG4gICAgICAgICAqIHRvIHByZXZlbnQgbXVsdGlwbGUgY2hhbmdlIGV2ZW50c1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc1VwZGF0aW5nXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaXNVcGRhdGluZ186IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG93bmVyIHV0aWwuQ29sbGVjdGlvbiBuZWVkcyB0byBhcHBseSBhbiBvbkNoYW5nZSBsaXN0ZW5lciBvbmNlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGxpc3RlbmVyQXBwbGllZD1mYWxzZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbGlzdGVuZXJBcHBsaWVkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBvcGVyYXRvciB0byBmaWx0ZXIgYnkgKHVzZSB0aGUgY29tYmluYXRpb24gb2YgcHJvcGVydHksIG9wZXJhdG9yICYgdmFsdWUpXG4gICAgICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgICAgICpcbiAgICAgICAgICogPT0gKG5vdCByZWNvbW1lbmRlZClcbiAgICAgICAgICogPT09XG4gICAgICAgICAqICE9IChub3QgcmVjb21tZW5kZWQpXG4gICAgICAgICAqICE9PVxuICAgICAgICAgKiA8XG4gICAgICAgICAqID49XG4gICAgICAgICAqID5cbiAgICAgICAgICogPj1cbiAgICAgICAgICogbGlrZSAoY29sbGVjdGlvblZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKVxuICAgICAgICAgKiBpbmNsdWRlZCAoZXhwZWN0cyB2YWx1ZSB0byBiZSBhbiBhcnJheSlcbiAgICAgICAgICogZXhjbHVkZWQgKGV4cGVjdHMgdmFsdWUgdG8gYmUgYW4gYXJyYXkpXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gb3BlcmF0b3I9Jz09PSdcbiAgICAgICAgICovXG4gICAgICAgIG9wZXJhdG9yXzogJz09PScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcHJvcGVydHkgdG8gZmlsdGVyIGJ5ICh1c2UgdGhlIGNvbWJpbmF0aW9uIG9mIHByb3BlcnR5LCBvcGVyYXRvciAmIHZhbHVlKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHByb3BlcnR5Xz0naWQnXG4gICAgICAgICAqL1xuICAgICAgICBwcm9wZXJ0eV86ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2NvcGUgdG8gdXNlIGZvciB0aGUgZmlsdGVyQnkgbWV0aG9kLCBpbiBjYXNlIGl0IGlzIHByb3ZpZGVkLiBEZWZhdWx0cyB0byB0aGlzIGluc3RhbmNlLlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gc2NvcGU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2NvcGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmFsdWUgdG8gZmlsdGVyIGJ5ICh1c2UgdGhlIGNvbWJpbmF0aW9uIG9mIHByb3BlcnR5LCBvcGVyYXRvciAmIHZhbHVlKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHZhbHVlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZV86IG51bGxcbiAgICB9fVxuXG4gICAgYWZ0ZXJTZXREaXNhYmxlZCguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIGFmdGVyU2V0RmlsdGVyQnkodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vIHRvZG9cbiAgICB9XG5cbiAgICBhZnRlclNldElzVXBkYXRpbmcodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZnRlclNldE9wZXJhdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5maXJlQ2hhbmdlRXZlbnQoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgYWZ0ZXJTZXRQcm9wZXJ0eSguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIGFmdGVyU2V0VmFsdWUoLi4uYXJncykge1xuICAgICAgICB0aGlzLmZpcmVDaGFuZ2VFdmVudCguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBiZWZvcmVTZXRGaWx0ZXJCeSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdmaWx0ZXJCeSBoYXMgdG8gYmUgYSBmdW5jdGlvbicsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIG9sZFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIG9wZXJhdG9yIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYmVmb3JlU2V0T3BlcmF0b3IodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdvcGVyYXRvcicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHBhcmFtIG9sZFZhbHVlXG4gICAgICovXG4gICAgZmlyZUNoYW5nZUV2ZW50KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIG1lLmlzVXBkYXRpbmcgIT09IHRydWUpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogbWUub3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6IG1lLnByb3BlcnR5LFxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiBtZS52YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgYSBjb2xsZXRpb24gaXRlbSBtYXRjaGVzIHRoaXMgZmlsdGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gVGhlIGN1cnJlbnQgY29sbGVjdGlvbiBpdGVtXG4gICAgICogQHBhcmFtIHtBcnJheX0gZmlsdGVyZWRJdGVtcyBJZiB0aGUgY29sbGVjdGlvbiBmaWx0ZXJNb2RlIGlzIG5vdCBwcmltaXRpdmUgY29udGFpbnMgdGhlIGl0ZW1zIHdoaWNoIHBhc3NlZFxuICAgICAqIHRoZSBwcmV2aW91cyBmaWx0ZXJzLCBvdGhlcndpc2UgYWxsIGNvbGxlY3Rpb24gaXRlbXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhbGxJdGVtcyBhbGwgY29sbGVjdGlvbiBpdGVtc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzRmlsdGVyZWQoaXRlbSwgZmlsdGVyZWRJdGVtcywgYWxsSXRlbXMpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuX2Rpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUuaW5jbHVkZUVtcHR5VmFsdWVzICYmIChtZS5fdmFsdWUgPT09IG51bGwgfHwgTmVvLmlzRW1wdHkobWUuX3ZhbHVlKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS5fZmlsdGVyQnkpIHtcbiAgICAgICAgICAgIHJldHVybiBtZS5maWx0ZXJCeS5jYWxsKG1lLnNjb3BlIHx8IG1lLCBpdGVtLCBmaWx0ZXJlZEl0ZW1zLCBhbGxJdGVtcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gIUZpbHRlclttZS5fb3BlcmF0b3JdKGl0ZW1bbWUuX3Byb3BlcnR5XSwgbWUuX3ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBbJz09J10gKGEsIGIpIHtyZXR1cm4gYSA9PSBiO31cbiAgICBzdGF0aWMgWyc9PT0nXShhLCBiKSB7cmV0dXJuIGEgPT09IGI7fVxuICAgIHN0YXRpYyBbJyE9J10gKGEsIGIpIHtyZXR1cm4gYSAhPSBiO31cbiAgICBzdGF0aWMgWychPT0nXShhLCBiKSB7cmV0dXJuIGEgIT09IGI7fVxuICAgIHN0YXRpYyBbJzwnXSAgKGEsIGIpIHtyZXR1cm4gYSA8IGI7fVxuICAgIHN0YXRpYyBbJzw9J10gKGEsIGIpIHtyZXR1cm4gYSA8PSBiO31cbiAgICBzdGF0aWMgWyc+J10gIChhLCBiKSB7cmV0dXJuIGEgPiBiO31cbiAgICBzdGF0aWMgWyc+PSddIChhLCBiKSB7cmV0dXJuIGEgPj0gYjt9XG5cbiAgICBzdGF0aWMgWydleGNsdWRlZCddKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuaW5kZXhPZihhKSA8IDA7XG4gICAgfVxuXG4gICAgc3RhdGljIFsnaW5jbHVkZWQnXShhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLmluZGV4T2YoYSkgPiAtMTtcbiAgICB9XG5cbiAgICBzdGF0aWMgWydpc0RlZmluZWQnXShhLCBiKSB7XG4gICAgICAgIHJldHVybiBhICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgc3RhdGljIFsnaXNVbmRlZmluZWQnXShhLCBiKSB7XG4gICAgICAgIHJldHVybiBhID09PSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgc3RhdGljIFsnbGlrZSddKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhiLnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRmlsdGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyOyIsImltcG9ydCBCYXNlICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb2xsZWN0aW9uLlNvcnRlclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBTb3J0ZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS9PYnNlcnZhYmxlLm1qcyBtaXhpblxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbGxlY3Rpb24uU29ydGVyJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbGxlY3Rpb24uU29ydGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3NvcnRlcidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnc29ydGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGNvbmZpZyB3aGljaCBtYXBwcyB0aGUgZGlyZWN0aW9uIEFTQyB0byAxLCAtMSBvdGhlcndpc2VcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBkaXJlY3Rpb25NdWx0aXBsaWVyPTFcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGRpcmVjdGlvbk11bHRpcGxpZXI6IDEsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc29ydCBkaXJlY3Rpb24gd2hlbiB1c2luZyBhIHByb3BlcnR5LlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRpcmVjdGlvbl89J0FTQydcbiAgICAgICAgICovXG4gICAgICAgIGRpcmVjdGlvbl86ICdBU0MnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG93bmVyIHV0aWwuQ29sbGVjdGlvbiBuZWVkcyB0byBhcHBseSBhbiBvbkNoYW5nZSBsaXN0ZW5lciBvbmNlXG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IGxpc3RlbmVyQXBwbGllZD1mYWxzZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbGlzdGVuZXJBcHBsaWVkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwcm9wZXJ0eSB0byBzb3J0IGJ5LlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHByb3BlcnR5Xz0naWQnXG4gICAgICAgICAqL1xuICAgICAgICBwcm9wZXJ0eV86ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm92aWRlIGEgY3VzdG9tIHNvcnRpbmcgZnVuY3Rpb24sIGhhcyBhIGhpZ2hlciBwcmlvcml0eSB0aGFuIHByb3BlcnR5ICYgZGlyZWN0aW9uXG4gICAgICAgICAqIEBtZW1iZXIge0Z1bmN0aW9ufG51bGx9IHNvcnRCeT1udWxsXG4gICAgICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQ29sbGF0b3JcbiAgICAgICAgICovXG4gICAgICAgIHNvcnRCeTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgdG8gdXNlIHRoZSB0cmFuc2Zvcm1WYWx1ZSBtZXRob2QgZm9yIGVhY2ggaXRlbSAodGhlIG1ldGhvZCBjYW4gZ2V0IG92ZXJyaWRkZW4pXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHVzZVRyYW5zZm9ybVZhbHVlPXRydWVcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHVzZVRyYW5zZm9ybVZhbHVlOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXREaXJlY3Rpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuZGlyZWN0aW9uTXVsdGlwbGllciA9IHZhbHVlID09PSAnQVNDJyA/IDEgOiAtMTtcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG1lLmRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6IG1lLnByb3BlcnR5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRQcm9wZXJ0eSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG1lLmRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6IG1lLnByb3BlcnR5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgc29ydGVyIGZ1bmN0aW9uIHdoaWNoIGdldHMgdXNlZCBieSBjb2xsZWN0aW9ucyBpbiBjYXNlIGF0IGxlYXN0IG9uZSBzb3J0ZXIgaGFzIGEgcmVhbCBzb3J0QnkgbWV0aG9kXG4gICAgICogQHBhcmFtIGFcbiAgICAgKiBAcGFyYW0gYlxuICAgICAqL1xuICAgIGRlZmF1bHRTb3J0QnkoYSwgYikge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGEgPSBhW21lLnByb3BlcnR5XTtcbiAgICAgICAgYiA9IGJbbWUucHJvcGVydHldO1xuXG4gICAgICAgIGlmIChtZS51c2VUcmFuc2Zvcm1WYWx1ZSkge1xuICAgICAgICAgICAgYSA9IG1lLnRyYW5zZm9ybVZhbHVlKGEpO1xuICAgICAgICAgICAgYiA9IG1lLnRyYW5zZm9ybVZhbHVlKGIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgICAgICByZXR1cm4gMSAqIG1lLmRpcmVjdGlvbk11bHRpcGxpZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgICAgIHJldHVybiAtMSAqIG1lLmRpcmVjdGlvbk11bHRpcGxpZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Kn0gdmFsdWVcbiAgICAgKi9cbiAgICB0cmFuc2Zvcm1WYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoU29ydGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgU29ydGVyOyIsImltcG9ydCB7ZGVmYXVsdCBhcyBDb3JlQmFzZX0gIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgICAgICAgZnJvbSAnLi4vbWFuYWdlci9Db21wb25lbnQubWpzJztcbmltcG9ydCBEb21FdmVudE1hbmFnZXIgICAgICAgIGZyb20gJy4uL21hbmFnZXIvRG9tRXZlbnQubWpzJztcbmltcG9ydCBLZXlOYXZpZ2F0aW9uICAgICAgICAgIGZyb20gJy4uL3V0aWwvS2V5TmF2aWdhdGlvbi5tanMnO1xuaW1wb3J0IExvZ2dlciAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9Mb2dnZXIubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgICAgICAgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlICAgICAgICAgICAgIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuaW1wb3J0IFN0eWxlICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vdXRpbC9TdHlsZS5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9VdGlsLm1qcyc7XG5pbXBvcnQge2RlZmF1bHQgYXMgVkRvbVV0aWx9ICBmcm9tICcuLi91dGlsL1ZEb20ubWpzJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBWTm9kZVV0aWx9IGZyb20gJy4uL3V0aWwvVk5vZGUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbXBvbmVudC5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb3JlQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb21wb25lbnQuQmFzZSdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb21wb25lbnQuQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjb21wb25lbnQnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgbW91bnRzIGEgY29tcG9uZW50IGFmdGVyIGJlaW5nIHJlbmRlcmVkLlxuICAgICAgICAgKiBVc2UgdGhpcyBmb3IgdGhlIHRvcCBsZXZlbCBjb21wb25lbnQgb2YgeW91ciBhcHAuXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGF1dG9Nb3VudD1mYWxzZVxuICAgICAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Nb3VudDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgcmVuZGVycyBhIGNvbXBvbmVudCBhZnRlciBiZWluZyBjcmVhdGVkIGluc2lkZSB0aGUgaW5pdCBjYWxsLlxuICAgICAgICAgKiBVc2UgdGhpcyBmb3IgdGhlIHRvcCBsZXZlbCBjb21wb25lbnQgb2YgeW91ciBhcHAuXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGF1dG9SZW5kZXI9ZmFsc2VcbiAgICAgICAgICogQHNlZSB7QGxpbmsgTmVvLmNvbXBvbmVudC5CYXNlI2luaXQgaW5pdH1cbiAgICAgICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvUmVuZGVyOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIG1hbmFnZXIuRm9jdXMgd2lsbCBjaGFuZ2UgdGhpcyBmbGFnIG9uIGZvY3VzaW4gJiBvdXQgZG9tIGV2ZW50c1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBjb250YWluc0ZvY3VzXz1mYWxzZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY29udGFpbnNGb2N1c186IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQXNzaWduIGEgY29tcG9uZW50IGNvbnRyb2xsZXIgdG8gdGhpcyBjb21wb25lbnQgKHBhc3MgYW4gaW1wb3J0ZWQgbW9kdWxlIG9yIHRoZSBzdHJpbmcgYmFzZWQgY2xhc3MgbmFtZSlcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fFN0cmluZ30gY29udHJvbGxlcl89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbGxlcl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNhYmxlZCBjb21wb25lbnRzIHdpbGwgZ2V0IHRoZSBuZW8tZGlzYWJsZWQgY2xzIGFwcGxpZWQgYW5kIHdvbid0IHJlY2VpdmUgRE9NIGV2ZW50c1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBkaXNhYmxlZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhcnJheSBvZiBkb21MaXN0ZW5lciBjb25maWdzXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfG51bGx9IGRvbUxpc3RlbmVyc189bnVsbFxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBhZnRlclNldFN0YXlPbkhvdmVyKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAgKiAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAqICAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAqICAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IG1lLmRvbUxpc3RlbmVycyB8fCBbXTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAqICAgICAgICAgICAgIG1vdXNlZW50ZXI6IG1lLm9uTW91c2VFbnRlcixcbiAgICAgICAgICogICAgICAgICAgICAgc2NvcGUgICAgIDogbWVcbiAgICAgICAgICogICAgICAgICB9LCB7XG4gICAgICAgICAqICAgICAgICAgICAgIG1vdXNlbGVhdmU6IG1lLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgICogICAgICAgICAgICAgc2NvcGUgICAgIDogbWVcbiAgICAgICAgICogICAgICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICAgICAgICogICAgfVxuICAgICAgICAgKn1cbiAgICAgICAgICovXG4gICAgICAgIGRvbUxpc3RlbmVyc186IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBmbGFnIHdoaWNoIHdpbGwgZ2V0IHNldCB0byB0cnVlIG9uIG1vdW50XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGhhc0JlZW5Nb3VudGVkPWZhbHNlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBoYXNCZWVuTW91bnRlZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBmbGFnIGZvciB2ZG9tIGNoYW5nZXMgYWZ0ZXIgYSBjb21wb25lbnQgZ290IHVubW91bnRlZFxuICAgICAgICAgKiAoZGVsdGEgdXBkYXRlcyBjYW4gbm8gbG9uZ2VyIGdldCBhcHBsaWVkICYgYSBuZXcgcmVuZGVyIGNhbGwgaXMgcmVxdWlyZWQgYmVmb3JlIHJlLW1vdW50aW5nKVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBoYXNVbm1vdW50ZWRWZG9tQ2hhbmdlc189ZmFsc2VcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGhhc1VubW91bnRlZFZkb21DaGFuZ2VzXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG9ydGN1dCBmb3Igc3R5bGUuaGVpZ2h0LCBkZWZhdWx0cyB0byBweFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8U3RyaW5nfG51bGx9IGhlaWdodF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaGVpZ2h0XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0b3AgbGV2ZWwgaW5uZXJIVE1MIG9mIHRoZSBjb21wb25lbnRcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGh0bWxfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGh0bWxfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVuaXF1ZSBjb21wb25lbnQgaWRcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGlkXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBpZF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBmbGFnIHdoaWNoIHdpbGwgZ2V0IHNldCB0byB0cnVlIHdoaWxlIGFuIHVwZGF0ZSByZXF1ZXN0ICh3b3JrZXIgbWVzc2FnZXMpIGlzIGluIHByb2dyZXNzXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzVmRvbVVwZGF0aW5nPWZhbHNlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBpc1Zkb21VcGRhdGluZzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVc2luZyB0aGUga2V5cyBjb25maWcgd2lsbCBjcmVhdGUgYW4gaW5zdGFuY2Ugb2YgTmVvLnV0aWwuS2V5TmF2aWdhdGlvbi5cbiAgICAgICAgICogQHNlZSB7QGxpbmsgTmVvLnV0aWwuS2V5TmF2aWdhdGlvbiBLZXlOYXZpZ2F0aW9ufVxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGtleXNfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGtleXNfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvcnRjdXQgZm9yIHN0eWxlLm1heEhlaWdodCwgZGVmYXVsdHMgdG8gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfFN0cmluZ3xudWxsfSBtYXhIZWlnaHRfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIG1heEhlaWdodF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG9ydGN1dCBmb3Igc3R5bGUubWF4V2lkdGgsIGRlZmF1bHRzIHRvIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxTdHJpbmd8bnVsbH0gbWF4V2lkdGhfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIG1heFdpZHRoXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3J0Y3V0IGZvciBzdHlsZS5taW5IZWlnaHQsIGRlZmF1bHRzIHRvIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxTdHJpbmd8bnVsbH0gbWluSGVpZ2h0Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtaW5IZWlnaHRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvcnRjdXQgZm9yIHN0eWxlLm1pbldpZHRoLCBkZWZhdWx0cyB0byBweFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8U3RyaW5nfG51bGx9IG1pbldpZHRoXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtaW5XaWR0aF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGluIGNhc2UgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkIHRvIHRoZSBET01cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbW91bnRlZF89ZmFsc2VcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG1vdW50ZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGZsYWcgd2hpY2ggd2lsbCBnZXQgc2V0IHRvIHRydWUgaW4gY2FzZSBhbiB1cGRhdGUgY2FsbCBhcnJpdmVzIHdoaWxlIGFub3RoZXIgdXBkYXRlIGlzIHJ1bm5pbmdcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbmVlZHNWZG9tVXBkYXRlPWZhbHNlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBuZWVkc1Zkb21VcGRhdGU6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBpbiBjYXNlIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyaW5nIHRoZSB2bm9kZVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZW5kZXJpbmdfPWZhbHNlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICByZW5kZXJpbmc6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgdG8gdHJ1ZSBmb3IgYnVsayB1cGRhdGVzLlxuICAgICAgICAgKiBFbnN1cmUgdG8gc2V0IGl0IGJhY2sgdG8gZmFsc2UgYWZ0ZXJ3YXJkcy5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2lsZW50VmRvbVVwZGF0ZT1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc2lsZW50VmRvbVVwZGF0ZTogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUb3AgbGV2ZWwgc3R5bGUgYXR0cmlidXRlc1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHN0eWxlPXt9XG4gICAgICAgICAqL1xuICAgICAgICBzdHlsZToge30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgdG9vbHRpcCBjb25maWcgb2JqZWN0c1xuICAgICAgICAgKiBTZWUgdG9vbHRpcC9CYXNlLm1qc1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheXxPYmplY3R9IHRvb2x0aXBzXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB0b29sdGlwc186IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY29tcG9uZW50IHZub2RlIHRyZWUuIEF2YWlsYWJsZSBhZnRlciB0aGUgY29tcG9uZW50IGdvdCByZW5kZXJlZC5cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSB2bm9kZV89bnVsbFxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdm5vZGVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvcnRjdXQgZm9yIHN0eWxlLndpZHRoLCBkZWZhdWx0cyB0byBweFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8U3RyaW5nfG51bGx9IHdpZHRoXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB3aWR0aF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUb3AgbGV2ZWwgc3R5bGUgYXR0cmlidXRlcy4gVXNlZnVsIGluIGNhc2UgZ2V0VmRvbVJvb3QoKSBkb2VzIG5vdCBwb2ludCB0byB0aGUgdG9wIGxldmVsIERPTSBub2RlLlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHdyYXBwZXJTdHlsZV89e31cbiAgICAgICAgICovXG4gICAgICAgIHdyYXBwZXJTdHlsZV86IHt9LFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHZkb20gbWFya3VwIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbT17fVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHt9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFNwZWNpZnkgYSBkaWZmZXJlbnQgdmRvbSByb290IGlmIG5lZWRlZCB0byBhcHBseSB0aGUgdG9wIGxldmVsIHN0eWxlIGF0dHJpYnV0ZXMgb24gYSBkaWZmZXJlbnQgbGV2ZWwuXG4gICAgICogTWFrZSBzdXJlIHRvIHVzZSBnZXRWbm9kZVJvb3QoKSBhcyB3ZWxsLCB0byBrZWVwIHRoZSB2ZG9tICYgdm5vZGUgdHJlZXMgaW4gc3luYy5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbmV3IHZkb20gcm9vdFxuICAgICAqL1xuICAgIGdldFZkb21Sb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNwZWNpZnkgYSBkaWZmZXJlbnQgdm5vZGUgcm9vdCBpZiBuZWVkZWQgdG8gYXBwbHkgdGhlIHRvcCBsZXZlbCBzdHlsZSBhdHRyaWJ1dGVzIG9uIGEgZGlmZmVyZW50IGxldmVsLlxuICAgICAqIE1ha2Ugc3VyZSB0byB1c2UgZ2V0VmRvbVJvb3QoKSBhcyB3ZWxsLCB0byBrZWVwIHRoZSB2ZG9tICYgdm5vZGUgdHJlZXMgaW4gc3luYy5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbmV3IHZub2RlIHJvb3RcbiAgICAgKi9cbiAgICBnZXRWbm9kZVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZub2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNoYW5nZSB0aGUgb3JkZXIgY29uZmlncyBhcmUgYXBwbGllZCB0byB0aGlzIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcmV2ZW50T3JpZ2luYWxDb25maWddIFRydWUgcHJldmVudHMgdGhlIGluc3RhbmNlIGZyb20gZ2V0dGluZyBhbiBvcmlnaW5hbENvbmZpZyBwcm9wZXJ0eVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIG1lcmdlQ29uZmlnKC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb25maWcgPSBzdXBlci5tZXJnZUNvbmZpZyguLi5hcmdzKSxcblxuICAgICAgICAgICAgLy8gaXQgc2hvdWxkIGJlIHBvc3NpYmxlIHRvIHNldCBjdXN0b20gY29uZmlncyBmb3IgdGhlIHZkb20gb24gaW5zdGFuY2UgbGV2ZWwsXG4gICAgICAgICAgICAvLyBob3dldmVyIHRoZXJlIHdpbGwgYmUgYWxyZWFkeSBhZGRlZCBhdHRyaWJ1dGVzIChlLmcuIGlkKSwgc28gYSBtZXJnZSBzZWVtcyB0byBiZSB0aGUgYmVzdCBzdHJhdGVneS5cbiAgICAgICAgICAgIHZkb20gPSB7Li4ubWUuX3Zkb20gfHwge30sIC4uLmNvbmZpZy52ZG9tIHx8IHt9fTtcblxuICAgICAgICAvLyBhdm9pZCBhbnkgaW50ZXJmZXJlbmNlIG9uIHByb3RvdHlwZSBsZXZlbFxuICAgICAgICAvLyBkb2VzIG5vdCBjbG9uZSBleGlzdGluZyBOZW8gaW5zdGFuY2VzXG4gICAgICAgIG1lLl92ZG9tICAgICAgICA9IE5lby5jbG9uZSh2ZG9tLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgbWUuY2xzICAgICAgICAgID0gY29uZmlnLmNscztcbiAgICAgICAgbWUuX3N0eWxlICAgICAgID0gY29uZmlnLnN0eWxlO1xuICAgICAgICBtZS53cmFwcGVyU3R5bGUgPSBOZW8uY2xvbmUoY29uZmlnLndyYXBwZXJTdHlsZSwgZmFsc2UpO1xuXG4gICAgICAgIGRlbGV0ZSBjb25maWcuY2xzO1xuICAgICAgICBkZWxldGUgY29uZmlnLnN0eWxlO1xuICAgICAgICBkZWxldGUgY29uZmlnLl92ZG9tO1xuICAgICAgICBkZWxldGUgY29uZmlnLnZkb207XG4gICAgICAgIGRlbGV0ZSBjb25maWcud3JhcHBlclN0eWxlO1xuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXIodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5maXJlKCdjb25zdHJ1Y3RlZCcsIHtpZDogbWUuaWR9KTsgLy8gdGVzdGluZ1xuXG4gICAgICAgIGlmIChtZS5rZXlzKSB7XG4gICAgICAgICAgICBtZS5rZXlzLnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b1JlbmRlcikge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENTUyBzZWxlY3RvcnMgdG8gYXBwbHkgdG8gdGhlIHRvcCBsZXZlbCBub2RlIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1jb21wb25lbnQnXVxuICAgICAqL1xuICAgIGdldCBjbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbHMgPyBOZW8uY2xvbmUodGhpcy5fY2xzKSA6IFsnbmVvLWNvbXBvbmVudCddO1xuICAgIH1cbiAgICBzZXQgY2xzKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgPyB2YWx1ZSA6IFtdO1xuXG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICB2ZG9tUm9vdCA9IG1lLmdldFZkb21Sb290KCksXG4gICAgICAgICAgICBvbGRDbHM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLm1vdW50ZWQpIHtcbiAgICAgICAgICAgIG9sZENscyA9IE5lby5jbG9uZShtZS5fY2xzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLl9jbHMgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodmRvbVJvb3QpIHtcbiAgICAgICAgICAgIHZkb21Sb290LmNscyA9IFsuLi52YWx1ZV07XG4gICAgICAgIH1cblxuICAgICAgICBtZS5fdmRvbSA9IHZkb207IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICBpZiAobWUubW91bnRlZCkge1xuICAgICAgICAgICAgbWUudXBkYXRlQ2xzKHZhbHVlLCBvbGRDbHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbHkgY29tcG9uZW50IGJhc2VkIGxpc3RlbmVyc1xuICAgICAqIEBtZW1iZXIge09iamVjdH0gbGlzdGVuZXJzPXt9XG4gICAgICovXG4gICAgZ2V0IGxpc3RlbmVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3RlbmVycyB8fCB7fTtcbiAgICB9XG4gICAgc2V0IGxpc3RlbmVycyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGFmdGVyIHRoZSBjb21wb25lbnQgcmVuZGVyKCkgbWV0aG9kIHdhcyBjYWxsZWQuIEFsc28gZmlyZXMgdGhlIHJlbmRlcmVkIGV2ZW50LlxuICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlbmRlcmVkPWZhbHNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBnZXQgcmVuZGVyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJlZCB8fCBmYWxzZTtcbiAgICB9XG4gICAgc2V0IHJlbmRlcmVkKHZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuX3JlbmRlcmVkID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBtZS5maXJlKCdyZW5kZXJlZCcsIG1lLmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvcCBsZXZlbCBzdHlsZSBhdHRyaWJ1dGVzXG4gICAgICogQG1lbWJlciB7T2JqZWN0fSBzdHlsZT17fVxuICAgICAqL1xuICAgIGdldCBzdHlsZSgpIHtcbiAgICAgICAgLy8gd2UgbmVlZCB0byBcImNsb25lXCIgdGhlIG9iamVjdCwgb3RoZXJ3aXNlIGNoYW5nZXMgd2lsbCBnZXQgYXBwbGllZCBkaXJlY3RseSBhbmQgdGhlcmUgYXJlIG5vIGRlbHRhc1xuICAgICAgICAvLyB0aGlzIG9ubHkgYWZmZWN0cyBub24gdmRvbSByZWxhdGVkIHN0eWxlIHRvIERPTSBkZWx0YXNcbiAgICAgICAgcmV0dXJuIE5lby5jbG9uZSh0aGlzLl9zdHlsZSk7XG4gICAgfVxuICAgIHNldCBzdHlsZSh2YWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbVJvb3QgPSBtZS5nZXRWZG9tUm9vdCgpLFxuICAgICAgICAgICAgb2xkU3R5bGU7XG5cbiAgICAgICAgaWYgKG1lLm1vdW50ZWQpIHtcbiAgICAgICAgICAgIG9sZFN0eWxlID0gbWUuX3N0eWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuX3N0eWxlID0gdmFsdWU7XG5cbiAgICAgICAgdmRvbVJvb3Quc3R5bGUgPSBPYmplY3QuYXNzaWduKHZkb21Sb290LnN0eWxlIHx8IHt9LCB2YWx1ZSk7XG5cbiAgICAgICAgaWYgKG1lLm1vdW50ZWQpIHtcbiAgICAgICAgICAgIG1lLnVwZGF0ZVN0eWxlKHZhbHVlLCBvbGRTdHlsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2V0dGVyIHdpbGwgaGFuZGxlIHZkb20gdXBkYXRlcyBhdXRvbWF0aWNhbGx5XG4gICAgICogQG1lbWJlciB7T2JqZWN0fSB2ZG9tPXRoaXMuX3Zkb21cbiAgICAgKi9cbiAgICBnZXQgdmRvbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Zkb207XG4gICAgfVxuICAgIHNldCB2ZG9tKHZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhcHAgICAgICA9IE5lby5hcHBzW21lLmFwcE5hbWVdLFxuICAgICAgICAgICAgdmRvbSAgICAgPSB2YWx1ZSxcbiAgICAgICAgICAgIGNscyAgICAgID0gbWUuY2xzLFxuICAgICAgICAgICAgaGVpZ2h0ICAgPSBtZS5oZWlnaHQsXG4gICAgICAgICAgICBzdHlsZSAgICA9IG1lLnN0eWxlLFxuICAgICAgICAgICAgdmRvbVJvb3QgPSBtZS5nZXRWZG9tUm9vdCgpLFxuICAgICAgICAgICAgd2lkdGggICAgPSBtZS53aWR0aCxcbiAgICAgICAgICAgIGxpc3RlbmVySWQ7XG5cbiAgICAgICAgaWYgKHZkb21Sb290KSB7XG4gICAgICAgICAgICBpZiAoY2xzKSB7XG4gICAgICAgICAgICAgICAgdmRvbVJvb3QuY2xzID0gY2xzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgdmRvbVJvb3QuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgICAgICAgICB2ZG9tUm9vdC53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAvLyB0b2RvOiBzdHJpbmcgYmFzZWQgc3R5bGVzXG4gICAgICAgICAgICAgICAgdmRvbVJvb3Quc3R5bGUgPSBPYmplY3QuYXNzaWduKHZkb21Sb290LnN0eWxlIHx8IHt9LCBzdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJdCBpcyBpbXBvcnRhbnQgdG8ga2VlcCB0aGUgdmRvbSB0cmVlIHN0YWJsZSB0byBlbnN1cmUgdGhhdCBjb250YWluZXJzIGRvIG5vdCBsb3NlIHRoZSByZWZlcmVuY2VzIHRvIHRoZWlyXG4gICAgICAgIC8vIGNoaWxkIHZkb20gdHJlZXMuIFRoZSBpZiBjYXNlIHNob3VsZCBub3QgaGFwcGVuLCBidXQgaW4gY2FzZSBpdCBkb2VzLCBrZWVwaW5nIHRoZSByZWZlcmVuY2UgYW5kIG1lcmdpbmdcbiAgICAgICAgLy8gdGhlIGNvbnRlbnQgb3ZlciBzZWVtcyB0byBiZSB0aGUgYmVzdCBzdHJhdGVneVxuICAgICAgICBpZiAobWUuX3Zkb20gIT09IHZkb20pIHtcbiAgICAgICAgICAgIExvZ2dlci53YXJuKCd2ZG9tIGdvdCByZXBsYWNlZCBmb3I6ICcgKyBtZS5pZCArICcuIENvcHlpbmcgdGhlIGNvbnRlbnQgaW50byB0aGUgcmVmZXJlbmNlIGhvbGRlciBvYmplY3QnKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMobWUuX3Zkb20pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgbWUuX3Zkb21ba2V5XTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKG1lLl92ZG9tLCB2ZG9tKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLl92ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbWUuc2lsZW50VmRvbVVwZGF0ZSkge1xuICAgICAgICAgICAgaWYgKCFtZS5tb3VudGVkICYmIGFwcCAmJiBhcHAucmVuZGVyaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJJZCA9IGFwcC5vbigncmVuZGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhcHAudW4oJ3JlbmRlcicsIGxpc3RlbmVySWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUudXBkYXRlVmRvbShtZS52ZG9tLCBtZS52bm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWUubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIG1lLnVwZGF0ZVZkb20odmRvbSwgbWUudm5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5oYXNVbm1vdW50ZWRWZG9tQ2hhbmdlcyA9ICFtZS5tb3VudGVkICYmIG1lLmhhc0JlZW5Nb3VudGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRWl0aGVyIGEgc3RyaW5nIGxpa2UgJ2NvbG9yOiByZWQ7IGJhY2tncm91bmQtY29sb3I6IGJsdWU7J1xuICAgICAqIG9yIGFuIG9iamVjdCBjb250YWluaW5nIHN0eWxlIGF0dHJpYnV0ZXNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHZhbHVlXG4gICAgICogQHJldHVybnMge09iamVjdH0gYWxsIHN0eWxlcyBvZiB0aGlzLmVsXG4gICAgICovXG4gICAgYWRkU3R5bGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhbHVlID0gVXRpbC5jcmVhdGVTdHlsZU9iamVjdCh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0b2RvOiBhZGQgYSBjaGVjayBpZiBzb21ldGhpbmcgaGFzIGNoYW5nZWRcblxuICAgICAgICByZXR1cm4gdGhpcy5zdHlsZSA9IE9iamVjdC5hc3NpZ24odGhpcy5zdHlsZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZGlzYWJsZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0RGlzYWJsZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzID0gbWUuY2xzO1xuXG4gICAgICAgIE5lb0FycmF5W3ZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oY2xzLCAnbmVvLWRpc2FibGVkJyk7XG4gICAgICAgIG1lLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgdGhlIGRvbUxpc3RlbmVycyBpbnNpZGUgdGhlIE5lby5tYW5hZ2VyLkRvbUV2ZW50XG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWZ0ZXJTZXREb21MaXN0ZW5lcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIERvbUV2ZW50TWFuYWdlci51cGRhdGVEb21MaXN0ZW5lcnModGhpcywgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGhhc1VubW91bnRlZFZkb21DaGFuZ2VzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldEhhc1VubW91bnRlZFZkb21DaGFuZ2VzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgfHwgKCF2YWx1ZSAmJiBvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCBwYXJlbnRJZHMgPSBDb21wb25lbnRNYW5hZ2VyLmdldFBhcmVudElkcyh0aGlzKSxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgPSAwLFxuICAgICAgICAgICAgICAgIGxlbiAgICAgICA9IHBhcmVudElkcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgcGFyZW50O1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gTmVvLmdldENvbXBvbmVudChwYXJlbnRJZHNbaV0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuX2hhc1VubW91bnRlZFZkb21DaGFuZ2VzID0gdmFsdWU7IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGhlaWdodCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0SGVpZ2h0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZVZkb21Sb290S2V5KCdoZWlnaHQnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBodG1sIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0SHRtbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VWZG9tUm9vdEtleSgnaHRtbCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGlkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0SWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlVmRvbVJvb3RLZXkoJ2lkJywgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbWF4SGVpZ2h0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNYXhIZWlnaHQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlVmRvbVJvb3RLZXkoJ21heEhlaWdodCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1heFdpZHRoIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNYXhXaWR0aCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VWZG9tUm9vdEtleSgnbWF4V2lkdGgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtaW5IZWlnaHQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldE1pbkhlaWdodCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VWZG9tUm9vdEtleSgnbWluSGVpZ2h0JywgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbWluV2lkdGggY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldE1pbldpZHRoKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZVZkb21Sb290S2V5KCdtaW5XaWR0aCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vdW50ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmhhc0JlZW5Nb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSB8fCAoIXZhbHVlICYmIG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgbGV0IGNoaWxkSWRzID0gQ29tcG9uZW50TWFuYWdlci5nZXRDaGlsZElkcyhtZS52bm9kZSksXG4gICAgICAgICAgICAgICAgaSAgICAgICAgPSAwLFxuICAgICAgICAgICAgICAgIGxlbiAgICAgID0gY2hpbGRJZHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGNoaWxkO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQgPSBOZW8uZ2V0Q29tcG9uZW50KGNoaWxkSWRzW2ldKTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5tb3VudGVkID0gdmFsdWU7IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmhhc0JlZW5Nb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKG1lLmRvbUxpc3RlbmVycyAmJiBtZS5kb21MaXN0ZW5lcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIHRvZG86IHRoZSBtYWluIHRocmVhZCByZXBseSBvZiBtb3VudCBhcnJpdmVzIGFmdGVyIHB1c2hpbmcgdGhlIHRhc2sgaW50byB0aGUgcXVldWUgd2hpY2ggZG9lcyBub3QgZW5zdXJlIHRoZSBkb20gaXMgbW91bnRlZFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBEb21FdmVudE1hbmFnZXIubW91bnREb21MaXN0ZW5lcnMobWUpO1xuICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuZmlyZSgnbW91bnRlZCcsIG1lLmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdG9vbHRpcHMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0VG9vbHRpcHModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKE5lby5ucygnTmVvLnRvb2x0aXAuQmFzZScpKSB7XG4gICAgICAgICAgICAgICAgbWUuY3JlYXRlVG9vbHRpcHModmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ3NyYy90b29sdGlwL0Jhc2UnICovXG4gICAgICAgICAgICAgICAgICAgICcuLi90b29sdGlwL0Jhc2UubWpzJykudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5jcmVhdGVUb29sdGlwcyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB2bm9kZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdHxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRWbm9kZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnN5bmNWbm9kZVRyZWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgd2lkdGggY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldFdpZHRoKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZVZkb21Sb290S2V5KCd3aWR0aCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHdyYXBwZXJTdHlsZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0V3JhcHBlclN0eWxlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgJiYgIU5lby5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgICAgIHZkb20uc3R5bGUgPSB2ZG9tLnN0eWxlIHx8IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih2ZG9tLnN0eWxlLCB2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnZkb20gID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCB3aGVuIGFjY2Vzc2luZyB0aGUgY29udHJvbGxlciBjb25maWdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGJlZm9yZUdldENvbnRyb2xsZXIodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIE5lby5nZXQodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGNvbnRyb2xsZXIgY29uZmlnIGdldHMgY2hhbmdlZC4gQ3JlYXRlcyBhIENvbXBvbmVudENvbnRyb2xsZXIgaW5zdGFuY2UgaWYgbmVlZGVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYmVmb3JlU2V0Q29udHJvbGxlcih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKFV0aWwuaXNPYmplY3QodmFsdWUpICYmIHZhbHVlIGluc3RhbmNlb2YgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gdXNlIHRoZSBwcm92aWRlZCBpbnN0YW5jZVxuICAgICAgICAgICAgICAgIHZhbHVlLnZpZXcgPSBtZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHZhbHVlLnByb3RvdHlwZSAmJiB2YWx1ZS5wcm90b3R5cGUuY29uc3RydWN0b3IuaXNDbGFzcyl8fCBVdGlsLmlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gTmVvLmNyZWF0ZSh2YWx1ZSwge1xuICAgICAgICAgICAgICAgICAgICB2aWV3OiBtZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5udHlwZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZpZXcgPSBtZTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE5lby5udHlwZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBkb21MaXN0ZW5lcnMgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGJlZm9yZVNldERvbUxpc3RlbmVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gW3ZhbHVlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZSB8fCBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBrZXlzIGNvbmZpZyBnZXRzIGNoYW5nZWQuIENyZWF0ZXMgYSBLZXlOYXZpZ2F0aW9uIGluc3RhbmNlIGlmIG5lZWRlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGJlZm9yZVNldEtleXModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgb2xkVmFsdWUuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFV0aWwuaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBLZXlOYXZpZ2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gdXNlIHRoZSBwcm92aWRlZCBpbnN0YW5jZVxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5jb25zdHJ1Y3Rvci5pc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBOZW8uY3JlYXRlKHZhbHVlKTtcbiAgICAgICAgICAgIH0gIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gTmVvLmNyZWF0ZShLZXlOYXZpZ2F0aW9uLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleXM6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgdmFsdWUgb2YgYSB2ZG9tIG9iamVjdCBhdHRyaWJ1dGUgb3IgcmVtb3ZlcyBpdCBpbiBjYXNlIGl0IGhhcyBubyB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAgICAgKiBAcGFyYW0ge0FycmF5fE51bWJlcnxPYmplY3R8U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICovXG4gICAgY2hhbmdlVmRvbVJvb3RLZXkoa2V5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmdldFZkb21Sb290KClba2V5XSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIG1lLmdldFZkb21Sb290KClba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIHRvb2x0aXAgaW5zdGFuY2VzXG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IHZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjcmVhdGVUb29sdGlwcyh2YWx1ZSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFt2YWx1ZV07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdG9vbHRpcHMgPSBbXSxcbiAgICAgICAgICAgIHRpcDtcblxuICAgICAgICB2YWx1ZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgLy8gdG9kbzogY2hlY2sgZm9yIGV4aXN0aW5nIHRvb2x0aXBzXG5cbiAgICAgICAgICAgIHRpcCA9IE5lby5jcmVhdGUoJ05lby50b29sdGlwLkJhc2UnLCB7XG4gICAgICAgICAgICAgICAgYXBwTmFtZSAgICA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50SWQ6IG1lLmlkLFxuICAgICAgICAgICAgICAgIC4uLml0ZW1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0b29sdGlwcy5wdXNoKHRpcCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLl90b29sdGlwcyA9IHRvb2x0aXBzOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5yZWdpc3RlcnMgdGhpcyBpbnN0YW5jZSBmcm9tIHRoZSBDb21wb25lbnRNYW5hZ2VyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbdXBkYXRlUGFyZW50VmRvbT1mYWxzZV0gdHJ1ZSB0byByZW1vdmUgdGhlIGNvbXBvbmVudCBmcm9tIHRoZSBwYXJlbnQgdmRvbSA9PiByZWFsIGRvbVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV0gdHJ1ZSB0byB1cGRhdGUgdGhlIHZkb20gc2lsZW50bHkgKHVzZWZ1bCBmb3IgZGVzdHJveWluZyBtdWx0aXBsZSBjaGlsZCBpdGVtcyBpbiBhIHJvdylcbiAgICAgKiB0b2RvOiB1bnJlZ2lzdGVyIGV2ZW50c1xuICAgICAqL1xuICAgIGRlc3Ryb3kodXBkYXRlUGFyZW50VmRvbT1mYWxzZSwgc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBwYXJlbnQsIHBhcmVudFZkb207XG5cbiAgICAgICAgaWYgKHVwZGF0ZVBhcmVudFZkb20gJiYgbWUucGFyZW50SWQpIHtcbiAgICAgICAgICAgIHBhcmVudCAgICAgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLnBhcmVudElkKTtcbiAgICAgICAgICAgIHBhcmVudFZkb20gPSBwYXJlbnQudmRvbTtcblxuICAgICAgICAgICAgVkRvbVV0aWwucmVtb3ZlVmRvbUNoaWxkKHBhcmVudFZkb20sIG1lLmlkKTtcbiAgICAgICAgICAgIHBhcmVudFtzaWxlbnQgPyAnX3Zkb20nIDogJ3Zkb20nXSA9IHBhcmVudFZkb207XG4gICAgICAgIH1cblxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLnVucmVnaXN0ZXIodGhpcyk7XG5cbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHNob3J0Y3V0IGZvciBOZW8ubWFuYWdlci5Db21wb25lbnQuZG93blxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gY29uZmlnXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9IFRoZSBtYXRjaGluZyBpbnN0YW5jZSBvciBudWxsXG4gICAgICovXG4gICAgZG93bihjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIuZG93bih0aGlzLmlkLCBjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIGZvY3VzKCkgb24gdGhlIHRvcCBsZXZlbCBET00gbm9kZSBvZiB0aGlzIGNvbXBvbmVudCBvciBvbiBhIGdpdmVuIG5vZGUgdmlhIGlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtpZF1cbiAgICAgKi9cbiAgICBmb2N1cyhpZCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIC8vIHJlbW90ZSBtZXRob2QgYWNjZXNzXG4gICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5mb2N1cyh7XG4gICAgICAgICAgICBpZDogaWQgfHwgbWUuaWRcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmb2N1cyByZWNlaXZlZDogJyArIGlkIHx8IG1lLmlkKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBhdHRlbXB0aW5nIHRvIHJlY2VpdmUgZm9jdXMgZm9yIGNvbXBvbmVudCcsIGVyciwgbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoaXMuY29udHJvbGxlciBvciB0aGUgY2xvc2VzdCBwYXJlbnQgY29udHJvbGxlclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbbnR5cGVdXG4gICAgICogQHJldHVybnMge05lby5jb250cm9sbGVyLkJhc2V8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRDb250cm9sbGVyKG50eXBlKSB7XG4gICAgICAgIGxldCBjb250cm9sbGVyID0gdGhpcy5jb250cm9sbGVyLFxuICAgICAgICAgICAgaSwgbGVuLCBwYXJlbnRzO1xuXG4gICAgICAgIGlmIChjb250cm9sbGVyICYmICghbnR5cGUgfHwgbnR5cGUgPT09IGNvbnRyb2xsZXIubnR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbGxlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudHMgPSBDb21wb25lbnRNYW5hZ2VyLmdldFBhcmVudHModGhpcyk7XG4gICAgICAgIGkgICAgICAgPSAwO1xuICAgICAgICBsZW4gICAgID0gcGFyZW50cy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKHBhcmVudHNbaV0uY29udHJvbGxlciAmJiAoIW50eXBlIHx8IG50eXBlID09PSBwYXJlbnRzW2ldLmNvbnRyb2xsZXIubnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudHNbaV0uY29udHJvbGxlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlYXJjaCB2ZG9tIGNoaWxkIG5vZGVzIGJ5IGlkIGZvciBhIGdpdmVuIHZkb20gdHJlZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbdmRvbV1cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldFZkb21DaGlsZChpZCwgdmRvbSkge1xuICAgICAgICB2ZG9tID0gdmRvbSB8fCB0aGlzLnZkb207XG4gICAgICAgIGxldCBjaGlsZCA9IG51bGwsXG4gICAgICAgICAgICBpICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICA9IHZkb20uY24gJiYgdmRvbS5jbi5sZW5ndGgsXG4gICAgICAgICAgICBzdWJDaGlsZDtcblxuICAgICAgICBpZiAodmRvbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB2ZG9tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZkb20uY24pIHtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzdWJDaGlsZCA9IHRoaXMuZ2V0VmRvbUNoaWxkKGlkLCB2ZG9tLmNuW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAoc3ViQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQgPSBzdWJDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbiBnZXQgY2FsbGVkIGFmdGVyIHRoZSBjb21wb25lbnQgZ290IHJlbmRlcmVkLiBTZWUgdGhlIGF1dG9Nb3VudCBjb25maWcgYXMgd2VsbC5cbiAgICAgKi9cbiAgICBtb3VudCgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGNoaWxkLCBjaGlsZElkcywgaSwgbGVuO1xuXG4gICAgICAgIGlmICghbWUudm5vZGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IHZub2RlIG11c3QgYmUgZ2VuZXJhdGVkIGJlZm9yZSBtb3VudGluZywgdXNlIENvbXBvbmVudC5yZW5kZXIoKScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW4gY2FzZSB0aGUgY29tcG9uZW50IHdhcyBhbHJlYWR5IG1vdW50ZWQsIGdvdCB1bm1vdW50ZWQgYW5kIHJlY2VpdmVkIHZkb20gY2hhbmdlcyBhZnRlcndhcmRzLFxuICAgICAgICAvLyBhIG5ldyByZW5kZXIoKSBjYWxsIGlzIG1hbmRhdG9yeSBzaW5jZSBkZWx0YSB1cGRhdGVzIGNvdWxkIG5vdCBnZXQgYXBwbGllZC5cbiAgICAgICAgLy8gV2UgbmVlZCB0byBjbGVhciB0aGUgaGFzVW5tb3VudGVkVmRvbUNoYW5nZXMgc3RhdGUgZm9yIGFsbCBjaGlsZCBjb21wb25lbnRzXG4gICAgICAgIGlmIChtZS5oYXNVbm1vdW50ZWRWZG9tQ2hhbmdlcykge1xuICAgICAgICAgICAgLy8gdG9kbzogdGhlIGhhc1VubW91bnRlZFZkb21DaGFuZ2VzIGZsYWcgY2hhbmdlcyBzaG91bGQgaGFwcGVuIG9uIHJlbmRlclxuICAgICAgICAgICAgbWUuaGFzVW5tb3VudGVkVmRvbUNoYW5nZXMgPSBmYWxzZTtcblxuICAgICAgICAgICAgY2hpbGRJZHMgPSBDb21wb25lbnRNYW5hZ2VyLmdldENoaWxkSWRzKG1lLnZub2RlKTtcblxuICAgICAgICAgICAgY2hpbGRJZHMuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICAgICAgY2hpbGQgPSBOZW8uZ2V0Q29tcG9uZW50KGlkKTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5faGFzVW5tb3VudGVkVmRvbUNoYW5nZXMgPSBmYWxzZTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gZW5kIHRvZG9cblxuICAgICAgICAgICAgbWUucmVuZGVyKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ21vdW50JywgbWUucGFyZW50SWQsIG1lLmlkKTtcblxuICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uICAgICA6ICdtb3VudERvbScsXG4gICAgICAgICAgICAgICAgaWQgICAgICAgICA6IG1lLmlkLFxuICAgICAgICAgICAgICAgIGh0bWwgICAgICAgOiBtZS52bm9kZS5vdXRlckhUTUwsXG4gICAgICAgICAgICAgICAgcGFyZW50SWQgICA6IG1lLnBhcmVudElkLFxuICAgICAgICAgICAgICAgIHBhcmVudEluZGV4OiBtZS5wYXJlbnRJbmRleFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWUubW91bnRlZCA9IHRydWU7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBhdHRlbXB0aW5nIHRvIG1vdW50IGNvbXBvbmVudCcsIGVyciwgbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYnkgbWFuYWdlci5Gb2N1c1xuICAgICAqIEBuYW1lIG9uRm9jdXNFbnRlclxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhdGggZG9tIGVsZW1lbnQgaWRzIHVwd2FyZHNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBieSBtYW5hZ2VyLkZvY3VzXG4gICAgICogQG5hbWUgb25Gb2N1c0xlYXZlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aCBkb20gZWxlbWVudCBpZHMgdXB3YXJkc1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJ5IG1hbmFnZXIuRm9jdXNcbiAgICAgKiBAbmFtZSBvbkZvY3VzTW92ZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMubmV3UGF0aCBkb20gZWxlbWVudCBpZHMgdXB3YXJkc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLm9sZFBhdGggZG9tIGVsZW1lbnQgaWRzIHVwd2FyZHNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldHMgY2FsbGVkIGZyb20gdGhlIHJlbmRlcigpIHByb21pc2Ugc3VjY2VzcyBoYW5kbGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGF1dG9Nb3VudCBNb3VudCB0aGUgRE9NIGFmdGVyIHRoZSB2bm9kZSBnb3QgY3JlYXRlZFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25SZW5kZXIoZGF0YSwgYXV0b01vdW50KSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgYXBwID0gTmVvLmFwcHNbbWUuYXBwTmFtZV07XG5cbiAgICAgICAgbWUucmVuZGVyaW5nID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCFhcHAucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIGFwcC5yZW5kZXJpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGFwcC5yZW5kZXJlZCAgPSB0cnVlO1xuICAgICAgICAgICAgYXBwLmZpcmUoJ3JlbmRlcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudm5vZGUgPSBkYXRhO1xuXG4gICAgICAgIGxldCBjaGlsZElkcyAgPSBDb21wb25lbnRNYW5hZ2VyLmdldENoaWxkSWRzKGRhdGEpLFxuICAgICAgICAgICAgaSAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICA9IGNoaWxkSWRzLmxlbmd0aCxcbiAgICAgICAgICAgIGNoaWxkO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkID0gTmVvLmdldENvbXBvbmVudChjaGlsZElkc1tpXSk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLnJlbmRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lLl9yZW5kZXJlZCA9IHRydWU7IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgbWUuZmlyZSgncmVuZGVyZWQnLCBtZS5pZCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3JlbmRlcmVkOiAnICsgbWUuYXBwTmFtZSArICcgJyArIG1lLmlkLCBtZSk7XG5cbiAgICAgICAgaWYgKGF1dG9Nb3VudCkge1xuICAgICAgICAgICAgbWUubW91bnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9taXNlIGJhc2VkIHZkb20gdXBkYXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFt2ZG9tPXRoaXMudmRvbV1cbiAgICAgKiBAcGFyYW0ge05lby52ZG9tLlZOb2RlfSBbdm5vZGU9IHRoaXMudm5vZGVdXG4gICAgICovXG4gICAgcHJvbWlzZVZkb21VcGRhdGUodmRvbT10aGlzLnZkb20sIHZub2RlPXRoaXMudm5vZGUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAvLyB0b2RvOiB1cGRhdGVWZG9tKCkgc2hvdWxkIGhhbmRsZSB0aGlzXG4gICAgICAgIC8vIEl0IGlzIGltcG9ydGFudCB0byBrZWVwIHRoZSB2ZG9tIHRyZWUgc3RhYmxlIHRvIGVuc3VyZSB0aGF0IGNvbnRhaW5lcnMgZG8gbm90IGxvc2UgdGhlIHJlZmVyZW5jZXMgdG8gdGhlaXJcbiAgICAgICAgLy8gY2hpbGQgdmRvbSB0cmVlcy4gVGhlIGlmIGNhc2Ugc2hvdWxkIG5vdCBoYXBwZW4sIGJ1dCBpbiBjYXNlIGl0IGRvZXMsIGtlZXBpbmcgdGhlIHJlZmVyZW5jZSBhbmQgbWVyZ2luZ1xuICAgICAgICAvLyB0aGUgY29udGVudCBvdmVyIHNlZW1zIHRvIGJlIHRoZSBiZXN0IHN0cmF0ZWd5XG4gICAgICAgIGlmIChtZS5fdmRvbSAhPT0gdmRvbSkge1xuICAgICAgICAgICAgTG9nZ2VyLndhcm4oJ3Zkb20gZ290IHJlcGxhY2VkIGZvcjogJyArIG1lLmlkICsgJy4gQ29weWluZyB0aGUgY29udGVudCBpbnRvIHRoZSByZWZlcmVuY2UgaG9sZGVyIG9iamVjdCcpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhtZS5fdmRvbSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZS5fdmRvbVtrZXldO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obWUuX3Zkb20sIHZkb20pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuX3Zkb20gPSB2ZG9tO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChtZS5tb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgbWUudXBkYXRlVmRvbSh2ZG9tLCB2bm9kZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFaXRoZXIgYSBzdHJpbmcgbGlrZSAnY29sb3InIG9yIGFuIGFycmF5IGNvbnRhaW5pbmcgc3R5bGUgYXR0cmlidXRlcyB0byByZW1vdmVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gdmFsdWUgY2FtZWxDYXNlIG9ubHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBhbGwgc3R5bGVzIG9mIHRoaXMuZWxcbiAgICAgKi9cbiAgICByZW1vdmVTdHlsZSh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSBbdmFsdWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN0eWxlICAgID0gdGhpcy5zdHlsZSxcbiAgICAgICAgICAgIGRvVXBkYXRlID0gZmFsc2U7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3R5bGUpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBzdHlsZVtrZXldO1xuICAgICAgICAgICAgICAgIGRvVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGRvVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgdm5vZGUgdHJlZSBmb3IgdGhpcyBjb21wb25lbnQgYW5kIG1vdW50cyB0aGUgY29tcG9uZW50IGluIGNhc2VcbiAgICAgKiAtIHlvdSBwYXNzIHRydWUgZm9yIHRoZSBtb3VudCBwYXJhbVxuICAgICAqIC0gb3IgdGhlIGF1dG9Nb3VudCBjb25maWcgaXMgc2V0IHRvIHRydWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFttb3VudF0gTW91bnQgdGhlIERPTSBhZnRlciB0aGUgdm5vZGUgZ290IGNyZWF0ZWRcbiAgICAgKi9cbiAgICByZW5kZXIobW91bnQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhdXRvTW91bnQgPSBtb3VudCB8fCBtZS5hdXRvTW91bnQsXG4gICAgICAgICAgICBhcHAgICAgICAgPSBOZW8uYXBwc1ttZS5hcHBOYW1lXTtcblxuICAgICAgICBtZS5yZW5kZXJpbmcgPSB0cnVlO1xuXG4gICAgICAgIGlmICghYXBwLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICBhcHAucmVuZGVyaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS52ZG9tKSB7XG4gICAgICAgICAgICBOZW8udmRvbS5IZWxwZXIuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBhdXRvTW91bnQgIDogYXV0b01vdW50LFxuICAgICAgICAgICAgICAgIGNscyAgICAgICAgOiBtZS5jbHMsXG4gICAgICAgICAgICAgICAgcGFyZW50SWQgICA6IGF1dG9Nb3VudCA/IG1lLnBhcmVudElkICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHBhcmVudEluZGV4OiBhdXRvTW91bnQgPyBtZS5wYXJlbnRJbmRleCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgIDogbWUuc3R5bGUsXG4gICAgICAgICAgICAgICAgLi4ubWUudmRvbVxuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBtZS5vblJlbmRlcihkYXRhLCBhdXRvTW91bnQpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgYXR0ZW1wdGluZyB0byByZW5kZXIgY29tcG9uZW50JywgZXJyLCBtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBtdWx0aXBsZSBjb25maWdzIGF0IG9uY2UsIGVuc3VyaW5nIHRoYXQgYWxsIGFmdGVyU2V0IG1ldGhvZHMgZ2V0IGFsbCBuZXcgYXNzaWduZWQgdmFsdWVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcz17fVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKi9cbiAgICBzZXQodmFsdWVzPXt9LCBzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgbWUuc2lsZW50VmRvbVVwZGF0ZSA9IHRydWU7XG5cbiAgICAgICAgc3VwZXIuc2V0KHZhbHVlcyk7XG5cbiAgICAgICAgbWUuc2lsZW50VmRvbVVwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgICAgIG1lLl92ZG9tID0gdmRvbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtZS5wcm9taXNlVmRvbVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhY2Vob2xkZXIgbWV0aG9kIGZvciB1dGlsLlZEb20uc3luY1Zkb21JZHMgdG8gYWxsb3cgb3ZlcnJpZGluZyAoZGlzYWJsaW5nKSBpdFxuICAgICAqIEBwYXJhbSB7TmVvLnZkb20uVk5vZGV9IFt2bm9kZT10aGlzLnZub2RlXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbdmRvbT10aGlzLnZkb21dXG4gICAgICovXG4gICAgc3luY1Zkb21JZHModm5vZGU9dGhpcy52bm9kZSwgdmRvbT10aGlzLnZkb20pIHtcbiAgICAgICAgVkRvbVV0aWwuc3luY1Zkb21JZHModm5vZGUsIHZkb20pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlaG9sZGVyIG1ldGhvZCBmb3IgdXRpbC5WRG9tLnN5bmNWZG9tSWRzIHRvIGFsbG93IG92ZXJyaWRpbmcgKGRpc2FibGluZykgaXRcbiAgICAgKiBAcGFyYW0ge05lby52ZG9tLlZOb2RlfSBbdm5vZGU9dGhpcy52bm9kZV1cbiAgICAgKi9cbiAgICBzeW5jVm5vZGVUcmVlKHZub2RlPXRoaXMudm5vZGUpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRlYnVnID0gZmFsc2UsXG4gICAgICAgICAgICBjaGlsZFZub2RlO1xuXG4gICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5zeW5jVmRvbUlkcygpO1xuXG4gICAgICAgIC8vIGRlbGVnYXRlIHRoZSBsYXRlc3Qgbm9kZSB1cGRhdGVzIHRvIGFsbCBwb3NzaWJsZSBjaGlsZCBjb21wb25lbnRzIGZvdW5kIGluc2lkZSB0aGUgdm5vZGUgdHJlZVxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmdldENoaWxkcmVuKG1lKS5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgICAgICBjaGlsZFZub2RlID0gVk5vZGVVdGlsLmZpbmRDaGlsZFZub2RlKG1lLnZub2RlLCBjb21wb25lbnQudmRvbS5pZCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZFZub2RlKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50Ll92bm9kZSA9IGNoaWxkVm5vZGUudm5vZGU7IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50LnJlbmRlcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5fcmVuZGVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuZmlyZSgncmVuZGVyZWQnLCBjb21wb25lbnQuaWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5tb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdzeW5jVm5vZGVUcmVlOiBDb3VsZCBub3QgcmVwbGFjZSB0aGUgY2hpbGQgdm5vZGUgZm9yJywgY29tcG9uZW50LmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cobWUudm5vZGUsIG1lLm1vdW50ZWQpO1xuXG4gICAgICAgIC8vIGtlZXAgdGhlIHZub2RlIHBhcmVudCB0cmVlIGluIHN5bmNcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5nZXRQYXJlbnRzKG1lKS5mb3JFYWNoKChjb21wb25lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgZHluYW1pY2FsbHkgcmVuZGVyZWQgY29tcG9uZW50cyB3aGljaCBnZXQgaW5zZXJ0ZWQgaW50byB0aGUgY29tcG9uZW50IHRyZWVcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBtZS52bm9kZS5vdXRlckhUTUwpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZHluIGl0ZW0nLCBtZS52bm9kZSwgbWUucGFyZW50SW5kZXgpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC52bm9kZS5jaGlsZE5vZGVzLnNwbGljZShtZS5wYXJlbnRJbmRleCB8fCAwLCAwLCBtZS52bm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2UgaWYgKCFWTm9kZVV0aWwucmVwbGFjZUNoaWxkVm5vZGUoY29tcG9uZW50LnZub2RlLCBtZS52bm9kZS5pZCwgbWUudm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgLy8gdG9kbzogY2FuIGhhcHBlbiBmb3IgZHluYW1pY2FsbHkgaW5zZXJ0ZWQgY29udGFpbmVyIGl0ZW1zXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdzeW5jVm5vZGVUcmVlOiBDb3VsZCBub3QgcmVwbGFjZSB0aGUgcGFyZW50IHZub2RlIGZvcicsIG1lLnZub2RlLmlkLCBjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgIGxldCBlbmQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzeW5jVm5vZGVUcmVlJywgbWUuaWQsIGVuZCAtIHN0YXJ0KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgY29tcG9uZW50IERPTVxuICAgICAqL1xuICAgIHVubW91bnQoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICBhY3Rpb246ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgZGVsdGFzOiBbe1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ3JlbW92ZU5vZGUnLFxuICAgICAgICAgICAgICAgIGlkICAgIDogbWUuaWRcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbWUubW91bnRlZCA9IGZhbHNlO1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGF0dGVtcHRpbmcgdG8gdW5tb3VudCBjb21wb25lbnQnLCBlcnIsIG1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2Ugc2hvcnRjdXQgZm9yIE5lby5tYW5hZ2VyLkNvbXBvbmVudC51cFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gY29uZmlnXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9IFRoZSBtYXRjaGluZyBpbnN0YW5jZSBvciBudWxsXG4gICAgICovXG4gICAgdXAoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLnVwKHRoaXMuaWQsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsdGEgdXBkYXRlcyBmb3IgdGhlIGNscyBjb25maWcuIEdldHMgY2FsbGVkIGFmdGVyIHRoZSBjbHMgY29uZmlnIGdldHMgY2hhbmdlZCBpbiBjYXNlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBjbHNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRDbHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHVwZGF0ZUNscyhjbHMsIG9sZENscykge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgdm5vZGUgPSBtZS52bm9kZTtcblxuICAgICAgICBpZiAoIU5lb0FycmF5LmlzRXF1YWwoY2xzLCBvbGRDbHMpKSB7XG4gICAgICAgICAgICBpZiAodm5vZGUpIHtcbiAgICAgICAgICAgICAgICB2bm9kZS5jbGFzc05hbWUgPSBjbHM7IC8vIGtlZXAgdGhlIHZub2RlIGluIHN5bmNcbiAgICAgICAgICAgICAgICBtZS52bm9kZSA9IHZub2RlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgICAgIGRlbHRhczogW3tcbiAgICAgICAgICAgICAgICAgICAgaWQgOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGQgICA6IE5lby51dGlsLkFycmF5LmRpZmZlcmVuY2UoY2xzLCBvbGRDbHMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBOZW8udXRpbC5BcnJheS5kaWZmZXJlbmNlKG9sZENscywgY2xzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobWUudm5vZGUpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgYXR0ZW1wdGluZyB0byB1cGRhdGUgQ29tcG9uZW50IGNscycsIGVyciwgbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBzdHlsZSBkZWx0YXMgZm9yIG5ld1ZhbHVlICYgb2xkVmFsdWUgYW5kIGFwcGxpZXMgdGhlbSBkaXJlY3RseSB0byB0aGUgRE9NLlxuICAgICAqIEBwYXJhbSBuZXdWYWx1ZVxuICAgICAqIEBwYXJhbSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdXBkYXRlU3R5bGUobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICBkZWx0YSA9IFN0eWxlLmNvbXBhcmVTdHlsZXMobmV3VmFsdWUsIG9sZFZhbHVlKSxcbiAgICAgICAgICAgIHZub2RlID0gbWUudm5vZGU7XG5cbiAgICAgICAgaWYgKGRlbHRhKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndXBkYXRlU3R5bGUnLCAnbmV3JywgbmV3VmFsdWUsICdvbGQnLCBvbGRWYWx1ZSwgJ2RlbHRhJywgZGVsdGEpO1xuICAgICAgICAgICAgaWYgKHZub2RlKSB7XG4gICAgICAgICAgICAgICAgdm5vZGUuc3R5bGUgPSBuZXdWYWx1ZTsgLy8ga2VlcCB0aGUgdm5vZGUgaW4gc3luY1xuICAgICAgICAgICAgICAgIG1lLnZub2RlID0gdm5vZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgZGVsdGFzOiBbe1xuICAgICAgICAgICAgICAgICAgICBpZCAgIDogbWUuaWQsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBkZWx0YVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQ29tcG9uZW50IHN0eWxlIHVwZGF0ZWQnKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGF0dGVtcHRpbmcgdG8gdXBkYXRlIGNvbXBvbmVudCBzdHlsZScsIGVyciwgbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGNhbGxlZCBhZnRlciB0aGUgdmRvbSBjb25maWcgZ2V0cyBjaGFuZ2VkIGluIGNhc2UgdGhlIGNvbXBvbmVudCBpcyBhbHJlYWR5IG1vdW50ZWQgKGRlbHRhIHVwZGF0ZXMpLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHBhcmFtIHtOZW8udmRvbS5WTm9kZX0gdm5vZGVcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbcmVzb2x2ZV0gdXNlZCBieSBwcm9taXNlVmRvbVVwZGF0ZSgpXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW3JlamVjdF0gdXNlZCBieSBwcm9taXNlVmRvbVVwZGF0ZSgpXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB1cGRhdGVWZG9tKHZkb20sIHZub2RlLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygndXBkYXRlVmRvbScsIG1lLmlkLCBOZW8uY2xvbmUodmRvbSwgdHJ1ZSksIE5lby5jbG9uZSh2bm9kZSwgdHJ1ZSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndXBkYXRlVmRvbScsIG1lLmlzVmRvbVVwZGF0aW5nKTtcblxuICAgICAgICBpZiAobWUuaXNWZG9tVXBkYXRpbmcpIHtcbiAgICAgICAgICAgIG1lLm5lZWRzVmRvbVVwZGF0ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5pc1Zkb21VcGRhdGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIE5lby52ZG9tLkhlbHBlci51cGRhdGUoe1xuICAgICAgICAgICAgICAgIHZkb20gOiB2ZG9tLFxuICAgICAgICAgICAgICAgIHZub2RlOiB2bm9kZVxuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQ29tcG9uZW50IHZub2RlIHVwZGF0ZWQnLCBkYXRhLnZub2RlKTtcbiAgICAgICAgICAgICAgICBtZS52bm9kZSAgICAgICAgICA9IGRhdGEudm5vZGU7XG4gICAgICAgICAgICAgICAgbWUuaXNWZG9tVXBkYXRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobWUubmVlZHNWZG9tVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLm5lZWRzVmRvbVVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBtZS52ZG9tID0gbWUudmRvbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBhdHRlbXB0aW5nIHRvIHVwZGF0ZSBjb21wb25lbnQgZG9tJywgZXJyLCBtZSk7XG4gICAgICAgICAgICAgICAgbWUuaXNWZG9tVXBkYXRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChyZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogbWFuYWdlci5Gb2N1cyBmaXJlcyB0aGUgZXZlbnQgd2hlbiB0aGUgY29tcG9uZW50IGlkIGlzIGluY2x1ZGVkIGluc2lkZSB0aGUgZG9tIGlkIHBhdGhcbiAqIEBldmVudCBmb2N1c0VudGVyXG4gKiBAcGFyYW0ge0FycmF5fSBwYXRoIGRvbSBlbGVtZW50IGlkcyB1cHdhcmRzXG4gKi9cblxuLyoqXG4gKiBtYW5hZ2VyLkZvY3VzIGZpcmVzIHRoZSBldmVudCB3aGVuIHRoZSBjb21wb25lbnQgaWQgaXMgbm90IGluY2x1ZGVkIGluc2lkZSB0aGUgZG9tIGlkIHBhdGhcbiAqIEBldmVudCBmb2N1c0xlYXZlXG4gKiBAcGFyYW0ge0FycmF5fSBwYXRoIGRvbSBlbGVtZW50IGlkcyB1cHdhcmRzXG4gKi9cblxuLyoqXG4gKiBtYW5hZ2VyLkZvY3VzIGZpcmVzIHRoZSBldmVudCB3aGVuIHRoZSBjb21wb25lbnQgaWQgaXMgaW5jbHVkZWQgaW5zaWRlIHRoZSBkb20gaWQgcGF0aCwgYnV0IHRoZSBwYXRoIGl0c2VsZiBjaGFuZ2VkXG4gKiBAZXZlbnQgZm9jdXNNb3ZlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQHBhcmFtIHtBcnJheX0gIG9wdHMubmV3UGF0aCBkb20gZWxlbWVudCBpZHMgdXB3YXJkc1xuICogQHBhcmFtIHtBcnJheX0gIG9wdHMub2xkUGF0aCBkb20gZWxlbWVudCBpZHMgdXB3YXJkc1xuICovXG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IHtkZWZhdWx0IGFzIENvbXBvbmVudH0gZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICAgICAgICAgICAgICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb21wb25lbnQuQnV0dG9uXG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgZm9yIGljb25Qb3NpdGlvblxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gaWNvblBvc2l0aW9ucz1bJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGljb25Qb3NpdGlvbnM6IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J11cbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb21wb25lbnQuQnV0dG9uJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbXBvbmVudC5CdXR0b24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nYnV0dG9uJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdidXR0b24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1idXR0b24nXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1idXR0b24nXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGZhbHNlIGNhbGxzIE5lby5NYWluLnNldFJvdXRlKClcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZWRpdFJvdXRlPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGVkaXRSb3V0ZTogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3J0Y3V0IGZvciBkb21MaXN0ZW5lcnM9e2NsaWNrOmhhbmRsZXJ9XG4gICAgICAgICAqIEEgc3RyaW5nIGJhc2VkIHZhbHVlIGFzc3VtZXMgdGhhdCB0aGUgaGFuZGxlckZuIGxpdmVzIGluc2lkZSBhIENvbXBvbmVudENvbnRyb2xsZXJcbiAgICAgICAgICogQG1lbWJlciB7RnVuY3Rpb258U3RyaW5nfG51bGx9IGhhbmRsZXJfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhhbmRsZXJfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHNjb3BlICh0aGlzIHBvaW50ZXIpIGluc2lkZSB0aGUgaGFuZGxlciBmdW5jdGlvbi5cbiAgICAgICAgICogUG9pbnRzIHRvIHRoZSBidXR0b24gaW5zdGFuY2UgYnkgZGVmYXVsdC5cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGhhbmRsZXJTY29wZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoYW5kbGVyU2NvcGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgQ1NTIGNsYXNzIHRvIHVzZSBmb3IgYW4gaWNvbiwgZS5nLiAnZmEgZmEtaG9tZSdcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IFtpY29uQ2xzXz1udWxsXVxuICAgICAgICAgKi9cbiAgICAgICAgaWNvbkNsc186IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY29sb3IgdG8gdXNlIGZvciBhbiBpY29uLCBlLmcuICcjZmYwMDAwJyBbb3B0aW9uYWxdXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBpY29uQ29sb3JfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGljb25Db2xvcl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIGljb24gaW4gY2FzZSBpY29uQ2xzIGhhcyBhIHZhbHVlLlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgYXJlOiAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGljb25Qb3NpdGlvbl89J2xlZnQnXG4gICAgICAgICAqL1xuICAgICAgICBpY29uUG9zaXRpb25fOiAnbGVmdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcHJlc3NlZCBzdGF0ZSBvZiB0aGUgQnV0dG9uXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHByZXNzZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBwcmVzc2VkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGFuZ2UgdGhlIGJyb3dzZXIgaGFzaCB2YWx1ZSBvbiBjbGlja1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gcm91dGVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHJvdXRlXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0ZXh0IGRpc3BsYXllZCBvbiB0aGUgYnV0dG9uIFtvcHRpb25hbF1cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB0ZXh0Xz0nJ1xuICAgICAgICAgKi9cbiAgICAgICAgdGV4dF86ICcnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICAgICAgICBjbiA6IFtcbiAgICAgICAgICAgICAgICB7dGFnOiAnc3BhbicsIGNsczogWyduZW8tYnV0dG9uLWdseXBoJ119LFxuICAgICAgICAgICAgICAgIHt0YWc6ICdzcGFuJywgY2xzOiBbJ25lby1idXR0b24tdGV4dCddfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaGFuZGxlciBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0SGFuZGxlcih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnMgfHwgW107XG5cbiAgICAgICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBjbGljazogdmFsdWUsXG4gICAgICAgICAgICAgICAgc2NvcGU6IG1lLmhhbmRsZXJTY29wZSB8fCBtZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaWNvbkNscyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0SWNvbkNscyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGljb25Ob2RlID0gbWUuZ2V0VmRvbVJvb3QoKS5jblswXTtcblxuICAgICAgICBOZW9BcnJheS5yZW1vdmUoaWNvbk5vZGUuY2xzLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGljb25Ob2RlLnJlbW92ZURvbSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpY29uTm9kZS5yZW1vdmVEb20gPSBmYWxzZTtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChpY29uTm9kZS5jbHMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaWNvbkNvbG9yIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0SWNvbkNvbG9yKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgaWNvbk5vZGUgPSBtZS5nZXRWZG9tUm9vdCgpLmNuWzBdO1xuXG4gICAgICAgIGlmICghaWNvbk5vZGUuc3R5bGUpIHtcbiAgICAgICAgICAgIGljb25Ob2RlLnN0eWxlID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpY29uTm9kZS5zdHlsZS5jb2xvciA9IHZhbHVlO1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGljb25Qb3NpdGlvbiBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0SWNvblBvc2l0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgY2xzID0gdGhpcy5jbHM7XG5cbiAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgJ2ljb24tJyArIG9sZFZhbHVlKTtcbiAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgJ2ljb24tJyArIHZhbHVlKTtcblxuICAgICAgICB0aGlzLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHByZXNzZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0UHJlc3NlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IGNscyA9IHRoaXMuY2xzO1xuXG4gICAgICAgIE5lb0FycmF5W3ZhbHVlID09PSB0cnVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oY2xzLCAncHJlc3NlZCcpO1xuICAgICAgICB0aGlzLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHJvdXRlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRSb3V0ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnMgfHwgW107XG5cbiAgICAgICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBjbGljazogbWUuY2hhbmdlUm91dGUsXG4gICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0ZXh0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUZXh0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgdmRvbVJvb3QgPSBtZS5nZXRWZG9tUm9vdCgpLFxuICAgICAgICAgICAgdGV4dE5vZGUgPSB2ZG9tUm9vdC5jblsxXTtcblxuICAgICAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5hZGQobWUuX2NscywgICAgICAnbm8tdGV4dCcpO1xuICAgICAgICAgICAgTmVvQXJyYXkuYWRkKHZkb21Sb290LmNscywgJ25vLXRleHQnKTtcbiAgICAgICAgICAgIHRleHROb2RlLnJlbW92ZURvbSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUobWUuX2NscywgICAgICAnbm8tdGV4dCcpO1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKHZkb21Sb290LmNscywgJ25vLXRleHQnKTtcbiAgICAgICAgICAgIHRleHROb2RlLnJlbW92ZURvbSA9IGZhbHNlO1xuICAgICAgICAgICAgdGV4dE5vZGUuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB0aGUgaWNvbkNscyBhcnJheSBpbnRvIGEgc3RyaW5nIG9uIGJlZm9yZUdldFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBiZWZvcmVHZXRJY29uQ2xzKCkge1xuICAgICAgICBsZXQgaWNvbkNscyA9IHRoaXMuX2ljb25DbHM7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaWNvbkNscykpIHtcbiAgICAgICAgICAgIHJldHVybiBpY29uQ2xzLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpY29uQ2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGljb25DbHMgY29uZmlnIGdldHMgY2hhbmdlZC4gQ29udmVydHMgdGhlIHN0cmluZyBpbnRvIGFuIGFycmF5IGlmIG5lZWRlZC5cbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYmVmb3JlU2V0SWNvbkNscyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGljb25Qb3NpdGlvbiBjb25maWcgZ2V0cyBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRJY29uUG9zaXRpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdpY29uUG9zaXRpb24nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGNoYW5nZVJvdXRlKCkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLmVkaXRSb3V0ZSkge1xuICAgICAgICAgICAgTmVvLk1haW4uZWRpdFJvdXRlKHRoaXMucm91dGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTmVvLk1haW4uc2V0Um91dGUoe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBtZS5yb3V0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJ1dHRvbik7XG5cbmV4cG9ydCB7QnV0dG9uIGFzIGRlZmF1bHR9OyIsImltcG9ydCB7ZGVmYXVsdCBhcyBDb21wb25lbnR9IGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIGNsYXNzIHRvIHJlbmRlciBhIGxhYmVsIHdpdGggYSB0ZXh0XG4gKiBAY2xhc3MgTmVvLmNvbXBvbmVudC5MYWJlbFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIExhYmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbXBvbmVudC5MYWJlbCdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb21wb25lbnQuTGFiZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbGFiZWwnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tbGFiZWwnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1sYWJlbCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB0ZXh0Xz0nJ1xuICAgICAgICAgKi9cbiAgICAgICAgdGV4dF86ICcnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbT17dGFnOiAnbGFiZWwnfVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIHRhZzogJ2xhYmVsJ1xuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdGV4dCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0VGV4dCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG4gICAgICAgIHZkb20uaHRtbCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTGFiZWwpO1xuXG5leHBvcnQge0xhYmVsIGFzIGRlZmF1bHR9OyIsImltcG9ydCB7ZGVmYXVsdCBhcyBDb21wb25lbnR9IGZyb20gJy4uL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5pbXBvcnQgTGF5b3V0QmFzZSAgICAgICAgICAgICBmcm9tICcuLi9sYXlvdXQvQmFzZS5tanMnO1xuaW1wb3J0IExheW91dENhcmQgICAgICAgICAgICAgZnJvbSAnLi4vbGF5b3V0L0NhcmQubWpzJztcbmltcG9ydCBMYXlvdXRGaXQgICAgICAgICAgICAgIGZyb20gJy4uL2xheW91dC9GaXQubWpzJztcbmltcG9ydCBMYXlvdXRIYm94ICAgICAgICAgICAgIGZyb20gJy4uL2xheW91dC9IQm94Lm1qcyc7XG5pbXBvcnQgTGF5b3V0VkJveCAgICAgICAgICAgICBmcm9tICcuLi9sYXlvdXQvVkJveC5tanMnO1xuaW1wb3J0IExvZ2dlciAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9Mb2dnZXIubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgICAgICAgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbnRhaW5lci5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb250YWluZXIuQmFzZSdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250YWluZXIuQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjb250YWluZXInXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWNvbnRhaW5lciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtRGVmYXVsdHNfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1EZWZhdWx0c186IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhcnJheSBvZiBjb25maWcgb2JqZWN0c3xpbnN0YW5jZXN8bW9kdWxlcyBmb3IgZWFjaCBjaGlsZCBjb21wb25lbnRcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119IGl0ZW1zXz1bXVxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBpbXBvcnQgQnV0dG9uICAgICAgZnJvbSAnLi4vY29tcG9uZW50L0J1dHRvbi5tanMnO1xuICAgICAgICAgKiBpbXBvcnQgTXlSZWRCdXR0b24gZnJvbSAnbXlhcHAvTXlSZWRCdXR0b24ubWpzJztcbiAgICAgICAgICogaW1wb3J0IFRvb2xiYXIgICAgIGZyb20gJy4uL2NvbnRhaW5lci9Ub29sYmFyLm1qcyc7XG4gICAgICAgICAqXG4gICAgICAgICAqIGxldCBteUJ1dHRvbiA9IE5lby5jcmVhdGUoQnV0dG9uLCB7XG4gICAgICAgICAqICAgICB0ZXh0OiAnQnV0dG9uMSdcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIE5lby5jcmVhdGUoVG9vbGJhciwge1xuICAgICAgICAgKiAgICAgLy8uLi5cbiAgICAgICAgICogICAgIGl0ZW1zOiBbXG4gICAgICAgICAqICAgICAgICAgbXlCdXR0b24sICAgICAgICAgICAgICAvLyBwYXNzZWQgaW5zdGFuY2VcbiAgICAgICAgICogICAgICAgICB7XG4gICAgICAgICAqICAgICAgICAgICAgIG50eXBlOiAnYnV0dG9uJywgICAvLyBieSBudHlwZVxuICAgICAgICAgKiAgICAgICAgICAgICB0ZXh0IDogJ0J1dHRvbiAyJ1xuICAgICAgICAgKiAgICAgICAgIH0sXG4gICAgICAgICAqICAgICAgICAge1xuICAgICAgICAgKiAgICAgICAgICAgICBtb2R1bGU6IEJ1dHRvbiwgICAgLy8gYnkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAgICAqICAgICAgICAgICAgIHRleHQgIDogJ0J1dHRvbiAzJ1xuICAgICAgICAgKiAgICAgICAgIH0sXG4gICAgICAgICAqICAgICAgICAgTXlSZWRCdXR0b24gICAgICAgICAgICAvLyB5b3UgY2FuIGRyb3AgaW1wb3J0ZWQgbW9kdWxlcyBkaXJlY3RseSBpbnRvIHRoZSBpdGVtcyBhcnJheVxuICAgICAgICAgKiAgICAgXVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zXzogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dF89e250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXRfOiB7XG4gICAgICAgICAgICBudHlwZTogJ3Zib3gnLFxuICAgICAgICAgICAgYWxpZ246ICdzdHJldGNoJ1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbT17Y246IFtdfVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbXVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNoYW5nZSB0aGUgb3JkZXIgY29uZmlncyBhcmUgYXBwbGllZCB0byB0aGlzIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcmV2ZW50T3JpZ2luYWxDb25maWddIFRydWUgcHJldmVudHMgdGhlIGluc3RhbmNlIGZyb20gZ2V0dGluZyBhbiBvcmlnaW5hbENvbmZpZyBwcm9wZXJ0eVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIG1lcmdlQ29uZmlnKC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb25maWcgPSBzdXBlci5tZXJnZUNvbmZpZyguLi5hcmdzKTtcblxuICAgICAgICAvLyBhdm9pZCBhbnkgaW50ZXJmZXJlbmNlIG9uIHByb3RvdHlwZSBsZXZlbFxuICAgICAgICAvLyBkb2VzIG5vdCBjbG9uZSBleGlzdGluZyBOZW8gaW5zdGFuY2VzXG5cbiAgICAgICAgaWYgKGNvbmZpZy5pdGVtRGVmYXVsdHMpIHtcbiAgICAgICAgICAgIG1lLl9pdGVtRGVmYXVsdHMgPSBOZW8uY2xvbmUoY29uZmlnLml0ZW1EZWZhdWx0cywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLml0ZW1EZWZhdWx0cztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcuaXRlbXMpIHtcbiAgICAgICAgICAgIG1lLl9pdGVtcyA9IE5lby5jbG9uZShjb25maWcuaXRlbXMsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5pdGVtcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIC8vIGluIGNhc2UgdGhlIENvbnRhaW5lciBkb2VzIG5vdCBoYXZlIGEgbGF5b3V0IGNvbmZpZywgdGhlIHNldHRlciB3b24ndCB0cmlnZ2VyXG4gICAgICAgIG1lLl9sYXlvdXQgPSBtZS5jcmVhdGVMYXlvdXQobWUubGF5b3V0KTtcbiAgICAgICAgbWUuX2xheW91dC5hcHBseVJlbmRlckF0dHJpYnV0ZXMoKTtcblxuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbWUucGFyc2VJdGVtQ29uZmlncyhtZS5pdGVtcyk7XG4gICAgICAgIG1lLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBhbiBpdGVtIG9yIGFycmF5IG9mIGl0ZW1zIGF0IHRoZSBsYXN0IGluZGV4XG4gICAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfE5lby5jb21wb25lbnQuQmFzZVtdfVxuICAgICAqL1xuICAgIGFkZChpdGVtKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBtZS5pbnNlcnQobWUuaXRlbXMgPyBtZS5pdGVtcy5sZW5ndGggOiAwLCBpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmxheW91dC5CYXNlfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLmxheW91dC5CYXNlfSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRMYXlvdXQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZS5yZW1vdmVSZW5kZXJBdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgICB2YWx1ZS5hcHBseVJlbmRlckF0dHJpYnV0ZXMoKTtcblxuICAgICAgICAgICAgbWUuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZS5yZW1vdmVDaGlsZEF0dHJpYnV0ZXMoaXRlbSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIHZhbHVlLmFwcGx5Q2hpbGRBdHRyaWJ1dGVzKGl0ZW0sIGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHZhbHVlXG4gICAgICogQHJldHVybnMge05lby5sYXlvdXQuQmFzZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGJlZm9yZVNldExheW91dCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVMYXlvdXQodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1zICAgID0gbWUuX2l0ZW1zLFxuICAgICAgICAgICAgZGVmYXVsdHMgPSBtZS5pdGVtRGVmYXVsdHMsXG4gICAgICAgICAgICBsYXlvdXQgICA9IG1lLmxheW91dCxcbiAgICAgICAgICAgIHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIHZkb21Sb290ID0gbWUuZ2V0VmRvbVJvb3QoKTtcblxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uY29uc3RydWN0b3IuaXNDbGFzcyAmJiBpdGVtIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oaXRlbSwge1xuICAgICAgICAgICAgICAgICAgICBhcHBOYW1lIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IG1lLmlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoaXRlbS5pc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IE5lby5jcmVhdGUoaXRlbSwge1xuICAgICAgICAgICAgICAgICAgICBhcHBOYW1lIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IG1lLmlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBOZW8ubnR5cGUoe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmRvbSAgIDoge2lubmVySFRNTDogaXRlbX1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIE5lby5hc3NpZ25EZWZhdWx0cyhpdGVtLCBkZWZhdWx0cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gaXRlbS5tb2R1bGUucHJvdG90eXBlLmNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwTmFtZSA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudElkOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgICA6IGl0ZW0uc3R5bGUgfHwge31cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGl0ZW0gPSBOZW9baXRlbS5jbGFzc05hbWUgPyAnY3JlYXRlJyA6ICdudHlwZSddKGl0ZW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtc1tpbmRleF0gPSBpdGVtO1xuXG4gICAgICAgICAgICBsYXlvdXQuYXBwbHlDaGlsZEF0dHJpYnV0ZXMoaXRlbSwgaW5kZXgpO1xuXG4gICAgICAgICAgICB2ZG9tUm9vdC5jbi5wdXNoKGl0ZW0udmRvbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfE5lby5sYXlvdXQuQmFzZX0gdmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHtOZW8ubGF5b3V0LkJhc2V9XG4gICAgICovXG4gICAgY3JlYXRlTGF5b3V0KHZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBMYXlvdXRCYXNlICYmIHZhbHVlLmlzTGF5b3V0KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY29udGFpbmVySWQgPSBtZS5pZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBtZS5wYXJzZUxheW91dENsYXNzKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jb250YWluZXJJZCA9IG1lLmlkO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gTmVvLm50eXBlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBhbGwgY29tcG9uZW50cyBpbnNpZGUgdGhpcy5pdGVtcyBiZWZvcmUgdGhlIHN1cGVyKCkgY2FsbC5cbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIHRoZSBpbmRleCBvZiBhIGRpcmVjdCBjaGlsZCBjb21wb25lbnQgaW5zaWRlIHRoaXMuaXRlbXMuXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V8U3RyaW5nfSBpdGVtSWQgRWl0aGVyIHRoZSBpdGVtIHJlZmVyZW5jZSBvciB0aGUgaXRlbSBpZFxuICAgICAqIEByZXR1cm4ge051bWJlcn0gLTEgaW4gY2FzZSBubyBtYXRjaCB3YXMgZm91bmRcbiAgICAgKi9cbiAgICBpbmRleE9mKGl0ZW1JZCkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGkgICA9IDAsXG4gICAgICAgICAgICBsZW4gPSBtZS5pdGVtcyAmJiBtZS5pdGVtcy5sZW5ndGggfHwgMDtcblxuICAgICAgICBpZiAoIU5lby5pc1N0cmluZyhpdGVtSWQpKSB7XG4gICAgICAgICAgICBpdGVtSWQgPSBpdGVtSWQuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobWUuaXRlbXNbaV0uaWQgPT09IGl0ZW1JZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydHMgYW4gaXRlbSBvciBhcnJheSBvZiBpdGVtcyBhdCBhIHNwZWNpZmljIGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfE5lby5jb21wb25lbnQuQmFzZVtdfVxuICAgICAqL1xuICAgIGluc2VydChpbmRleCwgaXRlbSkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbXMgPSBtZS5pdGVtcyxcbiAgICAgICAgICAgIHZkb20gID0gbWUudmRvbSxcbiAgICAgICAgICAgIGNuLCBpLCBsZW47XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgICAgICAgIGkgICA9IDA7XG4gICAgICAgICAgICBsZW4gPSBpdGVtLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIHRvZG86IHJlbmRlciBpcyBhc3luYywgZW5zdXJlIHRoZSBvcmRlciBvZiBpdGVtcyBpcyBjb3JyZWN0XG5cbiAgICAgICAgICAgICAgICAvLyBpbnNlcnQgdGhlIGFycmF5IGJhY2t3YXJkc1xuICAgICAgICAgICAgICAgIGl0ZW1baV0gPSBtZS5pbnNlcnQoaXRlbVtsZW4gLSAxXSwgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBOZW8uY29tcG9uZW50LkJhc2UgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc05hbWUgPSBpdGVtLm1vZHVsZS5wcm90b3R5cGUuY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm1lLml0ZW1EZWZhdWx0cyB8fCB7fSxcblxuICAgICAgICAgICAgICAgICAgICBhcHBOYW1lICAgIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYXV0b01vdW50ICA6IG1lLm1vdW50ZWQsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudElkICAgOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50SW5kZXg6IGluZGV4LFxuXG4gICAgICAgICAgICAgICAgICAgIC4uLml0ZW1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaXRlbSA9IE5lb1tpdGVtLmNsYXNzTmFtZSA/ICdjcmVhdGUnIDogJ250eXBlJ10oaXRlbSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLmxheW91dC5hcHBseUNoaWxkQXR0cmlidXRlcyhpdGVtLCBpbmRleCk7XG5cbiAgICAgICAgICAgIGl0ZW1zLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG5cbiAgICAgICAgICAgIG1lLml0ZW1zID0gaXRlbXM7XG5cbiAgICAgICAgICAgIGNuID0gdmRvbS5jbiB8fCB2ZG9tLmNoaWxkTm9kZXMgfHwgdmRvbS5jaGlsZHJlbjtcblxuICAgICAgICAgICAgY24uc3BsaWNlKGluZGV4LCAwLCBpdGVtLnZkb20pO1xuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0b2RvXG4gICAgICogTW92ZXMgYW4gZXhpc3RpbmcgaXRlbSB0byBhIG5ldyBpbmRleFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtSWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfE5lby5jb21wb25lbnQuQmFzZVtdfVxuICAgICAqL1xuICAgIG1vdmVUbyhpdGVtSWQsIGluZGV4KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gbWUuaW5kZXhPZihpdGVtSWQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRJbmRleCk7XG4gICAgfVxuXG4gICAgcGFyc2VJdGVtQ29uZmlncyhpdGVtcykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhpdGVtKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnaXRlbXMnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnBhcnNlSXRlbUNvbmZpZ3ModmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5zdGFydHNXaXRoKCdAY29uZmlnOicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKDgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghbWVbdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIubG9nRXJyb3IoJ1RoZSB1c2VkIEBjb25maWcgZG9lcyBub3QgZXhpc3Q6JywgdmFsdWUsIG1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ba2V5XSA9IG1lW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gY29uZmlnXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBsYXlvdXRDb25maWdcbiAgICAgKi9cbiAgICBwYXJzZUxheW91dENsYXNzKGNvbmZpZykge1xuICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KGNvbmZpZykpIHtcbiAgICAgICAgICAgIGlmIChjb25maWcubnR5cGUuaW5kZXhPZignbGF5b3V0LScpIDwgMCkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5udHlwZSA9ICdsYXlvdXQtJyArIGNvbmZpZy5udHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb25maWcuaW5kZXhPZignbGF5b3V0LScpIDwgMCkge1xuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG50eXBlOiAnbGF5b3V0LScgKyBjb25maWdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbnR5cGU6IGNvbmZpZ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGNvbnRhaW5lciBpdGVtIGJ5IHJlZmVyZW5jZVxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtkZXN0cm95SXRlbT10cnVlXVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKi9cbiAgICByZW1vdmUoY29tcG9uZW50LCBkZXN0cm95SXRlbT10cnVlLCBzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtcyxcbiAgICAgICAgICAgIGkgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgID0gaXRlbXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpdGVtc1tpXS5pZCA9PT0gY29tcG9uZW50LmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdChpLCBkZXN0cm95SXRlbSwgc2lsZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjb250YWluZXIgaXRlbSBhdCBhIGdpdmVuIGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZGVzdHJveUl0ZW09dHJ1ZV1cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnQ9ZmFsc2VdXG4gICAgICovXG4gICAgcmVtb3ZlQXQoaW5kZXgsIGRlc3Ryb3lJdGVtPXRydWUsIHNpbGVudD1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbXMgPSBtZS5pdGVtcyxcbiAgICAgICAgICAgIHZkb20gID0gbWUudmRvbSxcbiAgICAgICAgICAgIGNuLCBpdGVtO1xuXG4gICAgICAgIGlmIChpbmRleCA+PSBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIE5lby53YXJuKCdDb250YWluZXIucmVtb3ZlQXQ6IGluZGV4ID49IGl0ZW1zLmxlbmd0aC4gJyArIG1lLmlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtc1tpbmRleF07XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmUgaXRlbScsIGl0ZW0uaWQpO1xuXG4gICAgICAgICAgICBpdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICBjbiA9IHZkb20uY24gfHwgdmRvbS5jaGlsZE5vZGVzIHx8IHZkb20uY2hpbGRyZW47XG5cbiAgICAgICAgICAgIGNuLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgICAgIG1lW3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcblxuICAgICAgICAgICAgaWYgKGRlc3Ryb3lJdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTd2l0Y2hlcyB0aGUgcG9zaXRpb24gb2YgMiBkaXJlY3QgY2hpbGQgaXRlbXNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaXRlbTFpZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtMmlkXG4gICAgICovXG4gICAgc3dpdGNoSXRlbXMoaXRlbTFpZCwgaXRlbTJpZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtMUluZGV4ID0gbWUuaW5kZXhPZihpdGVtMWlkKSxcbiAgICAgICAgICAgIGl0ZW0ySW5kZXggPSBtZS5pbmRleE9mKGl0ZW0yaWQpLFxuICAgICAgICAgICAgdmRvbSAgICAgICA9IG1lLnZkb207XG5cbiAgICAgICAgTmVvQXJyYXkubW92ZShtZS5pdGVtcywgICAgICAgICAgICAgIGl0ZW0ySW5kZXgsIGl0ZW0xSW5kZXgpO1xuICAgICAgICBOZW9BcnJheS5tb3ZlKG1lLmdldFZkb21JdGVtc1Jvb3QoKSwgaXRlbTJJbmRleCwgaXRlbTFJbmRleCk7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9OyIsImltcG9ydCB7ZGVmYXVsdCBhcyBDb250YWluZXJ9IGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29udGFpbmVyLlZpZXdwb3J0XG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgVmlld3BvcnQgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29udGFpbmVyLlZpZXdwb3J0J1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbnRhaW5lci5WaWV3cG9ydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd2aWV3cG9ydCdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndmlld3BvcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogdHJ1ZSBhcHBsaWVzICduZW8tYm9keS12aWV3cG9ydCcgdG8gdGhlIGRvY3VtZW50LmJvZHlcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXBwbHlCb2R5Q2xzPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGFwcGx5Qm9keUNsczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tdmlld3BvcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby12aWV3cG9ydCddXG4gICAgfX1cblxuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBpZiAodGhpcy5hcHBseUJvZHlDbHMpIHtcbiAgICAgICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5hcHBseUJvZHlDbHMoe2NsczogWyduZW8tYm9keS12aWV3cG9ydCddfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFZpZXdwb3J0KTtcblxuZXhwb3J0IHtWaWV3cG9ydCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbnRyb2xsZXIuQXBwbGljYXRpb25cbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkJhc2VcbiAqL1xuY2xhc3MgQXBwbGljYXRpb24gZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbnRyb2xsZXIuQXBwbGljYXRpb24nXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29udHJvbGxlci5BcHBsaWNhdGlvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBjcmVhdGVNYWluVmlldz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBjcmVhdGVNYWluVmlldzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuQmFzZX0gbWFpblZpZXdfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIG1haW5WaWV3XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbmFtZT0nTXlBcHAnXG4gICAgICAgICAqL1xuICAgICAgICBuYW1lOiAnTXlBcHAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwYXJlbnRJZD0nZG9jdW1lbnQuYm9keSdcbiAgICAgICAgICovXG4gICAgICAgIHBhcmVudElkOiAnZG9jdW1lbnQuYm9keScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZW5kZXJlZD1mYWxzZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVuZGVyZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVuZGVyaW5nPWZhbHNlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICByZW5kZXJpbmc6IGZhbHNlXG4gICAgfX1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTmVvLmFwcHMgPSBOZW8uYXBwcyB8fCB7fTtcblxuICAgICAgICBOZW8uYXBwc1ttZS5uYW1lXSA9IG1lO1xuXG4gICAgICAgIGlmIChtZS5jcmVhdGVNYWluVmlldykge1xuICAgICAgICAgICAgbWUucmVuZGVyTWFpblZpZXcoY29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlck1haW5WaWV3KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLm1haW5WaWV3SW5zdGFuY2UgPSBOZW8uY3JlYXRlKG1lLm1haW5WaWV3LCB7XG4gICAgICAgICAgICBhcHBOYW1lICAgOiBtZS5uYW1lLFxuICAgICAgICAgICAgYXV0b1JlbmRlcjogdHJ1ZSxcbiAgICAgICAgICAgIHBhcmVudElkICA6IG1lLnBhcmVudElkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQXBwbGljYXRpb24pO1xuXG4vLyBzaG9ydGN1dFxuTmVvLmFwcCA9IGNvbmZpZyA9PiBOZW8uY3JlYXRlKEFwcGxpY2F0aW9uLCBjb25maWcpO1xuXG5leHBvcnQge0FwcGxpY2F0aW9uIGFzIGRlZmF1bHR9OyIsImltcG9ydCB7ZGVmYXVsdCBhcyBDb3JlQmFzZX0gZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgSGFzaEhpc3RvcnkgICAgICAgICAgIGZyb20gJy4uL3V0aWwvSGFzaEhpc3RvcnkubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbnRyb2xsZXIuQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBCYXNlIGV4dGVuZHMgQ29yZUJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbnRyb2xsZXIuQmFzZSdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250cm9sbGVyLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29udHJvbGxlcidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29udHJvbGxlcidcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgSGFzaEhpc3Rvcnkub24oJ2NoYW5nZScsIHRoaXMub25IYXNoQ2hhbmdlLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZWhvbGRlciBtZXRob2Qgd2hpY2ggZ2V0cyB0cmlnZ2VyZWQgd2hlbiB0aGUgaGFzaCBpbnNpZGUgdGhlIGJyb3dzZXIgdXJsIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaGFzaFN0cmluZ1xuICAgICAqL1xuICAgIG9uSGFzaENoYW5nZSh2YWx1ZSwgb2xkVmFsdWUsIGhhc2hTdHJpbmcpIHtcblxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XG5cbmV4cG9ydCB7QmFzZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSAgICAgICAgICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gJy4uL21hbmFnZXIvQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgRG9tRXZlbnRNYW5hZ2VyICBmcm9tICcuLi9tYW5hZ2VyL0RvbUV2ZW50Lm1qcyc7XG5pbXBvcnQgTG9nZ2VyICAgICAgICAgICBmcm9tICcuLi9jb3JlL0xvZ2dlci5tanMnO1xuaW1wb3J0IE5lb0Z1bmN0aW9uICAgICAgZnJvbSAnLi4vdXRpbC9GdW5jdGlvbi5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkJhc2VcbiAqL1xuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb250cm9sbGVyLkNvbXBvbmVudCdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250cm9sbGVyLkNvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd2aWV3LWNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NvbXBvbmVudC1jb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gcmVmZXJlbmNlcz1udWxsXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICByZWZlcmVuY2VzOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSB2aWV3Xz1udWxsXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB2aWV3XzogbnVsbFxuICAgIH19XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnJlZmVyZW5jZXMgPSB7fTtcblxuICAgICAgICBOZW9GdW5jdGlvbi5jcmVhdGVTZXF1ZW5jZShtZS52aWV3LCAnb25Db25zdHJ1Y3RlZCcsIG1lLm9uVmlld0NvbnN0cnVjdGVkLCBtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIHdoZW4gYWNjZXNzaW5nIHRoZSB2aWV3IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBiZWZvcmVHZXRWaWV3KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gTmVvLmdldCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgdmlldyBjb25maWcgZ2V0cyBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGJlZm9yZVNldFZpZXcodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5pZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbbnR5cGVdXG4gICAgICogQHJldHVybnMge05lby5jb250cm9sbGVyLkNvbXBvbmVudHxudWxsfVxuICAgICAqL1xuICAgIGdldFBhcmVudChudHlwZSkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIHBhcmVudHMgPSBDb21wb25lbnRNYW5hZ2VyLmdldFBhcmVudHModmlldyksXG4gICAgICAgICAgICBpICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgPSBwYXJlbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29udHJvbGxlciA9IHBhcmVudHNbaV0uY29udHJvbGxlcjtcblxuICAgICAgICAgICAgaWYgKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAobnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG50eXBlID09PSBjb250cm9sbGVyLm50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udHJvbGxlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGhhbmRsZXJOYW1lXG4gICAgICogQHJldHVybnMge05lby5jb250cm9sbGVyLkNvbXBvbmVudHxudWxsfVxuICAgICAqL1xuICAgIGdldFBhcmVudEhhbmRsZXJTY29wZShoYW5kbGVyTmFtZSkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIHBhcmVudHMgPSBDb21wb25lbnRNYW5hZ2VyLmdldFBhcmVudHModmlldyksXG4gICAgICAgICAgICBpICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgPSBwYXJlbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29udHJvbGxlciA9IHBhcmVudHNbaV0uY29udHJvbGxlcjtcblxuICAgICAgICAgICAgaWYgKGNvbnRyb2xsZXIgJiYgY29udHJvbGxlcltoYW5kbGVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udHJvbGxlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRvZG86IGNsZWFudXAgbm8gbG9uZ2VyIGV4aXN0aW5nIHJlZmVyZW5jZXNcbiAgICAgKiB0b2RvOiB1cGRhdGUgY2hhbmdlZCByZWZlcmVuY2VzIChlLmcuIGNvbnRhaW5lci5yZW1vdmUoKSB0aGVuIGNvbnRhaW5lci5hZGQoKSB1c2luZyB0aGUgc2FtZSBrZXkpXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRSZWZlcmVuY2UobmFtZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29tcG9uZW50SWQgPSBtZS5yZWZlcmVuY2VzW25hbWVdLFxuICAgICAgICAgICAgY29tcG9uZW50O1xuXG4gICAgICAgIGlmIChjb21wb25lbnRJZCkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gTmVvLmdldENvbXBvbmVudChjb21wb25lbnRJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gbWUudmlldy5kb3duKHtyZWZlcmVuY2U6IG5hbWV9KTtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIG1lLnJlZmVyZW5jZXNbbmFtZV0gPSBjb21wb25lbnQuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50IHx8IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gdmlld1xuICAgICAqL1xuICAgIG9uVmlld0NvbnN0cnVjdGVkKHZpZXcpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycywgZXZlbnRIYW5kbGVyLCBmbiwgcGFyZW50Q29udHJvbGxlcjtcblxuICAgICAgICB2aWV3ID0gdmlldyB8fCBtZS52aWV3O1xuXG4gICAgICAgIHZpZXcuZG9tTGlzdGVuZXJzID0gTmVvLmNsb25lKHZpZXcuZG9tTGlzdGVuZXJzLCB0cnVlLCB0cnVlKTsgLy8gZW5zdXJlIHRoZXJlIGlzIG5vIGludGVyZmVyZW5jZSBvbiBwcm90b3R5cGUgbGV2ZWxcbiAgICAgICAgZG9tTGlzdGVuZXJzID0gdmlldy5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgaWYgKGRvbUxpc3RlbmVycykge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRvbUxpc3RlbmVycykpIHtcbiAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBbZG9tTGlzdGVuZXJzXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzLmZvckVhY2goZG9tTGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRvbUxpc3RlbmVyKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnc2NvcGUnICYmIGtleSAhPT0gJ2RlbGVnYXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnZm4nKSAmJiBOZW8uaXNTdHJpbmcodmFsdWUuZm4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gdmFsdWUuZm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudEhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1lW2V2ZW50SGFuZGxlcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29udHJvbGxlciA9IG1lLmdldFBhcmVudEhhbmRsZXJTY29wZShldmVudEhhbmRsZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGFyZW50Q29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmxvZ0Vycm9yKCdVbmtub3duIGRvbUV2ZW50IGhhbmRsZXIgZm9yJywgdmlldywgZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuICAgICAgICAgICAgICAgPSBwYXJlbnRDb250cm9sbGVyW2V2ZW50SGFuZGxlcl0uYmluZChwYXJlbnRDb250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyW2tleV0gPSBmbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9tRXZlbnRNYW5hZ2VyLnVwZGF0ZUxpc3RlbmVyUGxhY2Vob2xkZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudElkICAgICAgIDogdmlldy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXJNZXRob2Q6IGZuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlck5hbWUgIDogZXZlbnRIYW5kbGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSAgICAgICAgIDoga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlICAgICAgICAgICAgIDogcGFyZW50Q29udHJvbGxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbiAgICAgICAgICAgICAgID0gbWVbZXZlbnRIYW5kbGVyXS5iaW5kKG1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJba2V5XSA9IGZuO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbUV2ZW50TWFuYWdlci51cGRhdGVMaXN0ZW5lclBsYWNlaG9sZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudElkICAgICAgIDogdmlldy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlck1ldGhvZDogZm4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXJOYW1lICA6IGV2ZW50SGFuZGxlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSAgICAgICAgIDoga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUgICAgICAgICAgICAgOiBtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZpZXcubGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh2aWV3Lmxpc3RlbmVycykuZm9yRWFjaCgoW25hbWUsIGxpc3RlbmVyXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3RlbmVyKSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KGtleSkgJiYga2V5Lmhhc093blByb3BlcnR5KCdmbicpICYmIE5lby5pc1N0cmluZyhrZXkuZm4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0ga2V5LmZuO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtZVtldmVudEhhbmRsZXJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5sb2dFcnJvcignVW5rbm93biBldmVudCBoYW5kbGVyIGZvcicsIHZpZXcsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5LmZuID0gbWVbZXZlbnRIYW5kbGVyXS5iaW5kKG1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZpZXcuaXRlbXMpIHtcbiAgICAgICAgICAgIHZpZXcuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0uY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgICAgICBtZS5vblZpZXdDb25zdHJ1Y3RlZChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIHBhcnNlQ29uZmlnKGNvbmZpZykge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZpZXcgICAgICAgICA9IGNvbmZpZyB8fCBtZS52aWV3LFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gdmlldy5kb21MaXN0ZW5lcnMsXG4gICAgICAgICAgICBldmVudEhhbmRsZXI7XG5cbiAgICAgICAgaWYgKGRvbUxpc3RlbmVycykge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRvbUxpc3RlbmVycykpIHtcbiAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBbZG9tTGlzdGVuZXJzXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzLmZvckVhY2goZG9tTGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRvbUxpc3RlbmVyKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnc2NvcGUnICYmIGtleSAhPT0gJ2RlbGVnYXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnZm4nKSAmJiBOZW8uaXNTdHJpbmcodmFsdWUuZm4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gdmFsdWUuZm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudEhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1lW2V2ZW50SGFuZGxlcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmxvZ0Vycm9yKCdVbmtub3duIGRvbUV2ZW50IGhhbmRsZXIgZm9yJywgdmlldywgZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge2NvbnNvbGUubG9nKCcjJywga2V5LCBtZS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXJzZUNvbmZpZycsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyW2tleV0gPSBtZVtldmVudEhhbmRsZXJdLmJpbmQobWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlldy5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZpZXcubGlzdGVuZXJzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3Njb3BlJyAmJiBrZXkgIT09ICdkZWxlZ2F0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoJ2ZuJykgJiYgTmVvLmlzU3RyaW5nKHZhbHVlLmZuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gdmFsdWUuZm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1lW2V2ZW50SGFuZGxlcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIubG9nRXJyb3IoJ1Vua25vd24gZXZlbnQgaGFuZGxlciBmb3InLCB2aWV3LCBldmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Lmxpc3RlbmVyc1trZXldID0gbWVbZXZlbnRIYW5kbGVyXS5iaW5kKG1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZpZXcuaGVhZGVycykge1xuICAgICAgICAgICAgdmlldy5oZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWhlYWRlci5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnBhcnNlQ29uZmlnKGhlYWRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlldy5pdGVtcykge1xuICAgICAgICAgICAgdmlldy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaXRlbS5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnBhcnNlQ29uZmlnKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb21wb25lbnQpO1xuXG5leHBvcnQge0NvbXBvbmVudCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgSWRHZW5lcmF0b3IgZnJvbSAnLi9JZEdlbmVyYXRvci5tanMnXG5cbmNvbnN0IGNvbmZpZ1N5bWJvbCA9IFN5bWJvbC5mb3IoJ2NvbmZpZ1N5bWJvbCcpLFxuICAgICAgaXNJbnN0YW5jZSAgID0gU3ltYm9sKCdpc0luc3RhbmNlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgY2xhc3MgZm9yIChhbG1vc3QpIGFsbCBjbGFzc2VzIGluc2lkZSB0aGUgTmVvIG5hbWVzcGFjZVxuICogRXhjZXB0aW9ucyBhcmUgZS5nLiBjb3JlLklkR2VuZXJhdG9yLCB2ZG9tLlZOb2RlXG4gKiBAY2xhc3MgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgZ2V0IGFwcGxpZWQgdG8gdGhlIGNsYXNzIGNvbnN0cnVjdG9yXG4gICAgICogQHJldHVybnMge09iamVjdH0gc3RhdGljQ29uZmlnXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgb25lIHRvIGZhbHNlIGluIGNhc2UgeW91IGRvbid0IHdhbnQgdG8gc3RpY2tcbiAgICAgICAgICogdG8gdGhlIFwiYW50aS1wYXR0ZXJuXCIgdG8gYXBwbHkgY2xhc3NlcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlZ2lzdGVyVG9HbG9iYWxOcz10cnVlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHJlZ2lzdGVyVG9HbG9iYWxOczogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgZ2V0IGFwcGxpZWQgdG8gZWFjaCBjbGFzcyBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHN0YXRpY0NvbmZpZ1xuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBuYW1lIHdoaWNoIHdpbGwgZ2V0IG1hcHBlZCBpbnRvIHRoZSBOZW8gb3IgYXBwIG5hbWVzcGFjZVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuQmFzZSdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIHNob3J0Y3V0LW5hbWUgdG8gdXNlIGZvciBlLmcuIGNyZWF0aW5nIGNoaWxkIGNvbXBvbmVudHMgaW5zaWRlIGEgSlNPTi1mb3JtYXRcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nYmFzZSdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgbWl4aW5zIGFzIGFuIGFycmF5IG9mIGNsYXNzTmFtZXMsIGltcG9ydGVkIG1vZHVsZXMgb3IgYSBtaXhlZCB2ZXJzaW9uXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfE5lby5jb3JlLkJhc2VbXXxudWxsfSBtaXhpbnM9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW5zOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIENvbnN1bWVzIHRoZSBzdGF0aWMgZ2V0Q29uZmlnKCkgb2JqZWN0XG4gICAgICogQXBwbGllcyB0aGUgb2JzZXJ2YWJsZSBtaXhpbiBpZiBuZWVkZWQsIGdyYW50cyByZW1vdGUgYWNjZXNzIGlmIG5lZWRlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobWUsIHtcbiAgICAgICAgICAgIFtjb25maWdTeW1ib2xdOiB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGUgIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgICAgOiB7fSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZSAgICA6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbaXNJbnN0YW5jZV06IHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmNyZWF0ZUlkKGNvbmZpZy5pZCB8fCBtZS5pZCk7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XG5cbiAgICAgICAgaWYgKG1lLmNvbnN0cnVjdG9yLmNvbmZpZykge1xuICAgICAgICAgICAgZGVsZXRlIG1lLmNvbnN0cnVjdG9yLmNvbmZpZy5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS5nZXRTdGF0aWNDb25maWcoJ29ic2VydmFibGUnKSB8fCBtZS5taXhpbnMgJiYgTmVvLm5zKCdOZW8uY29yZS5PYnNlcnZhYmxlJywgbWUubWl4aW5zKSkge1xuICAgICAgICAgICAgbWUuaW5pdE9ic2VydmFibGUoY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmluaXRDb25maWcoY29uZmlnKTtcblxuICAgICAgICBpZiAobWUuY29udHJvbGxlcikge1xuICAgICAgICAgICAgbWUuY29udHJvbGxlci5wYXJzZUNvbmZpZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lLCAnY29uZmlnc0FwcGxpZWQnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1lLnJlbW90ZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChtZS5pbml0UmVtb3RlLmJpbmQobWUpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIGFsbCBjb25zdHJ1Y3RvcnMgYXJlIGRvbmVcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge31cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIG9uQ29uc3RydWN0ZWQgaXMgZG9uZVxuICAgICAqIEBzZWUge0BsaW5rIE5lby5jb3JlLkJhc2Ujb25Db25zdHJ1Y3RlZCBvbkNvbnN0cnVjdGVkfVxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIGluaXQoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBiZWZvcmVTZXQgZnVuY3Rpb25zIHdoaWNoIHRlc3QgaWYgYSBnaXZlbiB2YWx1ZSBpcyBpbnNpZGUgYSBzdGF0aWMgYXJyYXlcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIGNvbmZpZyBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtzdGF0aWNOYW1lPW5hbWUgKyAncyddIG5hbWUgb2YgdGhlIHN0YXRpYyBjb25maWcgYXJyYXlcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCBuYW1lLCBzdGF0aWNOYW1lID0gbmFtZSArICdzJykge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFN0YXRpY0NvbmZpZyhzdGF0aWNOYW1lKTtcblxuICAgICAgICBpZiAoIXZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignU3VwcG9ydGVkIHZhbHVlcyBmb3IgJyArIG5hbWUgKyAnIGFyZTonLCB2YWx1ZXMuam9pbignLCAnKSwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gb2xkVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlcyB0aGUgSWRHZW5lcmF0b3IgdG8gY3JlYXRlIGFuIGlkIGlmIGEgc3RhdGljIG9uZSBpcyBub3QgZXhwbGljaXRseSBzZXQuXG4gICAgICogUmVnaXN0ZXJzIHRoZSBpbnN0YW5jZSB0byBtYW5hZ2VyLkluc3RhbmNlIGlmIHRoaXMgb25lIGlzIGFscmVhZHkgY3JlYXRlZCxcbiAgICAgKiBvdGhlcndpc2Ugc3RvcmVzIGl0IGluc2lkZSBhIHRtcCBtYXAuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICovXG4gICAgY3JlYXRlSWQoaWQpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pZCA9IGlkIHx8IElkR2VuZXJhdG9yLmdldElkKG1lLm50eXBlKTtcblxuICAgICAgICBpZiAoQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIE5lby5tYW5hZ2VyLkluc3RhbmNlLnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghTmVvLmlkTWFwKSB7XG4gICAgICAgICAgICAgICAgTmVvLmlkTWFwID0ge307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE5lby5pZE1hcFttZS5pZF0gPSBtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXJzIHRoaXMgaW5zdGFuY2UgZnJvbSBOZW8ubWFuYWdlci5JbnN0YW5jZVxuICAgICAqIGFuZCByZW1vdmVzIGFsbCBvYmplY3QgZW50cmllcyBmcm9tIHRoaXMgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChCYXNlLmluc3RhbmNlTWFuYWdlckF2YWlsYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgTmVvLm1hbmFnZXIuSW5zdGFuY2UudW5yZWdpc3RlcihtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoTmVvLmlkTWFwKSB7XG4gICAgICAgICAgICBkZWxldGUgTmVvLmlkTWFwW21lLmlkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKG1lKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtZSwga2V5KS53cml0YWJsZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIHN0YXRpYyBjb25maWcga2V5IG9yIHRoZSBzdGF0aWNDb25maWcgb2JqZWN0IGl0c2VsZiBpbiBjYXNlIG5vIHZhbHVlIGlzIHNldFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGEgc3RhdGljQ29uZmlnIGRlZmluZWQgaW5zaWRlIHN0YXRpYyBnZXRTdGF0aWNDb25maWdcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRTdGF0aWNDb25maWcoa2V5KSB7XG4gICAgICAgIGxldCBjZmcgPSB0aGlzLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZztcbiAgICAgICAgcmV0dXJuIChrZXkgPyBjZmdba2V5XSA6IGNmZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyBhbGwgY2xhc3MgY29uZmlncyB0byB0aGlzIGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRPcmlnaW5hbENvbmZpZ10gVHJ1ZSBwcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBnZXR0aW5nIGFuIG9yaWdpbmFsQ29uZmlnIHByb3BlcnR5XG4gICAgICovXG4gICAgaW5pdENvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWVbY29uZmlnU3ltYm9sXSwgbWUubWVyZ2VDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpKTtcbiAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHByb2Nlc3NDb25maWdzKCkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMobWVbY29uZmlnU3ltYm9sXSk7XG5cbiAgICAgICAgLy8gV2UgZG8gbm90IHdhbnQgdG8gaXRlcmF0ZSBvdmVyIHRoZSBrZXlzLCBzaW5jZSAxIGNvbmZpZyBjYW4gcmVtb3ZlIG1vcmUgdGhhbiAxIGtleSAoYmVmb3JlU2V0WCwgYWZ0ZXJTZXRYKVxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBUaGUgaGFzT3duUHJvcGVydHkgY2hlY2sgaXMgaW50ZW5kZWQgZm9yIGNvbmZpZ3Mgd2l0aG91dCBhIHRyYWlsaW5nIHVuZGVyc2NvcmVcbiAgICAgICAgICAgIC8vID0+IHRoZXkgY291bGQgYWxyZWFkeSBnb3QgYXNzaWduZWQgaW5zaWRlIGFuIGFmdGVyU2V0LW1ldGhvZFxuICAgICAgICAgICAgaWYgKCFtZS5oYXNPd25Qcm9wZXJ0eShrZXlzWzBdKSkge1xuICAgICAgICAgICAgICAgIG1lW2tleXNbMF1dID0gbWVbY29uZmlnU3ltYm9sXVtrZXlzWzBdXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSBkZWxldGUgY2FsbCBpbnNpZGUgdGhlIGNvbmZpZyBnZXR0ZXIgYXMgd2VsbCAoTmVvLm1qcyA9PiBhdXRvR2VuZXJhdGVHZXRTZXQoKSlcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8ga2VlcCB0aGlzIG9uZSBmb3IgY29uZmlncywgd2hpY2ggZG8gbm90IHVzZSBnZXR0ZXJzIChubyB0cmFpbGluZyB1bmRlcnNjb3JlKVxuICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5c1swXV07XG5cbiAgICAgICAgICAgIG1lLnByb2Nlc3NDb25maWdzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEb2VzIGdldCB0cmlnZ2VyZWQgd2l0aCBhIGRlbGF5IHRvIGVuc3VyZSB0aGF0IE5lby53b3JrZXJJZCAmIE5lby53b3JrZXIuTWFuYWdlciBhcmUgZGVmaW5lZFxuICAgICAqIFJlbW90ZSBtZXRob2QgYWNjZXNzIHZpYSBwcm9taXNlc1xuICAgICAqL1xuICAgIGluaXRSZW1vdGUoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcmVtb3RlICAgID0gbWUucmVtb3RlLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gbWUuY2xhc3NOYW1lLFxuICAgICAgICAgICAgb3JpZ2luO1xuXG4gICAgICAgIGlmICghbWUuc2luZ2xldG9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbW90ZSBtZXRob2QgYWNjZXNzIG9ubHkgZnVuY3Rpb25hbCBmb3IgU2luZ2xldG9uIGNsYXNzZXMgJyArIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIU5lby5jb25maWcudW5pdFRlc3RNb2RlICYmIE5lby5pc09iamVjdChyZW1vdGUpKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhyZW1vdGUpLmZvckVhY2goKFt3b3JrZXIsIG1ldGhvZHNdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKE5lby53b3JrZXJJZCAhPT0gd29ya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbiA9IE5lby53b3JrZXJJZCA9PT0gJ21haW4nID8gTmVvLndvcmtlci5NYW5hZ2VyIDogTmVvLmN1cnJlbnRXb3JrZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luLnNlbmRNZXNzYWdlKHdvcmtlciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uICAgOiAncmVnaXN0ZXJSZW1vdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kcyAgOiBtZXRob2RzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjaGFuZ2UgdGhlIG9yZGVyIGNvbmZpZ3MgYXJlIGFwcGxpZWQgdG8gdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBtZXJnZUNvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBjdG9yID0gbWUuY29uc3RydWN0b3I7XG5cbiAgICAgICAgaWYgKCFjdG9yLmNvbmZpZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZW8uYXBwbHlDbGFzc0NvbmZpZyBoYXMgbm90IGJlZW4gcnVuIG9uICcgKyBtZS5jbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgICAgIG1lLm9yaWdpbmFsQ29uZmlnID0gTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gey4uLmN0b3IuY29uZmlnLCAuLi5jb25maWd9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBtdWx0aXBsZSBjb25maWdzIGF0IG9uY2UsIGVuc3VyaW5nIHRoYXQgYWxsIGFmdGVyU2V0IG1ldGhvZHMgZ2V0IGFsbCBuZXcgYXNzaWduZWQgdmFsdWVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcz17fVxuICAgICAqL1xuICAgIHNldCh2YWx1ZXM9e30pIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAvLyBpbnN0ZWFkIG9mIHVzaW5nOlxuICAgICAgICAvLyBtZVtjb25maWdTeW1ib2xdID0gdmFsdWVzO1xuICAgICAgICAvLyB3ZSBrZWVwIHRoZSBPYmplY3QgaW5zdGFuY2UgKGRlZmluZWQgdmlhIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCkgPT4gbm9uIGVudW1lcmFibGUpXG5cbiAgICAgICAgT2JqZWN0LmtleXMobWVbY29uZmlnU3ltYm9sXSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZVtjb25maWdTeW1ib2xdLCB2YWx1ZXMpO1xuXG4gICAgICAgIG1lLnByb2Nlc3NDb25maWdzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgYSBzdGF0aWMgY29uZmlnIGJ5IGEgZ2l2ZW4ga2V5XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IG9mIGEgc3RhdGljQ29uZmlnIGRlZmluZWQgaW5zaWRlIHN0YXRpYyBnZXRTdGF0aWNDb25maWdcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgY29uZmlnIGV4aXN0cyBhbmQgZ290IGNoYW5nZWRcbiAgICAgKi9cbiAgICBzZXRTdGF0aWNDb25maWcoa2V5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgc3RhdGljQ29uZmlnID0gdGhpcy5jb25zdHJ1Y3Rvci5zdGF0aWNDb25maWc7XG5cbiAgICAgICAgaWYgKHN0YXRpY0NvbmZpZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBzdGF0aWNDb25maWdba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogPHA+RW5oYW5jaW5nIHRoZSB0b1N0cmluZygpIG1ldGhvZCwgZS5nLjwvcD5cbiAgICAgKiBgTmVvLmNyZWF0ZSgnTmVvLmNvbXBvbmVudC5CdXR0b24nKS50b1N0cmluZygpID0+IFwiW29iamVjdCBOZW8uY29tcG9uZW50LkJ1dHRvbiAobmVvLWJ1dHRvbi0xKV1cImBcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY2xhc3NOYW1lfSAoaWQ6ICR7dGhpcy5pZH0pYDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiA8cD5FbmhhbmNpbmcgdGhlIGluc3RhbmNlb2YgbWV0aG9kLiBXaXRob3V0IHRoaXMgY2hhbmdlOjwvcD5cbiAgICAgKiBgTmVvLmNvbGxlY3Rpb24uQmFzZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IHRydWVgXG4gICAgICogPHA+V2l0aCB0aGlzIGNoYW5nZTo8L3A+XG4gICAgICogYE5lby5jb2xsZWN0aW9uLkJhc2UucHJvdG90eXBlIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSA9PiBmYWxzZWA8YnI+XG4gICAgICogYE5lby5jcmVhdGUoTmVvLmNvbGxlY3Rpb24uQmFzZSkgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IHRydWVgXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIFtTeW1ib2wuaGFzSW5zdGFuY2VdKGluc3RhbmNlKSB7XG4gICAgICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZVtpc0luc3RhbmNlXSA9PT0gdHJ1ZSA/IHN1cGVyW1N5bWJvbC5oYXNJbnN0YW5jZV0oaW5zdGFuY2UpIDogZmFsc2U7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPSBmYWxzZTtcblxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9OyIsIi8qKlxuICogVGhpcyBjbGFzcyBnZXRzIHVzZWQgYnkgY29yZS5CYXNlLCBzbyBpdCBjYW4gbm90IGV4dGVuZCBpdC5cbiAqIEl0IGNvdWxkIGdldCBzaW1wbGlmaWVkIHRvIGp1c3QgYmVpbmcgYW4gb2JqZWN0IChuZWVkcyB0byBtYW51YWxseSBnZXQgcHV0IGludG8gdGhlIE5lbyBuYW1lc3BhY2UgaW4gdGhpcyBjYXNlKS5cbiAqIEBjbGFzcyBOZW8uY29yZS5JZEdlbmVyYXRvclxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBJZEdlbmVyYXRvciB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgb25lIHRvIGZhbHNlIGluIGNhc2UgeW91IGRvbid0IHdhbnQgdG8gc3RpY2tcbiAgICAgICAgICogdG8gdGhlIFwiYW50aS1wYXR0ZXJuXCIgdG8gYXBwbHkgY2xhc3NlcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlZ2lzdGVyVG9HbG9iYWxOcz10cnVlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHJlZ2lzdGVyVG9HbG9iYWxOczogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuSWRHZW5lcmF0b3InXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5JZEdlbmVyYXRvcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdpZC1nZW5lcmF0b3InXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2lkLWdlbmVyYXRvcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGVmYXVsdCBwcmVmaXggZm9yIG5lbyBpbnN0YW5jZSBpZHNcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBiYXNlPSduZW8tJ1xuICAgICAgICAgKi9cbiAgICAgICAgYmFzZTogJ25lby0nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPSd0cnVlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaWRDb3VudGVyID0ge307XG5cbiAgICAgICAgLy8gYWxpYXNcbiAgICAgICAgTmVvLmdldElkID0gbWUuZ2V0SWQuYmluZChtZSk7XG4gICAgfVxuXG4gICAgb25Db25zdHJ1Y3RlZCgpIHt9XG5cbiAgICBpbml0KCkge31cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldElkKG5hbWUpIHtcbiAgICAgICAgbmFtZSA9IG5hbWUgfHwgJ25lbyc7XG5cbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY291bnRlciA9IG1lLmlkQ291bnRlcixcbiAgICAgICAgICAgIGNvdW50ICAgPSBjb3VudGVyW25hbWVdIHx8IDA7XG5cbiAgICAgICAgY291bnRlcltuYW1lXSA9ICsrY291bnQ7XG5cbiAgICAgICAgcmV0dXJuIG1lLmJhc2UgKyAobmFtZSA9PT0gJ25lbycgPyAnJyA6IG5hbWUgKyAnLScpICsgY291bnQ7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhJZEdlbmVyYXRvcik7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoSWRHZW5lcmF0b3IpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLkxvZ2dlclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBMb2dnZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuTG9nZ2VyJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuTG9nZ2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xvZ2dlcidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbG9nZ2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIGNvbmZpZyB0byBmYWxzZSB0byBkaXNhYmxlIHRoZSBsb2dnaW5nXG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IGVuYWJsZUxvZ3M9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgZW5hYmxlTG9nczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbGV2ZWw9J2xvZydcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGxldmVsOiAnbG9nJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IGVuYWJsZUxvZ3M9dHJ1ZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIC8vIGFsaWFzZXNcbiAgICAgICAgTmVvLmFwcGx5RnJvbU5zKE5lbywgdGhpcywge1xuICAgICAgICAgICAgZXJyb3IgICA6ICdlcnJvcicsXG4gICAgICAgICAgICBpbmZvICAgIDogJ2luZm8nLFxuICAgICAgICAgICAgbG9nICAgICA6ICdsb2cnLFxuICAgICAgICAgICAgbG9nRXJyb3I6ICdsb2dFcnJvcicsXG4gICAgICAgICAgICB3YXJuICAgIDogJ3dhcm4nXG4gICAgICAgIH0sIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgZXJyb3IodmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9ICdsb2cnO1xuICAgICAgICB0aGlzLndyaXRlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICBpbmZvKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9ICdpbmZvJztcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgbG9nRXJyb3IoLi4uYXJncykge1xuICAgICAgICB0aGlzLmxldmVsID0gJ2Vycm9yJztcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgd2FybiguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAnd2Fybic7XG4gICAgICAgIHRoaXMud3JpdGUoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgd3JpdGUoLi4uYXJncykge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVMb2dzID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zb2xlW3RoaXMubGV2ZWxdKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhMb2dnZXIpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKExvZ2dlcik7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvcmUuT2JzZXJ2YWJsZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBPYnNlcnZhYmxlIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLk9ic2VydmFibGUnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5PYnNlcnZhYmxlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21peGluLW9ic2VydmFibGUnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ21peGluLW9ic2VydmFibGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWl4aW49dHJ1ZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW46IHRydWVcbiAgICB9fVxuXG4gICAgaW5pdE9ic2VydmFibGUoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBwcm90byA9IG1lLl9fcHJvdG9fXyxcbiAgICAgICAgICAgIGxpc3RlbmVycztcblxuICAgICAgICBpZiAoY29uZmlnLmxpc3RlbmVycykge1xuICAgICAgICAgICAgbWUubGlzdGVuZXJzID0gY29uZmlnLmxpc3RlbmVycztcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcubGlzdGVuZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzO1xuXG4gICAgICAgIG1lLmxpc3RlbmVycyA9IHt9O1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIG1lLmFkZExpc3RlbmVyKGxpc3RlbmVycyk7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAocHJvdG8gJiYgcHJvdG8uY29uc3RydWN0b3IuaXNDbGFzcykge1xuICAgICAgICAgICAgaWYgKHByb3RvLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZy5vYnNlcnZhYmxlICYmICFwcm90by5jb25zdHJ1Y3Rvci5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHByb3RvLmNvbnN0cnVjdG9yLCB7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RlbmVyICAgOiBtZS5hZGRMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgZmlyZSAgICAgICAgICA6IG1lLmZpcmUsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgb24gICAgICAgICAgICA6IG1lLm9uLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcjogbWUucmVtb3ZlTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgIHVuICAgICAgICAgICAgOiBtZS51blxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX187XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcmRlcl1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBldmVudElkXG4gICAgICovXG4gICAgYWRkTGlzdGVuZXIobmFtZSwgb3B0cywgc2NvcGUsIGV2ZW50SWQsIGRhdGEsIG9yZGVyKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBsaXN0ZW5lciwgZXhpc3RpbmcsIGV2ZW50Q29uZmlnO1xuXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KCdzY29wZScpKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBuYW1lLnNjb3BlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuYW1lLnNjb3BlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhuYW1lKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBtZS5hZGRMaXN0ZW5lcihrZXksIHZhbHVlLCBzY29wZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHNjb3BlID0gc2NvcGUgfHwgb3B0cy5zY29wZTtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gb3B0cy5mbjtcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIgfHwgb3B0cy5vcmRlcjtcbiAgICAgICAgICAgIGV2ZW50SWQgPSBldmVudElkIHx8IG9wdHMuZXZlbnRJZDtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzOyAvLyBWQyBob29rLCBjYW4gZ2V0IHBhcnNlZCBhZnRlciBvbkNvbnN0cnVjdGVkIGluIGNhc2UgdGhlIHZpZXcgdXNlcyB0aGUgcGFyZW50IFZDXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYWRkTGlzdGVuZXIgY2FsbDogJyArIG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRDb25maWcgPSB7XG4gICAgICAgICAgICBmbiAgICA6IGxpc3RlbmVyLFxuICAgICAgICAgICAgc2NvcGUgOiBzY29wZSxcbiAgICAgICAgICAgIGRhdGEgIDogZGF0YSxcbiAgICAgICAgICAgIGlkICAgIDogZXZlbnRJZCB8fCBOZW8uZ2V0SWQoJ2V2ZW50JylcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZXhpc3RpbmcgPSBtZS5saXN0ZW5lcnMgJiYgbWUubGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgICBleGlzdGluZy5mb3JFYWNoKGNmZyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNmZy5pZCA9PT0gZXZlbnRJZCB8fCAoY2ZnLmZuID09PSBsaXN0ZW5lciAmJiBjZmcuc2NvcGUgPT09IHNjb3BlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSBldmVudCBoYW5kbGVyIGF0dGFjaGVkOiAnICsgbmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JkZXIgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgZXhpc3Rpbmcuc3BsaWNlKG9yZGVyLCAwLCBldmVudENvbmZpZyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnYmVmb3JlJykge1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nLnVuc2hpZnQoZXZlbnRDb25maWcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGlzdGluZy5wdXNoKGV2ZW50Q29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLmxpc3RlbmVyc1tuYW1lXSA9IFtldmVudENvbmZpZ107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXZlbnRDb25maWcuaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqL1xuICAgIGZpcmUobmFtZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFyZ3MgICAgICA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVycyxcbiAgICAgICAgICAgIGV2ZW50Q29uZmlnLCBldmVudHMsIGksIGxlbjtcblxuICAgICAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgZXZlbnRzID0gWy4uLmxpc3RlbmVyc1tuYW1lXV07XG4gICAgICAgICAgICBsZW4gICAgPSBldmVudHMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBldmVudENvbmZpZyA9IGV2ZW50c1tpXTtcblxuICAgICAgICAgICAgICAgIGV2ZW50Q29uZmlnLmZuLmFwcGx5KGV2ZW50Q29uZmlnLnNjb3BlIHx8IG1lLCBldmVudENvbmZpZy5kYXRhID8gYXJncy5jb25jYXQoZXZlbnRDb25maWcuZGF0YSkgOiBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZXZlbnRJZFxuICAgICAqL1xuICAgIHJlbW92ZUxpc3RlbmVyKG5hbWUsIGV2ZW50SWQpIHtcbiAgICAgICAgaWYgKE5lby5pc1N0cmluZyhldmVudElkKSkge1xuICAgICAgICAgICAgbGV0IGxpc3RlbmVycyAgID0gdGhpcy5saXN0ZW5lcnNbbmFtZV0sXG4gICAgICAgICAgICAgICAgbWF0Y2ggICAgICAgPSBmYWxzZTtcblxuICAgICAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGV2ZW50Q29uZmlnLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRDb25maWcuaWQgPT09IGV2ZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoID0gaWR4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2ggIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShtYXRjaCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZW1vdmVBbGxMaXN0ZW5lcnM6IGZ1bmN0aW9uKG5hbWUpIHtcblxuICAgIC8vIH0sXG5cbiAgICAvLyBzdXNwZW5kTGlzdGVuZXJzOiBmdW5jdGlvbihxdWV1ZSkge1xuXG4gICAgLy8gfSxcblxuICAgIC8vIHJlc3VtZUxpc3RlbmVyczogZnVuY3Rpb24oKSB7XG5cbiAgICAvLyB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgYWRkTGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50SWRdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhXVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbb3JkZXJdXG4gICAgICogQHJldHVybnMge1N0cmluZ30gZXZlbnRJZFxuICAgICAqL1xuICAgIG9uKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTGlzdGVuZXIoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIHJlbW92ZUxpc3RlbmVyXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZXZlbnRJZFxuICAgICAqL1xuICAgIHVuKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lciguLi5hcmdzKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE9ic2VydmFibGUpO1xuXG5leHBvcnQge09ic2VydmFibGUgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLlV0aWxcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgVXRpbCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcmVnZXggdG8gcmVtb3ZlIGNhbWVsIGNhc2Ugc3ludGF4XG4gICAgICAgICAqIEBtZW1iZXIge1JlZ0V4cH0gZGVjYW1lbFJlZ0V4PS8oW2Etel0pKFtBLVpdKS9nXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGRlY2FtZWxSZWdFeDogLyhbYS16XSkoW0EtWl0pL2dcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLlV0aWwnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5VdGlsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvcmUtdXRpbCdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29yZS11dGlsJyxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBzeWxlcyBvYmplY3Qgd2hpY2ggY2FuIHVzZSBjYW1lbGNhc2Ugc3ludGF4IGludG8gYSBzdHlsZXMgc3RyaW5nXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyBUaGUgc3R5bGVzIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHlsZXMgc3RyaW5nIChET00gcmVhZHkpXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVN0eWxlcyhzdHlsZXMpIHtcbiAgICAgICAgbGV0IHN0eWxlID0gJyc7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3R5bGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gVXRpbC5kZWNhbWVsKGtleSkgKyAnOicgKyB2YWx1ZSArICc7JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYSBzdHJpbmcgdXBwZXJjYXNlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufFN0cmluZ30gUmV0dXJucyBmYWxzZSBmb3Igbm9uIHN0cmluZyBpbnB1dHNcbiAgICAgKi9cbiAgICBzdGF0aWMgY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuaXNTdHJpbmcoc3RyaW5nKSAmJiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm1zIGFsbCB1cHBlcmNhc2UgY2hhcmFjdGVycyBvZiBhIHN0cmluZyBpbnRvIGxvd2VyY2FzZS5cbiAgICAgKiBEb2VzIG5vdCB0b3VjaCBzcGVjaWFsIGNoYXJhY3RlcnMuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSBpbnB1dCBjb250YWluaW5nIHVwcGVyY2FzZSBjaGFyYWN0ZXJzXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIGxvd2VyY2FzZSBvdXRwdXRcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVjYW1lbCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShVdGlsLmRlY2FtZWxSZWdFeCwgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm1zIGEgc3R5bGVzIHN0cmluZyBpbnRvIGEgc3R5bGVzIG9iamVjdCB1c2luZyBjYW1lbGNhc2Ugc3ludGF4XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBUaGUgc3R5bGVzIHN0cmluZyB0byBwYXJzZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBjYW1lbGNhc2Ugc3R5bGVzIG9iamVjdFxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVTdHlsZU9iamVjdChzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcnRzO1xuXG4gICAgICAgIC8vIHNwbGl0KCc7JykgZG9lcyBmZXRjaCBzZW1pY29sb25zIGluc2lkZSBicmFja2V0c1xuICAgICAgICAvLyAtPiBiYWNrZ3JvdW5kLWltYWdlOiBcInVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LC4uLlxuXG4gICAgICAgIC8vIFRPRE86IENhY2hlIGFsbCByZWdleFxuICAgICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KC87KD89W15cXCldKig/OlxcKHwkKSkvZykucmVkdWNlKChvYmosIGVsKSA9PiB7XG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHNwbGl0IGJ5IHRoZSBmaXJzdCBjb2xvbiBvbmx5XG4gICAgICAgICAgICAvLyAtPiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9leGFtcGxlLmNvbS9pbWFnZS5wbmcnKVxuICAgICAgICAgICAgcGFydHMgPSBlbC5zcGxpdCgoLzooLispLykpLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIGxldCBudW0gPSBwYXJzZUZsb2F0KHgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHggPT0gbnVtID8gbnVtIDogeC50cmltKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzWzBdICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvLShbYS16XSkvZywgKHN0ciwgbGV0dGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBvYmpbcGFydHNbMF1dID0gcGFydHNbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gYXJyYXlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNBcnJheSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIGJvb2xlYW5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBub3QgdW5kZWZpbmVkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRGVmaW5lZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBlbXB0eSBBcnJheSwgT2JqZWN0IG9yIFN0cmluZ1xuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fFN0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbC5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFV0aWwuaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBudW1iZXIuIFJldHVybnMgZmFsc2UgZm9yIG5vbi1maW5pdGUgbnVtYmVyc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc051bWJlcih2YWx1ZSl7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNPYmplY3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgc3RyaW5nXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGFueSBpdGVyYWJsZSAoc3RyaW5ncywgbnVtZXJpYyBpbmRpY2VzIGFuZCBhIGxlbmd0aCBwcm9wZXJ0eSkgaW50byBhIHRydWUgYXJyYXlcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGl0ZXJhYmxlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydD0wXSBzdGFydCBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZW5kPWl0ZXJhYmxlLmxlbmd0aF0gZW5kIGluZGV4XG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyB0b0FycmF5KGl0ZXJhYmxlLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIGxldCBsZW47XG5cbiAgICAgICAgaWYgKCFpdGVyYWJsZSB8fCAhKGxlbiA9IGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlcmFibGUuc3BsaXQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGl0ZXJhYmxlLCBzdGFydCB8fCAwLCBlbmQgfHwgbGVuKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFV0aWwpO1xuXG4vLyBhbGlhc2VzXG5OZW8uYXBwbHlGcm9tTnMoTmVvLCBVdGlsLCB7XG4gICAgY3JlYXRlU3R5bGVPYmplY3Q6ICdjcmVhdGVTdHlsZU9iamVjdCcsXG4gICAgY3JlYXRlU3R5bGVzICAgICA6ICdjcmVhdGVTdHlsZXMnLFxuICAgIGNhcGl0YWxpemUgICAgICAgOiAnY2FwaXRhbGl6ZScsXG4gICAgZGVjYW1lbCAgICAgICAgICA6ICdkZWNhbWVsJyxcbiAgICBpc0FycmF5ICAgICAgICAgIDogJ2lzQXJyYXknLFxuICAgIGlzQm9vbGVhbiAgICAgICAgOiAnaXNCb29sZWFuJyxcbiAgICBpc0RlZmluZWQgICAgICAgIDogJ2lzRGVmaW5lZCcsXG4gICAgaXNFbXB0eSAgICAgICAgICA6ICdpc0VtcHR5JyxcbiAgICBpc0Z1bmN0aW9uICAgICAgIDogJ2lzRnVuY3Rpb24nLFxuICAgIGlzTnVtYmVyICAgICAgICAgOiAnaXNOdW1iZXInLFxuICAgIGlzT2JqZWN0ICAgICAgICAgOiAnaXNPYmplY3QnLFxuICAgIGlzU3RyaW5nICAgICAgICAgOiAnaXNTdHJpbmcnLFxuICAgIHRvQXJyYXkgICAgICAgICAgOiAndG9BcnJheSdcbn0sIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBVdGlsOyIsImltcG9ydCBCYXNlICAgICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBMb2dnZXIgICAgICBmcm9tICcuL0xvZ2dlci5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgIGZyb20gJy4vT2JzZXJ2YWJsZS5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgIGZyb20gJy4vVXRpbC5tanMnO1xuXG5leHBvcnQge0Jhc2UsIExvZ2dlciwgT2JzZXJ2YWJsZSwgVXRpbH07IiwiaW1wb3J0IHtkZWZhdWx0IGFzIENvcmVCYXNlfSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBUaGUgYmFzZSBjbGFzcyBmb3IgYWxsIG90aGVyIGxheW91dHMuXG4gKiBVc2UgaXQgZGlyZWN0bHkgaW4gY2FzZSB5b3Ugd2FudCB0byBjcmVhdGUgYSBjb250YWluZXIgd2l0aG91dCBhIGxheW91dC5cbiAqIEBjbGFzcyBOZW8ubGF5b3V0LkJhc2VcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvcmVCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmxheW91dC5CYXNlJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmxheW91dC5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xheW91dC1iYXNlJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdsYXlvdXQtYmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgSWQgb2YgdGhlIENvbnRhaW5lciBpbnN0YW5jZSB0aGlzIGxheW91dCBpcyBib3VuZCB0b1xuICAgICAgICAgKiBAbWVtYmVyIHs/U3RyaW5nfSBjb250YWluZXJJZD1udWxsXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjb250YWluZXJJZDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElkZW50aWZpZXIgZm9yIGFsbCBjbGFzc2VzIHRoYXQgZXh0ZW5kIGxheW91dC5CYXNlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzTGF5b3V0PXRydWVcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGlzTGF5b3V0OiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlaG9sZGVyIE1ldGhvZFxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBpdGVtXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhcHBseUNoaWxkQXR0cmlidXRlcyhpdGVtKSB7fVxuXG4gICAgLyoqXG4gICAgICogUGxhY2Vob2xkZXIgTWV0aG9kXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhcHBseVJlbmRlckF0dHJpYnV0ZXMoKSB7fVxuXG4gICAgLyoqXG4gICAgICogUGxhY2Vob2xkZXIgTWV0aG9kXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGl0ZW1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHJlbW92ZUNoaWxkQXR0cmlidXRlcyhpdGVtKSB7fVxuXG4gICAgLyoqXG4gICAgICogUGxhY2Vob2xkZXIgTWV0aG9kXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICByZW1vdmVSZW5kZXJBdHRyaWJ1dGVzKCkge31cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XG5cbmV4cG9ydCB7QmFzZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubGF5b3V0LkNhcmRcbiAqIEBleHRlbmRzIE5lby5sYXlvdXQuQmFzZVxuICovXG5jbGFzcyBDYXJkIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgQ1NTIGNsYXNzIGZvciBhbiBhY3RpdmUgaXRlbSBpbnNpZGUgdGhlIGNhcmQgbGF5b3V0XG4gICAgICAgICAqIEBtZW1iZXIgYWN0aXZlSXRlbUNsc1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmVJdGVtQ2xzOiAnYWN0aXZlLWl0ZW0nLFxuICAgICAgICAvKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgQ1NTIGNsYXNzIGZvciBhbiBpbmFjdGl2ZSBpdGVtIGluc2lkZSB0aGUgY2FyZCBsYXlvdXRcbiAgICAgICAgICogQG1lbWJlciBpbmFjdGl2ZUl0ZW1DbHNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgaW5hY3RpdmVJdGVtQ2xzOiAnaW5hY3RpdmUtaXRlbScsXG4gICAgICAgIC8qXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBDU1MgY2xhc3MgZm9yIGFuIGl0ZW0gaW5zaWRlIHRoZSBjYXJkIGxheW91dFxuICAgICAgICAgKiBAbWVtYmVyIGl0ZW1DbHNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbUNsczogJ25lby1sYXlvdXQtY2FyZC1pdGVtJ1xuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmxheW91dC5DYXJkJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmxheW91dC5DYXJkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xheW91dC1jYXJkJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdsYXlvdXQtY2FyZCcsXG4gICAgICAgIC8qXG4gICAgICAgICAqIFRoZSBpdGVtIGluZGV4IG9mIHRoZSBjYXJkLCB3aGljaCBpcyBjdXJyZW50bHkgYWN0aXZlLlxuICAgICAgICAgKiBDaGFuZ2UgdGhpcyB2YWx1ZSB0byBhY3RpdmF0ZSBhIGRpZmZlcmVudCBjYXJkLlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGFjdGl2ZUluZGV4Xz0wXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmVJbmRleF86IDBcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogTW9kaWZpZXMgdGhlIENTUyBjbGFzc2VzIG9mIHRoZSBjb250YWluZXIgaXRlbXMgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG8uXG4gICAgICogQXV0b21hdGljYWxseSBnZXRzIHRyaWdnZXJlZCBhZnRlciBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgYWN0aXZlSW5kZXguXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHBhcmFtIG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldEFjdGl2ZUluZGV4KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IE5lby5nZXRDb21wb25lbnQobWUuY29udGFpbmVySWQpLFxuICAgICAgICAgICAgc0NmZyAgICAgID0gbWUuZ2V0U3RhdGljQ29uZmlnKCksXG4gICAgICAgICAgICBpc0FjdGl2ZUluZGV4LCBjbHMsIGl0ZW1zO1xuXG4gICAgICAgIGlmIChjb250YWluZXIgJiYgY29udGFpbmVyLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICBpdGVtcyA9IGNvbnRhaW5lci5pdGVtcztcblxuICAgICAgICAgICAgaWYgKCFpdGVtc1t2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICBOZW8uZXJyb3IoJ1RyeWluZyB0byBhY3RpdmF0ZSBhIG5vbiBleGlzdGluZyBjYXJkJywgdmFsdWUsIGl0ZW1zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjbHMgICAgICAgICAgID0gaXRlbS5jbHM7XG4gICAgICAgICAgICAgICAgaXNBY3RpdmVJbmRleCA9IGluZGV4ID09PSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIGlzQWN0aXZlSW5kZXggPyBzQ2ZnLmluYWN0aXZlSXRlbUNscyA6IHNDZmcuYWN0aXZlSXRlbUNscyk7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkuYWRkKCAgIGNscywgaXNBY3RpdmVJbmRleCA/IHNDZmcuYWN0aXZlSXRlbUNscyAgIDogc0NmZy5pbmFjdGl2ZUl0ZW1DbHMpO1xuXG4gICAgICAgICAgICAgICAgaXRlbS5jbHMgPSBjbHM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxseSBzZXRzIHRoZSBDU1MgY2xhc3NlcyBvZiB0aGUgY29udGFpbmVyIGl0ZW1zIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvLlxuICAgICAqIEBwYXJhbSBjaGlsZFxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqL1xuICAgIGFwcGx5Q2hpbGRBdHRyaWJ1dGVzKGNoaWxkLCBpbmRleCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgc0NmZyAgICAgPSBtZS5nZXRTdGF0aWNDb25maWcoKSxcbiAgICAgICAgICAgIGNoaWxkQ2xzID0gY2hpbGQuY2xzO1xuXG4gICAgICAgIE5lb0FycmF5LmFkZChjaGlsZENscywgc0NmZy5pdGVtQ2xzKTtcbiAgICAgICAgTmVvQXJyYXkuYWRkKGNoaWxkQ2xzLCBtZS5hY3RpdmVJbmRleCA9PT0gaW5kZXggPyBzQ2ZnLmFjdGl2ZUl0ZW1DbHMgOiBzQ2ZnLmluYWN0aXZlSXRlbUNscyk7XG5cbiAgICAgICAgY2hpbGQuY2xzID0gY2hpbGRDbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyBDU1MgY2xhc3NlcyB0byB0aGUgY29udGFpbmVyIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvXG4gICAgICovXG4gICAgYXBwbHlSZW5kZXJBdHRyaWJ1dGVzKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IE5lby5nZXRDb21wb25lbnQobWUuY29udGFpbmVySWQpLFxuICAgICAgICAgICAgY2xzICAgICAgID0gY29udGFpbmVyICYmIGNvbnRhaW5lci5jbHM7XG5cbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignbGF5b3V0LkNhcmQ6IGFwcGx5UmVuZGVyQXR0cmlidXRlcyAtPiBjb250YWluZXIgbm90IHlldCBjcmVhdGVkJywgbWUuY29udGFpbmVySWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvQXJyYXkuYWRkKGNscyB8fCBbXSwgJ25lby1sYXlvdXQtY2FyZCcpO1xuXG4gICAgICAgIGNvbnRhaW5lci5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgQ1NTIHJ1bGVzIGZyb20gdGhlIGNvbnRhaW5lciB0aGlzIGxheW91dCBpcyBib3VuZCB0by5cbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHN3aXRjaGluZyB0byBhIGRpZmZlcmVudCBsYXlvdXQuXG4gICAgICovXG4gICAgcmVtb3ZlUmVuZGVyQXR0cmlidXRlcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250YWluZXIgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLmNvbnRhaW5lcklkKSxcbiAgICAgICAgICAgIGNscyAgICAgICA9IGNvbnRhaW5lciAmJiBjb250YWluZXIuY2xzO1xuXG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ2xheW91dC5DYXJkOiByZW1vdmVSZW5kZXJBdHRyaWJ1dGVzIC0+IGNvbnRhaW5lciBub3QgeWV0IGNyZWF0ZWQnLCBtZS5jb250YWluZXJJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCAnbmVvLWxheW91dC1jYXJkJyk7XG5cbiAgICAgICAgY29udGFpbmVyLmNscyA9IGNscztcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENhcmQpO1xuXG5leHBvcnQge0NhcmQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5IGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmxheW91dC5GaXRcbiAqIEBleHRlbmRzIE5lby5sYXlvdXQuQmFzZVxuICovXG5jbGFzcyBGaXQgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmxheW91dC5GaXQnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubGF5b3V0LkZpdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdsYXlvdXQtZml0J1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdsYXlvdXQtZml0J1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsbHkgc2V0cyB0aGUgQ1NTIGNsYXNzZXMgb2YgdGhlIGNvbnRhaW5lciBpdGVtcyB0aGlzIGxheW91dCBpcyBib3VuZCB0by5cbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY2hpbGRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKi9cbiAgICBhcHBseUNoaWxkQXR0cmlidXRlcyhjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKCFjaGlsZC5pZ25vcmVMYXlvdXQpIHtcbiAgICAgICAgICAgIGNoaWxkLmNscyA9IE5lb0FycmF5LnVuaW9uKGNoaWxkLmNscywgJ25lby1sYXlvdXQtZml0LWl0ZW0nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgQ1NTIGNsYXNzZXMgdG8gdGhlIGNvbnRhaW5lciB0aGlzIGxheW91dCBpcyBib3VuZCB0b1xuICAgICAqL1xuICAgIGFwcGx5UmVuZGVyQXR0cmlidXRlcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250YWluZXIgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLmNvbnRhaW5lcklkKSxcbiAgICAgICAgICAgIGNscyAgICAgICA9IGNvbnRhaW5lciAmJiBjb250YWluZXIuY2xzO1xuXG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ2xheW91dC5GaXQ6IGFwcGx5UmVuZGVyQXR0cmlidXRlcyAtPiBjb250YWluZXIgbm90IHlldCBjcmVhdGVkJywgbWUuY29udGFpbmVySWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvQXJyYXkuYWRkKGNscyB8fCBbXSwgJ25lby1sYXlvdXQtZml0Jyk7XG5cbiAgICAgICAgY29udGFpbmVyLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBDU1MgcnVsZXMgZnJvbSB0aGUgY29udGFpbmVyIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvLlxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gc3dpdGNoaW5nIHRvIGEgZGlmZmVyZW50IGxheW91dC5cbiAgICAgKi9cbiAgICByZW1vdmVSZW5kZXJBdHRyaWJ1dGVzKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IE5lby5nZXRDb21wb25lbnQobWUuY29udGFpbmVySWQpLFxuICAgICAgICAgICAgY2xzICAgICAgID0gY29udGFpbmVyICYmIGNvbnRhaW5lci5jbHM7XG5cbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignbGF5b3V0LkZpdDogcmVtb3ZlUmVuZGVyQXR0cmlidXRlcyAtPiBjb250YWluZXIgbm90IHlldCBjcmVhdGVkJywgbWUuY29udGFpbmVySWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgJ25lby1sYXlvdXQtZml0Jyk7XG5cbiAgICAgICAgY29udGFpbmVyLmNscyA9IGNscztcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEZpdCk7XG5cbmV4cG9ydCB7Rml0IGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5sYXlvdXQuRmxleGJveFxuICogQGV4dGVuZHMgTmVvLmxheW91dC5CYXNlXG4gKi9cbmNsYXNzIEZsZXhib3ggZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgZm9yIGFsaWduXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBhbGlnblZhbHVlcz1bJ2NlbnRlcicsICdlbmQnLCAnc3RhcnQnLCAnc3RyZXRjaCcsIG51bGxdXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduVmFsdWVzOiBbJ2NlbnRlcicsICdlbmQnLCAnc3RhcnQnLCAnc3RyZXRjaCcsIG51bGxdLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGZvciBkaXJlY3Rpb25cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGRpcmVjdGlvblZhbHVlcz1bJ2NvbHVtbicsICdjb2x1bW4tcmV2ZXJzZScsICdyb3cnLCAncm93LXJldmVyc2UnLCBudWxsXVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBkaXJlY3Rpb25WYWx1ZXM6IFsnY29sdW1uJywgJ2NvbHVtbi1yZXZlcnNlJywgJ3JvdycsICdyb3ctcmV2ZXJzZScsIG51bGxdLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGZvciBwYWNrXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBwYWNrVmFsdWVzPVsnY2VudGVyJywgJ2VuZCcsICdzdGFydCcsIG51bGxdXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHBhY2tWYWx1ZXM6IFsnY2VudGVyJywgJ2VuZCcsICdzdGFydCcsIG51bGxdLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGZvciB3cmFwXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSB3cmFwVmFsdWVzPVsnbm93cmFwJywgJ3dyYXAnLCAnd3JhcC1yZXZlcnNlJ11cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgd3JhcFZhbHVlczogWydub3dyYXAnLCAnd3JhcCcsICd3cmFwLXJldmVyc2UnXSxcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5sYXlvdXQuRmxleGJveCdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5sYXlvdXQuRmxleGJveCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdsYXlvdXQtZmxleGJveCdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbGF5b3V0LWZsZXhib3gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzOiAnY2VudGVyJywgJ2VuZCcsICdzdGFydCcsICdzdHJldGNoJywgbnVsbFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gYWxpZ25fPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlczogJ2NvbHVtbicsICdjb2x1bW4tcmV2ZXJzZScsICdyb3cnLCAncm93LXJldmVyc2UnLCBudWxsXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBkaXJlY3Rpb25fPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRpcmVjdGlvbl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXM6ICdjZW50ZXInLCAnZW5kJywgJ3N0YXJ0JywgbnVsbFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gcGFja189bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgcGFja186IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDU1MgY2xhc3NOYW1lIHByZWZpeFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHByZWZpeD0nbmVvLWZsZXgtJ1xuICAgICAgICAgKi9cbiAgICAgICAgcHJlZml4OiAnbmVvLWZsZXgtJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlczogbm93cmFwLCB3cmFwLCB3cmFwcmV2ZXJzZVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHdyYXBfPSdub3dyYXAnXG4gICAgICAgICAqL1xuICAgICAgICB3cmFwXzogJ25vd3JhcCdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgQ29udGFpbmVyIENTUyBjbHMgYWZ0ZXIgXCJhbGlnblwiIGdldHMgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0QWxpZ24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdhbGlnbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIENvbnRhaW5lciBDU1MgY2xzIGFmdGVyIFwiZGlyZWN0aW9uXCIgZ2V0cyBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWZ0ZXJTZXREaXJlY3Rpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdkaXJlY3Rpb24nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBDb250YWluZXIgQ1NTIGNscyBhZnRlciBcInBhY2tcIiBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldFBhY2sodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdwYWNrJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgQ29udGFpbmVyIENTUyBjbHMgYWZ0ZXIgXCJ3cmFwXCIgZ2V0cyBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldFdyYXAodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICd3cmFwJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyB0aGUgZmxleCB2YWx1ZSB0byBhbiBpdGVtIG9mIHRoZSBjb250YWluZXIgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqL1xuICAgIGFwcGx5Q2hpbGRBdHRyaWJ1dGVzKGl0ZW0pIHtcbiAgICAgICAgbGV0IHN0eWxlID0gaXRlbS5zdHlsZSB8fCB7fTtcblxuICAgICAgICBzdHlsZS5mbGV4ID0gc3R5bGUuZmxleCB8fCBpdGVtLmZsZXggfHwgKHRoaXMuYWxpZ24gPT09ICdzdHJldGNoJyA/IDEgOiAnMCAxIGF1dG8nKTtcbiAgICAgICAgaXRlbS5zdHlsZSA9IHN0eWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgQ1NTIGNsYXNzZXMgdG8gdGhlIGNvbnRhaW5lciB0aGlzIGxheW91dCBpcyBib3VuZCB0b1xuICAgICAqL1xuICAgIGFwcGx5UmVuZGVyQXR0cmlidXRlcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250YWluZXIgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLmNvbnRhaW5lcklkKSxcbiAgICAgICAgICAgIHByZWZpeCAgICA9IG1lLnByZWZpeCxcbiAgICAgICAgICAgIGNscyAgICAgICA9IGNvbnRhaW5lciAmJiBjb250YWluZXIuY2xzO1xuXG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ2xheW91dC5GbGV4Ym94OiBhcHBseVJlbmRlckF0dHJpYnV0ZXMgLT4gY29udGFpbmVyIG5vdCB5ZXQgY3JlYXRlZCcsIG1lLmNvbnRhaW5lcklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE5lb0FycmF5LmFkZChjbHMgfHwgW10sIHByZWZpeCArICdjb250YWluZXInKTtcblxuICAgICAgICBpZiAobWUuYWxpZ24pIHtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHByZWZpeCArICdhbGlnbi0nICsgbWUuYWxpZ24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZS5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHByZWZpeCArICdkaXJlY3Rpb24tJyArIG1lLmRpcmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lLnBhY2spIHtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHByZWZpeCArICdwYWNrLScgKyBtZS5wYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWUud3JhcCkge1xuICAgICAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgcHJlZml4ICsgJ3dyYXAtJyArIG1lLndyYXApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIG5ldyB2YWx1ZSBmb3IgXCJhbGlnblwiIGlzIHZhbGlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqL1xuICAgIGJlZm9yZVNldEFsaWduKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXN0SW5wdXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdhbGlnblZhbHVlcycsICdhbGlnbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgbmV3IHZhbHVlIGZvciBcImRpcmVjdGlvblwiIGlzIHZhbGlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqL1xuICAgIGJlZm9yZVNldERpcmVjdGlvbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVzdElucHV0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnZGlyZWN0aW9uVmFsdWVzJywgJ2RpcmVjdGlvbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgbmV3IHZhbHVlIGZvciBcInBhY2tcIiBpcyB2YWxpZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRQYWNrKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXN0SW5wdXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdwYWNrVmFsdWVzJywgJ3BhY2snKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIG5ldyB2YWx1ZSBmb3IgXCJ3cmFwXCIgaXMgdmFsaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgYmVmb3JlU2V0V3JhcCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVzdElucHV0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnd3JhcFZhbHVlcycsICd3cmFwJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgQ1NTIHJ1bGVzIGZyb20gYW4gY29udGFpbmVyIGl0ZW0gdGhpcyBsYXlvdXQgaXMgYm91bmQgdG8uXG4gICAgICogR2V0cyBjYWxsZWQgd2hlbiBzd2l0Y2hpbmcgdG8gYSBkaWZmZXJlbnQgbGF5b3V0LlxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICByZW1vdmVDaGlsZEF0dHJpYnV0ZXMoaXRlbSkge1xuICAgICAgICBsZXQgc3R5bGUgPSBpdGVtLnN0eWxlIHx8IHt9O1xuXG4gICAgICAgIHN0eWxlLmZsZXggPSBpdGVtLmZsZXggfHwgbnVsbDtcbiAgICAgICAgaXRlbS5zdHlsZSA9IHN0eWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIENTUyBydWxlcyBmcm9tIHRoZSBjb250YWluZXIgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG8uXG4gICAgICogR2V0cyBjYWxsZWQgd2hlbiBzd2l0Y2hpbmcgdG8gYSBkaWZmZXJlbnQgbGF5b3V0LlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcmVtb3ZlUmVuZGVyQXR0cmlidXRlcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250YWluZXIgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLmNvbnRhaW5lcklkKSxcbiAgICAgICAgICAgIHByZWZpeCAgICA9IG1lLnByZWZpeCxcbiAgICAgICAgICAgIGNscyAgICAgICA9IGNvbnRhaW5lciAmJiBjb250YWluZXIuY2xzO1xuXG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ2xheW91dC5GbGV4Ym94OiByZW1vdmVSZW5kZXJBdHRyaWJ1dGVzIC0+IGNvbnRhaW5lciBub3QgeWV0IGNyZWF0ZWQnLCBtZS5jb250YWluZXJJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCBwcmVmaXggKyAnY29udGFpbmVyJyk7XG5cbiAgICAgICAgaWYgKG1lLmFsaWduKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCBwcmVmaXggKyAnYWxpZ24tJyArIG1lLmFsaWduKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWUuZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCBwcmVmaXggKyAnZGlyZWN0aW9uLScgKyBtZS5kaXJlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZS5wYWNrKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCBwcmVmaXggKyAncGFjay0nICsgbWUucGFjayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lLndyYXApIHtcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIHByZWZpeCArICd3cmFwLScgKyBtZS53cmFwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBuZXcgdmFsdWUgZm9yIHByb3BlcnR5TmFtZSBpcyB2YWxpZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsaWRWYWx1ZXNOYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqL1xuICAgIHRlc3RJbnB1dFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgdmFsaWRWYWx1ZXNOYW1lLCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgY29uc3QgdmFsaWRWYWx1ZXMgPSB0aGlzLmdldFN0YXRpY0NvbmZpZyh2YWxpZFZhbHVlc05hbWUpO1xuXG4gICAgICAgIGlmICghTmVvQXJyYXkuaGFzSXRlbSh2YWxpZFZhbHVlcywgdmFsdWUpKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IodGhpcy5jb250YWluZXJJZCwgJy0+IGxheW91dDogc3VwcG9ydGVkIHZhbHVlcyBmb3IgXCInICsgcHJvcGVydHlOYW1lICsgJ1wiIGFyZScgLCB2YWxpZFZhbHVlcyk7XG4gICAgICAgICAgICByZXR1cm4gb2xkVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgQ29udGFpbmVyIENTUyBjbHNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdXBkYXRlSW5wdXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IE5lby5nZXRDb21wb25lbnQobWUuY29udGFpbmVySWQpLFxuICAgICAgICAgICAgcHJlZml4ICAgID0gbWUucHJlZml4LFxuICAgICAgICAgICAgY2xzICAgICAgID0gY29udGFpbmVyICYmIGNvbnRhaW5lci5jbHM7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIHByZWZpeCArIHByb3BlcnR5TmFtZSArICctJyArIG9sZFZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgcHJlZml4ICsgcHJvcGVydHlOYW1lICsgJy0nICsgdmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250YWluZXIuY2xzID0gY2xzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhGbGV4Ym94KTtcblxuZXhwb3J0IHtGbGV4Ym94IGFzIGRlZmF1bHR9OyIsImltcG9ydCBGbGV4Ym94IGZyb20gJy4vRmxleGJveC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubGF5b3V0LkhCb3hcbiAqIEBleHRlbmRzIE5lby5sYXlvdXQuRmxleGJveFxuICovXG5jbGFzcyBIQm94IGV4dGVuZHMgRmxleGJveCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5sYXlvdXQuSEJveCdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5sYXlvdXQuSEJveCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdsYXlvdXQtaGJveCdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbGF5b3V0LWhib3gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkaXJlY3Rpb249J3JvdydcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGRpcmVjdGlvbjogJ3JvdydcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyB0aGUgZmxleCB2YWx1ZSB0byBhbiBpdGVtIG9mIHRoZSBjb250YWluZXIgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqL1xuICAgIGFwcGx5Q2hpbGRBdHRyaWJ1dGVzKGl0ZW0pIHtcbiAgICAgICAgLy8gRG8gbm90IGFwcGx5IGZsZXggaWYgZml4ZWQgd2lkdGhcbiAgICAgICAgaWYgKCFpdGVtLndpZHRoKSB7XG4gICAgICAgICAgICBzdXBlci5hcHBseUNoaWxkQXR0cmlidXRlcyhpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSEJveCk7XG5cbmV4cG9ydCB7SEJveCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgRmxleGJveCBmcm9tICcuL0ZsZXhib3gubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmxheW91dC5WQm94XG4gKiBAZXh0ZW5kcyBOZW8ubGF5b3V0LkZsZXhib3hcbiAqL1xuY2xhc3MgVkJveCBleHRlbmRzIEZsZXhib3gge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubGF5b3V0LlZCb3gnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubGF5b3V0LlZCb3gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbGF5b3V0LXZib3gnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2xheW91dC12Ym94JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGlyZWN0aW9uPSdjb2x1bW4nXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBkaXJlY3Rpb246ICdjb2x1bW4nXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIGZsZXggdmFsdWUgdG8gYW4gaXRlbSBvZiB0aGUgY29udGFpbmVyIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKi9cbiAgICBhcHBseUNoaWxkQXR0cmlidXRlcyhpdGVtKSB7XG4gICAgICAgIC8vIERvIG5vdCBhcHBseSBmbGV4IGlmIGZpeGVkIGhlaWdodFxuICAgICAgICBpZiAoIWl0ZW0uaGVpZ2h0KSB7XG4gICAgICAgICAgICBzdXBlci5hcHBseUNoaWxkQXR0cmlidXRlcyhpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVkJveCk7XG5cbmV4cG9ydCB7VkJveCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQge2RlZmF1bHQgYXMgQ29sbGVjdGlvbkJhc2V9IGZyb20gJy4uL2NvbGxlY3Rpb24vQmFzZS5tanMnO1xuXG4vKipcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3MgZm9yIHRoZSBvdGhlciBtYW5hZ2VyIGNsYXNzZXNcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29sbGVjdGlvbi5CYXNlXG4gKi9cbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb2xsZWN0aW9uQmFzZXtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1hbmFnZXIuQmFzZSdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYW5hZ2VyLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nYmFzZS1tYW5hZ2VyJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdiYXNlLW1hbmFnZXInXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBpZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0QnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKi9cbiAgICByZWdpc3RlcihpdGVtKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLmdldChpdGVtLmlkKSkge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdUcnlpbmcgdG8gY3JlYXRlIGFuIGl0ZW0gd2l0aCBhbiBhbHJlYWR5IGV4aXN0aW5nIGlkJywgaXRlbSwgbWUuZ2V0KGl0ZW0uaWQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICovXG4gICAgdW5yZWdpc3RlcihpdGVtKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKGl0ZW0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XG5cbmV4cG9ydCB7QmFzZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSAgICAgICAgICAgICAgICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBWRG9tVXRpbH0gIGZyb20gJy4uL3V0aWwvVkRvbS5tanMnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIFZOb2RlVXRpbH0gZnJvbSAnLi4vdXRpbC9WTm9kZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5Db21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5tYW5hZ2VyLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYW5hZ2VyLkNvbXBvbmVudCdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYW5hZ2VyLkNvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjb21wb25lbnQtbWFuYWdlcidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29tcG9uZW50LW1hbmFnZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgTmVvLmdldENvbXBvbmVudCA9IHRoaXMuZ2V0QnlJZC5iaW5kKHRoaXMpOyAvLyBhbGlhc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IGNvbXBvbmVudCB3aGljaCBtYXRjaGVzIHRoZSBjb25maWctc2VsZWN0b3IgbW92aW5nIGRvd24gdGhlIGNvbXBvbmVudCBpdGVtcyB0cmVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBjb25maWdcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfG51bGx9XG4gICAgICovXG4gICAgZG93bihjb21wb25lbnRJZCwgY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb21wb25lbnQgICA9IG1lLmdldEJ5SWQoY29tcG9uZW50SWQpLFxuICAgICAgICAgICAgbWF0Y2hBcnJheSAgPSBbXSxcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gbnVsbCxcbiAgICAgICAgICAgIGkgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgID0gY29tcG9uZW50Lml0ZW1zICYmIGNvbXBvbmVudC5pdGVtcy5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIGNvbmZpZ0FycmF5LCBjb25maWdMZW5ndGg7XG5cbiAgICAgICAgaWYgKE5lby5pc1N0cmluZyhjb25maWcpKSB7XG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbnR5cGU6IGNvbmZpZ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZ0FycmF5ICA9IE9iamVjdC5lbnRyaWVzKGNvbmZpZyk7XG4gICAgICAgIGNvbmZpZ0xlbmd0aCA9IGNvbmZpZ0FycmF5Lmxlbmd0aDtcblxuICAgICAgICBjb25maWdBcnJheS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBjb21wb25lbnRba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaEFycmF5Lmxlbmd0aCA9PT0gY29uZmlnTGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBtZS5kb3duKGNvbXBvbmVudC5pdGVtc1tpXS5pZCwgY29uZmlnKTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5WYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH0gdGhlIGNvbXBvbmVudCBpZCBpbiBjYXNlIHRoZXJlIGlzIGEgbWF0Y2hcbiAgICAgKi9cbiAgICBmaW5kUGFyZW50Q29tcG9uZW50KHBhdGgpIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBpICAgPSAwLFxuICAgICAgICAgICAgbGVuID0gcGF0aCAmJiBwYXRoLmxlbmd0aCB8fCAwLFxuICAgICAgICAgICAgaWQ7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWQgPSBwYXRoW2ldO1xuXG4gICAgICAgICAgICBpZiAoaWQgJiYgbWUuaGFzKGlkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRvZG86IHJlcGxhY2UgYWxsIGNhbGxzIG9mIHRoaXMgbWV0aG9kIHRvIGNhbGxzIHVzaW5nIHRoZSB1dGlsLlZOb2RlIGNsYXNzXG4gICAgICogR2V0IHRoZSBpZHMgb2YgYWxsIGNoaWxkIG5vZGVzIG9mIHRoZSBnaXZlbiB2bm9kZVxuICAgICAqIEBwYXJhbSB2bm9kZVxuICAgICAqIEBwYXJhbSBjaGlsZElkc1xuICAgICAqIEByZXR1cm5zIHtBcnJheX0gY2hpbGRJZHNcbiAgICAgKi9cbiAgICBnZXRDaGlsZElkcyh2bm9kZSwgY2hpbGRJZHMpIHtcbiAgICAgICAgcmV0dXJuIFZOb2RlVXRpbC5nZXRDaGlsZElkcyh2bm9kZSwgY2hpbGRJZHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGNoaWxkIGNvbXBvbmVudHMgZm91bmQgaW5zaWRlIHRoZSB2ZG9tIHRyZWVcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZVtdfSBjaGlsZENvbXBvbmVudHNcbiAgICAgKi9cbiAgICBnZXRDaGlsZHJlbihjb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGNoaWxkQ29tcG9uZW50cyA9IFtdLFxuICAgICAgICAgICAgY2hpbGROb2RlcyAgICAgID0gVk5vZGVVdGlsLmdldENoaWxkSWRzKGNvbXBvbmVudC52bm9kZSksXG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudDtcblxuICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudCA9IHRoaXMuZ2V0KG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZENvbXBvbmVudHMucHVzaChjaGlsZENvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGlsZENvbXBvbmVudHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBBcnJheSBjb250YWluaW5nIHRoZSBpZHMgb2YgYWxsIHBhcmVudCBjb21wb25lbnRzIGZvciBhIGdpdmVuIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nW119IHBhcmVudElkc1xuICAgICAqL1xuICAgIGdldFBhcmVudElkcyhjb21wb25lbnQpIHtcbiAgICAgICAgbGV0IHBhcmVudElkcyA9IFtdO1xuXG4gICAgICAgIHdoaWxlIChjb21wb25lbnQgJiYgY29tcG9uZW50LnBhcmVudElkKSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSB0aGlzLmdldEJ5SWQoY29tcG9uZW50LnBhcmVudElkKTtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHBhcmVudElkcy5wdXNoKGNvbXBvbmVudC5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyZW50SWRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aFxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBnZXRQYXJlbnRQYXRoKHBhdGgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29tcG9uZW50UGF0aCA9IFtdLFxuICAgICAgICAgICAgaSAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICAgID0gcGF0aCAmJiBwYXRoLmxlbmd0aCB8fCAwO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChtZS5oYXMocGF0aFtpXSkpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRQYXRoLnB1c2gocGF0aFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50UGF0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIEFycmF5IGNvbnRhaW5pbmcgYWxsIHBhcmVudCBjb21wb25lbnRzIGZvciBhIGdpdmVuIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlW119IHBhcmVudHNcbiAgICAgKi9cbiAgICBnZXRQYXJlbnRzKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgcGFyZW50cyA9IFtdO1xuXG4gICAgICAgIHdoaWxlIChjb21wb25lbnQgJiYgY29tcG9uZW50LnBhcmVudElkKSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSB0aGlzLmdldEJ5SWQoY29tcG9uZW50LnBhcmVudElkKTtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgY29tcG9uZW50IHdoaWNoIG1hdGNoZXMgdGhlIGNvbmZpZy1zZWxlY3RvclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRJZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gY29uZmlnXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZXxudWxsfVxuICAgICAqL1xuICAgIHVwKGNvbXBvbmVudElkLCBjb25maWcpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuZ2V0QnlJZChjb21wb25lbnRJZCksXG4gICAgICAgICAgICBjb25maWdBcnJheSwgY29uZmlnTGVuZ3RoLCBtYXRjaEFycmF5O1xuXG4gICAgICAgIGlmIChOZW8uaXNTdHJpbmcoY29uZmlnKSkge1xuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG50eXBlOiBjb25maWdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWdBcnJheSAgPSBPYmplY3QuZW50cmllcyhjb25maWcpO1xuICAgICAgICBjb25maWdMZW5ndGggPSBjb25maWdBcnJheS5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKGNvbXBvbmVudCAmJiBjb21wb25lbnQucGFyZW50SWQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuZ2V0QnlJZChjb21wb25lbnQucGFyZW50SWQpO1xuXG4gICAgICAgICAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gW107XG5cbiAgICAgICAgICAgIGNvbmZpZ0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBjb21wb25lbnRba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hBcnJheS5sZW5ndGggPT09IGNvbmZpZ0xlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvbXBvbmVudCk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoQ29tcG9uZW50KTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBDb21wb25lbnRNYW5hZ2VyfSBmcm9tICcuL0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIEZvY3VzTWFuYWdlcn0gICAgIGZyb20gJy4vRm9jdXMubWpzJztcbmltcG9ydCBMb2dnZXIgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb3JlL0xvZ2dlci5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBWRG9tVXRpbH0gICAgICAgICBmcm9tICcuLi91dGlsL1ZEb20ubWpzJztcblxuY29uc3QgZXZlbnRDb25maWdLZXlzID0gW1xuICAgICdidWJibGUnLFxuICAgICdkZWxlZ2F0ZScsXG4gICAgJ2xvY2FsJyxcbiAgICAnc2NvcGUnLFxuICAgICd2bm9kZUlkJ1xuXTtcblxuY29uc3QgZ2xvYmFsRG9tRXZlbnRzID0gW1xuICAgICdjaGFuZ2UnLFxuICAgICdjbGljaycsXG4gICAgJ2NvbnRleHRtZW51JyxcbiAgICAnZm9jdXNpbicsXG4gICAgJ2ZvY3Vzb3V0JyxcbiAgICAnaW5wdXQnLFxuICAgICdrZXlkb3duJyxcbiAgICAna2V5dXAnLFxuICAgICdtb3VzZWVudGVyJyxcbiAgICAnbW91c2VsZWF2ZScsXG4gICAgJ3doZWVsJ1xuXTtcblxuLyoqXG4gKiBAY2xhc3MgTmVvLm1hbmFnZXIuRG9tRXZlbnRcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgRG9tRXZlbnQgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1hbmFnZXIuRG9tRXZlbnQnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFuYWdlci5Eb21FdmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdkb20tZXZlbnQtbWFuYWdlcidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZG9tLWV2ZW50LW1hbmFnZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsaXN0ZW5lcnM9e31cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiB7fSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbWFwPXt9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBtYXA6IHt9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZmlyZShldmVudCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBidWJibGUgICAgID0gdHJ1ZSxcbiAgICAgICAgICAgIGRhdGEgICAgICAgPSBldmVudC5kYXRhIHx8IHt9LFxuICAgICAgICAgICAgZXZlbnROYW1lICA9IGV2ZW50LmV2ZW50TmFtZSxcbiAgICAgICAgICAgIGkgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGlzdGVuZXJzICA9IG51bGwsXG4gICAgICAgICAgICBwYXRoSWRzICAgID0gZGF0YS5wYXRoLm1hcChlID0+IGUuaWQpLFxuICAgICAgICAgICAgcGF0aCAgICAgICA9IENvbXBvbmVudE1hbmFnZXIuZ2V0UGFyZW50UGF0aChwYXRoSWRzKSxcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSBwYXRoLmxlbmd0aCxcbiAgICAgICAgICAgIGNvbXBvbmVudCwgZGVsZWdhdGlvblZkb20sIGRlbGVnYXRpb25UYXJnZXRJZCwgaWQsIHByZXZlbnRGaXJlLCB0YXJnZXRJZDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZCAgICAgICAgPSBwYXRoW2ldO1xuICAgICAgICAgICAgY29tcG9uZW50ID0gTmVvLmdldENvbXBvbmVudChpZCk7XG5cbiAgICAgICAgICAgIGlmICghY29tcG9uZW50IHx8IGNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaXN0ZW5lcnMgPSBtZS5pdGVtc1tpZF0gJiYgbWUuaXRlbXNbaWRdW2V2ZW50TmFtZV07XG5cbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlyZScsIGV2ZW50TmFtZSwgZGF0YSwgbGlzdGVuZXJzLCBwYXRoKTtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3RlbmVycykpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyICYmIGxpc3RlbmVyLmZuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGlvblRhcmdldElkID0gbWUudmVyaWZ5RGVsZWdhdGlvblBhdGgobGlzdGVuZXIsIGRhdGEucGF0aCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZWdhdGlvblRhcmdldElkICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ZW50RmlyZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIG9ubHkgd2FudCBtb3VzZWVudGVyICYgbGVhdmUgdG8gZmlyZSBvbiB0aGVpciB0b3AgbGV2ZWwgbm9kZXMsIG5vdCBmb3IgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ21vdXNlZW50ZXInIHx8IGV2ZW50TmFtZSA9PT0gJ21vdXNlbGVhdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRJZCA9IGV2ZW50TmFtZSA9PT0gJ21vdXNlZW50ZXInID8gZGF0YS5mcm9tRWxlbWVudElkIDogZGF0YS50b0VsZW1lbnRJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldElkLCBkZWxlZ2F0aW9uVGFyZ2V0SWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0SWQgJiYgdGFyZ2V0SWQgIT09IGRlbGVnYXRpb25UYXJnZXRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGVnYXRpb25WZG9tID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZChjb21wb25lbnQudmRvbSwgZGVsZWdhdGlvblRhcmdldElkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWxlZ2F0aW9uVmRvbS52ZG9tICYmIFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQoZGVsZWdhdGlvblZkb20udmRvbSwgdGFyZ2V0SWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZlbnRGaXJlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRGaXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhOZW8uZ2V0KGlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmZuLmFwcGx5KGxpc3RlbmVyLnNjb3BlIHx8IHNlbGYsIFtkYXRhXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbGlzdGVuZXIuYnViYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnViYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gd2UgZG8gd2FudCB0byB0cmlnZ2VyIHRoZSBGb2N1c01hbmFnZXIgYWZ0ZXIgbm9ybWFsIGRvbUxpc3RlbmVycyBvbiB0aGVzZSBldmVudHMgZ290IGV4ZWN1dGVkXG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnZm9jdXNpbicgfHwgZXZlbnROYW1lID09PSAnZm9jdXNvdXQnKSB7XG4gICAgICAgICAgICAgICAgRm9jdXNNYW5hZ2VyWydvbicgKyBOZW8uY2FwaXRhbGl6ZShldmVudE5hbWUpXSh7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFBhdGg6IHBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgICAgICAgICA6IGRhdGFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWJ1YmJsZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICogQHBhcmFtIHNjb3BlXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZUxpc3RlbmVyQ29uZmlnKGNvbmZpZywgc2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGVnYXRlIDogY29uZmlnLmRlbGVnYXRlLFxuICAgICAgICAgICAgZXZlbnROYW1lOiBjb25maWcuZXZlbnROYW1lLFxuICAgICAgICAgICAgaWQgICAgICAgOiBzY29wZS5pZCxcbiAgICAgICAgICAgIG9wdHMgICAgIDogY29uZmlnLFxuICAgICAgICAgICAgc2NvcGUgICAgOiBjb25maWcuc2NvcGUgICB8fCBzY29wZSxcbiAgICAgICAgICAgIHZub2RlSWQgIDogY29uZmlnLnZub2RlSWQgfHwgc2NvcGUuaWRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRFdmVudE5hbWUoY29uZmlnKSB7XG4gICAgICAgIGxldCBldmVudE5hbWUgPSBudWxsO1xuXG4gICAgICAgIGlmIChOZW8uaXNPYmplY3QoY29uZmlnKSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFldmVudENvbmZpZ0tleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgPSBrZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXZlbnROYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmRlbGVnYXRlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5vcHRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5zY29wZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcudm5vZGVJZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0TGlzdGVuZXIoY29uZmlnKSB7XG4gICAgICAgIGxldCBsaXN0ZW5lcnMgPSB0aGlzLml0ZW1zLFxuICAgICAgICAgICAgZXZlbnQ7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnNbY29uZmlnLmlkXSkge1xuICAgICAgICAgICAgZXZlbnQgPSBsaXN0ZW5lcnNbY29uZmlnLmlkXVtjb25maWcuZXZlbnROYW1lXTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW91bnRzIGxvY2FsIGRvbUV2ZW50IGxpc3RlbmVycyBmb3IgYSBnaXZlbiBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBtb3VudERvbUxpc3RlbmVycyhjb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGxpc3RlbmVycyAgID0gY29tcG9uZW50LmRvbUxpc3RlbmVycyxcbiAgICAgICAgICAgIGxvY2FsRXZlbnRzID0gW10sXG4gICAgICAgICAgICBldmVudCwgZXZlbnROYW1lO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGxpc3RlbmVycykuZm9yRWFjaChldmVudElkID0+IHtcbiAgICAgICAgICAgIGV2ZW50ICAgICA9IGxpc3RlbmVyc1tldmVudElkXTtcbiAgICAgICAgICAgIGV2ZW50TmFtZSA9IGV2ZW50LmV2ZW50TmFtZTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSAmJiAoZXZlbnQubG9jYWwgfHwgIWdsb2JhbERvbUV2ZW50cy5pbmNsdWRlcyhldmVudE5hbWUpKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2NhbEV2ZW50cycsIGV2ZW50TmFtZSk7XG5cbiAgICAgICAgICAgICAgICBsb2NhbEV2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSAgIDogZXZlbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAnZG9tRXZlbnRMaXN0ZW5lcicsXG4gICAgICAgICAgICAgICAgICAgIHZub2RlSWQ6IGV2ZW50LnZub2RlSWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGxvY2FsRXZlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIE5lby53b3JrZXIuQXBwLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA6ICdhZGREb21MaXN0ZW5lcicsXG4gICAgICAgICAgICAgICAgYXBwTmFtZTogY29tcG9uZW50LmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgZXZlbnRzIDogbG9jYWxFdmVudHNcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZGVkIGRvbUxpc3RlbmVyJywgZGF0YSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBcHA6IEdvdCBlcnJvciBhdHRlbXB0aW5nIHRvIGFkZCBhIGRvbUxpc3RlbmVyJywgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZGVsZWdhdGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuaWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbmZpZy5sb2NhbFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcub3B0c1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcub3JpZ2luYWxDb25maWdcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnByaW9yaXR5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5zY29wZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcudm5vZGVJZFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBsaXN0ZW5lciBnb3QgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHkgKGZhbHNlIGluIGNhc2UgaXQgd2FzIGFscmVhZHkgdGhlcmUpXG4gICAgICovXG4gICAgcmVnaXN0ZXIoY29uZmlnKSB7XG4gICAgICAgIGxldCBhbHJlYWR5UmVnaXN0ZXJlZCA9IGZhbHNlLFxuICAgICAgICAgICAgZXZlbnROYW1lICAgICAgICAgPSBjb25maWcuZXZlbnROYW1lLFxuICAgICAgICAgICAgaWQgICAgICAgICAgICAgICAgPSBjb25maWcuaWQsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgICAgICA9IHRoaXMuaXRlbXMsXG4gICAgICAgICAgICBvcHRzICAgICAgICAgICAgICA9IGNvbmZpZy5vcHRzLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgICAgICAgPSBjb25maWcuc2NvcGUsXG4gICAgICAgICAgICBmblR5cGUgICAgICAgICAgICA9IHR5cGVvZiBvcHRzLFxuICAgICAgICAgICAgZm4sIGxpc3RlbmVyLCBsaXN0ZW5lckNvbmZpZywgbGlzdGVuZXJJZDtcblxuICAgICAgICBpZiAoZm5UeXBlID09PSAnZnVuY3Rpb24nIHx8IGZuVHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGZuID0gb3B0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZuICAgID0gb3B0cy5mbjtcbiAgICAgICAgICAgIHNjb3BlID0gb3B0cy5zY29wZSB8fCBzY29wZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbGlzdGVuZXJzW2lkXSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzW2lkXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyc1tpZF1bZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaWRdW2V2ZW50TmFtZV07XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RlbmVyKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcltrZXldLmZuLnRvU3RyaW5nKCkgPT09IGZuLnRvU3RyaW5nKCkgJiYgLy8gdG9kbzogYWRkIGEgYmV0dGVyIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyW2tleV0uc2NvcGUgICAgICAgICA9PT0gc2NvcGUgJiZcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJba2V5XS5kZWxlZ2F0ZSAgICAgID09PSBjb25maWcuZGVsZWdhdGVcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgYWxyZWFkeVJlZ2lzdGVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdGVuZXJzW2lkXVtldmVudE5hbWVdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWxyZWFkeVJlZ2lzdGVyZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdtYW5hZ2VyLkRvbUV2ZW50IHJlZ2lzdGVyJywgZXZlbnROYW1lLCBjb25maWcpO1xuXG4gICAgICAgIGxpc3RlbmVySWQgPSBOZW8uZ2V0SWQoJ2RvbS1ldmVudCcpO1xuXG4gICAgICAgIGNvbmZpZy5saXN0ZW5lcklkID0gbGlzdGVuZXJJZDtcblxuICAgICAgICBsaXN0ZW5lckNvbmZpZyA9IHtcbiAgICAgICAgICAgIGJ1YmJsZSAgICAgICAgOiBjb25maWcuaGFzT3duUHJvcGVydHkoJ2J1YmJsZScpID8gY29uZmlnLmJ1YmJsZSA6IG9wdHMuaGFzT3duUHJvcGVydHkoJ2J1YmJsZScpID8gb3B0cy5idWJibGUgOiB0cnVlLFxuICAgICAgICAgICAgZGVsZWdhdGUgICAgICA6IGNvbmZpZy5kZWxlZ2F0ZSxcbiAgICAgICAgICAgIGZuICAgICAgICAgICAgOiBmbixcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgOiBsaXN0ZW5lcklkLFxuICAgICAgICAgICAgbW91bnRlZCAgICAgICA6ICFjb25maWcubG9jYWwgJiYgZ2xvYmFsRG9tRXZlbnRzLmluY2x1ZGVzKGV2ZW50TmFtZSksXG4gICAgICAgICAgICBvcmlnaW5hbENvbmZpZzogY29uZmlnLm9yaWdpbmFsQ29uZmlnLFxuICAgICAgICAgICAgcHJpb3JpdHkgICAgICA6IGNvbmZpZy5wcmlvcml0eSB8fCAxLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgICA6IHNjb3BlLFxuICAgICAgICAgICAgdm5vZGVJZCAgICAgICA6IGNvbmZpZy52bm9kZUlkXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tYXBbbGlzdGVuZXJJZF0gPSBsaXN0ZW5lckNvbmZpZztcblxuICAgICAgICBsaXN0ZW5lcnNbaWRdW2V2ZW50TmFtZV0ucHVzaChsaXN0ZW5lckNvbmZpZyk7XG5cbiAgICAgICAgbGlzdGVuZXJzW2lkXVtldmVudE5hbWVdLnNvcnQoKGEsIGIpID0+IGEucHJpb3JpdHkgPiBiLnByaW9yaXR5KTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1hcCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5pZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcub3B0c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcuc2NvcGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLnZub2RlSWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2NvcGVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBsaXN0ZW5lciBkaWQgZXhpc3QgYW5kIGdvdCByZW1vdmVkXG4gICAgICovXG4gICAgdW5yZWdpc3Rlcihjb25maWcsIHNjb3BlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1bnJlZ2lzdGVyJywgY29uZmlnKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nZW5lcmF0ZUxpc3RlbmVyQ29uZmlnKGNvbmZpZywgc2NvcGUpKTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMuZ2V0TGlzdGVuZXIoY29uZmlnKTtcblxuICAgICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsaXN0ZW5lciBmb3VuZCcsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZURvbUxpc3RlbmVycyhjb21wb25lbnQsIGRvbUxpc3RlbmVycywgb2xkRG9tTGlzdGVuZXJzKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHJlZ2lzdGVyZWRMaXN0ZW5lcnMgPSBtZS5pdGVtc1tjb21wb25lbnQuaWRdIHx8IHt9LFxuICAgICAgICAgICAgaSwgbGVuLCBsaXN0ZW5lcnM7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZG9tTGlzdGVuZXJzKSkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2xkRG9tTGlzdGVuZXJzKSkge1xuICAgICAgICAgICAgICAgIG9sZERvbUxpc3RlbmVycy5mb3JFYWNoKG9sZERvbUxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCAmIHJlbW92ZSBubyBsb25nZXIgZXhpc3RpbmcgbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgICAgIGlmICghZG9tTGlzdGVuZXJzLmluY2x1ZGVzKG9sZERvbUxpc3RlbmVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gcmVnaXN0ZXJlZExpc3RlbmVyc1ttZS5nZXRFdmVudE5hbWUob2xkRG9tTGlzdGVuZXIpXSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgICAgICAgICA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZW4gICAgICAgPSBsaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vcmlnaW5hbENvbmZpZyA9PT0gb2xkRG9tTGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGxpc3RlbmVycywgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFkZCBuZXcgbGlzdGVuZXJzXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMuZm9yRWFjaChkb21MaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZG9tTGlzdGVuZXIpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV2ZW50Q29uZmlnS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5yZWdpc3Rlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGUgICAgICA6IHZhbHVlLmRlbGVnYXRlIHx8IGRvbUxpc3RlbmVyLmRlbGVnYXRlIHx8ICcjJyArIGNvbXBvbmVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgICAgIDoga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgICAgICAgICAgOiBjb21wb25lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0cyAgICAgICAgICA6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsQ29uZmlnOiBkb21MaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZSAgICAgICAgIDogZG9tTGlzdGVuZXIuc2NvcGUgfHwgY29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZub2RlSWQgICAgICAgOiB2YWx1ZS52bm9kZUlkIHx8IGNvbXBvbmVudC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50Lm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICBtZS5tb3VudERvbUxpc3RlbmVycyhjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyLmxvZ0Vycm9yKCdDb21wb25lbnQuZG9tTGlzdGVuZXJzIGhhdmUgdG8gYmUgYW4gYXJyYXknLCBjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZW5kZWQgZm9yIE5lby5jb250cm9sbGVyLkNvbXBvbmVudCB0byByZXBsYWNlIGxpc3RlbmVyIHBsYWNlaG9sZGVycyBwcm92aWRlZCBhcyBhIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmNvbXBvbmVudElkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY29uZmlnLmV2ZW50SGFuZGxlck1ldGhvZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZXZlbnRIYW5kbGVyTmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBjb25maWcuc2NvcGVcbiAgICAgKi9cbiAgICB1cGRhdGVMaXN0ZW5lclBsYWNlaG9sZGVyKGNvbmZpZykge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbXMgICAgICAgICAgPSBtZS5pdGVtc1tjb25maWcuY29tcG9uZW50SWRdIHx8IHt9LFxuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSBpdGVtc1tjb25maWcuZXZlbnROYW1lXSB8fCBbXSxcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgICAgID0gZXZlbnRMaXN0ZW5lcnMubGVuZ3RoLFxuICAgICAgICAgICAgbGlzdGVuZXI7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBldmVudExpc3RlbmVyc1tpXTtcblxuICAgICAgICAgICAgaWYgKGxpc3RlbmVyLmZuID09PSBjb25maWcuZXZlbnRIYW5kbGVyTmFtZSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmZuICAgID0gY29uZmlnLmV2ZW50SGFuZGxlck1ldGhvZDtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5zY29wZSA9IGNvbmZpZy5zY29wZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufFN0cmluZ30gdHJ1ZSBpbiBjYXNlIHRoZSBkZWxlZ2F0aW9uIHN0cmluZyBtYXRjaGVzIHRoZSBldmVudCBwYXRoXG4gICAgICovXG4gICAgdmVyaWZ5RGVsZWdhdGlvblBhdGgobGlzdGVuZXIsIHBhdGgpIHtcbiAgICAgICAgbGV0IGRlbGVnYXRpb25BcnJheSA9IGxpc3RlbmVyLmRlbGVnYXRlLnNwbGl0KCcgJyksXG4gICAgICAgICAgICBqICAgICAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICAgICAgID0gZGVsZWdhdGlvbkFycmF5Lmxlbmd0aCxcbiAgICAgICAgICAgIHBhdGhMZW4gICAgICAgICA9IHBhdGgubGVuZ3RoLFxuICAgICAgICAgICAgaGFzTWF0Y2gsIGksIGl0ZW0sIGlzSWQsIHRhcmdldElkO1xuXG4gICAgICAgIGZvciAoaT1sZW4tMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGhhc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICBpdGVtICAgICA9IGRlbGVnYXRpb25BcnJheVtpXTtcbiAgICAgICAgICAgIGlzSWQgICAgID0gaXRlbS5zdGFydHNXaXRoKCcjJyk7XG5cbiAgICAgICAgICAgIGlmIChpc0lkIHx8IGl0ZW0uc3RhcnRzV2l0aCgnLicpKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW0uc3Vic3RyKDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKDsgaiA8IHBhdGhMZW47IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKGlzSWQgJiYgcGF0aFtqXS5pZCA9PT0gaXRlbSkgfHxcbiAgICAgICAgICAgICAgICAgICAgcGF0aFtqXS5jbHMuaW5jbHVkZXMoaXRlbSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRJZCA9IHBhdGhbal0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFoYXNNYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVuc3VyZSB0aGUgZGVsZWdhdGlvbiBwYXRoIGlzIGEgY2hpbGQgb2YgdGhlIG93bmVyIGNvbXBvbmVudHMgcm9vdCBub2RlXG4gICAgICAgIGZvciAoOyBqIDwgcGF0aExlbjsgaisrKSB7XG4gICAgICAgICAgICBpZiAocGF0aFtqXS5pZCA9PT0gbGlzdGVuZXIudm5vZGVJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRJZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKERvbUV2ZW50KTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShEb21FdmVudCk7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgQ29yZUJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5Gb2N1c1xuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBGb2N1cyBleHRlbmRzIENvcmVCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1hbmFnZXIuRm9jdXMnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFuYWdlci5Gb2N1cycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdmb2N1cy1tYW5hZ2VyJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdmb2N1cy1tYW5hZ2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhcnJheSBjb250YWluaW5nIG9wdHMgb2JqZWN0cy5cbiAgICAgICAgICogb3B0cy5jb21wb25lbnRQYXRoXG4gICAgICAgICAqIG9wdHMuZGF0YVxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gaGlzdG9yeT1bXVxuICAgICAgICAgKi9cbiAgICAgICAgaGlzdG9yeTogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgRGF0ZSBvYmplY3Qgd2hlbiB0aGUgbGFzdCBmb2N1c2luIGV2ZW50IGhhcyBvY2N1cmVkXG4gICAgICAgICAqIEBtZW1iZXIge0RhdGV8bnVsbH0gbGFzdEZvY3VzSW5EYXRlPW51bGxcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGxhc3RGb2N1c0luRGF0ZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBEYXRlIG9iamVjdCB3aGVuIHRoZSBsYXN0IGZvY3Vzb3V0IGV2ZW50IGhhcyBvY2N1cmVkXG4gICAgICAgICAqIEBtZW1iZXIge0RhdGV8bnVsbH0gbGFzdEZvY3VzSW5EYXRlPW51bGxcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGxhc3RGb2N1c091dERhdGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYW1vdW50IG9mIHRpbWUgZm9yIGEgZm9jdXNJbiB0byBvY2N1ciBhZnRlciB0aGUgbGFzdCBmb2N1c091dFxuICAgICAgICAgKiB0byBiZSB0aHJlYXRlZCBhcyBhIGZvY3VzbW92ZVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1heEZvY3VzSW5PdXRHYXA9MTBcbiAgICAgICAgICovXG4gICAgICAgIG1heEZvY3VzSW5PdXRHYXA6IDEwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1heGltdW0gYW1vdW50IG9mIGl0ZW1zIHN0b3JlZCBpbnNpZGUgdGhlIGhpc3RvcnkgYXJyYXlcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtYXhIaXN0b3J5TGVuZ3RoPTIwXG4gICAgICAgICAqL1xuICAgICAgICBtYXhIaXN0b3J5TGVuZ3RoOiAyMFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMuY29tcG9uZW50UGF0aCBDb21wb25lbnQgaWRzIHVwd2FyZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWRkVG9IaXN0b3J5KG9wdHMpIHtcbiAgICAgICAgbGV0IGhpc3RvcnkgPSB0aGlzLmhpc3Rvcnk7XG5cbiAgICAgICAgaGlzdG9yeS51bnNoaWZ0KG9wdHMpO1xuXG4gICAgICAgIGlmIChoaXN0b3J5Lmxlbmd0aCA+PSB0aGlzLm1heEhpc3RvcnlMZW5ndGgpIHtcbiAgICAgICAgICAgIGhpc3RvcnkucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMuY29tcG9uZW50UGF0aCBDb21wb25lbnQgaWRzIHVwd2FyZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZm9jdXNFbnRlcihvcHRzKSB7XG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50Rm9jdXMob3B0cywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYWRkVG9IaXN0b3J5KG9wdHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRhdGEgZG9tIGV2ZW50IGluZm9zXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmb2N1c0xlYXZlKG9wdHMpIHtcbiAgICAgICAgdGhpcy5zZXRDb21wb25lbnRGb2N1cyhvcHRzLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZvY3VzTW92ZShvcHRzKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGhpc3RvcnkgICAgICAgICAgPSBtZS5oaXN0b3J5LFxuICAgICAgICAgICAgbmV3Q29tcG9uZW50UGF0aCA9IG9wdHMuY29tcG9uZW50UGF0aCxcbiAgICAgICAgICAgIG9sZENvbXBvbmVudFBhdGggPSBoaXN0b3J5WzBdLmNvbXBvbmVudFBhdGgsXG4gICAgICAgICAgICBmb2N1c0VudGVyICAgICAgID0gTmVvQXJyYXkuZGlmZmVyZW5jZShuZXdDb21wb25lbnRQYXRoLCBvbGRDb21wb25lbnRQYXRoKSxcbiAgICAgICAgICAgIGZvY3VzTGVhdmUgICAgICAgPSBOZW9BcnJheS5kaWZmZXJlbmNlKG9sZENvbXBvbmVudFBhdGgsIG5ld0NvbXBvbmVudFBhdGgpLFxuICAgICAgICAgICAgZm9jdXNNb3ZlICAgICAgICA9IE5lb0FycmF5LmludGVyc2VjdGlvbihuZXdDb21wb25lbnRQYXRoLCBvbGRDb21wb25lbnRQYXRoKSxcbiAgICAgICAgICAgIGNvbXBvbmVudCwgZGF0YTtcblxuICAgICAgICBtZS5zZXRDb21wb25lbnRGb2N1cyh7Y29tcG9uZW50UGF0aDogZm9jdXNFbnRlciwgZGF0YTogb3B0cy5kYXRhfSwgdHJ1ZSk7XG4gICAgICAgIG1lLnNldENvbXBvbmVudEZvY3VzKHtjb21wb25lbnRQYXRoOiBmb2N1c0xlYXZlLCBkYXRhOiBvcHRzLmRhdGF9LCBmYWxzZSk7XG5cbiAgICAgICAgZm9jdXNNb3ZlLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gTmVvLmdldENvbXBvbmVudChpZCk7XG5cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBuZXdQYXRoOiBvcHRzLmRhdGEucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgb2xkUGF0aDogaGlzdG9yeVswXS5kYXRhLnBhdGhcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnQub25Gb2N1c01vdmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Lm9uRm9jdXNNb3ZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5maXJlKCdmb2N1c01vdmUnLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuYWRkVG9IaXN0b3J5KG9wdHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRhdGEgZG9tIGV2ZW50IGluZm9zXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbkZvY3VzaW4ob3B0cykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmxhc3RGb2N1c0luRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgaWYgKG1lLmxhc3RGb2N1c091dERhdGUgJiYgbWUubGFzdEZvY3VzSW5EYXRlIC0gbWUubGFzdEZvY3VzT3V0RGF0ZSA8IG1lLm1heEZvY3VzSW5PdXRHYXApIHtcbiAgICAgICAgICAgIG1lLmZvY3VzTW92ZShvcHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLmZvY3VzRW50ZXIob3B0cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMuY29tcG9uZW50UGF0aCBDb21wb25lbnQgaWRzIHVwd2FyZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25Gb2N1c291dChvcHRzKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUubGFzdEZvY3VzT3V0RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAobWUubGFzdEZvY3VzT3V0RGF0ZSA+IG1lLmxhc3RGb2N1c0luRGF0ZSkge1xuICAgICAgICAgICAgICAgIG1lLmZvY3VzTGVhdmUob3B0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIG1lLm1heEZvY3VzSW5PdXRHYXApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRhdGEgZG9tIGV2ZW50IGluZm9zXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBjb250YWluc0ZvY3VzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzZXRDb21wb25lbnRGb2N1cyhvcHRzLCBjb250YWluc0ZvY3VzKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQsIGhhbmRsZXI7XG5cbiAgICAgICAgb3B0cy5jb21wb25lbnRQYXRoLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gTmVvLmdldENvbXBvbmVudChpZCk7XG5cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuY29udGFpbnNGb2N1cyA9IGNvbnRhaW5zRm9jdXM7XG5cbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gY29udGFpbnNGb2N1cyA/ICdvbkZvY3VzRW50ZXInIDogJ29uRm9jdXNMZWF2ZSc7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudFtoYW5kbGVyXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbaGFuZGxlcl0ob3B0cy5kYXRhLnBhdGgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5maXJlKGNvbnRhaW5zRm9jdXMgPyAnZm9jdXNFbnRlcicgOiAnZm9jdXNMZWF2ZScsIG9wdHMuZGF0YS5wYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhGb2N1cyk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoRm9jdXMpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IEJhc2UgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IENvcmVCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5JbnN0YW5jZVxuICogQGV4dGVuZHMgTmVvLm1hbmFnZXIuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFuYWdlci5JbnN0YW5jZSdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYW5hZ2VyLkluc3RhbmNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2luc3RhbmNlLW1hbmFnZXInXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2luc3RhbmNlLW1hbmFnZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIENvcmVCYXNlLmluc3RhbmNlTWFuYWdlckF2YWlsYWJsZSA9IHRydWU7XG5cbiAgICAgICAgbWUuY29uc3VtZU5lb0lkTWFwKCk7XG5cbiAgICAgICAgTmVvLmdldCA9IG1lLmdldC5iaW5kKG1lKTsgLy8gYWxpYXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhbGwgaWRzIHdoaWNoIGdvdCBhcHBsaWVkIHRvIHRoZSBOZW8gbmFtZXNwYWNlIGJlZm9yZSB0aGlzIGluc3RhbmNlIGdvdCBjcmVhdGVkXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjb25zdW1lTmVvSWRNYXAoKSB7XG4gICAgICAgIGlmIChOZW8uaWRNYXApIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKE9iamVjdC52YWx1ZXMoTmVvLmlkTWFwKSk7XG4gICAgICAgICAgICBkZWxldGUgTmVvLmlkTWFwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhJbnN0YW5jZSk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoSW5zdGFuY2UpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLkFycmF5XG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE5lb0FycmF5IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLkFycmF5J1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuQXJyYXknXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaXRlbSBvciBBcnJheSBvZiBpdGVtcyB0byBhbiBhcnJheSBpbiBjYXNlIGl0IGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXG4gICAgICogT25seSBwcmltaXRpdmUgaXRlbXMgd2lsbCBnZXQgZm91bmQgYXMgZHVwbGljYXRlc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgYWRkKGFyciwgaXRlbXMpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgaXRlbXMgPSBbaXRlbXNdO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICghYXJyLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgaXRlbXMgd2hpY2ggYXJlIHByZXNlbnQgaW4gYXJyYXkxLCBidXQgbm90IGluIGFycmF5MlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5MT1bXVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5Mj1bXVxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgZGlmZmVyZW5jZShhcnJheTE9W10sIGFycmF5Mj1bXSkge1xuICAgICAgICByZXR1cm4gYXJyYXkxLmZpbHRlcihpdGVtID0+ICFhcnJheTIuaW5jbHVkZXMoaXRlbSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgaW5kZXggb2YgaXRlbSBpcyA+IC0xXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXG4gICAgICovXG4gICAgc3RhdGljIGhhc0l0ZW0oYXJyLCBpdGVtKSB7XG4gICAgICAgIHJldHVybiBhcnIuaW5jbHVkZXMoaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBpdGVtcyB3aGljaCBhcmUgcHJlc2VudCBpbiBhcnJheTEgYW5kIGFycmF5MlxuICAgICAqIE9ubHkgc3VwcG9ydHMgcHJpbWl0aXZlIGl0ZW1zXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkxPVtdXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkyPVtdXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBpbnRlcnNlY3Rpb24oYXJyYXkxPVtdLCBhcnJheTI9W10pIHtcbiAgICAgICAgcmV0dXJuIGFycmF5MS5maWx0ZXIoaXRlbSA9PiBhcnJheTIuaW5jbHVkZXMoaXRlbSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgaXRlbXMgb2YgYXJyYXkxIGFyZSBwcmVzZW50IGluIGFycmF5IDJcbiAgICAgKiBTdXBwb3J0cyBBcnJheXMgY29udGFpbmluZyBPYmplY3RzLCBub3QgQXJyYXlzIGNvbnRhaW5pbmcgQXJyYXlzXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkxPVtdXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkyPVtdXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRXF1YWwoYXJyYXkxPVtdLCBhcnJheTI9W10pIHtcbiAgICAgICAgbGV0IGkgICAgPSAwLFxuICAgICAgICAgICAgbGVuICA9IGFycmF5MS5sZW5ndGgsXG4gICAgICAgICAgICBsZW4yID0gYXJyYXkyLmxlbmd0aCxcbiAgICAgICAgICAgIGhhc09iamVjdCwgaiwgdmFsdWU7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFsdWUgPSBhcnJheTFbaV07XG5cbiAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaGFzT2JqZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaiAgICAgICAgID0gMDtcblxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgbGVuMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QoYXJyYXkyW2pdKSAmJiBOZW8udXRpbC5PYmplY3QuaXNFcXVhbCh2YWx1ZSwgYXJyYXkyW2pdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzT2JqZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZSBpZiAoIWFycmF5Mi5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyYXkxLmxlbmd0aCA9PT0gYXJyYXkyLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyBhbiBpdGVtIGluc2lkZSBhcnIgZnJvbSBmcm9tSW5kZXggdG8gdG9JbmRleFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBmcm9tSW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdG9JbmRleFxuICAgICAqL1xuICAgIHN0YXRpYyBtb3ZlKGFyciwgZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgICAgIGlmIChmcm9tSW5kZXggPT09IHRvSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJvbUluZGV4ID49IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZyb21JbmRleCA9IGFyci5sZW5ndGggLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJyLnNwbGljZSh0b0luZGV4LCAwLCBhcnIuc3BsaWNlKGZyb21JbmRleCwgMSlbMF0pO1xuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBvciBhcnJheSBvZiBpdGVtcyBmcm9tIGFuIGFycmF5LiBPbmx5IHByaW1pdGl2ZSBpdGVtcyB3aWxsIGdldCBmb3VuZFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVtb3ZlKGFyciwgaXRlbXMpIHtcbiAgICAgICAgbGV0IGluZGV4O1xuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhbiBhcnJheSBpbiBjYXNlIGl0IGRvZXMgIGV4aXN0LCBvdGhlcndpc2UgYWRkcyBpdFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbVxuICAgICAqL1xuICAgIHN0YXRpYyB0b2dnbGUoYXJyLCBpdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0l0ZW0oYXJyLCBpdGVtKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoYXJyLCBpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKGFyciwgaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGl0ZW1zIHdoaWNoIGFyZSBwcmVzZW50IGluIGFycmF5MSBhbmQgYXJyYXkyXG4gICAgICogT25seSBzdXBwb3J0cyBwcmltaXRpdmUgaXRlbXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTFcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIHVuaW9uKGFycmF5MSwgYXJyYXkyKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXSxcbiAgICAgICAgICAgIG1lcmdlICA9IGFycmF5MS5jb25jYXQoYXJyYXkyKSxcbiAgICAgICAgICAgIGxlbiAgICA9IG1lcmdlLmxlbmd0aCxcbiAgICAgICAgICAgIGFzc29jICA9IHt9LFxuICAgICAgICAgICAgaXRlbTtcblxuICAgICAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgICAgIGl0ZW0gPSBtZXJnZVtsZW5dO1xuXG4gICAgICAgICAgICBpZiAoIWFzc29jW2l0ZW1dKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnVuc2hpZnQoaXRlbSk7XG4gICAgICAgICAgICAgICAgYXNzb2NbaXRlbV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGl0ZW0gb3IgQXJyYXkgb2YgaXRlbXMgdG8gYW4gYXJyYXkgaW4gY2FzZSBpdCBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0LlxuICAgICAqIE9ubHkgcHJpbWl0aXZlIGl0ZW1zIHdpbGwgZ2V0IGZvdW5kIGFzIGR1cGxpY2F0ZXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1zXG4gICAgICovXG4gICAgc3RhdGljIHVuc2hpZnQoYXJyLCBpdGVtcykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgICAgICBpdGVtcyA9IFtpdGVtc107XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFhcnIuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBhcnIudW5zaGlmdChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhOZW9BcnJheSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5lb0FycmF5OyIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udXRpbC5GdW5jdGlvblxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBOZW9GdW5jdGlvbiBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5GdW5jdGlvbidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLkZ1bmN0aW9uJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmQgYXJncyBpbnN0ZWFkIG9mIHByZXBlbmRpbmcgdGhlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgYmluZEFwcGVuZChzY29wZSkge1xuICAgICAgICBjb25zdCBmbiAgID0gdGhpcyxcbiAgICAgICAgICAgICAgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5zbGljZSgxKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoc2NvcGUsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5jb25jYXQoYXJncykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHRhcmdldFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2NvcGVcbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVNlcXVlbmNlKHRhcmdldCwgbWV0aG9kTmFtZSwgZm4sIHNjb3BlKSB7XG4gICAgICAgIGxldCBtZXRob2QgPSB0YXJnZXRbbWV0aG9kTmFtZV0gfHwgTmVvLmVtcHR5Rm47XG5cbiAgICAgICAgcmV0dXJuICh0YXJnZXRbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHNjb3BlIHx8IHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNjb3BlXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHN0YXRpYyBpbnRlcmNlcHQodGFyZ2V0LCBtZXRob2ROYW1lLCBmbiwgc2NvcGUpIHtcbiAgICAgICAgbGV0IG1ldGhvZCA9IHRhcmdldFttZXRob2ROYW1lXSB8fCBOZW8uZW1wdHlGbjtcblxuICAgICAgICByZXR1cm4gKHRhcmdldFttZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IHJldHVyblZhbHVlID0gZm4uYXBwbHkoc2NvcGUgfHwgdGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIG1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTmVvRnVuY3Rpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBOZW9GdW5jdGlvbjsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuSGFzaEhpc3RvcnlcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgSGFzaEhpc3RvcnkgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS9PYnNlcnZhYmxlLm1qcyBtaXhpblxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuQ2xhc3NTeXN0ZW0nXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5IYXNoSGlzdG9yeScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdoYXNoLWhpc3RvcnknXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2hhc2gtaGlzdG9yeScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IHN0YWNrPVtdXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBzdGFjazogW11cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGZpcnN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFja1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0Q291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGhhc2hTdHJpbmdcbiAgICAgKi9cbiAgICBwdXNoKGhhc2gsIGhhc2hTdHJpbmcpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5zdGFjay51bnNoaWZ0KGhhc2gpO1xuICAgICAgICBtZS5maXJlKCdjaGFuZ2UnLCBoYXNoLCBtZS5zdGFja1sxXSwgaGFzaFN0cmluZyk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIYXNoSGlzdG9yeSk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoSGFzaEhpc3RvcnkpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IEJhc2UgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IE5lb09iamVjdCBmcm9tICcuLi91dGlsL09iamVjdC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udXRpbC5LZXlOYXZpZ2F0aW9uXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIEtleU5hdmlnYXRpb24gZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuS2V5TmF2aWdhdGlvbidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLktleU5hdmlnYXRpb24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0na2V5bmF2J1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdrZXluYXYnLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWxseSBzdG9yZXMgdGhlIGNvbXBvbmVudCBpZCBpbnNpZGUgX2NvbXBvbmVudFxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29tcG9uZW50LkJhc2V8bnVsbH0gY29tcG9uZW50Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjb21wb25lbnRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgdG8gdHJ1ZSBpbiBjYXNlIHRoZSBrZXlkb3duIGV2ZW50IGlzIHN1cHBvc2VkIHRvIGJ1YmJsZSB1cHdhcmRzIGluc2lkZSB0aGUgY29tcG9uZW50IHRyZWVcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0ga2V5RG93bkV2ZW50QnViYmxlPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBrZXlEb3duRXZlbnRCdWJibGU6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl8bnVsbH0ga2V5c189bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAga2V5c186IG51bGxcbiAgICB9fVxuXG4gICAgYWRkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2tleXMucHVzaCguLi50aGlzLnBhcnNlS2V5cyh2YWx1ZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfVxuICAgICAqL1xuICAgIGJlZm9yZUdldENvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIE5lby5nZXRDb21wb25lbnQodGhpcy5fY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSB2YWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge1N0cmluZ30gdGhlIGNvbXBvbmVudCBpZFxuICAgICAqL1xuICAgIGJlZm9yZVNldENvbXBvbmVudCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVucmVnaXN0ZXIoKTtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd24oZGF0YSkge1xuICAgICAgICAvLyBVc2luZyB0aGUgY2hyb21lIGF1dG8tZmlsbCBmZWF0dXJlIGRvZXMgdHJpZ2dlciBhIGtleWRvd24gZXZlbnQsIG5vdCBjb250YWluaW5nIGEga2V5LiBTZWU6ICM2NFxuICAgICAgICBpZiAoZGF0YS5rZXkpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHVwcGVyQ2FzZUtleSA9IGRhdGEua2V5LnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgc2NvcGU7XG5cbiAgICAgICAgICAgIHVwcGVyQ2FzZUtleSA9IG1lLnBhcnNlVXBwZXJDYXNlS2V5KHVwcGVyQ2FzZUtleSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdLZXlOYXZpZ2F0aW9uIG9uS2V5RG93bicsIHVwcGVyQ2FzZUtleSwgZGF0YSwgbWUua2V5cyk7XG5cbiAgICAgICAgICAgIG1lLmtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHNjb3BlID0gTmVvLmdldChrZXkuc2NvcGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGtleS5rZXkudG9VcHBlckNhc2UoKSA9PT0gdXBwZXJDYXNlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29wZVtrZXkuZm5dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZVtrZXkuZm5dLmFwcGx5KHNjb3BlLCBbZGF0YV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgcGFyc2VLZXlzKHZhbHVlKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCBjb21wb25lbnRJZCA9IHRoaXMuX2NvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBrZXlBcnJheSAgICA9IFtdO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50SWQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGtleUFycmF5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm4gICA6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ICA6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiBjb21wb25lbnRJZCAvLyB0b2RvOiBzdXBwb3J0IFZDcyBsYXRlciBvblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBrZXlBcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyBzcGVjaWZpYyBrZXkgbmFtZXMsIGUuZy4gXCIgXCIgPT4gU1BBQ0VcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHBhcnNlVXBwZXJDYXNlS2V5KGtleSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgICAgICAga2V5ID0gJ1NQQUNFJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FSUk9XRE9XTic6XG4gICAgICAgICAgICAgICAga2V5ID0gJ0RPV04nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQVJST1dMRUZUJzpcbiAgICAgICAgICAgICAgICBrZXkgPSAnTEVGVCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBUlJPV1JJR0hUJzpcbiAgICAgICAgICAgICAgICBrZXkgPSAnUklHSFQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQVJST1dVUCc6XG4gICAgICAgICAgICAgICAga2V5ID0gJ1VQJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICovXG4gICAgcmVnaXN0ZXIoY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gY29tcG9uZW50LmRvbUxpc3RlbmVycztcblxuICAgICAgICBtZS5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIG1lLmtleXMgICAgICA9IG1lLnBhcnNlS2V5cyhtZS5rZXlzKTtcblxuICAgICAgICBpZiAoZG9tTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5ZG93bjoge1xuICAgICAgICAgICAgICAgICAgICBmbiAgICA6IG1lLm9uS2V5RG93bixcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlOiBtZS5rZXlEb3duRXZlbnRCdWJibGUsXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlIDogbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29tcG9uZW50LmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGtleSBsaXN0ZW5lciB1c2luZyB0aGUgc2FtZSBjb25maWcgdXNlZCB3aGVuIGNyZWF0aW5nIGl0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIHJlbW92ZUtleShjb25maWcpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAga2V5cyA9IG1lLl9rZXlzLFxuICAgICAgICAgICAgaSAgICA9IDAsXG4gICAgICAgICAgICBsZW4gID0ga2V5cy5sZW5ndGgsXG4gICAgICAgICAgICBrZXk7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAga2V5ID0ga2V5c1tpXTtcblxuICAgICAgICAgICAgaWYgKE5lb09iamVjdC5pc0VxdWFsKGtleSwgY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShrZXlzLCBrZXkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIG11bHRpcGxlIGtleSBsaXN0ZW5lcnMgcGFzc2luZyBhbiBhcnJheSBvZiBjb25maWcgaXRlbXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICAgICAqL1xuICAgIHJlbW92ZUtleXMoaXRlbXMpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5yZW1vdmVLZXkoaXRlbSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKCkge1xuICAgICAgICAvLyB0b2RvOiByZW1vdmUgdGhlIGRvbSBsaXN0ZW5lciBmcm9tIHRoZSBvd25lciBjb21wb25lbnRcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEtleU5hdmlnYXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBLZXlOYXZpZ2F0aW9uOyIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udXRpbC5PYmplY3RcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgTmVvT2JqZWN0IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLk9iamVjdCdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLk9iamVjdCdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGFsbCBwcm9wZXJ0aWVzIG9mIHggbWF0Y2ggd2l0aCB0aGUgcHJvcGVydGllcyBvZiB5XG4gICAgICogU3VwcG9ydHMgbmVzdGVkIE9iamVjdHMsIGJ1dCBub3QgYXJyYXlzIGFzIHByb3AgdmFsdWVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHhcbiAgICAgKiBAcGFyYW0ge09iamVjdH0geVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0VxdWFsKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIChOZW8uaXNPYmplY3QoeCkgJiYgTmVvLmlzT2JqZWN0KHkpKSA/XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoeCkubGVuZ3RoID09PSBPYmplY3Qua2V5cyh5KS5sZW5ndGgpICYmXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoeCkucmVkdWNlKGZ1bmN0aW9uKGlzRXF1YWwsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNFcXVhbCAmJiBOZW9PYmplY3QuaXNFcXVhbCh4W2tleV0sIHlba2V5XSk7XG4gICAgICAgICAgICAgICAgfSwgdHJ1ZVxuICAgICAgICAgICAgKSA6ICh4ID09PSB5KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE5lb09iamVjdCk7XG5cbmV4cG9ydCBkZWZhdWx0IE5lb09iamVjdDsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuU3R5bGVcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgU3R5bGUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuU3R5bGUnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5TdHlsZSdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBkZWx0YSBvYmplY3QsIGNvbnRhaW5pbmcgdGhlIHN0eWxlcyBvZiBuZXdTdHlsZSB3aGljaCBhcmUgbm90IGluY2x1ZGVkIG9yIGRpZmZlcmVudCB0aGFuIGluIG9sZFN0eWxlXG4gICAgICogU3R5bGVzIGluY2x1ZGVkIGluIG9sZFN0eWxlIGJ1dCBtaXNzaW5nIGluIG5ld1N0eWxlIHdpbGwgZ2V0IGEgdmFsdWUgb2YgbnVsbFxuICAgICAqIHNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxFbGVtZW50L3N0eWxlXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBuZXdTdHlsZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gb2xkU3R5bGVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBzdHlsZSBkZWx0YVxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wYXJlU3R5bGVzKG5ld1N0eWxlLCBvbGRTdHlsZSkge1xuICAgICAgICBsZXQgc3R5bGVzID0ge307XG5cbiAgICAgICAgaWYgKE5lby5pc1N0cmluZyhuZXdTdHlsZSkpIHtcbiAgICAgICAgICAgIG5ld1N0eWxlID0gTmVvLmNvcmUuVXRpbC5jcmVhdGVTdHlsZU9iamVjdChuZXdTdHlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKG9sZFN0eWxlKSkge1xuICAgICAgICAgICAgb2xkU3R5bGUgPSBOZW8uY29yZS5VdGlsLmNyZWF0ZVN0eWxlT2JqZWN0KG9sZFN0eWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbmV3U3R5bGUgJiYgIW9sZFN0eWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICghb2xkU3R5bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBOZW8uY2xvbmUobmV3U3R5bGUpO1xuICAgICAgICB9IGVsc2UgaWYgKCFuZXdTdHlsZSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMob2xkU3R5bGUpLmZvckVhY2goZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgICAgICAgICBzdHlsZXNbc3R5bGVdID0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMobmV3U3R5bGUpLmZvckVhY2goZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW9sZFN0eWxlLmhhc093blByb3BlcnR5KHN0eWxlKSB8fCBvbGRTdHlsZVtzdHlsZV0gIT09IG5ld1N0eWxlW3N0eWxlXSkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbc3R5bGVdID0gbmV3U3R5bGVbc3R5bGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvbGRTdHlsZSkuZm9yRWFjaChmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICAgICAgICAgIGlmICghbmV3U3R5bGUuaGFzT3duUHJvcGVydHkoc3R5bGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1tzdHlsZV0gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoc3R5bGVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFN0eWxlKTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGU7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLlZEb21cbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgVkRvbSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5WRG9tJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuVkRvbSdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoIHZkb20gY2hpbGQgbm9kZXMgYnkgaWQgb3Igb3B0cyBvYmplY3QgZm9yIGEgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG9wdHMgRWl0aGVyIGFuIG9iamVjdCBjb250YWluaW5nIHZkb20gbm9kZSBhdHRyaWJ1dGVzIG9yIGEgc3RyaW5nIGJhc2VkIGlkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtpbmRleF0gSW50ZXJuYWwgZmxhZywgZG8gbm90IHVzZSBpdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyZW50Tm9kZV0gSW50ZXJuYWwgZmxhZywgZG8gbm90IHVzZSBpdFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICogICAgIHtOdW1iZXJ9IGluZGV4XG4gICAgICogICAgIHtTdHJpbmd9IHBhcmVudElkXG4gICAgICogICAgIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZFZkb21DaGlsZCh2ZG9tLCBvcHRzLCBpbmRleCwgcGFyZW50Tm9kZSkge1xuICAgICAgICBpbmRleCA9IGluZGV4IHx8IDA7XG4gICAgICAgIG9wdHMgID0gdHlwZW9mIG9wdHMgIT09ICdzdHJpbmcnID8gb3B0cyA6IHtpZDpvcHRzfTtcblxuICAgICAgICBsZXQgY2hpbGQgICAgICA9IG51bGwsXG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gW10sXG4gICAgICAgICAgICBzdHlsZU1hdGNoID0gdHJ1ZSxcbiAgICAgICAgICAgIGkgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICA9IHZkb20uY24gJiYgdmRvbS5jbi5sZW5ndGgsXG4gICAgICAgICAgICBvcHRzQXJyYXksIG9wdHNMZW5ndGgsIHN1YkNoaWxkO1xuXG4gICAgICAgIG9wdHNBcnJheSAgPSBPYmplY3QuZW50cmllcyhvcHRzKTtcbiAgICAgICAgb3B0c0xlbmd0aCA9IG9wdHNBcnJheS5sZW5ndGg7XG5cbiAgICAgICAgb3B0c0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZkb20uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIE5lby5pc0FycmF5KHZkb21ba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmRvbVtrZXldLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2ZG9tW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZkb21ba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzQXJyYXkodmFsdWUpICYmIE5lby5pc0FycmF5KHZkb21ba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiBlaXRoZXIgc2VhcmNoIHRoZSB2ZG9tIGFycmF5IGZvciBhbGwga2V5cyBvciBjb21wYXJlIGlmIHRoZSBhcnJheXMgYXJlIGVxdWFsLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZmluZFZkb21DaGlsZDogY2xzIG1hdGNoaW5nIG5vdCBzdXBwb3J0ZWQgZm9yIHRhcmdldCAmIHNvdXJjZSB0eXBlcyBvZiBBcnJheXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgdmRvbVtrZXldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZG9tW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkgJiYgTmVvLmlzT2JqZWN0KHZkb21ba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW3N0eWxlS2V5LCBzdHlsZVZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh2ZG9tW2tleV0uaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpICYmIHZkb21ba2V5XVtzdHlsZUtleV0gPT09IHN0eWxlVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZmluZFZkb21DaGlsZDogc3R5bGUgbWF0Y2hpbmcgbm90IHN1cHBvcnRlZCBmb3IgbWl4ZWQgdGFyZ2V0ICYgc291cmNlIHR5cGVzIChPYmplY3QgVlMgU3RyaW5nKScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmRvbVtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoQXJyYXkubGVuZ3RoID09PSBvcHRzTGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGluZGV4ICAgICA6IGluZGV4LFxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGU6IHBhcmVudE5vZGUsXG4gICAgICAgICAgICAgICAgdmRvbSAgICAgIDogdmRvbVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2ZG9tLmNuKSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZkb20uY25baV0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViQ2hpbGQgPSBWRG9tLmZpbmRWZG9tQ2hpbGQodmRvbS5jbltpXSwgb3B0cywgaSwgdmRvbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YkNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAgICAgOiBzdWJDaGlsZC5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlOiBzdWJDaGlsZC5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZkb20gICAgICA6IHN1YkNoaWxkLnZkb21cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBzaG9ydGN1dCBmb3IgZmluZFZkb21DaGlsZCh2ZG9tLCB7ZmxhZzogZmxhZ30pO1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZsYWcgVGhlIGZsYWcgcmVmZXJlbmNlIHNwZWNpZmllZCBvbiB0aGUgdGFyZ2V0IHZkb20gY2hpbGQgbm9kZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0QnlGbGFnKHZkb20sIGZsYWcpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBWRG9tLmZpbmRWZG9tQ2hpbGQodmRvbSwge2ZsYWc6IGZsYWd9KTtcbiAgICAgICAgcmV0dXJuIG5vZGUgJiYgbm9kZS52ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaWRzIG9mIGFsbCBjaGlsZCBub2RlcyBvZiB0aGUgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHZkb21cbiAgICAgKiBAcGFyYW0gW2NoaWxkSWRzPVtdXVxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gY2hpbGRJZHNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q2hpbGRJZHModmRvbSwgY2hpbGRJZHM9W10pIHtcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2ZG9tICYmIHZkb20uY24gfHwgW107XG5cbiAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRJZHMucHVzaChjaGlsZE5vZGUuaWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZElkcyA9IFZEb20uZ2V0Q2hpbGRJZHMoY2hpbGROb2RlLCBjaGlsZElkcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGlsZElkcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb2x1bW5Ob2Rlcyh2ZG9tLCBpbmRleCkge1xuICAgICAgICBsZXQgY29sdW1uTm9kZXMgPSBbXTtcblxuICAgICAgICBpZiAodmRvbS5jbikge1xuICAgICAgICAgICAgdmRvbS5jbi5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJvdy5jbiAmJiByb3cuY25baW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbk5vZGVzLnB1c2gocm93LmNuW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sdW1uTm9kZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q29sdW1uTm9kZXNJZHModmRvbSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFZEb20uZ2V0Q29sdW1uTm9kZXModmRvbSwgaW5kZXgpLm1hcChlID0+IGUuaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmxhZ1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IFttYXRjaEFycmF5XVxuICAgICAqIEByZXR1cm4ge0FycmF5fSBhbiBhcnJheSBvZiB2ZG9tIG5vZGVzIHdoaWNoIG1hdGNoIHRoZSBmbGFnXG4gICAgICovXG4gICAgc3RhdGljIGdldEZsYWdzKHZkb20sIGZsYWcsIG1hdGNoQXJyYXkpIHtcbiAgICAgICAgaWYgKCFtYXRjaEFycmF5KSB7XG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gW107XG5cbiAgICAgICAgICAgIGlmICh2ZG9tLmZsYWcgPT09IGZsYWcpIHtcbiAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godmRvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gdmRvbSAmJiB2ZG9tLmNuIHx8IFtdO1xuXG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZE5vZGUgPT4ge1xuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5mbGFnID09PSBmbGFnKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKGNoaWxkTm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdGNoQXJyYXkgPSBWRG9tLmdldEZsYWdzKGNoaWxkTm9kZSwgZmxhZywgbWF0Y2hBcnJheSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBtYXRjaEFycmF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBhIGdpdmVuIG5vZGVUb0luc2VydCBhZnRlciBhIHRhcmdldE5vZGUgaW5zaWRlIGEgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb20gVGhlIHZkb20gdHJlZSBjb250YWluaW5nIHRoZSB0YXJnZXROb2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5vZGVUb0luc2VydCBUaGUgbmV3IHZkb20gdG8gaW5zZXJ0XG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB0YXJnZXROb2RlSWQgRWl0aGVyIGEgdmRvbSBub2RlIG9yIGEgdmRvbSBub2RlIGlkXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGluc2VydEFmdGVyTm9kZSh2ZG9tLCBub2RlVG9JbnNlcnQsIHRhcmdldE5vZGVJZCkge1xuICAgICAgICByZXR1cm4gVkRvbS5pbnNlcnROb2RlKHZkb20sIG5vZGVUb0luc2VydCwgdGFyZ2V0Tm9kZUlkLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0IGEgZ2l2ZW4gbm9kZVRvSW5zZXJ0IGJlZm9yZSBhIHRhcmdldE5vZGUgaW5zaWRlIGEgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb20gVGhlIHZkb20gdHJlZSBjb250YWluaW5nIHRoZSB0YXJnZXROb2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5vZGVUb0luc2VydCBUaGUgbmV3IHZkb20gdG8gaW5zZXJ0XG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB0YXJnZXROb2RlSWQgRWl0aGVyIGEgdmRvbSBub2RlIG9yIGEgdmRvbSBub2RlIGlkXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGluc2VydEJlZm9yZU5vZGUodmRvbSwgbm9kZVRvSW5zZXJ0LCB0YXJnZXROb2RlSWQpIHtcbiAgICAgICAgcmV0dXJuIFZEb20uaW5zZXJ0Tm9kZSh2ZG9tLCBub2RlVG9JbnNlcnQsIHRhcmdldE5vZGVJZCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0IGEgZ2l2ZW4gbm9kZVRvSW5zZXJ0IGJlZm9yZSBhIHRhcmdldE5vZGUgaW5zaWRlIGEgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb20gVGhlIHZkb20gdHJlZSBjb250YWluaW5nIHRoZSB0YXJnZXROb2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5vZGVUb0luc2VydCBUaGUgbmV3IHZkb20gdG8gaW5zZXJ0XG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB0YXJnZXROb2RlSWQgRWl0aGVyIGEgdmRvbSBub2RlIG9yIGEgdmRvbSBub2RlIGlkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBpbnNlcnRCZWZvcmUgdHJ1ZSBpbnNlcnRzIHRoZSBuZXcgbm9kZSBhdCB0aGUgc2FtZSBpbmRleCwgaW5kZXgrMSBvdGhlcndpc2VcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaW5zZXJ0Tm9kZSh2ZG9tLCBub2RlVG9JbnNlcnQsIHRhcmdldE5vZGVJZCwgaW5zZXJ0QmVmb3JlKSB7XG4gICAgICAgIGlmIChOZW8uaXNPYmplY3QodGFyZ2V0Tm9kZUlkKSkge1xuICAgICAgICAgICAgdGFyZ2V0Tm9kZUlkID0gdGFyZ2V0Tm9kZUlkLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBWRG9tLmZpbmRWZG9tQ2hpbGQodmRvbSwge2lkOiB0YXJnZXROb2RlSWR9KSxcbiAgICAgICAgICAgIGluZGV4O1xuXG4gICAgICAgIGlmICh0YXJnZXROb2RlKSB7XG4gICAgICAgICAgICBpbmRleCA9IGluc2VydEJlZm9yZSA/IHRhcmdldE5vZGUuaW5kZXggOiB0YXJnZXROb2RlLmluZGV4ICsgMTtcbiAgICAgICAgICAgIHRhcmdldE5vZGUucGFyZW50Tm9kZS5jbi5zcGxpY2UoaW5kZXgsIDAsIG5vZGVUb0luc2VydCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggdmRvbSBjaGlsZCBub2RlcyBieSBpZCBvciBvcHRzIG9iamVjdCBmb3IgYSBnaXZlbiB2ZG9tIHRyZWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Zkb21dXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBvcHRzIEVpdGhlciBhbiBvYmplY3QgY29udGFpbmluZyB2ZG9tIG5vZGUgYXR0cmlidXRlcyBvciBhIHN0cmluZyBiYXNlZCBpZFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIG5vZGUgd2FzIGZvdW5kICYgcmVtb3ZlZFxuICAgICAqL1xuICAgIHN0YXRpYyByZW1vdmVWZG9tQ2hpbGQodmRvbSwgb3B0cykge1xuICAgICAgICBsZXQgY2hpbGQgPSBWRG9tLmZpbmRWZG9tQ2hpbGQodmRvbSwgb3B0cyk7XG5cbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnROb2RlLmNuLnNwbGljZShjaGlsZC5pbmRleCwgMSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyBhIGNoaWxkIG5vZGUgaW5zaWRlIGEgdmRvbSB0cmVlIGJ5IGEgZ2l2ZW4gaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBuZXdDaGlsZE5vZGVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBub2RlIHdhcyBmb3VuZCBhbmQgcmVwbGFjZWRcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVwbGFjZVZkb21DaGlsZCh2ZG9tLCBpZCwgbmV3Q2hpbGROb2RlKSB7XG4gICAgICAgIGxldCBjbiAgPSB2ZG9tLmNuIHx8IFtdLFxuICAgICAgICAgICAgaSAgID0gMCxcbiAgICAgICAgICAgIGxlbiA9IGNuLmxlbmd0aCxcbiAgICAgICAgICAgIGNoaWxkTm9kZTtcblxuICAgICAgICBpZiAodmRvbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncmVwbGFjZVZkb21DaGlsZDogdGFyZ2V0IGlkIG1hdGNoZXMgdGhlIHJvb3Qgdm5vZGUgaWQ6ICcgKyBpZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjbltpXTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICBjbltpXSA9IG5ld0NoaWxkTm9kZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFZEb20ucmVwbGFjZVZkb21DaGlsZChjaGlsZE5vZGUsIGlkLCBuZXdDaGlsZE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTmVvLnZkb20uSGVscGVyIHdpbGwgY3JlYXRlIGlkcyBmb3IgZWFjaCB2bm9kZSwgc28gd2UgbmVlZCB0byBzeW5jIHRoZW0gaW50byB0aGUgdmRvbVxuICAgICAqIEBwYXJhbSB7TmVvLnZkb20uVk5vZGV9IHZub2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBzdGF0aWMgc3luY1Zkb21JZHModm5vZGUsIHZkb20pIHtcbiAgICAgICAgaWYgKHZub2RlICYmIHZkb20pIHtcbiAgICAgICAgICAgIGxldCBjaGlsZE5vZGVzID0gdmRvbS5jaGlsZE5vZGVzIHx8IHZkb20uY24sXG4gICAgICAgICAgICAgICAgY24sIGksIGxlbjtcblxuICAgICAgICAgICAgaWYgKHZub2RlLmlkICYmIHZub2RlLmlkICE9PSB2ZG9tLmlkKSB7XG4gICAgICAgICAgICAgICAgdmRvbS5pZCA9IHZub2RlLmlkO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd2ZG9tIGlkIHNldCB0bycsIHZub2RlLmlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBjbiAgID0gY2hpbGROb2Rlcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlbW92ZURvbSAhPT0gdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaSAgICA9IDA7XG4gICAgICAgICAgICAgICAgbGVuICA9IGNuICYmIGNuLmxlbmd0aCB8fCAwO1xuXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodm5vZGUuY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgVkRvbS5zeW5jVmRvbUlkcyh2bm9kZS5jaGlsZE5vZGVzW2ldLCBjbltpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFZEb20pO1xuXG5leHBvcnQgZGVmYXVsdCBWRG9tOyIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udXRpbC5WTm9kZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBWTm9kZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5WTm9kZSdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLlZOb2RlJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggdm5vZGUgY2hpbGQgbm9kZXMgYnkgaWQgb3Igb3B0cyBvYmplY3QgZm9yIGEgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBvcHRzIEVpdGhlciBhbiBvYmplY3QgY29udGFpbmluZyB2ZG9tIG5vZGUgYXR0cmlidXRlcyBvciBhIHN0cmluZyBiYXNlZCBpZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbaW5kZXhdIEludGVybmFsIGZsYWcsIGRvIG5vdCB1c2UgaXRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmVudE5vZGVdIEludGVybmFsIGZsYWcsIGRvIG5vdCB1c2UgaXRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqICAgICB7TnVtYmVyfSBpbmRleFxuICAgICAqICAgICB7U3RyaW5nfSBwYXJlbnRJZFxuICAgICAqICAgICB7T2JqZWN0fSB2bm9kZVxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kQ2hpbGRWbm9kZSh2bm9kZSwgb3B0cywgaW5kZXgsIHBhcmVudE5vZGUpIHtcbiAgICAgICAgaW5kZXggPSBpbmRleCB8fCAwO1xuICAgICAgICBvcHRzICA9IHR5cGVvZiBvcHRzICE9PSAnc3RyaW5nJyA/IG9wdHMgOiB7aWQ6IG9wdHN9O1xuXG4gICAgICAgIGxldCBjaGlsZCAgICAgID0gbnVsbCxcbiAgICAgICAgICAgIGF0dHJNYXRjaCAgPSB0cnVlLFxuICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFtdLFxuICAgICAgICAgICAgc3R5bGVNYXRjaCA9IHRydWUsXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSB2bm9kZS5jaGlsZE5vZGVzICYmIHZub2RlLmNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgb3B0c0FycmF5LCBvcHRzTGVuZ3RoLCBzdWJDaGlsZDtcblxuICAgICAgICBvcHRzQXJyYXkgID0gT2JqZWN0LmVudHJpZXMob3B0cyk7XG4gICAgICAgIG9wdHNMZW5ndGggPSBvcHRzQXJyYXkubGVuZ3RoO1xuXG4gICAgICAgIG9wdHNBcnJheS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2bm9kZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpICYmIE5lby5pc09iamVjdCh2bm9kZVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChbYXR0cktleSwgYXR0clZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh2bm9kZVtrZXldLmhhc093blByb3BlcnR5KGF0dHJLZXkpICYmIHZub2RlW2tleV1bYXR0cktleV0gPT09IGF0dHJWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ck1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xhc3NOYW1lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIE5lby5pc0FycmF5KHZub2RlW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZub2RlW2tleV0uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZub2RlW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZub2RlW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE5lby5pc0FycmF5KHZhbHVlKSAmJiBOZW8uaXNBcnJheSh2bm9kZVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG86IGVpdGhlciBzZWFyY2ggdGhlIHZub2RlIGFycmF5IGZvciBhbGwga2V5cyBvciBjb21wYXJlIGlmIHRoZSBhcnJheXMgYXJlIGVxdWFsLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZmluZENoaWxkVm5vZGU6IGNscyBtYXRjaGluZyBub3Qgc3VwcG9ydGVkIGZvciB0YXJnZXQgJiBzb3VyY2UgdHlwZXMgb2YgQXJyYXlzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkgJiYgTmVvLmlzT2JqZWN0KHZub2RlW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtzdHlsZUtleSwgc3R5bGVWYWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodm5vZGVba2V5XS5oYXNPd25Qcm9wZXJ0eShzdHlsZUtleSkgJiYgdm5vZGVba2V5XVtzdHlsZUtleV0gPT09IHN0eWxlVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bm9kZVtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoQXJyYXkubGVuZ3RoID09PSBvcHRzTGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGluZGV4ICAgICA6IGluZGV4LFxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGU6IHBhcmVudE5vZGUsXG4gICAgICAgICAgICAgICAgdm5vZGUgICAgIDogdm5vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodm5vZGUuY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHN1YkNoaWxkID0gVk5vZGUuZmluZENoaWxkVm5vZGUodm5vZGUuY2hpbGROb2Rlc1tpXSwgb3B0cywgaSwgdm5vZGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN1YkNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggICAgIDogc3ViQ2hpbGQuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlOiBzdWJDaGlsZC5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdm5vZGUgICAgIDogc3ViQ2hpbGQudm5vZGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGEgY2hpbGQgdm5vZGUgaW5zaWRlIGEgdm5vZGUgdHJlZSBieSBhIGdpdmVuIGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gaWRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IGNoaWxkIHZub2RlIG9yIG51bGxcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZENoaWxkVm5vZGVCeUlkKHZub2RlLCBpZCkge1xuICAgICAgICBsZXQgY2hpbGROb2RlcyA9IHZub2RlLmNoaWxkTm9kZXMgfHwgW10sXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSBjaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIGNoaWxkTm9kZTtcblxuICAgICAgICBpZiAodm5vZGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdm5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGROb2RlID0gVk5vZGUuZmluZENoaWxkVm5vZGVCeUlkKGNoaWxkTm9kZSwgaWQpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaWRzIG9mIGFsbCBjaGlsZCBub2RlcyBvZiB0aGUgZ2l2ZW4gdm5vZGVcbiAgICAgKiBAcGFyYW0gdm5vZGVcbiAgICAgKiBAcGFyYW0gW2NoaWxkSWRzPVtdXVxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gY2hpbGRJZHNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q2hpbGRJZHModm5vZGUsIGNoaWxkSWRzPVtdKSB7XG4gICAgICAgIGxldCBjaGlsZE5vZGVzID0gdm5vZGUgJiYgdm5vZGUuY2hpbGROb2RlcyB8fCBbXTtcblxuICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuaWQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZElkcy5wdXNoKGNoaWxkTm9kZS5pZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkSWRzID0gVk5vZGUuZ2V0Q2hpbGRJZHMoY2hpbGROb2RlLCBjaGlsZElkcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGlsZElkcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyBhIGNoaWxkIHZub2RlIGluc2lkZSBhIHZub2RlIHRyZWUgYnkgYSBnaXZlbiBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2bm9kZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBuZXdDaGlsZFZub2RlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgbm9kZSB3YXMgZm91bmQgYW5kIHJlcGxhY2VkXG4gICAgICovXG4gICAgc3RhdGljIHJlcGxhY2VDaGlsZFZub2RlKHZub2RlLCBpZCwgbmV3Q2hpbGRWbm9kZSkge1xuICAgICAgICBsZXQgY2hpbGROb2RlcyA9IHZub2RlLmNoaWxkTm9kZXMgfHwgW10sXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSBjaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIGNoaWxkTm9kZTtcblxuICAgICAgICBpZiAodm5vZGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlcGxhY2VDaGlsZFZub2RlOiB0YXJnZXQgaWQgbWF0Y2hlcyB0aGUgcm9vdCB2bm9kZSBpZDogJyArIGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc1tpXSA9IG5ld0NoaWxkVm5vZGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWTm9kZS5yZXBsYWNlQ2hpbGRWbm9kZShjaGlsZE5vZGUsIGlkLCBuZXdDaGlsZFZub2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVk5vZGUpO1xuXG5leHBvcnQgZGVmYXVsdCBWTm9kZTsiLCJpbXBvcnQgTmVvICAgICAgICAgICAgIGZyb20gJy4uL05lby5tanMnO1xuaW1wb3J0IEJhc2UgICAgICAgICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCAqIGFzIGNvcmUgICAgICAgZnJvbSAnLi4vY29yZS9fZXhwb3J0Lm1qcyc7XG5pbXBvcnQgRG9tRXZlbnRNYW5hZ2VyIGZyb20gJy4uL21hbmFnZXIvRG9tRXZlbnQubWpzJztcbmltcG9ydCBJbnN0YW5jZSAgICAgICAgZnJvbSAnLi4vbWFuYWdlci9JbnN0YW5jZS5tanMnO1xuaW1wb3J0IEFwcGxpY2F0aW9uICAgICBmcm9tICcuLi9jb250cm9sbGVyL0FwcGxpY2F0aW9uLm1qcyc7XG5pbXBvcnQgSGFzaEhpc3RvcnkgICAgIGZyb20gJy4uL3V0aWwvSGFzaEhpc3RvcnkubWpzJztcblxuLyoqXG4gKiBUaGUgQXBwIHdvcmtlciBjb250YWlucyBtb3N0IHBhcnRzIG9mIHRoZSBmcmFtZXdvcmsgYXMgd2VsbCBhcyBhbGwgYXBwcyB3aGljaCBnZXQgY3JlYXRlZC5cbiAqIFNlZSB0aGUgdHV0b3JpYWxzIGZvciBmdXJ0aGVyIGluZm9zLlxuICogQGNsYXNzIE5lby53b3JrZXIuQXBwXG4gKiBAZXh0ZW5kcyBOZW8ud29ya2VyLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgQXBwIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby53b3JrZXIuQXBwJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLndvcmtlci5BcHAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nYXBwLXdvcmtlcidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYXBwLXdvcmtlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gZGF0YT1udWxsXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gd29ya2VySWQ9J2FwcCdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHdvcmtlcklkOiAnYXBwJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUub24oJ3JlbW90ZXJlZ2lzdGVyZWQnLCBtZS5vblJlbW90ZVJlZ2lzdGVyZWQsIG1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmVyeSBkb20gZXZlbnQgd2lsbCBnZXQgZm9yd2FyZGVkIGFzIGEgd29ya2VyIG1lc3NhZ2UgZnJvbSBtYWluIGFuZCBlbmRzIHVwIGhlcmUgZmlyc3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSB1c2VmdWwgZXZlbnQgcHJvcGVydGllcywgZGlmZmVycyBmb3IgZGlmZmVyZW50IGV2ZW50IHR5cGVzLiBTZWUgTmVvLm1haW4uRG9tRXZlbnRzLlxuICAgICAqL1xuICAgIG9uRG9tRXZlbnQoZGF0YSkge1xuICAgICAgICBEb21FdmVudE1hbmFnZXIuZmlyZShkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmVyeSBVUkwgaGFzaC1jaGFuZ2Ugd2lsbCBjcmVhdGUgYSBwb3N0IG1lc3NhZ2UgaW4gbWFpbiBhbmQgZW5kIHVwIGhlcmUgZmlyc3QuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgcGFyc2VkIGtleS12YWx1ZSBwYWlycyBmb3IgZWFjaCBoYXNoIHZhbHVlXG4gICAgICovXG4gICAgb25IYXNoQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgSGFzaEhpc3RvcnkucHVzaChkYXRhLmhhc2gsIGRhdGEuaGFzaFN0cmluZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXJ0aW5nIHBvaW50IGZvciBhcHBzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkxvYWRBcHBsaWNhdGlvbihkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIG1lLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgTmVvLmNvbmZpZy5yZXNvdXJjZXNQYXRoID0gZGF0YS5yZXNvdXJjZXNQYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFOZW8uY29uZmlnLmlzRXhwZXJpbWVudGFsKSB7XG4gICAgICAgICAgICBOZW8ub25TdGFydCgpO1xuXG4gICAgICAgICAgICBpZiAoTmVvLmNvbmZpZy5oYXNoKSB7XG4gICAgICAgICAgICAgICAgSGFzaEhpc3RvcnkucHVzaChOZW8uY29uZmlnLmhhc2gsIE5lby5jb25maWcuaGFzaFN0cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAgICAgLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqL1xuICAgICAgICAgICAgICAgIGAuLi8uLi8ke21lLmRhdGEucGF0aH1gKS50aGVuKG1vZHVsZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE5lby5vblN0YXJ0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5jb25maWcuaGFzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgSGFzaEhpc3RvcnkucHVzaChOZW8uY29uZmlnLmhhc2gsIE5lby5jb25maWcuaGFzaFN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogS2VlcGluZyB0aGlzIG9uZSBmb3IgZGVidWdnaW5nIHJlYXNvbnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVtb3RlXG4gICAgICovXG4gICAgb25SZW1vdGVSZWdpc3RlcmVkKHJlbW90ZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYXBwIHdvcmtlciBvblJlbW90ZVJlZ2lzdGVyZWQnKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEFwcCk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoQXBwKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCB7ZGVmYXVsdCBhcyBDb3JlQmFzZX0gZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSAgICAgICAgICAgIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuaW1wb3J0IE1lc3NhZ2UgICAgICAgICAgICAgICBmcm9tICcuL01lc3NhZ2UubWpzJztcbmltcG9ydCBSZW1vdGVNZXRob2RBY2Nlc3MgICAgZnJvbSAnLi9taXhpbnMvUmVtb3RlTWV0aG9kQWNjZXNzLm1qcyc7XG5cbi8qKlxuICogVGhlIGFic3RyYWN0IGJhc2UgY2xhc3MgZm9yIHRoZSBBcHAsIERhdGEgJiBWRG9tIHdvcmtlclxuICogQGNsYXNzIE5lby53b3JrZXIuQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQGFic3RyYWN0XG4gKi9cbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb3JlQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby53b3JrZXIuV29ya2VyJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLndvcmtlci5Xb3JrZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nd29ya2VyJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd3b3JrZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW118TmVvLmNvcmUuQmFzZVtdfG51bGx9IG1peGlucz1bT2JzZXJ2YWJsZSwgUmVtb3RlTWV0aG9kQWNjZXNzXVxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW5zOiBbT2JzZXJ2YWJsZSwgUmVtb3RlTWV0aG9kQWNjZXNzXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB3b3JrZXJJZD1udWxsXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB3b3JrZXJJZDogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5wcm9taXNlcyA9IHt9O1xuXG4gICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG1lLm9uTWVzc2FnZS5iaW5kKG1lKSwgZmFsc2UpO1xuXG4gICAgICAgIE5lby53b3JrZXJJZCAgICAgID0gbWUud29ya2VySWQ7XG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyID0gbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoJ21haW4nLCB7YWN0aW9uOiAnd29ya2VyQ29uc3RydWN0ZWQnfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZVxuICAgICAqL1xuICAgIG9uTWVzc2FnZShlKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRhdGEgICAgPSBlLmRhdGEsXG4gICAgICAgICAgICBhY3Rpb24gID0gZGF0YS5hY3Rpb24sXG4gICAgICAgICAgICByZXBseUlkID0gZGF0YS5yZXBseUlkLFxuICAgICAgICAgICAgcHJvbWlzZTtcblxuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXNzYWdlIGFjdGlvbiBpcyBtaXNzaW5nOiAnICsgZGF0YS5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uICE9PSAncmVwbHknKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXNbJ29uJyArIE5lby5jYXBpdGFsaXplKGFjdGlvbildKGRhdGEpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBkYXRhLCBlcnIsIGUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWplY3QoZGF0YS5pZCwge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA6IGVyci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocHJvbWlzZSA9IGFjdGlvbiA9PT0gJ3JlcGx5JyAmJiBtZS5wcm9taXNlc1tyZXBseUlkXSkge1xuICAgICAgICAgICAgaWYgKGRhdGEucmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QoZGF0YS5kYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGRhdGEuZGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSBtZS5wcm9taXNlc1tyZXBseUlkXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqL1xuICAgIG9uUGluZyhtc2cpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlKG1zZywge1xuICAgICAgICAgICAgb3JpZ2luTXNnOiBtc2dcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICovXG4gICAgb25SZWdpc3Rlck5lb0NvbmZpZyhtc2cpIHtcbiAgICAgICAgTmVvLmNvbmZpZyA9IE5lby5jb25maWcgfHwge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24oTmVvLmNvbmZpZywgbXNnLmRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlc3QgYXBwLCBkYXRhLCBtYWluIG9yIHZkb20gKGV4Y2x1ZGluZyB0aGUgY3VycmVudCB3b3JrZXIpXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgY29uZmlncyBmb3IgTmVvLndvcmtlci5NZXNzYWdlXG4gICAgICogQHBhcmFtIHtBcnJheX0gW3RyYW5zZmVyXSBBbiBvcHRpb25hbCBhcnJheSBvZiBUcmFuc2ZlcmFibGUgb2JqZWN0cyB0byB0cmFuc2ZlciBvd25lcnNoaXAgb2YuXG4gICAgICogSWYgdGhlIG93bmVyc2hpcCBvZiBhbiBvYmplY3QgaXMgdHJhbnNmZXJyZWQsIGl0IGJlY29tZXMgdW51c2FibGUgKG5ldXRlcmVkKSBpbiB0aGUgY29udGV4dCBpdCB3YXMgc2VudCBmcm9tXG4gICAgICogYW5kIGJlY29tZXMgYXZhaWxhYmxlIG9ubHkgdG8gdGhlIHdvcmtlciBpdCB3YXMgc2VudCB0by5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIHByb21pc2VNZXNzYWdlKGRlc3QsIG9wdHMsIHRyYW5zZmVyKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBtZS5zZW5kTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2ZlciksXG4gICAgICAgICAgICAgICAgbXNnSWQgICA9IG1lc3NhZ2UuaWQ7XG5cbiAgICAgICAgICAgIG1lLnByb21pc2VzW21zZ0lkXSA9IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdCA6IHJlamVjdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlc3QgYXBwLCBkYXRhLCBtYWluIG9yIHZkb20gKGV4Y2x1ZGluZyB0aGUgY3VycmVudCB3b3JrZXIpXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgY29uZmlncyBmb3IgTmVvLndvcmtlci5NZXNzYWdlXG4gICAgICogQHBhcmFtIHtBcnJheX0gW3RyYW5zZmVyXSBBbiBvcHRpb25hbCBhcnJheSBvZiBUcmFuc2ZlcmFibGUgb2JqZWN0cyB0byB0cmFuc2ZlciBvd25lcnNoaXAgb2YuXG4gICAgICogSWYgdGhlIG93bmVyc2hpcCBvZiBhbiBvYmplY3QgaXMgdHJhbnNmZXJyZWQsIGl0IGJlY29tZXMgdW51c2FibGUgKG5ldXRlcmVkKSBpbiB0aGUgY29udGV4dCBpdCB3YXMgc2VudCBmcm9tXG4gICAgICogYW5kIGJlY29tZXMgYXZhaWxhYmxlIG9ubHkgdG8gdGhlIHdvcmtlciBpdCB3YXMgc2VudCB0by5cbiAgICAgKiBAcmV0dXJucyB7TmVvLndvcmtlci5NZXNzYWdlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc2VuZE1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpIHtcbiAgICAgICAgb3B0cy5kZXN0aW5hdGlvbiA9IGRlc3Q7XG5cbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShvcHRzKTtcblxuICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKG1lc3NhZ2UsIHRyYW5zZmVyKTtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBJZEdlbmVyYXRvciBmcm9tICcuLi9jb3JlL0lkR2VuZXJhdG9yLm1qcyc7XG5cbi8qKlxuICogQSB3cmFwcGVyIGZvciB3b3JrZXIgcG9zdCBtZXNzYWdlcyBzZW50IGJldHdlZW4gdGhlIEFwcCwgRGF0YSwgVkRvbSB3b3JrZXIgJiB0aGUgbWFpbiB0aHJlYWQuXG4gKiBZb3UgY2FuIGFkZCBvcHRpb25hbCBwYXJhbXMgYXMgbmVlZGVkLlxuICogQGNsYXNzIE5lby53b3JrZXIuTWVzc2FnZVxuICovXG5jbGFzcyBNZXNzYWdlIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYWN0aW9uXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRlc3RpbmF0aW9uPSdtYWluJ1xuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpZD1JZEdlbmVyYXRvci5nZXRJZChOZW8ud29ya2VySWQpXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG9yaWdpbj1OZW8ud29ya2VySWRcbiAgICAgICAgICovXG5cbiAgICAgICAgY29uZmlnLmRlc3RpbmF0aW9uID0gY29uZmlnLmRlc3RpbmF0aW9uIHx8ICdtYWluJztcbiAgICAgICAgY29uZmlnLmlkICAgICAgICAgID0gY29uZmlnLmlkICAgICAgICAgIHx8IElkR2VuZXJhdG9yLmdldElkKE5lby53b3JrZXJJZCk7XG4gICAgICAgIGNvbmZpZy5vcmlnaW4gICAgICA9IGNvbmZpZy5vcmlnaW4gICAgICB8fCBOZW8ud29ya2VySWQ7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICAgIH1cbn1cblxuY29uc3QgbnMgPSBOZW8ubnMoJ05lby53b3JrZXInLCB0cnVlKTtcbm5zWydNZXNzYWdlJ10gPSBNZXNzYWdlO1xuXG5leHBvcnQge01lc3NhZ2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby53b3JrZXIubWl4aW5zLlJlbW90ZU1ldGhvZEFjY2Vzc1xuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBSZW1vdGVNZXRob2RBY2Nlc3MgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5taXhpbnMuUmVtb3RlTWV0aG9kQWNjZXNzJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLndvcmtlci5taXhpbnMuUmVtb3RlTWV0aG9kQWNjZXNzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21peGluLXJlbW90ZS1tZXRob2QtYWNjZXNzJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdtaXhpbi1yZW1vdGUtbWV0aG9kLWFjY2VzcycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtaXhpbj10cnVlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbjogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcbiAgICAgKiBAcGFyYW0gbWV0aG9kXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9uKCo9LCAqPSk6IFByb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZVJlbW90ZShyZW1vdGUsIG1ldGhvZCkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG9yaWdpbiA9IHJlbW90ZS5vcmlnaW47XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEsIGJ1ZmZlcikge1xuICAgICAgICAgICAgbGV0IG9wdHMgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uICAgICAgICAgOiAncmVtb3RlTWV0aG9kJyxcbiAgICAgICAgICAgICAgICBkYXRhICAgICAgICAgICA6IGRhdGEsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24gICAgOiBvcmlnaW4sXG4gICAgICAgICAgICAgICAgcmVtb3RlQ2xhc3NOYW1lOiByZW1vdGUuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIHJlbW90ZU1ldGhvZCAgIDogbWV0aG9kXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIG1lLnByb21pc2VNZXNzYWdlKG9yaWdpbiwgb3B0cywgYnVmZmVyKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcbiAgICAgKi9cbiAgICBvblJlZ2lzdGVyUmVtb3RlKHJlbW90ZSkge1xuICAgICAgICBpZiAocmVtb3RlLmRlc3RpbmF0aW9uID09PSBOZW8ud29ya2VySWQpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHJlbW90ZS5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgbWV0aG9kcyAgID0gcmVtb3RlLm1ldGhvZHMsXG4gICAgICAgICAgICAgICAgcGtnICAgICAgID0gTmVvLm5zKGNsYXNzTmFtZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICAgICAgICBpZiAocGtnW21ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgcmVtb3RlIG1ldGhvZCBkZWZpbml0aW9uICcgKyBjbGFzc05hbWUgKyAnLicgKyBtZXRob2QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBrZ1ttZXRob2RdID0gbWUuZ2VuZXJhdGVSZW1vdGUocmVtb3RlLCBtZXRob2QpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChOZW8ud29ya2VySWQgIT09ICdtYWluJykge1xuICAgICAgICAgICAgICAgIG1lLmZpcmUoJ3JlbW90ZXJlZ2lzdGVyZWQnLCByZW1vdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICovXG4gICAgb25SZW1vdGVNZXRob2QobXNnKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgcGtnID0gTmVvLm5zKG1zZy5yZW1vdGVDbGFzc05hbWUpLFxuICAgICAgICAgICAgb3V0LCBtZXRob2Q7XG5cbiAgICAgICAgaWYgKCFwa2cpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZW1vdGUgbmFtZXNwYWNlIFwiJyArIG1zZy5yZW1vdGVDbGFzc05hbWUgKyAnXCInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZCA9IHBrZ1ttc2cucmVtb3RlTWV0aG9kXTtcblxuICAgICAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlbW90ZSBtZXRob2QgbmFtZSBcIicgKyBtc2cucmVtb3RlTWV0aG9kICsgJ1wiJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtc2cuZGF0YSkpIHtcbiAgICAgICAgICAgIG91dCA9IG1ldGhvZC5jYWxsKHBrZywgLi4ubXNnLmRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0ID0gbWV0aG9kLmNhbGwocGtnLCBtc2cuZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3V0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgb3V0LnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgIG1lLnJlc29sdmUobXNnLCBkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgbWUucmVqZWN0KG1zZywgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUucmVzb2x2ZShtc2csIG91dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHByb21pc2VNZXNzYWdlIGdldHMgcmVqZWN0ZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICByZWplY3QobXNnLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIGRhdGEgICA6IGRhdGEsXG4gICAgICAgICAgICByZWplY3QgOiB0cnVlLFxuICAgICAgICAgICAgcmVwbHlJZDogbXNnLmlkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gcHJvbWlzZU1lc3NhZ2UgZ2V0cyByZXNvbHZlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHJlc29sdmUobXNnLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIGRhdGEgICA6IGRhdGEsXG4gICAgICAgICAgICByZXBseUlkOiBtc2cuaWRcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhSZW1vdGVNZXRob2RBY2Nlc3MpO1xuXG5leHBvcnQge1JlbW90ZU1ldGhvZEFjY2VzcyBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9