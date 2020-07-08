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
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const password2 = document.getElementById('password2').value;
const number = document.getElementById('number').value;
const form = document.getElementById('form');





form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('click');
    
    // checkName(name, 2, 10);
    checkEmail(email);
    
    
})

function errormsg(input, message){
    const inputArea=input.parentElement
    inputArea.className = 'inputArea error'
    const small= inputArea.querySelector('small');
    small.innerText = message
}
function correctmsg(input, message){
    inputArea=input.parentElement
    inputArea.className = 'inputArea correct small'
    small.innerText = message;
}

function checkEmail(input){
    let cc = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if(cc.test(input.value)){
        correctmsg(input, 'correct')
    }else{
        errormsg(input, 'invalid email')
    }
}
