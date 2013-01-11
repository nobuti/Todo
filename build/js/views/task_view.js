(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'underscore', 'text!templates/taskTemplate.html', 'moment'], function(Backbone, _, taskTemplate, moment) {
    var TaskView;
    return TaskView = (function(_super) {

      __extends(TaskView, _super);

      function TaskView() {
        return TaskView.__super__.constructor.apply(this, arguments);
      }

      TaskView.prototype.tagName = 'li';

      TaskView.prototype.template = _.template(taskTemplate);

      TaskView.prototype.events = {
        'click .action': 'clickHandler',
        'dblclick .title': 'dblclickHandler'
      };

      TaskView.prototype.initialize = function() {
        return this.model.on('change', this.render, this);
      };

      TaskView.prototype.render = function() {
        this.$el.html(this.template({
          task: this.model.toJSON(),
          formatDate: this.formatDate
        }));
        if (this.model.get('important')) {
          this.$el.addClass('important');
        }
        if (this.model.get('complete')) {
          this.$el.addClass('done');
        }
        if (!this.model.get('complete') && this.$el.hasClass('done')) {
          this.$el.removeClass('done');
        }
        return this;
      };

      TaskView.prototype.formatDate = function(handler) {
        var date;
        date = moment(handler);
        return date.format("MMMM Do YYYY");
      };

      TaskView.prototype.clickHandler = function() {
        var valor;
        valor = this.model.get('complete');
        return this.model.save({
          complete: !valor
        }, {
          success: _.bind(this.update, this)
        });
      };

      TaskView.prototype.update = function(model, response, options) {
        console.log(response);
        return Backbone.Mediator.trigger('update:tasks');
      };

      TaskView.prototype.dblclickHandler = function() {
        return Backbone.Mediator.trigger('dblclick', this);
      };

      TaskView.prototype.save = function(attrs) {
        this.model.save(attrs);
        if (attrs.important) {
          return this.$el.addClass('important');
        } else {
          return this.$el.removeClass('important');
        }
      };

      TaskView.prototype.destroy = function() {
        this.undelegateEvents();
        this.model.destroy();
        return this.remove();
      };

      TaskView.prototype.clear = function() {
        this.undelegateEvents();
        return this.remove();
      };

      return TaskView;

    })(Backbone.View);
  });

}).call(this);
