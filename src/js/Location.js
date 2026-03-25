class Location {
  constructor(name, lat, lng) {
    this.name = name;
    this.lat = lat;
    this.lng = lng;
  }

  getInfo() {
    return `${this.name} - Lat: ${this.lat}, Lng: ${this.lng}`;
  }
}

export default Location;