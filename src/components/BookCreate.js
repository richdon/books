import {useContext, useState} from "react";
import BooksContext from "../context/books";

function BookCreate(){
    const {createBook} = useContext(BooksContext);
    const [title, setTitle] = useState('');
    const handleFormSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }
    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    return <div className="book-create">
        <h3>Add a book</h3>
        <form onSubmit={handleFormSubmit}>
            <label>Enter book title: </label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button">Create Book</button>
        </form>
    </div>
}
export default BookCreate;