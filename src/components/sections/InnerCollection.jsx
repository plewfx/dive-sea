import { Link } from "react-router-dom"
import useSellersStore from '../../useSellersStore'
import Ethereum from "../Ethereum"
import useNFTCollectionStore from "../../useNFTCollectionStore"

const Feature = ({ name }) => {
    return (
        <div className="flex items-center gap-12">
            <svg className="w-[1.4vw]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10.0001" r="10" fill="#12141D"/>
                <path d="M15.0429 6.238C14.9682 6.16262 14.8792 6.1028 14.7812 6.06197C14.6832 6.02114 14.5781 6.00012 14.472 6.00012C14.3658 6.00012 14.2607 6.02114 14.1627 6.06197C14.0647 6.1028 13.9758 6.16262 13.901 6.238L7.90986 12.2372L5.39278 9.71205C5.31516 9.63707 5.22353 9.57812 5.12312 9.53855C5.02271 9.49898 4.9155 9.47957 4.80759 9.48144C4.69969 9.48331 4.59321 9.50641 4.49423 9.54943C4.39525 9.59245 4.30572 9.65454 4.23074 9.73216C4.15576 9.80978 4.0968 9.90141 4.05723 10.0018C4.01766 10.1022 3.99826 10.2094 4.00012 10.3173C4.00199 10.4252 4.02509 10.5317 4.06811 10.6307C4.11113 10.7297 4.17322 10.8192 4.25084 10.8942L7.33889 13.9822C7.41365 14.0576 7.50259 14.1174 7.60059 14.1583C7.69859 14.1991 7.8037 14.2201 7.90986 14.2201C8.01602 14.2201 8.12113 14.1991 8.21913 14.1583C8.31712 14.1174 8.40607 14.0576 8.48083 13.9822L15.0429 7.42014C15.1246 7.34484 15.1897 7.25344 15.2343 7.15171C15.2788 7.04998 15.3018 6.94013 15.3018 6.82907C15.3018 6.71801 15.2788 6.60816 15.2343 6.50643C15.1897 6.4047 15.1246 6.3133 15.0429 6.238Z" fill="#D1EDF5"/>
            </svg>
            <span className="text-black-12 text-16 leading-200">{name}</span>
        </div>
    )
}

const Seller = ({ seller }) => {
    const toggleFollow = useSellersStore((state) => state.toggleFollow)
    const followed = useSellersStore((state) => state.followed)

    const handleFollowClick = () => {
        toggleFollow(seller.id);
      };

    return (
                                        <div className="w-[20vw] flex items-center justify-between">
                                            <div className="grid grid-cols-2 grid-rows-1">
                                                <div className="row-span-2 relative bg-image w-[3.33vw] h-[3.33vw] rounded-1.2" style={{backgroundImage: `url(${seller.img})`}}>
                                                    <span className="absolute -top-[0.1vw] -right-[0.1vw] w-[1.45vw] h-[1.45vw] flex justify-center items-center text-grey-FC rounded-1.2 bg-black-23 text-11 leading-150">{seller.id}</span>
                                                </div>
                                                <h6 className="text-black-23 text-12 leading-150">{seller.name}</h6>
                                                <span className="text-grey-77 text-11 leading-150">{seller.username}</span>
                                            </div>
                                            {
                                                followed[seller.id] ?
                                                <div onClick={handleFollowClick} className="cursor-pointer py-7 px-14 bg-grey-E6 text-black-23 rounded-7">
                                                    Unfollow
                                                </div> :
                                                <div onClick={handleFollowClick} className="cursor-pointer py-7 px-14 border-2 border-grey-E6 text-black-23 rounded-7">
                                                    Follow
                                                </div>
                                            }
                                        </div>

    )
}

const Rewied = () => {
    const collections = useNFTCollectionStore(state => state.collections)

    return (
        <div className="absolute -bottom-[22%] left-[0%] py-26 px-24 flex flex-col gap-35 bg-white rounded-16 border-grey-ED border-1 shadow-[0.7vw_0.7vw_4.3vw_0vw_rgba(20,20,22,0.10)]"> 
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

const InnerCollection = () => {
    const features = ['Best Seller All Around World', '$2M+ Transections Every Day', 'Secure Transactions', 'Exclusive Collections From Sellers', 'Easy Buying and Selling', 'Join Our Community']
    const sellers = useSellersStore(state => state.sellers)

    return (
        <section>
            <div className="container grid grid-cols-[3.7fr_6.3fr] items-center py-100">
                <div className="flex items-start flex-col gap-50">
                    <div className="flex flex-col gap-70">
                        <h3 className="text-black-18"><span className="text-grey-C5">Just Unleash - <br /></span> Your Inner Collector</h3>
                        <div>
                            {
                                features.map(feature => {
                                    return (
                                        <Feature
                                            key={feature}
                                            name={feature}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Link to='/dive-sea/' className="flex items-center rounded-12 gap-11 text-15 text-white leading-120 font-medium p-20 bg-black-0">
                        Explore More
                        <svg className="w-[1.4vw]" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <path d="M4.98047 11.0702H17.8973" stroke="white" strokeWidth="1.84503" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.4365 4.61316L17.8949 11.0716L11.4365 17.53" stroke="white" strokeWidth="1.84503" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
                <div className="relative flex justify-center">
                    <div className="flex flex-col gap-[1.6vw] py-25 px-20 bg-white border-grey-ED border-1 shadow-[0.5vw_0.5vw_3.2vw_0vw_rgba(20,20,22,0.10)] rounded-14">
                        <h5 className="text-18 text-black-1 leading-130 font-semibold tracking-0.1">Best Sellers</h5>
                        <div className="flex flex-col gap-15">
                            {
                                sellers.map(seller => {
                                    return (
                                        <Seller
                                            key={seller.id}
                                            seller={seller}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Rewied />
                    <div className="absolute -top-[2vw] right-[5vw] flex h-[5.76vw] p-11 bg-grey-FC rounded-13 shadow-[0.5vw_0.5vw_3.2vw_0vw_rgba(20,20,22,0.10)]">
                            <li className="flex gap-11">
                                <div className="relative bg-image rounded-1.2 w-[3.5vw] h-[3.5vw]" style={{backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/0ddc/0c02/6431c87d9552dd381b9320d682181a60?Expires=1694995200&Signature=Saxf7GtXcv0MRCn0A~5zTa8bVZXVpbI-Czl4HMrbpihCo4zsFtd-YugTMMkBPML5ODRpiYkYPKzW4f1gLFipUuaoyoDLLtZcFRWxcrO~mx1NiZ6F4ED~p-ppMbsUZf4EkucyWfR0E7DPtukiq1PdtnwLgZ~Xxu2OSySvMMePoRZ-bagolrbzOmX7LkHVU~h86FjRDSpQYIEMF~ReyB3bGHOf6RbxFEcO8fW8MNPLBp5BwK4qPA5RWVvB6B-VY8rK7CgfHPhPB6zkO40WKOuLFXH7Fo44mTPNDKwWg5I6XM0QuocKyr1Xf7-1wijkVZa5wsrXpuprZqaRpqzmXtyPpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)'}}>
                                    <img className="absolute top-0 right-0 w-[1vw]" src="/src/assets/icons/verified.svg" alt="" />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <span className="text-13 text-grey-94 leading-130">New bid <span className="text-black-14">Rotation</span></span>
                                    <span className="text-11 font-semibold">0.002 ETH</span>
                                    <span className="text-11 font-semibold text-grey-94">6 Oct 2022, 11:44 PM</span>
                                </div>
                                <div className="bg-image rounded-10 w-[4.21vw] h-[4.21vw]" style={{backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/0ddc/0c02/6431c87d9552dd381b9320d682181a60?Expires=1694995200&Signature=Saxf7GtXcv0MRCn0A~5zTa8bVZXVpbI-Czl4HMrbpihCo4zsFtd-YugTMMkBPML5ODRpiYkYPKzW4f1gLFipUuaoyoDLLtZcFRWxcrO~mx1NiZ6F4ED~p-ppMbsUZf4EkucyWfR0E7DPtukiq1PdtnwLgZ~Xxu2OSySvMMePoRZ-bagolrbzOmX7LkHVU~h86FjRDSpQYIEMF~ReyB3bGHOf6RbxFEcO8fW8MNPLBp5BwK4qPA5RWVvB6B-VY8rK7CgfHPhPB6zkO40WKOuLFXH7Fo44mTPNDKwWg5I6XM0QuocKyr1Xf7-1wijkVZa5wsrXpuprZqaRpqzmXtyPpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)'}}>

                                </div>
                            </li>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InnerCollection