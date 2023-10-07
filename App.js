// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

export default App;
