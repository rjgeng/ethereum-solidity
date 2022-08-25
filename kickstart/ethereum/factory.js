import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xe3f8884b2fa6e07dA7EF9dEbb7959Fd814e57098'
)

export default instance;