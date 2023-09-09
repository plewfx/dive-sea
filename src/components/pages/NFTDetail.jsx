import { useParams, Link } from 'react-router-dom'
import useNFTsStore from '../../useNFTsStore'
import Ethereum from '../Ethereum'
import NFT from '../NFT'

const NFTDetail = () => {
    const NFTs = useNFTsStore((state) => state.NFTs)
    const params = useParams()
    const currentNFT = NFTs.filter((NFT, index) => (index + 1) == params.id)
    const curr = currentNFT[0]
    const { id, name, desc, img, time, price } = curr

    return (
        <>
            <section>
                <div className="container py-100">
                    <Link to='..' relative='path' className='flex items-center gap-35 text-30'>
                        <svg className='w-[3.55vw]' xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
                            <rect x="0.602051" width="36.8151" height="36.8151" rx="18.4076" fill="#E6E8EC"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M22.3952 11.9539C22.9943 12.553 22.9943 13.5242 22.3952 14.1233L18.111 18.4075L22.3952 22.6917C22.9943 23.2907 22.9943 24.262 22.3952 24.861C21.7962 25.4601 20.8249 25.4601 20.2259 24.861L14.857 19.4922C14.258 18.8931 14.258 17.9218 14.857 17.3228L20.2259 11.9539C20.8249 11.3549 21.7962 11.3549 22.3952 11.9539Z" fill="#23262F"/>
                        </svg>
                        Product Detail
                    </Link>
                    <div className="grid grid-cols-2 gap-x-130 p-35 rounded-23 bg-grey-FA shadow-[1.2vw_1.2vw_4vw_0vw_rgba(0,0,0,0.12)] mt-50">
                        <div className='bg-image w-[39.6vw] h-[38.8vw] rounded-23' style={{backgroundImage: `url(${img})`}}></div>
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col">
                                <h2>{name}</h2>
                                <p className='text-20 leading-150 text-[rgba(136,136,136,0.70)]'>{desc}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-15">
                                    <img src="/src/assets/icons/perperzon.svg" alt="" />
                                    <div className="flex flex-col">
                                        <span className='text-17 text-grey-84'>Created by</span>
                                        <h5 className='text-24 text-black-0'>Perperzon</h5>
                                    </div>
                                </div>
                                <div className="flex items-center gap-15">
                                    <img src="/src/assets/icons/videz.svg" alt="" />
                                    <div className="flex flex-col">
                                        <span className='text-17 text-grey-84'>Created by</span>
                                        <h5 className='text-24 text-black-0'>Videz</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-12">
                                    <span className='text-17 text-grey-84'>Current Bid</span>
                                    <h4 className='text-30 flex gap-9'>
                                        <Ethereum size='2.5vw' />
                                        {price}
                                    </h4>
                                </div>
                                <div className="flex flex-col gap-20 text-right">
                                    <span className='text-17 text-grey-84 leading-120'>End in</span>
                                    <span className='text-20 text-black-0 leading-150'>{time}</span>
                                </div>
                            </div>
                            <button className='bg-black-14 py-25 rounded-17 flex items-center justify-center gap-15 text-18 text-white'>
                                <svg className='w-[1.52vw]' xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M0.739747 3.10639C0.739747 2.3746 1.02399 1.67278 1.52995 1.15533C2.0359 0.637871 2.72213 0.347168 3.43766 0.347168H16.6819C17.3975 0.347168 18.0837 0.637871 18.5897 1.15533C19.0956 1.67278 19.3799 2.3746 19.3799 3.10639V4.36861C20.3111 4.43225 21.1839 4.85549 21.8214 5.55262C22.459 6.24974 22.8136 7.16863 22.8136 8.12317V18.6584C22.8136 19.6563 22.426 20.6133 21.736 21.3189C21.0461 22.0246 20.1103 22.421 19.1346 22.421H4.42264C3.44692 22.421 2.51116 22.0246 1.82122 21.3189C1.13128 20.6133 0.743672 19.6563 0.743672 18.6584V8.12317H0.739747V3.35723H0.750539C0.743269 3.27383 0.739668 3.19013 0.739747 3.10639ZM17.9083 3.10639C17.9083 2.41408 17.3589 1.8522 16.6819 1.8522H3.43766C3.11242 1.8522 2.8005 1.98434 2.57052 2.21955C2.34054 2.45475 2.21133 2.77376 2.21133 3.10639C2.21133 3.43903 2.34054 3.75804 2.57052 3.99324C2.8005 4.22845 3.11242 4.36059 3.43766 4.36059H17.9083V3.10639ZM16.1914 13.3908C15.9963 13.3908 15.8091 13.4701 15.6711 13.6112C15.5331 13.7523 15.4556 13.9437 15.4556 14.1433C15.4556 14.3429 15.5331 14.5343 15.6711 14.6754C15.8091 14.8165 15.9963 14.8958 16.1914 14.8958H18.6441C18.8392 14.8958 19.0264 14.8165 19.1643 14.6754C19.3023 14.5343 19.3799 14.3429 19.3799 14.1433C19.3799 13.9437 19.3023 13.7523 19.1643 13.6112C19.0264 13.4701 18.8392 13.3908 18.6441 13.3908H16.1914Z" fill="white"/>
                                </svg>
                                Place Bid
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container pb-100 flex flex-col gap-45">
                    <h4 className='text-[2vw] text-grey-C3'>From Creator</h4>
                    <div className="flex gap-30">
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
        </>
    )
}

export default NFTDetail