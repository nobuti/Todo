define ['backbone', 'views/counter_view'], (Backbone, CounterView)->
  describe "Counter View", ->

    it "respond to render event", ->
      this.renderSpy = sinon.spy(CounterView.prototype, 'render')
      this.view = new CounterView()

      Backbone.Mediator.trigger 'update:counter', 10
      expect(this.renderSpy.calledOnce).to.equal true
      expect(this.view.$el.html()).to.equal '10'
      CounterView.prototype.render.restore()
    