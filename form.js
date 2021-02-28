let name = document.getElementById('name');
let email = document.getElementById('email');
let number = document.getElementById('number');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');
let form = document.getElementById('form');
let Namesmall = document.getElementById('name-small');
let Emailsmall = document.getElementById('email-small');
let Phonesmall = document.getElementById('number-small');
let Passwordsmall = document.getElementById('password-small');
let Password2small = document.getElementById('password2-small');
let regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let regexNumber = /^[0-9]+$/i;
let isValid = regexNumber.test(number.value)


form.addEventListener('submit', function(e){
    console.log('>>> name.value.length is', name.value.length)
    console.log('>>> type of name.value.length is: ', typeof name.value.length);

    e.preventDefault()
    if(name.value === '' || name.value == null){
        Namesmall.innerText='Name is required';
    } else {
        Namesmall.innerText='';
    }
    if(name.value.length <= 3){
        console.log('>>>>>> hitting name length validation')
        Namesmall.innerText='Name length must be minimum 3';
    }else {
        Namesmall.innerText='';
    }
    if(email.value.match(regexEmail)){
        Emailsmall.innerText=''
    }else{
        Emailsmall.innerText='Invalid email';
    }
    if(number.value.match(regexNumber)){
        Phonesmall.innerText='';
    }else{
        Phonesmall.innerText='Invalid phone number';
    }
    if(password.value.length<7){
        Passwordsmall.innerText='Minimum 7 characters required'
    }else {
        Passwordsmall.innerText='';
    }
    if(password2.value !== password.value){
        Password2small.innerText='Password doesn\'t match'
    }else {
        Password2small.innerText='';
    }
    
})

