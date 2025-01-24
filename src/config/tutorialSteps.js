const getTutorialSteps = (t) => [
  {
    target: '#toolTitle',
    title: t('tutorial.steps.welcome.title'),
    content: t('tutorial.steps.welcome.content'),
    placement: 'bottom',
    disableBeacon: true,
    spotlightClicks: false,
    aria: {
      label: t('tutorial.steps.welcome.title'),
      role: 'dialog',
    },
  },
  {
    target: '.cards-container',
    title: t('tutorial.steps.cards.title'),
    content: t('tutorial.steps.cards.content'),
    placement: 'bottom',
    spotlightClicks: false,
    aria: {
      label: t('tutorial.steps.cards.title'),
      role: 'dialog',
    },
  },
  {
    target: '.ecl-card__actions',
    title: t('tutorial.steps.actions.title'),
    content: t('tutorial.steps.actions.content'),
    placement: 'top',
    spotlightClicks: false,
    aria: {
      label: t('tutorial.steps.actions.title'),
      role: 'dialog',
    },
  },
  {
    target: '#shareBtn',
    title: t('tutorial.steps.share.title'),
    content: t('tutorial.steps.share.content'),
    placement: 'bottom',
    spotlightClicks: false,
    aria: {
      label: t('tutorial.steps.share.title'),
      role: 'dialog',
    },
  },
  {
    target: '#toggleLanguageBtn',
    title: t('tutorial.steps.language.title'),
    content: t('tutorial.steps.language.content'),
    placement: 'bottom',
    spotlightClicks: false,
    aria: {
      label: t('tutorial.steps.language.title'),
      role: 'dialog',
    },
  },
  {
    target: '#home',
    title: t('tutorial.steps.home.title'),
    content: t('tutorial.steps.home.content'),
    placement: 'bottom',
    spotlightClicks: false,
    aria: {
      label: t('tutorial.steps.home.title'),
      role: 'dialog',
    },
  },
];

export default getTutorialSteps;
