define ['backbone', 'models/task', 'views/input_view'], (Backbone, Task, InputView)->
  describe "InputView", ->
    
    it "respond to show event", ->
      this.showSpy = sinon.spy(InputView.prototype, 'show')
      this.view = new InputView()
      Backbone.Mediator.trigger 'input:show'
      expect(this.showSpy.calledOnce).to.equal true
      InputView.prototype.show.restore()

    it "respond to hide event", ->
      this.hideSpy = sinon.spy(InputView.prototype, 'hide')
      this.view = new InputView()
      Backbone.Mediator.trigger 'input:hide'
      expect(this.hideSpy.calledOnce).to.equal true
      InputView.prototype.hide.restore()

    it "respond to edit event", ->
      this.editSpy = sinon.spy(InputView.prototype, 'edit')
      this.view = new InputView()

      Backbone.Mediator.trigger 'dblclick'
      expect(this.editSpy.calledOnce).to.equal true
      InputView.prototype.edit.restore()

      