function reorderButtons() {
  let parent = document.getElementById('buttons-container');
  let buttons = parent.querySelectorAll('.btn');
  let sortedButtons = [...buttons].sort((a, b) => a.innerText.toLowerCase().localeCompare(b.innerText.toLowerCase()));
  parent.replaceChildren(...sortedButtons);
}

