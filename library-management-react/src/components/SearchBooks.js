import React, { useState } from 'react';
import '../cssfolder/SearchBooks.css';
import MemberNavbar from './MemberNavbar';

export default function SearchBooks() {
    const [bookName, setBookName] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        // Simulated search result
        const result = {
            bookName: bookName,
            author: "Author Name",
            shelfNumber: "Shelf 5",
            rackNumber: "Rack 3",
            booksLeft: 7
        };
        setSearchResult(result);
    }

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
                        placeholder="Enter book name"
                        />
                        <button type="submit" className="SearchBook-button">Search</button>
                        </form>
                        {searchResult && (
                            <div className="SearchBook-result">
                            <h3>Search Result:</h3>
                            <p><strong>Book Name:</strong> {searchResult.bookName}</p>
                            <p><strong>Author:</strong> {searchResult.author}</p>
                            <p><strong>Shelf Number:</strong> {searchResult.shelfNumber}</p>
                            <p><strong>Rack Number:</strong> {searchResult.rackNumber}</p>
                            <p><strong>Books Left:</strong> {searchResult.booksLeft}</p>
                            </div>
                        )}
                        </div>
                    </div>
    );
}
