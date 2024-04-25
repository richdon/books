import {useState} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([])

    const createBook = (title) => {
        console.log('need to add book with title:', title)
        const id = Math.round(Math.random() * 9999)
        const book = {id, title}
        setBooks([...books, book])
        console.log(books)
    }

    const deleteBookById = (id) => {

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    }

    return <div className="app">
        <BookCreate onCreate={createBook}/>
        <BookList books={books} onDelete={deleteBookById}/>
    </div>
}

export default App