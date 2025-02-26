import test from "./test.mjs";
import { greetings } from "../functionTasks.mjs";

// Greetings Function
const tests = test("Greetings Function");
// Valid Inputs
tests.isEqual(greetings("John"), "Hello John", "Greeting 'John' should return 'Hello John'");
// Invalid Inputs

// Edge Cases