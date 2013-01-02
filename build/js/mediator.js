(function() {

  define(['backbone', 'underscore'], function(Backbone, _) {
    var EventMediator, Mediator;
    EventMediator = (function() {

      function EventMediator() {
        _.extend(this, Backbone.Events);
      }

      return EventMediator;

    })();
    return Mediator = (function() {
      if (Backbone.Mediator === void 0) {
        Backbone.Mediator = new EventMediator();
      }
      return Backbone.Meditor;
    })();
  });

}).call(this);
