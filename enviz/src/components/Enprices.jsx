import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import Modal from './Modal'; // Assuming you already have the modal component
import './Enprices.css'; // Optional: for styling if needed

const Enprices = ({ isOpen, onClose }) => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!isOpen) return; // Only fetch when the modal is open

        const fetchCountries = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/nrg_pc_202_c?format=JSON&geo=EU27_2020&geo=BE&geo=BG&geo=CZ&geo=DK&geo=DE&geo=EE&geo=IE&geo=EL&geo=ES&geo=FR&geo=HR&geo=IT&geo=LV&geo=LT&geo=LU&geo=HU&geo=NL&geo=AT&geo=PL&geo=PT&geo=RO&geo=SI&geo=SK&geo=SE&geo=LI&geo=UK&geo=BA&geo=MD&geo=MK&geo=GE&geo=AL&geo=RS&geo=TR&geo=UA&lang=en'
                );
                const data = await response.json();

                // Transform data for dropdown (assuming geo is the key for countries)
                const transformedCountries = Object.keys(data.dataset.dimension.geo.category.label).map((key) => ({
                    id: key,
                    name: data.dataset.dimension.geo.category.label[key],
                }));

                setCountries(transformedCountries);
            } catch (err) {
                setError('Failed to fetch data.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, [isOpen]);

    const handleSelectChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Energy Prices">
            <div className="enprices-modal-content">
                {loading ? (
                    <p>Loading countries...</p>
                ) : error ? (
                    <p className="error">{error}</p>
                ) : (
                    <>
                        <label htmlFor="country-select" className="enprices-label">
                            Select a country:
                        </label>
                        <select
                            id="country-select"
                            value={selectedCountry}
                            onChange={handleSelectChange}
                            className="enprices-select"
                        >
                            <option value="" disabled>
                                -- Choose a country --
                            </option>
                            {countries.map((country) => (
                                <option key={country.id} value={country.id}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </>
                )}
            </div>
        </Modal>
    );
};

Enprices.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Enprices;
