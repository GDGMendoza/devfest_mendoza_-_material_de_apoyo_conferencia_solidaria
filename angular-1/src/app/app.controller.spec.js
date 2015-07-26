/// <reference path="../../../typings/jasmine/jasmine.d.ts"/>
(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('angular1IsHere'));

    it('should define more than 5 awesome things', inject(function($controller) {
      var vm = $controller('MainController');

      expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
      expect(vm.awesomeThings.length > 5).toBeTruthy();
    }));
  });
})();
