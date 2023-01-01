const getBtn = document.getElementById('get-btn');
getBtn.addEventListener('click', () => {
  fetch('https://dummyjson.com/quotes/random')
    .then((res) => res.json())
    .then((res) => {
      quote.innerHTML = `${res.quote}`;
    })
    .catch((error) => {
      throw error;
    });
});

let toggleButton = document.getElementById('toggle-btn');
let mobileNav = document.getElementById('mobile-nav');
let closeNav = document.getElementById('close');

toggleButton.addEventListener('click', function () {
  mobileNav.style.display = 'block';
});

closeNav.addEventListener('click', function () {
  mobileNav.style.display = 'none';
});
