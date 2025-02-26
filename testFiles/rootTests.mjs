import test from "./test.mjs";
import { root } from "../functionTasks.mjs";

// Root Function
const tests = test("Root Function");
// Valid Inputs
tests.isEqual(root(4), 2, "Square root of 4 is 2");
tests.isEqual(root(9), 3, "Square root of 9 is 3");
// Invalid Inputs

// Edge Cases