define ['backbone'], (Backbone)->
  class CounterView extends Backbone.View
    initialize: ->
      Backbone.Mediator.on 'update:counter', this.render, this

    render: (cuantos)->
      this.$el.html cuantos