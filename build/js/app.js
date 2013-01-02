(function() {

  require.config({
    baseUrl: "/js/",
    urlArgs: 'cb=' + Math.random(),
    paths: {
      jquery: 'components/jquery/jquery',
      underscore: 'components/lodash/lodash',
      backbone: 'components/backbone/backbone',
      'backbone.localStorage': 'components/backbone.localStorage/backbone.localStorage-min',
      text: 'components/requirejs-text/text',
      moment: 'components/moment/moment'
    },
    shim: {
      underscore: {
        exports: "_"
      },
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      moment: {
        exports: 'moment'
      },
      'backbone.localStorage': {
        deps: ['underscore', 'backbone'],
        exports: "Backbone"
      }
    }
  });

  require(['mediator', 'router'], function(Backbone, App) {
    var app;
    app = new App();
    return app.init();
  });

}).call(this);
