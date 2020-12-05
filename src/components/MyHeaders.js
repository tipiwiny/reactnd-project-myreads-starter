import React from 'react'
import PropTypes from 'prop-types'


const MyHeader = ({title}) => (<div className="list-books-title">
<h1>{title}</h1>
</div>)

MyHeader.propTypes = {
    title: PropTypes.string.isRequired
  };
  
export default MyHeader;