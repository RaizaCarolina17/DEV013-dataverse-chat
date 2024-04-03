import { filterData, sortData, computeStats } from '../src/lib/dataFunctions.js';
import { data as fakeData } from './data.js'

describe('filterData', () => {
  it('Filtrado de datos por genero', () => {
    const result = filterData(fakeData, 'mainField', 'Literatura');
    expect(result).toHaveLength(4);
    result.forEach((writer) => {
      expect(writer.facts.mainField).toBe('Literatura');
    });
  });

  it('should filter data by countryNacimiento', () => {
    const result = filterData(fakeData, 'countryNacimiento', 'Reino Unido');
    expect(result).toHaveLength(2);
    result.forEach((writer) => {
      expect(writer.facts.countryNacimiento).toBe('Reino Unido');
    });
  });
});

describe('sortData', () => {
  it('Ordena los nombres de manera Ascendente ', () => {
    const result = sortData(fakeData, { sortBy: 'name', sortOrder: 'asc' });
    expect(result[0].name).toBe('Amy Tan');
    expect(result[1].name).toBe('Isabel Allende');
    expect(result[2].name).toBe('Jane Austen');
    expect(result[3].name).toBe('Virginia Woolf');
  });

  it('Ordena los nombres de manera Descendente', () => {
    const result = sortData(fakeData, { sortBy: 'name', sortOrder: 'desc' });
    expect(result[0].name).toBe('Virginia Woolf');
    expect(result[1].name).toBe('Jane Austen');
    expect(result[2].name).toBe('Isabel Allende');
    expect(result[3].name).toBe('Amy Tan');
  });
});

describe('computeStats', () => {
  it('Calcula estadisticas', () => {
    const result = computeStats(fakeData);
    expect(result.countries).toEqual({ 'Reino Unido': 2, 'EE. UU.': 1, 'Chile': 1 });
    expect(result.genres).toEqual({ 'Literatura': 4 });
  });
});