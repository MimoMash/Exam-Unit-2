import test from "./test.mjs";
import squaredNumber from "./functionTasks.mjs";


const tests = test("Squared Function");

// Valid Inputs
tests.isEqual(squaredNumber(2), 4, "Squared number of 2 should be 4");
// Invalid Inputs

// Edge Cases