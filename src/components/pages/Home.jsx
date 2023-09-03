import ExploreMarketplace from "../sections/ExploreMarketplace"
import HomeHero from "../sections/HomeHero"
import TopCollections from "../sections/TopCollections"
import TopNFT from "../sections/TopNFT"

const Home = () => {
  return (
    <>
        <HomeHero />
        <TopNFT />
        <TopCollections />
        <ExploreMarketplace />
    </>
  )
}

export default Home