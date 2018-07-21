import { observable } from 'mobx'

export default class Store {
  @observable currentUser = undefined
}
