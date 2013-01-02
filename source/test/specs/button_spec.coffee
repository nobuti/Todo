define ['backbone', 'views/add_button_view'], (Backbone, ButtonView)->
  describe "Button View", ->

    it "respond to reset event", ->
      this.resetSpy = sinon.spy(ButtonView.prototype, 'reset')
      this.view = new ButtonView()

      Backbone.Mediator.trigger 'button:reset'
      expect(this.resetSpy.calledOnce).to.equal true
      ButtonView.prototype.reset.restore()
    
    it "respond to click event", ->
      this.view = new ButtonView()
      
      expect(this.view.showing).to.equal false
      this.view.clickHandler()
      expect(this.view.showing).to.equal true
      this.view.clickHandler()
      expect(this.view.showing).to.equal false