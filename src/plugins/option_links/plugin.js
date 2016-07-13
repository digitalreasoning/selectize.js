/* globals Selectize */

// Plugin to allow clickable links inside selectize options

Selectize.define('option_links', function(options) {
  var self = this;

  this.onOptionSelect = (function() {
    var original = self.onOptionSelect;
    var linkTarget = options.linkTarget || '_blank';

    return function(e) {
      var $target = $(e.target);

      if ($target.hasClass('option-link')) {
        return window.open($target.attr('href'), linkTarget);
      } else {
        return original.apply(this, arguments);
      }
    };
  })();
});
