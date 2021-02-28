
const getBtn = document.getElementById('get-btn');
getBtn.addEventListener('click', ()=>{
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/random`)
    .then(res => res.json())
    .then(res => {
        // destructed way
        const [{ _id, quoteText}] = res.data;
        quote.innerHTML = `${quoteText}`
    })
    .catch(error => {
    
        throw error;
    })
})

let toggleButton = document.getElementById('toggle-btn');
let mobileNav = document.getElementById('mobile-nav');
let closeNav = document.getElementById('close');

toggleButton.addEventListener('click', function(){
    
    mobileNav.style.display='block'
});

closeNav.addEventListener('click', function(){
    
    mobileNav.style.display='none'
    
})