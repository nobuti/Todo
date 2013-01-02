(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'underscore'], function(Backbone, _) {
    var Task;
    return Task = (function(_super) {

      __extends(Task, _super);

      function Task() {
        return Task.__super__.constructor.apply(this, arguments);
      }

      Task.prototype.urlRoot = '/task';

      Task.prototype.defaults = {
        complete: false,
        important: false,
        date: new Date()
      };

      Task.prototype.validate = function(attrs) {
        if (attrs.label === '') {
          return "Must be labeled";
        }
      };

      return Task;

    })(Backbone.Model);
  });

}).call(this);
