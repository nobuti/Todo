(function() {

  define(['backbone', 'views/add_button_view'], function(Backbone, ButtonView) {
    return describe("Button View", function() {
      it("respond to reset event", function() {
        this.resetSpy = sinon.spy(ButtonView.prototype, 'reset');
        this.view = new ButtonView();
        Backbone.Mediator.trigger('button:reset');
        expect(this.resetSpy.calledOnce).to.equal(true);
        return ButtonView.prototype.reset.restore();
      });
      return it("respond to click event", function() {
        this.view = new ButtonView();
        expect(this.view.showing).to.equal(false);
        this.view.clickHandler();
        expect(this.view.showing).to.equal(true);
        this.view.clickHandler();
        return expect(this.view.showing).to.equal(false);
      });
    });
  });

}).call(this);
