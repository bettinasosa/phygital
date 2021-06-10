//const Iota = require('@iota/core');
import {composeAPI} from '@iota/core'
//const Converter = require('@iota/converter');
import {asciiToTrytes} from '@iota/converter'

// Connect to a node
const iota = composeAPI({
  provider: 'https://nodes.devnet.iota.org:443'
});

const depth = 3;
const minimumWeightMagnitude = 9;

// Define a seed and an address.
const address =
  'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D';
const seed =
  'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';

// Define a message to send.
// This message must include only ASCII characters.
const message = JSON.stringify({"message": "Hello world"});

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


// const result = await fetch("https://chrysalis-nodes.iota.org:443/api/v1/messages", {
// 	method: "POST",
// 	body: {
// 		"payload": {
// 			"type": 2,
// 			"index": "62657474696e61736f7361",
// 			"data": "7b22636f756e74223a312c2274696d65223a22323032312d30312d32302031323a30303a3030222c226d657373616765223a2253656e736f72204f6b6179227d",
// 		},
// 	}
// })
// const json = await result.json()
// console.log(json)