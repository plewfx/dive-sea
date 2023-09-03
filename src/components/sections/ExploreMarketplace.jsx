import Filter from "../UI/Filter"
import NFT from '../NFT'
import useNFTsStore from "../../useNFTsStore"

const ExploreMarketplace = () => {
    const NFTs = useNFTsStore(state => state.NFTs)

    return (
        <section>
            <div className="container flex flex-col gap-100 border-grey-CB border-b-1 pt-100 pb-250">
                <div className="flex flex-col gap-65">
                    <h3 className="text-black-14 leading-60 text-center">Explore Marketplace</h3>
                    <div className="flex justify-center gap-20">
                        <Filter name='All' />
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
                </div>
            </div>
        </section>
    )
}

export default ExploreMarketplace