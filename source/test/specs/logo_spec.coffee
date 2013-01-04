define ['backbone', 'views/logo_view'], (Backbone, LogoView)->
  describe "Logo View", ->

    it "respond to click event", ->

      this.tooltip = $('#testdom')
      this.tooltip.addClass('hidden') # orginal markup
      
      this.view = new LogoView({tooltip: this.tooltip})
      
      expect(this.view.showing).to.equal false
      expect(this.tooltip.hasClass('hidden')).to.equal true
      this.view.clickHandler()
      expect(this.view.showing).to.equal true
      expect(this.tooltip.hasClass('hidden')).to.equal false
      this.view.clickHandler()
      expect(this.view.showing).to.equal false
      expect(this.tooltip.hasClass('hidden')).to.equal true