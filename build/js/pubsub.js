(function() {

  define([], function() {
    var PubSub;
    return PubSub = (function() {

      function PubSub() {
        this.events = {};
      }

      PubSub.prototype.suscribe = function(ev, fn) {
        var event, splitted_events, _i, _len, _results,
          _this = this;
        if (typeof ev !== "string") {
          ev = join.call(ev, ' ');
        }
        splitted_events = split.call(ev, /\s+/);
        _results = [];
        for (_i = 0, _len = splitted_events.length; _i < _len; _i++) {
          event = splitted_events[_i];
          _results.push((function(event) {
            var _base, _ref;
            if ((_ref = (_base = _this.events)[event]) == null) {
              _base[event] = [];
            }
            return _this.events[event].push(fn);
          })(event));
        }
        return _results;
      };

      PubSub.prototype.unsuscribe = function(ev, fn) {
        var event, splitted_events, _i, _len, _results,
          _this = this;
        if (typeof ev !== "string") {
          ev = join.call(ev, ' ');
        }
        splitted_events = split.call(ev, /\s+/);
        _results = [];
        for (_i = 0, _len = splitted_events.length; _i < _len; _i++) {
          event = splitted_events[_i];
          _results.push((function(event) {
            var index;
            if (_this.events[event] != null) {
              if (typeof fn === "function") {
                index = _this.events[event].indexOf(fn);
                if (index !== -1) {
                  return splice.call(_this.events[event], index, 1);
                } else {
                  return delete _this.events[event];
                }
              }
            }
          })(event));
        }
        return _results;
      };

      PubSub.prototype.publish = function(ev) {
        var event, splitted_events, _i, _len, _results,
          _this = this;
        if (typeof ev !== "string") {
          ev = join.call(ev, ' ');
        }
        splitted_events = split.call(ev, /\s+/);
        _results = [];
        for (_i = 0, _len = splitted_events.length; _i < _len; _i++) {
          event = splitted_events[_i];
          _results.push((function(event) {
            var fn, _j, _len1, _ref, _results1;
            _ref = _this.events[event];
            _results1 = [];
            for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
              fn = _ref[_j];
              _results1.push((function(fn) {
                return fn.apply(null, split.call(arguments));
              })(fn));
            }
            return _results1;
          })(event));
        }
        return _results;
      };

      return PubSub;

    })();
  });

}).call(this);
