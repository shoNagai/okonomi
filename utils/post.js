var Buffer = require('buffer/').Buffer
var ipfsAPI = require('ipfs-api')

var ipfs = ipfsAPI({ host: 'ipfs.infura.io', protocol: 'https' })

export function readFile(input) {
    var reader = new FileReader();
    reader.onloadend = function (event) {
        console.log(reader.result)
        var buf = buffer.Buffer(reader.result)
        ipfs2.add(buf, (err, result) => {
            imageHash = result[0].hash;
            var url = "https://ipfs.io/ipfs/" + imageHash;
            console.log(url);
        });
    }
    reader.readAsArrayBuffer(digitalArt.files[0]);
}
