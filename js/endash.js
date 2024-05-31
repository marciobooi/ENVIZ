function buildEndash (toolId) {  

    let endashSelectBox = [ 
        eCountry = {id: "eCountry", translation: "SELECTCOUNTRY", class: "", arr: allCountries },      
    ]

    endashSelectBox.forEach( item => { new CustomSingleSelect(item.id, item) });  
 } 


 function ENDASHUrl() {  

     const geo = $("#eCountry").find(":selected").val();

     const urlParams = new URLSearchParams();
    urlParams.append("language", language);
    urlParams.append("geos", geo);
    
    const url = "https://ec.europa.eu/eurostat/cache/infographs/energy_monthly/enmonthly.html?" + urlParams.toString();

    const decodedURL = decodeURIComponent(url);
    const replacedURL = decodedURL.replace(/%2C/g, ',');

    log(urlParams.toString());

    // Open the URL
    // window.open(replacedURL, '_self').focus();  


    }