(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
	typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
	(factory((global.Library = {}),global.$));
}(this, (function (exports,jquery) { 'use strict';

jquery = jquery && jquery.hasOwnProperty('default') ? jquery['default'] : jquery;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var bundle = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,function(){var e=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value), !t||n.length!==t);r=!0);}catch(e){o=!0, i=e;}finally{try{!r&&u.return&&u.return();}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),t=function(){var t={};return Object.entries(document.getElementsByTagName("head")[0].dataset).forEach(function(n){var r=e(n,2),o=r[0],i=r[1];try{t[o]=JSON.parse(i);}catch(e){t[o]=i;}}), t}();!function(){var e=function(e){document.documentElement.className+=" "+e;},n=function(t,n,r){var o=void 0;o=t===!0?n:r, e(o);};n(!1,"ie9","no-ie9"), n(t.browserMobile,"mobile-device","no-mobile-device"), n(t.browserTablet,"tablet","no-tablet"), n(t.browserIe,"ie","no-ie"), n(t.browserIe11,"ie11","no-ie11");}();return t});
});

var bundle$1 = createCommonjsModule(function (module, exports) {
!function(e,n){n(exports,jquery);}(commonjsGlobal,function(e,n){function t(e,n){return n={exports:{}}, e(n,n.exports), n.exports}n=n&&n.hasOwnProperty("default")?n.default:n;var o="undefined"!=typeof window?window:"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:{},r=t(function(e,n){!function(n,t){e.exports=function(){var e=function(){function e(e,n){var t=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(t.push(a.value), !n||t.length!==n);o=!0);}catch(e){r=!0, i=e;}finally{try{!o&&c.return&&c.return();}finally{if(r)throw i}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=function(){var n={};return Object.entries(document.getElementsByTagName("head")[0].dataset).forEach(function(t){var o=e(t,2),r=o[0],i=o[1];try{n[r]=JSON.parse(i);}catch(e){n[r]=i;}}), n}();return function(){var e=function(e){document.documentElement.className+=" "+e;},t=function(n,t,o){var r=void 0;r=n===!0?t:o, e(r);};t(!1,"ie9","no-ie9"), t(n.browserMobile,"mobile-device","no-mobile-device"), t(n.browserTablet,"tablet","no-tablet"), t(n.browserIe,"ie","no-ie"), t(n.browserIe11,"ie11","no-ie11");}(), n}();}();}),i=t(function(e){!function(n){function t(){}function o(e,n){return function(){e.apply(n,arguments);}}function r(e){if(!(this instanceof r))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0, this._handled=!1, this._value=void 0, this._deferreds=[], s(e,this);}function i(e,n){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(n);e._handled=!0, r._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null===t)return void(1===e._state?a:c)(n.promise,e._value);var o;try{o=t(e._value);}catch(e){return void c(n.promise,e)}a(n.promise,o);});}function a(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var t=n.then;if(n instanceof r)return e._state=3, e._value=n, void u(e);if("function"==typeof t)return void s(o(t,n),e)}e._state=1, e._value=n, u(e);}catch(n){c(e,n);}}function c(e,n){e._state=2, e._value=n, u(e);}function u(e){2===e._state&&0===e._deferreds.length&&r._immediateFn(function(){e._handled||r._unhandledRejectionFn(e._value);});for(var n=0,t=e._deferreds.length;n<t;n++)i(e,e._deferreds[n]);e._deferreds=null;}function l(e,n,t){this.onFulfilled="function"==typeof e?e:null, this.onRejected="function"==typeof n?n:null, this.promise=t;}function s(e,n){var t=!1;try{e(function(e){t||(t=!0, a(n,e));},function(e){t||(t=!0, c(n,e));});}catch(e){if(t)return;t=!0, c(n,e);}}var f=setTimeout;r.prototype.catch=function(e){return this.then(null,e)}, r.prototype.then=function(e,n){var o=new this.constructor(t);return i(this,new l(e,n,o)), o}, r.all=function(e){return new r(function(n,t){function o(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void c.call(a,function(n){o(e,n);},t)}r[e]=a, 0==--i&&n(r);}catch(e){t(e);}}if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return n([]);for(var i=r.length,a=0;a<r.length;a++)o(a,r[a]);})}, r.resolve=function(e){return e&&"object"==typeof e&&e.constructor===r?e:new r(function(n){n(e);})}, r.reject=function(e){return new r(function(n,t){t(e);})}, r.race=function(e){return new r(function(n,t){for(var o=0,r=e.length;o<r;o++)e[o].then(n,t);})}, r._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e);}||function(e){f(e,0);}, r._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e);}, r._setImmediateFn=function(e){r._immediateFn=e;}, r._setUnhandledRejectionFn=function(e){r._unhandledRejectionFn=e;}, e.exports?e.exports=r:n.Promise||(n.Promise=r);}(o);});window.Promise||(window.Promise=i);var a=!1,c=!1,u=!1,l={},s=function(){if(r.chapter&&Object.keys(r.chapter).length>0){return{id:r.chapter_id?r.chapter_id:"",number:r.chapter.number?r.chapter.number:"",title:r.chapter.title?r.chapter.title:""}}return{}},f=function(e,t){if(null!=e){var o={"postRoll-v1":{raw:e,rewatch:!0}},r=n.extend(!0,{},t);return n.extend(r.plugin,o), r}return t},d=function(){a=!0;},h=function(){},p=function(){},m=function(){return a===!0},w=function(){var e=document.createElement("script"),n=document.getElementsByTagName("head")[0];e.async=!0, e.src="//fast.wistia.com/assets/external/E-v1.js", n.appendChild(e), e.onload=h, e.onerror=p;},v=function(){m()||(w(), d());},y=function(){c=!0;},g=function(){return null!=window.bc||c===!0},b=function(){u=!0;},_=function(){return u===!0},C=function(){b();var e=document.createElement("script"),n=document.getElementsByTagName("head")[0];e.async=!0, e.src="//players.brightcove.net/5344802162001/rkcQq7gAe_default/index.min.js", n.appendChild(e), e.onload=function(){y(), l.successCallbacks.map(function(e){return e()});}, e.onerror=function(){var e=!0,n=!1,t=void 0;try{for(var o,r=l.errorCallbacks[Symbol.iterator]();!(e=(o=r.next()).done);e=!0){(0, o.value)();}}catch(e){n=!0, t=e;}finally{try{!e&&r.return&&r.return();}finally{if(n)throw t}}console.error("failed to load player");};},P=function(e,n){l.successCallbacks=l.successCallbacks||[], l.errorCallbacks=l.errorCallbacks||[], g()?e():(e&&l.successCallbacks.push(e), n&&l.errorCallbacks.push(n), _()||C());},E=function(){n.ajaxPrefilter(function(e,t,o){"/"===e.url[0]&&o.setRequestHeader("X-CSRF-Token",n('meta[name="csrf-token"]').attr("content"));});},j=function(e,t){null==t&&(t={});var o={topOffset:20,duration:500},r=n.extend({},o,t);n("html, body").animate({scrollTop:e.offset().top-r.topOffset},r.duration);},k=function(e){var n=window.location.href,t=new RegExp("[?&]"+e+"=([^&#]*)","i"),o=t.exec(n);return o?o[1]:null},x=function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},S=function(e,n){return r.controllerName===e&&r.controllerAction===n},F=function(){return window.location.search},R=function(){return document.cookie},T=function(e){for(var n=e+"=",t=decodeURIComponent(document.cookie),o=t.split(";"),r=0;r<o.length;){for(var i=o[r];" "===i.charAt(0);)i=i.substring(1);if(0===i.indexOf(n))return i.substring(n.length,i.length);r++;}return""},O=function(e,n,t){var o=Number(new Date)+(n||2e3);return t=t||100, new i(function n(r,i){var a=e();a?r(a):Number(new Date)<o?setTimeout(n,t,r,i):i(new Error("timed out for "+e+": "+arguments));})},N=function(){n("html, body").css({overflow:"hidden",height:"100%"});},M=function(){n("html, body").css({overflow:"auto",height:"auto"});},A=function(){return null!=r.user&&Object.keys(r.user).length>0},I=function(){return!r.userCourse||!(!r.userCourse||null!==r.userCourse.progress)},q=function(){return"courses"===r.controllerName&&"show_enrolled"===r.controllerAction},W=function(){return"accounts"===r.controllerName&&"email_configurations"===r.controllerAction},D=function(e){return F().indexOf(e)>-1},B=function(e){document.cookie="requested_path="+e+"; path=/";},H=function(e,n){null==n&&(n=0);var t=parseInt(n);isNaN(t)&&(t=0), t>0?setTimeout(function(){return window.location.href=e},n):window.location.href=e;},L=function(e,t){null==t&&(t={});try{window.gon.serverEventsEnabled&&n.post("/api/v1/analytics/log_event",{event:{name:e,properties:t}});}catch(e){}};"function"==typeof undefined&&undefined.amd?console.log("do nothing"):(window.MC=window.MC||{}, window.MC.utilities={getCurrentChapter:s,getWistiaOptions:f,setWistiaSource:v,createBrightcovePlayer:P,setCSRFToken:E,smoothScroll:j,urlParamValue:k,escapeHtml:x,onPage:S,getDocumentCookie:R,getValueFromCookie:T,poll:O,disableScrolling:N,enableScrolling:M}, window.MC.isLoggedIn=A, window.MC.userHasNotWatchedLesson=I, window.MC.onShowEnrolledPage=q, window.MC.onEmailSettingsPage=W, window.MC.hasParam=D, window.MC.setRequestedPath=B, window.MC.redirectWithOptionalDelay=H, window.MC.sendAnalyticsEvent=L), e.getCurrentChapter=s, e.getWistiaOptions=f, e.setWistiaSource=v, e.createBrightcovePlayer=P, e.setCSRFToken=E, e.smoothScroll=j, e.urlParamValue=k, e.escapeHtml=x, e.onPage=S, e.getDocumentCookie=R, e.getValueFromCookie=T, e.poll=O, e.disableScrolling=N, e.enableScrolling=M, e.isLoggedIn=A, e.userHasNotWatchedLesson=I, e.onShowEnrolledPage=q, e.onEmailSettingsPage=W, e.hasParam=D, e.setRequestedPath=B, e.redirectWithOptionalDelay=H, e.sendAnalyticsEvent=L, Object.defineProperty(e,"__esModule",{value:!0});});
});

var utilities = unwrapExports(bundle$1);

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _Locations;

// import { isLoggedIn, getCurrentChapter } from '@masterclass/mc-utilities'

var _initialized = false;
var _enabled = false;
var isLoggedIn = utilities.isLoggedIn;
var getCurrentChapter = utilities.getCurrentChapter;

// In alphabetical order

var EventTypes = {
  ASSIGNMENT_COMPLETION: 'Assignment Completed',
  AUTO_LOGIN: 'Auto Login',
  COURSE_BANNER_CLICK: 'Course Banner Click',
  CART: 'Cart',
  CART_EMAIL_CAPTURE: 'Cart email capture',
  CART_FIELD_CLICK: 'Clicked Cart Field',
  CHECKOUT: 'Checkout',
  COMMENT: 'Comment',
  COMMENT_ACTION: 'Comment Action',
  COMPLETED_ORDER: 'Completed Order',
  COURSE_MARKETING: 'Course Marketing',
  COURSE_MARKETING_CLICK: 'Course Marketing Click',
  CLASS_OVERVIEW_CLICK: 'Class Overview Click',
  CLASS_ENROLLMENT_SUBSCRIPTION: 'Class Enrollment (Subscription)',
  CYP_MODAL_SHOW: 'Complete your profile show',
  CYP_MODAL_SUBMIT: 'Complete your profile submit',
  EXPERIMENT_VIEWED: 'Experiment Viewed',
  GIFTING_LANDING_CLICK: 'Gifting Landing Page Click',
  GIFTING_CLASS_OPTIONS: 'Gifting Class Options',
  HOME: 'Home',
  HOME_CLICK: 'Homepage Click',
  HUB_LESSON_PLAN: 'Hub-Block Lesson Plan Click',
  LESSON: 'Lesson',
  LESSON_COMPLETION: 'Lesson Completion',
  LESSON_PLAN: 'Lesson Plan',
  LESSON_RATING_GIVEN: 'Lesson Rated',
  LESSON_RESOURCE_CLICK: 'Clicked Lesson Resource',
  LESSON_RESOURCE_VIEW: 'Lesson Resource',
  LESSON_VIEW_CLICK: 'Lesson View Click',
  LESSON_VIEW_SCROLLED: 'Lesson View Scrolled',
  MODULE_COMPLETION: 'Module Completion',
  NEXT_LESSON: 'Next Lesson',
  OFFICE_HOURS_CLICK: 'Office Hours Click',
  PURCHASE_CLICK: 'Purchase Click',
  PURCHASE_OPTIONS_CLICK: 'Purchase Options Click',
  PURCHASED_CLASS: 'Purchased Class',
  SEGMENT_LOADED: 'Segment Loaded',
  SIGNED_IN: 'Signed In',
  SIGNED_UP: 'Signed Up',
  SUBMIT_NPS_COMMENT: 'NPS Feedback Given',
  SUBMIT_NPS_SCORE: 'NPS Rating Given',
  SWITCH_LESSON: 'Switch Lesson',
  VIEWED_NPS_SURVEY: 'NPS Survey Viewed',
  VISIT_OFFICE_HOURS: 'Visit Office Hours Page',
  WORKBOOK_CLICK: 'Workbook Click',
  WQ_SHOW: 'WQ show',
  WQ_SUBMIT: 'WQ submit'
};

var Locations = (_Locations = {
  EMPTY: '',
  HERO: 'hero',
  BODY: 'body',
  STICKY: 'sticky',
  VIDEO: 'video',
  ENROLLED_COURSES: 'enrolled-course-banner',
  OTHER_CLASSES: 'other-classes-banner',
  RECOMMENDED_SECTION: 'recommended-section',
  BANNER: 'banner',
  LESSON_PAGE: 'lesson-page',
  LESSON_PLAN: 'lesson-plan',
  LESSON_THUMBNAIL: 'lesson-thumbnail',
  RESOURCES: 'class-resources',
  LEARN_MORE_CTA: 'learn-more',
  END_SCREEN: 'end-screen'
}, defineProperty(_Locations, 'VIDEO', 'video'), defineProperty(_Locations, 'VIDEO_CAROUSEL', 'video-carousel'), defineProperty(_Locations, 'VIDEO_TRAILER', 'video-trailer'), defineProperty(_Locations, 'TILE', 'tile'), defineProperty(_Locations, 'SUB_NAV', 'sub-nav'), defineProperty(_Locations, 'COMMUNITY', 'community'), defineProperty(_Locations, 'CLASS_ANNOUNCEMENTS', 'class-announcements'), defineProperty(_Locations, 'OFFICE_HOURS', 'office-hours'), defineProperty(_Locations, 'COURSE_MARKETING', 'course-marketing'), defineProperty(_Locations, 'INCENTIVES', 'incentives'), _Locations);

var Actions = {
  FAQ: 'faq',
  COMMUNITY: 'community',
  GIFT: 'gift',
  TILE: 'select-tile',
  TRAILER: 'play-trailer',
  PLAY_SELECT: 'play-select',
  PLAY_LESSON: 'play-lesson',
  PRIMARY: 'primary',
  DOWNLOAD_PDF: 'download-pdf',
  VIEW_ASSIGNMENT: 'view-assignment',
  LIKE: 'like',
  UNLIKE: 'unlike',
  COMMENT: 'comment',
  COMMENT_REPLY: 'reply',
  COMPLETE_MODULE: 'complete-module',
  LESSON_PLAN: 'lesson-plan',
  WORKBOOK: 'workbook',
  OFFICE_HOURS: 'office-hours',
  TAKE_SURVEY: 'take-survey',
  BROWSE_CLASSES: 'browse-classes',
  BLOG: 'blog',
  EXPAND_LESSON: 'expand-lesson-plan',
  VISIT_THE_HUB: 'visit-the-hub',
  VISIT_OFFICE_HOURS: 'visit-office-hours',
  HUB_TOPIC: 'hub-topic',
  CLASS_CTA: 'class-announcements-cta',
  VIEW_DETAILS: 'view-details',
  PROMO_CTA: 'promo-cta',
  SHOW_LESSONS: 'show-lessons',
  PRE_ENROLL_INCENTIVES: 'view-incentives'
};

var Type = {
  WORKBOOK: 'workbook',
  ASSIGNMENT: 'assignment',
  OTHER_RESOURCE: 'other-resource',
  PROMOTION: 'promotion'
};

var PageViewEvents = {
  'carts#show': { name: 'Cart', type: 'cart' },
  'pages#root': { name: 'Home', type: 'home' },
  'courses#show_enrolled': { name: 'Class Overview', type: 'cm' },
  'courses#show': { name: 'Course Marketing', type: 'cm' },
  'courses#office_hours_live': { name: 'Office Hours Live', type: 'cm' },
  'chapters#watch': { name: 'Lesson', type: 'lesson_video' },
  'pages#marketing_video': {
    name: 'Course Marketing',
    type: 'video_landing_page'
  },
  'cm_mobile_pages#show': {
    name: 'Course Marketing',
    type: 'cm_mobile_page'
  },
  'students#show': { name: 'User Profile' },
  'gifting_landing_pages#show': {
    name: 'Gifting Landing',
    type: 'gifting_landing'
  },
  'pages#ap_landing': { name: 'AAP Landing', type: 'aap_landing_page' },
  'landing_pages#show': { name: 'Gifting Landing', type: 'gifting_landing' }
};

var intercomClient = function () {
  return {
    execute: function execute(event, properties) {
      if (properties == null) {
        properties = {};
      }
      if (this.isIntercomLoaded()) {
        window.Intercom(event, properties);
      }
    },

    reboot: function reboot() {
      if (window.Intercom) {
        var id = void 0;
        window.Intercom('shutdown');
        analytics.user().reset();
        id = setInterval(function () {
          analytics.page();
          if (window.Intercom('getVisitorId')) {
            clearInterval(id);
          }
        }, 500);
      }
    },

    isIntercomLoaded: function isIntercomLoaded() {
      return !!window.Intercom;
    },

    loaded: function loaded() {
      if (!isLoggedIn() && this.isIntercomLoaded() && analytics.user().traits().email) {
        this.reboot();
      }
    }
  };
}();

var track = function track(event) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (bundle.user) {
    properties.subscription_active = bundle.user.active_annual_pass;
  }
  if (bundle.fbPixelEmbedEnabled) {
    if (event === 'Purchased Class') {
      var newProperties = Object.assign({}, properties, { currency: 'USD', value: properties.revenue });
      window.fbq('track', 'Purchase', newProperties);
    } else if (event === 'Purchase Click') {
      window.fbq('track', 'AddToCart', properties);
    } else {
      window.fbq('trackCustom', event, properties);
    }
  }

  if (isEnabled()) {
    analytics.track(event, properties, options);
  }
};

var page = function page(event) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (bundle.user) {
    properties.subscription_active = bundle.user.active_annual_pass;
  }
  if (isEnabled()) {
    analytics.page(event, properties, options);
  }
};

var identify = function identify(userId) {
  var traits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (isEnabled()) {
    analytics.identify(userId, traits);
  }
};

var isInitialized = function isInitialized() {
  return _initialized === true;
};

var isEnabled = function isEnabled() {
  return _enabled === true;
}; // # Make this configurable via gon

var ready = function ready() {
  if (!isInitialized()) {
    _initialize();
  }
};

// # Private
var _loadPageWiseProperties = function _loadPageWiseProperties(pageEvent, properties) {
  if (pageEvent.type === 'cm') {
    properties.class = bundle.course.slug;
    if (bundle.browserMobile) {
      properties.cm_mobile = true;
    }

    if (bundle.course.currency && bundle.course.currency.toLowerCase() !== 'usd') {
      properties.price_variant = bundle.course.currency.toLowerCase();
    }
  } else if (pageEvent.type === 'lesson_video') {
    var chapter = getCurrentChapter();
    var courseSlug = bundle.course ? bundle.course.slug : '';
    properties.class = courseSlug;
    properties.chapter = chapter;
  } else if (pageEvent.type === 'video_landing_page') {
    properties.class = bundle.course.slug;
    properties.type = Locations.VIDEO;
  } else if (pageEvent.type === 'cm_mobile_page') {
    // TODO dead code?
    properties.class = bundle.course.slug;
    properties.cm_mobile = true;
    if (bundle.currency && bundle.currency.toLowerCase() !== 'usd') {
      properties.price_variant = bundle.currency.toLowerCase();
    }
  } else if (pageEvent.type === 'gifting_landing') {
    if (bundle.currency && bundle.currency.toLowerCase() !== 'usd') {
      properties.price_variant = bundle.currency.toLowerCase();
    }
    if (bundle.categorySlug) {
      properties.category_type = bundle.categorySlug;
    }
  }
};

var _loadAnalyticsJs = function _loadAnalyticsJs() {
  if (typeof analytics !== 'undefined' && analytics !== null && bundle.segmentEnabled && bundle.segmentKey) {
    var name = void 0,
        pageName = void 0;
    analytics.load(bundle.segmentKey);
    _initialized = true;
    _enabled = true;
    if (isLoggedIn()) {
      var properties = {
        email: bundle.user.email,
        email_token: bundle.user.email_token,
        unsubscribed_from_emails: bundle.user.unsub_from_intercom_emails,
        enrolled_courses: bundle.user.enrolled_courses
      };

      if (bundle.experiments) {
        for (name in bundle.experiments) {
          var value = bundle.experiments[name];
          if (value !== null) {
            properties.experiment_name = name;
            properties.variation_name = value;
          }
        }
      }

      identify(bundle.user.id, properties);
    }

    var pageEventProperties = {};
    if (bundle.controllerName && bundle.controllerAction) {
      var pageKey = bundle.controllerName + '#' + bundle.controllerAction;
      var pageEvent = PageViewEvents[pageKey];
      if (pageEvent) {
        _loadPageWiseProperties(pageEvent, pageEventProperties);
        pageName = pageEvent.name;
      }
    }
    page(pageName, pageEventProperties);
  }
};

var _initialize = function _initialize() {
  if (typeof analytics !== 'undefined' && analytics !== null) {
    _loadAnalyticsJs();
  } else {
    setTimeout(_loadAnalyticsJs, 1000);
  }
};

if (typeof define === 'function' && define.amd) {
  // do nothing
} else {
  window.MC = window.MC || {};
  window.MC.segment = {
    EventTypes: EventTypes,
    Locations: Locations,
    Actions: Actions,
    Type: Type,
    intercomClient: intercomClient,
    track: track,
    page: page,
    identify: identify,
    isInitialized: isInitialized,
    isEnabled: isEnabled,
    ready: ready
  };
}

// test your JS code here for index.html

exports.EventTypes = EventTypes;
exports.Locations = Locations;
exports.Actions = Actions;
exports.Type = Type;
exports.intercomClient = intercomClient;
exports.track = track;
exports.page = page;
exports.identify = identify;
exports.isInitialized = isInitialized;
exports.isEnabled = isEnabled;
exports.ready = ready;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bundle.js.map
