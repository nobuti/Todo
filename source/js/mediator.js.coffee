define ['backbone', 'underscore'], (Backbone, _)->
  class EventMediator
    constructor: ->
      _.extend(this, Backbone.Events)

  Mediator = do ->
    if (Backbone.Mediator == undefined)
       Backbone.Mediator = new EventMediator()
    Backbone.Meditor