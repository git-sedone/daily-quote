// form validation
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const number = document.getElementById('number');
const form = document.getElementById('form');
const formBtn = document.getElementById('form-btn');
const containerForm = document.getElementById('container-form')

formBtn.addEventListener('click', () => {
    containerForm.classList.toggle('open-form');
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('click');
    checkNumber(number);
    checkName(name);
    checkEmail(email);
    checkPassword(password);
    checkPassword2(password, password2);
})

errormsg = ((input, message) => {
    const inputArea=input.parentElement
    inputArea.className = 'inputArea error'
    const small= inputArea.querySelector('small');
    small.innerText = message
})

correctmsg = (input => {
    inputArea=input.parentElement
    inputArea.className = 'inputArea correct small'
})

checkEmail = (emailInput => {
    let emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    const isEmail = emailRegex.test(emailInput.value);

    if(isEmail){
        correctmsg(emailInput)
    }else{
        errormsg(emailInput, 'invalid email')
    }
})

checkName = (input => {
    if(input.value === ''){
        errormsg(input, 'name required')
    }else if(input.value.length <= 2){
        errormsg(input, 'minimum 3 characters required')
    }else{
        correctmsg(input)
    }
})

checkNumber = (input => {    
    let numericRegex  = /^[0-9]+$/i;
    let isPhoneValid = numericRegex.test(input.value);

    console.log("value of isPhoneValid is: ", isPhoneValid);

    if(isPhoneValid){
        correctmsg(input);    
    } else {
        errormsg(input, 'invalid number format')
    }
})

checkPassword = (input => {
    if(!isNaN(input)&&(input.value.length==10 )){
        errormsg(input, 'password is required')
        }else if(input.value.length<4){
            errormsg(input, 'minimum 4 characters is required')
        }else{
            correctmsg(input)
        }
})

checkPassword2 = ((input1, input2) => {
    if(input1.value !== input2.value){
        errormsg(input2, 'password do not match')
        
    }else if(input2.value===''){
        errormsg(input2, 'enter password again')
    }else{
        correctmsg(input2)
    }
})