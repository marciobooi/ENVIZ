import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

function MetaTags() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    return (
        <Helmet>
            {/* Basic meta tags */}
            <html lang={currentLang} />
            <title>{t('meta.title')}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="title" content={t('meta.menuTitle')} />
            <meta name="description" content={t('meta.description')} />
            <meta name="author" content="Eurostat" />
            <meta name="language" content={currentLang.toUpperCase()} />
            <meta name="robots" content="index, follow" />
            <meta name="keywords" content={t('meta.keywords')} />

            {/* Open Graph meta tags */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={t('meta.menuTitle')} />
            <meta property="og:description" content={t('meta.description')} />
            <meta property="og:site_name" content={t('meta.menuTitle')} />
            <meta
                property="og:url"
                content="https://ec.europa.eu/eurostat/cache/infographs/energy_portal/enviz.html"
            />
            <meta
                property="og:image"
                content="https://ec.europa.eu/eurostat/cache/infographs/energy_portal/shareico.png"
            />
            <meta
                property="og:image:secure_url"
                content="https://ec.europa.eu/eurostat/cache/infographs/energy_portal/shareico.png"
            />

            {/* Twitter meta tags */}
            <meta name="twitter:title" content={t('meta.menuTitle')} />
            <meta name="twitter:description" content={t('meta.description')} />
            <meta
                name="twitter:image"
                content="https://ec.europa.eu/eurostat/cache/infographs/energy_portal/shareico.png"
            />
        </Helmet>
    );
}

export default MetaTags; 