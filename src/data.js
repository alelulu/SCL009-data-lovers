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
    saveCurrentArray(pkmnType)
    return pkmnType
  },
  // Función filterType pero con el método filter explicado
  /*filterType: (arr, typeRequested) => {
    //creo una variable donde va a guardar las cosas filtradas
    const pkmnType = arr.filter(element => {
      //el filter es más o menos como un for each, pasa por todos los elementos del array(array data en este caso)
      //element va a tomar ese valor en cada vuelta
      return element.type.includes(typeRequested);
      //includes pregunta si está dentro del array o no (true or false)
    }) 
    saveArray(pkmnType);
    return pkmnType
  },*/

  //filtering by egg
  filterEgg: (arr, km) => {
    let pkmnEgg = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i].egg == km){
        pkmnEgg.push(arr[i])
      } 
    }
    saveCurrentArray(pkmnEgg)
    return pkmnEgg
  },
  // Función filterEgg pero con el método 
  /*
  filterEgg: (arr, km) => {
    pkmnEgg = arr.filter(element => {
      return element.egg.includes(km);
    })
    return pkmnEgg;
  },
  */
  // Order function
  orderingBy: (arr, sortBy, orderCondition) => {
    let orderedPkmn = [];
    if (sortBy == "name"){
      if(orderCondition == "asc"){
        //orderderByName cambiado por localeCompare function
        orderedPkmn = arr.sort((a, b) => a.name.localeCompare(b.name));
      }
      else if (orderCondition == "des"){
        orderedPkmn = arr.sort((a, b) => a.name.localeCompare(b.name)).reverse();
      }
    }
    else if (sortBy == "id"){
      if(orderCondition == "asc"){
        orderedPkmn = arr.sort(ordenByNumber);
      }
      else if (orderCondition == "des"){
        orderedPkmn = arr.sort(ordenByNumber).reverse();
      }
    }
    return orderedPkmn;
  },
  // Calculate function (total array)
  calculate: (arr) => {
    return arr.length;
  }
}

// FUNCIONES FUERA DEL OBJETO (NO SE EXPORTAN EN window.data)

//Compare function para ordenar A-Z o Z-A
/*
function orderByName (a, b) {
  if (a.name < b.name){
    return -1;
  }
  if (a.name > b.name){
    return 1;
  }
    return 0;
}
*/
//Compare function para ordenar por número
function ordenByNumber (a, b) {
  return a.id - b.id;
}

//Función para guardar array actual ej: array tipo eléctrico
//Lo guarda en una key del objeto window, vamos a llamar a window.currentArray en el dom
function saveCurrentArray (arr) {
  window.currentArray = arr;
}