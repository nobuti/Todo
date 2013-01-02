(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone'], function(Backbone) {
    var CounterView;
    return CounterView = (function(_super) {

      __extends(CounterView, _super);

      function CounterView() {
        return CounterView.__super__.constructor.apply(this, arguments);
      }

      CounterView.prototype.initialize = function() {
        return Backbone.Mediator.on('update:counter', this.render, this);
      };

      CounterView.prototype.render = function(cuantos) {
        return this.$el.html(cuantos);
      };

      return CounterView;

    })(Backbone.View);
  });

}).call(this);
