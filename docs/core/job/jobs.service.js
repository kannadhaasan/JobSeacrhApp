'use strict';

angular.
  module('core.job', []).
  factory('JobsServiceFactory', ['$http',
    function ($http) {
      var factory = {};

      factory.getJobs = function (query) {
        return $http.get('https://api.dataatwork.org/v1/jobs/autocomplete?contains=' + query);
      }
      factory.getJobsByuuid = function (uuid) {
        return $http.get('https://api.dataatwork.org/v1/jobs/' + uuid);
      }
      factory.getRelatedSkills = function (uuid) {
        return $http.get('https://api.dataatwork.org/v1/jobs/' + uuid + "/related_skills");
      }
      factory.getRelatedJobs = function (uuid) {
        return $http.get('https://api.dataatwork.org/v1/jobs/' + uuid + "/related_jobs");
      }
      return factory;
    }
  ]).
  service('JobsService', function (JobsServiceFactory) {
    this.getJobs = function (query) {
      return JobsServiceFactory.getJobs(query);
    }
    this.getJobsByuuid = function (uuid) {
      return JobsServiceFactory.getJobsByuuid(uuid);
    }
    this.getRelatedSkills = function (uuid) {
      return JobsServiceFactory.getRelatedSkills(uuid);
    }
    this.getRelatedJobs = function (uuid) {
      return JobsServiceFactory.getRelatedJobs(uuid);
    }
  });

