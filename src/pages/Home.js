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
  addBooktoList(list, book) {
    this.setState((previousState) => ({
      [list] : previousState[list].push(book)
    }))
  }
  removeBooktoList(list, id) {
    this.setState((previousState) => ({
      [list] : previousState[list].filters(book => book.id !== id)
    }))
  }
  handleClick() {
    this.history.push("/home");
  }
  render() {
    const {readBooks, readingBooks, wishBooks} = this.state
    return (
        <div className="list-books">
            <MyHeader title="MyReads"/>
          <div className="list-books-content">
            <div>
                <MyBookShelf title="Currently Reading" books={readingBooks}/>
                <MyBookShelf title="Want to Read" books={wishBooks}/>
                <MyBookShelf title="Read" books={readBooks}/>
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