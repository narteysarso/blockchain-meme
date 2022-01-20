import Web3 from 'web3';
import Meme from '../abis/Meme.json';


export async function getWeb3(){
    
    const web3 = connectWeb3();
    const abi = Meme.abi;
    const memeNetwork = Meme.networks[await getNetworkId(web3)];
    const address = memeNetwork.address;
    const contract = getContract(web3, abi, address);


    if(!web3){
        throw Error('Metamusk is required');
    }

    return Object.freeze({
        account: async () => await getAccount(web3),
        networkId: async () => await getNetworkId(web3),
        store: async (account, data) => await storeData(contract, account, data),
        retrieve: async (account, idx) => await retrieveData(contract, account, idx ) ,
    });
}

const getAccount = async (web3) => {
    const accounts = await web3.eth.getAccounts();
   return accounts[0];
}

const getNetworkId = async (web3) => {
    return await web3.eth.net.getId()
}

const getContract = (web3, abi, address) => {
    return new web3.eth.Contract(abi, address);
}

const storeData = async (contract, address, data) => {
    return await contract.methods.store(address, data).send({
        from: address,
    });
}

const retrieveData = async (contract, address, idx) => {
    if(!Web3.utils.isAddress){
        throw Error('Not a valid address')
    }
    return await contract.methods.retrieve(address, idx).call();
}
function connectWeb3 () {
    const {ethereum, web3} = window;

    if(ethereum){
        ethereum.enable();
        return new Web3(ethereum) 
    }

    if(web3){
        return new Web3(web3.currentProvider);
    }

    throw Error("Metamusk is required");
}