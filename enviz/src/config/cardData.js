const getCardData = (t) => [
  {
    id: 'electricity',
    imageUrl: '/ENPRICES.png',
    imageAlt: t('card.electricity.imageAlt'),
    title: t('card.electricity.title'),
    description: t('card.electricity.description'),
    onCustomize: () => console.log('Customize electricity visualization'),
    onGoToTool: () => console.log('Go to electricity tool'),
  },
  {
    id: 'gas',
    imageUrl: '/SANKEY.png',
    imageAlt: t('card.gas.imageAlt'),
    title: t('card.gas.title'),
    description: t('card.gas.description'),
    onCustomize: () => console.log('Customize gas visualization'),
    onGoToTool: () => console.log('Go to gas tool'),
  },
];

export default getCardData;
