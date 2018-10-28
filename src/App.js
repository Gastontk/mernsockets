import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//sockets
import { subscribeToTimer } from "./api";

class App extends Component {
	constructor(props) {
		super(props);
		subscribeToTimer((err, timestamp) =>
			this.setState({
				timestamp
			})
		);
	}
	state = {
		timestamp: "no timestamp yet"
	};
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p className="App-intro">
						This is the timer value: {this.state.timestamp}
					</p>
				</header>
			</div>
		);
	}
}

export default App;
