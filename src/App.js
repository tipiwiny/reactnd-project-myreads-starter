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
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          myBooks: books
        }))
      })
  }
  updateLibrary(query) {
    this.setState({ query}); 
    if(query) {
        BooksAPI.search(query).then((result) => {
            if(result.error) this.setState({error: true})
            else {
              const filterLibrary = result.map( b=> {
                const existBook = this.state.myBooks.find(mb => mb.id ===b.id)
                if(existBook) b.shelf = existBook.shelf
                return b
              })
              this.setState({library:filterLibrary, error: false})
            }
          })
        } else {
            this.setState({library: [], error: false})
        }}
 async  setCategoryBook(id, shelf) {
    await BooksAPI.update({id}, shelf)
    const myBooks = await BooksAPI.getAll()
    this.setState({myBooks})
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
