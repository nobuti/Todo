(function() {

  define(['backbone', 'models/task', 'views/input_view'], function(Backbone, Task, InputView) {
    return describe("InputView", function() {
      it("respond to show event", function() {
        this.showSpy = sinon.spy(InputView.prototype, 'show');
        this.view = new InputView();
        Backbone.Mediator.trigger('input:show');
        expect(this.showSpy.calledOnce).to.equal(true);
        return InputView.prototype.show.restore();
      });
      it("respond to hide event", function() {
        this.hideSpy = sinon.spy(InputView.prototype, 'hide');
        this.view = new InputView();
        Backbone.Mediator.trigger('input:hide');
        expect(this.hideSpy.calledOnce).to.equal(true);
        return InputView.prototype.hide.restore();
      });
      return it("respond to edit event", function() {
        this.editSpy = sinon.spy(InputView.prototype, 'edit');
        this.view = new InputView();
        Backbone.Mediator.trigger('dblclick');
        expect(this.editSpy.calledOnce).to.equal(true);
        return InputView.prototype.edit.restore();
      });
    });
  });

}).call(this);
