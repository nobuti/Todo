(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone.localStorage', 'moment', 'models/task'], function(Backbone, moment, Task) {
    var Tasks;
    return Tasks = (function(_super) {

      __extends(Tasks, _super);

      function Tasks() {
        return Tasks.__super__.constructor.apply(this, arguments);
      }

      Tasks.prototype.model = Task;

      Tasks.prototype.url = '/tasks';

      Tasks.prototype.initialize = function() {
        this.on('reset', this.applyFilter, this);
        this.on('add', this.update, this);
        this.on('destroy', this.update, this);
        return Backbone.Mediator.on('update:tasks', this.update, this);
      };

      Tasks.prototype.comparator = function(taska, taskb) {
        return moment(taska.get('date')) < moment(taskb.get('date'));
      };

      Tasks.prototype.localStorage = new Backbone.LocalStorage("ToDo");

      Tasks.prototype.newTask = function(task) {
        var important;
        important = false;
        if (task.substr(0, 1) === '!') {
          important = true;
          task = task.substr(1);
        }
        return this.create({
          label: task,
          important: important,
          date: new Date()
        });
      };

      Tasks.prototype.applyFilter = function() {
        this.filter(this.checkOld, this).forEach(this.removeTask, this);
        this.update();
        return this.trigger('filter');
      };

      Tasks.prototype.checkOld = function(model) {
        var date, today;
        today = moment(new Date());
        date = moment(model.get('date'));
        return today.diff(date, 'days') > 2 && model.get('complete');
      };

      Tasks.prototype.removeTask = function(model) {
        model.destroy();
        return this.update();
      };

      Tasks.prototype.update = function() {
        var cuantos;
        cuantos = this.filter(function(model) {
          return model.get('complete') === false;
        }).length;
        return Backbone.Mediator.trigger('update:counter', cuantos);
      };

      return Tasks;

    })(Backbone.Collection);
  });

}).call(this);
