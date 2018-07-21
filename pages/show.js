import { Component } from 'react'
import { Provider } from 'mobx-react'
import { initStore } from '../mobx/store'

export default class Show extends Component {
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
      <Provider store={this.store}>
        <section className="hero page">
          <div className="hero-body">
            <div className="container">
              it's show
            </div>
          </div>
        </section>
      </Provider>
    )
  }
}
