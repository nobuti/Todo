(function() {

  define(['models/task'], function(Task) {
    return describe('Task', function() {
      it("should defaults to uncompleted status", function() {
        var task;
        task = new Task();
        return expect(task.get('complete')).to.equal(false);
      });
      it("should have today value in date", function() {
        var task, today;
        task = new Task();
        today = new Date();
        expect(task.get('date').getDate()).to.equal(today.getDate());
        expect(task.get('date').getMonth()).to.equal(today.getMonth());
        return expect(task.get('date').getFullYear()).to.equal(today.getFullYear());
      });
      return it("should be invalid with blank text", function() {
        var task;
        task = new Task();
        expect(task.set('label', '')).to.equal(false);
        task.set({
          label: ''
        }, {
          silent: true
        });
        return expect(task.isValid()).to.equal(false);
      });
    });
  });

}).call(this);
