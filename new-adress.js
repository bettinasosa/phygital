////////////////////////////////////////////////
// Generate an address
////////////////////////////////////////////////

const Iota = require('@iota/core');

// Connect to a node
const iota = Iota.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
});

// Define the security level of the address
const securityLevel = 2;

// The seed that will be used to generate an address  
const seed =
  'OYVCKQZOPEFYDLAKOIGDAKKKGQYGERLVKGNPNMSILSARMQN9QYDENJDBSQDHAYUHFIMEP9ECZEKIJDY9X';

  let index = 0;


  iota.getNewAddress(seed, { index: index, securityLevel: securityLevel, total: 2 })
  .then(address => {
      console.log('Your address is: ' + address);
  })
  .catch(err => {
      console.log(err)
  });