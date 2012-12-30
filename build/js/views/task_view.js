(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['text!templates/taskTemplate'], function(taskTemplate) {
    var TaskView;
    return TaskView = (function(_super) {

      __extends(TaskView, _super);

      function TaskView() {
        return TaskView.__super__.constructor.apply(this, arguments);
      }

      TaskView.prototype.render = function() {
        return this.$el.html(taskTemplate);
      };

      return TaskView;

    })(Backbone.View);
  });

}).call(this);
