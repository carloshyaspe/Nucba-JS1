let ingredientes = ["Masa","Jamon","Muzzarella","Pepperoni","Provolone","Tomate","Anana","Anchoas","Faina","Pollo"];
let pares =  [];
let impares =  [];

function separaringredientes (ingred){
    let j = 0;
    let k = 0;
    for ( let i = 0; i < ingred.length ; i++ ){
        if (ingred[i].length % 2 == 0){
            pares[j]=ingred[i];
            j++;
        }else{
            impares[k]=ingred[i];
            k++;
        }
    }
    j = 0;
    k = 0;
    console.log(`Los ingredientes pares son: ${pares} `);
    console.log(`Los ingredientes impares son: ${impares} `);
};

console.log(`Todos los ingredientes son: ${ingredientes}`);
separaringredientes(ingredientes);