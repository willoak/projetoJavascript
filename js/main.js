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

// const menu = document.querySelectorAll(".menu a");
// console.log(menu);
// menu.forEach((item) => item.classList.add("ativo"));
// menu.forEach((item) => item.classList.remove("ativo"));
// menu[0].classList.add("ativo");

// const imagensAlt = document.querySelectorAll("img");
// imagensAlt.forEach((item) => console.log(item.hasAttribute("alt")));

// document.querySelector('a[href^="http"]').setAttribute("href", "https://www.wicarvalho.com");

// //verificar distacia da primeira imagem ao topo
// const primeiraImagem = document.querySelector("img");
// console.log(primeiraImagem.offsetTop);

// //retornar soma da largura das imagens
// const imagens = document.querySelectorAll("img");
// console.log(imagens[0].width);
// let total = [...imagens].reduce((total, item) => {
//   return total + item.offsetWidth;
// }, 0);
// console.log(total);

// //verificar tamanho dos links
// const links = document.querySelectorAll("a");
// console.log(links[0].offsetWidth, links[0].offsetHeight);

// //adicionar classe se o browser for menor que 700px
// if (window.innerWidth < 700) {
//   document.querySelector(".menu").classList.add("menor");
// }

// trabalhando com eventos
// const menu = document.querySelector(".menu");

// menu.addEventListener("click", (evento) => {
//   event.preventDefault();
//   console.log(evento);
// });

//transversing
const lista = document.querySelector(".animais-lista");
console.log(lista.parentElement); // retorna o pai
console.log(lista.previousElementSibling); // retorna o elemento anterior

//duplciar menu
const menu = document.querySelector(".menu");
const novoMenu = menu.cloneNode(true);
document.querySelector(".copyright").appendChild(novoMenu);
