'use strict';


angular.
    module('jobDetail').
    component('jobDetail', {
        templateUrl: 'job-detail/job-detail.component.html',
        controller: function PhoneDetailController($routeParams, $scope, JobsService) {
            JobsService.getJobsByuuid($routeParams.uuid).then(function (response) {
                $scope.job = response.data;
            });
            JobsService.getRelatedSkills($routeParams.uuid).then(function (response) {
                $scope.jobRelatedSkills = response.data;
            });
            JobsService.getRelatedJobs($routeParams.uuid).then(function (response) {
                $scope.jobRelatedJobs = response.data;
            });
            $scope.getJobsByuuid = function () {
                JobsService.getJobsByuuid($routeParams.uuid).then(function (response) {
                    $scope.job = response.data;
                });
                JobsService.getRelatedSkills($routeParams.uuid).then(function (response) {
                    $scope.jobRelatedSkills = response.data;
                });
                JobsService.getRelatedJobs($routeParams.uuid).then(function (response) {
                    $scope.jobRelatedJobs = response.data;
                });
            }
        }
    });
