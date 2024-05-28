class Navbar {
  constructor() {
    this.createNavbar();
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.selectLanguage = this.selectLanguage.bind(this);
  }

  createNavbar() {

    document.getElementById("navbar-container").innerHTML = "";

    this.navbar = document.createElement('div');
    this.navbar.classList.add('navbar', 'shblue');
    this.navbar.setAttribute('role', 'navigation');

    this.navbar.innerHTML = /*html*/`
      <div class="col-6 col-lg-6">
        <div id="header-title">
          <h1 id="header-title-label">${languageNameSpace.labels['MAINTITLE']}</h1>
        </div>
      </div>

      <div class="col-3 col-lg-2">
        <div class="button-container">
          <button type="button" id="tutorialBtn" title="${languageNameSpace.labels['TUTORIAL']}" class="btn roundBtn" onclick="openTutorial()" >
            <i class="fas fa-book-open" focusable="false" aria-hidden="true"></i>
          </button>
          <button id="shareBtn" class="btn roundBtn" type="button" title="${languageNameSpace.labels['SHARE']}" data-bs-toggle="dropdown" role="menuitem" title="Share chart" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-share-alt" aria-hidden="true"></i>
          </button>
          <ul class="dropdown-menu" role="menu" aria-labelledby="Share chart">     					
            <button class="dropdown-item" role="menuitem" onclick="socialNameSpace.twitter()" aria-label="${languageNameSpace.labels['SHARET']}">${languageNameSpace.labels['SHARET']}</button>
            <button class="dropdown-item" role="menuitem" onclick="socialNameSpace.facebook()" aria-label="${languageNameSpace.labels['SHAREF']}">${languageNameSpace.labels['SHAREF']}</button>
            <button class="dropdown-item" role="menuitem" onclick="socialNameSpace.linkedin()" aria-label="${languageNameSpace.labels['SHAREL']}">${languageNameSpace.labels['SHAREL']}</button>        		
          </ul>
          </div>
      </div>

      <div class="col-3 col-lg-2" id="lang-section">
        <button id="toggleLanguageBtn" type="button" class="btn btn-outline-primary" aria-expanded="false" aria-label="Change language, current language is English">
          <i class="fas fa-globe" focusable="false" aria-hidden="true"></i><span id="lang-selection-text">English</span>
        </button>
        <div class="ecl-site-header__language-container" id="language-list-overlay" data-ecl-language-list-overlay="" aria-labelledby="ecl-site-header__language-title" role="dialog" aria-modal="true">
        <div class="ecl-site-header__language-header">
            <div class="ecl-site-header__language-title" id="ecl-site-header__language-title">${languageNameSpace.labels['LANGUAGE']}</div>
            <button id="languageClsBtn" class="ecl-button ecl-button--ghost ecl-site-header__language-close" type="submit" data-ecl-language-list-close="" tabindex="0">
                <span class="ecl-button__container">
                    <span class="ecl-u-sr-only" data-ecl-label="true">Close</span>   
                    <i class="fas fa-times-circle ecl-icon ecl-icon--s ecl-button__icon ecl-button__icon--after" focusable="false" aria-hidden="true" data-ecl-icon=""></i>
                </span>
            </button>
        </div>

        <div class="ecl-site-header__language-content ecl-site-header__language-content--stack">
            <div class="ecl-site-header__language-category ecl-site-header__language-category--3-col" data-ecl-language-list-eu="">
                <div class="ecl-site-header__language-category-title">${languageNameSpace.labels['OFFICIAL']}</div>
                <ul class="ecl-site-header__language-list">
                <li class="ecl-site-header__language-item" id="EN" data-lang="EN" tabindex="0">
                  <span class="ecl-link ecl-link--standalone ecl-site-header__language-link">
                    <span class="ecl-site-header__language-link-code">en</span>
                    <span class="ecl-site-header__language-link-label">English</span>
                  </span>
                </li>
                <li class="ecl-site-header__language-item" id="DE"  data-lang="DE" tabindex="0">
                  <span class="ecl-link ecl-link--standalone ecl-site-header__language-link">
                    <span class="ecl-site-header__language-link-code">de</span>
                    <span class="ecl-site-header__language-link-label">Deutsch</span>
                  </span>
                </li>
                <li class="ecl-site-header__language-item" id="FR" data-lang="FR" tabindex="0">
                  <span class="ecl-link ecl-link--standalone ecl-site-header__language-link">
                    <span class="ecl-site-header__language-link-code">fr</span>
                    <span class="ecl-site-header__language-link-label">français</span>
                  </span>
                </li>
              </ul>
            </div>     
        </div>
    </div>
      </div>

      <div class="col-3  col-lg-2 logo"> 
        <a id="home" href="https://ec.europa.eu/eurostat/web/main/home">
          <img id="eurostatLogo" src="img/estat_RGB_neg.png" alt="Eurostat - Official Logo">
        </a>
      </div>
    `;

    const closeButton = this.navbar.querySelector(".ecl-site-header__language-close");
  
    closeButton.addEventListener("click", this.toggleDropdown.bind(this));

    this.langSelection = this.navbar.querySelector("#lang-section button");

    const defaultLanguageItem = this.navbar.querySelector("#" + language);
    
    this.selectLanguage(defaultLanguageItem);

    this.langSelection.addEventListener("keydown", this.handleButtonKeyDown.bind(this));

    // Add event listener for keydown on the dropdown
    const dropdown = this.langSelection.nextElementSibling;
    if (dropdown) {
      dropdown.addEventListener("keydown", this.handleDropdownKeyDown.bind(this));
    }   



    this.navbar.addEventListener('click', (event) => {
      const langItem = event.target.closest(".ecl-site-header__language-item");
      if (langItem) {
          // Get the language value from the data-lang attribute
          const langValue = langItem.dataset.lang;
          
          // Call the setLanguage method with the selected language
          languageNameSpace.setLanguage(langValue);
  
          // Call the selectLanguage method to update the UI
          this.selectLanguage(langItem);

          document.querySelector("#toggleLanguageBtn").focus()
      }
  });




  }


  selectLanguage(langItem) {
    // Remove "active" class from all language items
    const languageItems = this.navbar.querySelectorAll(".ecl-site-header__language-item");
    languageItems.forEach(item => item.classList.remove("active"));

    // Add "active" class to the selected language item
    langItem.classList.add("active");

    // Update button text with the selected language
    const langLabel = langItem.querySelector(".ecl-site-header__language-link-label").textContent;
    this.langSelection.innerHTML = `<i class="fas fa-globe" focusable="false" aria-hidden="true"></i>${langLabel}`;
    this.langSelection.setAttribute("aria-label", `Change language, current language is ${langLabel}`); 

  }



  toggleDropdown() {
    var dropdown = this.langSelection.nextElementSibling;
    dropdown.classList.toggle("visible");

    document.querySelector("#toggleLanguageBtn").focus()
  }

  handleButtonKeyDown(event) {
    // Check if the dropdown is open
    const dropdown = this.langSelection.nextElementSibling;
    const isDropdownVisible = dropdown && dropdown.classList.contains("visible");

    if (event.key === 'Escape') {
      event.preventDefault();
      this.toggleDropdown();
    }
  
    // Handle Tab key press
    if (event.key === "Tab" && isDropdownVisible) {
      event.preventDefault(); // Prevent the default behavior of the Tab key
  
      // Focus the first focusable item within the dropdown
      const firstFocusableItem = dropdown.querySelector('.ecl-site-header__language-item:not([hidden])');
      if (firstFocusableItem) {
        firstFocusableItem.focus();
      }
    }
  }
  
  handleDropdownKeyDown(event) {
    const focusableItems = [
      '#EN',
      '#DE',
      '#FR',
      '#languageClsBtn'
    ].map(selector => this.navbar.querySelector(selector));

  
    if (focusableItems.length === 0) return;
  
    if (event.key === 'Tab') {
      event.preventDefault();
  
      const currentIndex = focusableItems.indexOf(document.activeElement);
  
      if (!event.shiftKey && currentIndex === focusableItems.length - 1) {
        // If Tab on the last item, focus the first item
        focusableItems[0] && focusableItems[0].focus();
      } else if (event.shiftKey && currentIndex === 0) {
        // If Shift + Tab on the first item, focus the last item
        focusableItems[focusableItems.length - 1] && focusableItems[focusableItems.length - 1].focus();
      } else {
        // Otherwise, move to the next or previous item based on Tab or Shift + Tab
        const nextIndex = event.shiftKey ? currentIndex - 1 : currentIndex + 1;
        focusableItems[nextIndex] && focusableItems[nextIndex].focus();
      }
    } else if (event.key === 'Enter' || event.key === 'Space') {
      // If Enter or Space is pressed, prevent default action and handle the desired action
      event.preventDefault();
      
      const activeElement = document.activeElement;
      if (activeElement.id === 'languageClsBtn') {
        // Handle action for close button
        this.toggleDropdown();
      } else {
        // Handle action for language selection
        const selectedLanguage = activeElement.closest('.ecl-site-header__language-item')  
        const defaultLanguageItem = this.navbar.querySelector("#" + selectedLanguage.id);    
        this.selectLanguage(defaultLanguageItem);
        languageNameSpace.setLanguage(selectedLanguage.id);    

        this.toggleDropdown();

        document.querySelector("#toggleLanguageBtn").focus()
      }
    } else if (event.key === 'Escape') {
        event.preventDefault();
        this.toggleDropdown();
      
    }
  }

  addToDOM(targetElement) {
    const container = document.querySelector(targetElement);
    container.appendChild(this.navbar);

    this.langSelection.addEventListener("click", this.toggleDropdown);



    const languageItems = this.navbar.querySelectorAll(".ecl-site-header__language-item");
    languageItems.forEach(item => {
      item.addEventListener("click", () => {
        this.selectLanguage(item);
        this.toggleDropdown();
      });
    });
  }
}

