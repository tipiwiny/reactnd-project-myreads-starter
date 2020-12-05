import React from 'react'
import PropTypes from 'prop-types'
import MyBook from './MyBook'


const MyBookShelf = ({title}) => (<div className="bookshelf">
<h2 className="bookshelf-title">{title}</h2>
<div className="bookshelf-books">
  <ol className="books-grid">
    <li>
        <MyBook title="Ender's Game" author="Orson Scott Card" imageURL="http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"/>
    </li>
  </ol>
</div>
</div>
)

MyBookShelf.propTypes = {
    title: PropTypes.string.isRequired
  };
  
export default MyBookShelf;