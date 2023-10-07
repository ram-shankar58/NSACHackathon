// Home.js
import React from 'react';
import { itineraries } from './itinerarydata';
import ItineraryBlock from './itineraryblock';

function Home() {
  return (
    <div className="itinerary-list">
      {itineraries.map((itinerary) => (
        <ItineraryBlock key={itinerary.id} {...itinerary} />
      ))}
    </div>
  );
}

export default Home;
