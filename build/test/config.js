require.config({
  baseUrl: "/js/",
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery: 'components/jquery/jquery',
    underscore: 'components/lodash/lodash',
    backbone: 'components/backbone/backbone',
    'backbone.localStorage': 'components/backbone.localStorage/backbone.localStorage-min',
    text: 'components/requirejs-text/text',
    moment: 'components/moment/moment',
    sinon: '../test/components/sinon/sinon',
    mocha: '../test/components/mocha/mocha',
    chai: '../test/components/chai/chai',
    specs: '../test/specs'
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
      deps: ['underscore','backbone'],
      exports: "Backbone"
    },
    moment: {
      exports: 'moment'
    },
    sinon: {
      exports: 'sinon'
    },
    mocha: {
      exports: 'mocha'
    },
    chai: {
      exports: 'chai'
    }
  }
});

require(['mocha', 'chai','sinon','mediator'], function(mocha, chai, sinon, Mediator) {

  // Chai
  this.expect = chai.expect;

  // Mocha
  mocha.setup({ui: 'bdd', ignoreLeaks: true});

  var specs = [];

  specs.push('specs/task_spec');
  specs.push('specs/tasks_spec');
  specs.push('specs/button_spec');
  specs.push('specs/counter_spec');
  specs.push('specs/input_spec');
  specs.push('specs/taskview_spec');
  specs.push('specs/list_spec');
  // specs.push('spec/views/CountViewSpec');
  // specs.push('spec/views/FooterViewSpec');
  // specs.push('spec/views/MarkAllSpec');
  // specs.push('spec/views/NewTaskSpec');
  // specs.push('spec/views/TaskListSpec');
  // specs.push('spec/views/TaskViewSpec');

  require(specs, function(){
    $(function(){
      mocha.run();
    });
  });

});
