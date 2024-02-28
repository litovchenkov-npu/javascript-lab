const capitalizeProperty = (array, property) => {
    return array.map(obj => ({
      ...obj,
      [property]: obj[property].charAt(0).toUpperCase() + obj[property].slice(1)
    }));
  };
  
  const objectsArray = [
    { name: 'john', age: 25 },
    { name: 'emma', age: 30 },
    { name: 'alex', age: 22 }
  ];
  
  const capitalArray = capitalizeProperty(objectsArray, 'name');
  console.log(capitalArray);