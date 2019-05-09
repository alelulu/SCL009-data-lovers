window.data = {
  // Function to filter by type
  filterType: (arr, typeRequested) => {
    const pkmnType = arr.filter(element => {
      return element.type.includes(typeRequested);
    }) 
    saveCurrentArray(pkmnType);
    return pkmnType
  },

  // Function to filter by type 
  filterEgg: (arr, km) => {
    const pkmnEgg = arr.filter(element => {
      return element.egg.includes(km);
    })
    saveCurrentArray(pkmnEgg);
    return pkmnEgg;
  },

  // Function to order the data
  orderingBy: (arr, sortBy, orderCondition) => {
    let orderedPkmn = [];
    if (sortBy == "name"){
      if(orderCondition == "asc"){
        orderedPkmn = arr.sort((a, b) => a.name.localeCompare(b.name));
      }
      else {
        orderedPkmn = arr.sort((a, b) => a.name.localeCompare(b.name)).reverse();
      }
    }
    else {
      if(orderCondition == "asc"){
        orderedPkmn = arr.sort(ordenByNumber);
      }
      else {
        orderedPkmn = arr.sort(ordenByNumber).reverse();
      }
    }
    return orderedPkmn;
  },

  // Function to calculate the array length
  calculate: (arr) => {
    return arr.length;
  }
}

// Other functions:

//Compare function to order by number
function ordenByNumber (a, b) {
  return a.id - b.id;
}

//Function to save the current array
function saveCurrentArray (arr) {
  window.currentArray = arr;
}