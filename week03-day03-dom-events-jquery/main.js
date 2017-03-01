console.log('in main.js');

console.log(document);

console.log('--- using querySelectorAll:');
var selectedListItems = document.querySelectorAll('.selected');

console.log('selectedListItems:', selectedListItems);

for(var i = 0 ; i < selectedListItems.length ; i++) {
  console.log('selected list item style:', selectedListItems[i].style);
  selectedListItems[i].style.color = 'red';
}

console.log('--- Create and append a new element');
var newListItem = document.createElement('li');

newListItem.innerHTML = 'in New York';
newListItem.setAttribute('class', 'muted');

// We are going to call .appendChild() on the parent <ul> element.
// That <ul> element has an id attribute.

// So we retrieve the DOM element that contains the list items,
// because we want to call .appendChild() on it.
// NOTE: we do NOT pass a CSS selector ('#item-list') to the
// .getElementById() method.
var listContainer = document.getElementById('item-list');

listContainer.appendChild(newListItem);
