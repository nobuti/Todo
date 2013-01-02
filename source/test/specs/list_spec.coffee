define ['models/task', 'collections/tasks', 'views/list_view'], (Task, Tasks,  ListView)->
  describe "ListView", ->
    
    beforeEach ->
      todo1 = new Task({label:'TDD Implementation', date: new Date(2012, 11, 24)})
      todo2 = new Task({label:'Backbone + require + mocha', date: new Date(2012, 11, 25)})
      todo3 = new Task({label:'Shower', date: new Date(2013, 0, 5)})
      this.tasks = new Tasks()
      this.tasks.add [todo1, todo2, todo3]

      this.renderSpy = sinon.spy(ListView.prototype, 'render')
      this.view = new ListView({
        collection: this.tasks
      })

    afterEach ->
      ListView.prototype.render.restore()

    it "respond to render event", ->
      this.tasks.trigger 'filter'
      expect(this.renderSpy.called).to.equal true
      expect(this.view.views.length).to.equal 3

    it "respond to add event", ->
      this.tasks.add new Task({label:'Specs', date: new Date()})
      expect(this.renderSpy.called).to.equal true
      expect(this.view.views.length).to.equal 4
      