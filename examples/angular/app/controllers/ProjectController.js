(function() {
    'use strict';

    /* Controllers */

    angular
        .module('md2Controllers')
        .controller('StudentsController', ['$rootScope', '$scope', studentController]);

    function studentController($rootScope, $scope) {

        // 1) MVVM property laten zien

        // 2) MVVM array laten zien met ng-repeat en $index en .length

        // 3) MVVM ng-model laten zien en waarde laten zien

        // 4) MVVM array filtering laten zien (filters)

        // 5) MVVM array filtering laten zien (filters)

        // 6) mogen ook objecten zijn

        // 7) later meer :) . Sowieso zou de model nog 'losser' mogen. Controller alleen als doorgeef luik.

    }

})();