// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//Función filtro
export const filterData = (data, filterBy, value) => {
    return data.filter((data) => {
      if (data.facts[filterBy]) {
        return data.facts[filterBy] === value;
      }
      return false;
    });
  };
  
  // Funcion para ordenar ASC y DESC
  export const sortData = (data, sortConfig) => {
    const { sortBy, sortOrder } = sortConfig;
    const sortedData = data.slice().sort((a, b) => {
      const valA = valorOrdenar(a, sortBy);
      const valB = valorOrdenar(b, sortBy);
      if (sortOrder === "asc") {
        return valA.localeCompare(valB);
      } else if (sortOrder === "desc") {
        return valB.localeCompare(valA);
      } else {
        return 0;
      }
    });
    
    return sortedData;
  };
    
  // Funcion para ordenar asc y desc junto con los filtros de género y países
  const valorOrdenar = (item, sortBy) => {
    switch (sortBy) {
    case "mainField":
      return item.facts[sortBy];
    case "countryNacimiento":
      return item.facts[sortBy];
    default:
      return String(item[sortBy]).toLowerCase();
    }
  };
  
  //Estadísticas
  export const computeStats = (data) => {
    const stats = {
      countries: computeCountryStats(data),
      genres: computeGenreStats(data),
    };
  
    return stats;
  };
  
  const computeCountryStats = (data) => {
    return data.reduce((accumulator, writer) => {
      const country = writer.facts.countryNacimiento;
  
      if (!accumulator[country]) {
        accumulator[country] = 1;
      } else {
        accumulator[country] += 1;
      }
      return accumulator;
    }, {});
  };
  
  const computeGenreStats = (data) => {
    return data.reduce((accumulator, writer) => {
      const genre = writer.facts.mainField;
  
      if (!accumulator[genre]) {
        accumulator[genre] = 1;
      } else {
        accumulator[genre] += 1;
      }
  
      return accumulator;
    }, {});
  };
  