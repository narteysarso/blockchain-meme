import {create} from "ipfs-http-client";

const ipfs = create({host: process.env.REACT_APP_IPFS_APP_URL, port: 5001, protocol: 'https'});

export function AddToIPFS(data, callback = () => {}){

    if(!data){
        throw Error('No data provided');
    }

    ipfs.add(data, callback);
}