import { observable, action } from 'mobx'
import { Router } from '../config/routes'
import { uport } from '../utils/uport'

export default class Store {
  @observable currentUser

  constructor() {
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
