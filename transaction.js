//const Iota = require('@iota/core');
import {composeAPI} from '@iota/core'
//const Converter = require('@iota/converter');
import {asciiToTrytes} from '@iota/converter'

// Connect to a node
const iota = composeAPI({
  provider: 'https://nodes.devnet.iota.org:443'
});

// const sendTransaction = function (msg) {
  const depth = 3;
  const minimumWeightMagnitude = 9;

  // Define a seed and an address.
  const address =
  'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D';
  const seed =
  'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';

  // Upload garment data.
  // This message must include only ASCII characters.
  const message = JSON.stringify({"product_id": "3873473654629374",
  "material":'cotton',
  "size":'S',
  "origin":'Guatemala'
  });

// Convert the message to trytes
  const messageInTrytes = asciiToTrytes(message);

// Define a zero-value transaction object
// that sends the message to the address
  const transfers = [
  {
    value: 0,
    address: address,
    message: messageInTrytes
  }
  ];
console.log("1")
// Create a bundle from the `transfers` array
// and send the transaction to the node
  iota
  .prepareTransfers(seed, transfers)
  .then(trytes => {
    return iota.sendTrytes(trytes, depth, minimumWeightMagnitude);
  })
  .then(bundle => {
    console.log(bundle[0].hash);
  })
  .catch(err => {
    console.error(err)
  });

// };

// export { sendTransaction };