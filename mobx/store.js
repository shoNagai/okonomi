import { observable, action } from 'mobx'
import { Router } from '../config/routes'
import { uport } from '../utils/uport'

let store = null

class Store {
  @observable currentUser
  @observable search
  @observable selectableLine
  @observable posts

  constructor(isServer) {
    this.currentUser = 'unknown'
    this.search = {
      station: undefined,
      fromLine: undefined,
      toLine: undefined
    }
    this.selectableLine = []
    this.posts = []

    this.login = this.login.bind(this)
    this.changeStation = this.changeStation.bind(this)
    this.changeFromLine = this.changeFromLine.bind(this)
    this.changeToLine = this.changeToLine.bind(this)
    this.checkSeachInputCompleted = this.checkSeachInputCompleted.bind(this)
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

  @action
  changeStation(e) {
    if (e.target.value == 'Shibuya') {
      this.search.station = e.target.value
      this.selectableLine = [
        "JR Yamanote",
        "JR Saikyo",
        "JR Shonan Shinjuku",
        "Metro Ginza",
        "Metro Hanzomon",
        "Metro Fukutoshin",
        "Keio Inokashira",
        "Tokyu Toyoko",
        "Tokyu Denentoshi"
      ]
      this.checkSeachInputCompleted()
    }
  }

  @action
  changeFromLine(e) {
    this.search.fromLine = e.target.value
    this.checkSeachInputCompleted()
  }

  @action
  changeToLine(e) {
    this.search.toLine = e.target.value
    this.checkSeachInputCompleted()
  }

  @action
  checkSeachInputCompleted() {
    console.log(this.search.station)
    console.log(this.search.fromLine)
    console.log(this.search.toLine)
    if (this.search.station == 'Shibuya'
      && this.search.fromLine == 'JR Yamanote'
      && this.search.toLine == 'Keio Inokashira') {
      this.posts = [
        { user: 'Nagai', like: 10, unlike: 1 },
        { user: 'Yuka', like: 7, unlike: 1 },
        { user: 'Miki', like: 3, unlike: 1 },
        { user: 'Oki', like: 1, unlike: 2 }
      ]
    }
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
