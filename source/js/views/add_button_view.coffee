define ['backbone'], (Backbone)->
  class AddButtonView extends Backbone.View
    initialize: (options)->
      @mediator = options.mediator
      @showing = false
    events: 
      'click': 'clickHandler'
    clickHandler: (e)->
      if !@showing
        this.$el.html('-')
        @mediator.trigger 'input:show'
      else 
        this.$el.html('+')
        @mediator.trigger 'input:hide'
      @showing = !@showing 
    reset: ->
      this.$el.html('+')
      @showing = false