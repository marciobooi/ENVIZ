var language = 'EN';

var languageNameSpace = {
  //Label containers for the selected language
  labels: {},
  tutorial: {},

  //selected language
  languageSelected: "",

  //init of the labels for the language defined in the URL
  initLanguage: function (lang) {     

    languageNameSpace.languageSelected = lang;

    if(language == "") {language = "EN"}; 

    $.ajax({
      url: "data/labels_" + lang + ".json",
      type: "GET",
      dataType: "json",
      async: false,
      success: function (data) {
        languageNameSpace.labels = data;
      },
      error: function () {
        console.log("Error with language: " + lang);           
        languageNameSpace.languageSelected = "EN";
      },
    });

    $.ajax({
      url: "data/tutorial_" + lang + ".json",
      type: "GET",
      dataType: "json",
      async: false,
      success: function (data) {
        languageNameSpace.tutorial = data;
      },
      error: function () {
        console.log("Error with language: " + lang);        
      },
    });
    
    $(document).ready(function () {  

    
    });

  },


  setLanguage: function (lang) {    
    language = lang
    languageNameSpace.initLanguage(lang);
    
    new Navbar().addToDOM('#navbar-container');
    populateElements()

  },
};
