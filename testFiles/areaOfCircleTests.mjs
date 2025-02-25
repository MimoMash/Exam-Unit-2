import test from "./test.mjs";
import { areaOfCircle } from "../functionTasks.mjs";

// Area of Circle Function
const tests = test("Area of Circle function");
// Valid Inputs
tests.isEqual(areaOfCircle(1), 3.14, "Area of a circle with radius 1 should be 3.14");
tests.isEqual(areaOfCircle(2), 12.56, "Area of a circle with radius 2 should be 12.56");
tests.isEqual(areaOfCircle(2.5), 19.625, "Area of a circle with radius 2.5 should be 19.625");
// Invalid Inputs
tests.isNotANumber(areaOfCircle(null), "Area of a circle with radius null should be NaN");
tests.isNotANumber(areaOfCircle(NaN), "Area of a circle with radius NaN should be NaN");
tests.isNotANumber(areaOfCircle(undefined), "Area of a circle with radius undefined should be NaN");
tests.isNotANumber(areaOfCircle(-5), "Area of a circle with negative radius should be NaN");
tests.isNotANumber(areaOfCircle("3"), "Area of a circle with string '3' should be NaN");
// Edge Cases
tests.isEqual(areaOfCircle(Infinity), Infinity, "Area of a circle with an infinite radius should be Infinity");
tests.isEqual(areaOfCircle(-Infinity), NaN, "Area of a circle with an -infinite radius should be NaN");
tests.isEqual(areaOfCircle(0), 0, "Area of a circle with radius 0 should be 0");