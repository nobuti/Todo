(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone'], function(Backbone) {
    var AddButtonView;
    return AddButtonView = (function(_super) {

      __extends(AddButtonView, _super);

      function AddButtonView() {
        return AddButtonView.__super__.constructor.apply(this, arguments);
      }

      AddButtonView.prototype.initialize = function(options) {
        this.showing = false;
        return Backbone.Mediator.on('button:reset', this.reset, this);
      };

      AddButtonView.prototype.events = {
        'click': 'clickHandler'
      };

      AddButtonView.prototype.clickHandler = function(e) {
        if (!this.showing) {
          this.$el.html('-');
          this.showing = true;
          return Backbone.Mediator.trigger('input:show');
        } else {
          this.$el.html('+');
          this.showing = false;
          return Backbone.Mediator.trigger('input:hide');
        }
      };

      AddButtonView.prototype.reset = function() {
        this.$el.html('+');
        return this.showing = false;
      };

      return AddButtonView;

    })(Backbone.View);
  });

}).call(this);
