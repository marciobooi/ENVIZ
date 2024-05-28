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

// sYear = {id: "enpricesYear", translation: "SELECTYEAR", class: "form-floating col-6 col-md-6 col-xl-6 gy-3",  arr: timeEnprices},




    /**
 * Builds the emprices select box and adds the correct options to it.
 * @param toolOpen - the tool that is currently open.
 * @returns None
 */
function buildEmprices (toolOpen) {    


    const data = getEnpricesDataset()

    GetYarsFromDataset()  

    const container = document.querySelector("#toolSelects");

    let enpricesSelectBox = [    
        sYear = {id: "sYear", translation: "SELECTYEAR", class: "form-floating col-6 col-md-6 col-xl-6 gy-3",  arr: timeEnprices},
        sProduct = {id: "sProduct", translation: "SELECTPRODUCT", class: "form-floating col-6 col-md-6 col-xl-6 gy-3",  arr: ['4100', '6000']},
        sConsumer = {id: "sConsumer", translation: "SELECTCONSUMER", class: "form-floating col-6 col-md-4 col-xl-4 gy-3",  arr: ['N_HOUSEHOLD', 'HOUSEHOLD']},
        sConsom = {id: "sConsom", translation: "SELECTCONSOMELEVEL", class: "form-floating col-6 col-md-4 col-xl-4 gy-3",  arr: data.consoms},
        sCurrency = {id: "sCurrency", translation: "SELECTCURRENCY", class: "form-floating col-6 col-md-4 col-xl-4 gy-3",  arr: ['EUR', 'PPS']},
        sUnit = {id: "sUnit", translation: "SELECTUNIT", class: "form-floating col-6 col-md-4 col-xl-4 gy-3",  arr: ["KWH", "MWH"]},   
        ] 	


        const custommultiSelect = new CustomSelect("enpricesSelect", EU_MEMBER_COUNTRY_CODES, NON_MEMBER_COUNTRY_CODES, countriesAgregates);
      
  
      enpricesSelectBox.forEach( item => {     
        selectBoxContent = /*html*/`
                <div id="select${item.id}" class="ecl-form-group " role="application">            
                    <div class="ecl-help-block">${languageNameSpace.labels[item.translation]}</div>
                    <div class="ecl-select__container ecl-select__container--l">
                        <select class="ecl-select select" id="${item.id}" name="${languageNameSpace.labels[data.translation]}" required></select>
                        <div class="ecl-select__icon">
                            <i class="fas fa-chevron-down ecl-icon ecl-icon--s ecl-select__icon-shape" focusable="false" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>`    
         
        container.innerHTML += selectBoxContent;
       
        item.arr.forEach((arrItem) => {
            let checks = languageNameSpace.labels[arrItem] === undefined ? arrItem : languageNameSpace.labels[arrItem]      
            $('#'+item.id).append('<option value="' + arrItem +'">' + checks +"</option>");
          }); 
        });
  
        const enpricesSwitchBox = [    
          sComponent = {id: "sComponent", translation: "SELECTCOMPONENT", class: "component"},
          sDetail = {id: "sDetail", translation: "SELECTDETAILS", class: "detail"},     
          ]           
  
        enpricesSwitchBox.forEach( item => {  
            let isChecked = item.id === 'sComponent' ? REF.ENPcomponent : REF.ENPdetails;            
                        
            switchContent =  /*html*/`<div class="ecl-form-group" role="application">
                        <fieldset id="${item.id}" class="ecl-form-group ${item.class}" aria-describedby="helper-id-${item.id}">
                            <div class="ecl-help-block">${languageNameSpace.labels[item.translation]}</div>
                            <div class="ecl-radio ecl-radio--binary">
                            <input id="${item.id}-input-yes" name="${item.id}-input" class="ecl-radio__input" type="radio" value="1" ${isChecked === 1 ? 'checked' : ''} required />
                            <label class="ecl-radio__label" for="${item.id}-input-yes">
                                    <span class="ecl-radio__box">
                                        <span class="ecl-radio__box-inner"></span>
                                    </span>
                                    <span class="ecl-radio__text">Yes</span>
                                </label>
                            </div>
                            <div class="ecl-radio ecl-radio--binary">
                            <input id="${item.id}-input-no" name="${item.id}-input" class="ecl-radio__input" type="radio" value="0" ${isChecked === 0 ? 'checked' : ''} required />
                            <label class="ecl-radio__label" for="${item.id}-input-no">
                                    <span class="ecl-radio__box">
                                        <span class="ecl-radio__box-inner"></span>
                                    </span>
                                    <span class="ecl-radio__text">No</span>
                                </label>
                            </div>
                        </fieldset>
                        </div>`;      
    
                 container.innerHTML += switchContent;
          });     

          ECL.autoInit();
    }
  
  
  
  /**
   * Selects the dataset to use for the given component and product. 
   * @param component - The component to select the dataset for. 
   * @param product - The product to select the dataset for. 
   * @returns None
   */
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


        console.log(dataset)

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
  
  
    /**
     * This function is used to toggle the switch on the settings page.
     * @returns None
     */
    $(document).on("change", "#sDetail-input-yes, #sDetail-input-no", function () {
        const switchValue = $("#sDetail-input-yes").prop('checked') ? 1 : 0;    
        REF.ENPdetails = switchValue  
        selectDataset();
    });


  
    /**
     * This function is called when the user clicks the switch component.  It changes the value of the switch component.
     * @returns None
     */
    $(document).on("change", "#sComponent-input-yes, #sComponent-input-no", function () {        
        const switchValue = $("#sComponent-input-yes").prop('checked') ? 1 : 0;    
        REF.ENPcomponent = switchValue     
        selectDataset();
    });
  
    /**
     * When the user selects a new dataset, this function will update the dropdown menu with the new data.
     * @returns None
     */
    $(document).on("change", "#sProduct", function () {  
      selectDataset ()
    });
  
    /**
     * When the user selects a new dataset, this function will update the data in the table.
     * @returns None
     */
    $(document).on("change", "#sConsumer", function () {  
      selectDataset ()
    });
    
    
      /**
       * Opens a new window with the given URL.
       * @param url - The URL to open.
       * @returns None
       */
      function ENPRICESUrl() {
        // Get values from the form
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
        urlParams.append("geos", "");
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

        for (const pair of urlParams.entries()) {
            console.log(pair[0], pair[1]);
          }
    
        // Construct the final URL
        // const url = "https://ec.europa.eu/eurostat/cache/infographs/energy_prices/enprices.html?" + urlParams.toString();
        const url = "https://ec.europa.eu/eurostat/cache/infographs/test_energy/enprices/enprices.html?" + urlParams.toString();

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