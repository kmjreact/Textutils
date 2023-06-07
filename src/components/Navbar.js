import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
<>
{/* <Navbar/> */}
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/counter">Counter</Link>
        </li>
      </ul>
      <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={(() =>props.toggleMod('primary'))} style={{height:'20px',width:'20px'}}></div>
          <div className="bg-danger rounded mx-2" onClick={(() =>props.toggleMod('danger'))} style={{height:'20px',width:'20px'}}></div>
          <div className="bg-success rounded mx-2" onClick={(() =>props.toggleMod('success'))} style={{height:'20px',width:'20px'}}></div>
          <div className="bg-warning rounded mx-2" onClick={(() =>props.toggleMod('warning'))} style={{height:'20px',width:'20px'}}></div>
          {/* <div className="bg-success rounded mx-2" onClick={} style={{height:'20px',width:'20px'}}></div>
          <div className="bg-danger rounded mx-2"  onClick={} style={{height:'20px',width:'20px'}}></div>
          <div className="bg-warning rounded mx-2" onClick={} style={{height:'20px',width:'20px'}}></div> */}
      </div>
      
    </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" onClick={(()=>props.toggleMod(null))} style={{cursor:'pointer'}} id="flexSwitchCheckDefault"/>
          <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
  </div>
</nav>
</>
  )
}

Navbar.propTypes = {
                        title: PropTypes.string.isRequired,
                        about: PropTypes.string.isRequired
                    }

// Navbar.defaultProps = {
//                         title: 'Set title here',
//                         about: 'About Text'
//                     }
