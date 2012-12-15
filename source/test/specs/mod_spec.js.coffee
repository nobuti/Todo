define ['person'],(Person)->

  describe 'Person', ->

    console.log Person

    it 'should have a name by default', ->
      expect(new Person().name).to.be.equal('Joe')
    

    it 'should allow a name to be set on creation', ->
      expect(new Person('Francis').name).to.be.equal('Francis')
    

    it('should have an age')

  