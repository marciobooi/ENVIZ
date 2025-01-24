const getCardData = (t, toggleModal) => [
  {
    id: 'enprices',
    imageUrl: '/ENPRICES.png',
    imageAlt: t('card.enprices.imageAlt'),
    title: t('card.enprices.title'),
    description: t('card.enprices.description'),
    onCustomize: () => toggleModal('enprices'),
    onGoToTool: () =>
      (window.location.href =
        'https://ec.europa.eu/eurostat/cache/visualisations/energy-prices/enprices.html'),
  },
  {
    id: 'ensankey',
    imageUrl: '/SANKEY.png',
    imageAlt: t('card.ensankey.imageAlt'),
    title: t('card.ensankey.title'),
    description: t('card.ensankey.description'),
    onCustomize: () => toggleModal('sankey'),
    onGoToTool: () =>
      (window.location.href =
        'https://ec.europa.eu/eurostat/cache/sankey/energy/sankey.html'),
  },
  {
    id: 'enmonthly',
    imageUrl: '/ENMONTHLY.png',
    imageAlt: t('card.enmonthly.imageAlt'),
    title: t('card.enmonthly.title'),
    description: t('card.enmonthly.description'),
    onCustomize: () => toggleModal('enmonthly'),
    onGoToTool: () =>
      (window.location.href =
        'https://ec.europa.eu/eurostat/cache/visualisations/energy-monthly/enmonthly.html'),
  },
  {
    id: 'entrade',
    imageUrl: '/ENTRADE.png',
    imageAlt: t('card.entrade.imageAlt'),
    title: t('card.entrade.title'),
    description: t('card.entrade.description'),
    onCustomize: () => toggleModal('entrade'),
    onGoToTool: () =>
      (window.location.href =
        'https://ec.europa.eu/eurostat/cache/visualisations/energy-trade/entrade.html'),
  },
  {
    id: 'enbal',
    imageUrl: '/ENBAL.png',
    imageAlt: t('card.enbal.imageAlt'),
    title: t('card.enbal.title'),
    description: t('card.enbal.description'),
    onCustomize: () => toggleModal('enbal'),
    onGoToTool: () =>
      (window.location.href =
        'https://ec.europa.eu/eurostat/cache/visualisations/energy-balances/enbal.html'),
  },
  {
    id: 'endash',
    imageUrl: '/ENDASH.png',
    imageAlt: t('card.endash.imageAlt'),
    title: t('card.endash.title'),
    description: t('card.endash.description'),
    onCustomize: () => toggleModal('endash'),
    onGoToTool: () =>
      (window.location.href =
        'https://ec.europa.eu/eurostat/cache/visualisations/energy-dashboard/endash.html'),
  },
  {
    id: 'shedthelight',
    imageUrl: '/SHEDLIGHT.png',
    imageAlt: t('card.shedthelight.imageAlt'),
    title: t('card.shedthelight.title'),
    description: t('card.shedthelight.description'),
    hasCustomization: false,
    onGoToTool: () =>
      (window.location.href =
        'https://ec.europa.eu/eurostat/web/interactive-publications/energy-2024'),
  },
  {
    id: 'EnergyScenarios',
    imageUrl: '/ENSCENARIOS.jpg',
    imageAlt: t('card.EnergyScenarios.imageAlt'),
    title: t('card.EnergyScenarios.title'),
    description: t('card.EnergyScenarios.description'),
    hasCustomization: false,
    label: t('common.toolBy', { organization: 'JRC' }),
    onGoToTool: () =>
      (window.location.href =
        'https://visitors-centre.jrc.ec.europa.eu/en/media/tools/energy-scenarios-explore-future-european-energy'),
  },
];

export default getCardData;
