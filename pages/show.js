import { Component } from 'react'
import { Provider } from 'mobx-react'
import { initStore } from '../mobx/store'
import { Link } from '../config/routes.js'

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

  renderPost() {
    const post = this.store.getPost(String(this.props.url.query.id))
    if (post) {
      return (
        <div className="post">
          <h2 className="title">
            {post.user}'s Routes
          </h2>
        </div>
      )
    } else {
      return <p>Not Found</p>
    }
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
              {this.renderPost()}
            </div>
          </div>
        </section>
      </Provider>
    )
  }
}
