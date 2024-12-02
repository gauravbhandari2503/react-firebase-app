import React, {useEffect, useState} from 'react';
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
            const bookCollection = collection(db, "books");
            const bookSnapshot = await getDocs(bookCollection);
            setBooks(bookSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };
        fetchBooks();
    }, []);

    return (
        <div className='min-h-screen bg-gray-100 py-8'>
            <div className='container mx-auto px-4'>
                <h1 className='text-3xl font-bold text-center text-blue-600 mb-8'>Book List</h1>
                <div className='flex justify-end mb-4'>
                    <Link
                        to='/add-book'
                        className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600'
                    >
                        Add Book
                    </Link>
                </div>
                <ul className='space-y-4'>
                    {books.length ? books.map((book) => (
                        <li
                            key={book.id}
                            className='bg-white shadow-lg rounded-lg p-4 flex justify-between items-center'
                        >
                            <div>
                                <h3 className='text-xl font-semibold text-blue-500'>{book.title}</h3>
                                <p className='text-gray-600'>{book.author}</p>
                                <p className='text-gray-600'>${book.price}</p>
                                <img src={book.coverImage} alt="book cover" className="w-24 h-24 object-cover rounded-lg" />
                            </div>
                            <Link
                                to={`/edit-book/${book.id}`}
                                className='text-blue-500 hover:underline'
                            >
                                Edit
                            </Link>
                        </li>
                    )) : <li>No Books Found</li>}
                </ul>
            </div>
        </div>
    )
};
export default Books;