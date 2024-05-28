function populateElements(params) {  

    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.innerHTML = '';     
    });

    const tools = {
        "enprices": {
            "id": 'boxOne',
            "tool": 'ENPRICES',
            "urlImg":'img/ENPRICES.png',
            "title": languageNameSpace.labels["ENPRICESTITLE"],
            "text": languageNameSpace.labels["ENPRICESTEXT"],
            "url": 'https://ec.europa.eu/eurostat/cache/infographs/energy_prices/enprices.html?language='+ language
        },
        "sankey": {
            "id": 'boxTwo',
            "tool": 'ENSANKEY',
            "urlImg":'img/SANKEY.png',
            "title": languageNameSpace.labels["SANKEYTITLE"],
            "text": languageNameSpace.labels["SANKEYTEXT"],
            "url": 'https://ec.europa.eu/eurostat/cache/sankey/energy/sankey.html?language='+ language,
        },
        "enmonthly": {
            "id": 'boxTree',
            "tool": 'ENMONTHLY',
            "urlImg":'img/ENMONTHLY.png',
            "title": languageNameSpace.labels["ENMONTHLYTITLE"],
            "text": languageNameSpace.labels["ENMONTHLYTEXT"],
            "url": 'https://ec.europa.eu/eurostat/cache/infographs/energy_monthly/enmonthly.html?language='+ language
        },
        "entrade": {
            "id": 'boxFour',
            "tool": 'ENTRADE',
            "urlImg":'img/ENTRADE.png',
            "title": languageNameSpace.labels["ENTRADETITLE"],
            "text": languageNameSpace.labels["ENTRADETEXT"],
            "url": 'https://ec.europa.eu/eurostat/cache/infographs/energy_trade/entrade.html?language='+ language,
        },
        "enbal": {
            "id": 'boxFive',
            "tool": 'ENBAL',
            "urlImg":'img/ENBAL.png',
            "title": languageNameSpace.labels["ENBALTITLE"],
            "text": languageNameSpace.labels["ENBALTEXT"],
            "url": 'https://ec.europa.eu/eurostat/cache/infographs/energy_balances/enbal.html?language='+ language,
        },
        "endash": {
            "id": 'boxOneSix',
            "tool": 'ENDASH',
            "urlImg":'img/ENDASH.png',
            "title": languageNameSpace.labels["ENDASHTITLE"],
            "text": languageNameSpace.labels["ENDASHTEXT"],
            "url": 'https://ec.europa.eu/eurostat/cache/infographs/energy_dashboard/endash.html?language='+ language,
        },
        "enshed": {
            "id": 'boxSeven',
            "urlImg":'img/SHEDLIGHT.png',
            "title": languageNameSpace.labels["SHEDLIGHTTITLE"],
            "text": languageNameSpace.labels["SHEDLIGHTTEXT"],
            "url": 'https://ec.europa.eu/eurostat/cache/infographs/energy/',
        },
        "enscenarios": {
            "id": 'boxEight',
            "urlImg":'img/ENSCENARIOS.jpg',
            "title": languageNameSpace.labels["ENSCENARIOSTITLE"],
            "text": languageNameSpace.labels["ENSCENARIOSTEXT"],
            "url": 'https://visitors-centre.jrc.ec.europa.eu/en/media/tools/energy-scenarios-explore-future-european-energy',
        },
    }


   
   
    Object.values(tools).forEach(tool => {
        const htmlContent = /*html*/`
            <div class="content">
                <div class="description">
                    <h2 class="title">${tool.title}</h2>
                    <p class="text">${tool.text}</p>
                </div>
                <div class="controls">
                ${tool.id == "boxSeven" || tool.id == "boxEight" ? '' :
                    `<button id="${tool.id}modal" type="button" class="ecl-button ecl-button--secondary">${languageNameSpace.labels['COSTOMIZE']}</button>` }
                <button id="${tool.id}Btn" type="button" class="ecl-button ecl-button--primary">${languageNameSpace.labels['GOTO']}</button>
            </div>
            </div>`;
    
        const container = document.getElementById(tool.id + "Container");
        container.style.backgroundImage = `url(${tool.urlImg})`;
        container.setAttribute("role", "img");
        container.setAttribute("aria-label", `${tool.title} chart`);
    
        container.innerHTML += htmlContent;

   
    });
    
  
    Object.values(tools).forEach(tool => {

        document.getElementById(`${tool.id}Btn`).addEventListener("click", function() {          
            const url = tool.url;
            window.location.href = url;
        });

        const modalButton = document.getElementById(`${tool.id}modal`);
        if (modalButton) {
            modalButton.addEventListener("click", function() {
                const id = tool.id;
                const title = tool.title;
                const text = tool.text;        
      
                const modalInstance = new Modal(id, title, text);
                modalInstance.addToDOM('#modal-container');
                
                const modalElement = document.getElementById('modal-example');                  
                if (modalElement) {
                    populateModal(tool);                    
                }
            });
        }

    });
}