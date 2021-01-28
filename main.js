// dom manipulation
const dailyquote = document.getElementById('quote');
const quotebtn = document.getElementById('quote-btn');
const toggle = document.getElementById('toggle');

// fetching the random quote and displaying on the quote container
quotebtn.addEventListener('click', () => {
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/random`)
    .then(res => res.json())
    .then(res => {
        // destructed way
        const [{ _id, quoteText}] = res.data;
        
        // non-destructure way
        // const quoteText = res.data[0].quoteText;
        // const _id = res.data[0]._id;
        
        console.log('>>>>> id is: ', _id)
        console.log('>>>>> quoteText is: ', quoteText)
        
        dailyquote.innerHTML = `${quoteText}`
    })
    .catch(error => {
        console.log('in error')
        throw error;
    })
})

// code for the side bar
toggle.addEventListener('click', () => {
    document.body.classList.toggle('appear');
})
