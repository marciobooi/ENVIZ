import { useEffect } from "react";

const SelectMultiple = () => {
    useEffect(() => {
        // Initialize the ECL components when the component is mounted
        if (window.ECL && typeof window.ECL.autoInit === "function") {
            window.ECL.autoInit();
        }
    }, []);

    return (
        <div
            className="ecl-form-group"
            role="application"
            data-ecl-auto-init="Select"
        >
            <label
                htmlFor="select-multiple-toggle"
                id="select-multiple-label"
                className="ecl-form-label ecl-form-label--hidden"
            >
                Select a country
                <span
                    className="ecl-form-label__required"
                    role="note"
                    aria-label="required"
                >
                    *
                </span>
            </label>
            <div className="ecl-help-block" id="select-multiple-helper">
                This is the helper text.
            </div>
            <div className="ecl-select__container ecl-select__container--m ecl-select__container--hidden">
                <select
                    className="ecl-select"
                    id="select-multiple"
                    name="country"
                    required
                    aria-describedby="select-multiple-helper"
                    data-ecl-auto-init="Select"
                    multiple
                    data-ecl-select-multiple
                    data-ecl-select-default="Choose options"
                    data-ecl-select-clear-all="Clear all"
                    data-ecl-select-close="Apply"
                    data-ecl-select-all="Select all"
                    data-ecl-select-search="Enter filter keyword"
                    data-ecl-select-no-results="No results found"
                    tabIndex="-1"
                >
                    <optgroup label="European countries">
                        <option value="1">Belgium</option>
                        <option value="2">France</option>
                        <option value="3" disabled>
                            Luxembourg
                        </option>
                        <option value="4">Germany</option>
                        <option value="5">Bulgaria</option>
                        <option value="6">Italy</option>
                        <option value="7">Romania</option>
                        <option value="8">Greece</option>
                        <option value="9">Hungary</option>
                        <option value="10">Portugal</option>
                    </optgroup>
                    <optgroup label="Non European countries">
                        <option value="11">China</option>
                    </optgroup>
                    <option value="12">standalone option</option>
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
            <div className="ecl-select__multiple">
                <div className="ecl-select__container ecl-select__container--m">
                    <div className="ecl-select-multiple-selections-counter">
                        <span></span>
                    </div>
                    <button
                        className="ecl-select ecl-select__multiple-toggle"
                        type="button"
                        aria-controls="select-multiple-dropdown"
                        id="select-multiple-toggle"
                        aria-expanded="false"
                        aria-labelledby="select-multiple-label"
                        aria-describedby="select-multiple-helper"
                    >
                        Choose options
                    </button>
                    <div className="ecl-select__icon">
                        <button
                            className="ecl-button ecl-button--ghost ecl-button--icon-only"
                            tabIndex="-1"
                        >
                            <span className="ecl-button__container">
                                <span className="ecl-button__label">Toggle dropdown</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    focusable="false"
                                    aria-hidden="true"
                                    className="ecl-icon ecl-icon--s ecl-icon--rotate-180"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="m45 30.12-2.73 2.82-18.24-18.36L5.73 33 3 30.18 24.03 9z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                {/* Additional markup truncated for brevity */}
            </div>
        </div>
    );
};

export default SelectMultiple;
