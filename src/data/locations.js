/*
    Data for the city locations

*/
import Location from '../utils/Location.js';

// Location data gathered via https://simplemaps.com/data/us-cities (free version download)
// CSV file located in ../data/uscities.csv

const locations = {};
[
  new Location('ny', 'New York', 40.6943, -73.9249),
  new Location('la', 'Los Angeles', 34.1141, -118.4068),
  new Location('cc', 'Chicago', 41.8375, -87.6866),
  new Location('hs', 'Houston', 29.7860, -95.3885),
  new Location('mi', 'Miami', 25.7840, -80.2101),
  new Location('bs', 'Boston', 42.3188, -71.0852),
  new Location('ws', 'Washington', 38.9047, -77.0163),
  new Location('sf', 'San Francisco', 37.7558, -122.4449),
  new Location('sa', 'Seattle', 47.6211, -122.3244),
  new Location('dv', 'Denver', 39.7620, -104.8758)
].forEach(city => {
  locations[city.id] = city;
});


export default locations;