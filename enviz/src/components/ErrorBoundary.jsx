import React from 'react';
import { withTranslation } from 'react-i18next';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error:', error, errorInfo);
    }

    render() {
        const { t } = this.props;

        if (this.state.hasError) {
            return (
                <div className="error-container">
                    <h2>{t('errors.title')}</h2>
                    <p>{t('errors.message')}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="ecl-button ecl-button--primary"
                    >
                        {t('errors.retry')}
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default withTranslation()(ErrorBoundary); 