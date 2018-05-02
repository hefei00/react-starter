import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import Topics from './containers/topics'

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
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
    </nav>
    <hr />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
  </div>
)

export default App
