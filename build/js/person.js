(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['pubsub'], function(PubSub) {
    var Person;
    return Person = (function(_super) {

      __extends(Person, _super);

      function Person(name) {
        this.name = name != null ? name : 'Joe';
      }

      return Person;

    })(PubSub);
  });

}).call(this);
