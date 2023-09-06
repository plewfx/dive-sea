import NFT from "../NFT"
import useNFTsStore from "../../useNFTsStore"
import useNFTCollectionStore from "../../useNFTCollectionStore"
import { Switcher } from "./HomeHero"
import { useState } from "react"
import Ethereum from "../Ethereum"

const Rewied = () => {
    const collections = useNFTCollectionStore(state => state.collections)

    return (
        <div className="absolute -bottom-[35%] right-0 py-26 px-24 flex flex-col gap-35 bg-white rounded-16 border-grey-ED border-1 shadow-[0.7vw_0.7vw_4.3vw_0vw_rgba(20,20,22,0.10)]"> 
            <div className="flex gap-100 items-center">
                <h5>Recent Viewed</h5>
                <svg className="w-[1vw]" xmlns="http://www.w3.org/2000/svg" width="18" height="4" viewBox="0 0 18 4" fill="none">
                    <path d="M8 1.61536C8 1.86157 8.44772 2.06116 9 2.06116C9.55228 2.06116 10 1.86157 10 1.61536C10 1.36915 9.55228 1.16956 9 1.16956C8.44772 1.16956 8 1.36915 8 1.61536Z" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 1.61536C1 1.86157 1.44772 2.06116 2 2.06116C2.55228 2.06116 3 1.86157 3 1.61536C3 1.36915 2.55228 1.16956 2 1.16956C1.44772 1.16956 1 1.36915 1 1.61536Z" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 1.61536C15 1.86157 15.4477 2.06116 16 2.06116C16.5523 2.06116 17 1.86157 17 1.61536C17 1.36915 16.5523 1.16956 16 1.16956C15.4477 1.16956 15 1.36915 15 1.61536Z" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="flex flex-col gap-30">
            {
                collections.map(col => {
                    if(col.id < 3) {
                        return (
                            <div key={col.id} className="flex items-center justify-between">
                                <div className="grid grid-rows-2 grid-cols-[3vw_100%] gap-x-22 gap-y-5">
                                    <div style={{backgroundImage: `url(${col.img})`}} className={`relative bg-image row-span-full rounded-1.2 w-[3.2vw] h-[3.2vw]`}>
                                        <span className="absolute -bottom-[0.2vw] -right-[0.2vw] bg-white text-11 font-150 font-bold py-2 px-8 rounded-1.2">
                                            {col.id}
                                        </span>
                                    </div>
                                    <h4 className="text-15">{col.name}</h4>
                                    <span className="text-grey-64 text-12 font-150">By {col.author}</span>
                                </div>
                                <div className="flex flex-col gap-[0.5vw]">
                                    <div className="grid grid-rows-[1.18vw] grid-cols-[1.18vw_100%]">
                                        <Ethereum />
                                        <span className="text-15 font-semibold leading-140">{col.price > 999 ? col.price.toLocaleString("en-EN") : col.price.toLocaleString()}</span>
                                    </div>
                                    <span className="text-[#10C352] text-13 leading-130 tracking-0.2">{col.change}</span>
                                </div>
                            </div>
                        )
                    }
                })
            }
            </div>
        </div>
    )
}

const TopNFT = () => {
    const NFTs = useNFTsStore(state => state.NFTs)
    const [switcher, setSwitcher] = useState(0)

    return (
        <section className="pt-70 pb-100 bg-grey-F1 dark:bg-black-14">
            <div className="container flex flex-col gap-[40vw] relative">
                <h3 className="text-grey-C5 text-center leading-60">Weekly - Top NFT</h3>
                <div className={"flex gap-40 absolute top-[8vw] duration-1000 " + (switcher === 0 ? 'left-[-30%]' : 'left-[0%]')}>
                    {
                        NFTs.map(nft => {
                            return (
                                <NFT
                                    key={nft.id}
                                    img={nft.img}
                                    id={nft.id}
                                    time={nft.time}
                                    name={nft.name}
                                    price={nft.price}
                                />
                            )
                        })
                    }
                </div>
                <Switcher className={'self-center'} switcher={switcher} setSwitcher={setSwitcher} />
                <Rewied />
            </div>
        </section>
    )
}

export default TopNFT