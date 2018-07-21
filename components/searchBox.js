import { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('store') @observer
export default class SearchBox extends Component {
  render() {
    const store = this.props.store
    return (
      <div>
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
                    <input className="input" type="text" placeholder="ex. Shibuya" />
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
                <div class="select">
                  <select>
                    <option>Select Line</option>
                    <option>JR Yamanote</option>
                    <option>JR Saikyo</option>
                    <option>JR Shonan Shinjuku</option>
                    <option>Metro Ginza</option>
                    <option>Metro Hanzomon</option>
                    <option>Metro Fukutoshin</option>
                    <option>Keio Inokashira</option>
                    <option>Tokyu Toyoko</option>
                    <option>Tokyu Denentoshi</option>
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
                <div class="select">
                  <select>
                    <option>Select Line</option>
                    <option>JR Yamanote</option>
                    <option>JR Saikyo</option>
                    <option>JR Shonan Shinjuku</option>
                    <option>Metro Ginza</option>
                    <option>Metro Hanzomon</option>
                    <option>Metro Fukutoshin</option>
                    <option>Keio Inokashira</option>
                    <option>Tokyu Toyoko</option>
                    <option>Tokyu Denentoshi</option>
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
