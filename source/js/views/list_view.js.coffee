define ['backbone', 'views/task_view', 'views/notask_view'], (Backbone, TaskView, NoTaskView) ->
  class ListView extends Backbone.View
    
    initialize: ->
      this.views = []
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
      this.views.push view
      this.$el.append view.render().el

    add: (model)->
      view = new TaskView({model: model})
      this.views.push view
      this.$el.append view.render().el
    
    clear: ->
      while this.views.length
        this.removeView this.views.pop()
    
    removeView: (view)->
      view.clear()