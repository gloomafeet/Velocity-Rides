// src/components/SearchCars.js

import React, { useState, useEffect } from 'react';
import { cars } from '../Car'; // Assuming you have a function to get cars

const SearchCars = () => {
  const [cars, setCars] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [date, setDate] = useState('');
  const [fromTime, setFromTime] = useState('');
  const [untilTime, setUntilTime] = useState('');
  const [availableCars, setAvailableCars] = useState([]);

  useEffect(() => {
    const fetchedCars = cars; // Fetch cars data, replace with actual data fetching logic
    setCars(fetchedCars);

    // Extract unique locations
    const uniqueLocations = Array.from(new Set(cars.map(car => car.location)));
    setLocations(uniqueLocations);
    setSelectedLocation(uniqueLocations[0] || '');// Set default location
  }, []);

  const searchAvailableCars = () => {
    const filteredCars = cars.filter(car => 
      car.location === selectedLocation && 
      car.isAvailable(date, fromTime) &&
      car.isAvailable(date, untilTime)
    );
    setAvailableCars(filteredCars);
  };

  return (
    <div>
      <label htmlFor="location">Location:</label>
      <select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
        {locations.map(location => <option key={location} value={location}>{location}</option>)}
      </select>

      <label htmlFor="date">Date:</label>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />

      <label htmlFor="fromTime">From:</label>
      <input type="time" value={fromTime} onChange={e => setFromTime(e.target.value)} />

      <label htmlFor="untilTime">Until:</label>
      <input type="time" value={untilTime} onChange={e => setUntilTime(e.target.value)} />

      <button onClick={searchAvailableCars}>Search</button>

      <div>
        {availableCars.length > 0 ? (
          availableCars.map((car, index) => (
            <div key={index}>{car.type} - Available from {fromTime} to {untilTime}</div>
          ))
        ) : (
          <div>No available cars.</div>
        )}
      </div>
    </div>
  );
};

export default SearchCars;
