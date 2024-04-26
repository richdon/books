import {createContext, useState} from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}) {

    const [books, setBooks] = useState([])
    const booksContext = {
        books,
        getBooks: async () => {
            const response = await axios.get('http://localhost:3001/books');
            console.log('response from get books is', response.data)
            setBooks(response.data)
        },
        createBook: async (title) => {
            const response = await axios.post('http://localhost:3001/books', {
                title
            });
            setBooks([...books, response.data])
        },
        deleteBookById: async (id) => {
            console.log(id)
            await axios.delete(`http://localhost:3001/books/${id}`)
            const updatedBooks = books.filter((book) => {
                return book.id !== id;
            });
            setBooks(updatedBooks);
        },
        editBookById: async (id, newTitle) => {
            const response = await axios.put(`http://localhost:3001/books/${id}`,
                {title: newTitle})
            const updatedBooks = books.map((book) => {
                if (book.id === id) {
                    return {...book, ...response.data}
                }
                return book;

            });
            setBooks(updatedBooks);
        }

    };
    return <BooksContext.Provider value={booksContext}>
        {children}
    </BooksContext.Provider>
}


export {Provider};
export default BooksContext;