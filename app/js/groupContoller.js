'use strict';
/* Striker Alpha Pilot Skill Index*/

SA_app_Ctrls.controller('grpControl', ['$scope', 'Groups', 'GroupInfoService',  
  function($scope, Groups, GroupInfoService){
    $scope.grpList = Groups.query();
    console.log($scope.grpList);
    
    $scope.selectGroup = function(group){
      GroupInfoService.setGroup(group);
      window.location.href = "#/abl/"+group.Title;
    };
}]);


SA_app_Ctrls.controller('grpInfoControl', ['$scope', 'GroupInfoService',  
  function($scope, GroupInfoService){
    $scope.formation = GroupInfoService.getGroup();
}]);