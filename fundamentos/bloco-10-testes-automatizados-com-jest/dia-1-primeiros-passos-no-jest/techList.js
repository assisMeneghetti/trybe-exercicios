function techList(tech, name) {
  let sortTechnologies = tech.sort();
  let result = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < sortTechnologies.length; index += 1) {
    let technologiesByName = {
      tech: sortTechnologies[index],
      name: name
    }
    result.push(technologiesByName);
  }
  return result;
}

module.exports = techList;
