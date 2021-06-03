import * as identity from "@iota/identity-wasm/web";

identity.init().then(() => {
  const key = new identity.KeyPair(identity.KeyType.Ed25519)
  const doc = identity.Document.fromKeyPair(key)
  console.log("Key Pair", key)
  console.log("DID Document: ", doc)
});

// or

(async () => {
  await identity.init()
  const key = new identity.KeyPair(identity.KeyType.Ed25519)
  const doc = identity.Document.fromKeyPair(key)
  console.log("Key Pair", key)
  console.log("DID Document: ", doc)
})()

// Default path is "identity_wasm_bg.wasm", but you can override it like this
await identity.init("./static/identity_wasm_bg.wasm");