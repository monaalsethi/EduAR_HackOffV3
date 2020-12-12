import React, { Component } from "react";


export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar-default navbar-fixed-top">
        <div className="container">
          <div >
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              EDU-AR
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse "
            id="bs-example-navbar-collapse-1"
          >
             <ul id = "nav-list" className="nav navbar-nav navbar-right">
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Features
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  Views
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li>
              
            </ul>
          
                {/* <a href="#about" className="page-scroll  nav navbar-nav navbar-right" >
                  About
                </a>
              
             
                <a href="#services" className="page-scroll nav navbar-nav navbar-right">
                  Services
                </a>
             
                <a href="#portfolio" className="page-scroll nav navbar-nav navbar-right">
                  Gallery
                </a>
             
                <a href="#testimonials" className="page-scroll nav navbar-nav navbar-right">
                  Testimonials
                </a>
             
                <a href="#team" className="page-scroll nav navbar-nav navbar-right">
                  Team
                </a> */}
              
            
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
