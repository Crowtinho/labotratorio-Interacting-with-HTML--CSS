// document.getElementById("contad").innerHTML ="papitas"

let contador  = 0;
document.getElementById("aumentar").addEventListener("click", function(){
    contador += 1;
    document.getElementById("contador").innerHTML = contador;
    if(contador == 10){
    document.getElementById("contador").style.color = "white"
    document.getElementById("contador").style.background = "rgb(93, 173, 226)"
    }else{
    document.getElementById("contador").style.color = "black"
    document.getElementById("contador").style.background = "transparent"
    }
}) 
document.getElementById("disminuir").addEventListener("click", function(){
    contador -= 1;
    document.getElementById("contador").innerHTML = contador;
    if(contador == 10){
    document.getElementById("contador").style.color = "white"
    document.getElementById("contador").style.background = "rgb(93, 173, 226)"
    }else{
    document.getElementById("contador").style.color = "black"
    document.getElementById("contador").style.background = "transparent"
    }
}) 

