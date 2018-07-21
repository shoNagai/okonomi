import { Component } from 'react'
import { Link } from '../config/routes.js';

export default class Footer extends Component {
  render() {
    return(
      <footer class="footer">
        <nav class="level">
          <Link route="postList">
            <a>postList</a>
          </Link>
          <Link route="post">
            <a>post</a>
          </Link>
        </nav>
      </footer>
    )
  }
}