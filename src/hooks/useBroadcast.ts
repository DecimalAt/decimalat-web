import { useEffect } from 'react';
import { useBroadcastData } from '../contexts/BroadcastContext';

export const useBroadcast = () => {
    const { broadcast } = useBroadcastData();
    return broadcast;
};

export const useListenToBroadcast = (callback: (data: any) => void) => {
    const { data } = useBroadcastData();

    useEffect(() => {
        callback(data);
    }, [data, callback]);
};
