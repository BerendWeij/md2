(function() {
    'use strict';

    /* Controllers */

    angular
        .module('md2Controllers')
        .controller('StudentsController', ['$rootScope', '$scope', '$http', studentController]);

    function studentController($rootScope, $scope, $http) {

        $scope.showBar = true;
        $scope.editMode = false;

        // de view heeft ook toegang tot het $scope object
        // $scope is het centrale object tussen je view (HTML) en je controller
        $scope.selectedStudent = "";

        // we geven het scope object een array met namen
        $scope.students = [{name:"Mike"}, {name:"Lien"}, {name:"Steven"}, {name:"Isabelle"}, {name:"Rick"}];

        // de HTML mag bij deze functie omdat onze HTML ook bij $scope mag
        $scope.selectStudent = function(student){
            $scope.selectedStudent = student;
        }

        // 1) -- ng-if - user profile, false, true

        // 2) -- ng-show - user profile

        // 3) -- ng animate - user profile binnenhalen, script, module, css

        // 4) -- ook voor data die in de array wijzigt

        // 5) -- ng class - edit mode andere class

        // 6) -- filter date (ook translate, etc.)
        $scope.currentDate = new Date();

        // 7) -- http json ophalen
        $http.get("/md2/examples/angular/data/trainstations.json").then(function(result){
            $scope.students = result.data;
        });


        // @ voor de 'gevorderde' onderons: maak een double-click directive
        // @ nog wat interessanter: maak een prompt() directive. Als je klikt op een knop, dat je eerst een invoer laat zien (window.prompt()) en vervolgens de ingevoerde data opslaan in de ng-model



    }

})();