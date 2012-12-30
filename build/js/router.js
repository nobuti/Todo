(function() {

  define(['models/task', 'collections/tasks', 'views/input_view', 'underscore', 'backbone'], function(Task, Tasks, InputView, _, Backbone) {
    var App;
    return App = (function() {

      function App() {
        _.templateSettings = {
          evaluate: /\{\{([\s\S]+?)\}\}/g,
          interpolate: /\{\{=([\s\S]+?)\}\}/g,
          escape: /\{\{-([\s\S]+?)\}\}/g
        };
        _.extend(this, Backbone.Events);
        this.on('input:new', this["new"]);
      }

      App.prototype.init = function(todo) {
        this.input = new InputView({
          el: '.form-holder',
          mediator: this
        });
        return this.todo = new Tasks();
      };

      App.prototype["new"] = function(task) {
        return console.log(task);
      };

      return App;

    })();
  });

}).call(this);
