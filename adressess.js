const Iota = require('@iota/core');

const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
    });
const address =
'QMMKGWEFJLLT9YABVQGUOVNUBI9XOREZUGKXKUQQUSEVKLLKBKBZWDQCNNMNYDXKDDUWLWILVZ9RBFSHXODKXXYKOW';

iota.getBalances([address])
  .then(({ balances }) => {
  console.log(balances)
  })
  .catch(err => {
  console.error(err)
  });
