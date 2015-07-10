'use strict';

/* Striker Alpha Services */

/*service for the pilot ability index */
var appServices  = angular.module('appServices', ['ngResource']);

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

/* Service to gather the data from Abilites JSON */
appServices.factory('Abilities', ['$resource', 
  function($resource){
    return $resource('data/pilotAbilities.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);
  
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

/*service for the Formation index */
appServices.factory('Formations', ['$resource', 
  function($resource){
    return $resource('data/formations.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);
  
/*service for passing Formation info */
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


