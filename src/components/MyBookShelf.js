import React from 'react'
import PropTypes from 'prop-types'
import MyBook from './MyBook'


const MyBookShelf = ({title, books = [], clickOnBook}) => (<div className="bookshelf">
<h2 className="bookshelf-title">{title}</h2>
<div className="bookshelf-books">
  <ol className="books-grid">
      {
         books.length ? <ol className="books-grid">{books.map(book => (<MyBook key={book.id} id={book.id} title={book.title} clickOnSelect={clickOnBook} selected={book.shelf} author={book.authors ? book.authors.join(): ''} imageURL={book.imageLinks ? book.imageLinks.thumbnail : undefined}/>))}</ol> :
            <div>You dont have books in the shelf</div>
      }
    <li>
    </li>
  </ol>
</div>
</div>
)

MyBookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array
  };
  
export default MyBookShelf;