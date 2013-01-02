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
      this.model.save({complete: !valor})
    
    dblclickHandler: ->
      Backbone.Mediator.trigger 'dblclick', this
    
    destroy: ->
      this.undelegateEvents()
      this.model.destroy()
      this.remove()
      Backbone.Mediator.trigger 'update:counter'

    clear: ->
      this.undelegateEvents()
      this.remove()