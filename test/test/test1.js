const {evenodd} = require("../file");

var assert = require("assert");

describe("second task", function () {
 

  it("check odd or even", function(){
    const result =evenodd(41);
    assert.strictEqual(result, "odd");
    
  })

  
});
