import { Component } from 'react'
import { Link } from '../config/routes.js';

export default class Footer extends Component {
  render() {
    return(
      <footer className="footer">
        <div className="columns is-mobile">
          <div className="column">
            <Link route="search">
              <span className="icon">
                <a><i className="fa fa-search fa-2x"></i></a>
              </span>
            </Link>
          </div>
          <div className="column">
            <Link route="post">
              <span className="icon">
                <a><i className="fa fa-plus fa-2x"></i></a>
              </span>
            </Link>
          </div>
        </div>
      </footer>
    )
  }
}
