define ['backbone'], (Backbone)->
  class InputView extends Backbone.View
    initialize: (options)->
      this.pinput = this.$el.find('input[name=task]')
      this.mediator = options.mediator
    events: {
      'keypress input[name=task]': 'enterHandler'
    }
    enterHandler: (e)->
      value = this.pinput.val()
      if (e.keyCode == 13 and $.trim(value) != '') 
        this.collection.newTask(value)
        this.pinput.val('').blur()
        this.hide()
        this.mediator.trigger('input:hide')
    hide: ->
      this.$el.removeClass('visible')
    show: ->
      this.$el.addClass('visible')
        
