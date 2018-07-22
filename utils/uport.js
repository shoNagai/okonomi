import { Connect, SimpleSigner } from 'uport-connect'
import contractABI from './contractABI.json'

export const uport = new Connect('cuplist', {
  clientId: '2oepTPEPXguAmSftVKp5qq98E58ydDUnkfL',
  network: 'rinkeby',
  signer: SimpleSigner('523bb16bcdb713d26b83e67dc48108333467dd771cb07784a79d6bdd89f7a343')
})


export const web3 = uport.getWeb3()
const contractAddress = "0xf974E6c0ee60f61de3A0D181147c019203E28Eaf"

//This is for ro
export const myContractABI = uport.contract(contractABI)
export const myContract = myContractABI.at(contractAddress)

//This is for call
export const myContractABI2 = web3.eth.contract(contractABI)
export const myContract2 = myContractABI2.at(contractAddress)
