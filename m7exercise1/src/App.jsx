import React, { useState, useEffect } from 'react';

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
        if (!response.ok) throw new Error("Unable to fetch data");
        const data = await response.json();
        setPrice(data.bitcoin[currency.toLowerCase()]);
      } catch (error) {
        setError(error.message);
        setPrice(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currency]);


  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));



  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>

  { loading && <p>Loading...</p> }
  { error && <p style={{ color: 'red' }}>Error: {error}</p> }
  {
    price !== null && !loading && !error && (
      <h4>
        1 Bitcoin = {price} {currency}
      </h4>
    )
  }
    </div >
    );
}

export default BitcoinRates;