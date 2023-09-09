import Filter from "../UI/Filter"
import NFT from "../NFT"
import useNFTsStore from "../../useNFTsStore"

const DiscoverNFTs = () => {
    const NFTs = useNFTsStore(state => state.NFTs)

    return (
        <>
            <section>
                <div className="container flex items-center flex-col gap-100 border-grey-CB border-b-1 pt-100 pb-250">
                    <div className="flex flex-col gap-65">
                        <h3 className="text-black-14 leading-60 text-center">Discover NFTs</h3>
                        <div className="flex justify-center gap-20">
                            <Filter name='Category' gap='9' icon='list' />
                            <Filter name='Collection' gap='9' icon='voice' />
                            <Filter name='Price' gap='9' icon='price' />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-40 items-center justify-center">
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
                    <img className="w-[3.47vw] rotate-180 animate-spinCircle05 mt-50" src="/src/assets/icons/loading.png" alt="" />
                </div>
            </section>
        </>
    )
}

export default DiscoverNFTs