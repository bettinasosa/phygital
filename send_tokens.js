const Iota = require('@iota/core');
const Converter = require('@iota/converter');

const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
    });
    const depth = 3;
    const minimumWeightMagnitude = 9;
    const seed =
    'YYGYTA9BBGFUJIJHSOVVFVHQIFTSKUXTLQXQDPWIALADNKZFTIVGUPLNSZGTYW9SETIKIVDFTDAWCBTCX';

// Create a wrapping function so you can use async/await
const main = async () => {

    // Define an address to which to send IOTA tokens 
    const receivingAddress = "QMMKGWEFJLLT9YABVQGUOVNUBI9XOREZUGKXKUQQUSEVKLLKBKBZWDQCNNMNYDXKDDUWLWILVZ9RBFSHXODKXXYKOW";
  
    // Define an input transaction object
    // that sends 1 Ki to your new address
    const transfers = [
      {
        value: 1,
        address: receivingAddress
      }
    ];
  
    console.log('Sending 1 i to ' + receivingAddress);
  
    try {
      // Construct the bundle and sign your input transactions
      const trytes = await iota.prepareTransfers(seed, transfers);
      // Send the transactions to the node
      const response = await iota.sendTrytes(trytes, depth, minimumWeightMagnitude);
  
      console.log('Bundle sent');
      response.map(tx => console.log(tx));
    } catch (error) {
      console.log(error);
    }
  }
  
  main();