import React from 'react'

const Navbar = ({ setcategory }) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={() => { setcategory('general') }}><span className='badge bg-light text-dark fs-4'>News World</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#navbarNav" onClick={() => { setcategory('politics') }}>Politics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#navbarNav" onClick={() => { setcategory('entertainment') }}>Entertainment</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#navbarNav" onClick={() => { setcategory('business') }}>Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#navbarNav" onClick={() => { setcategory('sports') }}>Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#navbarNav" onClick={() => { setcategory('technology') }}>Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#navbarNav" onClick={() => { setcategory('health') }}>Health</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#navbarNav" onClick={() => { setcategory('science') }}>Science</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
