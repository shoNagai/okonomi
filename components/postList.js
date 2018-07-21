import { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('store') @observer
export default class PostList extends Component {
  renderPosts() {
    const posts = this.props.store.posts
    if (posts.length != 0) {
      return posts.map((post) => {
        return (
          <div className="box">
            <div className="title is-4">
              <strong>{post.user}</strong>'s Route
            </div>
          </div>
        )
      })
    } else {
      return (
        <p>Let's Search! :)</p>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderPosts()}
      </div>
    )
  }
}
