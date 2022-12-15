const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const fruit = jsonObject
        for (let i = 0; i < fruit.length; i++) {
            let fruitone = document.getElementById('genus');
            let option = document.createElement('option');
            option.innerHTML = fruit[i].name;
            fruitone.appendChild(option);

            let fruittwo = document.getElementById('genus2');
            let option2 = document.createElement('option');
            option2.innerHTML = fruit[i].name;
            fruittwo.appendChild(option2);

            let fruitthree = document.getElementById('genus3');
            let option3 = document.createElement('option');
            option3.innerHTML = fruit[i].name;
            fruitthree.appendChild(option3);
        }
    });