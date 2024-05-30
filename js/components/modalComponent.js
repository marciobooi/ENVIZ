class Modal {
    constructor(id, title, text) {   
      this.createModal(id, title, text);
      this.closeModalButton = null;
    }
  
    createModal(id, title, text) {

      const modalContainer = document.getElementById("modal-container");
      modalContainer.innerHTML = ""; 


      this.modal = document.createElement('div');

      this.modal.innerHTML = /*html*/`<dialog data-ecl-auto-init="Modal" id="modal-example" data-ecl-modal-toggle="modal-toggle" class="ecl-modal ecl-modal--l">
      <div class="ecl-modal__container ecl-container">
        <div class="ecl-modal__content">
          <header class="ecl-modal__header">
                <button class="ecl-button ecl-button--ghost ecl-modal__close" type="button" data-ecl-modal-close>
                    <span class="ecl-button__container"><span class="ecl-u-sr-only" data-ecl-label="true">Close</span>
                        <i class="fas fa-times-circle ecl-icon ecl-icon--s ecl-button__icon ecl-button__icon--after" focusable="false" aria-hidden="true" data-ecl-icon=""></i>
                    </span>
                </button>  
          </header>
          <div class="ecl-modal__body">
            <div>
              <h2 class="title" data-ecl-modal-scroll>${title}</h2>
              <p class="text" data-ecl-modal-scroll>${text}</p>
            </div>
            <div id="toolSelects">
            </div>         
          </div>
          <footer class="ecl-modal__footer">
            <div class="ecl-modal__footer-content">
            <button class="ecl-button ecl-button--secondary ecl-modal__button" type="button" data-ecl-modal-close>${languageNameSpace.labels['CLOSE']}</button>
            <button class="ecl-button ecl-button--primary ecl-modal__button goto" type="submit">${languageNameSpace.labels['TOOLS']}</button>
            </div>
          </footer>
        </div>
      </div>
    </dialog>`;

    const closeModalButtons = this.modal.querySelectorAll('[data-ecl-modal-close]');
    closeModalButtons.forEach(button => {
      button.addEventListener('click', this.closeModal.bind(this));
    });
    }

    closeModal() {
        const modalElement = document.getElementById('modal-example');
        if (modalElement) {
            modalElement.close();
            const modalInstance = new Modal();
            modalInstance.removeFromDOM('#modal-container');
            REF.isOpen = false;
        }
        const modalInstance = new Modal();
    }

  
    addToDOM(targetElement) {
      const container = document.querySelector(targetElement);
      container.appendChild(this.modal);
    }
    removeFromDOM() {
        const parentElement = this.modal.parentElement;
        if (parentElement) {
          parentElement.removeChild(this.modal);
        }
    }
  }
  
