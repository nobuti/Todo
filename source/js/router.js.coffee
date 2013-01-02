define ['underscore', 'backbone', 'models/task', 'collections/tasks', 'views/input_view','views/list_view', 'views/add_button_view', 'views/counter_view'], ( _, Backbone, Task, Tasks, InputView, ListView, AddButtonView, CounterView)->
  class App
      
    init: ->
      @todo = new Tasks()
      
      @button = new AddButtonView({
        el: '.add'
      })

      @counter = new CounterView({
        el: '.counter',
        collection: @todo
      })

      @list = new ListView({
        el: 'ul.todo',
        collection: @todo
      })

      @input = new InputView({
        el: '.form-holder',
        collection: @todo
      })
      
      @todo.fetch()
