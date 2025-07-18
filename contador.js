// document.getElementById("contad").innerHTML ="papitas"

let contador  = 0;
document.getElementById("aumentar").addEventListener("click", function(){
    contador += 1;
    document.getElementById("contador").innerHTML = contador;

}) 
document.getElementById("disminuir").addEventListener("click", function(){
    contador -= 1;
    document.getElementById("contador").innerHTML = contador;

}) 