/* globals Selectize */

// Plugin to allow clickable links inside selectize options

Selectize.define('option_links', function(options) {
  var self = this;
  this.onOptionSelect = (function() {
      var original = self.onOptionSelect;
      return function() {
          console.log('I FIRED!!!');
          return original.apply(this, arguments);
      };
  })();
});