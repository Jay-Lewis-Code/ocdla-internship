"use strict";

/*
  Jason Lewis
  CS280 Internship
  Week 0: Longitude & Latitude Exercise

  JS for the Location class
*/


// Location class to store city information
class Location {
  /**
    @param {string} name - The name of the city
    @param {number} lat - The latitude coordinate
    @param {number} lng - The longitude coordinate
    @TODO - Add in more information about the location?
            Anything else we want to store/use?
  */
  constructor(id, name, lat, lng) {
    this.id = id;
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