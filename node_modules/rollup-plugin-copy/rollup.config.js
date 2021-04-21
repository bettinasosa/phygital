// Include the copy plugin
import copy from 'rollup-plugin-copy'

// Add the copy plugin to the `plugins` array of your rollup config:
copy({
  targets: [{
    src: 'node_modules/@iota/identity-wasm/web/identity_wasm_bg.wasm',
    dest: 'public',
    rename: 'identity_wasm_bg.wasm'
  }]
})