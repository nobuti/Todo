define ['pubsub'], (PubSub)->
  class Buti extends PubSub
    constructor: ->
      super
      this
    method: ->
      _([1, 2, 3]).forEach((num) -> console.log(num)).join(',')
      true