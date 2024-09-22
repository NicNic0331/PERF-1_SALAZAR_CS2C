// Define a class to demonstrate the differences between let, var, and const
class VariableDemo {
    constructor() {}

    // Introduction
    printIntroduction() {
        console.log(`
        Differentiation of let, const, and var in JavaScript

        In JavaScript, variables can be declared using three keywords: let, var, and const.
    
        1. var
           - Function-scoped: Variables declared with var are accessible within the function they were declared in.
           - Can be redeclared and reassigned, which can lead to unexpected behavior if not managed carefully.
           - Allows hoisting: Variables can be used before they are declared, returning undefined.
           - Best practice: Generally discouraged in favor of let and const due to its quirks with scope and hoisting.

        2. let
           - Block-scoped: Variables declared with let are only accessible within the block they are defined in.
           - Can be reassigned but not redeclared within the same block, reducing the chances of errors.
           - Does not allow hoisting in the same way var does; accessing it before declaration results in a ReferenceError.
           - Best practice: Use let when the variable’s value needs to change.

        3. const
           - Block-scoped: Similar to let, const variables are only accessible within the block they are defined in.
           - Cannot be reassigned or redeclared, making it ideal for constants.
           - While the reference to a const variable cannot change, if it is an object, the properties of that object can be modified.
           - Best practice: Use const by default for variables that should not change, and only use let when reassignment is necessary.

        References:
        - MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
        - MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
        - MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
        - JavaScript Info: https://javascript.info/variables
        - ECMAScript 6 Guide: https://exploringjs.com/es6/ch_variables.html#sec_block-scoping
        `);
    }

    // Example of var
    varExample() {
        var x = 10;  // Variable declaration using var
        if (true) {
            var x = 20;  // var is function-scoped, so this modifies the same x variable
            console.log("Inside block with var: " + x); // Outputs: 20
        }
        console.log("Outside block with var: " + x); // Outputs: 20 (same x is modified)
    }

    // Example of let
    letExample() {
        let y = 10;  // Variable declaration using let
        if (true) {
            let y = 20;  // let is block-scoped, so this y is different from the outer y
            console.log("Inside block with let: " + y); // Outputs: 20 (different block-scoped y)
        }
        console.log("Outside block with let: " + y); // Outputs: 10 (outer y remains unchanged)
    }

    // Example of const
    constExample() {
        const z = 10;  // Variable declaration using const
        console.log("Initial const value: " + z); // Outputs: 10

        // Uncommenting the line below will throw an error because const cannot be reassigned.
        // z = 20;

        const obj = { name: "Nicole" };  // const with objects allows modification of properties.
        obj.name = "Salazar";
        console.log("Modified const object: " + obj.name); // Outputs: "Salazar"
    }

    // Summary of the differences.
    summary() {
        return `
        1. var: Function-scoped, can be redeclared and reassigned. It supports hoisting (declared at the top of the scope).
        2. let: Block-scoped, can be reassigned but not redeclared within the same block. Doesn't support hoisting.
        3. const: Block-scoped, cannot be reassigned or redeclared. Useful for constants or when reassignment is not needed.
        `;
    }
}

// Instantiate the class.
let variableDemo = new VariableDemo();

// Print the introduction.
variableDemo.printIntroduction();

// Run the examples
console.log("Var Example:");
variableDemo.varExample();

console.log("\nLet Example:");
variableDemo.letExample();

console.log("\nConst Example:");
variableDemo.constExample();

console.log("\nSummary of Differences:");
console.log(variableDemo.summary());

// Concept of falsy values.
function printFalsyValuesConcept() {
    console.log(`
    Concept of Falsy Values in JavaScript

    In JavaScript, a falsy value is a value that translates to false when evaluated in a Boolean context.
    There are exactly seven falsy values: false, 0, "", null, undefined, NaN, and document.all.
    These values are treated as false when used in conditional statements, which means they do not trigger the execution of the code block inside the statement.
    Understanding falsy values is crucial for controlling the flow of logic in your programs, as they can lead to unexpected behavior if not properly accounted for.
    For instance, if a variable is falsy, it can prevent certain actions from being taken or cause loops to terminate prematurely.
    
    References:
    - MDN Web Docs: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
    - JavaScript Info: https://javascript.info/truthiness
    - W3Schools: https://www.w3schools.com/js/js_type_conversion.asp
    `);
}

// Print the concept.
printFalsyValuesConcept();

// Demonstrate falsy values.
function demonstrateFalsyValues() {
    // Example 1
    const example1 = false;
    if (!example1) {
        console.log("Example 1: 'false' is a falsy value, hence this block executes.");
    }

    // Example 2
    const example2 = 0;
    if (!example2) {
        console.log("Example 2: '0' is a falsy value because it represents the absence of quantity.");
    }

    // Example 3
    const example3 = "";
    if (!example3) {
        console.log("Example 3: An empty string '' is a falsy value because it has no characters.");
    }
}

// Function to demonstrate falsy values.
demonstrateFalsyValues();