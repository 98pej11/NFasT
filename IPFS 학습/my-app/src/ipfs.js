//ipfs.js
//using the infura.io node, otherwise ipfs requires you to run a daemon on your own computer/server. See IPFS.io docs
// const ipfsClient = require('ipfs-http-client');
// const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

const { create } = require('ipfs-http-client');
const ipfs = create({ host: 'j8a307.p.ssafy.io', port: '8082', protocol: 'http' });

//run with local daemon
// const ipfsApi = require('ipfs-api');
// const ipfs = new ipfsApi('localhost', '5001', {protocol: 'http'});

export default ipfs; 