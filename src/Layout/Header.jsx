import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import headerimg from "./../assets/website/images/header-img.png"

class Header extends Component{
    constructor(props){
      super(props)

      this.state = {

      }
    }

    render(){
        return (

            <div className="top-section">
              <div id="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-lightnew fixed-top">
                  <div className="container">
                    <a className="navbar-brand" href="/">
                      <img src={headerimg} />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav m-auto main-menu">
                        <li className="nav-item">
                          <NavLink to="/" className="nav-link scrollMenu active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link scrollMenu" href="#fetSec">Features</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link scrollMenu" href="#downSec">Download</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link scrollMenu" href="#">Contact Us</a>
                        </li>
                      </ul>
                      <div className="nav-btn signup-btn">
                        <a href="javascript:void(0);" className="loginBtn" data-toggle="modal" data-target="#exampleModal">Log In</a>
                        <NavLink to="/signup" className="signupBtn">Sign Up</NavLink>
                        {/* <a href="#" class="" data-toggle="modal" data-target="#SignUpModal">Get Started</a> */}
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          );
    }
}

export default Header