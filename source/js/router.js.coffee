define ['underscore', 'backbone', 'models/task', 'collections/tasks', 'views/input_view','views/list_view', 'views/add_button_view', 'views/counter_view'], ( _, Backbone, Task, Tasks, InputView, ListView, AddButtonView, CounterView)->
  class App
    constructor: ->
      _.extend(this, Backbone.Events)
      this.on('input:show', this.show)
      this.on('input:hide', this.hide)
      this.on('button:reset', this.reset)

    init: ->
      @todo = new Tasks()
      
      @button = new AddButtonView({
        el: '.add',
        mediator: this
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
        collection: @todo,
        mediator: this
      })
      
      @todo.fetch()

    show: ->
      @input.show()
    hide: ->
      @input.hide()
    hide: ->
      @button.reset()