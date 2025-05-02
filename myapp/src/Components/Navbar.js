import React from 'react'
import PropTypes from 'prop-types'


 function Navbar(props) {
  return (
    <div className="app">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-link active" aria-current="page" href="/">Home</a>
      <a className="nav-link" href="/">{props.about}</a>

    </div>
  </div>
</div>
</nav>
 </div>
  )
}
export default Navbar;
Navbar.propTypes = {
                   title:PropTypes.string.isRequired,
                  aboutText : PropTypes.string.isRequired}


Navbar.defaultProps = {
            title: 'title here',
           about:'about' }




































