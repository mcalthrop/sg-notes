console.log('in main.js');

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM loaded (with DOMContentLoaded event)');
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

  console.log('--- DOM events');
  var pickMeButton = document.getElementById('pickMeBtn');

  pickMeButton.addEventListener('click', function () {
    pickMeButton.innerHTML = 'CLICKED';
    alert('Picked!');
  });

});

$(function () {
  console.log('DOM loaded (jQuery)');
  console.log('--- using jQuery');

  var listContainer1 = document.getElementById('item-list');
  // It's useful to have a convention of naming the result of a jQuery call
  // with a '$' prefix (as below).
  // That way, it is immediately obvious that the variable is a jQuery object,
  // and therefore has all the jQuery goodies on it.
  // (But it's only a convention, not a rule).
  var $listContainer2 = $('#item-list');
  var $listItems = $('#item-list li');

  console.log('listContainer1 (document.getElementById) :', listContainer1);
  console.log('listContainer2 (jQuery):', $listContainer2);
  console.log('listItems (jQuery):', $listItems);

  var newListItem1 = $('<li>new item appended by jQuery</li>').addClass('garish');
  var newListItem2 = $('<li></li>').addClass('dull').html('new item prepended by jQuery');
  console.log('newListItem2.html():', newListItem2.html());
  $listContainer2.append(newListItem1);
  $listContainer2.prepend(newListItem2);

  // Now let's add the 'emphasised' CSS class to all the <li> elements.

  // Without jQuery, you'd have to do something like this:
  // var listItems2 = document.getElementsByTagName('li');
  // for (var i = 0 ; i < listItems2.length ; i++) {
  //   listItems2[i].classList.add('emphasised');
  // }

  // And with jQuery, it's a lot more simple:
  $listContainer2.children().addClass('emphasised');

  // now to add a click handler to the button
  $('#pickMeBtn').on('click', function() {
    console.log('jQuery .on("click") handler');
  });
  // and this works too:
  $('#pickMeBtn').click(function() {
    console.log('jQuery .click() handler');
  });
});
