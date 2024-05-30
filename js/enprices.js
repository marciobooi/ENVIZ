function getEnpricesDataset() {
    const conditions = {
        "4100_HOUSEHOLD_1": "nrg_pc_202_c",
        "4100_HOUSEHOLD_0": "nrg_pc_202",
        "4100_N_HOUSEHOLD_1": "nrg_pc_203_c",
        "4100_N_HOUSEHOLD_0": "nrg_pc_203",
        "6000_HOUSEHOLD_1": "nrg_pc_204_c",
        "6000_HOUSEHOLD_0": "nrg_pc_204",
        "6000_N_HOUSEHOLD_1": "nrg_pc_205_c",
        "6000_N_HOUSEHOLD_0": "nrg_pc_205"
    };        

    const datasetKey = `${REF.ENPproduct}_${REF.ENPconsumer}_${REF.ENPcomponent}`;
    REF.ENPdataset = conditions[datasetKey];
    const dataset = codesEnprices[REF.ENPdataset];
    return dataset;
}

function buildEmprices () {    

    const data = getEnpricesDataset()

    GetYarsFromDataset()  

    let enpricesSelectBox = [    
        sYear = {id: "sYear", translation: "SELECTYEAR", class: "form-floating col-6 col-md-6 col-xl-6 gy-3",  arr: timeEnprices},
        sProduct = {id: "sProduct", translation: "SELECTPRODUCT", class: "form-floating col-6 col-md-6 col-xl-6 gy-3",  arr: ['4100', '6000']},
        sConsumer = {id: "sConsumer", translation: "SELECTCONSUMER", class: "form-floating col-6 col-md-4 col-xl-4 gy-3",  arr: ['N_HOUSEHOLD', 'HOUSEHOLD']},
        sConsom = {id: "sConsom", translation: "SELECTCONSOMELEVEL", class: "form-floating col-6 col-md-4 col-xl-4 gy-3",  arr: data.consoms},
        sCurrency = {id: "sCurrency", translation: "SELECTCURRENCY", class: "form-floating col-6 col-md-4 col-xl-4 gy-3",  arr: ['EUR', 'PPS']},
        sUnit = {id: "sUnit", translation: "SELECTUNIT", class: "form-floating col-6 col-md-4 col-xl-4 gy-3",  arr: ["KWH", "MWH"]},   
        ] 	

    let enpricesSwitchBox = [    
        sComponent = {id: "sComponent", translation: "SELECTCOMPONENT", class: "component"},
        sDetail = {id: "sDetail", translation: "SELECTDETAILS", class: "detail"},     
        ]     

    new CustomSelect("enpricesSelect", EU_MEMBER_COUNTRY_CODES, NON_MEMBER_COUNTRY_CODES, countriesAgregates);           
  
    enpricesSelectBox.forEach( item => { new CustomSingleSelect(item.id, item) });        
  
    enpricesSwitchBox.forEach( item => {  
        let isChecked = item.id === 'sComponent' ? REF.ENPcomponent : REF.ENPdetails;     
        new CustomSwitch(item.id, item, isChecked)     
    });     

      ECL.autoInit();
    }
  
  
  

  function selectDataset () {
        
      REF.ENPproduct = $('#sProduct option:selected').val()
      REF.ENPconsumer = $('#sConsumer option:selected').val()     

      const dataset = getEnpricesDataset()
      GetYarsFromDataset() 
  
        $("#sYear").empty();
        $("#sConsom").empty();
        $("#sCurrency").empty();
        $("#sUnit").empty();
   
           timeEnprices.forEach((year) => {
               $("#sYear").append('<option value="' + year + '">' + year + "</option>");
           });


        dataset.consoms.forEach((consom) => {      
            const isChecked = consom === dataset.defaultConsom ? 'checked' : '';   
            $("#sConsom").append(`<option value="${consom}" ${isChecked}>${languageNameSpace.labels[consom]}</option>`);
        });
    
          dataset.currency.forEach((currency) => {
            $("#sCurrency").append('<option value="'+currency+'">'+languageNameSpace.labels[currency]+'</option>');
          }); 
    
          dataset.unit.forEach((unit) => {
            $("#sUnit").append('<option value="'+unit+'">'+languageNameSpace.labels[unit]+'</option>');
          }); 
  }
  
  
    
  $(document).on("change", "#sDetail-input-yes, #sDetail-input-no, #sComponent-input-yes, #sComponent-input-no, #sConsumer, #sProduct", function () {
    const id = $(this).attr('id');
    let switchValue;
    
    if (id.startsWith('sDetail')) {
        switchValue = $("#sDetail-input-yes").prop('checked') ? 1 : 0;
        REF.ENPdetails = switchValue;
    } else if (id.startsWith('sComponent')) {
        switchValue = $("#sComponent-input-yes").prop('checked') ? 1 : 0;
        REF.ENPcomponent = switchValue;
    }
    
    selectDataset();
});


function searchKeyByValue(namespace, value) {
  for (const key in namespace) {
      if (Object.prototype.hasOwnProperty.call(namespace, key)) {
          if (namespace[key] === value) {
              return key;
          }
      }
  }
  return null;
}
  


      function ENPRICESUrl() {

      countriesToLoad = $('#enpricesSelect > .ecl-select__multiple button').map(function() { return $(this).text().trim() }).get();

      const countryList = countriesToLoad[0].split(',').map(item => item.trim());

      const countryCodes = countryList.map(country => searchKeyByValue(languageNameSpace.labels, country)).filter(key => key !== null);

      const ENgeos = countryCodes.join(',');  
       
        const time = $('#sYear').find(":selected").val();
        const product = $("#sProduct").find(":selected").val();
        const consumer = $("#sConsumer").find(":selected").val();
        const consoms = $("#sConsom").find(":selected").val();
        const unit = $("#sUnit").find(":selected").val();
        const currency = $("#sCurrency").find(":selected").val();
        const detail = REF.ENPdetails;
        
        // Component is already stored in REF.ENPcomponent
        const component = REF.ENPcomponent;
    
        // Build the URL
        const urlParams = new URLSearchParams();
        urlParams.append("geos", ENgeos);
        urlParams.append("product", product);
        urlParams.append("consumer", consumer);
        urlParams.append("consoms", consoms);
        urlParams.append("unit", unit);
        urlParams.append("currency", currency);
        urlParams.append("language", language);
        urlParams.append("chartOption", detail);
        urlParams.append("component", component);
        urlParams.append("order", "DESC");
        urlParams.append("dataset", REF.ENPdataset);
        urlParams.append("time", time);
        urlParams.append("modalOption", 0);
        urlParams.append("modalOpen", 0);
        urlParams.append("modal", 0);
        urlParams.append("modalLineOption", 0);
        urlParams.append("detail", 0);
        urlParams.append("taxs", "I_TAX,X_TAX,X_VAT");
        urlParams.append("nrg_prc", "NETC,NRG_SUP,OTH,TAX_CAP,TAX_ENV,TAX_NUC,TAX_RNW,VAT");


    
        // Construct the final URL
        const url = "https://ec.europa.eu/eurostat/cache/infographs/energy_prices/enprices.html?" + urlParams.toString();
        // const url = "https://ec.europa.eu/eurostat/cache/infographs/test_energy/enprices/enprices.html?" + urlParams.toString();

        const decodedURL = decodeURIComponent(url);
        const replacedURL = decodedURL.replace(/%2C/g, ',');

        
        console.log(replacedURL)
    
        // Open the URL
        // window.open(url, '_self').focus();
    }
    
  
  
      
    function GetYarsFromDataset() {     
        const apiUrl = `https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/${REF.ENPdataset}?format=JSON&geo=EU27_2020&nrg_cons=TOT_KWH&currency=EUR&lang=en`;
               
        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'json',
            async: false, // Set async to false for a synchronous request
            success: function (data) {                  
                timeEnprices = Object.values(data.dimension.time.category.label)
               
            },            
        });  
    }