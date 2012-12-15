require.config({
  baseUrl: "/js/",
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery: 'components/jquery/jquery',
    underscore: 'components/lodash/lodash',
    backbone: 'components/backbone/backbone',
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
    mocha: {
      exports: 'mocha'
    },
    chai: {
      exports: 'chai'
    }
  }
});

require(['underscore', 'jquery', 'mocha', 'chai'], function(_, $, mocha, chai) {

  // Chai
  this.expect = chai.expect;

  // Mocha
  mocha.setup({ui: 'bdd', ignoreLeaks: true});

  var specs = [];

  specs.push('specs/spec');
  specs.push('specs/mod_spec');
  // specs.push('spec/views/ClearCompletedSpec');
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
