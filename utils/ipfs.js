export const Buffer = require('buffer').Buffer

const ipfsAPI = require('ipfs-api')
export const ipfs = ipfsAPI({
  host: 'ipfs.infura.io', protocol: 'https'
})
