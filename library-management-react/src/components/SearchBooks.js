import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../cssfolder/SearchBooks.css';
import MemberNavbar from './MemberNavbar';

export default function SearchBooks() {
    const [bookName, setBookName] = useState('');
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:8080/getAllBooks');
                setBooks(response.data);
                setFilteredBooks(response.data);
            } catch (error) {
                console.error('There was an error fetching the books:', error);
                setError('There was an error fetching the books. Please try again.');
            }
        };

        fetchBooks();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = books.filter(book =>
            book.bookName.toLowerCase().includes(bookName.toLowerCase())
        );
        setFilteredBooks(filtered);
    };

    return (
        <div>
            <MemberNavbar />
            <div className="SearchBook-container">
                <h2 className="SearchBook-title">Search Books</h2>
                <form className="SearchBook-form" onSubmit={handleSearch}>
                    <input
                        type="text"
                        className="SearchBook-input"
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                        placeholder="Enter Book Name"
                    />
                    <button type="submit" className="SearchBook-button">Search</button>
                </form>
                {error && <p className="SearchBook-error">{error}</p>}
                <div className="SearchBook-results">
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book, index) => (
                            <div key={index} className="SearchBook-result">
                                <p><strong>Book Name:</strong> {book.bookName}</p>
                                <p><strong>Book ID:</strong> {book.bookId}</p>
                                <p><strong>Author:</strong> {book.bookAuthor}</p>
                                <p><strong>Shelf Number:</strong> {book.shelfNo}</p>
                                <p><strong>Rack Number:</strong> {book.rackNo}</p>
                                <p><strong>Books Left:</strong> {book.booksLeft}</p>
                            </div>
                        ))
                    ) : (
                        <p>No books found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
