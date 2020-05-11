window.onload = async function(){
    const response = await fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72");
    const quartos = await response.json();

    let nomes = quartos.map(quartos => `<div class="titulo"><h6 class="card-title">${quartos.name[0].toUpperCase() + quartos.name.slice(1).toLowerCase()}</h6> </div>`);
   

    let photos = quartos.map(quartos => `<img src="${quartos.photo.replace(/xx_large|x_large/g,"x_medium")}" class="card-img-top" alt="..."></img>`);
    

    let precos = quartos.map(quartos => `<div class="valor"><p>Valor: R$ ${quartos.price},00</p></div>`);
    

    let tipoPropriedade = quartos.map(quartos => `<div class="tipos"><p>${quartos.property_type}</p></div>`);
    
    
   for(x = 0 ; x <= 23; x++){
    var itens = photos[x]+ nomes[x] + tipoPropriedade[x] + precos[x];
    document.getElementById(`carta${x}`).innerHTML = itens;

   }
           
}
 
