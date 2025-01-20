import PropTypes from "prop-types";


const SelectComponent = ({
    label = "Select a country",
    required = true,
    helperText = "This is the input's helper text.",
    options = [],
    optgroups = [],
    name = "country",
    selectedValue = "",
    onChange,
}) => {
    return (
        <div className="ecl-form-group">
            <label
                htmlFor="select-default"
                id="select-default-label"
                className="ecl-form-label"
            >
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
            </label>
            <div className="ecl-help-block" id="select-default-helper">
                {helperText}
            </div>
            <div className="ecl-select__container ecl-select__container--m">
                <select
                    className="ecl-select"
                    id="select-default"
                    name={name}
                    required={required}
                    aria-describedby="select-default-helper"
                    data-ecl-auto-init="Select"
                    value={selectedValue}
                    onChange={(e) => onChange && onChange(e.target.value)}
                >
                    {optgroups.map((group, index) => (
                        <optgroup key={index} label={group.label}>
                            {group.options.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                    aria-label={`${option.label} - ${group.label}`}
                                    disabled={option.disabled}
                                >
                                    {option.label}
                                </option>
                            ))}
                        </optgroup>
                    ))}
                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                            aria-label={option.label}
                            disabled={option.disabled}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="ecl-select__icon">
                    <button
                        className="ecl-button ecl-button--ghost ecl-button--icon-only"
                        type="button"
                        tabIndex="-1"
                    >
                        <span className="ecl-button__container">
                            <span className="ecl-button__label" data-ecl-label="true">
                                Toggle dropdown
                            </span>
                            <svg
                                className="ecl-icon ecl-icon--xs ecl-icon--rotate-180 ecl-button__icon"
                                focusable="false"
                                aria-hidden="true"
                                data-ecl-icon=""
                            >
                                <use xlinkHref="static/media/icons.e3d8f25c.svg#corner-arrow"></use>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

SelectComponent.propTypes = {
    label: PropTypes.string,
    required: PropTypes.bool,
    helperText: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            label: PropTypes.string.isRequired,
            disabled: PropTypes.bool,
        })
    ),
    optgroups: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            options: PropTypes.arrayOf(
                PropTypes.shape({
                    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                        .isRequired,
                    label: PropTypes.string.isRequired,
                    disabled: PropTypes.bool,
                })
            ).isRequired,
        })
    ),
    name: PropTypes.string,
    selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
};

export default SelectComponent;
