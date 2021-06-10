// Require the client library packages
// import {composeAPI, prepareTransfers, sendTrytes} from '@iota/core'
import iotaa from '@iota/core'
const {composeAPI, createPrepareTransfers, createSendTrytes} = iotaa;
import {asciiToTrytes} from '@iota/converter'

// Create a new instance of the IOTA API object
// Connect to a node
const iota = composeAPI({
provider: "https://explorer.iota.org/mainnet/transaction"
});

const depth = 3;
const minimumWeightMagnitude = 9;

const address =
'VOTOGPMKIUTXIKQBVDIUDXDOKOVYIKRYRYFAFHXSYRGUMYHQNQGYBUBGRV9CVZEPNOBGZOVZLRSRQQIIC';

const seed =
'OYVCKQZOPEFYDLAKOIGDAKKKGQYGERLVKGNPNMSILSARMQN9QYDENJDBSQDHAYUHFIMEP9ECZEKIJDY9X';

const message = JSON.stringify({"product_id": "3873473654629374",
"material":'cotton',
"size":'S',
"origin":'Guatemala'
});
const messageInTrytes = asciiToTrytes(message);

const transfers = [
    {
        value: 0,
        address: address,
        message: messageInTrytes
    }
    ];

    const createTransfers = createPrepareTransfers(iota)
    createTransfers(seed, transfers)
    .then(trytes => {
        const sendTrytes = createSendTrytes(iota)
        return sendTrytes(trytes, depth, minimumWeightMagnitude);
    })
    .then(bundle => {
        console.log(bundle[0].hash)
    })
    .catch(err => {
        console.error(err)
    });
