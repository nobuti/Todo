(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone'], function(Backbone) {
    var LogoView;
    return LogoView = (function(_super) {

      __extends(LogoView, _super);

      function LogoView() {
        return LogoView.__super__.constructor.apply(this, arguments);
      }

      LogoView.prototype.initialize = function(options) {
        this.tooltip = options.tooltip;
        this.showing = false;
        return Backbone.Mediator.on('init', this.clickHandler, this);
      };

      LogoView.prototype.events = {
        'click': 'clickHandler'
      };

      LogoView.prototype.clickHandler = function(e) {
        if (!this.showing) {
          this.tooltip.removeClass('hidden');
          return this.showing = true;
        } else {
          this.tooltip.addClass('hidden');
          return this.showing = false;
        }
      };

      return LogoView;

    })(Backbone.View);
  });

}).call(this);
