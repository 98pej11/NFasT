// // web3.js
// // //overrides metamask v0.2 for our 1.0 version
// // 1.0 lets us use async and await instead of promises

// import Web3 from "web3";
// // overrides metamask v0.2 for our v 1.0
// const web3 = new Web3(window.web3.currentProvider);

// export default web3;

import Web3 from "web3";

// eslint-disable-next-line import/no-mutable-exports
let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask.
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/YOUR_INFURA_API_KEY"
  );
  web3 = new Web3(provider);
}

export default web3;
