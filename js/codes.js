const dataNameSpace = {
    ref: {
        ENPgeos: "",
        ENPcomponent: 0,
        ENPdetails: 0,
        ENPproduct: "6000",
        ENPconsumer: "HOUSEHOLD",		
		ENPdataset: "nrg_pc_204"
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