import {useState} from "react";
import BookCreate from "./components/BookCreate";
import BookEdit from "./components/BookEdit";
import BookList from "./components/BookList";
function App() {
    const [books, setBooks] = useState([])

    const createBook = (title) => {
        console.log('need to add book with title:', title)
        const id = Math.round(Math.random()* 9999)
        const book = {id, title}
        setBooks([...books, book])
        console.log(books)
    }
    return <div>
        <BookCreate onCreate={createBook}/>
        <BookList books={books}/>
    </div>
}

export default App