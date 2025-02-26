import test from "./test.mjs";
import { inchesToMillimeter } from "../functionTasks.mjs";

//inchesToMillimeter Function
const tests = test("Inches to Millimeter Function");
//Valid Inputs
tests.isEqual(inchesToMillimeter(2), 50.8, "2 inches is 50.8 mm");
tests.isEqual(inchesToMillimeter(4), 101.6, "4 inches is 101.6 mm");
tests.isEqual(inchesToMillimeter(2.5), 63.5, "2.5 inches is 63.5 mm");
//Invalid Inputs
tests.isNotANumber(inchesToMillimeter("2"), "'2' inches should be NaN");
tests.isNotANumber(inchesToMillimeter(null), "Null should be NaN");
tests.isNotANumber(inchesToMillimeter(NaN), "NaN should be NaN");
tests.isNotANumber(inchesToMillimeter(undefined), "Undefined should be NaN");
//Edge Cases
tests.isEqual(inchesToMillimeter(Infinity), Infinity, "Infinity inches is Infinity mm");