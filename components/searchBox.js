import { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('store') @observer
export default class SearchBox extends Component {
  render() {
    const store = this.props.store
    const options = store.selectableLine.map((line) => {
      return <option value={line} key={line}>{line}</option>
    })
    return (
      <div className="search-box">
        <h2 className="title">
          Hello, {store.currentUser}!
        </h2>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Station</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <div className="field">
                  <div className="control">
                    <input className="input" type="text" placeholder="ex. Shibuya" onChange={store.changeStation} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">From</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <div className="select">
                  <select value={store.search.fromLine} onChange={store.changeFromLine}>
                    {options}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">To</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <div className="select">
                  <select value={store.search.toLine} onChange={store.changeFromLine}>
                    {options}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
