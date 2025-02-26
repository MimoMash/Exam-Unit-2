import test from "./test.mjs";
import { cubedNumber } from "../functionTasks.mjs";

// cubedNumber Function
const tests = test("Cubed Number Function");
// Valid Inputs
tests.isEqual(cubedNumber(2), 8, "Cubed number of 2 should be 8");
tests.isEqual(cubedNumber(4), 64, "Cubed number of 4 should be 64");
// Invalid Inputs

// Edge Cases
