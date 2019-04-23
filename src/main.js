/* Manejo del DOM */
//acá va cómo muestro la info (tabla)
let pkmnArray = POKEMON.pokemon;
let pkdxNumber = document.getElementById("pkdx-number");
let aToZ = document.getElementById("a-z");
let zToA = document.getElementById("z-a");
aToZ.addEventListener("click" => (){

})

let pkmnBoxes = document.getElementById("boxes");
let pkmnCount = 0

for (let i = 0; i < pkmnArray.length; i++) {
  let box = document.createElement("div");
  box.classList.add("row")
		if (pkmnCount < pkmnArray.length){
			let pkmnContainer = document.createElement('div');
      pkmnContainer.classList.add("pkmn-container", "col-sm-6");
			pkmnContainer.innerHTML = "<h4 class='pkmn-name'>"+pkmnArray[pkmnCount].name+" #"+pkmnArray[pkmnCount].num+"</h4>";
			pkmnContainer.innerHTML += "<br>"
			pkmnContainer.innerHTML += "<img src='"+pkmnArray[pkmnCount].img+"'>"
			pkmnContainer.innerHTML += "<p>"+pkmnArray[pkmnCount].type;+"</p>"
      pkmnCount = pkmnCount + 1;
  		box.appendChild(pkmnContainer);
    }
    pkmnBoxes.appendChild(box);
	}