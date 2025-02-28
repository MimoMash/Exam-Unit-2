import { books } from "../moduleSkillSummary_assignment-main/example_files/index.mjs"
import { booksStartingWithThe, countBooksAfter1992, countBooksBefore2004, booksByAuthorsWithT } from "../functionTasks.mjs"
import test from "./test.mjs"

// Book Functions
const tests = test("Book Functions");
// Valid Inputs
console.log(booksStartingWithThe(books));
console.log(booksByAuthorsWithT(books));
// Invalid Inputs

// Edge Cases