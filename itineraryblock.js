// itineraryblock.js
import React from 'react';
import { Link } from 'react-router-dom';

function ItineraryBlock({ id, name, description, duration }) {
  return (
    <div className="itinerary-block">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Duration: {duration}</p>
      <Link to={`/itinerary/${id}`}>View Details</Link>
    </div>
  );
}

export default ItineraryBlock;
