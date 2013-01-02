define ['backbone'], (Backbone)->
  class AddButtonView extends Backbone.View
    initialize: (options)->
      @showing = false
      Backbone.Mediator.on 'button:reset', this.reset, this
      
    events: 
      'click': 'clickHandler'

    clickHandler: (e)->
      if !@showing
        this.$el.html('-')
        @showing = true
        Backbone.Mediator.trigger 'input:show'
      else 
        this.$el.html('+')
        @showing = false
        Backbone.Mediator.trigger 'input:hide'
      
    reset: ->
      this.$el.html('+')
      @showing = false