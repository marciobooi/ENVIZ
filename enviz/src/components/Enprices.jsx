import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import Modal from './Modal'; // Assuming you already have the modal component
import SelectComponent from './Select';
import MultiSelect from './MultiSelect';
import RadioGroupComponent from './Radio';


const Enprices = ({ isOpen, onClose }) => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedMultiCountries, setSelectedMultiCountries] = useState([]);
    const [selectedRadioOption, setSelectedRadioOption] = useState('');


    // Sample data for the Select component
    const countryOptions = [
        { value: 'BE', label: 'Belgium' },
        { value: 'FR', label: 'France' },
        { value: 'DE', label: 'Germany' },
    ];

    // Sample data for the Radio component
    const radioOptions = [
        { value: 'electricity', label: 'Electricity' },
        { value: 'gas', label: 'Gas' },
    ];

    const handleCountryChange = (value) => {
        setSelectedCountry(value);
    };

    const handleMultiCountryChange = (values) => {
        setSelectedMultiCountries(values);
    };

    const handleRadioChange = (value) => {
        setSelectedRadioOption(value);
    };

    const handleSubmit = () => {
        // Handle form submission
        console.log({
            selectedCountry,
            selectedMultiCountries,
            selectedRadioOption,
        });
        onClose();
    };

    // Create the modal content
    const modalContent = (
        <div className="enprices-form">
            <div className="form-section">
                <SelectComponent
                    label="Select Country"
                    options={countryOptions}
                    selectedValue={selectedCountry}
                    onChange={handleCountryChange}
                    helperText="Please select a single country"
                />
            </div>

            <div className="form-section">
                <MultiSelect onChange={handleMultiCountryChange} />
            </div>

            <div className="form-section">
                <RadioGroupComponent
                    label="Select Energy Type"
                    options={radioOptions}
                    selectedValue={selectedRadioOption}
                    onChange={handleRadioChange}
                    helperText="Choose between electricity or gas"
                />
            </div>
        </div>
    );

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            modalTitle="Energy Prices Configuration"
            bodyContent={modalContent}
        />
    );
};

Enprices.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Enprices;
