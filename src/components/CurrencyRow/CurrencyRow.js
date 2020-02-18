import React from 'react';

const CurrencyRow = ({ currencyOptions, selectedCurrency, onChangeCurrency }) => {
    return (
        <div>
            <input className="input" type="number" />
            <select value={selectedCurrency} onChange={ e => onChangeCurrency(e.target.value) }>
                {currencyOptions.map((option, index) => {
                   return <option key={index} value={option}>{option}</option>
                })}
            </select>
        </div>
    );
};

export default CurrencyRow;