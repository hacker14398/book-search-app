import React, { Component } from 'react'
import { DisplayBook, SearchBar } from './components'
import styles from './App.module.css'

export default class App extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>Book Repo</h1>
                <h2>Listing the Best Book Online</h2>
                {/* <SearchBar /> */}
                <DisplayBook />
            </div>
        )
    }
}
