class CustomSingleSelect {
    constructor(select, options) {
        this.select = select;
        this.options = options;
        this.init();
    }

    init() {
        const selectId = `select-${this.select.label.toLowerCase()}-${Math.floor(Math.random() * 1000)}`;

        const optionsData = this.options.map(option => {
            const label = languageNameSpace.labels[option];
            const labelContent = label !== undefined ? label : option;
            return `<option value="${option}">${labelContent}</option>`;
        }).join('');

        const labelText = languageNameSpace.labels[this.select.label];
        const nameText = this.select.text;

        const htmlContent = /*html*/`                
            <div id="${selectId}" class="ecl-form-group " role="application">            
                <div class="ecl-help-block">${labelText}</div>
                <div class="ecl-select__container">
                    <select class="ecl-select select" id="${this.select.label}" name="${nameText}" required>
                        ${optionsData ? `<optgroup label="${labelText}">${optionsData}</optgroup>` : ''}
                    </select>
                    <div class="ecl-select__icon">
                        <i class="fas fa-chevron-down ecl-icon ecl-icon--s ecl-select__icon-shape" focusable="false" aria-hidden="true"></i>
                    </div>
                </div>
            </div>`;

        const toolOptionsContainer = document.querySelector("#toolSelects");
        toolOptionsContainer.innerHTML += htmlContent;

        this.selectElement = document.getElementById(selectId);
        this.selectContainer = this.selectElement;




        const selectElements = document.querySelectorAll(".select");

        selectElements.forEach(selectElement => {
            selectElement.addEventListener('change', (event) => {
      
                if (selectElement.id === "SELECTPRODUCT") {
                    REF.ENPproduct = event.target.value;
                }
                if (selectElement.id === "SELECTCONSUMER") {                  
                    REF.ENPconsumer = event.target.value
                }

                // console.log(`${REF.ENPproduct}_${REF.ENPconsumer}_${REF.ENPcomponent}`)
                // console.log(REF.ENPdataset)
                // updateEnprices()
            });
        });



    }
}




