import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import More from "./components/more/More";
import Create from './components/create/Create';
import Change from './components/change/Change'

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="contentFather">
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/create" component={Create}/>
              <Route exact path="/todo/:id" component={More}/>
              <Route exact path="/todo/change/:id" component={Change}/>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;