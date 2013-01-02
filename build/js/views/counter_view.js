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
        this.collection.on('filter', this.render, this);
        this.collection.on('add', this.render, this);
        return Backbone.Mediator.on('update:counter', this.render, this);
      };

      CounterView.prototype.render = function() {
        return this.$el.html(this.collection.filter(function(model) {
          return model.get('complete') === false;
        }).length);
      };

      return CounterView;

    })(Backbone.View);
  });

}).call(this);
