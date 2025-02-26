import test from "./test.mjs";
import { greetings } from "../functionTasks.mjs";

// Greetings Function
const tests = test("Greetings Function");
// Valid Inputs
tests.isEqual(greetings("John"), "Hello John", "Greeting 'John' should return 'Hello John'");
tests.isEqual(greetings("Mary Jane"), "Hello Mary Jane", "Greeting 'Mary Jane' should return 'Hello Mary Jane'");
// Invalid Inputs
tests.isEqual(greetings(""), "Hello!", "Empty string should return 'Hello!'");
// Edge Cases