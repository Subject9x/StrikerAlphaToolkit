'use strict';
/* Striker Alpha Attack Calculator */

SA_app_Ctrls.controller('CalcControl', ['$scope', 'CalcModeService', 
  function($scope, CalcModeService){
    
    $scope.calcMode = CalcModeService.getMode();
    $scope.calcTitle =  $scope.calcMode.title;
   /* Calculator Options */
    $scope.calcOptions = {
      atkSkill_op : false,
      atkJmp_op   : false,          
      atkRng_op   : false,
      tgtImmb_op  : false,
      tgtMod_op   : false,
      tgtStlh_op  : false,
      tgtJmp_op   : false,
      tgtCvr_op   : false,
      tgtPCvr_op  : false,
      atkFC_op    : false,
      atkHt_op    : false,
      
      //MELEE
      atkMelType_op: false,
      
      //INDIRECT
      atkInd_op     : false,
      sptInd_op     : false,
      sptFwdObs_op  : false 
    };
    var pCount = 0;
    for(var prop in $scope.calcOptions){
      if (!$scope.calcOptions.hasOwnProperty(prop)){
        continue;
      }
      $scope.calcOptions[prop] = $scope.calcMode.opt[pCount];
      pCount++;
    }
    
    $scope.result = 0; 
    $scope.odds = 0;
    
    $scope.mods = {
      //BASIC
      atk_Skill : 4,
      atk_Jump  : 0,
      atk_Range : 0,
      tgt_Immb  : 0,
      tgt_Mod   : 0,
      tgt_Stlh  : 0,
      tgt_Jump  : 0,
      tgt_Cover : 0,
      tgt_PrtCvr: 0,
      atk_CritFC: 0,
      atk_Heat  : 0,
      
      //MELEE
      atk_MelType: 0,
      
      //INDIRECT
      atk_ind  : 0,
      spt_ind  : 0,
      spt_FwdObs: 0
    };
    
    $scope.checks = {
      chkAtkJump  : false,
      chkTgtImmb  : false,
      chkTgtJump  : false,
      chkTgtCover : false,
      chkTgtPCvr  : false,
      chkSptAtk   : false,
      chkSptSkl   : false
    }
    
    //interesting note about odds in Btech;
    //one cannot roll lower than 2, so technically 2 = 100% of success without a need to roll
    //the rest of these actual odds were calculated starting at odds of '3' (which includes adding the odds for '2')
    //and then subtracting the result from 100 to get the players _actual_ odds of success
    $scope.oddsTable = [
      0,
      0,
      0,        //2.78,
      5.56,     //,5.56,
      13.89,    //8.33,
      25,       //11.11,
      38.89,    //13.89,
      55.56,      //16.67,
      69.45,     //13.89,
      80.56,     //11.11,
      88.89,     //8.33,
      94.45,     //5.56,
      97.23     //2.78
    ];
    
    $scope.$watch('[checks.chkAtkJump]', function(){
      $scope.mods.atk_Jump = $scope.checks.chkAtkJump ? 2 : 0;
    }, true);
    
    $scope.$watch('[checks.chkSptAtk]', function(){
      $scope.mods.spt_ind = $scope.checks.chkSptAtk ? 2 : 1;
    }, true);
    
   $scope.$watch('[checks.chkSptSkl]', function(){
      $scope.mods.spt_FwdObs = $scope.checks.chkSptSkl ? -2 : 0;
    }, true);
    
    $scope.$watch('[checks.chkTgtImmb]', function(){
      $scope.mods.tgt_Immb = $scope.checks.chkTgtImmb ? -4 : 0;
      if($scope.checks.chkTgtImmb &&  $scope.checks.chkTgtJump){
        $scope.checks.chkTgtJump = false;
      }
      if($scope.checks.chkTgtImmb){
        $scope.mods.tgt_Mod = 0;
      }
    }, true);
    
    $scope.$watch('[checks.chkTgtJump]', function(){
      $scope.mods.tgt_Jump = $scope.checks.chkTgtJump ? 1 : 0;
    }, true);
          
    $scope.$watch('[checks.chkTgtCover]', function(){
      $scope.mods.tgt_Cover = $scope.checks.chkTgtCover ? 2 : 0;
    }, true);
    
    $scope.$watch('[checks.chkTgtPCvr]', function(){
      $scope.mods.tgt_PrtCvr = $scope.checks.chkTgtPCvr ? 1 : 0;
    }, true);
    
    //watches the mods for any changes to allow for real time update of Results row
    $scope.$watch(
      function(){
        return $scope.mods;
      },
      function(){
        var runningTally = 0;
        var actualOdds = 0;
        //find the users total Target Number
        for(var key in $scope.mods){
          if($scope.mods.hasOwnProperty(key)){
            runningTally += $scope.mods[key];
          }
        }

        //calculate dem odds
        for(var i = 0; i < $scope.oddsTable.length; i++){
          if(runningTally == i){
            actualOdds = 100 - $scope.oddsTable[i];
          }
        }
        if(runningTally <= 2){
          actualOdds = 100;
        }else if(runningTally > 12){
          actualOdds = 0;
        }

        $scope.result = runningTally;
        $scope.odds = parseFloat(Math.round(actualOdds * 100) / 100).toFixed(2);
    },true);
    
    //'Temperature' function to change the color of the Results row based on odds of success
    $scope.resultTemp = function(){
      var className = 'label';
      if($scope.result <= 4){
        className += ' label-success';
      }else if(($scope.result > 4)&&($scope.result <= 9)){
        className += ' label-warning';
      }else if(($scope.result > 9)&&($scope.result <= 12)){
        className += ' label-danger';
      }else if($scope.result > 12){
        className += ' label-default';
      };
      return className;
    };  
  }
]);

