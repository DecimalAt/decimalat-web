import React, { createContext, useContext, ReactNode, useState } from 'react';

type BroadcastContextType = {
    data: any;
    broadcast: (value: any) => void;
};

const BroadcastDataContext = createContext<BroadcastContextType | undefined>(undefined);

export const BroadcastDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState(null);

    const broadcast = (value: any) => {
        setData(value);
    };

    return <BroadcastDataContext.Provider value={{ data, broadcast }}>{children}</BroadcastDataContext.Provider>;
};

export const useBroadcastData = () => {
    const context = useContext(BroadcastDataContext);
    if (!context) {
        throw new Error("useBroadcastData must be used within a BroadcastDataProvider");
    }
    return context;
};
