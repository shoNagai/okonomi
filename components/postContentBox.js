import { Component } from 'react'
import contractABI from '../utils/contractABI.json'
import { uport } from '../utils/uport'
import settings from '../utils/settings'
import { observer, inject } from 'mobx-react'

let Buffer = require('buffer').Buffer
let ipfsAPI = require('ipfs-api')
let ipfs = ipfsAPI({ host: 'ipfs.infura.io', protocol: 'https' })

@inject('store') @observer
export default class PostContentBox extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      imageSrc1: '',
      imageSrc2: '',
      imageSrc3: '',
      imageSrc4: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.handleChangeFile1 = this.handleChangeFile1.bind(this);
  }

  handleChangeFile1 (e) {
    
    let files = e.target.files;
    let imageUrl = URL.createObjectURL(files[0]);
    this.setState({imageSrc1: imageUrl});

  }

  handleUploadImage(ev) {
    ev.preventDefault();

    let photos = [];
    let comments = [];
    // comments.push(this.commnent1.value);
    let comment = this.commnent1.value;
    let station = this.station.value;
    let fromLine = this.fromLine.value;
    let toLine = this.toLine.value;
    let userName = this.props.store.currentUser;

    let reader = new FileReader();
    reader.onloadend = function (event) {
      let buf = Buffer.from(reader.result)    
      console.log("save ipfs...", buf);    
      ipfs.add(buf, (err, result) => {
        let imageHash = result[0].hash;
        let url = "https://ipfs.io/ipfs/" + imageHash;
        console.log("ipfs result : " + url);

        photos.push(imageHash);

        console.log("load contract...")
        const contractInstance = uport.contract(contractABI)
        const contract = contractInstance.at(settings.contractAddress)
        console.log("call contract...", contract);
        contract.addPost(comment, imageHash, station, fromLine, toLine, userName)
      }); 
    }
    reader.readAsArrayBuffer(this.uploadInput1.files[0]);
  }

  render() {
    const { store } = this.props
    const options = store.selectableLine.map((line) => {
      return <option value={line} key={line}>{line}</option>
    })
    return(
      <div className="post-box">
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Station</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <div className="field">
                  <div className="control">
                    <input className="input" type="text" placeholder="ex. Shibuya" ref={(ref) => { this.station = ref; }} onChange={store.changeStation} />
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
                  <select ref={(ref) => { this.fromLine = ref; }} >
                    <option>Select Line</option>
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
                  <select ref={(ref) => { this.toLine = ref; }}>
                    <option>Select Line</option>
                    {options}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <input ref={(ref) => { this.uploadInput1 = ref; }} type="file" onChange={this.handleChangeFile1}/>
            <img src={this.state.imageSrc1} />
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <div className="field">
                  <div className="control">
                    <input ref={(ref) => { this.commnent1 = ref; }} className="input" type="text" placeholder="input comment..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <input ref={(ref) => { this.uploadInput2 = ref; }} type="file" onChange={this.handleChangeFile2}/>
            <img src={this.state.imageSrc2} />
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <div className="field">
                  <div className="control">
                    <input ref={(ref) => { this.commnent2 = ref; }} className="input" type="text" placeholder="input comment..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <input ref={(ref) => { this.uploadInput3 = ref; }} type="file" onChange={this.handleChangeFile3}/>
            <img src={this.state.imageSrc3} />
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <div className="field">
                  <div className="control">
                    <input ref={(ref) => { this.commnent3 = ref; }} className="input" type="text" placeholder="input comment..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <input ref={(ref) => { this.uploadInput4 = ref; }} type="file" onChange={this.handleChangeFile4}/>
            <img src={this.state.imageSrc4} />
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <div className="field">
                  <div className="control">
                    <input ref={(ref) => { this.commnent4 = ref; }} className="input" type="text" placeholder="input comment..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div>
          <a className="button is-primary" onClick={this.handleUploadImage}>Save</a>
        </div>
      </div>
    )
  }
}
