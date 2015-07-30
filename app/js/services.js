'use strict';

/* Striker Alpha Services */
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

/*service for the Group Formation data index */
appServices.factory('Formations', ['$resource', 
  function($resource){
    return $resource('data/formations.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);
  
/*service for passing chosen SubGroup to FormationInfo page */
SA_app.service('BattleGroupService', function(){
  var selectedGroup = {}
  return {
    setGroup: function (value) {
        selectedGroup = value;
    },
    getGroup: function () {
        return selectedGroup;
    }
  }
});

/*service for grabbing the proper */
appServices.factory('GetSubForms', ['$resource', 
  function($resource){
    return $resource('data/:formId.json', {}, {
      query: {method:'GET', params:{formId:'form'}, isArray:true}
    });
  }]);
