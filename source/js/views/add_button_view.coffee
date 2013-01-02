define ['backbone'], (Backbone)->
  class AddButtonView extends Backbone.View
    initialize: (options)->
      this.showing = false
      Backbone.Mediator.on 'button:reset', this.reset, this

    events: 
      'click': 'clickHandler'

    clickHandler: (e)->
      if !this.showing
        this.$el.html('-')
        this.showing = true
        Backbone.Mediator.trigger 'input:show'
      else 
        this.$el.html('+')
        this.showing = false
        Backbone.Mediator.trigger 'input:hide'
      
    reset: ->
      this.$el.html('+')
      this.showing = false