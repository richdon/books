import {useState} from "react";
import BookCreate from "./components/BookCreate";
import BookEdit from "./components/BookEdit";

function App() {
    const [books, setBooks] = useState([])

    const createBook = (title) => {
        console.log('need to add book with title:', title)
        const id = Math.floor(Math.random()) * 10
        const book = {id: id, title: title}
        setBooks([...books, book])
        console.log(books)
    }
    return <div>
        <BookCreate onCreate={createBook}/>
    </div>
}

export default App