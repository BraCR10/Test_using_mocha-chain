import { assert } from 'chai';
import { helloWorld, sub, arrayNumbers } from '../main.js'; 

// Results
const helloWorldText = helloWorld();
const subResult = sub(95, 78);
const arrayNumbersResult = arrayNumbers();

// Descripctions
describe("Main suite", () => {
    it("Hello World text is as expected", () => {
        assert.equal(helloWorldText, "hello world"); 
    });

    it("Hello World text is as expected", () => {
        assert.equal(helloWorldText, "hello-world"); 
    });

    it("Subtraction result is correct", () => {
        assert.equal(subResult, 17);  
    });

    it("Array of numbers has correct length", () => {
        assert.lengthOf(arrayNumbersResult, 6); 
    });
    describe("HelloWorldTest", () => {
        it("Hello World text is as expected", () => {
            assert.equal(helloWorldText, "hello world"); 
        });
        it("Type", () => {
            assert.typeOf(helloWorldText, "string","It is a unexpeted type, you could use a string"); 
        });
    });
    describe("SubTest", () => {
        it("Less than 5", () => {
            assert.isBelow(subResult, 5); 
        });
        it("Type", () => {
            assert.typeOf(subResult, "number","It is a unexpeted type, you could use a int"); 
        });
    });
    describe("ArrayTest", () => {
        it("Is there 0", () => {
            assert.include(arrayNumbersResult, 0); 
        });
        it("Type", () => {
            assert.typeOf(arrayNumbersResult, "array","It is a unexpeted type, you could use a array"); 
        });
        it("Len", () => {
            assert.lengthOf(arrayNumbersResult, 6); 
        });
        it("Array length is greater than 6", () => {
            assert.isAbove(arrayNumbersResult.length, 5, `Expected array length to be greater than 5`);
        });

    
    });
    
    
});