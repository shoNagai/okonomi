import { Component } from 'react'
import { Link } from '../config/routes.js';

export default class Footer extends Component {
  render() {
    return(
      <footer className="footer">
        <div className="columns is-mobile">
          <div className="column">
            <span className="icon">
              <Link route="search">
                <a><i className="fa fa-search fa-2x"></i></a>
              </Link>
            </span>
          </div>
          <div className="column">
            <span className="icon">
              <Link route="post">
                <a><i className="fa fa-plus fa-2x"></i></a>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    )
  }
}
