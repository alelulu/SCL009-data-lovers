/* Manejo del DOM */
//acá va cómo se muestra la info (tabla)
//Declaramos variable para llamar array
let pkmnArray = POKEMON.pokemon;
//Mostrando en index todos los pkmn; llamamos a la funcion showPkmn con el load del body
let indexPage = document.getElementById("index-page");
if (indexPage != null){
	window.addEventListener("load",() =>{
		showPkmn(pkmnArray)
	})
}
//Para que se resetee y vuelva a mostrar en orden por id. Usamos querySelectorAll para la clase reset. Llamamos a la funion showPkmn
let pageReset = document.querySelectorAll(".reset");
pageReset.forEach(element =>{
	element.addEventListener("click", () => {
		showPkmn(pkmnArray)
	})
})

//yFunción para mostrar en cajitas responsivas los Pkmn y sus datos respectivos. Creamos div dinámico dentro de nuestro div del html ("boxes")
let showPkmn = (arr) => {
	let pkmnBoxes = document.getElementById("boxes");
  pkmnBoxes.innerHTML = " ";
  //Creamos un div para la clase row y lo alineamos (responsive)
  let box = document.createElement("div");
	box.classList.add("row");
  box.classList.add("justify-content-center");
  //Para que revise cada dato del array lo pasamos por un for. Dentro de este creamos un div con clases col y llamamos datos desde la data
	for (let i = 0; i < arr.length; i++) {
    let pkmnContainer = document.createElement('div');
      pkmnContainer.classList.add("pkmn-container");
			pkmnContainer.classList.add("col-sm-6");
			pkmnContainer.classList.add("col-md-6");
			pkmnContainer.classList.add("col-lg-3");
			pkmnContainer.innerHTML = "<h4 class='pkmn-name'>"+arr[i].name+" #"+arr[i].num+"</h4>";
			pkmnContainer.innerHTML += "<br>"
			pkmnContainer.innerHTML += "<img src='"+arr[i].img+"'>"
			pkmnContainer.innerHTML += "<p>"+arr[i].type;+"</p>"
			box.appendChild(pkmnContainer);
    }
    pkmnBoxes.appendChild(box);
}


}

// let pkmntype = [];
// for (let i = 0; i < pkmnArray.length; i++); {
// if (pkmnArray[pkmnCount].type === "Rock"){
//  pkmntype.push(pkmnArray[pkmnCount].name);
// }
// }

// console.log(pkmntype);

const pkmntype = pkmnArray.filter(tipo => {
		return tipo.type == "Rock";
	})
console.log(pkmntype);

let pkdxNumber = document.getElementById("pkdx-number");
let aToZ = document.getElementById("a-z");
let zToA = document.getElementById("z-a");
//aToZ.addEventListener("click", () => {