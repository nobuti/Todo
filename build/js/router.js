(function() {

  define(['buti'], function(Buti) {
    var App;
    return App = (function() {

      function App() {}

      App.prototype.init = function() {
        var buti;
        console.log($('.content'));
        _([1, 2, 3]).forEach(function(num) {
          return console.log(num);
        }).join(',');
        buti = new Buti();
        return buti.method();
      };

      return App;

    })();
  });

}).call(this);
