import React from 'react'
import PropTypes from 'prop-types'


const MyBook = ({title, author, imageURL, id, clickOnSelect, selected}) => (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageURL ? imageURL : 'https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg'})`}}></div>
        <div className="book-shelf-changer">
          <select onChange={(e) => clickOnSelect(id, e.target.value)} value={selected}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
     <div className="book-authors">{author}</div>
    </div>
)

MyBook.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    imageURL: function(props, propName, componentName) {
        const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i');
        if (!pattern.test(props[propName])) {
          return new Error(
            'Invalid prop `' + propName + '` supplied to' +
            ' `' + componentName + '`. URL not valid'
          );
        }
      },
    clickOnSelect: PropTypes.func.isRequired
  };

  MyBook.defaultProps = {
      imageURL: 'https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg'
  }
  
export default MyBook;