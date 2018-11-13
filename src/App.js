import React from 'react'
import { Router, Link } from '@reach/router'
import Home from './pages/home'
import About from './pages/about'
import Count from './pages/count'

const App = () => (
  <div>
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

export default App
