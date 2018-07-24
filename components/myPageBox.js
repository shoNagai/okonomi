import { Component } from 'react'
import contractABI from '../utils/contractABI.json'
import { Buffer, ipfs } from '../utils/ipfs'
import { myContract } from '../utils/uport'
import { observer, inject } from 'mobx-react'

@inject('store') @observer
export default class MyPageBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    const { store } = this.props
    return(
      <div className="post-box">
        
      </div>
    )
  }
}
