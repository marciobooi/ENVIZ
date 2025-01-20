import PropTypes from "prop-types";

const RadioGroupComponent = ({
    label = "Do you need help?",
    helperText = "Helper text for the group",
    options = [],
    name = "radio-group",
    required = true,
    selectedValue = "",
    onChange,
}) => {
    return (
        <fieldset
            className="ecl-form-group"
            aria-describedby={`${name}-helper`}
            role="radiogroup"
            aria-required={required}
        >
            <legend id={`${name}-label`} className="ecl-form-label">
                {label}
                {required && (
                    <span
                        className="ecl-form-label__required"
                        role="note"
                        aria-label="required"
                    >
                        *
                    </span>
                )}
            </legend>
            <div className="ecl-help-block" id={`${name}-helper`}>
                {helperText}
            </div>
            {options.map((option) => (
                <div className="ecl-radio ecl-radio--binary" key={option.value}>
                    <input
                        id={`${name}-${option.value}`}
                        name={name}
                        className="ecl-radio__input"
                        type="radio"
                        value={option.value}
                        checked={selectedValue === option.value}
                        required={required}
                        onChange={(e) => onChange && onChange(e.target.value)}
                    />
                    <label
                        className="ecl-radio__label"
                        htmlFor={`${name}-${option.value}`}
                    >
                        <span className="ecl-radio__box">
                            <span className="ecl-radio__box-inner"></span>
                        </span>
                        <span className="ecl-radio__text">{option.label}</span>
                    </label>
                </div>
            ))}
        </fieldset>
    );
};

RadioGroupComponent.propTypes = {
    label: PropTypes.string,
    helperText: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    name: PropTypes.string,
    required: PropTypes.bool,
    selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
};

export default RadioGroupComponent;
