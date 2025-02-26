import test from "./test.mjs";
import { squaredNumber } from "../functionTasks.mjs";


//SquaredNumber Function
const tests = test("Squared Function");
// Valid Inputs
tests.isEqual(squaredNumber(2), 4, "Squared number of 2 should be 4");
tests.isEqual(squaredNumber(4), 16, "Squared number of 4 should be 16");
tests.isEqual(squaredNumber(-3), 9, "Squared number of -3 should be 9");
tests.isEqual(squaredNumber(2.5), 6.25, "Squared number of 2.5 should be 6.25");
// Invalid Inputs
tests.isNotANumber(squaredNumber(null), "Squared number of '2' should be NaN");
tests.isNotANumber(squaredNumber(NaN), "Squared number of NaN should be NaN");
tests.isNotANumber(squaredNumber(undefined), "Squared number of undefined should be NaN");
// Edge Cases
tests.isEqual(squaredNumber(Infinity), Infinity, "Squared number of infinity should be infinity");
tests.isEqual(squaredNumber(-Infinity), Infinity, "Squared number of -infinity should be infinity");
tests.isEqual(squaredNumber(0), 0, "Squared number of 0 should be 0");
