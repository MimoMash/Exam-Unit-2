import { books } from "../moduleSkillSummary_assignment-main/example_files/index.mjs"
import { booksStartingWithThe, countBooksAfter1992, countBooksBefore2004, booksByAuthorsWithT, getISBNsByAuthor, sortBooksByTitle, sortBooksByYear } from "../functionTasks.mjs"
import test from "./test.mjs"

// Book Functions
const tests = test("Book Functions");
// Valid Inputs
console.log(booksStartingWithThe(books));
console.log(booksByAuthorsWithT(books));
console.log(countBooksAfter1992(books));
console.log(countBooksBefore2004(books));
console.log(getISBNsByAuthor(books, "Terry Pratchett"));
console.log(sortBooksByTitle(books, "ascending"));
console.log(sortBooksByYear(books, "descending"));
// Invalid Inputs

// Edge Cases