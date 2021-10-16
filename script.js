
const body = document.body;
const button = document.querySelector('button');
const captain = document.querySelector('#captain');
const thor = document.querySelector('#thor');

button.addEventListener('click', () => {
    body.classList.toggle('dark');
    if(body.className == 'dark'){
        button.className = 'b-dark';
        thor.style.visibility = 'hidden';
        captain.style.visibility = 'visible';
        button.innerHTML = 'Thor';
    }
    else{
        button.className = 'b-light';
        thor.style.visibility = 'visible';
        captain.style.visibility = 'hidden';
        button.innerHTML = 'Captain America';
    }
});