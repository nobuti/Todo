define ['backbone'], (Backbone)->
  class CounterView extends Backbone.View
    initialize: ->
      this.collection.on 'filter', this.render, this
      this.collection.on 'add', this.render, this
      Backbone.Mediator.on 'update:counter', this.render, this
    render: ->
      this.$el.html this.collection.filter((model)->
        model.get('complete') == false).length