const dataNameSpace = {
    ref: {
		isOpen: false,
        ENPgeos: "",
        ENPcomponent: 0,
        ENPdetails: 0,
        ENPproduct: "6000",
        ENPconsumer: "HOUSEHOLD",		
		ENPdataset: "nrg_pc_204",
		ENSdetails:0,
		ENMdataset: "nrg_cb_pem_RW",
		ENTdataset: "nrg_te_gas",
    },
}

const REF = dataNameSpace.ref;

const allCountries = ["EU27_2020", "BE", "BG", "CZ", "DK", "DE", "EE", "IE", "EL", "ES", "FR", "HR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE", "IS", "LI", "NO", "ME", "MK", "AL", "RS", "TR", "BA", "XK", "MD", "UA", "GE"];

const countriesAgregates = ["EU27_2020"];

const EU_MEMBER_COUNTRY_CODES = ['BE', 'BG', 'CZ', 'DK', 'DE', 'EE', 'IE', 'EL', 'ES', 'FR', 'HR', 'IT', 'CY', 'LV', 'LT', 'LU', 'HU', 'MT', 'NL', 'AT', 'PL', 'PT', 'RO', 'SI', 'SK', 'FI', 'SE'];

const NON_MEMBER_COUNTRY_CODES = allCountries.filter(country => !EU_MEMBER_COUNTRY_CODES.includes(country) && !countriesAgregates.includes(country));

codesEnprices = {
	"nrg_pc_202_c": {
		"product": "4100",
		"consumer": "HOUSEHOLD",
		"consoms": ["TOT_GJ", "GJ_LT20", "GJ20-199", "GJ_GE200"],
		"unit": ["KWH", "GJ_GCV"],
		"currency": ["EUR", "PPS"],
		"nrg_prc": ["NETC", "NRG_SUP", "OTH", "TAX_CAP", "TAX_ENV", "TAX_RNW", "VAT"],
		"defaultConsom": "TOT_GJ",
		"defaultUnit": "KWH",		
		"defaultCurrency": "EUR"
	},
	"nrg_pc_202": {
		"product": "4100",
		"consumer": "HOUSEHOLD",
		"consoms": ["TOT_GJ", "GJ_LT20", "GJ20-199", "GJ_GE200"],
		"unit": ["KWH", "GJ_GCV", "MWH"],
		"currency": ["EUR", "PPS"],
		"defaultConsom": "GJ20-199",
		"defaultUnit": "KWH",
		"defaultCurrency": "EUR"
	},

	"nrg_pc_203_c": {
		"product": "4100",
		"consumer": "N_HOUSEHOLD",
		"consoms": ["TOT_GJ", "GJ_LT1000", "GJ1000-9999", "GJ10000-99999", "GJ100000-999999", "GJ1000000-3999999", "GJ_GE4000000"],
		"unit": ["KWH", "GJ_GCV"],
		"currency": ["EUR", "PPS"],
		"nrg_prc": ["NETC", "NRG_SUP", "OTH", "TAX_CAP", "TAX_ENV", "TAX_RNW", "VAT"],
		"defaultConsom": "TOT_GJ",
		"defaultUnit": "KWH",		
		"defaultCurrency": "EUR"
	},
	"nrg_pc_203": {
		"product": "4100",
		"consumer": "N_HOUSEHOLD",
		"consoms": ["TOT_GJ", "GJ_LT1000", "GJ1000-9999", "GJ10000-99999", "GJ100000-999999", "GJ1000000-3999999", "GJ_GE4000000"],
		"unit": ["KWH", "GJ_GCV", "MWH"],
		"currency": ["EUR", "PPS"],
		"defaultConsom": "GJ1000-9999",
		"defaultUnit": "KWH",
		"defaultCurrency": "EUR"
	},
	"nrg_pc_204_c": {
		"product": "6000",
		"consumer": "HOUSEHOLD",
		"consoms": ["TOT_KWH", "KWH_LT1000", "KWH1000-2499", "KWH2500-4999", "KWH5000-14999", "KWH_LE15000"],
		"unit": ["KWH", "MWH"],
		"currency": ["EUR", "PPS"],
		"nrg_prc": ["NETC", "NRG_SUP", "OTH", "TAX_CAP", "TAX_ENV", "TAX_NUC", "TAX_RNW", "VAT"],
		"defaultConsom": "TOT_KWH",
		"defaultUnit": "KWH",
		"defaultCurrency": "EUR"
	},
	"nrg_pc_204": {
		"product": "6000",
		"consumer": "HOUSEHOLD",
		"consoms": ["KWH_LT1000", "KWH_GE15000", "KWH5000-14999", "KWH2500-4999", "KWH1000-2499"],
		"unit": ["KWH", "MWH"],
		"currency": ["EUR", "PPS"],
		"defaultConsom": "KWH_LT1000",
		"defaultUnit": "KWH",
		"defaultCurrency": "EUR"
	},
	"nrg_pc_205_c": {
		"product": "6000",
		"consumer": "N_HOUSEHOLD",
		"consoms": ["TOT_MWH", "MWH_LT20", "MWH20-499", "MWH500-1999", "MWH2000-19999", "MWH20000-69999", "MWH70000-149999", "MWH_GE150000"],
		"unit": ["MWH"],
		"currency": ["EUR", "PPS"],
		"nrg_prc": ["NRG_SUP", "NETC", "TAX_LEV_X_VAT", "VAT", "TAX_RNW", "TAX_CAP", "TAX_ENV", "TAX_NUC", "OTH",],
		"defaultConsom": "TOT_MWH",
		"defaultUnit": "KWH",
		"defaultCurrency": "EUR"
	},

	"nrg_pc_205": {
		"product": "6000",
		"consumer": "N_HOUSEHOLD",
		"consoms": ["TOT_KWH", "MWH_LT20", "MWH20-499", "MWH500-1999", "MWH2000-19999", "MWH20000-69999", "MWH70000-149999", "MWH_GE150000"],
		"unit": ["KWH", "MWH"],
		"currency": ["EUR", "PPS"],		
		"defaultConsom": "MWH20-499",
		"defaultUnit": "KWH",
		"defaultCurrency": "EUR"
	},
};

codesDatasetEnmonthly = {

	"nrg_cb_sffm": {		
		"nrg_bal": ["IPRD","IMP","EXP","Net_imp","GID_CAL",], 
		"siec": ["C0100", "C0200", "C0311", "P1100","S2000"], 
		"unit": ["THS_T"], 
	},
	"nrg_cb_oilm": {		
		"nrg_bal": ["TO_RPI_RO","IMP","EXP","Net_imp","GID_CAL",], 
		"siec": ["O4640", "O4652", "O4661", "O4671","O4630","O4680"], 
		"unit": ["THS_T"], 
	},
	"nrg_cb_cosm": {		
		"nrg_bal": ["IMP","PRD"], 		
		"unit": ["VOL_THS_BBL", "AVGPRC_USD_BBL", "AVGPRC_USD_T", "WT_THS_T"],
		"siec": ["nrg_cb_cosm"], 
	},
	"nrg_cb_gasm": {		
		"nrg_bal": ["IPRD","IMP","EXP","Net_imp","STK_CHG_MG","IC_CAL_MG"], 
		"siec": ["G3000"], 
		"unit": ["MIO_M3","TJ_GCV"], 
	},
	"nrg_cb_em": {		
		"nrg_bal": ["IPRD","IMP","EXP","Net_imp","DL","AIM"], 
		"siec": ["E7000"],  
		"unit": ["GWH"], 
	},
	"nrg_cb_pem": {			
		"nrg_bal": ["NEG"],
		"siec": ["TOTAL", "CF","G3000","O4000XBIO","RA100","RA300","RA200","RA400","RA500_5160","N9000","X9900","C0000"], 
		"unit": ["GWH"], 
	},
	"nrg_stk_oilm": {	
		"nrg_bal": ["STK_FLOW","STKCL_EUE","STKCL_NAT"], 		
		"siec": ["O4000","O4100_TOT_4200-4500","O4600"], 
		"unit": ["GWH"], 
	},
	"nrg_cb_pem_RW": {	
		"nrg_bal": ["E7000"], 		
		"siec": ["RVN"], 
		"unit": ["GWH"], 
	},
};

let enmonthlyCharts = ["nrg_cb_pem_RW","nrg_cb_sffm","nrg_cb_oilm","nrg_cb_gasm","nrg_cb_em","nrg_cb_pem"]

// code related to SANKEY
let sankeyFuel = ["TOTAL", "SFF_P1000", "O4000", "G3000_C0350-370", "RA000", "W6100_6220", "N900H", "H8000", "E7000"]
let sankeyUnits = ["KTOE","GJ","TJ","GWh","Gcal","Tcal","GBtu"]

// code related to ENTRADE
codesDatasetEntrade = {
	nrg_ti_gas: {
		fuel: ["GAS"],
		siec: ["G3000", "G3200"],
		unit: ["TJ_GCV", "MIO_M3"],
		trade: ["IMP"],	
	},
	nrg_te_gas: {
		fuel: ["GAS"],
		siec: ["G3000", "G3200"],
		unit: ["TJ_GCV", "MIO_M3"],
		trade: ["EXP"],
	},
	nrg_ti_sff: {		
		fuel: ["SOLID"],
		siec: ["C0000X0350-0370","C0100","C0110", "C0121","C0129","C0200","C0210","C0220","C0311","C0320","C0330","C0340","P1100","P1200"],
		unit: ["THS_T"],
		trade: ["IMP"],	
	},
	nrg_te_sff: {
		fuel: ["SOLID"],
		siec: ["C0000X0350-0370","C0100","C0110","C0121","C0129","C0200","C0210","C0220","C0311","C0320","C0330","C0340","P1100","P1200"],
		unit: ["THS_T"],
		trade: ["EXP"],
	},	
	nrg_ti_oil: {
		fuel: ["OIL"],
		siec: ["O4000", "O4000XBIO", "O4100_TOT_4200-4500", "O4100_TOT_4200-4500XBIO", "O4100_TOT", "O4200", "O4300", "O4400X4410", "O4400", "O4500", "O4600", "O4600XBIO", "O4620", "O4630", "O4640", "O4651", "O4652", "O4652XR5210B", "O4653", "O4661", "O4661XR5230B", "O4669", "O4671", "O4671XR5220B", "O46711", "O46712", "O4680", "O4681", "O4682", "O4691", "O4692", "O4693", "O4694", "O4695", "O4699", "R5210B", "R5220B", "R5230B"],
		unit: ["THS_T"],
		trade: ["IMP"],	
	},	
	nrg_te_oil: {
		fuel: ["OIL"],
		siec: ["O4000", "O4000XBIO", "O4100_TOT_4200-4500", "O4100_TOT_4200-4500XBIO", "O4100_TOT", "O4200", "O4300", "O4400X4410", "O4400", "O4500", "O4600", "O4600XBIO", "O4620", "O4630", "O4640", "O4651", "O4652", "O4652XR5210B", "O4653", "O4661", "O4661XR5230B", "O4669", "O4671", "O4671XR5220B", "O46711", "O46712", "O4680", "O4681", "O4682", "O4691", "O4692", "O4693", "O4694", "O4695", "O4699", "R5210B", "R5220B", "R5230B",],
		unit: ["THS_T"],
		trade: ["EXP"],
	},
	nrg_ti_bio: {
		fuel: ["BIOFUELS"],
		siec: ["R5111","R5210P","R5210E","R5220P","R5230P","R5290"],
		unit: ["THS_T"],
		trade: ["IMP"],
	},	
	nrg_te_bio: {
		fuel: ["BIOFUELS"],
		siec: ["R5111","R5210P","R5210E","R5220P","R5230P","R5290"],
		unit: ["THS_T"],
		trade: ["EXP"],
	},	
	nrg_ti_eh: {
		fuel: ["ELECTRICITY"],
		siec: ["E7000", "H8000"],
		unit: ["GWH","TJ"],
		trade: ["IMP"],
	},
	nrg_te_eh: {
		fuel: ["ELECTRICITY"],
		siec: ["E7000", "H8000"],
		unit: ["GWH","TJ"],
		trade: ["EXP"],
	},
};

let tradeFuel = ["GAS", "SOLID", "OIL", "BIOFUELS", "ELECTRICITY"]
let tradeFlow = ["IMP", "EXP"]

// code related to ENBAL

let mainFuelFamilies = ["fuelMainFuel", "fuelElectricity", "fuelCombustible", "fuelNonCombustible", "fuelOtherPetroleum", "fuelMainPetroleum", "fuelOil", "fuelOtherFossil", "fuelFossil", "fuelCoal"]
let enbalUnit = ["KTOE","GWH","TJ"]
let decimals = ["0","0.0","0.00","0.000",]
