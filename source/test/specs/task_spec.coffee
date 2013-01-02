define ['models/task'], (Task)->
  describe 'Task', ->
    describe 'When creating new task', ->

      beforeEach ->
        this.task = new Task()

      it "should defaults to uncompleted status", ->
        expect(this.task.get('complete')).to.equal false

      it "should have today value in date", ->
        today = new Date()
        expect(this.task.get('date').getDate()).to.equal today.getDate()
        expect(this.task.get('date').getMonth()).to.equal today.getMonth()
        expect(this.task.get('date').getFullYear()).to.equal today.getFullYear()

      it "should be invalid with blank text", ->
        eventSpy = sinon.spy()
        this.task.on "error", eventSpy
  
        expect(this.task.set('label','')).to.equal false
        expect(eventSpy.calledOnce).to.equal true
