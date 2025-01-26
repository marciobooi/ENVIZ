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
        const { t } = this.props;
        const message = t('errors.announcement', { error: error.message });

        // Announce error to screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'alert');
        announcement.setAttribute('aria-live', 'assertive');
        announcement.textContent = message;
        document.body.appendChild(announcement);

        setTimeout(() => document.body.removeChild(announcement), 1000);
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