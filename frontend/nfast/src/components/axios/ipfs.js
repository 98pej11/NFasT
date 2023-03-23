// ipfs.js
// using the infura.io node, otherwise ipfs requires you to run a daemon on your own computer/server. See IPFS.io docs
// const ipfsClient = require('ipfs-http-client');
// const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
// import client from "ipfs-http-client/dist/src";
const { create } = require("ipfs-http-client");

const ipfs = create({
  host: "j8a307.p.ssafy.io/api/v0",
  port: "",
  protocol: "http",
});

// run with local daemon
// const ipfsApi = require('ipfs-api');
// const ipfs = new ipfsApi('localhost', '5001', {protocol: 'http'});

export default ipfs;
