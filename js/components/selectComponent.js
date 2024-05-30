class CustomSingleSelect {
    constructor(select, options) {
        this.select = select;
        this.options = options;
        this.init();
    }

    init() {   
        const { select, options } = this;
        const id = select;
        const labelText = options.translation;
        let data = options.arr;

        // Check if the first 4 characters of the first element are numeric
        if (data.length > 0 && this.isNumeric(data[0].substring(0, 4))) {
            id === "bDecimals" ? data : data.reverse();
        }

        // Create HTML structure
        const htmlContent = /*html*/`
            <div id="select${id}" class="ecl-form-group" role="application">
                <div class="ecl-help-block">${languageNameSpace.labels[labelText]}</div>
                <div class="ecl-select__container">
                    <select class="ecl-select select" id="${id}" name="${languageNameSpace.labels[labelText]}" required>
                        ${this.createOptions(id, data)}
                    </select>
                    <div class="ecl-select__icon">
                        <i class="fas fa-chevron-down ecl-icon ecl-icon--s ecl-select__icon-shape" focusable="false" aria-hidden="true"></i>
                    </div>
                </div>
            </div>`;    

        // Append to container
        const toolOptionsContainer = document.querySelector("#toolSelects");
        if (toolOptionsContainer) {
            toolOptionsContainer.innerHTML += htmlContent;
        } else {
            console.error('Container element #toolSelects not found.');
        }
    }

    // Check if a string is numeric
    isNumeric(str) {
        return !isNaN(str) && !isNaN(parseFloat(str));
    }

    // Create options for the select element
    createOptions(id, data) {
        return data.map(item => `<option value="${item}">${ id === "sYear" || id === "tYear" || id === "bYear" || id === "bDecimals" ? item : languageNameSpace.labels[item]} </option>`).join('');
    }
}

