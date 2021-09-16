const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  return setTimeout(() => console.log("Returned planet: ", mars), 4000)
  console.log("Returned planet: ", mars);
};

getPlanet(); // imprime Marte depois de 4 segundos