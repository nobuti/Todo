define ['pubsub'], (PubSub)->
  class Person extends PubSub
    constructor: (name)->
      @name = name ? 'Joe'