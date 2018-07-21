import { Component } from 'react'

export default class PostContentList extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      imageSrc: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    var files = this.uploadInput.files;
    var imageUrl = URL.createObjectURL(files[0]);
    this.setState({imageSrc: imageUrl});

    console.log('file', this.uploadInput.files[0]);
    console.log('filename', this.fileName.value);

    // TODO change to ipfs
    // fetch('http://localhost:8000/upload', {
    //   method: 'POST',
    //   body: data,
    // }).then((response) => {
    //   response.json().then((body) => {
    //     this.setState({ imageURL: `http://localhost:8000/${body.file}` });
    //   });
    // });
  }

  render() {
    return(
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
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
