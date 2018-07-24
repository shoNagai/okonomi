import { Component } from 'react'
import { initStore } from '../mobx/store'
import Page from '../components/page'
import MyPageBox from '../components/myPageBox'

export default class MyPage extends Component {
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
      <Page store={this.store}>
        <section className="hero page">
          <div className="hero-body">
            <div className="container">
              <MyPageBox store={this.store} />
            </div>
          </div>
        </section>
      </Page>
    )
  }
}
