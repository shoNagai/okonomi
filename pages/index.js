import { Component } from 'react'
import { uport } from '../utils/uport'
import { readFile } from '../utils/post'

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

  read() {
    console.log(readFile('foobar'))
  }

  render() {
    return (
      <section className="hero is-middle">
        <div className="hero-body">
          <div className="container">
            <button className="button is-primary" onClick={this.login}>
              Login
            </button>
            <input type="file" value="Upload" onChange={this.read} />
          </div>
        </div>
      </section>
    )
  }
}
