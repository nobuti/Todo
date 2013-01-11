define ['backbone', 'underscore', 'text!templates/taskTemplate.html','moment'], (Backbone, _, taskTemplate, moment)->
  class TaskView extends Backbone.View
    tagName: 'li'
    template: _.template(taskTemplate)
    events:
      'click .action': 'clickHandler'
      'dblclick .title': 'dblclickHandler'
    
    initialize: ->
      this.model.on 'change', this.render, this

    render: ->
      this.$el.html(this.template({task:this.model.toJSON(), formatDate: this.formatDate}))
      this.$el.addClass('important') if (this.model.get('important'))
      this.$el.addClass('done') if (this.model.get('complete'))
      this.$el.removeClass('done') if (!this.model.get('complete') and this.$el.hasClass('done'))
      this

    formatDate: (handler)->
      date = moment(handler)
      date.format("MMMM Do YYYY");
    
    clickHandler: ->
      valor = this.model.get('complete')
      this.model.save(
        { complete: !valor },
        { success: _.bind(this.update, this) }
      )
    
    update: (model, response, options)->
      console.log response
      Backbone.Mediator.trigger 'update:tasks'

    dblclickHandler: ->
      Backbone.Mediator.trigger 'dblclick', this
    save: (attrs)->
      this.model.save(attrs)
      if attrs.important
        this.$el.addClass('important')
      else
        this.$el.removeClass('important')
    destroy: ->
      this.undelegateEvents()
      this.model.destroy()
      this.remove()

    clear: ->
      this.undelegateEvents()
      this.remove()