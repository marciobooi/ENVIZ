export const MAIN_FUEL_FAMILIES = [
  'fuelMainFuel',
  'fuelElectricity',
  'fuelCombustible',
  'fuelNonCombustible',
  'fuelOtherPetroleum',
  'fuelMainPetroleum',
  'fuelOil',
  'fuelOtherFossil',
  'fuelFossil',
  'fuelCoal',
];

export const ENBAL_UNITS = ['KTOE', 'GWH', 'TJ'];
export const DECIMALS = ['0', '0.0', '0.00', '0.000'];

export const DEFAULTS = {
  geo: 'EU27_2020',
  unit: 'KTOE',
  language: 'EN',
  year: '2023',
  fuel: 'fuelMainFuel',
  siec: 'TOTAL',
  details: '1',
  chartOptions: '0',
  stacking: 'normal',
  chartBal: '',
  chart: '',
  full: '0',
  chartBalText: '',
  order: 'DESC',
  siecs: '',
  decimals: '0',
  agregates: '0',
  share: false,
  fuelList: '',
};

export const BASE_URL =
  'https://ec.europa.eu/eurostat/cache/visualisations/energy-balances/enbal.html';
export const YEARS_API_URL =
  'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/nrg_bal_c';
