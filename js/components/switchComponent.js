class CustomSwitch {
    constructor(select, options, checked) {
        this.select = select;
        this.options = options;
        this.isChecked = checked;
        this.init();
    }

    init() {   
        const { select, options, isChecked } = this;
        const id = select;
        const labelText = options.translation;           

        // Create HTML structure
        const htmlContent = /*html*/` 
            <div class="ecl-form-group" role="application">
                <fieldset id="${id}" class="ecl-form-group ${options.class}" aria-describedby="helper-id-${id}">
                    <div class="ecl-help-block">${languageNameSpace.labels[labelText]}</div>
                    <div class="ecl-radio ecl-radio--binary">
                        <input id="${id}-input-yes" name="${id}-input" class="ecl-radio__input" type="radio" value="1" ${isChecked === 1 ? 'checked' : ''} required />
                        <label class="ecl-radio__label" for="${id}-input-yes">
                            <span class="ecl-radio__box">
                                <span class="ecl-radio__box-inner"></span>
                            </span>
                            <span class="ecl-radio__text">Yes</span>
                        </label>
                    </div>
                    <div class="ecl-radio ecl-radio--binary">
                        <input id="${id}-input-no" name="${id}-input" class="ecl-radio__input" type="radio" value="0" ${isChecked === 0 ? 'checked' : ''} required />
                        <label class="ecl-radio__label" for="${id}-input-no">
                            <span class="ecl-radio__box">
                                <span class="ecl-radio__box-inner"></span>
                            </span>
                            <span class="ecl-radio__text">No</span>
                        </label>
                    </div>
                </fieldset>
            </div>`;

        // Append to container
        const toolOptionsContainer = document.querySelector("#toolSelects");
        if (toolOptionsContainer) {
            toolOptionsContainer.innerHTML += htmlContent;
        } else {
            console.error('Container element #toolSelects not found.');
        }
    }
}

