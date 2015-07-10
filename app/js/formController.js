'use strict';
/* Striker Alpha Pilot Skill Index*/

SA_app_Ctrls.controller('frmControl', ['$scope', 'Formations', 'GroupInfoService',  
  function($scope, Formations, GroupInfoService){
    $scope.formations = Formations.query();

    $scope.groupRadio = {
      model : 'Assualt'
    }
    $scope.parentForm = 0;
    
    
}]);


SA_app_Ctrls.controller('frmInfoControl', ['$scope', 'GroupInfoService',  
  function($scope, GroupInfoService){
    $scope.formation = GroupInfoService.getGroup();
}]);