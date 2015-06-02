(function() {
    'use strict';

    /* Controllers */

    angular
        .module('md2Controllers')
        .controller('StudentsController', ['$rootScope', '$scope', studentController]);

    function studentController($rootScope, $scope) {

        // de view heeft ook toegang tot het $scope object
        // $scope is het centrale object tussen je view (HTML) en je controller
        $scope.selectedStudent = "";

        // we geven het scope object een array met namen
        $scope.students = ["Mike", "Lien", "Steven", "Isabelle", "Rick"];

        // de HTML mag bij deze functie omdat onze HTML ook bij $scope mag
        $scope.selectStudent = function(student){
            $scope.selectedStudent = student;
        }

    }

})();