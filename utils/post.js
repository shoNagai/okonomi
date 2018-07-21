var Buffer = require('buffer/').Buffer
var ipfsAPI = require('ipfs-api')

var ipfs = ipfsAPI({ host: 'ipfs.infura.io', protocol: 'https' })


//@dev  
//
export function readFile() {
    var photo = document.getElementById("photo");
    var reader = new FileReader();
    reader.onloadend = function (event) {
        var buf = Buffer.from(reader.result)        
        ipfs.add(buf, (err, result) => {
            var imageHash = result[0].hash;
            var url = "https://ipfs.io/ipfs/" + imageHash;
            console.log(url);
        }); 
    }
    reader.readAsArrayBuffer(photo.files[0]);
}
