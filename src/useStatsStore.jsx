import { create } from "zustand";

const useStatsStore = create((set) => ({
    artWorks: 430,
    creators: 159,
    collections: 87
}))

export default useStatsStore