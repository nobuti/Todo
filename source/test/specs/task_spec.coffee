define ['models/task'], (Task)->
  describe 'Task', ->
    describe 'When creating new task', ->

      beforeEach ->
        @task = new Task()

      it "should defaults to uncompleted status", ->
        expect(@task.get('complete')).to.equal false

      it "should have today value in date", ->
        today = new Date()
        expect(@task.get('date').getDate()).to.equal today.getDate()
        expect(@task.get('date').getMonth()).to.equal today.getMonth()
        expect(@task.get('date').getFullYear()).to.equal today.getFullYear()

      it "should be invalid with blank text", ->
        eventSpy = sinon.spy()
        @task.on "error", eventSpy
  
        expect(@task.set('label','')).to.equal false
        expect(eventSpy.calledOnce).to.equal true;
