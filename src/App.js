import React, { Component } from 'react'
import Home from './Home'


import Video from './Video'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={Home} />
					<Route exact path="/Video/:url" component={Video} />
				</div>
			</Router>
		)
	}
}

export default App;