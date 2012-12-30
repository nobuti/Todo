(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone.localStorage', 'models/task'], function(Backbone, Task) {
    var Tasks;
    return Tasks = (function(_super) {

      __extends(Tasks, _super);

      function Tasks() {
        return Tasks.__super__.constructor.apply(this, arguments);
      }

      Tasks.prototype.model = Task;

      Tasks.prototype.comparator = function(a, b) {
        return a.get('date') < b.get('date');
      };

      Tasks.prototype.localStorage = new Backbone.LocalStorage("ToDo");

      Tasks.prototype["new"] = function(task) {
        return console.log(task);
      };

      return Tasks;

    })(Backbone.Collection);
  });

}).call(this);
