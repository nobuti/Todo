(function() {

  define(['underscore', 'backbone', 'models/task', 'collections/tasks', 'views/logo_view', 'views/input_view', 'views/list_view', 'views/add_button_view', 'views/counter_view'], function(_, Backbone, Task, Tasks, LogoView, InputView, ListView, AddButtonView, CounterView) {
    var App;
    return App = (function() {

      function App() {}

      App.prototype.init = function() {
        var _this = this;
        this.todo = new Tasks();
        this.logo = new LogoView({
          el: 'h1',
          tooltip: $('.instructions')
        });
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
        this.todo.fetch();
        return setTimeout(function() {
          return Backbone.Mediator.trigger('init');
        }, 2000);
      };

      return App;

    })();
  });

}).call(this);
