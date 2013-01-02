define ['backbone.localStorage', 'moment', 'models/task'], (Backbone, moment, Task)->
  class Tasks extends Backbone.Collection
    model: Task
    
    url: '/tasks'

    initialize: ->
      this.on 'reset', this.applyFilter, this
      this.on 'add', this.update, this
      this.on 'destroy', this.update, this
      Backbone.Mediator.on 'update:tasks', this.update, this

    comparator: (taska, taskb) ->
      moment(taska.get('date')) < moment(taskb.get('date'))

    localStorage: new Backbone.LocalStorage("ToDo")

    newTask: (task) ->
      important = false
      if (task.substr(0,1) == '!')
        important = true 
        task = task.substr(1)
      this.create({
        label: task,
        important: important,
        date: new Date()
      })

    applyFilter: ->
      this.filter(this.checkOld, this).forEach(this.removeTask, this)
      this.update()
      this.trigger 'filter'

    checkOld: (model)->
      today = moment(new Date())
      date = moment(model.get('date'))
      today.diff(date, 'days') > 2 and model.get('complete')

    removeTask: (model)->
      model.destroy()
      this.update()

    update: ->
      cuantos = this.filter((model)->
        model.get('complete') == false).length
      Backbone.Mediator.trigger 'update:counter', cuantos