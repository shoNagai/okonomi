import { Component } from 'react'
import { Provider } from 'mobx-react'
import { initStore } from '../mobx/store'
import { Link } from '../config/routes.js'
import PostView from '../components/postView'

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
              <p className="buttons">
                <Link route="search">
                  <button className="button">
                    <span className="icon">
                      <i className="fa fa-angle-left"></i>
                    </span>
                    <span>Return</span>
                  </button>
                </Link>
              </p>
              <PostView store={this.store} id={this.props.url.query.id} />
            </div>
          </div>
        </section>
      </Provider>
    )
  }
}
