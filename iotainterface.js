import Iota from "@iota/core";
import Converter from "@iota/converter";

const Iota = require('@iota/core');
const Converter = require('@iota/converter');

const iota = Iota.composeAPI({
    provider: "https://nodes.devnet.iota.org:443",
});

const sendTransaction = function (msg) {
    // returns a promise of the transaction bundle for a successfully recorded transaction
    const depth = 3;
    const minimumWeightMagnitude = 9;


    const address =
    'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D';

    const seed =
    'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';

    const message = JSON.stringify({"message": "Hello world"});
    const messageInTrytes = Converter.asciiToTrytes(message);
    
    const transfers = [
    {
        value: 0,
        address: address,
        message: messageInTrytes
    }
    ];

    IOTA.prepareTransfers(seed, transfers)
    .then(trytes => {
        return iota.sendTrytes(trytes, depth, minimumWeightMagnitude);
    })
    .then(bundle => {
        console.log(bundle[0].hash)
    })
    .catch(err => {
        console.error(err)
    });
};

export { sendTransaction };