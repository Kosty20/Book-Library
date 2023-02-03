/* The Library */
let library = [
    new Book('Title', 'Author', 300, true),
    new Book('My Title', 'My Author', 200, false)
];

function Book (title, author, pageNum, finished) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.isFinished = finished;
}
Book.prototype.toggleIsFinished = function () {
    if(this.isFinished){
        return this.isFinished = false;
    } else {
        return this.isFinished = true;
    }
}

/* Modal */
const addBook = document.querySelector('main>button'),
addBookModal = document.querySelector('.new-book-modal');

addBook.onclick = openModal;

function openModal () {
    addBookModal.classList.add('active');
}
function closeModal () {
    addBookModal.classList.remove('active');
    resetInput();
}
document.onkeydown = (e) => {
    if (e.code === 'Escape') {
        closeModal();
    }
}
document.addEventListener('mousedown', (e) => {
    if (e.target.matches('.new-book-modal') && e.button === 0) {
        closeModal();
    }
})

/* Input Handling */
const titleInput = document.querySelector('#title-input'),
authorInput = document.querySelector('#author-input'),
pagesInput = document.querySelector('#pages-input'),
readInput = document.querySelector('#read-input'),
submit = document.querySelector('#submit-input');

submit.addEventListener('click', (e) => {
    if (titleInput.value !== '' && authorInput.value !== '' && pagesInput.value !== '') {
        e.preventDefault();
        resetLibrary();
        addNewBook();
        createAndDisplayCards();
        closeModal();
    }
})
function resetInput () {
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.checked = false;
}
function addNewBook () {
    library.unshift(new Book(
        titleInput.value,
        authorInput.value,
        pagesInput.value,
        readInput.checked
    ));
}

const libraryGrid = document.querySelector('.library-grid');

function createAndDisplayCards () {
    library.forEach(book => {
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const finished = document.createElement('div');
        const remove = document.createElement('div');
        const card = document.createElement('div');

        title.classList.add('title');
        author.classList.add('author');
        pages.classList.add('pages');
        finished.classList.add('read');
        if(book.isFinished){
            finished.classList.add('finished');
        }
        remove.classList.add('remove');
        card.classList.add('book-card');

        title.innerText = book.title;
        author.innerText = book.author;
        pages.innerText = `${book.pageNum} Pages`;
        finished.innerText = book.isFinished ? 'Finished' : 'Reading';
        remove.innerText = 'Remove';

        finished.addEventListener('click', () => {
            if (book.toggleIsFinished()){
                finished.innerText = 'Finished';
                finished.classList.add('finished');
            } else {
                finished.innerText = 'Reading'
                finished.classList.remove('finished');
            }
        }) 
        remove.addEventListener('click', () => {
            card.remove();
            library.splice(library.indexOf(book), 1);
        })
        
        libraryGrid.append(card);
        card.append(title, author, pages, finished, remove);
    })
}

function resetLibrary () {
    const books = libraryGrid.querySelectorAll('div')
    for (book of books) {
        book.remove();
    }
}


window.onload = createAndDisplayCards;