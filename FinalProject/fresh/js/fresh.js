const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const fruit = jsonObject['']
        for (let i = 0; i < fruit.length; i++) {
            let card = Document.getElementById('#genus');
            let h2 = document.createElement('option');
            h2.textContent = fruit[i].genus;
            card.appendChild(h2);
        }
    });