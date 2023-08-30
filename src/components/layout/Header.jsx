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
    <header className="py-[3.33vw] fixed top-0 left-0 right-0 bg-grey-300 opacity-90 z-50">
      <div className="container flex justify-between">
        <nav className="flex justify-between items-center w-full">
          <Link to='/dive-sea/'>
            <img className="w-[3.68vw]" src={logo} alt="DiveSea" />
          </Link>
          <ul className="flex gap-55">
            {
              links.map(link => {
                return (
                  <li className="font-inter text-grey-200 font-medium" key={link}>
                    <NavLink style={({ isActive }) => isActive ? {color: '#141416'} : null} className="uppercase text-18 leading-150" to={link.toLowerCase()}>{link}</NavLink>
                  </li>
                )
              })
            }
          </ul>
          <div className="flex items-center gap-[2vw]">
            <div className="flex gap-30 bg-grey-0 py-18 pr-[5.66vw] pl-[1.56vw] rounded-14">
              <img className="w-[1.5vw]" src={search} alt="" />
              <input className="text-15 leading-120 text-black-100 placeholder:text-grey-100" type="text" placeholder="Search Art Work / Creator" />
            </div>
            <Link to='/dive-sea/sell' className="uppercase font-inter font-semibold text-16 bg-black-100 text-white leading-150 py-[1.12vw] px-[1.68vw] rounded-16">Connect Wallet</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header