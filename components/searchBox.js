import { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('store') @observer
export default class SearchBox extends Component {
  render() {
    const store = this.props.store
    return (
      <div>
        Hello, {store.currentUser}
      </div>
    )
  }
}
