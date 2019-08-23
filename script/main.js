// 1
const articleHeader = document.querySelector('.article__header').textContent = "Welcome to Nicks blog!";

// 2 
const articleHeader2 = document.querySelectorAll('.article__header');

for (let i = 0; i < articleHeader2.length; i++) {
    articleHeader2[i].classList.add('important')
}

// 3
const noDash = document.querySelector('.dashed');
noDash.classList.remove("dashed");

// 4
const goldenrod = document.querySelector('.article__footer');
console.log(goldenrod)
goldenrod.classList.add("goldenrod");
