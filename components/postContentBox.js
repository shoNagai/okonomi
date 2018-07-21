import { Component } from 'react'
import { transactionRequest } from '../utils/action'
import ERC20 from '../utils/ERC20ABI.json'
import { uport } from '../utils/uport'
import settings from '../utils/settings'

var Buffer = require('buffer').Buffer
var ipfsAPI = require('ipfs-api')
var ipfs = ipfsAPI({ host: 'ipfs.infura.io', protocol: 'https' })

export default class PostContentBox extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      imageSrc: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
  }

  handleChangeFile (e) {
    
    var files = e.target.files;
    var imageUrl = URL.createObjectURL(files[0]);
    this.setState({imageSrc: imageUrl});

  }

  handleUploadImage(ev) {
    ev.preventDefault();

    var reader = new FileReader();
    reader.onloadend = function (event) {
        var buf = Buffer.from(reader.result)    
        console.log("save ipfs...", buf);    
        ipfs.add(buf, (err, result) => {
            var imageHash = result[0].hash;
            var url = "https://ipfs.io/ipfs/" + imageHash;
            console.log("ipfs result : " + url);
            
            console.log("load contract...")
            const contractInstance = uport.contract(ERC20)
            const contract = contractInstance.at(settings.erc20Address)
            console.log("call contract...", contract);
            contract.mintDigitalArt(imageHash)
        }); 
    }
    reader.readAsArrayBuffer(this.uploadInput.files[0]);
  }

  render() {
    const store = this.props.store
    
    return(
      <div className="post-box">
        <div>
          <div>
            <input ref={(ref) => { this.uploadInput = ref; }} type="file" onChange={this.handleChangeFile}/>
            <img src={this.state.imageSrc} />
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <div className="field">
                  <div className="control">
                    <input ref={(ref) => { this.fileName = ref; }} className="input" type="text" placeholder="input comment..." />
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
