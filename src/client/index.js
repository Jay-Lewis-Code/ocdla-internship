"use strict";

/*
  Jason Lewis
  CS280 Internship
  Week 0: Longitude & Latitude Exercise

  JS for the Home Page (index.html)
*/

import '../utils/General.js';
import History from '../utils/History.js';
import LOCATIONS from '../data/locations.js';
import Buttons from '../component/CityPicker.js';
import render from '../dev_modules/react/client.js';

const history = new History();
let activeButton = null;

// 2 tier component heirarchy
// root component Buttons
// each Buttons component has a branch(es) of Button

// rendering
let root = document.getElementById('app');
render(root, App);

function App() {
  return CityPicker(LOCATIONS, activeCityId);
}