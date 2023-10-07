// itinerarydetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { itineraries } from './itinerarydata';

function ItineraryDetail() {
  const { id } = useParams();
  const selectedItinerary = itineraries.find((itinerary) => itinerary.id === parseInt(id));

  if (!selectedItinerary) {
    return <div>Itinerary not found.</div>;
  }

  return (
    <div className="itinerary-detail">
      <h2>{selectedItinerary.name} Itinerary</h2>
      <p>{selectedItinerary.description}</p>
      <p>Duration: {selectedItinerary.duration}</p>
      <p>Details: {selectedItinerary.details}</p>
      <button>Book</button> {/* Add booking functionality */}
    </div>
  );
}

export default ItineraryDetail;