function lerMais(){
    let pontos=document.getElementById("pontos");
    let maisTexto=document.getElementById("mais");
    let btnVermais=document.getElementById("btnVerMais");


    if(pontos.style.display === "none"){
      pontos.style.display="inline";
      maisTexto.style.display="none";
      btnVermais.innerHTML="mais";


    }else{
      pontos.style.display="none";
      maisTexto.style.display="inline";
      btnVermais.innerHTML="<br>menos";
    }
}

function lerMais2(){
    let pontos2=document.getElementById("pontos2");
    let maisTexto2=document.getElementById("mais2");
    let btnVermais2=document.getElementById("btnVerMais2");


    if(pontos2.style.display === "none"){
      pontos2.style.display="inline";
      maisTexto2.style.display="none";
      btnVermais2.innerHTML="mais";


    }else{
      pontos2.style.display="none";
      maisTexto2.style.display="inline";
      btnVermais2.innerHTML="<br>menos";
    }
}
