import PropTypes from 'prop-types';

const CountryCheckbox = ({ code, checked, onChange, t }) => (
    <div
        className="ecl-checkbox"
        data-select-multiple-value={code}
        data-visible="true"
    >
        <input
            className="ecl-checkbox__input"
            type="checkbox"
            id={`country-${code}`}
            name={`country-${code}`}
            checked={checked}
            onChange={(e) => onChange(code, e.target.checked)}
            aria-label={t('multiSelect.aria.countryCheckbox', {
                country: t(`multiSelect.countries.${code}`)
            })}
        />
        <label
            className="ecl-checkbox__label"
            htmlFor={`country-${code}`}
        >
            <span className="ecl-checkbox__box" aria-hidden="true">
                <svg className="ecl-icon ecl-icon--s ecl-checkbox__icon"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 48 48"
                >
                    <path fillRule="evenodd"
                        d="M19.53 36.69 6 23.19l2.13-2.13 11.4 11.4L39.99 12l2.13 2.13z"
                    />
                </svg>
            </span>
            <span className="ecl-checkbox__label-text">
                {t(`multiSelect.countries.${code}`)}
            </span>
        </label>
    </div>
);

CountryCheckbox.propTypes = {
    code: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired
};

export default CountryCheckbox; 