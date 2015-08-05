'use strict';
/* Striker Alpha Pilot Skill Index*/

SA_app_Ctrls.controller('ablControl', ['$scope', 'Abilities', 'AbilityInfoService',  
  function($scope, Abilities, AbilityInfoService){
    $scope.ablList = Abilities.query();
    
    $scope.selectAbility = function(ability){
      AbilityInfoService.setAbility(ability);
      var ablTitle = ability.Title.split(' ').join('_')
      window.location.href = "#/abl/"+ablTitle;
    };
}]);


SA_app_Ctrls.controller('ablInfoControl', ['$scope', 'AbilityInfoService',  
  function($scope, AbilityInfoService){
    $scope.ability = AbilityInfoService.getAbility();
}]);