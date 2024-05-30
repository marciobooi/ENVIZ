function buildEnbal (toolId) {    

    GetYarsFromDataset(toolId)  

    let enbalSelectBox = [ 
        bCountry = {id: "bCountry", translation: "SELECTCOUNTRY", class: "", arr: allCountries },
        bFuelEnbal= {id: "bFuelEnbal", translation: "SELECTFUEL", class: "", arr: mainFuelFamilies  },
        bYear= {id: "bYear", translation: "SELECTYEAR", class: "", arr: years  },
        bUnit= {id: "bUnit", translation: "SELECTUNIT", class: "", arr: enbalUnit  },
        bDecimals= {id: "bDecimals", translation: "SELECTDECIMALS", class: "", arr: decimals  }
        ] 

        enbalSelectBox.forEach( item => { new CustomSingleSelect(item.id, item) }); 




}

  function ENBALUrl (params) {
    
    const geo = $("#bCountry").find(":selected").val();
    const time = $("#bYear").find(":selected").val();  
    const fuel = $("#bFuelEnbal").find(":selected").val();
    const unit = $("#bUnit").find(":selected").val();
    const decimals = $("#bDecimals").find(":selected").val();


  

    const urlParams = new URLSearchParams();
    urlParams.append("geo",  geo)
    urlParams.append("unit",  unit)
    urlParams.append("language",  language)
    urlParams.append("year",  time)
    urlParams.append("fuel",  fuel)
    urlParams.append("siec", "TOTAL")
    urlParams.append("details", "0")
    urlParams.append("chartOptions", "0")
    urlParams.append("stacking", "normal")
    urlParams.append("chartBal", "")
    urlParams.append("chart", "")
    urlParams.append("full", "0")
    urlParams.append("chartBalText", "")
    urlParams.append("order", "DESC")
    urlParams.append("siecs", "")
    urlParams.append("dataset", "nrg_bal_c")
    urlParams.append("decimals",  decimals)
    urlParams.append("agregates", "0")
    urlParams.append("fuelList", "fuelElectricity,fuelCombustible,fuelNonCombustible,fuelOtherPetroleum,fuelMainPetroleum,fuelOil,fuelOtherFossil,fuelFossil,fuelCoal,fuelMainFuel")
  




log(urlParams.toString())


const url = "https://ec.europa.eu/eurostat/cache/infographs/energy_balances/enbal.html?" + urlParams.toString();

const decodedURL = decodeURIComponent(url);
const replacedURL = decodedURL.replace(/%2C/g, ',');

// Open the URL
// window.open(replacedURL, '_self').focus();    


    
      
  }