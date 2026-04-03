import StringUtils from './StringUtils.js';

// Location class to store city information
class Location {
  /**
    @param {string} name - The name of the city
    @param {number} lat - The latitude coordinate
    @param {number} lng - The longitude coordinate
    @TODO - Add in more information about the location?
            Anything else we want to store/use?
  */
  constructor(name, lat, lng) {
    this.id = StringUtils.toId(name);
    this.name = name;
    this.lat = lat;
    this.lng = lng;
  }

  /**
    Gets formatted location information
    @returns {string} A formatted string with city name and coordinates
  */
  getInfo() {
    return `${this.name} - Lat: ${this.lat}, Lng: ${this.lng}`;
  }
}

export default Location;