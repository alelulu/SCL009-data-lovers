/* Manejo del DOM */
//acá va cómo se muestra la info (tabla)
//Declaramos variable para llamar array
let pkmnArray = window.POKEMON.pokemon;
//Mostrando en index todos los pkmn; llamamos a la funcion showPkmn con el load del body
let indexPage = document.getElementById("index-page");
if (indexPage != null){
	window.addEventListener("load",() => {
		window.currentArray = pkmnArray;
		showPkmn(pkmnArray);
	})
}
//Para que se resetee y vuelva a mostrar en orden por id. Usamos querySelectorAll para la clase reset. Llamamos a la funion showPkmn
let pageReset = document.querySelectorAll(".reset");
pageReset.forEach(element =>{
	element.addEventListener("click", () => {
		window.currentArray = pkmnArray;
		showPkmn(pkmnArray);
	})
})

//Función para mostrar en cajitas responsivas los Pkmn y sus datos respectivos. Creamos div dinámico dentro de nuestro div del html ("boxes")
let showPkmn = (arr) => {
	let pkmnBoxes = document.getElementById("boxes");
	pkmnBoxes.innerHTML = " ";
	let pkmnCount = document.getElementById("pkmn-count");
	let pknmPage = window.data.calculate(arr);
	pkmnCount.innerHTML = "En este grupo hay un total de "+pknmPage+" Pokémon";
  //Creamos un div para la clase row y lo alineamos (responsive)
  let box = document.createElement("div");
	box.classList.add("row");
  box.classList.add("justify-content-center");
  //Para que revise cada dato del array lo pasamos por un for. Dentro de este creamos un div con clases col y llamamos datos desde la data
	for (let i = 0; i < arr.length; i++) {
		let pkmnContainer = document.createElement('div');
			pkmnContainer.classList.add("card");
			pkmnContainer.classList.add("side");
      pkmnContainer.classList.add("pkmn-container");
			pkmnContainer.classList.add("col-sm-6");
			pkmnContainer.classList.add("col-md-6");
			pkmnContainer.classList.add("col-lg-3");
			let backCard = document.createElement('div');
			backCard.classList.add("side");
			backCard.classList.add("back")
			//backCard.innerHTML = "<p>"+arr[i].weight+" "+arr[i].height+"</p>";
			backCard.innerHTML = `<p> Peso: ${arr[i].weight}</p>
			<p>Altura: ${arr[i].height} </p>
			<p>Sus debilidades son: </p>
			<p>${arr[i].weaknesses} </p>  `;
			//backCard.innerHTML += "<p>"+arr[i].weaknesses+"</p>"
			pkmnContainer.innerHTML = "<h4 class='pkmn-name'>"+arr[i].name+" #"+arr[i].num+"</h4>";
			pkmnContainer.innerHTML += "<br>"
			pkmnContainer.innerHTML += "<img src='"+arr[i].img+"'>"
			pkmnContainer.innerHTML += "<p>"+arr[i].type+"</p>";
			pkmnContainer.appendChild(backCard);
			box.appendChild(pkmnContainer);
    }
    pkmnBoxes.appendChild(box);
}


//filtrando tipo en dom (llamando a nuestra función)
let typeItems = document.querySelectorAll("button.type-item");
typeItems.forEach(element => {
	element.addEventListener("click", () => {
		showPkmn(window.data.filterType(pkmnArray, element.getAttribute('type-name')));
	});
});

//filtrando huevos en dom (llamando a nuestra función)
let eggItems = document.querySelectorAll("button.egg-item");
eggItems.forEach(element => {
	element.addEventListener("click", () => {
		showPkmn(window.data.filterEgg(pkmnArray, element.getAttribute("egg-km")))
	})
})
//console.log(filterEgg(pkmnArray, "2 km"))

let orderedBy = document.querySelectorAll("button.ordered-by");
orderedBy.forEach(element => {
	element.addEventListener("click", () => {
		showPkmn(window.data.orderingBy(getCurrentArray(), element.getAttribute("ordered-by"), element.getAttribute("sort-order")));
	})
})

const getCurrentArray = () => {
	//Aquí llamamos al campo del objeto window que guardamos con la función saveCurrentArray
	return window.currentArray
}





