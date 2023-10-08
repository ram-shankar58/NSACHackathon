// App.js
/*import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import {Switch} from 'react-router-dom'
import Home from './Home';
import ItineraryDetail from './itinerarydetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/itinerary/:id" component={ItineraryDetail} />
      </Switch>
    </Router>
  );
}

export default App;*/
import React from 'react';
import Solarsystemitinerary from './solarsystemitinerary'; // Import the component

function App() {
  return (
    <div className="App">
      <Solarsystemitinerary /> {/* Use the component */}
    </div>
  );
}

export default App;


