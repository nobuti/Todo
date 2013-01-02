(function() {

  define(['backbone', 'models/task', 'views/task_view'], function(Backbone, Task, TaskView) {
    return describe("TaskView", function() {
      beforeEach(function() {
        var todo1;
        this.server = sinon.fakeServer.create();
        this.server.respondWith("POST", "/task", [
          200, {
            "Content-Type": "application/json"
          }, '{ "id": 1, "label": "TDD Implementation"}'
        ]);
        todo1 = new Task({
          label: 'TDD Implementation',
          date: new Date(2012, 11, 24)
        });
        this.renderSpy = sinon.spy(TaskView.prototype, 'render');
        return this.view = new TaskView({
          model: todo1
        });
      });
      afterEach(function() {
        this.server.restore();
        return TaskView.prototype.render.restore();
      });
      it("respond to change model event", function() {
        this.server.respond();
        this.view.model.save({
          complete: true
        });
        return expect(this.renderSpy.called).to.equal(true);
      });
      return it("respond to click event", function() {
        this.view.clickHandler();
        expect(this.view.model.get('complete')).to.equal(true);
        expect(this.renderSpy.called).to.equal(true);
        this.view.clickHandler();
        expect(this.renderSpy.called).to.equal(true);
        return expect(this.view.model.get('complete')).to.equal(false);
      });
    });
  });

}).call(this);
