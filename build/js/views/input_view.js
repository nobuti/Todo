(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone'], function(Backbone) {
    var InputView;
    return InputView = (function(_super) {

      __extends(InputView, _super);

      function InputView() {
        return InputView.__super__.constructor.apply(this, arguments);
      }

      InputView.prototype.initialize = function(options) {
        this.edition = false;
        this.pinput = this.$el.find('input[name=task]');
        Backbone.Mediator.on('dblclick', this.edit, this);
        Backbone.Mediator.on('input:show', this.show, this);
        return Backbone.Mediator.on('input:hide', this.hide, this);
      };

      InputView.prototype.events = {
        'keypress input[name=task]': 'enterHandler'
      };

      InputView.prototype.enterHandler = function(e) {
        var value;
        value = this.pinput.val();
        if (this.edition) {
          if (e.keyCode === 13 && $.trim(value) === '') {
            this.edition = false;
            this.task.destroy();
            return this.hide();
          }
        } else {
          if (e.keyCode === 13 && $.trim(value) !== '') {
            this.collection.newTask(value);
            Backbone.Mediator.trigger('button:reset');
            return this.hide();
          }
        }
      };

      InputView.prototype.hide = function() {
        this.pinput.val('').blur();
        return this.$el.removeClass('visible');
      };

      InputView.prototype.show = function() {
        return this.$el.addClass('visible');
      };

      InputView.prototype.edit = function(task) {
        this.edition = true;
        this.task = task;
        this.pinput.val(this.task.model.get('label'));
        return this.show();
      };

      return InputView;

    })(Backbone.View);
  });

}).call(this);
