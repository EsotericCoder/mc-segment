import gon from '@masterclass/mc-browser-settings'
import utilities from '@masterclass/mc-utilities'
// import { isLoggedIn, getCurrentChapter } from '@masterclass/mc-utilities'

let _initialized = false
let _enabled = false
const { isLoggedIn, getCurrentChapter } = utilities

// In alphabetical order
export const EventTypes = {
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
  WQ_SUBMIT: 'WQ submit',
}

export const Locations = {
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
  END_SCREEN: 'end-screen',
  VIDEO: 'video',
  VIDEO_CAROUSEL: 'video-carousel',
  VIDEO_TRAILER: 'video-trailer',
  TILE: 'tile',
  SUB_NAV: 'sub-nav',
  COMMUNITY: 'community',
  CLASS_ANNOUNCEMENTS: 'class-announcements',
  OFFICE_HOURS: 'office-hours',
  COURSE_MARKETING: 'course-marketing',
  INCENTIVES: 'incentives',
}

export const Actions = {
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
  PRE_ENROLL_INCENTIVES: 'view-incentives',
}

export const Type = {
  WORKBOOK: 'workbook',
  ASSIGNMENT: 'assignment',
  OTHER_RESOURCE: 'other-resource',
  PROMOTION: 'promotion',
}

const PageViewEvents = {
  'carts#show': { name: 'Cart', type: 'cart' },
  'pages#root': { name: 'Home', type: 'home' },
  'courses#show_enrolled': { name: 'Class Overview', type: 'cm' },
  'courses#show': { name: 'Course Marketing', type: 'cm' },
  'courses#office_hours_live': { name: 'Office Hours Live', type: 'cm' },
  'chapters#watch': { name: 'Lesson', type: 'lesson_video' },
  'pages#marketing_video': {
    name: 'Course Marketing',
    type: 'video_landing_page',
  },
  'cm_mobile_pages#show': {
    name: 'Course Marketing',
    type: 'cm_mobile_page',
  },
  'students#show': { name: 'User Profile' },
  'gifting_landing_pages#show': {
    name: 'Gifting Landing',
    type: 'gifting_landing',
  },
  'pages#ap_landing': { name: 'AAP Landing', type: 'aap_landing_page' },
  'landing_pages#show': { name: 'Gifting Landing', type: 'gifting_landing' },
}

export const intercomClient = (function () {
  return {
    execute: function (event, properties) {
      if (properties == null) {
        properties = {}
      }
      if (this.isIntercomLoaded()) {
        window.Intercom(event, properties)
      }
    },

    reboot: function () {
      if (window.Intercom) {
        let id
        window.Intercom('shutdown')
        analytics.user().reset()
        id = setInterval(() => {
          analytics.page()
          if (window.Intercom('getVisitorId')) {
            clearInterval(id)
          }
        }, 500)
      }
    },

    isIntercomLoaded: function () {
      return !!window.Intercom
    },

    loaded: function () {
      if (
        !isLoggedIn() &&
        this.isIntercomLoaded() &&
        analytics.user().traits().email
      ) {
        this.reboot()
      }
    },
  }
}())

export const track = function (event, properties = {}, options = {}) {
  if (gon.user) {
    properties.subscription_active = gon.user.active_annual_pass
  }
  if (gon.fbPixelEmbedEnabled) {
    if (event === 'Purchased Class') {
      const newProperties = Object.assign({}, properties, { currency: 'USD', value: properties.revenue })
      window.fbq('track', 'Purchase', newProperties)
    } else if (event === 'Purchase Click') {
      window.fbq('track', 'AddToCart', properties)
    } else {
      window.fbq('trackCustom', event, properties)
    }
  }

  if (isEnabled()) {
    analytics.track(event, properties, options)
  }
}

export const page = function (event, properties = {}, options = {}) {
  if (gon.user) {
    properties.subscription_active = gon.user.active_annual_pass
  }
  if (isEnabled()) {
    analytics.page(event, properties, options)
  }
}

export const identify = function (userId, traits = {}) {
  if (isEnabled()) {
    analytics.identify(userId, traits)
  }
}

// do we need reset?
const reset = function () {
  if (isEnabled()) {
    analytics.reset()
  }
}

export const isInitialized = function () {
  return _initialized === true
}

export const isEnabled = function () {
  return _enabled === true
} // # Make this configurable via gon

export const ready = function () {
  if (!isInitialized()) {
    _initialize()
  }
}

// # Private
const _loadPageWiseProperties = function (pageEvent, properties) {
  if (pageEvent.type === 'cm') {
    properties.class = gon.course.slug
    if (gon.browserMobile) {
      properties.cm_mobile = true
    }

    if (gon.course.currency && gon.course.currency.toLowerCase() !== 'usd') {
      properties.price_variant = gon.course.currency.toLowerCase()
    }
  } else if (pageEvent.type === 'lesson_video') {
    const chapter = getCurrentChapter()
    const courseSlug = gon.course ? gon.course.slug : ''
    properties.class = courseSlug
    properties.chapter = chapter
  } else if (pageEvent.type === 'video_landing_page') {
    properties.class = gon.course.slug
    properties.type = Locations.VIDEO
  } else if (pageEvent.type === 'cm_mobile_page') {
    // TODO dead code?
    properties.class = gon.course.slug
    properties.cm_mobile = true
    if (gon.currency && gon.currency.toLowerCase() !== 'usd') {
      properties.price_variant = gon.currency.toLowerCase()
    }
  } else if (pageEvent.type === 'gifting_landing') {
    if (gon.currency && gon.currency.toLowerCase() !== 'usd') {
      properties.price_variant = gon.currency.toLowerCase()
    }
    if (gon.categorySlug) {
      properties.category_type = gon.categorySlug
    }
  }
}

const _loadAnalyticsJs = function () {
  if (
    typeof analytics !== 'undefined' &&
    analytics !== null &&
    gon.segmentEnabled &&
    gon.segmentKey
  ) {
    let name,
      pageName
    analytics.load(gon.segmentKey)
    _initialized = true
    _enabled = true
    if (isLoggedIn()) {
      const properties = {
        email: gon.user.email,
        email_token: gon.user.email_token,
        unsubscribed_from_emails: gon.user.unsub_from_intercom_emails,
        enrolled_courses: gon.user.enrolled_courses,
      }

      if (gon.experiments) {
        for (name in gon.experiments) {
          const value = gon.experiments[name]
          if (value !== null) {
            properties.experiment_name = name
            properties.variation_name = value
          }
        }
      }

      identify(gon.user.id, properties)
    }

    const pageEventProperties = {}
    if (gon.controllerName && gon.controllerAction) {
      const pageKey = `${gon.controllerName}#${gon.controllerAction}`
      const pageEvent = PageViewEvents[pageKey]
      if (pageEvent) {
        _loadPageWiseProperties(pageEvent, pageEventProperties)
        pageName = pageEvent.name
      }
    }
    page(pageName, pageEventProperties)
  }
}

const _initialize = function () {
  if (typeof analytics !== 'undefined' && analytics !== null) {
    _loadAnalyticsJs()
  } else {
    setTimeout(_loadAnalyticsJs, 1000)
  }
}

if (typeof define === 'function' && define.amd) {
  // do nothing
} else {
  window.MC = window.MC || {}
  window.MC.segment = {
    EventTypes,
    Locations,
    Actions,
    Type,
    intercomClient,
    track,
    page,
    identify,
    isInitialized,
    isEnabled,
    ready,
  }
}
