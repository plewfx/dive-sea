import { Link } from "react-router-dom"
import Ethereum from "./Ethereum"

const NFT = ({ id, time, name, price }) => {
  return (
    <div className="px-14 pt-14 pb-21 snap-end">
        <div>
            <div className={"bg-image bg-[url('/src/assets/nft/" + id + ".jpg')] w-[17.56vw] h-[17.56vw] rounded-23"}></div>
            <span>{time}</span>
        </div>
        <div>
            <h5>{name}</h5>
            <div>
                <p>Current bid</p>
                <div>
                    <Ethereum />
                    <span>{price}</span>
                </div>
                <Link to={`dive-sea/NFTs/${id}`}>PLACE BID</Link>
            </div>
        </div>
    </div>
  )
}

export default NFT