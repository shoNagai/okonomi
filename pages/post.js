import { Component } from 'react'
import { initStore } from '../mobx/store'
import PostContentBox from '../components/postContentBox'

export default class Post extends Component {
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
    return(
      <section className="hero page">
        <div className="hero-body">
          <div className="container">
            <PostContentBox store={this.store} />
          </div>
        </div>
      </section>
    )
  }
}