define ['models/task', 'collections/tasks'], (Task, Tasks)->
  describe 'Tasks', ->
    
    it "Right fetch", ->
      todo1 = new Task({label:'TDD Implementation'})
      todo2 = new Task({label:'Backbone + require + mocha'})
      tasks = new Tasks([todo1, todo2])
      expect(tasks.length).to.equal 2
      expect(tasks.at(0).get('label')).to.equal 'TDD Implementation'

    it "Sorting by date", ->
      todo1 = new Task({label:'TDD Implementation', date: new Date(2012, 11, 24)})
      todo2 = new Task({label:'Backbone + require + mocha', date: new Date(2012, 11, 25)})
      todo3 = new Task({label:'Shopping', date: new Date(2013, 0, 5)})
      tasks = new Tasks([todo1, todo2, todo3])
      plucks = tasks.pluck('label')
      expect(plucks[0]).to.equal 'Shopping'
      expect(plucks[1]).to.equal 'Backbone + require + mocha'
      expect(plucks[2]).to.equal 'TDD Implementation'
      