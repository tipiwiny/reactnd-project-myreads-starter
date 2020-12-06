import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './pages/Home'
import Library from './pages/Library'

class BooksApp extends React.Component {
  render() {
    return (
      <div>
        <Route exact path='/' render={() => (<Home/>)} />
        <Route path='/search' render={() => (<Library/>)} />
      </div>
    )
  }
}

export default BooksApp
