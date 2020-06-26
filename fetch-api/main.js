const dailyquote = document.getElementById('quote');
const quotebtn = document.getElementById('btn');


quotebtn.addEventListener('click', function getquote(){
    fetch(`https://quote-garden.herokuapp.com/api/v2/quotes/random`)
    .then(res => res.json())
    .then(data => {
        dailyquote.innerHTML = `${data.quote.quoteText}`
        console.log(data);
        
    })
})