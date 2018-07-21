import { observable, action } from 'mobx'
import { Router } from '../config/routes'
import { uport } from '../utils/uport'

let store = null

class Store {
  @observable currentUser

  constructor(isServer) {
    this.currentUser = 'unknown'
    this.login = this.login.bind(this)
  }

  @action
  login() {
    uport.requestCredentials({
      requested: ['name'],
      notification: true
    })
    .then(credential => {
      console.log(credential)
      this.currentUser = credential.name
      Router.pushRoute('search')
    })
  }
}

export function initStore (isServer) {
  if (isServer) {
    return new Store(isServer)
  } else {
    if (store === null) {
      store = new Store(isServer)
    }
    return store
  }
}
