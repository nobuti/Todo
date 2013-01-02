(function() {

  define(['models/task', 'collections/tasks'], function(Task, Tasks) {
    return describe('Tasks', function() {
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
        return this.tasks.add([todo1, todo2, todo3]);
      });
      it("Should have all models", function() {
        return expect(this.tasks.length).to.equal(3);
      });
      return it("Sorting by date last first", function() {
        expect(this.tasks.at(0).get('label')).to.equal('Shower');
        expect(this.tasks.at(1).get('label')).to.equal('Backbone + require + mocha');
        return expect(this.tasks.at(2).get('label')).to.equal('TDD Implementation');
      });
    });
  });

}).call(this);
