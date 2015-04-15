(function() {
  'use strict';

  angular.module('transitbus.services')
    .factory('analytics', analytics);

  function analytics(constant) {

    var $analytics;

    // Public API here
    var service = {
      initialize: initialize,
      trackView: trackView,
      trackAddFavoriteEvent: trackAddFavoriteEvent,
      trackRemoveFavoriteEvent: trackRemoveFavoriteEvent,
      trackShowRouteMapEvent: trackShowRouteMapEvent,
      trackShowTimetableEvent: trackShowTimetableEvent,
      trackEvent: trackEvent,
      trackException: trackException
    };

    return service;

    ////////////

    function initialize() {
      function waitForAnalytics() {
        if (navigator.analytics) {
          $analytics = navigator.analytics;
          $analytics.setTrackingId(constant.GA.trackingId);
          trackView('initialize');
        } else {
          setTimeout(function() {
            waitForAnalytics();
          }, 250);
        }
      };
      waitForAnalytics();
    }

    function trackAddFavoriteEvent(stop) {
      trackEvent('favorite', 'add', stop.name, 1);
    }

    function trackRemoveFavoriteEvent(stop) {
      trackEvent('favorite', 'remove', stop.name, 1);
    }

    function trackShowRouteMapEvent() {
      trackEvent('routeMap', 'show', void 0, 1);
    }

    function trackShowTimetableEvent(label) {
      trackEvent('timetable', 'show', label, 1);
    }

    function trackException(message) {
      $analytics.sendException(message, true);
    }

    function trackView(viewName) {
      if ($analytics) {
        $analytics.sendAppView(viewName);
      }
    }

    /*
    https://developers.google.com/analytics/devguides/collection/analyticsjs/events
    ex) ga('send', 'event', 'button', 'click', 'nav buttons', 4);
    */
    function trackEvent(category, action, label, value) {
      // default
      value = value || 1;
      if ($analytics) {
        $analytics.sendEvent(category, action, label, value);
      }
    }

  }

})();