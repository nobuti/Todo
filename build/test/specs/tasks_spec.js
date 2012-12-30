(function() {

  define(['models/task', 'collections/tasks'], function(Task, Tasks) {
    return describe('Tasks', function() {
      it("Right fetch", function() {
        var tasks, todo1, todo2;
        todo1 = new Task({
          label: 'TDD Implementation'
        });
        todo2 = new Task({
          label: 'Backbone + require + mocha'
        });
        tasks = new Tasks([todo1, todo2]);
        expect(tasks.length).to.equal(2);
        return expect(tasks.at(0).get('label')).to.equal('TDD Implementation');
      });
      return it("Sorting by date", function() {
        var plucks, tasks, todo1, todo2, todo3;
        todo1 = new Task({
          label: 'TDD Implementation',
          date: new Date(2012, 11, 24)
        });
        todo2 = new Task({
          label: 'Backbone + require + mocha',
          date: new Date(2012, 11, 25)
        });
        todo3 = new Task({
          label: 'Shopping',
          date: new Date(2013, 0, 5)
        });
        tasks = new Tasks([todo1, todo2, todo3]);
        plucks = tasks.pluck('label');
        expect(plucks[0]).to.equal('Shopping');
        expect(plucks[1]).to.equal('Backbone + require + mocha');
        return expect(plucks[2]).to.equal('TDD Implementation');
      });
    });
  });

}).call(this);
