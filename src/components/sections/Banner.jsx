import { Link } from "react-router-dom"

const Banner = () => {
  return ( 
    <section>
        <div className="container py-150">
            <div className="flex justify-between items-center bg-black-14 p-[2vw_2vw_2vw_4.6vw] rounded-30">
                <div className="flex flex-col items-start gap-12">
                    <h3 className="leading-130 text-white">Create and Sell NFTs</h3>
                    <p className="text-20 leading-130 font-medium text-grey-D2 tracking-0.2 mb-[2.7vw]">World’s Largest NFT Place</p>
                    <div className="flex items-center gap-30">
                        <Link to='discover' className="py-[1.4vw] px-[1.8vw] rounded-12 bg-white leading-130 text-20">Explore More</Link>
                        <Link to='discover' className="py-[1.4vw] px-[1.8vw] rounded-12 text-white border-white border-2 leading-130 text-20">Sell Artwork</Link>
                    </div>
                </div>
                <div className="bg-image bg-[url(https://s3-alpha-sig.figma.com/img/b82f/55d0/61c522d86567e3c5ea1f39ddf68ae4bc?Expires=1694995200&Signature=Hh5XSCJ9xdGDIT3PC-wZL6~M5QknhmabsWDZE9FQWGFw6eToC32wO5JVCHWI1Ypcgter5U5H9jrEsxAvkwYNsKNM3qqzuhOywBPBxD1bJa1vxR7P1~a2QtoErXSVlGwFF5MXOwhYGz1LHZGsMAEpI49L~-p5~A19MPE15Uch5LlxIlrNeV2NZWdB~wldvmBtGix9Qjl1OJuBx~0HuYH9eD2keWNRvOMg4BdAclOf5IGF7jVj--3rDXYVsh7Mm38Uhe-x1GKgxn9lCI4MZDXb~0zrd4EjpBlA0lY-QQqI9Bpog4jZC928JIFF7z-vTIL5fWY7UOS2LogU7mWYeUE7BQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)] w-[25.6vw] h-[17.3vw] rounded-16"></div>
            </div>
        </div>
    </section>
  )
}

export default Banner