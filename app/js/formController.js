'use strict';
/* Striker Alpha Pilot Skill Index*/

SA_app_Ctrls.controller('frmControl', ['$scope', 'Formations', 'BattleGroupService',
  function($scope, Formations, BattleGroupService){
    $scope.combatGroups = Formations.query();

    $scope.radios = {
      parent  : 0,
      grpType : 'Assualt',
      typeSelect: {},
      subType : ''
    }
    
    $scope.$watch('[radios.grpType]', function(){
      for(var cbt in $scope.combatGroups){
        if($scope.combatGroups.hasOwnProperty(cbt)){
          var id = $scope.combatGroups[cbt].id;
          if(id == $scope.radios.grpType){
            $scope.radios.typeSelect = $scope.combatGroups[cbt];
          }
        }
      }
    }, true);
    
    $scope.selectSubGroup = function(subType){
      var chosen = {};
      chosen.file = $scope.radios.typeSelect.file;
      chosen.variant = subType;
      BattleGroupService.setGroup(chosen);
      window.location.href = "#/frm/"+chosen.subType;
    }
    
}]);

SA_app_Ctrls.controller('frmInfoControl', ['$scope', 'BattleGroupService','GetSubForms',
  function($scope, BattleGroupService, GetSubForms){
    $scope.incoming = BattleGroupService.getGroup();
    $scope.subGroupObjList = GetSubForms.query({formId: $scope.incoming.file}, function(form) {
      for(var grp in form){
        if(form.hasOwnProperty(grp)){
          var group  = form[grp];
          if($scope.incoming.variant == group.id){
            $scope.chosenSubGroup = group;
          }
        }
      }
    });

}]);