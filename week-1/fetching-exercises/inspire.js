// docs: https://theysaidso.com/api/

function get_random() {
  /*
    send a get request to this url:
     http://quotes.rest/quote/random.json      
    print the quote to the console
  */
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    /*console.log('states', xhr.readyState);
    console.log('status', xhr.status);*/
    if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
      let a = JSON.parse(xhr.response);
      console.log('Quote of now is: ' + a['contents']['quotes'][0]['quote']);
    }
  };

  xhr.open('GET', 'http://quotes.rest/qod.json');

  xhr.send();

  /* alternative with fetch:
  const url = 'http://quotes.rest/qod.json';

  return fetch(url, {
    method: 'GET', //sending a get request to url
  })
    .then(response => response.json())
    .then(response => console.log('Quote of now: ' + response.contents.quotes.quote)) //logging the quote to the console
    .catch(err => console.log('There is Error!!', err));
  */
}
document.getElementById('get-random').addEventListener('click', get_random);

function get_categories() {
  /*
    send a get request to this url:
      http://quotes.rest/qod/categories.json
    print the categories to the console using console.table
      https://developer.mozilla.org/en-US/docs/Web/API/Console/table
  */
  const url = 'http://quotes.rest/qod/categories.json';

  return fetch(url, {
    method: 'GET', //sending a get request to url
  })
    .then(response => response.json())
    .then(response => console.table(response.contents.categories)) //printing the categories
    .catch(err => console.log('There is Error!!', err));
}
document.getElementById('get-categories').addEventListener('click', get_categories);

function get_from_category() {
  // read the category from user input
  const cat = document.getElementById('category').value;
  const encoded = encodeURIComponent(cat);

  // build your url:
  const url = 'http://quotes.rest/qod.json?category=' + encoded;
  /*
    get a random quote from the chosen category
    print the quote to the console
  */
  return fetch(url, {
    method: 'GET', //sending a get request to url
  })
    .then(response => response.json())
    .then(response => console.log(response.contents.quotes[0].quote)) //printing the random quote from the chosen category
    .catch(err => console.log('There is Error!!', err));
}
document.getElementById('get-from-category').addEventListener('click', get_from_category);

function get_by_length() {
  // read the min & max lengths from user input
  const min = document.getElementById('min').value;
  const encoded_min = encodeURIComponent(min);
  const max = document.getElementById('max').value;
  const encoded_max = encodeURIComponent(max).value;

  // build your url
  const url = 'https://quotes.rest/qod.json?minlength=${encoded_min}&maxlength=${encoded_max}';
  /*
    get a random quote in the given range
    print the quote to the console
  */
  return (
    fetch(url, {
      method: 'GET', //sending a get request to url
    })
      .then(response => response.json())
      //!!next line gives an error
      .then(response => console.log(response.contents.quotes[0].quote)) //printing quote to the console
      .catch(err => console.log('There is Error!!', err))
  );
}
document.getElementById('get-by-length').addEventListener('click', get_by_length);

function length_and_category() {
  // read user input
  const min = document.getElementById('min').value;
  const encoded_min = encodeURIComponent(min);
  const max = document.getElementById('max').value;
  const encoded_max = encodeURIComponent(max).value;
  const cat = document.getElementById('category').value;
  const encoded_cat = encodeURIComponent(cat);
  // build your url:
  const url =
    'http://quotes.rest/qod.json?category=${encoded_cat}&minlength=${encoded_min}&maxlength=${encoded_max}';
  /*
    get a random quote matching the user input
    print the quote to the console
  */
  return fetch(url, {
    method: 'GET', //sending a get request to url
  })
    .then(response => response.json())
    .then(response => console.log(response.contents.quotes[0].quote)) //printing the random quote from the chosen category and lengths
    .catch(err => console.log('There is Error!!', err));
}
document.getElementById('length-and-category').addEventListener('click', length_and_category);
