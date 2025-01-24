export const FUELS = {
  TOTAL: 'Total',
  SFF_P1000: 'Solid fossil fuels',
  O4000: 'Oil and petroleum products',
  G3000_C0350_370: 'Natural gas',
  RA000: 'Nuclear heat',
  W6100_6220: 'Hydro and wind',
  N900H: 'Biofuels',
  H8000: 'Heat',
  E7000: 'Electricity',
};

export const UNITS = {
  KTOE: 'Thousand tonnes of oil equivalent',
  GJ: 'Gigajoules',
  TJ: 'Terajoules',
  GWH: 'Gigawatt hours',
  GCAL: 'Gigacalories',
  TCAL: 'Teracalories',
  GBTU: 'Billion British thermal units',
};

export const DEFAULTS = {
  dataset: 'nrg_bal_c',
  fuel: 'TOTAL',
  unit: 'KTOE',
  details: 'false',
  year: '', // Will be set to latest year after API response
  countries: [], // Will be populated with all countries
};

export const API_BASE_URL =
  'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data';
export const VISUALIZATION_URL =
  'https://ec.europa.eu/eurostat/cache/sankey/energy/sankey.html';
