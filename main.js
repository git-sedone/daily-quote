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
const number = document.getElementById('number');
const form = document.getElementById('form');





form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('click');
    checkNumber(number);
    checkName(name);
    checkEmail(email);
    checkPassword(password);
    checkPassword2(password, password2);
    
    
})

function errormsg(input, message){
    const inputArea=input.parentElement
    inputArea.className = 'inputArea error'
    const small= inputArea.querySelector('small');
    small.innerText = message
}
function correctmsg(input){
    inputArea=input.parentElement
    inputArea.className = 'inputArea correct small'
}

function checkEmail(input){
    let cc = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if(cc.test(input.value)){
        correctmsg(input)
    }else{
        errormsg(input, 'invalid email')
    }
}

function checkName(input){
    if(input.value === ''){
        errormsg(input, 'name required')
    }else if(input.value.length <= 2){
        errormsg(input, 'minimum 2 characters required')
    }else{
        correctmsg(input)
    }
}
function checkNumber(input){
    // console.log("typeof input is: ", typeof input.value);
    // console.log(isNaN(input));
    if(input.value !== ''){
        const list = [0,1,2,3,4,5,6,7,8,9,];
        for(i=0; i<list.length; i++){
            if(input.value.match(list[i])){
                correctmsg(input);
            }else{
                errormsg(input, 'invalid number format')
            }
}}}
function checkPassword(input){
    if(!isNaN(input)&&(input.value.length==10 )){
        errormsg(input, 'password is required')
        }else if(input.value.length<4){
            errormsg(input, 'minimum 4 characters is required')
        }else{
            correctmsg(input)
        }
}
function checkPassword2(input1, input2){
    if(input1.value !== input2.value){
        errormsg(input2, 'password do not match')
        
    }else if(input2.value===''){
        errormsg(input2, 'enter password again')
    }else{
        correctmsg(input2)
    }
}

