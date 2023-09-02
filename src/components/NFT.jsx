import { Link } from "react-router-dom"
import Ethereum from "./Ethereum"

const NFT = ({ id, img, time, name, price }) => {
  return (
    <Link to={`/dive-sea/NFTs/${id}`} className="px-14 pt-14 pb-21 bg-white shadow-[2.7vw_0.81vw_4.08vw_0vw_rgba(199,199,199,0.60)] rounded-23 flex flex-col gap-20 dark:bg-black-14 dark:shadow-[2.7vw_0.81vw_4.08vw_0vw_rgba(0,0,0,0.6)]">
        <div className="relative">
            <div style={{backgroundImage: `url(/dive-sea/src/assets/nfts/${img}.jpg)`}} className={`bg-image w-[17.56vw] h-[17.56vw] rounded-23 dark:opacity-90`}></div>
            <span className="absolute top-[0.98vw] right-[0.7vw] text-14 text-white leading-150 py-10 px-14 border-1 rounded-10 border-[rgba(28,29,32,0.08)] shadow-[0vw_3.5vw_1vw_0vw_rgba(28,29,32,0.08)] bg-[rgba(28,29,32,0.35)] backdrop-blur-[0.14vw]">{time}</span>
        </div>
        <div className="flex flex-col gap-15">
            <h5>{name}</h5>
            <div className="grid grid-cols-2">
                <div className="flex flex-col gap-5">
                    <p className="text-blue-94 font-light text-14 leading-150">Current bid</p>
                    <div className="flex items-center gap-[0.5vw]">
                        <Ethereum size={'1.47vw'} />
                        <span className="font-medium leading-150 text-16 tracking-0.1">{price}</span>
                    </div>
                </div>
                <div className="flex items-center justify-center text-14 text-white leading-150 tracking-0.1 bg-black-14 rounded-11 dark:bg-white dark:text-black-14">PLACE BID</div>
            </div>
        </div>
    </Link>
  )
}

export default NFT