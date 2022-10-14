const input = document.querySelector('input');
const button = document.querySelector('button');
const listul = document.querySelector('ul');

button.addEventListener('click', function() {
    const listil = document.createElement('li');
    const deleteb = document.createElement('button');
    listil.textContent = input.value;
    deleteb.textContent = '❌';
    listil.appendChild(deleteb);
    listul.appendChild(listil);
    deleteb.addEventListener('click', () => {
        listul.removeChild(listil);
    });
    input.focus();
    input.value = ''
});