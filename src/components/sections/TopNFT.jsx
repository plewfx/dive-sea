import NFT from "../NFT"
import useNFTsStore from "../../useNFTsStore"
import { Switcher } from "./HomeHero"
import { useState } from "react"

const TopNFT = () => {
    const NFTs = useNFTsStore(state => state.NFTs)
    const [switcher, setSwitcher] = useState(0)

    return (
        <section className="pt-70 pb-100 bg-grey-F1">
            <div className="container flex flex-col gap-100 items-center relative">
                <h3 className="text-grey-C5">Weekly - Top NFT</h3>
                <div className="flex justify-start gap-40 overflow-x-scroll snap-x">
                    {
                        NFTs.map(nft => {
                            return (
                                <NFT
                                    key={nft.id}
                                    id={nft.id}
                                    time={nft.time}
                                    name={nft.name}
                                    price={nft.price}
                                />
                            )
                        })
                    }
                </div>
                <Switcher switcher={switcher} setSwitcher={setSwitcher} />
            </div>
        </section>
    )
}

export default TopNFT