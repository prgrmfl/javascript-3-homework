function sort_characters(str) {
  if (typeof str === 'number') {
    // split the string in letters/characters
    str = str.split('');
    // sorting
    str = str.sort((a, b) => a.localeCompare(b, { numeric: true }));
    // concatenate the characters in one string
    str = str.join('');
    return str;
  }

  // split the string in letters/characters
  str = str.split('');
  // sorting
  str = str.sort((a, b) => a.localeCompare(b, { ignorePunctuation: true }));
  // concatenate the characters in one string
  str = str.join('');
  return str;
}

function sort_handler() {
  // read and process user input
  var to_sort = document.getElementById('to-sort').value;

  // pass user input through core logic

  /* write a logic function to sort characters in a string */
  /* assign the result to a variable named 'sorted' */
  var sorted = sort_characters(to_sort);

  // report result to user
  var output_field = document.getElementById('sorted');
  output_field.innerHTML = sorted;
}

var sort_button = document.getElementById('sort-it');
sort_button.addEventListener('click', sort_handler);

function sort_words(str) {
  if (typeof str === 'number') {
    // split the string in letters/characters
    str = str.split('');
    // sorting
    str = str.sort((a, b) => a.localeCompare(b, { numeric: true }));
    // concatenate the characters in one string
    str = str.join('');
    return str;
  }

  // split the string in words
  str = str.split(' ');
  // sorting
  str = str.sort((a, b) => a.localeCompare(b, { ignorePunctuation: true }));
  // concatenate the characters in one string
  str = str.join(' ');
  return str;
}

function sort_handler_2() {
  // read and process user input
  var to_sort = document.getElementById('to-sort').value;

  // pass user input through core logic

  /* write a logic function to sort characters in a string */
  /* assign the result to a variable named 'sorted' */
  var sorted = sort_words(to_sort);

  // report result to user
  var output_field = document.getElementById('sorted_2');
  output_field.innerHTML = sorted;
}

var sort_word_button = document.getElementById('sort-words');
sort_word_button.addEventListener('click', sort_handler_2);
