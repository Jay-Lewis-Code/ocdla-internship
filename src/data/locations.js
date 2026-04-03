/*
    Data for the city locations

*/
import Location from '../utils/Location.js';

// Location data gathered via https://simplemaps.com/data/us-cities (free version download)
// CSV file located in ../data/uscities.csv

const locations = {};
[
  new Location('New York', 40.6943, -73.9249),
  new Location('Los Angeles', 34.1141, -118.4068),
  new Location('Chicago', 41.8375, -87.6866),
  new Location('Houston', 29.7860, -95.3885),
  new Location('Miami', 25.7840, -80.2101),
  new Location('Boston', 42.3188, -71.0852),
  new Location('Washington', 38.9047, -77.0163),
  new Location('San Francisco', 37.7558, -122.4449),
  new Location('Seattle', 47.6211, -122.3244),
  new Location('Denver', 39.7620, -104.8758)
].forEach(city => {
  locations[city.id] = city;
});


export default locations;