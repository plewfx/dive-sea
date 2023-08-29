import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dive-sea" element={<Layout />}>
            <Route index element={<></>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
