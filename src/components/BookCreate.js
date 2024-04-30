import {useState} from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate(){
    const {createBook} = useBooksContext();
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