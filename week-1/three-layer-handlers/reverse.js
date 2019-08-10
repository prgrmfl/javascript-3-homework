function reverse_string(str) {
  let rev = '';
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}

function reverse_handler() {
  // read and process user input
  var to_reverse = document.getElementById('to-reverse').value;

  // pass user input through core logic

  /* call your logic function to reverse a string */
  reverse_string(to_reverse);
  /* assign the result to a variable named 'reversed' */
  var reversed = reverse_string(to_reverse);

  // report result to user
  var output_field = document.getElementById('reversed');
  output_field.innerHTML = reversed;
}

var reverse_button = document.getElementById('reverse-it');
reverse_button.addEventListener('click', reverse_handler);
