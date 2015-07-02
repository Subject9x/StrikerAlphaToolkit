'use strict';

/* Pilot Skill Adjuster Controller */
SA_app_Ctrls.controller('PSAControl', ['$scope', function($scope){

  $scope.unitCost = {
    start : 0,
    inc   : 0,
    dec   : 0,
    adj   : 0
  };
  
  $scope.pilotSkill = {
    init  : 4,
    user  : 4
  };
 
   $scope.$watch('[pilotSkill.user]', function(){
    var ps_init = $scope.pilotSkill.init;
    var ps_user = $scope.pilotSkill.user;
    var ps_diff = 0;
    if(ps_init > ps_user){
      ps_diff = ps_init - ps_user;
      $scope.unitCost.adj = $scope.unitCost.start + (ps_diff*$scope.unitCost.inc);
    }else if(ps_init < ps_user){
      ps_diff = ps_user - ps_init;
      $scope.unitCost.adj = $scope.unitCost.start - (ps_diff*$scope.unitCost.dec);
    }else if (ps_init == ps_user){
       $scope.unitCost.adj = $scope.unitCost.start;
    }
  }, true);
  
  $scope.$watch('[unitCost.start]', function(){
    $scope.unitCost.dec = Math.round($scope.unitCost.start / 10);
    $scope.unitCost.inc = Math.round($scope.unitCost.start / 5);
  },true);
 
  $scope.alterPilotSkill = function(flag){
    if(flag){
      $scope.pilotSkill.user--;
    }else{
      $scope.pilotSkill.user++;
    }
    if($scope.pilotSkill.user > 7){
      $scope.pilotSkill.user = 7;
    }else if($scope.pilotSkill.user < 0){
      $scope.pilotSkill.user = 0;
    }
  };
  

  
  
}]);