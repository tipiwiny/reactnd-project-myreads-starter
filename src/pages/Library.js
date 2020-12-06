import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import MyBook from '../components/MyBook'
import * as BooksAPI from '../BooksAPI'
class Library extends Component {
    state = {
        books: [],
        query: '',
        error: false
    }
    updateQuery(query) {
        console.log(!!query)
        if(query) {
            BooksAPI.search(query).then((result) => {
                if(result.error) this.setState({error: true})
                else this.setState({books:result, error: false})})
            } else {
                this.setState({books: [], error: false})
            }}
    renderBooks() {
        const { books,error, query } = this.state
        let renderedBooks = <ol className="books-grid">{books.map(book => (<MyBook key={book.id} title={book.title} author={book.authors ? book.authors.join(): ''} imageURL={book.imageLinks ? book.imageLinks.thumbnail : undefined}/>))}</ol>
        if(error) renderedBooks = <div>Error in the search</div>
        if(books.length === 0 && query) renderedBooks = <div> Result not found</div>
        if(!query) renderedBooks = <div> Type any search</div>
        return renderedBooks
    }
        
    render() {
    const { query } = this.state

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Route render={({ history}) => (
                <button
                type='button'
                className="close-search"
                onClick={() => { history.push('/') }}
              >
                Click Me!
              </button>
            )} />
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" value={query} onChange={async (event) => {this.setState({ query: event.target.value}); this.updateQuery(event.target.value)}}/>

            </div>
          </div>
          <div className="search-books-results"> {
            this.renderBooks()
          }
          </div>
        </div>
      )
  }
}

export default Library