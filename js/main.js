const imagens = document.querySelectorAll("img");
console.log(imagens);

const imgImagem = document.querySelectorAll("img[src^='img/imagem']");
console.log(imgImagem);

const linksInternos = document.querySelectorAll("a[href^='#']");
console.log(linksInternos);

const h2 = document.querySelector(".animais-descricao h2");
console.log(h2);

const ultimoP = document.querySelectorAll("p");
console.log(ultimoP[--ultimoP.length]);
