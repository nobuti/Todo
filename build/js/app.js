(function() {

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
  });

  require(['underscore', 'jquery', 'backbone', 'router'], function(_, $, Backbone, App) {
    return console.log(new App().init());
  });

}).call(this);
