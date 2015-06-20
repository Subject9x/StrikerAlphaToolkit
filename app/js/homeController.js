'use strict';

/* Home Page Controller */

SA_app_Ctrls.controller('HomeControl', ['$scope','CalcModeService', function($scope, CalcModeService){
  $scope.calcChoice = 0;
  
  $scope.calcMode = {};
  
  //a cleanish way of making dynamic text
  $scope.calcText = {
    basic : {
      title :  "Basic Range Attacks",
      desc : "the basic range attack calculator. This version is for most users and beginners.",
      mode : "basic",
      opt : [true,true,true,true,true,false,true,true,true,true,true,false,false,false,false]
    },
    adv : {
      title : "Adv. Range Attacks",
      desc : "The more advanced version covers weather factors, pilots skills, etc.",
      mode : "adv",
      opt : [true,true,true,true,true,true,true,true,true,true,true,false,false,false,false]
    },
    ind : {
      title : "Indirect Fire Attacks",
      desc : "Use this for determining the Target Number for Indirect Fire attacks.",
      mode : "ind",
      opt : [true,true,true,true,true,true,true,true,true,true,true,false,true,true,true]
    },
    art : {
      title : "Artillery Attacks",
      desc : "Find Target Numbers for Artillery Attacks.",
      mode : "art",
      opt : []
    },
    mel : {
      title : "Melee Attacks",
      desc : "Find Target Numbers for Melee Attacks with this.",
      mode : "mel",
      opt : [true,true,false,true,true,false,true,true,true,false,false,true,false,false,false]
    }
  };
  
  $scope.$watch('[calcChoice]', function(){
    switch($scope.calcChoice){
      case 0:
        $scope.calcMode = $scope.calcText['basic'];
        break;
      case 1:
        $scope.calcMode = $scope.calcText['adv'];
        break;
      case 2:
        $scope.calcMode = $scope.calcText['ind'];
        break;
      case 3:
        $scope.calcMode = $scope.calcText['art'];
        break;
      case 4:
        $scope.calcMode = $scope.calcText['mel'];
        break;
    }
    CalcModeService.setMode($scope.calcMode);
    
  }, true);
  
  $scope.handleCalcChoice = function(){
    window.location.href = "#/calc" + $scope.calcMode.mode;
  };
}]);