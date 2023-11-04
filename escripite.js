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
    poritfolio.innerHTML = "<h1> Arcesvo de Capturas do Grande Mestre Quadros</h1>";
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

});
botaoNos.addEventListener("click", function abrirnos(event){

    // mostrando tela
    poritfolio.style.display = "none";
    edicoes.style.display = "none";
    Sobre.style.display = "flex";

     // adição de conteudo
     
} );