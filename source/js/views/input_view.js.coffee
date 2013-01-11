define ['backbone'], (Backbone)->
  class InputView extends Backbone.View
    initialize: (options)->
      this.edition = false
      this.pinput = this.$el.find('input[name=task]')
      Backbone.Mediator.on 'dblclick', this.edit, this
      Backbone.Mediator.on 'input:show', this.show, this
      Backbone.Mediator.on 'input:hide', this.hide, this

    events: 
      'keypress input[name=task]': 'enterHandler'

    enterHandler: (e)->
      value = this.pinput.val()
      if (this.edition)
        if (e.keyCode == 13)
          if ($.trim(value) != '') 
            important = $.trim(value).substr(0,1) == '!' 
            label = if important then value.substr(1) else value
            attrs = 
              important: important
              label: label
            this.task.save(attrs)
          else 
            this.task.destroy()
          this.edition = false
          this.hide()
      else
        if (e.keyCode == 13 and $.trim(value) != '') 
          this.collection.newTask(value)
          Backbone.Mediator.trigger('button:reset')
          this.hide()

    hide: ->
      this.pinput.val('').blur()
      this.$el.removeClass('visible')

    show: ->
      this.$el.addClass('visible')

    edit: (task)-> 
      this.edition = true
      this.task = task || {}
      this.pinput.val(this.task.model?.get('label') || '')
      this.show()
