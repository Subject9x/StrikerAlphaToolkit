'use strict';

/* Striker Alpha App main */

var SA_app = angular.module('SA_app', [
  'ui.bootstrap',
  'ngRoute',
  'SA_app_Ctrls',
  'SA_app_AblServ',
  'AblFilters'
]);

var SA_app_Ctrls = angular.module('SA_app_Ctrls', []);

SA_app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/calc/:type', {
        templateUrl : 'partials/attackCalc.html',
        controller  : 'CalcControl'
      }).when('/home', {
        templateUrl : 'partials/home.html',
        controller  : 'HomeControl'
      }).
      when('/psk',{
        templateUrl : 'partials/pilotSkill.html',
        controller  : 'PSAControl'
      }).
      when('/abl',{
        templateUrl : 'partials/abilityIndex.html',
        controller  : 'ablControl'
      }).
      when('/abl/:type',{
        templateUrl : 'partials/abilityInfo.html',
        controller  : 'ablInfoControl'
      }).
      when('/grp',{
        templateUrl : 'partials/groundFormIndex.html',
        controller  : 'grpControl'
      }).
      when('/grp/:type',{
        templateUrl : 'partials/groundFormInfo.html',
        controller  : 'grpInfoControl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }
]);