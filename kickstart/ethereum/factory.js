import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x865758acEFd32B10fa3330296b88766cc5cFa1D8'
)

export default instance;