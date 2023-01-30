
let library = [];

function Book (title, author, pageNum, finished) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.finished = finished;
}
Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pageNum} pages, ${this.finished ? 'finished reading' : 'not read yet'}`;
}

function addBooks() {
    library.push(Book());
}

