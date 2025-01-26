// Add keyboard support for custom components
element.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    // Activate the element
    activateElement();
  }
});
