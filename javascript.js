function cerrar(){
    const mensaje = document.getElementsByTagName("footer");
    mensaje[0].remove();
}
function CambiaTemperature(elemento){
    let tRojo = document.getElementsByClassName("tRojo");
    let tAzul = document.getElementsByClassName("tAzul");

    if (elemento.value==="C"){
        tRojo[0].innerText = "50°"
        tRojo[1].innerText = "40°"
        tRojo[2].innerText = "65°"
        tRojo[3].innerText = "73°"

        
        tAzul[0].innerText = "66°"
        tAzul[1].innerText = "30°"
        tAzul[2].innerText = "61°"
        tAzul[3].innerText = "70°"
    } else if (elemento.value==="F"){
        tRojo[0].innerText = "30°"
        tRojo[1].innerText = "42°"
        tRojo[2].innerText = "35°"
        tRojo[3].innerText = "16°"

        
        tAzul[0].innerText = "42°"
        tAzul[1].innerText = "59°"
        tAzul[2].innerText = "89°"
        tAzul[3].innerText = "22°"
    } else if (elemento.value==="K"){
        tRojo[0].innerText = "45°"
        tRojo[1].innerText = "30°"
        tRojo[2].innerText = "80°"
        tRojo[3].innerText = "10°"

        
        tAzul[0].innerText = "60°"
        tAzul[1].innerText = "71°"
        tAzul[2].innerText = "91°"
        tAzul[3].innerText = "29°"
    }
}

const mensaje = (elemento) =>{
    alert('loading weather report...' + elemento.innerText);
}