import test from "./test.mjs";
import { areaOfCircle } from "../functionTasks.mjs";

// Area of Circle Function
const tests = test("Area of Circle function");
// Valid Inputs
tests.isEqual(areaOfCircle(1), 3.14, "Area of a circle with radius 1 should be 3.14");
// Invalid Inputs

// Edge Cases