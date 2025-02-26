import test from "./test.mjs";
import { cubedNumber } from "../functionTasks.mjs";

// cubedNumber Function
const tests = test("Cubed Number Function");
// Valid Inputs
tests.isEqual(cubedNumber(2), 8, "Cubed number of 2 should be 8");
tests.isEqual(cubedNumber(4), 64, "Cubed number of 4 should be 64");
tests.isEqual(cubedNumber(-3), -27, "Cubed number of -3 should be -27");
tests.isEqual(cubedNumber(2.5), 15.625, "Cubed number of 2.5 should be 15.625");
// Invalid Inputs
tests.isNotANumber(cubedNumber(null), "Cubed number of null should be NaN");
tests.isNotANumber(cubedNumber(NaN), "Cubed number of NaN should be NaN");
tests.isNotANumber(cubedNumber(undefined), "Cubed number of undefined should be NaN");
// Edge Cases
