import { create } from "zustand";

const useNFTsStore = create((set) => ({
    NFTs: [
        {
            id: 1,
            time: '07h 09m 12s',
            name: 'Sun-Glass',
            price: 1.75,
        },
        {
            id: 2,
            time: '07h 09m 12s',
            name: 'Sun-Glass',
            price: 1.75,
        },
        {
            id: 3,
            time: '07h 09m 12s',
            name: 'Sun-Glass',
            price: 1.75,
        },
        {
            id: 4,
            time: '07h 09m 12s',
            name: 'Sun-Glass',
            price: 1.75,
        },
        {
            id: 5,
            time: '07h 09m 12s',
            name: 'Sun-Glass',
            price: 1.75,
        },
    ]
}))

export default useNFTsStore