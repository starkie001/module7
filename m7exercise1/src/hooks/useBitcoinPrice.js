import {useState, useEffect} from 'react';

export function useBitcoinPrice(currency) {
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

    if (currency) {
      fetchData();
    }
  }, [currency]);

  return { price, loading, error };
}