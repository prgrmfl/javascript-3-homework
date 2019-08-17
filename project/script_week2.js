const div = document.createElement('div');
div.setAttribute('id', 'whole');
document.body.appendChild(div);

const spin = document.createElement('DIV');
spin.setAttribute('id', 'spin');
spin.setAttribute('hidden', '');

document.getElementById('whole').appendChild(spin);

let get = () => {
  spin.removeAttribute('hidden');
  if (document.getElementById('dropdown')) {
    document.getElementById('dropdown').remove();
  }
  const list = document.createElement('select');
  list.setAttribute('id', 'dropdown');
  document.getElementById('whole').appendChild(list);

  fetch('https://restcountries.eu/rest/v2/all')
    .then(response => {
      return response.json();
    })
    .then(res => {
      let i = 0;
      for (i in res) {
        console.table(res[i].name);
      }
      console.log('There are ' + i + ' countries in this list');
      return res; //in each step return the response to be used in another 'then'
    })
    .then(resp => {
      spin.setAttribute('hidden', ''); //hide the spinner

      list.length = 0;
      let defaultOpt = document.createElement('option');
      defaultOpt.text = 'List of the Countries';
      list.add(defaultOpt);
      list.selectedIndex = 0;

      let option;
      for (let j in resp) {
        option = document.createElement('option');
        option.text = resp[j].name;
        option.value = resp[j].name.toLowerCase();
        list.add(option);
      }
      document.getElementById('dropdown').onchange = () => {
        spin.removeAttribute('hidden');
        const val = list.options[list.selectedIndex].value;
        //console.log(typeof val, val);
        let url = 'https://restcountries.eu/rest/v2/name/' + val + '?fullText=true';
        //console.log('url', url);
        fetch(url)
          .then(response => {
            return response.json();
          })
          .then(res => {
            console.log(res);
            spin.setAttribute('hidden', ''); //hide the spinner
            if (document.getElementById('new-div')) {
              document.getElementById('new-div').remove();
            }
            let newDiv = document.createElement('DIV');
            newDiv.setAttribute('id', 'new-div');

            document.body.append(newDiv);

            const flag = document.createElement('img');
            flag.src = res[0].flag;
            newDiv.append(flag);

            const p = (document.createElement('p').innerHTML = res[0].name + "'s");
            newDiv.append(p);
            const p_2 = (document.createElement('p').innerHTML =
              ' capital is: ' + res[0].capital + '.');
            newDiv.append(p_2);
            if (res[0].borders.length === 1) {
              let y = res[0].borders.toString().toLowerCase();
              console.log(y);
              const p_3 = (document.createElement('p').innerHTML =
                ' Its bordering country is: ' + y + '.');
              newDiv.append(p_3);
            } else if (res[0].borders.length > 1) {
              let y = res[0].borders.toString().toLowerCase();
              console.log(y);
              const p_3 = (document.createElement('p').innerHTML =
                ' Its bordering countries are: ' + y + '.');
              newDiv.append(p_3);
            } else {
              const p_3 = (document.createElement('p').innerHTML =
                ' It does not have any bordering countries.');
              newDiv.append(p_3);
            }

            return res;
          })
          .catch(err => console.warn('Error in fetch -', err));
      };
    })
    .catch(err => console.warn('Error in fetch -', err));
};

const button = document.createElement('button');
button.innerHTML = 'Fetch Countries';
button.setAttribute('id', 'press');
document.getElementById('whole').appendChild(button);
document.getElementById('press').addEventListener('click', () => {
  get();
});

/*document.getElementById('dropdown').onchange = () => {
  spin.removeAttribute('hidden');
  let list = document.getElementById('dropdown');
  const val = list.options[list.selectedIndex].value;
  //console.log(typeof val, val);
  let url = 'https://restcountries.eu/rest/v2/name/' + val + '?fullText=true';
  //console.log('url', url);
  fetch(url)
    .then(response => {
      spin.setAttribute('hidden', ''); //hide the spinner
      return response.json();
    })
    .then(res => {
      console.log(res);
      let newDiv = document.createElement('DIV');
      newDiv.setAttribute('id', 'new-div');
      document.body.append(newDiv);
      const p = (document.createElement('p').innerHTML = 'Name of the country is: ' + res[0].name);
      newDiv.append(p);
      const p_2 = (document.createElement('p').innerHTML = 'And its capital is: ' + res[0].capital);
      newDiv.append(p_2);
      if (res[0].borders.length > 1) {
        let y = res[0].borders.toString().toLowerCase();
        console.log(y);
        const p_3 = (document.createElement('p').innerHTML =
          'Its bordering country (is)/ countries are: ' + y);
        newDiv.append(p_3);
      } else {
        const p_3 = (document.createElement('p').innerHTML =
          'It does not have any bordering countries.');
        newDiv.append(p_3);
      }

      return res;
    })
    .catch(err => console.warn('Error in fetch -', err));
};
*/

/*
get_2('https://jsonplaceholder.typicode.com/users')
  .then(response => JSON.parse(response))
  .then(response => console.log(response));

//transform to fetch:
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(response => {
    console.log(response);
  });
//.then(response => console.log(response));
*/
