# CS280 W26 OCDLA Internship Lab Work

## Week 0: Latitude / Longitude Exercise

A single-page web application that displays information about 10 major U.S. cities using their latitude and longitude coordinates.

## Assignment Objectives

- Create an array of Location objects representing 10 major U.S. cities
- Build a responsive UI that displays location information
- Implement proper code organization using separation of concerns (MVC principles)
- Handle user interactions through event listeners
- Track user interaction history
- Maintain visual state for active selections

## Features Implemented

✓ **Location Data Model** — `Location` class stores city name, latitude, and longitude  
✓ **Dynamic UI Creation** — Buttons generated using `document.createElement()` and `appendChild()`  
✓ **Event Handling** — Click listeners on city buttons using `addEventListener()`  
✓ **Location Display** — Shows city name with coordinates when button is clicked  
✓ **Click History Tracking** — `History` class maintains order and count of clicked cities  
✓ **Active Button State** — Only one button active at a time with visual styling  
✓ **Code Organization** — Separated models, UI logic, and event handlers for maintainability  
✓ **Best Practices** — Strict mode, PascalCase files for classes, descriptive naming, single-responsibility functions

## Project Structure
src/  
├── index.html # Home page (SPA)  
├── css/  
│ └── styles.css # Any custom styling  
├── js/
│ ├── General.js # Global imports (Bootstrap, Custom CSS)  
│ ├── Home.js # Main controller and event handling  
│ ├── Location.js # Location data model  
│ └── History.js # History tracking model  
└── assets/ # Empty for now  

## Technologies Used
- **ES6 Modules** — Modular JavaScript with import/export
- **Bootstrap 5** — Responsive styling
- **Webpack 5** — Module bundling and development server
- **Node.js** — Development environment

## Installation and Running Code:
- First run NPM Install
- Scripts:
- npm run watch (live local server)
- npm run build (runs production build and creates /dist folder)