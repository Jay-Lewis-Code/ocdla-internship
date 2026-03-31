

/**
  Creates a button element for a city location
  @param {string} label - The location object which the button needs to be made for
  @returns {HTMLElement} - A button element with click handler attached (injected)
*/
function Button(label, id, onclick, active=false) {
  // short circuit operation
  // this works towards domain labels
  // blank button does no good
  // our button needs ids
  // but if we don't have id then well construct one using #12
  id = id || label.replaceAll(' ', '-');

  const button = document.createElement('button');
  // Instructions are to use .createTextNode instead of textContent
  const textNode = document.createTextNode(label);
  button.appendChild(textNode);
  button.id = id;
  button.className = 'btn btn-outline-info text-dark';

  if (active == true) {
    button.classList.add('active');
  }

  // Because we want the 
  button.addEventListener('click', onclick);

  return button;
}

export default Button;