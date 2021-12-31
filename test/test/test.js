const { add ,  dob} = require("../file");

var assert = require("assert");

describe("first task", function () {
  it("check two number", function () {
    const result = add(5, 6);
    assert.strictEqual(result, 11);
  });

  it("second case", function(){
    const result = add(-5, -6);
    assert.strictEqual(result, -11);

  })

  it("third case", function(){
    const result = add(-5, -6);
    assert.notEqual(result, -10);
    
  })

  // it("check even odd", function(){
  //   const result =evenodd(41);
  //   assert.strictEqual(result, "odd");
    
  // })

  it("check the  dob", function(){
    assert.strictEqual(dob, "12.12.2002");
    
  })

  it("check ")

  
});
