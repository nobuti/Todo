define ['models/task'], (Task)->
  describe 'Task', ->
    
    it "should defaults to uncompleted status", ->
      task = new Task()
      expect(task.get('complete')).to.equal false

    it "should have today value in date", ->
      task = new Task()
      today = new Date()
      expect(task.get('date').getDate()).to.equal today.getDate()
      expect(task.get('date').getMonth()).to.equal today.getMonth()
      expect(task.get('date').getFullYear()).to.equal today.getFullYear()

    it "should be invalid with blank text", ->
      task = new Task()
      expect(task.set('label','')).to.equal false
      task.set({label:''}, {silent:true})
      expect(task.isValid()).to.equal false


