
let library = [
    new Book('area', 'meme', 12, true),
    new Book('meme', 'Area', 12, false),
    new Book('Dicks 101', 'Daddy', 12, true)
];

function Book (title, author, pageNum, finished) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.isFinished = finished;
}

function addNewBook() {
    library.unshift(new Book(
        titleInput.value, 
        authorInput.value, 
        pagesInput.value, 
        readInput.checked
        )
    );
}

const addBook = document.querySelector('.add-book'),
addBookModal = document.querySelector('.add-book-modal');

addBook.onclick = openModal;

function openModal () {
    addBookModal.classList.add('active');
}
function closeModal () {
    addBookModal.classList.remove('active');
}

document.addEventListener('click', (e) => {
    if(e.target.matches('.add-book-modal')){
        closeModal();
    }
})

const titleInput = document.querySelector('#title-input'),
authorInput = document.querySelector('#author-input'),
pagesInput = document.querySelector('#pages-input'),
readInput = document.querySelector('#read-input'),
submit = document.querySelector('#submit-input');

submit.addEventListener('click', (e) => {
    if (titleInput.value !== '' && authorInput.value !== '' && pagesInput.value !== ''){
        e.preventDefault();
        addNewBook();
        displayBookCards();
        
    }
})

const libraryGrid = document.querySelector('.library-grid');

function displayBookCards() {
    for(book of library){
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
        remove.classList.add('remove');
        card.classList.add('book-card');
        title.innerText = book.title;
        author.innerText = book.author;
        pages.innerText = `${book.pageNum} Pages`;
        finished.innerText = book.isFinished ? 'Finished' : 'Reading';
        remove.innerText = 'Remove';
        libraryGrid.append(card);
        card.append(title, author, pages, finished, remove);
    }
}

displayBookCards();

