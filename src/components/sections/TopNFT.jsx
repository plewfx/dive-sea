import NFT from "../NFT"
import useNFTsStore from "../../useNFTsStore"
import { Switcher } from "./HomeHero"
import { useState } from "react"

const TopNFT = () => {
    const NFTs = useNFTsStore(state => state.NFTs)
    const [switcher, setSwitcher] = useState(0)

    return (
        <section className="pt-70 pb-100 bg-grey-F1 dark:bg-black-14">
            <div className="container flex flex-col gap-100 relative">
                <h3 className="text-grey-C5 text-center">Weekly - Top NFT</h3>
                <div className={"flex gap-40 " + (switcher === 1 ? 'justify-start' : 'justify-end')}>
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
            </div>
        </section>
    )
}

export default TopNFT