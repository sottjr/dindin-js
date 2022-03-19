// o header deve ter cor de fundo #2E948A

let header = document.getElementsByTagName('header');
// console.log(header[0]);
header[0].style.backgroundColor = '#2E948A';



// No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html

let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)');
console.log(linkCursos);

linkCursos.setAttribute('href', 'cursos.html');


// Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".

let depoimentos = document.querySelector('.titulo.depoimento h3').innerHTML = 'O que falam sobre nós';
console.log(depoimentos);

// Na etapa de blog, o título deveria ser "Mais conteúdo pra você".
let blog = document.querySelectorAll('.titulo h3')[1].innerHTML = 'Mais conteúdo pra você"';
console.log(blog);

// Todos os textos que estiverem com a classe.titulo devem apresentar todas as letras maiúsculas.

const lista = document.querySelectorAll('.titulo');
for (let i = 0; i < lista.length; i++) {
    lista[i].style.textTransform = 'uppercase';
}

// o botão "ver todos os posts" deve ter um link que direciona para o arquivo
// blog.html

let linkPost = document.querySelector('#todos_posts');
console.log(linkPost);

linkPost.setAttribute('href', 'blog.html');

//  Adicionar um novo curso na section que contém o id
//investimentos_poupando_independencia:

