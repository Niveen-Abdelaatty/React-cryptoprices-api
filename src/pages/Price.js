import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import axios from 'axios';

function Price() {
  const params = useParams();

  const apiKey = '2FFA9750-D2ED-40B9-ACBD-D1C027E35041';
  const symbol = params.symbol;

  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const getCoin = async () => {
    try {
      const res = await axios.get(url);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCoin();
  }, []);

  return <h1>Price</h1>;
}

export default Price;
