import {useEffect} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/use-books-context";
function App() {
    const {getBooks} = useBooksContext()
    useEffect(getBooks, [])


    return <div className="app">
        <h1>Reading List</h1>
        <BookCreate/>
        <BookList/>
    </div>
}

export default App