// Require the client library packages
const Iota = require('@iota/core');
const Converter = require('@iota/converter');

// Create a new instance of the IOTA API object
// Use the `provider` field to specify which node to connect to
const iota = Iota.composeAPI({
provider: 'https://nodes.devnet.iota.org:443'
});

// Call the `getNodeInfo()` method for information about the IOTA node and the Tangle
iota.getNodeInfo()
// Convert the returned object to JSON to make the output more readable
.then(info => console.log(JSON.stringify(info, null, 1)))
.catch(err => {
    // Catch any errors
    console.log(err);
});

const seed =
'OYVCKQZOPEFYDLAKOIGDAKKKGQYGERLVKGNPNMSILSARMQN9QYDENJDBSQDHAYUHFIMEP9ECZEKIJDY9X';

const receivingAddress = "VOTOGPMKIUTXIKQBVDIUDXDOKOVYIKRYRYFAFHXSYRGUMYHQNQGYBUBGRV9CVZEPNOBGZOVZLRSRQQIIC"

const transfers = [
    {
      value: 1000,
      address: receivingAddress
    }
    ]
    const bundle = await iota.prepareTransfers(seed, transfers);

    const depth = 3;
const minimumWeightMagnitude = 9;
   
const response = await iota.sendTrytes(bundle, depth, minimumWeightMagnitude);

console.log('Bundle sent');
response.map(tx => console.log(tx));