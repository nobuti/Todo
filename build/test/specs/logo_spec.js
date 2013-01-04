(function() {

  define(['backbone', 'views/logo_view'], function(Backbone, LogoView) {
    return describe("Logo View", function() {
      return it("respond to click event", function() {
        this.tooltip = $('#testdom');
        this.tooltip.addClass('hidden');
        this.view = new LogoView({
          tooltip: this.tooltip
        });
        expect(this.view.showing).to.equal(false);
        expect(this.tooltip.hasClass('hidden')).to.equal(true);
        this.view.clickHandler();
        expect(this.view.showing).to.equal(true);
        expect(this.tooltip.hasClass('hidden')).to.equal(false);
        this.view.clickHandler();
        expect(this.view.showing).to.equal(false);
        return expect(this.tooltip.hasClass('hidden')).to.equal(true);
      });
    });
  });

}).call(this);
