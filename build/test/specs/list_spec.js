(function() {

  define(['models/task', 'collections/tasks', 'views/list_view'], function(Task, Tasks, ListView) {
    return describe("ListView", function() {
      beforeEach(function() {
        var todo1, todo2, todo3;
        todo1 = new Task({
          label: 'TDD Implementation',
          date: new Date(2012, 11, 24)
        });
        todo2 = new Task({
          label: 'Backbone + require + mocha',
          date: new Date(2012, 11, 25)
        });
        todo3 = new Task({
          label: 'Shower',
          date: new Date(2013, 0, 5)
        });
        this.tasks = new Tasks();
        this.tasks.add([todo1, todo2, todo3]);
        this.renderSpy = sinon.spy(ListView.prototype, 'render');
        return this.view = new ListView({
          collection: this.tasks
        });
      });
      afterEach(function() {
        return ListView.prototype.render.restore();
      });
      it("respond to render event", function() {
        this.tasks.trigger('filter');
        expect(this.renderSpy.called).to.equal(true);
        return expect(this.view.views.length).to.equal(3);
      });
      return it("respond to add event", function() {
        this.tasks.add(new Task({
          label: 'Specs',
          date: new Date()
        }));
        expect(this.renderSpy.called).to.equal(true);
        return expect(this.view.views.length).to.equal(4);
      });
    });
  });

}).call(this);
