import test from "./test.mjs";
import { root } from "../functionTasks.mjs";

// Root Function
const tests = test("Root Function");
// Valid Inputs
tests.isEqual(root(4), 2, "Square root of 4 is 2");
tests.isEqual(root(9), 3, "Square root of 9 is 3");
tests.isEqual(root(1), 1, "Square root of 1 is 1");
// Invalid Inputs
tests.isNotANumber(root(undefined), "Undefined should return NaN");
tests.isNotANumber(root(null), "Null should return NaN");
tests.isNotANumber(root(NaN), "NaN should return NaN");
tests.isNotANumber(root("4"), "'4' should return NaN");
// Edge Cases