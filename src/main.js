/* Manejo del DOM */
//acá va cómo muestro la info (tabla)
let pkmnArray = POKEMON.pokemon;
let pkdxNumber = document.getElementById("pkdx-number");
let aToZ = document.getElementById("a-z");
let zToA = document.getElementById("z-a");
//aToZ.addEventListener("click", () => {

//})

let pkmnBoxes = document.getElementById("boxes");
let pkmnCount = 0

let box = document.createElement("div");
box.classList.add("row");
box.classList.add("justify-content-center");
for (let i = 0; i < pkmnArray.length; i++) {
  
	if (pkmnCount < pkmnArray.length){
		let pkmnContainer = document.createElement('div');
		pkmnContainer.classList.add("pkmn-container");
		pkmnContainer.classList.add("col-sm-12");
		pkmnContainer.classList.add("col-md-6");
		pkmnContainer.classList.add("col-lg-3");
		pkmnContainer.innerHTML = "<h4 class='pkmn-name'>"+pkmnArray[pkmnCount].name+" #"+pkmnArray[pkmnCount].num+"</h4>";
		pkmnContainer.innerHTML += "<br>"
		pkmnContainer.innerHTML += "<img src='"+pkmnArray[pkmnCount].img+"'>"
		pkmnContainer.innerHTML += "<p>"+pkmnArray[pkmnCount].type;+"</p>"
		pkmnCount = pkmnCount + 1;
		box.appendChild(pkmnContainer);
	}
}

pkmnBoxes.appendChild(box);