import React from 'react'
import PropTypes from 'prop-types'
import MyBook from './MyBook'


const MyBookShelf = ({title, books = [], clickOnBook}) => (<div className="bookshelf">
<h2 className="bookshelf-title">{title}</h2>
<div className="bookshelf-books">
  <ol className="books-grid">
      {
         books.length ? <ol className="books-grid">{books.map(book => (<MyBook key={book.id} id={book.id} title={book.title} clickOnSelect={clickOnBook} selected={book.shelf} author={book.authors ? book.authors.join(): ''} imageURL={book.imageLinks ? book.imageLinks.thumbnail : 'https://www.google.com/search?q=udacity&rlz=1C5CHFA_enES773ES773&tbm=isch&source=iu&ictx=1&fir=-xH73ayjx9FqvM%252C_N25nIFOZIShiM%252C%252Fm%252F0j17c26&vet=1&usg=AI4_-kQaRfgMceTGiKsJXVXwX7wFCjXJnQ&sa=X&ved=2ahUKEwjArbW7jbztAhWVTBUIHUlhBXYQ_B16BAgfEAI#imgrc=-xH73ayjx9FqvM'}/>))}</ol> :
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