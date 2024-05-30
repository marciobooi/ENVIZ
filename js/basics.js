var log = console.log.bind(document)

var isMobile = /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 850 || /Mobi|Android/i.test(navigator.userAgent) && (window.innerWidth < window.innerHeight);

// Searches for and returns the key associated with a given value in an object. Returns null if no match is found.
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

  // Fetches and sets timeEnprices from the Eurostat API using a synchronous AJAX request.
  function GetYarsFromDataset(toolId) {     

    if(toolId === "ENPRICES") {
        apiUrl = `https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/${REF.ENPdataset}?format=JSON&geo=EU27_2020&nrg_cons=TOT_KWH&currency=EUR&lang=en`;
    } else  {
        apiUrl = "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/nrg_bal_c?format=JSON&geo=EU27_2020&unit=KTOE&nrg_bal=NRGSUP&siec=TOTAL&lang=en"
    }    
           
    $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        async: false, // Set async to false for a synchronous request
        success: function (data) {                  
            years = Object.values(data.dimension.time.category.label)
           
        },            
    });  
}


function appendOptionsToSelect(dataArray, selectId, defaultValue = null) {
    const options = dataArray.map(item => 
      `<option value="${item}" ${item === defaultValue ? 'selected' : ''}>${languageNameSpace.labels[item] || item}</option>`
    ).join('');
    $(`#${selectId}`).append(options);
  }
  