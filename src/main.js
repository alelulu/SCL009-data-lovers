// Calling the data
let pkmnArray = window.POKEMON.pokemon;

let indexPage = document.getElementById("index-page");
if (indexPage != null){
	window.addEventListener("load",() => {
		window.currentArray = pkmnArray;
		showPkmn(pkmnArray);
	})
}

let pageReset = document.querySelectorAll(".reset");
pageReset.forEach(element =>{
	element.addEventListener("click", () => {
		window.currentArray = pkmnArray;
		showPkmn(pkmnArray);
	})
})

//Function to show cards
let showPkmn = (arr) => {
	//Calling function to calculate the total number of pkmn showed
	let pkmnCount = document.getElementById("pkmn-count");
	let pknmPage = window.data.calculate(arr);
	let showingCount = document.createElement("h4")
	showingCount.classList.add("showing-count");
	showingCount.innerHTML = "En este grupo hay un total de "+pknmPage+" Pokémon";
	pkmnCount.innerHTML = " ";
	pkmnCount.appendChild(showingCount);
  //Calling empty div to create cards
  let pkmnBoxes = document.getElementById("boxes");
  pkmnBoxes.innerHTML = " ";
  let box = document.createElement("div");
	box.classList.add("row");
  box.classList.add("justify-content-center");
	
	for (let i = 0; i < arr.length; i++) {
		//Creating cards
		let pkmnContainer = document.createElement('div');
		pkmnContainer.classList.add("card");
		pkmnContainer.classList.add("side");
		pkmnContainer.classList.add("pkmn-container");
		pkmnContainer.classList.add("col-sm-6");
		pkmnContainer.classList.add("col-md-6");
		pkmnContainer.classList.add("col-lg-2");
    pkmnContainer.classList.add("container");
    //Calling names from data
		let pkmnNameRow = document.createElement("div");
		pkmnNameRow.classList.add("row");
		let pkmnNameCol = document.createElement("div");
		pkmnNameCol.classList.add("col");
		pkmnNameCol.innerHTML = "<h6 class='pkmn-name'>"+arr[i].name+" #"+arr[i].num+"</h6>";
		pkmnNameRow.appendChild(pkmnNameCol);
    //Calling images from data
		let pkmnImgRow = document.createElement("div");
		pkmnImgRow.classList.add("row");
		let pkmnImgCol = document.createElement("div");
		pkmnImgCol.classList.add("col");
		pkmnImgCol.innerHTML = "<img id='pkmn-img' src='"+arr[i].img+"'>"
		pkmnImgRow.appendChild(pkmnImgCol)
    //Calling types from data
		let pkmnTypeRow = document.createElement("div");
		pkmnTypeRow.classList.add("row");
    let pkmnTypeCol = document.createElement("div");
    //Creating conditions to add style style to pkmn with two types
		if(arr[i].type[1] != undefined) {
			let pkmnTypeCol1 = document.createElement("div");
			pkmnTypeCol1.classList.add("col-3");
			pkmnTypeCol1.classList.add("offset-3");
			let pkmnTypeCol2 = document.createElement("div");
			pkmnTypeCol2.classList.add("col-3");
			pkmnTypeCol1.classList.add("types");
			pkmnTypeCol2.classList.add("types");
			let typeClass1 = arr[i].type[0].toLowerCase();
			pkmnTypeCol1.innerHTML = "<p class=\"type-box "+typeClass1+"\" type-name=\""+arr[i].type[0]+"\">"+arr[i].type[0]+"</p>";
			let typeClass2 = arr[i].type[1].toLowerCase();
			pkmnTypeCol2.innerHTML = "<p class=\"type-box "+typeClass2+"\" type-name=\""+arr[i].type[1]+"\">"+arr[i].type[1]+"</p>";
			pkmnTypeRow.appendChild(pkmnTypeCol1);
			pkmnTypeRow.appendChild(pkmnTypeCol2);
    }
    //pkmn with only one type
		else {
			pkmnTypeCol = document.createElement("div");
			pkmnTypeCol.classList.add("col-4");
			pkmnTypeCol.classList.add("offset-4");
			pkmnTypeCol.classList.add("types");
			let typeClass = arr[i].type[0].toLowerCase();
			pkmnTypeCol.innerHTML = "<p class=\"type-box "+typeClass+"\" type-name=\""+arr[i].type[0]+"\">"+arr[i].type[0]+"</p>";
			pkmnTypeRow.appendChild(pkmnTypeCol);
		}
		pkmnContainer.appendChild(pkmnNameRow);
		pkmnContainer.appendChild(pkmnImgRow);
		pkmnContainer.appendChild(pkmnTypeRow);

    //Creating flip card
		let backCard = document.createElement('div');
		backCard.classList.add("side");
		backCard.classList.add("back")
		backCard.innerHTML = `<p> ⚖️ Peso: ${arr[i].weight}</p>
		<p> ⬆️ Altura: ${arr[i].height}</p>
    <p> 😧 Debilidades: </p>`;
    //Creating list to show weaknesses
		let weaknessList = document.createElement("ul");
		weaknessList.innerHTML = " ";
		arr[i].weaknesses.forEach(element => {
			weaknessList.innerHTML += "<li class=\"weakness-list\">"+element+"</li>";
		});
		backCard.appendChild(weaknessList);

		pkmnContainer.appendChild(backCard);
		box.appendChild(pkmnContainer);
  }
  pkmnBoxes.appendChild(box);
}

//Calling function to filter by type
let typeItems = document.querySelectorAll("button.type-item");
typeItems.forEach(element => {
	element.addEventListener("click", () => {
		showPkmn(window.data.filterType(pkmnArray, element.getAttribute("value")));
	});
});

//Calling function to filter by egg
let eggItems = document.querySelectorAll("button.egg-item");
eggItems.forEach(element => {
	element.addEventListener("click", () => {
		showPkmn(window.data.filterEgg(pkmnArray, element.getAttribute("value")))
	})
})

//Calling function to order the data
let orderedBy = document.querySelectorAll("button.ordered-by");
orderedBy.forEach(element => {
	element.addEventListener("click", () => {
		showPkmn(window.data.orderingBy(getCurrentArray(), element.getAttribute("value"), element.getAttribute("name")));
	})
})

//Calling function to get our saved actual array
const getCurrentArray = () => {
	return window.currentArray
}