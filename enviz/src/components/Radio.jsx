import PropTypes from "prop-types";

const RadioGroupComponent = ({
    label,
    helperText,
    name,
    options = [],
    value,
    onChange
}) => {
    return (
        <fieldset className="ecl-form-group">
            <legend id={`${name}-label`} className="ecl-form-label">{label}</legend>

            <div
                className="ecl-radio-group"
                role="radiogroup"
                aria-labelledby={`${name}-label`}
                aria-describedby={helperText ? `${name}-helper` : undefined}
            >
                {options.map((option, index) => (
                    <div key={option.value} className="ecl-radio ecl-radio--binary">
                        <input
                            className="ecl-radio__input"
                            type="radio"
                            id={`${name}-${index}`}
                            name={name}
                            value={option.value}
                            checked={value === option.value}
                            onChange={(e) => onChange(e.target.value)}
                        />
                        <label className="ecl-radio__label" htmlFor={`${name}-${index}`}>
                            <span className="ecl-radio__box">
                                <span className="ecl-radio__box-inner"></span>
                            </span>
                            <span className="ecl-radio__label-text">{option.label}</span>
                        </label>
                    </div>
                ))}
            </div>
        </fieldset>
    );
};

RadioGroupComponent.propTypes = {
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    helperText: PropTypes.string,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default RadioGroupComponent;
