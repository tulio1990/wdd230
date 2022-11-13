const request = 'json/directory.json';
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const directory = document.querySelector('.directory');
const directorylist = document.querySelector('.list-directory')

fetch(request)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const directoryJ = jsonObject['directory'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    directoryJ.forEach(displayDirectory);   
  });

  function displayDirectory(directoryJs) {

    let card = document.createElement('section');
    let lista = document.createElement('section');

    let h2 = document.createElement('h2');
    let h2l = document.createElement('h2');
    let phone = document.createElement('p');
    let phonel = document.createElement('p');
    let address = document.createElement('p');
    let addressl = document.createElement('p');
    let profesion = document.createElement('p');
    let profesionl = document.createElement('p');
    let portrait = document.createElement('img');
  
    
    h2.textContent = `${directoryJs.name}`;
    phone.textContent = `${directoryJs.phone}`;
    address.textContent = `${directoryJs.address}`
    profesion.textContent = `${directoryJs.profesion}`

    h2l.textContent = `${directoryJs.name}`;
    phonel.textContent = `${directoryJs.phone}`;
    addressl.textContent = `${directoryJs.address}`
    profesionl.textContent = `${directoryJs.profesion}`


    portrait.setAttribute('src', directoryJs.imageurl);
    h2.setAttribute('alt', ` ${directoryJs.name}`);
    card.setAttribute('loading', 'lazy');
  
  
    card.appendChild(h2);
    card.appendChild(phone);
    card.appendChild(address);
    card.appendChild(profesion);

    lista.appendChild(h2l);
    lista.appendChild(phonel);
    lista.appendChild(addressl);
    lista.appendChild(profesionl);
  
    
    document.querySelector('div.directory').appendChild(card);
    document.querySelector('div.list-directory').appendChild(lista);
  }


function show(chose){
    if (chose == 'card'){
        document.querySelector(".directory").style.display=""; 
        document.querySelector(".list-directory").style.display="none"; 
        
  }else if (chose == "list"){
    document.querySelector(".list-directory").style.display="";
    document.querySelector(".directory").style.display="none";
  }
}








