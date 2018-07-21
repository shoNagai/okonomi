import { Component } from 'react'
import Store from '../mobx/store'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.store = new Store
  }

  render() {
    console.log(this.store)
    return (
      <section className="hero is-middle">
        <div className="hero-body">
          <div className="container">
            <button className="button is-primary" onClick={this.store.login}>
              Login
            </button>
          </div>
        </div>
      </section>
    )
  }
}
