/////////////////////////////////////////////////////////////////////
// dom manipulation ////////////////////////////////////////////////

const dailyquote = document.getElementById('quote');
const quotebtn = document.getElementById('quote-btn');
const toggle = document.getElementById('toggle');
const formBtn = document.getElementById('form-btn');
const containerForm = document.getElementById('container-form')

quotebtn.addEventListener('click', function getquote(){
    fetch(`https://quote-garden.herokuapp.com/api/v2/quotes/random`)
    .then(res => res.json())
    .then(data => {
        dailyquote.innerHTML = `${data.quote.quoteText}`
        console.log(data);
        
    })
})

toggle.addEventListener('click', function(){
    document.body.classList.toggle('appear');
})

formBtn.addEventListener('click', function(){
    containerForm.classList.toggle('open-form');
})

//////////////////////////////////////////////////////////////
// form validation////////////////////////////////////////////
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

if(name.value >=3){
    name.classList.add('name-green')
}else{
    name.classList.add('name-red')
}