import { Component } from 'react'
import { uport } from '../utils/uport'

export default class Index extends Component {
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
