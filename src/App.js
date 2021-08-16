import './App.css'
import Calculator from './views/calculator'
import Home from './views/homePage'
import Calculations from './views/calculations'
import { Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">calculator</Link>
          </li>
          <li>
            <Link to="/calculations">Recent Calculations</Link>
          </li>
        </ul>

        <Route exact path="/">
          <Home />
        </Route>
        <Switch>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/Calculations">
            <Calculations />
          </Route>
        </Switch>
      </header>
    </div>
  )
}

export default App
