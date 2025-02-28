function makePowerFunction(exponent) {
    if (typeof exponent !== "number" || isNaN(exponent)) {
        return NaN;
    }
    return (base) => {
        if (typeof base !== "number" || isNaN(base)) {
            return NaN;
        }
        return base ** exponent;
    };
}

function inchesToMillimeter(inches) {
    if (typeof inches !== "number" || isNaN(inches)) {
        return NaN;
    } 

    if (inches < 0) {
        inches *= -1;
    }

    return inches * 25.4;
}

function root(number) {
    if (typeof number !== "number" || isNaN(number) || number < 0) {
        return NaN;
    }

    if (number === Infinity) {
        return Infinity;
    }
    let guess = number / 2;
    let precision = 0.00001; 
    
    while ((guess * guess - number > precision) || (number - guess * guess > precision)) {
        guess = (guess + number / guess) / 2;
    }

    let multiplier = 100000;
    let value = guess * multiplier + 0.5; 
    let roundedNumber = (value - (value % 1)) / multiplier; 

    return roundedNumber;
}

function areaOfCircle(radius) {
    if (typeof radius !== "number" || isNaN(radius) || radius < 0) {
        return NaN;
    }

    const PI = 3.14;
    const area = PI * radius * radius;

    return area;
}

function greetings(name) {
    if (typeof name !== "string") {
        return "Hello!";
    }

    if (name === "") {
        return "Hello!";
    }
    return "Hello " + name;
}

function flattenArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            result[result.length] = arr[i]; 
        } else if (Array.isArray(arr[i])) {
            let flat = flattenArray(arr[i]); 
            for (let j = 0; j < flat.length; j++) {
                result[result.length] = flat[j];
            }
        }
    }

    return result;
}

function structureStats(node) {
    let sum = 0;
    let deepestLevel = 0;
    let nodeCount = 0;

    function search(node, level) {
        if (!node) return;

        sum += node.value;
        nodeCount++;
        if (level > deepestLevel) {
            deepestLevel = level;
        }

        search(node.left, level + 1);
        search(node.right, level + 1);
    }

    search(node, 1);

    return {
        sum: sum,
        deepestLevel: deepestLevel,
        nodeCount: nodeCount
    };
}

function booksStartingWithThe(books) {
    let result = [];
    for (let i = 0; i < books.length; i++) {
        if (
            books[i].title.length >= 3 &&
            books[i].title[0] === "T" &&
            books[i].title[1] === "h" &&
            books[i].title[2] === "e" &&
            (books[i].title.length === 3 || books[i].title[3] === " ")
        ) {
            result[result.length] = books[i];
        }
    }
    return result;
}

function booksByAuthorsWithT(books) {
    let result = [];

    for (let i = 0; i < books.length; i++) {
        let author = books[i].author;
        for (let j = 0; j < author.length; j++) {
            if (author[j] === "t" || author[j] === "T") {
                result[result.length] = books[i];
                break; 
            }
        }
    }

    return result;
}

function countBooksAfter1992(books) {
    let count = 0;

    for (let i = 0; i < books.length; i++) {
        let year = books[i].publication_year;
        if (year > 1992) {
            count++;
        }
    }

    return count;
}

function countBooksBefore2004(books) {
    let count = 0;

    for (let i = 0; i < books.length; i++) {
        let year = books[i].publication_year;
        if (year < 2004) {
            count++;
        }
    }

    return count;
}

function getISBNsByAuthor(books, author) {
    let isbns = [];
    
    for (let i = 0; i < books.length; i++) {
        let currentBook = books[i];
        if (currentBook.author === author) {
            isbns[isbns.length] = currentBook.isbn;
        }
    }

    return isbns;
}

function sortBooksByTitle(books, order) {
    let n = books.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            let titleA = books[j].title;
            let titleB = books[j + 1].title;

            if ((order === "ascending" && titleA > titleB) || (order === "descending" && titleA < titleB)) {
                let temp = books[j];
                books[j] = books[j + 1];
                books[j + 1] = temp;
            }
        }
    }

    let sortedTitles = [];
    for (let i = 0; i < n; i++) {
        sortedTitles[i] = books[i].title;
    }
    
    return sortedTitles;
}
const squaredNumber = makePowerFunction(2);
const cubedNumber = makePowerFunction(3);

export { squaredNumber, inchesToMillimeter, root, cubedNumber, areaOfCircle, greetings, flattenArray, structureStats, booksStartingWithThe, booksByAuthorsWithT, countBooksAfter1992, countBooksBefore2004, getISBNsByAuthor, sortBooksByTitle }