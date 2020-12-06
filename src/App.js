import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './pages/Home'
import Library from './pages/Library'

class BooksApp extends React.Component {
  state = {
    library: [],
    myBooks: [],
    query: '',
    error: false
  }
  updateLibrary(query) {
    this.setState({ query}); 
    if(query) {
        BooksAPI.search(query).then((result) => {
            if(result.error) this.setState({error: true})
            else this.setState({library:result, error: false})})
        } else {
            this.setState({library: [], error: false})
        }}
  setCategoryBook(idBook, action) {
    const selectedBook = this.state.library.find(({id}) => id === idBook )
    const existInMyBooks = this.state.myBooks.some(({id}) => id === idBook )
    let updateMyBooks = []
    if(existInMyBooks) {
      updateMyBooks = this.state.myBooks.map(book => {
        if(book.id === idBook) book.value = action
        return book
      } )
      this.setState({myBooks: updateMyBooks})
    } else{
      updateMyBooks = this.state.myBooks.concat( [{...selectedBook, value: action}])
    }
    const updatelLibrary = this.state.library.map(book => {
      if(book.id === idBook) book.value = action
      return book
    } )
    this.setState({library: updatelLibrary, myBooks: updateMyBooks})
  }
  render() {
    const {library, query, error, myBooks} = this.state
    return (
      <div>
        <Route exact path='/' render={() => (<Home books={myBooks} clickOnBook={this.setCategoryBook.bind(this)}/>)} />
        <Route path='/search' render={() => (<Library books={library} error={error} query={query} updateQuery={this.updateLibrary.bind(this)} clickOnBook={this.setCategoryBook.bind(this)}/>)} />
      </div>
    )
  }
}

export default BooksApp
