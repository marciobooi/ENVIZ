
$( document ).ready(function() {

  languageNameSpace.initLanguage('EN')

  const euGlobanContainer = $('<div>').attr('id', 'euGlobanContainer')

  euGlobanContainer.prependTo('header');

    // webtools may be unreachable (offline / blocked): don't let it stop the page
    if (typeof $wt !== 'undefined') {
      $wt.render("euGlobanContainer", {
        utility: "globan",
        lang: 'en',
        theme: "dark",
      });
    }

  buildComponents();

})

function buildComponents() {
  const components = [  
    { instance: new Navbar(), target: '#navbar-container' }, 
     ];

  components.forEach(({ instance, target }) => {
    instance.addToDOM(target);
  });

  new Footer().addToDOM('#componentFooter')

  if (isAccessibilityMode()) {
    showAccessibilityView()
    return
  }

  populateElements()
}

// enviz.html?accessibility shows the accessibility statement instead of the portal
function isAccessibilityMode() {
  return new URLSearchParams(window.location.search).has('accessibility')
}

function showAccessibilityView() {
  $('#main').addClass('d-none')
  $('#accessibilityView').removeClass('d-none')
  document.title = 'Accessibility statement - Energy Visualisation Portal - Eurostat'
}


function removeComponents() {
  $('#navbar-container').empty(); 
  $('#componentFooter').empty(); 
}


