// Require the client library packages
const Iota = require('@iota/core');

// Create a new instance of the IOTA API object
// Use the `provider` field to specify which node to connect to
const iota = Iota.composeAPI({
provider: 'https://nodes.devnet.iota.org:443'
});

const depth = 3;
const minimumWeightMagnitude = 9;

const address =
'VOTOGPMKIUTXIKQBVDIUDXDOKOVYIKRYRYFAFHXSYRGUMYHQNQGYBUBGRV9CVZEPNOBGZOVZLRSRQQIIC';

const seed =
'OYVCKQZOPEFYDLAKOIGDAKKKGQYGERLVKGNPNMSILSARMQN9QYDENJDBSQDHAYUHFIMEP9ECZEKIJDY9X';

const message = JSON.stringify({"message": "Hello world"});
const messageInTrytes = Converter.asciiToTrytes(message);

const transfers = [
    {
        value: 0,
        address: address,
        message: messageInTrytes
    }
    ];

    Iota.prepareTransfers(seed, transfers)
    .then(trytes => {
        return iota.sendTrytes(trytes, depth, minimumWeightMagnitude);
    })
    .then(bundle => {
        console.log(bundle[0].hash)
    })
    .catch(err => {
        console.error(err)
    });