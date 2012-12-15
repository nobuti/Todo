(function() {

  define(['person'], function(Person) {
    return describe('Person', function() {
      console.log(Person);
      it('should have a name by default', function() {
        return expect(new Person().name).to.be.equal('Joe');
      });
      it('should allow a name to be set on creation', function() {
        return expect(new Person('Francis').name).to.be.equal('Francis');
      });
      return it('should have an age');
    });
  });

}).call(this);
