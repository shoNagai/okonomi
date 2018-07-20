import { Component } from 'react'

export default class Header extends Component {
  render() {
    return(
      <div className="header">
        <nav className="level">
          <p className="level-item has-text-centered">
            <a className="title is-4 logo">okonomi</a>
          </p>
        </nav>
      </div>
    )
  }
}
