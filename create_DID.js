const identity = require('@iota/identity-wasm/node')

// Generate a new KeyPair
const key = new identity.KeyPair(identity.KeyType.Ed25519)

// Create a new DID Document with the KeyPair as the default authentication method
const doc = identity.Document.fromKeyPair(key)

// Sign the DID Document with the sceret key
doc.sign(key)

const message = 
// Publish the DID Document to the IOTA Tangle
identity.publish(doc.toJSON(), { node: "https://nodes.thetangle.org:443" })
  .then((message) => {
    console.log("Tangle Message Id: ", message)
    console.log("Tangle Message Url", `https://explorer.iota.org/mainnet/transaction/${message}`)
  }).catch((error) => {
    console.error("Error: ", error)
  })