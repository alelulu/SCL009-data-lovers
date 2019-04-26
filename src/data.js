//filtering by type
window.data = {
  filterType: (arr, type) => {
    let pkmnType = [];
    for (let i = 0; i < arr.length; i++) {
      if(arr[i].type.length > 1) {
        if(arr[i].type[0] == type || arr[i].type[1] == type) {
          pkmnType.push(arr[i]);
        }
      }
      else {
        if(arr[i].type[0] == type)
        pkmnType.push(arr[i])
      }	
    }
    localStorage.setItem("currentArray", pkmnType)
    return pkmnType
  },

  //filtering by egg
  filterEgg: (arr, km) => {
    let pkmnEgg = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i].egg == km){
        pkmnEgg.push(arr[i])
      } 
    }
    return pkmnEgg
  },

  //order by
  /*
  orderingBy: (arr) => {
    for (let i = 0; i < arr.length; i++){
      let orderedPkmn = arr.sort(arr[i])
    return orderedPkmn
    }
  }
  */
}
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// acá va filtrar, calcular y ordenar.

/*
const example = () => {
  return 'example';
};

window.example = example;
*/
