import { Component } from 'react'
import SearchBox from '../components/searchBox'

export default class Search extends Component {
  render() {
    return (
      <section className="hero is-middle">
        <div className="hero-ody">
          <div className="container">
            <SearchBox store={this.props.store}/>
          </div>
        </div>
      </section>
    )
  }
}
