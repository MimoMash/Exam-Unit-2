import test from "./test.mjs";
import { inchesToMillimeter } from "../functionTasks.mjs";

//inchesToMillimeter Function
const tests = test("Inches to Millimeter Function");
//Valid Inputs
tests.isEqual(inchesToMillimeter(2), 50.8, "2 inches is 50.8 mm");
tests.isEqual(inchesToMillimeter(4), 101.6, "4 inches is 101.6 mm");
//Invalid Inputs

//Edge Cases