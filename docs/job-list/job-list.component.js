'use strict';
// Register `jobList` component, along with its associated controller and template angular.
angular.module('jobList').
  component('jobList', {
    templateUrl: 'job-list/job-list.template.html',
    controller: function JobListController($scope, JobsService) {
      
      
      if ($scope.query !== undefined) {
        JobsService.getJobs().then(function (response) {
          $scope.jobs = response.data;
        });
      }

      $scope.getJobs = function () {
        
        if ($scope.query !== undefined) {
          JobsService.getJobs($scope.query).then(function (response) {
           
            $scope.jobs = response.data;
            $scope.isResult = true;
          }).catch(function (error) {
            $scope.NotFoundMessage=true;
            console.log(error);
            return;
          });
        }
        $scope.NotFoundMessage=false;
        $scope.isResult = false;
        $scope.orderProp = 'job_title';
      }
    }
  });
