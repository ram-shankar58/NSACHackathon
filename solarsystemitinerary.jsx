import React from 'react';

const itineraryData = [
  {
    title: 'Short and Sweet',
    description: 'Suitable for people who are a bit scared or have health issues',
    details: [
      'Earth orbit for 3 to 7 days',
      'Learn about microgravity, radiation levels',
    ],
  },
  {
    title: 'Nearest Neighbour',
    description: 'A short 2 weeks visit to the moon',
    details: [
      'Visit famous parts of the moon like sites of apollo landings, the various mares of the moon.',
      'Learn about how travel to the moon is done and the geography of the moon.',
    ],
  },
  {
    title: 'Little Adventure',
    description: 'A longer stay of 1 to 4 months on the moon',
    details: [
      'Suitable for people who seek adventure on a short budget',
      'Visit famous points as well as go for a trek in the moon’s famous peaks and craters.',
      'Stay in lunar bases and learn about scientific research being done on the moon.',
    ],
  },
  {
    title: 'Interplanetary',
    description: 'Visit Mars in a thrilling adventure',
    details: [
      'Explore the Martian surface, visit famous places like Olympos mons, valles marines, and the Martian poles.',
      'Also visit the Martian moons and explore the low gravity.',
      'Join an investigation to see if there was life on Mars in the past.',
    ],
  },
  {
    title: 'Survival Mode',
    description: 'Visit the hottest planet Venus, with a high-pressure environment',
    details: [
      'Explore the surface of Venus and experience sulfur rains.',
      'Live in an underground base and conduct experiments with scientists.',
    ],
  },
  {
    title: 'Adventure Mode Lite',
    description: "Visit Jupiter’s moons to experience vast diversity",
    details: [
      'Visit Europa and conduct experiments to see if it can support life.',
      'Visit the solar system’s largest moon, and other major moons like Io and Callisto.',
    ],
  },
  {
    title: 'Adventure Mode Pro',
    description: 'Visit Saturn, and see what it’s like to land on its rings',
    details: [
      'Visit Titan and enjoy its methane lakes and rain.',
      'Visit other famous Saturn moons like Prometheus.',
    ],
  },
  {
    title: "Trekkers' Delight",
    description: 'Visit Uranus’s moon Miranda, and scale its tough cliffs and rough terrain',
    details: [
      'Conduct experiments about solar radiation and help establish an observatory in the outer reach of the solar system.',
    ],
  },
  {
    title: 'Adventure Max',
    description: 'Launch on a mission to mine various minerals from asteroids',
    details: [
      'Land on Ceres and see what low gravity is like.',
      'Choose the asteroid to land depending on the element to mine and proceed to join a mining team.',
    ],
  },
];

function SolarSystemItinerary() {
  return (
    <div className="solar-system-itinerary">
      <h1>Solar System Itinerary</h1>
      {itineraryData.map((item, index) => (
        <div key={index} className="itinerary-item">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <ul>
            {item.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SolarSystemItinerary;
