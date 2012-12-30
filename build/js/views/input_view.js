(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'backbone'], function(_, Backbone) {
    var InputView;
    return InputView = (function(_super) {

      __extends(InputView, _super);

      function InputView() {
        return InputView.__super__.constructor.apply(this, arguments);
      }

      InputView.prototype.initialize = function(options) {
        this.pinput = $(this.el).find('input[name=task]');
        return this.mediator = options.mediator;
      };

      InputView.prototype.events = {
        'keypress input[name=task]': 'enterHandler'
      };

      InputView.prototype.enterHandler = function(e) {
        var value;
        value = this.pinput.val();
        if (e.keyCode === 13 && $.trim(value) !== '') {
          console.log("trigger input:new");
          this.mediator.trigger('input:new', value);
          this.pinput.val('').blur();
          return this.hide();
        }
      };

      InputView.prototype.hide = function() {
        return this.$el.removeClass('visible');
      };

      InputView.prototype.show = function() {
        return this.$el.addClass('visible');
      };

      return InputView;

    })(Backbone.View);
  });

}).call(this);
