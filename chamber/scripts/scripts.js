const modified = document.lastModified;
const today = new Date()

const dias = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  let numeroDia = new Date(today).getDay();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  let nameMonth = monthNames[month];
  let nombreDia = dias[numeroDia];

  

document.getElementById('date-today').textContent = nombreDia + ', ' + day + ' '+ nameMonth + ' '+  year;
document.getElementById('last-updated').textContent = document.lastModified;

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("head-id").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

let bannerDay = new Date().getDay();

const banner = document.querySelector('#banner');
if (bannerDay === 1 || bannerDay === 2){
    banner.style.display = 'block';
} else{
    banner.style.display = 'none';
}

const close = document.querySelector('#close');

close.addEventListener('click', () => {
    banner.style.display = 'none';
})

//*+*********************************************************************
const imagesUpdates = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }
    img.onload = () => {
        img.removeAttribute("data-src");
    }
    img.src = src;
}

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 10px 0px"
};

const imgShowing = new IntersectionObserver((entries,imgShowing) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgShowing.unobserve(entry.target);
        }
    })
}, imgOptions);

imagesUpdates.forEach((image) => {
    imgShowing.observe(image);
});


const visitsDisplay = document.querySelector(".visit");
const lastVisitDisplay = document.querySelector(".lastVisit");
const todayTime = today.getTime()


let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0 && numVisits !== null) {
visitsDisplay.textContent = numVisits;

} else {
visitsDisplay.textContent = `This is your first visit!`;
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);

const lastVisit = Number(window.localStorage.getItem("last-visit"));
console.log(lastVisit)

  if (lastVisit !== 0) {

    const time = Date.now();


    let difference = ((time - lastVisit) / (1000 * 60 * 60 * 24)).toFixed(0);


    localStorage.setItem("last-visit", time);


    lastVisitDisplay.textContent = difference;

} else {
  visitsDisplay.textContent = `Today is your first day here`;
  localStorage.setItem("last-visit", Date.now());
}


let date = new Date();
const hidden = document.querySelector("#value-date");
hidden.setAttribute("value",date);

//***************************************










