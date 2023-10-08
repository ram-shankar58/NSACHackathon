// Solarsystemitinerary.js

import React, { useState } from 'react';

function Solarsystemitinerary({ itineraries }) {
  // Initialize state to keep track of the selected itinerary
  const [selectedItinerary, setSelectedItinerary] = useState(null);

  // Function to handle click and set the selected itinerary
  const handleItineraryClick = (itinerary) => {
    setSelectedItinerary(itinerary);
  };

  return (
    <div>
      {itineraries.map((itinerary) => (
        <div key={itinerary.id}>
          <h2>{itinerary.name} Itinerary</h2>
          <p>{itinerary.description}</p>
          <p>Duration: {itinerary.duration}</p>
          <p>Details: {itinerary.details}</p>
          {/* Add a button to view detailed itinerary */}
          <button onClick={() => handleItineraryClick(itinerary)}>View Details</button>
        </div>
      ))}

      {/* Display the selected itinerary's details */}
      {selectedItinerary && (
        <div>
          <h2>Selected Itinerary Details</h2>
          <p>{selectedItinerary.description}</p>
          <p>Duration: {selectedItinerary.duration}</p>
          <p>Details: {selectedItinerary.details}</p>
        </div>
      )}
    </div>
  );
}

export default Solarsystemitinerary;
