'use strict';

/**
 * @ngdoc directive
 * @name cardkitApp.directive:textanchorEditor
 * @description
 * # textanchorEditor
 */
angular.module('cardkitApp')
  .directive('textanchorEditor', function () {
    return {
      template: '<div>' +
            '<label>Text Anchor</label>' +
            '<select ng-model="element.textAnchor" class="form-control">' +
              '<option value="">-- Select a Text Anchor --</option>' +
              '<option value="start">Left Justified</option>' +
              '<option value="middle">Center Justified</option>' +
              '<option value="end">Right Justified</option>' +
            '</select>' +
          '</div>',
      restrict: 'E',
      replace: true,
  	  scope: {
  	    element: '='
  	  },
    };
  });
