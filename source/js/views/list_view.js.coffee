define ['backbone', 'views/task_view'], (Backbone, TaskView) ->
  class ListView extends Backbone.View
    initialize: ->
      this.collection.on 'add', this.render, this
      this.collection.on 'filter', this.render, this
    render: ->
      this.$el.empty()
      this.collection.forEach this.add, this
      this
    add: (model)->
      this.$el.prepend new TaskView({model: model}).render().el