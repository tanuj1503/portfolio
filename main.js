const bar = document.querySelector(".fa-bars");
const ul = document.querySelector("ul");

bar.addEventListener('click', () => {
    ul.classList.toggle("active");
})