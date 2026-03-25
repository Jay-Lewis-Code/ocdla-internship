"use strict";

/*
  Jason Lewis
  CS280 Internship
  Week 0: Longitude & Latitude Exercise

  JS for the Home Page (index.html)
*/

import './General.js';
import Location from './Location.js';
import History from './History.js';

// Initialize location data
const LOCATIONS = [
  new Location('New York', 40.7128, -74.0060),
  new Location('Los Angeles', 34.0522, -118.2437),
  new Location('Chicago', 41.8781, -87.6298),
  new Location('Houston', 29.7604, -95.3698),
  new Location('Phoenix', 33.4484, -112.0742),
  new Location('Philadelphia', 39.9526, -75.1652),
  new Location('San Antonio', 29.4241, -98.4936),
  new Location('San Diego', 32.7157, -117.1611),
  new Location('Dallas', 32.7767, -96.7970),
  new Location('San Jose', 37.3382, -121.8863)
];

const history = new History();
let activeButton = null;

// DOM SETUP - Create buttons from locations
const buttonsContainer = document.getElementById('buttons-container');
LOCATIONS.forEach(location => {
  const button = createCityButton(location);
  buttonsContainer.appendChild(button);
});

// PURE FUNCTION - Formats history text without side effects
function getHistoryText(clicks) {
  return 'Clicked: ' + clicks.map(c => c.name).join(', ');
}

// DOM FUNCTION - Updates active button state visually
function setActiveButton(button) {
  if (activeButton) {
    activeButton.classList.remove('active');
  }
  activeButton = button;
  button.classList.add('active');
}

// DOM FUNCTION - Displays location information
function displayLocationInfo(location) {
  const infoDisplay = document.getElementById('location-info');
  infoDisplay.textContent = location.getInfo();
}

// DOM FUNCTION - Updates history display
function updateHistoryDisplay() {
  const clicks = history.getClicks();
  const historyText = getHistoryText(clicks);
  document.getElementById('history').textContent = historyText;
}

// DOM FUNCTION - Creates a button element for a location
function createCityButton(location) {
  const button = document.createElement('button');
  button.textContent = location.name;
  button.className = 'city-btn';
  button.addEventListener('click', () => handleButtonClick(button, location));
  return button;
}

// EVENT HANDLER - Orchestrates the response to button click
function handleButtonClick(button, location) {
  setActiveButton(button);
  displayLocationInfo(location);
  history.addClick(location.name);
  updateHistoryDisplay();
}
