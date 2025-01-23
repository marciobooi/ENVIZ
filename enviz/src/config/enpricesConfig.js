export const CODES = {
  nrg_pc_202_c: {
    product: '4100',
    consumer: 'HOUSEHOLD',
    consoms: ['TOT_GJ', 'GJ_LT20', 'GJ20-199', 'GJ_GE200'],
    unit: ['KWH', 'GJ_GCV'],
    currency: ['EUR', 'PPS'],
    nrg_prc: ['NETC', 'NRG_SUP', 'OTH', 'TAX_CAP', 'TAX_ENV', 'TAX_RNW', 'VAT'],
    defaultConsom: 'TOT_GJ',
    defaultUnit: 'KWH',
    defaultCurrency: 'EUR',
  },
  nrg_pc_202: {
    product: '4100',
    consumer: 'HOUSEHOLD',
    consoms: ['TOT_GJ', 'GJ_LT20', 'GJ20-199', 'GJ_GE200'],
    unit: ['KWH', 'GJ_GCV', 'MWH'],
    currency: ['EUR', 'PPS'],
    defaultConsom: 'GJ20-199',
    defaultUnit: 'KWH',
    defaultCurrency: 'EUR',
  },

  nrg_pc_203_c: {
    product: '4100',
    consumer: 'N_HOUSEHOLD',
    consoms: [
      'TOT_GJ',
      'GJ_LT1000',
      'GJ1000-9999',
      'GJ10000-99999',
      'GJ100000-999999',
      'GJ1000000-3999999',
      'GJ_GE4000000',
    ],
    unit: ['KWH', 'GJ_GCV'],
    currency: ['EUR', 'PPS'],
    nrg_prc: ['NETC', 'NRG_SUP', 'OTH', 'TAX_CAP', 'TAX_ENV', 'TAX_RNW', 'VAT'],
    defaultConsom: 'TOT_GJ',
    defaultUnit: 'KWH',
    defaultCurrency: 'EUR',
  },
  nrg_pc_203: {
    product: '4100',
    consumer: 'N_HOUSEHOLD',
    consoms: [
      'TOT_GJ',
      'GJ_LT1000',
      'GJ1000-9999',
      'GJ10000-99999',
      'GJ100000-999999',
      'GJ1000000-3999999',
      'GJ_GE4000000',
    ],
    unit: ['KWH', 'GJ_GCV', 'MWH'],
    currency: ['EUR', 'PPS'],
    defaultConsom: 'GJ1000-9999',
    defaultUnit: 'KWH',
    defaultCurrency: 'EUR',
  },
  nrg_pc_204_c: {
    product: '6000',
    consumer: 'HOUSEHOLD',
    consoms: [
      'TOT_KWH',
      'KWH_LT1000',
      'KWH1000-2499',
      'KWH2500-4999',
      'KWH5000-14999',
      'KWH_LE15000',
    ],
    unit: ['KWH', 'MWH'],
    currency: ['EUR', 'PPS'],
    nrg_prc: [
      'NETC',
      'NRG_SUP',
      'OTH',
      'TAX_CAP',
      'TAX_ENV',
      'TAX_NUC',
      'TAX_RNW',
      'VAT',
    ],
    defaultConsom: 'TOT_KWH',
    defaultUnit: 'KWH',
    defaultCurrency: 'EUR',
  },
  nrg_pc_204: {
    product: '6000',
    consumer: 'HOUSEHOLD',
    consoms: [
      'KWH_LT1000',
      'KWH_GE15000',
      'KWH5000-14999',
      'KWH2500-4999',
      'KWH1000-2499',
    ],
    unit: ['KWH', 'MWH'],
    currency: ['EUR', 'PPS'],
    defaultConsom: 'KWH_LT1000',
    defaultUnit: 'KWH',
    defaultCurrency: 'EUR',
  },
  nrg_pc_205_c: {
    product: '6000',
    consumer: 'N_HOUSEHOLD',
    consoms: [
      'TOT_MWH',
      'MWH_LT20',
      'MWH20-499',
      'MWH500-1999',
      'MWH2000-19999',
      'MWH20000-69999',
      'MWH70000-149999',
      'MWH_GE150000',
    ],
    unit: ['MWH'],
    currency: ['EUR', 'PPS'],
    nrg_prc: [
      'NRG_SUP',
      'NETC',
      'TAX_LEV_X_VAT',
      'VAT',
      'TAX_RNW',
      'TAX_CAP',
      'TAX_ENV',
      'TAX_NUC',
      'OTH',
    ],
    defaultConsom: 'TOT_MWH',
    defaultUnit: 'KWH',
    defaultCurrency: 'EUR',
  },

  nrg_pc_205: {
    product: '6000',
    consumer: 'N_HOUSEHOLD',
    consoms: [
      'TOT_KWH',
      'MWH_LT20',
      'MWH20-499',
      'MWH500-1999',
      'MWH2000-19999',
      'MWH20000-69999',
      'MWH70000-149999',
      'MWH_GE150000',
    ],
    unit: ['KWH', 'MWH'],
    currency: ['EUR', 'PPS'],
    defaultConsom: 'MWH20-499',
    defaultUnit: 'KWH',
    defaultCurrency: 'EUR',
  },
};

export const DEFAULTS = {
  dataset: 'nrg_pc_204',
  fuel: '6000',
  consumer: 'N_HOUSEHOLD',
  consumptionLevel: CODES.nrg_pc_204.defaultConsom,
  currency: 'EUR',
  unit: 'KWH',
  component: 'false',
  details: 'false',
  year: '', // Will be set to latest year after API response
  countries: ['EU27_2020'], // Start with EU27 selected
};

// Helper function to get the correct dataset code based on selections
export const getDatasetCode = (dataset, fuel, consumer, hasComponents) => {
  // If dataset is provided and no parameters changed, return the same dataset
  if (dataset && !fuel && !consumer && !hasComponents) {
    return dataset;
  }

  const baseCode =
    fuel === '6000'
      ? consumer === 'HOUSEHOLD'
        ? 'nrg_pc_204'
        : 'nrg_pc_205'
      : consumer === 'HOUSEHOLD'
        ? 'nrg_pc_202'
        : 'nrg_pc_203';

  return hasComponents === 'true' ? `${baseCode}_c` : baseCode;
};

// Helper function to get consumption levels based on current dataset
export const getConsumptionLevels = (datasetCode) => {
  return CODES[datasetCode].consoms;
};

// Helper function to get available units based on current dataset
export const getUnits = (datasetCode) => {
  return CODES[datasetCode].unit;
};

// Helper function to get available currencies based on current dataset
export const getCurrencies = (datasetCode) => {
  return CODES[datasetCode].currency;
};

// Helper function to get price components if available
export const getPriceComponents = (datasetCode) => {
  return CODES[datasetCode].nrg_prc || [];
};
export const findDatasetKey = (conditionFn) => {
  // Iterate over keys in CODES and return the key that matches the condition
  for (const key in CODES) {
    if (conditionFn(CODES[key])) {
      return key;
    }
  }
  return null; // Return null if no match is found
};
