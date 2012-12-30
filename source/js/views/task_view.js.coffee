define ['text!templates/taskTemplate.html','moment'], (taskTemplate, moment)->
  class TaskView extends Backbone.View
    template: _.template(taskTemplate)
    render: ->
      this.$el.html(this.template({task:this.model.toJSON(), formatDate: this.formatDate}))
      this
    formatDate: (handler)->
      date = moment(handler)
      date.format("MMMM Do YYYY");
    
    # Todo
    # done / undo
    # edit / delete