(function() {

  require.config({
    baseUrl: "/js/",
    urlArgs: 'cb=' + Math.random(),
    paths: {
      jquery: 'components/jquery/jquery',
      underscore: 'components/lodash/lodash',
      backbone: 'components/backbone/backbone',
      'backbone.localStorage': 'components/backbone.localStorage/backbone.localStorage-min',
      text: 'components/requirejs-text/text'
    },
    shim: {
      underscore: {
        exports: "_"
      },
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      'backbone.localStorage': {
        deps: ['underscore', 'backbone'],
        exports: "Backbone"
      }
    }
  });

  require(['router'], function(App) {
    var app;
    console.log("Hello world");
    app = new App();
    return app.init();
  });

}).call(this);
