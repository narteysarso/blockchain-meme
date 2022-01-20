import Web3 from 'web3';

export function getWallet(){
    const {ethereum, web3} = window;
    try {
        if(ethereum){
            ethereum.enable();
            return new Web3(ethereum);
        }

        if(web3){
            return ethereum(web3.currentProvider);
        }

        throw Error("Metamusk is required");

    } catch (error) {
        alert(error.message);   
    }

    return null;
}