require.config({
  baseUrl: "/js/",
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery: 'components/jquery/jquery',
    underscore: 'components/lodash/lodash',
    backbone: 'components/backbone/backbone'
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
})

require ['underscore', 'jquery', 'backbone', 'router'], (_, $, Backbone, App) ->
  console.log new App().init()