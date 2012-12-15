define ['buti'], (Buti)->
  class App
    init: ->
      console.log $('.content')
      _([1, 2, 3]).forEach((num) -> console.log(num)).join(',')
      buti = new Buti()
      buti.method()