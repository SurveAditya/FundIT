import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x6dC79B68C4d78962c058ff308136c9297dAADdE6"
);

export default instance;
