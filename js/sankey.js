
function buildSankey (toolId) {   

    GetYarsFromDataset(toolId)     

    let sankeySelectBox = [ 
        sYear = {id: "sYear", translation: "SELECTYEAR", class: "", arr: years},
        sFuelSankey = {id: "sFuelSankey", translation: "SELECTFUEL", class: "", arr: sankeyFuel},
        sUnit = {id: "sUnit", translation: "SELECTUNIT", class: "", arr: sankeyUnits},       
    ]  

    let sankeySwitchBox = {id: "sDetailSAnkey", translation: "SELECTDETAILS", class: "detail"}    
         

    new CustomSelect("sankeyCountries", EU_MEMBER_COUNTRY_CODES, NON_MEMBER_COUNTRY_CODES, countriesAgregates);   
    sankeySelectBox.forEach( item => { new CustomSingleSelect(item.id, item) });  
  
    new CustomSwitch(sankeySwitchBox.id, sankeySwitchBox, REF.ENSdetails)   
    
    ECL.autoInit();

 }

 $(document).on("change", "#sDetailSAnkey-input-yes, #sDetailSAnkey-input-no", function () {
    const id = $(this).attr('id');
    let switchValue;
    
    if (id.startsWith('sDetailSAnkey')) {
        switchValue = $("#sDetailSAnkey-input-yes").prop('checked') ? 1 : 0;
        REF.ENSdetails = switchValue;
    } 
});


function ENSANKEYUrl (params) {

    const countriesToLoad = $('#sankeyCountries > .ecl-select__multiple button').map(function() { return $(this).text().trim() }).get();

    const countryList = countriesToLoad[0].split(',').map(item => item.trim());

    const countryCodes = countryList.map(country => searchKeyByValue(languageNameSpace.labels, country)).filter(key => key !== null);

    const ENgeos = countryCodes.join(',');  

    const time = $('#sYear').find(":selected").val();
    const unit = $("#sUnit").find(":selected").val();
    const fuel = $("#sFuelSankey").find(":selected").val();
    let flowDisagg = REF.ENSdetails

    if (fuel !== "TOTAL") flowDisagg = "true" 

  
    const urlParams = new URLSearchParams();
    urlParams.append("geos", ENgeos === "SELCOUNTRY"? "EU27_2020" : ENgeos);
    urlParams.append("year", time);
    urlParams.append("unit", unit);
    urlParams.append("fuels", fuel);
    urlParams.append("flowDisagg", flowDisagg);
    urlParams.append("language", language);

    urlParams.append("highlight", "_");
    urlParams.append("nodeDisagg", "0101000000000");

    urlParams.append("translateX", 0);
    urlParams.append("translateY", 0);
    urlParams.append("scale", 1);
  


    const url = "https://ec.europa.eu/eurostat/cache/sankey/energy/sankey.html?" + urlParams.toString();


    const decodedURL = decodeURIComponent(url);
    const replacedURL = decodedURL.replace(/%2C/g, ',');

    // Open the URL
    window.open(replacedURL, '_self').focus();
      
  }

