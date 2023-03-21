import { useParams } from 'react-router-dom';

function Price() {
  const params = useParams();
  
  const apiKey = '452A8E3C-A1B5-4300-B4CB-A2C726563128';
  const symbol = params.symbol;
  
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
  console.log(url);

  return <h1>Price</h1>;
}

export default Price;
