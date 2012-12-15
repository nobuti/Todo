(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['pubsub'], function(PubSub) {
    var Buti;
    return Buti = (function(_super) {

      __extends(Buti, _super);

      function Buti() {
        Buti.__super__.constructor.apply(this, arguments);
        this;

      }

      Buti.prototype.method = function() {
        _([1, 2, 3]).forEach(function(num) {
          return console.log(num);
        }).join(',');
        return true;
      };

      return Buti;

    })(PubSub);
  });

}).call(this);
