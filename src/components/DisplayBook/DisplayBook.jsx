import React, { useState } from 'react';
import axios from 'axios';
// import Fuse from 'fuse.js'
import ReactStars from "react-rating-stars-component";
import styles from './DisplayBook.module.css';

export default function DisplayBook() {

    const [books, setBooks] = useState(null);

    const fetchData = async () => {
      const response = await axios.get(
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json'
      );
  
      setBooks(response.data);
    };
    
    return(
        <div className={styles.App}>
          <form className={styles.container}>
            <input type="text" placeholder="Search" aria-label="Search" />
          </form>
        {/* Fetch data from API */}
        <div>
            <button className={styles.fetchbutton} onClick={fetchData}>
            Click to Display Books
            </button>
            <br />
        </div>

        {/* Display data from API */}
      <div className={styles.books}>
        {books &&
          books.map((book, index) => {
            // const cleanedDate = new Date(book.released).toDateString();
            // const authors = book.authors.join(', ');

                return (
                <div className={styles.book} key={index}>
                    <h2>{book.title}</h2>

                    <div className={styles.details}>
                    <p>👨: {book.authors}</p>
                    <p>&#x1F4B0;: &#8360; {book.price}</p>
                    <p>&#x1F5E3;: {book.language_code}</p>
                    <p justify-content="center"><ReactStars count={5} value={book.average_rating} edit={false} size={36}  activeColor="#ffd700"/></p>
                    </div>
                </div>
                );
            })}
        </div>
    </div>
    );
}
