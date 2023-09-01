import { Link } from "react-router-dom"
import useStatsStore from "../../useStatsStore"
import { useState } from "react"

const Arrow = () => {
    return (
        <div className="-z-20 absolute top-[5vw] right-[5vw] w-[9vw] h-[8.5vw]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 131 136" fill="none">
                <path className="dark:stroke-grey-C5" d="M15.6507 43.2949C32.4339 30.7255 51.9743 23.0115 72.683 28.6293C91.3749 33.7001 103.143 49.6308 90.5396 69.3323C84.5735 78.6586 71.8706 85.1866 61.8852 79.874C50.7606 73.9554 59.5288 59.017 66.6505 54.7089C83.2839 44.6468 106.696 49.3237 118.212 68.8676C131.849 92.0121 108.785 103.532 108.769 103.344" stroke="black" strokeWidth="3.37884" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path className="dark:stroke-grey-C5" d="M19.2682 18.3822C19.8774 20.8066 19.5256 23.2337 19.2862 25.6772C18.5006 33.7008 15.3552 42.0309 9.71151 47.2933C17.1379 44.0371 27.7921 42.619 34.5374 48.3347" stroke="black" strokeWidth="3.37884" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}

const Dots = () => {
    return (
        <div className="-z-20 absolute top-[-2vw] right-[-11vw] w-[11vw] h-[12.33vw]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 193" fill="none">
                <g className="dark:stroke-grey-C5" opacity="0.5">
                    <rect width="2.83607" height="2.84073" fill="black"/>
                    <rect x="18.9062" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="37.8145" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="56.7217" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="75.6279" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="94.5361" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="113.443" width="2.83607" height="2.84073" fill="black"/>
                    <rect y="18.9377" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="18.9062" y="18.9377" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="37.8145" y="18.9377" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="56.7217" y="18.9377" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="75.6279" y="18.9377" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="94.5361" y="18.9377" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="113.443" y="18.9377" width="2.83607" height="2.84073" fill="black"/>
                    <rect y="37.8765" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="18.9062" y="37.8765" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="37.8145" y="37.8765" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="56.7217" y="37.8765" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="75.6279" y="37.8765" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="94.5361" y="37.8765" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="113.443" y="37.8765" width="2.83607" height="2.84073" fill="black"/>
                    <rect y="56.8152" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="18.9062" y="56.8152" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="37.8145" y="56.8152" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="56.7217" y="56.8152" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="75.6279" y="56.8152" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="94.5361" y="56.8152" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="113.443" y="56.8152" width="2.83607" height="2.84073" fill="black"/>
                    <rect y="75.7527" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="18.9062" y="75.7527" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="37.8145" y="75.7527" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="56.7217" y="75.7527" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="75.6279" y="75.7527" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="94.5361" y="75.7527" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="113.443" y="75.7527" width="2.83607" height="2.84073" fill="black"/>
                    <rect y="94.6914" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="18.9062" y="94.6914" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="37.8145" y="94.6914" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="56.7217" y="94.6914" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="75.6279" y="94.6914" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="94.5361" y="94.6914" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="113.443" y="94.6914" width="2.83607" height="2.84073" fill="black"/>
                    <rect y="113.629" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="18.9062" y="113.629" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="37.8145" y="113.629" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="56.7217" y="113.629" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="75.6279" y="113.629" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="94.5361" y="113.629" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="113.443" y="113.629" width="2.83607" height="2.84073" fill="black"/>
                    <rect y="132.567" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="18.9062" y="132.568" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="37.8145" y="132.568" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="56.7217" y="132.568" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="75.6279" y="132.568" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="94.5361" y="132.568" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="113.443" y="132.568" width="2.83607" height="2.84073" fill="black"/>
                    <rect y="151.506" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="18.9062" y="151.506" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="37.8145" y="151.506" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="56.7217" y="151.506" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="75.6279" y="151.506" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="94.5361" y="151.506" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="113.443" y="151.506" width="2.83607" height="2.84073" fill="black"/>
                    <rect y="170.443" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="18.9062" y="170.443" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="37.8145" y="170.443" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="56.7217" y="170.443" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="75.6279" y="170.443" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="94.5361" y="170.443" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="113.443" y="170.443" width="2.83607" height="2.84073" fill="black"/>
                    <rect y="189.382" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="18.9062" y="189.383" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="37.8145" y="189.383" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="56.7217" y="189.383" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="75.6279" y="189.383" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="94.5361" y="189.383" width="2.83607" height="2.84073" fill="black"/>
                    <rect x="113.443" y="189.383" width="2.83607" height="2.84073" fill="black"/>
                </g>
            </svg>
        </div>
    )
}

export const Switcher = ({ className, switcher, setSwitcher}) => {
    return (
        <div className={"rounded-17 bg-grey-FC p-21 grid grid-cols-3 grid-rows-1 gap-[2.4vw] after:w-[0.14vw] after:h-[1.8vw] after:bg-grey-ED after:justify-self-center shadow-[0_3vw_2.36vw_-1vw_rgba(15,15,15,0.12)] " + className}>
            <div className="w-[1.8vw] cursor-pointer" onClick={() => setSwitcher(prev => prev = 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.2397 8.38963C10.8023 7.98584 10.1203 8.01311 9.71654 8.45055L6.23402 12.2232C5.85287 12.6361 5.85287 13.2726 6.23401 13.6855L9.71653 17.4583C10.1203 17.8957 10.8023 17.923 11.2397 17.5192C11.6772 17.1154 11.7045 16.4335 11.3007 15.996L9.48802 14.0323L19.9611 14.0323C20.5565 14.0323 21.0391 13.5497 21.0391 12.9544C21.0391 12.3591 20.5565 11.8765 19.9611 11.8765L9.48805 11.8765L11.3007 9.91283C11.7044 9.47539 11.6772 8.79343 11.2397 8.38963Z" fill={switcher === 0 ? "#929292" : '#23262F'}/>
                </svg>
            </div>
            <div className="w-[1.8vw] cursor-pointer order-3" onClick={() => setSwitcher(prev => prev = 0)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.7603 8.38963C16.1977 7.98584 16.8797 8.01311 17.2835 8.45055L20.766 12.2232C21.1471 12.6361 21.1471 13.2726 20.766 13.6855L17.2835 17.4583C16.8797 17.8957 16.1977 17.923 15.7603 17.5192C15.3228 17.1154 15.2955 16.4335 15.6993 15.996L17.512 14.0323L7.03886 14.0323C6.44354 14.0323 5.96094 13.5497 5.96094 12.9544C5.96094 12.3591 6.44354 11.8765 7.03886 11.8765L17.5119 11.8765L15.6993 9.91283C15.2956 9.47539 15.3228 8.79343 15.7603 8.38963Z" fill={switcher === 1 ? "#929292" : '#23262F'}/>
                </svg>
            </div>
        </div>
    )
}

const HomeHero = () => {
    const [switcher, setSwitcher] = useState(0)
    const artWorks = useStatsStore(state => state.artWorks)
    const creators = useStatsStore(state => state.creators)
    const collections = useStatsStore(state => state.collections)
     return (
        <section className="pt-[7.708vw] pb-[10vw] overflow-hidden">
            <div className="container grid grid-cols-2">
                <div className="flex flex-col gap-45">
                    <div className="flex flex-col gap-15 before:w-[30%] before:bg-black-20 before:h-1 before:opacity-20">
                        <h1>Discover And Create NFTs</h1>
                        <p className="font-inter text-18 text-grey-67 max-w-[80%]">Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a <span className=" font-semibold">$20 bonus</span>.</p>
                    </div>
                    <div className="flex flex-col gap-100">
                        <div className="flex gap-25">
                            <Link to='discover' className="uppercase text-white text-16 tracking-[0.114vw] py-18 px-30 bg-black-0 rounded-12">Explore More</Link>
                            <Link to='sell' className="uppercase text-black-0 text-16 tracking-[0.114vw] py-18 px-21 bg-white rounded-12 border-[0.1vw] border-black-0">create NFT</Link>
                        </div>
                        <div className="flex items-center gap-65">
                            <div className="flex flex-col">
                                <h3 className="font-public-sans  text-36">{artWorks}K+</h3>
                                <span className="text-12 text-grey-84">Art Works</span>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-public-sans  text-36">{creators}K+</h3>
                                <span className="text-12 text-grey-84">Creators</span>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-public-sans  text-36">{collections}K+</h3>
                                <span className="text-12 text-grey-84">Collections</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className={"absolute bg-image bg-[url('https://s3-alpha-sig.figma.com/img/1745/ba04/820dca34df7ef46ff76e3bda6ea88140?Expires=1694390400&Signature=jrCXd8qogEavSlcbMNJKubQS-QkxqXSRrWiDsAdWHZCgj4oko7Jcb9tk1JW1CLRI6KFExVz86rddSSlizhtafsUdelic48y~rYpEoN~f5jfDCxnYmNIKXGJt9cCXV9yRB0f~xZoZ2tPwH2qdhG5Pw6bidHc670ZJfZeuASNPGAbauF3ITb~Et~cKJ-w1YlKjiD7USKDvYrhuIy0uouzSgQzZ-HA-KCpCZGvdfzqlz8Areu-QthgGzCyTEfKMgNopBg7KRVYK3mZ7rtVTOtXMa-kkWKlnVuqc5tYvuZhoTolTbHtTHKqmTWnJQ6MwDaUlIXOjjPKiYhYYekWjwMALrA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] after:-z-10 after:absolute after:bg-[url('https://s3-alpha-sig.figma.com/img/1745/ba04/820dca34df7ef46ff76e3bda6ea88140?Expires=1694390400&Signature=jrCXd8qogEavSlcbMNJKubQS-QkxqXSRrWiDsAdWHZCgj4oko7Jcb9tk1JW1CLRI6KFExVz86rddSSlizhtafsUdelic48y~rYpEoN~f5jfDCxnYmNIKXGJt9cCXV9yRB0f~xZoZ2tPwH2qdhG5Pw6bidHc670ZJfZeuASNPGAbauF3ITb~Et~cKJ-w1YlKjiD7USKDvYrhuIy0uouzSgQzZ-HA-KCpCZGvdfzqlz8Areu-QthgGzCyTEfKMgNopBg7KRVYK3mZ7rtVTOtXMa-kkWKlnVuqc5tYvuZhoTolTbHtTHKqmTWnJQ6MwDaUlIXOjjPKiYhYYekWjwMALrA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] after:blur-[3vw] duration-1000 " + (switcher === 0 ? 'bottom-[24%] right-[40%] rounded-25 w-[27.1vw] h-[27.4vw] after:w-[27.1vw] after:h-[27.4vw]' : 'bottom-[3%] right-[-20%] rounded-22 w-[22.16vw] h-[22.3vw] after:w-[20.16vw] after:h-[20.3vw]')}></div>
                    <div className={"absolute bg-image bg-[url('https://s3-alpha-sig.figma.com/img/b82f/55d0/61c522d86567e3c5ea1f39ddf68ae4bc?Expires=1694390400&Signature=EjOE0HsuE~W1rBOYHOnrBPROiBE0K4YrEEN2kn8Xchrs9B9GwJ8Ah8FDSfkYnvmwOd60igtUdiG4AgkKzWtc2JKWGSjjAwVK8ohwnuRhgVThsnI3tmXUZlqKDcHnBmjuqDXeATxrzqoiTjoQyMjhFc8BGtUrdavcOwiNv~SEX9xQaUqGQYhIgXoEHyLozlXYW0D~d4gZcYo8JOuFoweTpdJvwSNfapqD1pCkUco2sPOjQC~rcYx7J1pWOBQAGzGGzL5MGyHQ6okkqnRt22H6LaRd7ASXwowtX6dNttFLFfO5S2r4d9uMrOd9HvVF9IOSOspa5-~VTtJFt3AxkZOPRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] after:-z-10 after:absolute after:bg-[url('https://s3-alpha-sig.figma.com/img/b82f/55d0/61c522d86567e3c5ea1f39ddf68ae4bc?Expires=1694390400&Signature=EjOE0HsuE~W1rBOYHOnrBPROiBE0K4YrEEN2kn8Xchrs9B9GwJ8Ah8FDSfkYnvmwOd60igtUdiG4AgkKzWtc2JKWGSjjAwVK8ohwnuRhgVThsnI3tmXUZlqKDcHnBmjuqDXeATxrzqoiTjoQyMjhFc8BGtUrdavcOwiNv~SEX9xQaUqGQYhIgXoEHyLozlXYW0D~d4gZcYo8JOuFoweTpdJvwSNfapqD1pCkUco2sPOjQC~rcYx7J1pWOBQAGzGGzL5MGyHQ6okkqnRt22H6LaRd7ASXwowtX6dNttFLFfO5S2r4d9uMrOd9HvVF9IOSOspa5-~VTtJFt3AxkZOPRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] after:blur-[3vw] duration-1000 " + (switcher === 1 ? 'bottom-[24%] right-[40%] rounded-25 w-[27.1vw] h-[27.4vw] after:w-[27.1vw] after:h-[27.4vw]' : 'bottom-[3%] right-[-20%] rounded-22 w-[22.16vw] h-[22.3vw] after:w-[20.16vw] after:h-[20.3vw]')}></div>
                    <Arrow />
                    <Dots />
                    <Switcher className='absolute bottom-[-1.5vw] left-[5vw]' switcher={switcher} setSwitcher={setSwitcher} />
                </div>
            </div>
        </section>
    )
}

export default HomeHero