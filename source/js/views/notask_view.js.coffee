define ['backbone', 'underscore'], (Backbone, _)->
  class NoTaskView extends Backbone.View
    tagName: 'p'
    template: _.template('No task to do. You are awesome!')
    
    render: ->
      this.$el.html(this.template())
      this

    destroy: ->
      this.remove()

    clear: ->
      this.remove()