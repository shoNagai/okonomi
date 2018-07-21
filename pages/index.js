import { Component } from 'react'
import Store from '../mobx/store'
import { uport } from '../utils/uport'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.store = new Store
  }

  login() {
    uport.requestCredentials({
      requested: ['name'],
      notification: true
    })
    .then(credential => {
      console.log(credential)
    })
  }

  render() {
    console.log(this.store)
    return (
      <section className="hero is-middle">
        <div className="hero-body">
          <div className="container">
            <button className="button is-primary" onClick={this.login}>
              Login
            </button>
          </div>
        </div>
      </section>
    )
  }
}
