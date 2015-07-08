'use strict';

/* Striker Alpha Services */

/*service for the pilot ability index */
var SA_app_AblServ  = angular.module('SA_app_AblServ', ['ngResource']);

SA_app_AblServ.factory('Abilities', ['$resource', 
  function($resource){
    return $resource('indices/pilotAbilities.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);
  
/* service for the mode of the calculator */
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

/*service for passing chosen pilot ability object to info page */
SA_app.service('AbilityInfoService', function(){
  var pilotAbility = {}
  return {
    setAbility: function (value) {
        pilotAbility = value;
    },
    getAbility: function () {
        return pilotAbility;
    }
  }
});

/*service for passing chosen pilot ability object to info page */
SA_app.service('GroupInfoService', function(){
  var group = {}
  return {
    setGroup: function (value) {
        group = value;
    },
    getGroup: function () {
        return group;
    }
  }
});


