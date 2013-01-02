define ['backbone', 'underscore', 'views/task_view', 'views/notask_view'], (Backbone, _, TaskView, NoTaskView) ->
  class ListView extends Backbone.View
    
    initialize: ->
      @views = []
      this.collection.on 'add', this.render, this
      this.collection.on 'filter', this.render, this
    
    render: ->
      this.clear()
      if (this.collection.length == 0)
        this.no_list()
      else 
        this.collection.forEach this.add, this
      this
    
    no_list: ->
      view = new NoTaskView()
      @views.push view
      this.$el.append view.render().el

    add: (model)->
      view = new TaskView({model: model})
      @views.push view
      this.$el.append view.render().el
    
    clear: ->
      while @views.length
        this.removeView @views.pop()
    
    removeView: (view)->
      view.clear()