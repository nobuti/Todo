define ['backbone.localStorage', 'moment', 'models/task'], (Backbone, moment, Task)->
  class Tasks extends Backbone.Collection
    model: Task,
    initialize: ->
      this.on('reset', this.applyFilter, this)

    comparator: (a, b) ->
      return a.get('date') > b.get('date')

    localStorage: new Backbone.LocalStorage("ToDo")

    newTask: (task) ->
      important = false
      if (task.substr(0,1) == '!')
        important = true 
        task = task.substr(1)
      this.create({
        label: task,
        important: important
      })

    applyFilter: ->
      this.filter(this.checkOld, this).forEach(this.removeTask, this)
      this.trigger 'filter'

    checkOld: (model)->
      today = moment(new Date())
      date = moment(model.get('date'))
      today.diff(date, 'days') > 2 and model.get('complete')

    removeTask: (model)->
      model.destroy()
