(function() {

  define(['buti'], function(Buti) {
    describe("Boolean", function() {
      return it("should true when the value is true", function() {
        return expect(true).to.equal(true);
      });
    });
    describe("Array", function() {
      return describe("#indexOf()", function() {
        return it("should return -1 when the value is not present", function() {
          expect(true).to.equal(true);
          expect([1, 2, 3].indexOf(5)).to.equal(-1);
          return expect([1, 2, 3].indexOf(5)).to.equal(-1);
        });
      });
    });
    return describe('Example', function() {
      return describe('#truth()', function() {
        return it('should return Boolean true', function() {
          console.log(Buti);
          expect(new Buti()).to.not.be.undefined;
          return expect(new Buti().method()).to.equal(true);
        });
      });
    });
  });

  return;

}).call(this);
