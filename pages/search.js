import { Component } from 'react'
import { Provider } from 'mobx-react'
import { initStore } from '../mobx/store'
import SearchBox from '../components/searchBox'

export default class Search extends Component {
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
      <section className="hero is-fullheight page">
        <div className="hero-body">
          <div className="container">
            <SearchBox store={this.store}/>
          </div>
        </div>
      </section>
    )
  }
}
