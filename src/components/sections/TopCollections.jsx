import useNFTCollectionStore from "../../useNFTCollectionStore"
import Ethereum from '../Ethereum'

const TopCollections = () => {
    const collections = useNFTCollectionStore(state => state.collections)

    function convertToK(number) {
        if (number >= 1000) {
            return (number / 1000).toFixed(1) + 'K';
        } else {
            return number.toString();
        }
    }

    return (
        <section className="pt-[16.38vw] pb-100">
            <div className="container flex flex-col gap-90">
                <h3 className="text-center">Top Collection</h3>
                <table className="flex flex-col gap-45">
                    <thead>
                        <tr className="flex gap-[6.4vw] justify-end">
                            <th className="text-grey-93 text-22 leading-130 tracking-0.2 font-medium mr-auto">Collection</th>
                            <th className="text-grey-93 text-22 leading-130 tracking-0.2 font-medium">Volume</th>
                            <th className="text-grey-93 text-22 leading-130 tracking-0.2 font-medium">24h %</th>
                            <th className="text-grey-93 text-22 leading-130 tracking-0.2 font-medium">Floor Price</th>
                            <th className="text-grey-93 text-22 leading-130 tracking-0.2 font-medium">Owners</th>
                            <th className="text-grey-93 text-22 leading-130 tracking-0.2 font-medium">Items</th>
                        </tr>
                    </thead>
                    <tbody className="flex flex-col gap-35">
                        {
                            collections.map(col => {
                                return (
                                    <tr key={col.id} className="grid grid-cols-7 items-center justify-items-end border-b-grey-EB pb-30 border-b-2">
                                        <td className="grid grid-rows-2 grid-cols-[5.83vw_100%] gap-x-20 col-span-2 justify-start w-full">
                                            <div style={{backgroundImage: `url(${col.img})`}} className={`bg-image w-[5.8vw] h-[5.8vw] rounded-[50%] row-span-full`}></div>
                                            <h4 className="text-28">{col.name}</h4>
                                            <span className="text-grey-64 text-22">By {col.author}</span>
                                        </td>
                                        <td className="grid grid-rows-[2.18vw] grid-cols-[2.18vw_100%]">
                                            <Ethereum />
                                            <span className="text-24 font-semibold leading-140">{col.price > 999 ? col.price.toLocaleString("en-EN") : col.price.toLocaleString()}</span>
                                        </td>
                                        <td>
                                            <span className="text-[#10C352] text-24 leading-130 tracking-0.2">{col.change}</span>
                                        </td>
                                        <td className="grid grid-rows-[2.18vw] grid-cols-[2.18vw_100%]">
                                            <Ethereum />
                                            <span className="text-24 font-semibold leading-140">{col.floorPrice > 999 ? col.floorPrice.toLocaleString("en-EN") : col.floorPrice.toLocaleString()}</span>
                                        </td>
                                        <td>
                                            <span className="text-23 text-black-1 leading-130 tracking-0.2">{convertToK(col.owners)}</span>
                                        </td>
                                        <td>
                                            <span className="text-23 text-black-1 leading-130 tracking-0.2">{convertToK(col.items)}</span>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default TopCollections