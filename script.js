let btn = document.getElementById('btn');
let result = document.getElementById('result');
let close = document.getElementById('close');


btn.addEventListener('click', showPopup);

function showPopup(){
    result.classList.add('show');
}

close.addEventListener('click', closePopup);

function closePopup(){
    result.classList.remove('show');
}