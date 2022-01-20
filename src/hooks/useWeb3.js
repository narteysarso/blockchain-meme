import { useEffect, useState } from "react";
import { getWeb3 } from "../services/wallet";

export function useAccount() {
    const [account, setAccount] = useState(null);

    useEffect(() => {

        (async () => {
            const web3 = await getWeb3();
            setAccount(await web3.account());

        })()
    }, []);

    return [account];
}

export function useStore(account, data) {
    const [txHash, setTxHash] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const web3 = await getWeb3();
                setTxHash(await web3.store(account, data));
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        })()
    }, [account, data])


    return [txHash, loading, error];
}

export function useRetrieve(account) {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const web3 = await getWeb3();
                setHistory(await web3.retrieve(account));

            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        })()
    }, [account]);

    return [history, loading, error];
}