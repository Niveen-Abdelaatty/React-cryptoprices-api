import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';

function Price() {
  const [coin, setCoin] = useState(null);

  const params = useParams();

  const apiKey = '2FFA9750-D2ED-40B9-ACBD-D1C027E35041';
  const symbol = params.symbol;

  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const getCoin = async () => {
    try {
      const res = await axios.get(url);
      setCoin(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCoin();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>$ {coin.rate}</h2>
      </div>
    );
  };
  const loading = () => <h1>Loading...</h1>;

  return coin && coin.rate ? loaded() : loading();
}

export default Price;
