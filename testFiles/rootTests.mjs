import test from "./test.mjs";
import { root } from "../functionTasks.mjs";

// Root Function
const tests = test("Root Function");
// Valid Inputs
tests.isEqual(root(4), 2, "Square root of 4 is 2");
tests.isEqual(root(9), 3, "Square root of 9 is 3");
tests.isEqual(root(1), 1, "Square root of 1 is 1");
tests.isEqual(root(2.5), 1.58114, "Square root of 2.5 is 1.58114");
// Invalid Inputs
tests.isNotANumber(root(undefined), "Undefined should return NaN");
tests.isNotANumber(root(null), "Null should return NaN");
tests.isNotANumber(root(NaN), "NaN should return NaN");
tests.isNotANumber(root("4"), "'4' should return NaN");
// Edge Cases
tests.isEqual(root(Infinity), Infinity, "Square root of Infinity is Infinity");
tests.isEqual(root(-Infinity), NaN, "-Infinity should return NaN");
tests.isEqual(root(0), 0, "Square root of 0 is 0");
