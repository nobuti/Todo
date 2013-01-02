(function() {

  define(['backbone', 'views/counter_view'], function(Backbone, CounterView) {
    return describe("Counter View", function() {
      return it("respond to render event", function() {
        this.renderSpy = sinon.spy(CounterView.prototype, 'render');
        this.view = new CounterView();
        Backbone.Mediator.trigger('update:counter', 10);
        expect(this.renderSpy.calledOnce).to.equal(true);
        expect(this.view.$el.html()).to.equal('10');
        return CounterView.prototype.render.restore();
      });
    });
  });

}).call(this);
