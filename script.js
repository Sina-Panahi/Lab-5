// This program represents a virtual bookshelf. The user can added books, view all the books in the library or
// Choose a books and view its details.

// This variable hold all the data for the boofshelf
const books = [];

function addBook(title, author, yearPublished) {
    books.push({
        title: title,
        author: author,
        yearPublished: yearPublished,
    });
    console.log('\"'+ title + '\" successfully added to the bookshelf.');
}

// Displays all the books in the books array.
function showBooks() {
    let index = 0;
    for (const book of books) {
        console.log(
            'index: ' + index + '\n' +
            'Title: ' + book['title'] +'\n' +
            'Author: ' + book['author'] +'\n' +
            'Year Published:' + book['yearPublished'] +'\n' 
        );
        index++;
    }
}

// Displays the books with the specified index.
function showBook(index) {
    console.log(
        'Title: ' + books[index]['title'] +'\n' +
        'Author: ' + books[index]['author'] +'\n' +
        'Year Published:' + books[index]['yearPublished'] +'\n' 
    );
}



console.log('Hi professor,');
console.log('Here is an example of adding an item to the bookshelf:');
console.log('Invoke Functions:');
console.log("addBook('The Picture of Dorian Gray', 'Oscar Wilde', '1890');");
console.log("addBook('Animla Farm', 'George Orwell', '1945');");
console.log('Result: ');
addBook('The Picture of Dorian Gray', 'Oscar Wilde', '1890');
addBook('Animla Farm', 'George Orwell', '1945');
console.log('\n************************');
console.log('Here is the result of running the showBooks() function: ');
console.log('showBooks();');
showBooks();
console.log('\n************************');
console.log('Here is the result of running the showBook(): ');
console.log('showBook(0);');
showBook(0);
console.log('\nI hope I could save you a few seconds by writing my program in this weird way! :D');