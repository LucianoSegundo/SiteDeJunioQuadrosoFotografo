// acessso as abas
let poritfolio = document.getElementById("port");
let edicoes = document.getElementById("edi");
let Sobre =  document.getElementById("nos");
// Acesso aos botões
let botaoPor =  document.getElementById("lport");
let botaoEdi  = document.getElementById("ledi");
let botaoNos  = document.getElementById("lnos");

// area de transferencia entre muitas aspas.

let divManipulavel = document.createElement("div");

botaoPor.addEventListener("click", function abrirport(event){

    // mostrando tela
    poritfolio.style.display = "flex";
    edicoes.style.display = "none";
    Sobre.style.display = "none";

    // adição de conteudo
    poritfolio.innerHTML = '<h1 class = "titulo"> Arcesvo de Capturas do Grande Mestre Quadros</h1>';
    for(i=0; i< banco.length; i++){
        console.log(banco.length);

    divManipulavel = '<div><figure>';
    divManipulavel += '<img src="' + banco[i].images[0] +'" alt=" ' +banco[i].title+'">';
    divManipulavel +=   '<h2>'+ banco[i].title+'</h2> </figure>';
    divManipulavel += '<p>'+ banco[i].description+'</p></div>';

    poritfolio.innerHTML += divManipulavel;
    divManipulavel =null;
    };


} );
botaoEdi.addEventListener("click", function abrirEdi(event){

    // mostrando tela
    poritfolio.style.display = "none";
    edicoes.style.display = "flex";
    Sobre.style.display = "none";

     // adição de conteudo
     edicoes.innerHTML = '<h1 class = "titulo"> Explencdidad Edições do Mestre Quadros</h1>';
     for(i =0; i< banco.length; i++){

        divManipulavel = '<div class="antesDepois">';
        divManipulavel += '<div>';
        divManipulavel += '    <figure>';
        divManipulavel += '        <img src="'+ banco[i].images[0]+'" alt="'+banco[i].title+'">';
        divManipulavel += '        <h2>'+banco[i].title+'</h2>';
        divManipulavel += '    </figure>';
        divManipulavel += '    <p>'+banco[i].description+'</p>';
        divManipulavel += '</div>';
        divManipulavel += '<p id="seta">-></p>';
        divManipulavel += '<div>';
        divManipulavel += '    <figure>';
        divManipulavel += '        <img src="'+banco[i].images[1]+'" alt="'+banco[i].title+'">';
        divManipulavel += '        <h2><'+banco[i].title+'/h2>';
        divManipulavel += '    </figure>';
        divManipulavel += '    <p>'+banco[i].description+'</p>';
        divManipulavel += '</div>';
        divManipulavel += '</div>';

        edicoes.innerHTML += divManipulavel


     }

});
botaoNos.addEventListener("click", function abrirnos(event){

    // mostrando tela
    poritfolio.style.display = "none";
    edicoes.style.display = "none";
    Sobre.style.display = "flex";

     // adição de conteudo

} );

// infelismente tendo que duplicar codigo para fazer com que a função seja executada ao abrir a pagina
window.onload = function abrir(event){

    // mostrando tela
    poritfolio.style.display = "flex";
    edicoes.style.display = "none";
    Sobre.style.display = "none";

    // adição de conteudo
    poritfolio.innerHTML = '<h1 class = "titulo"> Arcesvo de Capturas do Grande Mestre Quadros</h1>';
    for(i=0; i< banco.length; i++){
        console.log(banco.length);

    divManipulavel = '<div><figure>';
    divManipulavel += '<img src="' + banco[i].images[0] +'" alt=" ' +banco[i].title+'">';
    divManipulavel +=   '<h2>'+ banco[i].title+'</h2> </figure>';
    divManipulavel += '<p>'+ banco[i].description+'</p></div>';

    poritfolio.innerHTML += divManipulavel;
    divManipulavel =null;
    };


}