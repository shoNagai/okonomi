import { Component } from 'react'
import { transactionRequest } from '../utils/action'

var Buffer = require('buffer/').Buffer
var ipfsAPI = require('ipfs-api')
var ipfs = ipfsAPI({ host: 'ipfs.infura.io', protocol: 'https' })

export default class PostContentList extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      imageSrc: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
  }

  state = {
    imageSrc: '',
  };

  handleChangeFile (e) {
    
    var files = e.target.files;
    var imageUrl = URL.createObjectURL(files[0]);
    this.setState({imageSrc: imageUrl});

  }

  async handleUploadImage(ev) {
    ev.preventDefault();

    var reader = new FileReader();
    reader.onloadend = function (event) {
        var buf = Buffer.from(reader.result)        
        ipfs.add(buf, (err, result) => {
            var imageHash = result[0].hash;
            var url = "https://ipfs.io/ipfs/" + imageHash;
            console.log(url);
            transactionRequest(imageHash);
        }); 
    }
    reader.readAsArrayBuffer(this.uploadInput.files[0]);
  }

  render() {
    return(
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" onChange={this.handleChangeFile}/>
          <img src={this.state.imageSrc} />
        </div>
        <div>
          <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="input comment..." />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
      </form>
    )
  }
}
