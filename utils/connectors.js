import { Connect, SimpleSigner } from 'uport-connect'

export let uport = new Connect('okonomi', {
  clientId: '2oepTPEPXguAmSftVKp5qq98E58ydDUnkfL',
  network: 'rinkeby',
  signer: SimpleSigner('523bb16bcdb713d26b83e67dc48108333467dd771cb07784a79d6bdd89f7a343')
})

export const web3 = uport.getWeb3()