define ['backbone','underscore'], (Backbone, _)->
  class Task extends Backbone.Model
    defaults: {
      complete: false,
      important: false,
      date: new Date()
    },
    validate: (attrs) ->
      if (attrs.label is '')
        return "Must be labeled"
