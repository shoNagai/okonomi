import ERC20 from './ERC20ABI.json'
import { uport } from './uport.js'
import settings from './settings.js'

export const TRANSACTION_REQUEST = 'TRANSACTION_REQUEST'
function userLoggedIn(data) {
  return {
    type: TRANSACTION_REQUEST,
    payload: data
  }
}

console.log(settings)

export function transactionRequest(data) {
  return function(dispatch, props) {
    const contractInstance = uport.contract(ERC20)
    const contract = contractInstance.at(settings.erc20Address)
    console.log(contract)
    contract.mintDigitalArt(data)
    
  }
}