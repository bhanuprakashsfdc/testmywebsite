import React from 'react';
import useStore from '../store/store'; // Assuming you're using Zustand for state management
import './components.css';
function CountrySelector() {
    const { countries, selectedCountry, setSelectedCountry } = useStore(); // Access countries from the global state

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    if (!countries || countries.length === 0) {
        return <div>Loading countries...</div>;
    }

    return (
        <select onChange={handleCountryChange} className="country-selector">
            {countries.map(country => (
                <option key={country.code} value={country.code}>
                    {country.name}
                </option>
            ))}
        </select>
    );
}

export default CountrySelector;
