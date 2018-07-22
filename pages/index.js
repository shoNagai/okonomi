import { Component } from 'react'
import { initStore } from '../mobx/store'
import Page from '../components/page'

export default class Index extends Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
    return { isServer }
  }

  constructor (props) {
    super(props)
    this.store = initStore(props.isServer)
  }

  render() {
    return (
      <Page store={this.store}>
        <section className="hero page">
          <div className="hero-body">
            <div className="container">
              <button className="button is-primary" onClick={this.store.login}>
                Login
              </button>
            </div>
          </div>
        </section>
      </Page>
    )
  }
}
