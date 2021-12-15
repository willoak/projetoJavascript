// const imagens = document.querySelectorAll("img");
// console.log(imagens);

// const imgImagem = document.querySelectorAll("img[src^='img/imagem']");
// console.log(imgImagem);

// const linksInternos = document.querySelectorAll("a[href^='#']");
// console.log(linksInternos);

// const h2 = document.querySelector(".animais-descricao h2");
// console.log(h2);

// const ultimoP = document.querySelectorAll("p");
// console.log(ultimoP[--ultimoP.length]);

// const titulos = document.getElementsByClassName(".titulo");
// console.log(titulos);

// const cadaParagrafo = document.querySelectorAll("p");
// cadaParagrafo.forEach((item) => console.log(item));

// cadaParagrafo.forEach((item) => console.log(item.innerText));

// const menu = document.querySelector(".menu");
// console.log(menu.classList.contains("menu"));

// console.log(menu.getAttribute("data-item"));

const menu = document.querySelectorAll(".menu a");
console.log(menu);
menu.forEach((item) => item.classList.add("ativo"));
menu.forEach((item) => item.classList.remove("ativo"));
menu[0].classList.add("ativo");

const imagensAlt = document.querySelectorAll("img");
imagensAlt.forEach((item) => console.log(item.hasAttribute("alt")));

document.querySelector('a[href^="http"]').setAttribute("href", "https://www.wicarvalho.com");
