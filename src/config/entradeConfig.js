export const CODES_DATASET_ENTRADE = {
  nrg_ti_gas: {
    fuel: ['GAS'],
    siec: ['G3000', 'G3200'],
    unit: ['TJ_GCV', 'MIO_M3'],
    trade: ['IMP'],
  },
  nrg_te_gas: {
    fuel: ['GAS'],
    siec: ['G3000', 'G3200'],
    unit: ['TJ_GCV', 'MIO_M3'],
    trade: ['EXP'],
  },
  nrg_ti_sff: {
    fuel: ['SOLID'],
    siec: [
      'C0000X0350-0370',
      'C0100',
      'C0110',
      'C0121',
      'C0129',
      'C0200',
      'C0210',
      'C0220',
      'C0311',
      'C0320',
      'C0330',
      'C0340',
      'P1100',
      'P1200',
    ],
    unit: ['THS_T'],
    trade: ['IMP'],
  },
  nrg_te_sff: {
    fuel: ['SOLID'],
    siec: [
      'C0000X0350-0370',
      'C0100',
      'C0110',
      'C0121',
      'C0129',
      'C0200',
      'C0210',
      'C0220',
      'C0311',
      'C0320',
      'C0330',
      'C0340',
      'P1100',
      'P1200',
    ],
    unit: ['THS_T'],
    trade: ['EXP'],
  },
  nrg_ti_oil: {
    fuel: ['OIL'],
    siec: [
      'O4000',
      'O4000XBIO',
      'O4100_TOT_4200-4500',
      'O4100_TOT_4200-4500XBIO',
      'O4100_TOT',
      'O4200',
      'O4300',
      'O4400X4410',
      'O4400',
      'O4500',
      'O4600',
      'O4600XBIO',
      'O4620',
      'O4630',
      'O4640',
      'O4651',
      'O4652',
      'O4652XR5210B',
      'O4653',
      'O4661',
      'O4661XR5230B',
      'O4669',
      'O4671',
      'O4671XR5220B',
      'O46711',
      'O46712',
      'O4680',
      'O4681',
      'O4682',
      'O4691',
      'O4692',
      'O4693',
      'O4694',
      'O4695',
      'O4699',
      'R5210B',
      'R5220B',
      'R5230B',
    ],
    unit: ['THS_T'],
    trade: ['IMP'],
  },
  nrg_te_oil: {
    fuel: ['OIL'],
    siec: [
      'O4000',
      'O4000XBIO',
      'O4100_TOT_4200-4500',
      'O4100_TOT_4200-4500XBIO',
      'O4100_TOT',
      'O4200',
      'O4300',
      'O4400X4410',
      'O4400',
      'O4500',
      'O4600',
      'O4600XBIO',
      'O4620',
      'O4630',
      'O4640',
      'O4651',
      'O4652',
      'O4652XR5210B',
      'O4653',
      'O4661',
      'O4661XR5230B',
      'O4669',
      'O4671',
      'O4671XR5220B',
      'O46711',
      'O46712',
      'O4680',
      'O4681',
      'O4682',
      'O4691',
      'O4692',
      'O4693',
      'O4694',
      'O4695',
      'O4699',
      'R5210B',
      'R5220B',
      'R5230B',
    ],
    unit: ['THS_T'],
    trade: ['EXP'],
  },
  nrg_ti_bio: {
    fuel: ['BIOFUELS'],
    siec: ['R5111', 'R5210P', 'R5210E', 'R5220P', 'R5230P', 'R5290'],
    unit: ['THS_T'],
    trade: ['IMP'],
  },
  nrg_te_bio: {
    fuel: ['BIOFUELS'],
    siec: ['R5111', 'R5210P', 'R5210E', 'R5220P', 'R5230P', 'R5290'],
    unit: ['THS_T'],
    trade: ['EXP'],
  },
  nrg_ti_eh: {
    fuel: ['ELECTRICITY'],
    siec: ['E7000', 'H8000'],
    unit: ['GWH', 'TJ'],
    trade: ['IMP'],
  },
  nrg_te_eh: {
    fuel: ['ELECTRICITY'],
    siec: ['E7000', 'H8000'],
    unit: ['GWH', 'TJ'],
    trade: ['EXP'],
  },
};

export const TRADE_FUELS = ['GAS', 'SOLID', 'OIL', 'BIOFUELS', 'ELECTRICITY'];
export const TRADE_FLOWS = ['IMP', 'EXP'];

export const DEFAULTS = {
  geo: 'FR',
  year: '2023',
  trade: 'IMP',
  siec: 'G3000',
  filter: 'all',
  fuel: 'GAS',
  unit: 'TJ_GCV',
  defaultUnit: 'TJ_GCV',
  chart: '',
};

export const BASE_URL =
  'https://ec.europa.eu/eurostat/cache/visualisations/energy-trade/entrade.html';
export const YEARS_API_URL =
  'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/nrg_ti_gas';

// Helper functions
export const getSiec = (dataset) => CODES_DATASET_ENTRADE[dataset]?.siec || [];
export const getUnits = (dataset) => CODES_DATASET_ENTRADE[dataset]?.unit || [];
export const getTrade = (dataset) => CODES_DATASET_ENTRADE[dataset]?.trade || [];

// Helper function to find dataset key
export const findDatasetKey = (fuel, trade) => {
    const keys = Object.keys(CODES_DATASET_ENTRADE);

    for (const key of keys) {
        const dataset = CODES_DATASET_ENTRADE[key];

        if (dataset.fuel.includes(fuel) && dataset.trade.includes(trade)) {
            return key; // Return the matching key
        }
    }

    return null; // No match found
};
