import React, { Component } from 'react'
import { Router, Link } from '@reach/router'
import Home from './pages/home'
import About from './pages/about'
import Count from './pages/count'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }
  componentDidCatch(error, info) {
    console.log(error, info)
    // TODO: report the errors
  }
  render() {
    return (
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/count">Count</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Count path="/count" />
        </Router>
      </div>
    )
  }
}
