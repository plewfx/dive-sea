import Community from "../sections/Community"
import ExploreMarketplace from "../sections/ExploreMarketplace"
import HomeHero from "../sections/HomeHero"
import InnerCollection from "../sections/InnerCollection"
import TopCollections from "../sections/TopCollections"
import TopNFT from "../sections/TopNFT"

const Home = () => {
  return (
    <>
        <HomeHero />
        <TopNFT />
        <TopCollections />
        <ExploreMarketplace />
        <InnerCollection />
        <Community />
    </>
  )
}

export default Home