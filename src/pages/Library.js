import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MyBook from '../components/MyBook'

class Library extends Component {
    renderBooks() {
        const { books,error, query, clickOnBook } = this.props
        let renderedBooks = <ol className="books-grid">{books.map(book => (<MyBook key={book.id} id={book.id} selected={book.shelf} clickOnSelect={clickOnBook}title={book.title} author={book.authors ? book.authors.join(): ''} imageURL={book.imageLinks ? book.imageLinks.thumbnail : undefined}/>))}</ol>
        if(error) renderedBooks = <div>Error in the search</div>
        if(books.length === 0 && query) renderedBooks = <div> Result not found</div>
        if(!query) renderedBooks = <div> Type any search</div>
        return renderedBooks
    }        
    render() {
    const { query, updateQuery } = this.props

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
              <input type="text" placeholder="Search by title or author" value={query} onChange={async (event) => {updateQuery(event.target.value)}}/>

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