import PropTypes from 'prop-types';
import '../styles/spinner.css'; // Ensure to include the relevant CSS

const Spinner = ({
    text = 'Loading...',
    size = 'm',
    color = 'primary',
    centered = true,
    description = 'Please wait while the content is loading'
}) => {
    const spinnerClass = `
        ecl-spinner
        ecl-spinner--${color}
        ecl-spinner--${size}
        ${centered ? 'ecl-spinner--centered' : ''}
    `.trim();

    // Generate unique IDs for accessibility
    const spinnerLabelId = `spinner-label-${Math.random().toString(36).substr(2, 9)}`;
    const spinnerDescriptionId = `spinner-desc-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div
            className={spinnerClass}
            role="status"
            aria-busy="true"
            aria-labelledby={spinnerLabelId}
            aria-describedby={spinnerDescriptionId}
        >
            {/* Screen reader text */}
            <div className="sr-only" id={spinnerLabelId}>
                {text}
            </div>
            <div className="sr-only" id={spinnerDescriptionId}>
                {description}
            </div>

            <div className="spinner-2">
            {text && (
                <div className="ecl-spinner__text" aria-hidden="true">
                    {text}
                </div>
                )}
            </div>
        </div>
    );
};

Spinner.propTypes = {
    text: PropTypes.string,
    size: PropTypes.oneOf(['s', 'm', 'l']),
    color: PropTypes.oneOf(['primary', 'secondary']),
    centered: PropTypes.bool,
    description: PropTypes.string,
};

export default Spinner;
