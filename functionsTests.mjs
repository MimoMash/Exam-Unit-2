import test from "./test.mjs";
import squaredNumber from "./functionTasks.mjs";


const tests = test("Squared Function");

// Valid Inputs
tests.isEqual(squaredNumber(2), 4, "Squared number of 2 should be 4");
tests.isEqual(squaredNumber(4), 16, "Squared number of 4 should be 16");
// Invalid Inputs

// Edge Cases