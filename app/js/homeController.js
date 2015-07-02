'use strict';

/* Home Page Controller */

SA_app_Ctrls.controller('HomeControl', ['$scope','CalcModeService', function($scope, CalcModeService){
  //a cleanish way of making dynamic text
  $scope.toolChoice = 0;
  
  $scope.toolMode = {};
  
  $scope.toolText = {
    basic : {
      title :  "Basic Range Attacks",
      desc : "the basic range attack calculator. This version is for most users and beginners.",
      mode : "calc/basic",
      opt : [true,true,true,true,true,false,true,true,true,true,true,false,false,false,false]
    },
    adv : {
      title : "Adv. Range Attacks",
      desc : "The more advanced version covers weather factors, pilots skills, etc.",
      mode : "calc/adv",
      opt : [true,true,true,true,true,true,true,true,true,true,true,false,false,false,false]
    },
    ind : {
      title : "Indirect Fire Attacks",
      desc : "Use this for determining the Target Number for Indirect Fire attacks.",
      mode : "calc/ind",
      opt : [true,true,true,true,true,true,true,true,true,true,true,false,true,true,true]
    },
    art : {
      title : "Artillery Attacks",
      desc : "Find Target Numbers for Artillery Attacks.",
      mode : "calc/art",
      opt : []
    },
    mel : {
      title : "Melee Attacks",
      desc : "Find Target Numbers for Melee Attacks with this.",
      mode : "calc/mel",
      opt : [true,true,false,true,true,false,true,true,true,false,false,true,false,false,false]
    },    
    pilotSkill : {
      title : "Adjust Pilot Skill",
      desc  : "Find the Point Value(PV) cost for a Unit that has a Pilot Skill rating other than 4.",
      mode  : "psk"
    } 
  };
  
  $scope.$watch('[toolChoice]', function(){
    switch($scope.toolChoice){
      case 0:
        $scope.toolMode = $scope.toolText['basic'];
        break;
      case 1:
        $scope.toolMode = $scope.toolText['adv'];
        break;
      case 2:
        $scope.toolMode = $scope.toolText['ind'];
        break;
      case 3:
        $scope.toolMode = $scope.toolText['art'];
        break;
      case 4:
        $scope.toolMode = $scope.toolText['mel'];
        break;
      case 5:
        $scope.toolMode = $scope.toolText['pilotSkill'];
        break;
    }
    CalcModeService.setMode($scope.toolMode);
    
  }, true);
  
  $scope.handleCalcChoice = function(){
    
    window.location.href = "#/" + $scope.toolMode.mode;
  };
  
}]);