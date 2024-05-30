function buildEntrade (toolId) {  

    getEntradeDataset();  

    GetYarsFromDataset(toolId)    

    let entradeSelectBox = [ 
        sCountry = {id: "tCountry", translation: "SELECTCOUNTRY", class: "", arr: allCountries.slice(1) },
        sYear= {id: "tYear", translation: "SELECTYEAR", class: "", arr: years  },
        sTrade= {id: "tTrade", translation: "SELECTTRADE", class: "", arr: tradeFlow  },
        sFuel= {id: "tFuel", translation: "SELECTFUEL", class: "", arr: tradeFuel },
        sSiec= {id: "tSiec", translation: "SELECTINDICATOR", class: "", arr: datasetdata.siec },
        sUnit= {id: "tUnit", translation: "SELECTUNIT", class: "", arr: datasetdata.unit  },   
        ] 

        entradeSelectBox.forEach( item => { new CustomSingleSelect(item.id, item) });       
  }



  $(document).on("change", "#tTrade, #tFuel", function () {
    selectDatasetEntrade()
  });
  
  
  function selectDatasetEntrade () {
  
      const trade = $('#tTrade option:selected').val()
      const fuel = $('#tFuel option:selected').val()   
  
      $.each(codesDatasetEntrade, function (idataset, dataset) {		
          if ( fuel == dataset.fuel && trade == dataset.trade ) {             
              datasetdata = dataset;
              datasetname = idataset;
            }
      });	

      REF.ENTdataset = datasetname;
  
      $("#tSiec").empty();  
      $("#tUnit").empty();  

      appendOptionsToSelect(datasetdata.siec, 'tSiec');
      appendOptionsToSelect(datasetdata.unit, 'tUnit');
  

  }
  


  
  
    function ENTRADEUrl() {

        const geo = $('#tCountry').find(":selected").val()
        const time = $('#tYear').find(":selected").val()
        const trade = $('#tTrade').find(":selected").val().toLowerCase()
        const siec = $('#tSiec').find(":selected").val()
        const fuel = $('#tFuel').find(":selected").val().toLowerCase()
        const unit = $('#tUnit').find(":selected").val()
    
    
        const urlParams = new URLSearchParams();
        urlParams.append("geo" , geo)
        urlParams.append("year" , time)
        urlParams.append("language" , language)
        urlParams.append("trade" , trade)
        urlParams.append("siec" , siec)
        urlParams.append("filter", "top5")
        urlParams.append("fuel" , fuel)
        urlParams.append("unit" , unit)
        urlParams.append("defaultUnit", "TJ_GCV")
        urlParams.append("detail", 1)
        urlParams.append("chart", "map")
        urlParams.append("dataset", REF.ENTdataset)

        log(urlParams.toString())
    
    
        const url = "https://ec.europa.eu/eurostat/cache/infographs/energy_trade/entrade.html?" + urlParams.toString();
    
        const decodedURL = decodeURIComponent(url);
        const replacedURL = decodedURL.replace(/%2C/g, ',');
    
        // Open the URL
        window.open(replacedURL, '_self').focus();    
    }
  

    function getEntradeDataset() {
        $.each(codesDatasetEntrade, function (idataset, dataset) {
          if (REF.ENTdataset === idataset) {
            datasetdata = dataset;
            datasetname = idataset;
          }
        });
      }