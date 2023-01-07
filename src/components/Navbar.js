import React from 'react'
import logodark from './logodark.png'
import logolight from './logolight.png'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.bgmode} bg-${props.bgmode} sticky-top `}  >
      <div className=" container-fluid header">
    <div className="container-fluid" >
      <span className="container logoText">
      <img src={(props.bgmode==="dark")?logodark:logolight} alt="LOGO" className="thumbnail" id="logo"/>
      <a className="navbar-brand text-warning" style={{"fontSize":"160%"}}   href="/"><b>ANCIFY</b></a>
      </span>
      <button className={`navbar-toggler bg-${props.bgmode} text-warning dropButton`}   type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon dropButton" ></span>
      </button></div>
      <div className="collapse navbar-collapse"   id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"  >
            <a className="nav-link active"  aria-current="page" href="/"><b>Home</b></a>
          </li>
          <li className="nav-item"  >
            <a className="nav-link"  href="/"><b>About</b></a>
          </li>
        </ul>
        <form className="d-flex"   role="search">
        </form>
      </div>
    </div>
       </nav>
  )
}
