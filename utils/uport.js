import { Connect, SimpleSigner } from 'uport-connect'
import contractABI from './contractABI.json'

export const uport = new Connect('cuplist', {
  clientId: '2oepTPEPXguAmSftVKp5qq98E58ydDUnkfL',
  network: 'rinkeby',
  signer: SimpleSigner('523bb16bcdb713d26b83e67dc48108333467dd771cb07784a79d6bdd89f7a343')
})


const web3 = uport.getWeb3()
const contractAddress = "0x587543200d27c7e348ca27016c84f8A905b95089"

//This is for ro
const myContractABI = uport.contract(contractABI)
export const myContract = myContractABI.at(contractAddress)

//This is for call
const myContractABI2 = web3.eth.contract(contractABI)
export const myContract2 = myContractABI2.at(contractAddress)
