// https://funtranslations.com/api/morse

// do what you did in "yodize.js", but for morse code

function morse() {
  const phrase = document.getElementById('to-morse').value;

  const encoded = encodeURIComponent(phrase);

  const url = 'https://api.funtranslations.com/translate/morse.json?text=' + encoded;

  return fetch(url, {
    method: 'GET', //sending a get request to url
  })
    .then(response => response.json())
    .then(response => console.log('Morse: ' + response.contents.translated)) //logging the translated (morse code) to the console
    .catch(err => console.log('There is Error!!', err));
}

document.getElementById('morse-it').addEventListener('click', morse);
