import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./components/pages/Home"
import DiscoverNFTs from "./components/pages/DiscoverNFTs"
import ScrollToTop from "./components/layout/ScrolltoTop"
import NFTDetail from "./components/pages/NFTDetail"

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/dive-sea" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="NFTs" element={<DiscoverNFTs />}/>
            <Route path="NFTs/:id" element={<NFTDetail />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
