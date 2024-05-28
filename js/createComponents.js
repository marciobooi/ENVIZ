
$( document ).ready(function() {

  languageNameSpace.initLanguage('EN')

  const euGlobanContainer = $('<div>').attr('id', 'euGlobanContainer')

  euGlobanContainer.prependTo('header');

    $wt.render("euGlobanContainer", {
      utility: "globan",
      lang: 'en',
      theme: "dark",
    });

  buildComponents();

})

function buildComponents() {
  const components = [  
    { instance: new Navbar(), target: '#navbar-container' }, 
     ];

  components.forEach(({ instance, target }) => {
    instance.addToDOM(target);
  });

  populateElements()
}


function removeComponents() {
  $('#navbar-container').empty(); 
}


