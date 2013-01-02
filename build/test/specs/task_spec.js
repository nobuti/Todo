(function() {

  define(['models/task'], function(Task) {
    return describe('Task', function() {
      return describe('When creating new task', function() {
        beforeEach(function() {
          return this.task = new Task();
        });
        it("should defaults to uncompleted status", function() {
          return expect(this.task.get('complete')).to.equal(false);
        });
        it("should have today value in date", function() {
          var today;
          today = new Date();
          expect(this.task.get('date').getDate()).to.equal(today.getDate());
          expect(this.task.get('date').getMonth()).to.equal(today.getMonth());
          return expect(this.task.get('date').getFullYear()).to.equal(today.getFullYear());
        });
        return it("should be invalid with blank text", function() {
          var eventSpy;
          eventSpy = sinon.spy();
          this.task.on("error", eventSpy);
          expect(this.task.set('label', '')).to.equal(false);
          return expect(eventSpy.calledOnce).to.equal(true);
        });
      });
    });
  });

}).call(this);
