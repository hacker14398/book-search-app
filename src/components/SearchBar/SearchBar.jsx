import React from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar() {
    const fuse = new Fuse(characters, {
        keys: [
          'title',
          'authors'
        ]
      });
    return (
        <div>
            <form className={styles.container}>
                <input type="text" placeholder="Search" aria-label="Search" />
            </form>
        </div>
      );
}
