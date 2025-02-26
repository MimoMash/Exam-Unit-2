import test from "./test.mjs";
import { cubedNumber } from "../functionTasks.mjs";

// cubedNumber Function
const tests = test("Cubed Number Function");
// Valid Inputs
tests.isEqual(cubedNumber(2), 8, "Cubed number of 2 should be 8");

// Invalid Inputs

// Edge Cases
