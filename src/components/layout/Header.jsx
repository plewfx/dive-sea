import { Link, NavLink } from "react-router-dom"
import logo from '/dive-sea.svg'
import search from '../../assets/icons/search.svg'

const links = [
  'Discover',
  'creators',
  'Sell',
  'stats'
]

function Header() {
  return (
    <header className="py-[3.33vw]">
      <div className="max-w-container mx-auto flex justify-between">
        <nav className="flex justify-between items-center w-full">
          <Link to='/dive-sea/'>
            <img className="w-[3.68vw]" src={logo} alt="DiveSea" />
          </Link>
          <ul className="flex gap-[3.71vw]">
            {
              links.map(link => {
                return (
                  <li className="font-inter text-grey-200 font-medium" key={link}>
                    <NavLink style={({ isActive }) => isActive ? {color: '#141416'} : null} className="uppercase text-navLink" to={link.toLowerCase()}>{link}</NavLink>
                  </li>
                )
              })
            }
          </ul>
          <div className="flex items-center gap-[2vw]">
            <div className="flex gap-[1.78vw] bg-grey-0 py-18 pr-[5.66vw] pl-[1.56vw] rounded-[1vw]">
              <img className="w-[1.5vw]" src='/src/assets/icons/search.svg' alt="" />
              <input className="text-[1.1vw] text-black-100 placeholder:text-grey-100" type="text" placeholder="Search Art Work / Creator" />
            </div>
            <Link to='/dive-sea/sell' className="uppercase font-inter font-semibold text-[1.12vw] bg-black-100 text-white py-[1.12vw] px-[1.68vw] rounded-[1.12vw]">Connect Wallet</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
