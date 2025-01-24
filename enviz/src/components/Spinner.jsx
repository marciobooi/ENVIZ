
import PropTypes from 'prop-types';
import '../styles/spinner.css'; // Ensure to include the relevant CSS

const Spinner = ({ text = 'Loading data...', size = 'm', color = 'primary', centered = true }) => {
    const spinnerClass = `
    ecl-spinner
    ecl-spinner--${color}
    ecl-spinner--${size}
    ${centered ? 'ecl-spinner--centered' : ''}
    ecl-spinner--visible
  `.trim();

    return (
        <div className={spinnerClass} role="alert">
            <svg className="ecl-spinner__loader" viewBox="25 25 50 50">
                {/* Gradient for the spinner */}
                <defs>
                    <linearGradient id="gradient-primary" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#007bff" />
                        <stop offset="100%" stopColor="#5fa9f7" />
                    </linearGradient>
                    <linearGradient id="gradient-secondary" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6c757d" />
                        <stop offset="100%" stopColor="#a6a6a6" />
                    </linearGradient>
                </defs>

                {/* Spinner circle */}
                <circle
                    className="ecl-spinner__circle"
                    cx="50"
                    cy="50"
                    r="20"
                    fill="none"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    vectorEffect="non-scaling-stroke"
                ></circle>
            </svg>

            {/* Spinner text */}
            {text && <div className="ecl-spinner__text">{text}</div>}
        </div>
    );
};

Spinner.propTypes = {
    text: PropTypes.string, // Text to display below the spinner
    size: PropTypes.oneOf(['s', 'm', 'l']), // Spinner size
    color: PropTypes.oneOf(['primary', 'secondary']), // Spinner color
    centered: PropTypes.bool, // Whether the spinner is centered
};

export default Spinner;
