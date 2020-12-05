import React, { Component } from 'react'
import MyBookShelf from '../components/MyBookShelf'
import MyHeader from '../components/MyHeaders'
class Home extends Component {
  render() {
    return (
        <div className="list-books">
            <MyHeader title="MyReads"/>
          <div className="list-books-content">
            <div>
                <MyBookShelf title="Currently Reading"/>
                <MyBookShelf title="Want to Read"/>
                <MyBookShelf title="Read"/>
            </div>
          </div>
          <div className="open-search">
            <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
          </div>
        </div>
      )
  }
}

export default Home