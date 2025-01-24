export const CODES_DATASET_ENMONTHLY = {
  nrg_cb_sffm: {
    nrg_bal: ['IPRD', 'IMP', 'EXP', 'Net_imp', 'GID_CAL'],
    siec: ['C0100', 'C0200', 'C0311', 'P1100', 'S2000'],
    unit: ['THS_T'],
  },
  nrg_cb_oilm: {
    nrg_bal: ['TO_RPI_RO', 'IMP', 'EXP', 'Net_imp', 'GID_CAL'],
    siec: ['O4640', 'O4652', 'O4661', 'O4671', 'O4630', 'O4680'],
    unit: ['THS_T'],
  },
  nrg_cb_cosm: {
    nrg_bal: ['IMP', 'PRD'],
    unit: ['VOL_THS_BBL', 'AVGPRC_USD_BBL', 'AVGPRC_USD_T', 'WT_THS_T'],
    siec: ['nrg_cb_cosm'],
  },
  nrg_cb_gasm: {
    nrg_bal: ['IPRD', 'IMP', 'EXP', 'Net_imp', 'STK_CHG_MG', 'IC_CAL_MG'],
    siec: ['G3000'],
    unit: ['MIO_M3', 'TJ_GCV'],
  },
  nrg_cb_em: {
    nrg_bal: ['IPRD', 'IMP', 'EXP', 'Net_imp', 'DL', 'AIM'],
    siec: ['E7000'],
    unit: ['GWH'],
  },
  nrg_cb_pem: {
    nrg_bal: ['NEG'],
    siec: [
      'TOTAL',
      'CF',
      'G3000',
      'O4000XBIO',
      'RA100',
      'RA300',
      'RA200',
      'RA400',
      'RA500_5160',
      'N9000',
      'X9900',
      'C0000',
    ],
    unit: ['GWH'],
  },
  nrg_stk_oilm: {
    nrg_bal: ['STK_FLOW', 'STKCL_EUE', 'STKCL_NAT'],
    siec: ['O4000', 'O4100_TOT_4200-4500', 'O4600'],
    unit: ['GWH'],
  },
  nrg_cb_pem_RW: {
    nrg_bal: ['E7000'],
    siec: ['RVN'],
    unit: ['GWH'],
  },
};

export const ENMONTHLY_CHARTS = [
  'nrg_cb_pem_RW',
  'nrg_cb_sffm',
  'nrg_cb_oilm',
  'nrg_cb_gasm',
  'nrg_cb_em',
  'nrg_cb_pem',
];

export const DEFAULTS = {
  dataset: 'nrg_cb_pem_RW',
  geo: 'EU27_2020',
  nrg_bal: 'E7000',
  unit: 'GWH',
  siec: 'RVN',
  detail: '1',
  chartOption: '',
  time: '',
  chart: '',
  zoom: '',
  start: '',
  end: '',
};

export const BASE_URL =
  'https://ec.europa.eu/eurostat/cache/visualisations/energy-monthly/enmonthly.html';

// Helper functions
export const getSiec = (dataset) =>
  CODES_DATASET_ENMONTHLY[dataset]?.siec || [];
export const getUnits = (dataset) =>
  CODES_DATASET_ENMONTHLY[dataset]?.unit || [];
export const getNrgBal = (dataset) =>
  CODES_DATASET_ENMONTHLY[dataset]?.nrg_bal || [];

