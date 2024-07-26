import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../cssfolder/ProductCard.css'; // Ensure this file exists and has the necessary styles
import '../cssfolder/SearchBooks.css'; // Ensure this file exists and has the necessary styles
import MemberNavbar from './MemberNavbar';

const ProductCard = ({ book }) => {
    return (
        <div className="productcard">
            <div className="card-info">

                <h2 className="card-name">{book.bookName}</h2>
                <p className="card-description"><strong>Author:</strong> {book.bookAuthor}</p>
                <p className="card-description"><strong>Shelf Number:</strong> {book.shelfNo}</p>
                <p className="card-description"><strong>Rack Number:</strong> {book.rackNo}</p>
                <p className="card-description"><strong>Books Left:</strong> {book.booksLeft}</p>
            </div>
        </div>
    );
};

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
                            <ProductCard key={index} book={book} />
                        ))
                    ) : (
                        <p>No books found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
