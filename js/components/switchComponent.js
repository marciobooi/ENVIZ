// class Switch {
//     constructor(id, label, optionYes, optionNo, callback) {
//         this.id = id;
//         this.label = label;
//         this.optionYes = optionYes;
//         this.optionNo = optionNo;
//         this.callback = callback;
//         this.init();
//     }

//     generateHtmlContent(randomId) {
//         let isChecked = this.id === 'component' ? REF.ENPcomponent : REF.ENPdetails;
        
//         return /*html*/`
//             <div class="ecl-form-group" role="application">
//                 <fieldset id="${this.id}-${randomId}" class="ecl-form-group" aria-describedby="helper-id-${randomId}">
//                     <div class="ecl-help-block" id="helper-id-${randomId}">${this.label}</div>
//                     <div class="ecl-radio ecl-radio--binary">
//                         <input id="${this.id}-${randomId}-yes" name="${this.id}-${randomId}" class="ecl-radio__input" type="radio" value="1" ${isChecked === 1 ? 'checked' : ''} required />
//                         <label class="ecl-radio__label" for="${this.id}-${randomId}-yes">
//                             <span class="ecl-radio__box">
//                                 <span class="ecl-radio__box-inner"></span>
//                             </span>
//                             <span class="ecl-radio__text">${this.optionYes}</span>
//                         </label>
//                     </div>
//                     <div class="ecl-radio ecl-radio--binary">
//                         <input id="${this.id}-${randomId}-no" name="${this.id}-${randomId}" class="ecl-radio__input" type="radio" value="0" ${isChecked === 0 ? 'checked' : ''} required />
//                         <label class="ecl-radio__label" for="${this.id}-${randomId}-no">
//                             <span class="ecl-radio__box">
//                                 <span class="ecl-radio__box-inner"></span>
//                             </span>
//                             <span class="ecl-radio__text">${this.optionNo}</span>
//                         </label>
//                     </div>
//                 </fieldset>
//             </div>`;
//     }
    
    

//     init() {
//         const randomId = Math.floor(Math.random() * 1000);
//         const htmlContent = this.generateHtmlContent(randomId);

//         const toolOptionsContainer = document.querySelector("#toolSelects");
//         toolOptionsContainer.insertAdjacentHTML('beforeend', htmlContent);

//         const radioButtons = document.querySelectorAll(`#${this.id}-${randomId} input[type="radio"]`);

//         radioButtons.forEach(radio => {
//             radio.addEventListener('change', (event) => {
//                 this.callback(event.target.value);
//             });
//         });
//     }
// }


