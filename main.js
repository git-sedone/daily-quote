// dom manipulation
const dailyquote = document.getElementById('quote');
const quotebtn = document.getElementById('quote-btn');
const toggle = document.getElementById('toggle');

// fetching the random quote and displaying on the quote container
quotebtn.addEventListener('click', () => {
    fetch(`https://quote-garden.herokuapp.com/api/v2/quotes/random`)
    .then(res => res.json())
    .then(data => {
        dailyquote.innerHTML = `${data.quote.quoteText}`
    })
    .catch(error => {
        throw Error("error in quote garden api", error);
    })
})

// code for the side bar
toggle.addEventListener('click', () => {
    document.body.classList.toggle('appear');
})
