import React, { useState } from 'react';
import { useBitcoinPrice } from '../hooks/useBitcoinPrice.js';
import Emoji from '../components/Emoji';
import { MoodProvider } from '../context/MoodContext.jsx';

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { price, loading, error } = useBitcoinPrice(currency);

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {currencies.map((curr) => (
            <option value={curr} key={curr}>
              {curr}
            </option>
          ))}
        </select>
      </label>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {price !== null && !loading && !error && (
        <h4>
          1 Bitcoin = {price} {currency}
        </h4>
      )}
    <MoodProvider>
        <Emoji />
    </MoodProvider>
    </div>

  );
}

export default BitcoinRates;