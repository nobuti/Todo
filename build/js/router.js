(function() {

  define(['underscore', 'backbone', 'models/task', 'collections/tasks', 'views/input_view', 'views/list_view', 'views/add_button_view', 'views/counter_view'], function(_, Backbone, Task, Tasks, InputView, ListView, AddButtonView, CounterView) {
    var App;
    return App = (function() {

      function App() {}

      App.prototype.init = function() {
        this.todo = new Tasks();
        this.button = new AddButtonView({
          el: '.add'
        });
        this.counter = new CounterView({
          el: '.counter'
        });
        this.list = new ListView({
          el: 'ul.todo',
          collection: this.todo
        });
        this.input = new InputView({
          el: '.form-holder',
          collection: this.todo
        });
        return this.todo.fetch();
      };

      return App;

    })();
  });

}).call(this);
