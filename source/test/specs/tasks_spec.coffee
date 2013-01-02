define ['models/task', 'collections/tasks'], (Task, Tasks)->
  describe 'Tasks', ->
    
    beforeEach ->
      todo1 = new Task({label:'TDD Implementation', date: new Date(2012, 11, 24)})
      todo2 = new Task({label:'Backbone + require + mocha', date: new Date(2012, 11, 25)})
      todo3 = new Task({label:'Shower', date: new Date(2013, 0, 5)})
      @tasks = new Tasks()
      @tasks.add [todo1, todo2, todo3]

    it "Should have all models", ->
      expect(@tasks.length).to.equal 3

    it "Sorting by date last first", ->
      expect(@tasks.at(0).get('label')).to.equal 'Shower'
      expect(@tasks.at(1).get('label')).to.equal 'Backbone + require + mocha'
      expect(@tasks.at(2).get('label')).to.equal 'TDD Implementation'
    