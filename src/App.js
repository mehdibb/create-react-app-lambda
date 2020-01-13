import React, { Component } from "react";
import "./App.scss";

// class LambdaDemo extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { loading: false, msg: null }
//   }

//   handleClick = api => e => {
//     e.preventDefault()

//     this.setState({ loading: true })
//     fetch("/.netlify/functions/" + api)
//       .then(response => response.json())
//       .then(json => this.setState({ loading: false, msg: json.msg }))
//   }

//   render() {
//     const { loading, msg } = this.state

//     return (
//       <p>
//         <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
//         <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
//         <br />
//         <span>{msg}</span>
//       </p>
//     )
//   }
// }

class App extends Component {
  render() {
    return (
      <>
        <div className="topnav">
          <div id="logo">mehdibb</div>
          <div id="links">
            <a class="active" href="#home">
              Home
            </a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </div>
        <main>
          <h1>Coming Soon...</h1>
          <a target="_blank" href="https://www.github.com/mehdibb">
            <i className="fab fa-github"></i> Github
          </a>
          <a target="_blank" href="https://www.twitter.com/mehdibbp">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </main>
      </>
    );
  }
}

export default App;
