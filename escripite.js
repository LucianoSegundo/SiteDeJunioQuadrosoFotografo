// acessso as abas
let poritfolio = document.getElementById("port");
let edicoes = document.getElementById("edi");
let Sobre =  document.getElementById("nos");
// Acesso aos botões
let botaoPor =  document.getElementById("lport");
let botaoEdi  = document.getElementById("ledi");
let botaoNos  = document.getElementById("lnos");

botaoPor.addEventListener("click", function abrirport(event){
    
    poritfolio.style.display = "flex";
    edicoes.style.display = "none";
    Sobre.style.display = "none";
} );
botaoEdi.addEventListener("click", function abrirEdi(event){
    poritfolio.style.display = "none";
    edicoes.style.display = "flex";
    Sobre.style.display = "none";
});
botaoNos.addEventListener("click", function abrirnos(event){
    poritfolio.style.display = "none";
    edicoes.style.display = "none";
    Sobre.style.display = "flex";
} );