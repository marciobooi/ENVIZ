class CustomSelect {
    constructor(toolId, EU_MEMBER_COUNTRY_CODES, NON_MEMBER_COUNTRY_CODES, countriesAgregates) {
        this.selectId = toolId;
        this.EU_MEMBER_COUNTRY_CODES = EU_MEMBER_COUNTRY_CODES;
        this.NON_MEMBER_COUNTRY_CODES = NON_MEMBER_COUNTRY_CODES;
        this.countriesAgregates = countriesAgregates;
        this.init(toolId, EU_MEMBER_COUNTRY_CODES, NON_MEMBER_COUNTRY_CODES, countriesAgregates);
    }

    init(toolId, EU_MEMBER_COUNTRY_CODES, NON_MEMBER_COUNTRY_CODES, countriesAgregates) {
        // Populate the options dynamically based on selectCountries
        const europeanCountriesOptions = EU_MEMBER_COUNTRY_CODES.map(country => `<option value="${country}">${languageNameSpace.labels[country]}</option>`).join('');
        const nonEuropeanCountriesOptions = NON_MEMBER_COUNTRY_CODES.map(country => `<option value="${country}">${languageNameSpace.labels[country]}</option>`).join('');
        const aggregates = countriesAgregates.map(country => `<option value="${country}">${languageNameSpace.labels[country]}</option>`).join('');

    
        const htmlContent = /*html*/`
        <div id="${toolId}" class="ecl-form-group" role="application">
            <div id="select-multiple-helper" class="ecl-help-block">${languageNameSpace.labels['SELCOUNTRY']}</div>
                <div class="ecl-select__container ecl-select__container--l">                
                <select class="ecl-select"  name="country" required multiple data-ecl-auto-init="Select"
                    data-ecl-select-multiple data-ecl-select-default="${languageNameSpace.labels['SELCOUNTRY']}" data-ecl-select-search="${languageNameSpace.labels['SELKEY']}"
                    data-ecl-select-no-results="${languageNameSpace.labels['SELNOTF']}" data-ecl-select-all="${languageNameSpace.labels['SELALL']}"
                    data-ecl-select-clear-all="${languageNameSpace.labels['SELCLEAR']}" data-ecl-select-close="${languageNameSpace.labels['tutFINISH']}">
                    <optgroup label="${languageNameSpace.labels['SELAGREGATES']}">      
                        ${aggregates}
                    </optgroup>
                    <optgroup label="${languageNameSpace.labels['SELPARTNER']}">      
                        ${europeanCountriesOptions}
                    </optgroup>
                    <optgroup label="${languageNameSpace.labels['SELNONPARTNER']}">       
                        ${nonEuropeanCountriesOptions}
                    </optgroup>     
                </select>
                <div class="ecl-select__icon">
                    <i class="fas fa-chevron-down ecl-icon ecl-icon--s  ecl-select__icon-shape" focusable="false" aria-hidden="true"></i>
                </div>
                </div>
          </div>`;

        // Add the HTML content to the DOM
        const toolOptionsContainer = document.querySelector("#toolSelects");
        toolOptionsContainer.innerHTML += htmlContent;

        // Set the selectElement and selectContainer properties
        this.selectElement = document.getElementById(toolId);
        this.selectContainer = this.selectElement 
    }


}


// Usage
// const customSelect = new CustomSelect('select-multiple');