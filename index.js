/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-power-select',
  contentFor: function(type, config) {
    if (config.environment !== 'test' && type === 'body-footer') {
      return '<div id="ember-power-select-wormhole"></div>';
    }
  }
};
 