import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import '../styles/spinner.css';

const Spinner = ({ size = 'm', text }) => {
    const { t } = useTranslation();
    const displayText = text || t('common.loading');

    return (
        <div
            className={`ecl-spinner ecl-spinner--primary ecl-spinner--${size} ecl-spinner--centered ecl-spinner--visible`}
            role="alert"
        >
            <svg className="ecl-spinner__loader" viewBox="25 25 50 50">
                <circle
                    className="ecl-spinner__circle"
                    cx="50"
                    cy="50"
                    r="20"
                    fill="none"
                    strokeWidth="4px"
                    strokeMiterlimit="10"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>
            <div className="ecl-spinner__text">{displayText}</div>
        </div>
    );
};

Spinner.propTypes = {
    size: PropTypes.oneOf(['s', 'm', 'l']),
    text: PropTypes.string
};

export default Spinner; 