function buildEnmonthly (toolOpen) {    

  getEnmonthlyDataset();  

    let enmonthlySelectBox = [ 
        sCountry = {id: "eCountry", translation: "SELECTCOUNTRY", class: "", arr: allCountries },
        sChart= {id: "eChart", translation: "SELECTCHART", class: "", arr: enmonthlyCharts  },
        sFuel= {id: "eFuel", translation: "SELECTFUEL", class: "", arr: datasetdata.siec },
        sFlow= {id: "eFlow", translation: "SELECTFLOW", class: "", arr: datasetdata.nrg_bal },
        sUnit= {id: "eUnit", translation: "SELECTUNIT", class: "", arr: datasetdata.unit },
    ]


    enmonthlySelectBox.forEach( item => { new CustomSingleSelect(item.id, item) });  

    ECL.autoInit();
  }

$(document).on("change", "#eChart", function () {
  REF.ENMdataset = $('#eChart option:selected').val()
  log(REF.ENMdataset)
  selectDatasetEnmonthly()
});







function selectDatasetEnmonthly() {

  $('#eFuel').empty();
  $('#eFlow').empty();
  $('#eUnit').empty();
  
  getEnmonthlyDataset();
  
  appendOptionsToSelect(datasetdata.siec, 'eFuel');
  appendOptionsToSelect(datasetdata.nrg_bal, 'eFlow');
  appendOptionsToSelect(datasetdata.unit, 'eUnit');
}
  
  

  
  
  function ENMONTHLYUrl () {

    
    const geo = $("#eCountry").find(":selected").val();
    const fuel = $("#eFuel").find(":selected").val();
    const flow = $("#eFlow").find(":selected").val();
    const unit = $("#eUnit").find(":selected").val();


    const urlParams = new URLSearchParams();
    urlParams.append("language", language);
    urlParams.append("geos", geo);

    urlParams.append("detail", 1);
    urlParams.append("nrg_bal", flow);
    urlParams.append("unit", unit);
    urlParams.append("siec", fuel);
    urlParams.append("indic_nrg", "nrg_cb_cosm");
    urlParams.append("dataset", REF.ENMdataset);

    urlParams.append("chartOption", "");
    urlParams.append("time", "");
    urlParams.append("chart", "");
    urlParams.append("zoom", "");
    urlParams.append("start", "");
    urlParams.append("end", "");


    const url = "https://ec.europa.eu/eurostat/cache/infographs/energy_monthly/enmonthly.html?" + urlParams.toString();

    const decodedURL = decodeURIComponent(url);
    const replacedURL = decodedURL.replace(/%2C/g, ',');

    // Open the URL
    window.open(replacedURL, '_self').focus();  
  }


  function getEnmonthlyDataset() {
    $.each(codesDatasetEnmonthly, function (idataset, dataset) {
      if (REF.ENMdataset === idataset) {
        datasetdata = dataset;
        datasetname = idataset;
      }
    });
  }
