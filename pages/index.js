import { Component } from 'react'
import { uport, web3 } from '../utils/uport'
import { readFile } from '../utils/post'
import { transactionRequest } from '../utils/action'


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
    console.log(readFile())
  }

  send() {
    transactionRequest("0xaad0bb0dFfaEF8C2b0C07Dc9Ba9603083E8bE1f5")
  }  

  render() {
    return (
      <section className="hero is-middle">
        <div className="hero-body">
          <div className="container">
            <button className="button is-primary" onClick={this.login}>
              Login
            </button>
            <input type="file" id="photo" onChange={this.read} />
            <input type="button" onClick={this.send} />
          </div>
        </div>
      </section>
    )
  }
}
