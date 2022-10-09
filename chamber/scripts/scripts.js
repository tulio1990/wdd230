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