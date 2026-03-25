let state = {};
let _render = null;

// array accession syntax to retrieve the state object the value accociated with key of key
export function getState(key) {
  return state[key];
}

// call first to inject 
export function setState(key, val) {
  state[key] = val;
  _render();
}

// render function
export default function render(root, Component) {
  // functions are first class data types and this has already been defined on index.js
  _render = function _render() {
    // clears out render
    root.innerHTML = '';
    root.appendChild(Component());
  };

  _render();
  // appends execution of component tree
  // executes component first and uses its return value to execute append child
}