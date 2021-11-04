import { keyStores, Near, WalletConnection } from "near-api-js";
// import BN from "bn.js";

export const CONTRACT_ID = "nearuni.testnet";
// const gas = new BN("70000000000000");

export const near = new Near({
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
  });

  export const wallet = new WalletConnection(near, "ncd");

  // -----------------------------------------------------------------------------------
  // view functions
  // -----------------------------------------------------------------------------------

export const getTotal = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "get_total");
};
export const getStorage = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "get_storage");
};
