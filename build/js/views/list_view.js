(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'underscore', 'views/task_view', 'views/notask_view'], function(Backbone, _, TaskView, NoTaskView) {
    var ListView;
    return ListView = (function(_super) {

      __extends(ListView, _super);

      function ListView() {
        return ListView.__super__.constructor.apply(this, arguments);
      }

      ListView.prototype.initialize = function() {
        this.views = [];
        this.collection.on('add', this.render, this);
        return this.collection.on('filter', this.render, this);
      };

      ListView.prototype.render = function() {
        this.clear();
        if (this.collection.length === 0) {
          this.no_list();
        } else {
          this.collection.forEach(this.add, this);
        }
        return this;
      };

      ListView.prototype.no_list = function() {
        var view;
        view = new NoTaskView();
        this.views.push(view);
        return this.$el.append(view.render().el);
      };

      ListView.prototype.add = function(model) {
        var view;
        view = new TaskView({
          model: model
        });
        this.views.push(view);
        return this.$el.append(view.render().el);
      };

      ListView.prototype.clear = function() {
        var _results;
        _results = [];
        while (this.views.length) {
          _results.push(this.removeView(this.views.pop()));
        }
        return _results;
      };

      ListView.prototype.removeView = function(view) {
        return view.clear();
      };

      return ListView;

    })(Backbone.View);
  });

}).call(this);
