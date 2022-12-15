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

    // function displayfresh(){
    //     let name = document.getElementById("name").value;
    //     let email = document.getElementById("email").value;
    //     let phone = document.getElementById("phone").value;
    //     let carbo 
    //     let prote
    //     let fat
    //     let sugar
    //     let calories
    //     let fruit_one = document.getElementById("genus").value;
    //     let fruit_two = document.getElementById("genus2").value;
    //     let fruit_three = document.getElementById("genus3").value;
    //     let div = document.getElementById("line-top");

    //     let h2 = document.createElement('h2');
    //     h2.innerText = name;
    //     let p = document.createElement('p')
    //     p.innerText = email;
    //     let p2 = document.createElement('p')
    //     o2.innerHTML = phone;

    // div.appendChild(h2);
    // div.appendChild(p);
    // div.appendChild(p2);

    // console.log(h2);
    // console.log(p);
    // console.log(p2);



    // };

 document.getElementsByClassName("submitBtn").addEventListener("click", function(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let carbo 
    let prote
    let fat
    let sugar
    let calories
    let fruit_one = document.getElementById("genus").value;
    let fruit_two = document.getElementById("genus2").value;
    let fruit_three = document.getElementById("genus3").value;
    let div = document.getElementById("line-top");

    let h2 = document.createElement('h2');
    h2.innerText = name;
    let p = document.createElement('p')
    p.innerText = email;
    let p2 = document.createElement('p')
    p2.innerHTML = phone;

div.appendChild(h2);
div.appendChild(p);
div.appendChild(p2);

console.log(h2);
console.log(p);
console.log(p2);
});