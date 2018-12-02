'use strict';

angular.
  module('jobsearchApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/jobs', {
          template: '<job-list></job-list>'
        }).
        when('/jobs/:uuid', {
          template: '<job-detail></job-detail>'
        }).
        otherwise('/jobs');
    }
  ]);
