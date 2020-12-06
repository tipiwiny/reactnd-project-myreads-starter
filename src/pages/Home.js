import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import MyBookShelf from '../components/MyBookShelf'
import MyHeader from '../components/MyHeaders'
class Home extends Component {

  state = {
    readingBooks: [],
    readBooks: [],
    wishBooks: []
  }
  handleClick() {
    this.history.push("/home");
  }
  render() {
    const {books, clickOnBook} = this.props
    const readBooks = books.filter(book => book.shelf === 'read')
    const readingBooks = books.filter(book => book.shelf === 'currentlyReading')
    const wishBooks = books.filter(book => book.shelf === 'wantToRead')

    return (
        <div className="list-books">
            <MyHeader title="MyReads"/>
          <div className="list-books-content">
            <div>
                <MyBookShelf title="Currently Reading" books={readingBooks} clickOnBook={clickOnBook}/>
                <MyBookShelf title="Want to Read" books={wishBooks} clickOnBook={clickOnBook}/>
                <MyBookShelf title="Read" books={readBooks} clickOnBook={clickOnBook}/>
            </div>
          </div>
          <div className="open-search">
          <Route render={({ history}) => (
              <button
              type='button'
              onClick={() => { history.push('/search') }}
            >
              Click Me!
            </button>
          )} />
          </div>
        </div>
      )
  }
}

export default Home