'use strict';

/* Striker Alpha Services */

SA_app.service('CalcModeService', function () {

  var calcMode = {};

  return {
      setMode: function (value) {
          calcMode = value;
      },
      getMode: function () {
          return calcMode;
      }
  }
});