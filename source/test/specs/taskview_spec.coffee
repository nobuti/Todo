define ['backbone', 'models/task', 'views/task_view'], (Backbone, Task, TaskView)->
  describe "TaskView", ->

    beforeEach ->
      this.server = sinon.fakeServer.create()
      this.server.respondWith("POST", "/task", [ 200, { "Content-Type": "application/json" }, '{ "id": 1, "label": "TDD Implementation"}'])
      todo1 = new Task({label:'TDD Implementation', date: new Date(2012, 11, 24)})
      this.renderSpy = sinon.spy(TaskView.prototype, 'render')
      this.view = new TaskView({
        model: todo1
      })

    afterEach ->
      this.server.restore()
      TaskView.prototype.render.restore()

    it "respond to change model event", ->
      this.server.respond()
      this.view.model.save({
        complete: true
        })
      expect(this.renderSpy.called).to.equal true

    it "respond to click event", ->
      this.view.clickHandler()
      expect(this.view.model.get('complete')).to.equal true
      expect(this.renderSpy.called).to.equal true
      this.view.clickHandler()
      expect(this.renderSpy.called).to.equal true
      expect(this.view.model.get('complete')).to.equal false
      
      