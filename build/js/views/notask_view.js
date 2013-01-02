(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'underscore'], function(Backbone, _) {
    var NoTaskView;
    return NoTaskView = (function(_super) {

      __extends(NoTaskView, _super);

      function NoTaskView() {
        return NoTaskView.__super__.constructor.apply(this, arguments);
      }

      NoTaskView.prototype.tagName = 'p';

      NoTaskView.prototype.template = _.template('No task to do. You are awesome!');

      NoTaskView.prototype.render = function() {
        this.$el.html(this.template());
        return this;
      };

      NoTaskView.prototype.destroy = function() {
        return this.remove();
      };

      NoTaskView.prototype.clear = function() {
        return this.remove();
      };

      return NoTaskView;

    })(Backbone.View);
  });

}).call(this);
