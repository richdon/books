import {useContext} from "react";
import BookShow from "./BookShow";
import BooksContext from "../context/books";

function BookList() {
    const booksContext = useContext(BooksContext);

    const renderedBooks = booksContext.books.map((book) => {
        return <BookShow key={book.id} book={book}/>
    });
    return <div className="book-list">
        {renderedBooks}
    </div>;
}

export default BookList;