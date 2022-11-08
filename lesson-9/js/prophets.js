const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    prophets.forEach(displayProphets);   
  });

  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let prophetBirth = document.createElement('p');
    let prophetPlace = document.createElement('p');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    prophetBirth.textContent = `Birthdate: ${prophet.birthdate}`;
    prophetPlace.textContent = `Birthplace: ${prophet.birthplace}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    h2.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
    card.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(prophetPlace);
    card.appendChild(prophetBirth);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }


  