'use strict';
/* Striker Alpha Pilot Skill Index*/

SA_app_Ctrls.controller('ablControl', ['$scope', 'Abilities', 'AbilityInfoService',  
  function($scope, Abilities, AbilityInfoService){
    $scope.ablList = Abilities.query();
    console.log($scope.ablList);
    
    $scope.selectAbility = function(ability){
      AbilityInfoService.setAbility(ability);
      window.location.href = "#/abl/"+ability.Title;
    };
}]);


SA_app_Ctrls.controller('ablInfoControl', ['$scope', 'AbilityInfoService',  
  function($scope, AbilityInfoService){
    $scope.ability = AbilityInfoService.getAbility();
}]);