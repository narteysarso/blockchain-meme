import { createContext, useState} from "react";
import { useIPFS } from "../hooks/useIPFS";
import { useAccount, useRetrieve, useStore } from "../hooks/useWeb3";

export const DappContext = new createContext();


export function DappProvider ({children}) {
    const [file, setFile] = useState(null);
    const [hash, hashLoading, addData] = useIPFS();
    const [account] = useAccount();
    const [storeResult, storeLoading] = useStore(account, hash);
    const [history, historyLoading] = useRetrieve(account, storeResult);

    

    return(
        <DappContext.Provider value={{
            file, setFile,
            hash, hashLoading, addData,
            account,
            storeResult, storeLoading,
            history, historyLoading
        }
        }>
            {children}
        </DappContext.Provider>
    )

}