import { observable, action } from 'mobx'
import { uport } from '../utils/uport'

export default class Store {
  @observable currentUser = undefined

  @action
  login() {
    uport.requestCredentials({
      requested: ['name'],
      notification: true
    })
    .then(credential => {
      console.log(credential)
      this.currentUser = credential
    })
  }
}
