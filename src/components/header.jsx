import React, { Component } from "react";



export class Header extends Component {
  constructor(props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	// putting stuff in firebase


	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/Video/${url[url.length - 1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/Video/${url}`
		}
	}
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <a
                     onClick={this.join}
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll" target = "_blank"
                  >
                    Start a Meeting
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
