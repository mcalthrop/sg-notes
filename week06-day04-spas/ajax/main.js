$(function () {
  var jokeUrl = 'http://api.icndb.com/jokes/random';

  console.log('page is loaded');

  function ajaxTheManualWay() {
    var request = new XMLHttpRequest();

    console.log('AJAX the manual way');
    request.open('GET', jokeUrl);
    request.addEventListener('load', function () {
      var json = JSON.parse(this.responseText);
      var jokeElement = document.getElementById('joke');

      jokeElement.innerHTML = json.value.joke;
    });
    request.send();
  }

  function ajaxTheJQueryWay() {
    console.log('AJAX the jQuery way');

    $.get(jokeUrl, function (data) {
      $('#joke').html(data.value.joke);
    });
  }

  // source: http://stackoverflow.com/a/5915122/155206
  function selectRandomElement(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  var ajaxFunctions = [ajaxTheManualWay, ajaxTheJQueryWay];
  setInterval(function () {
    var randomAjaxFunction = selectRandomElement(ajaxFunctions);

    randomAjaxFunction();
  }, 5000);
});
