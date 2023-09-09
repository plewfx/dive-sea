import { Link, NavLink } from "react-router-dom"
import useScreenSizeStore from '../../useScreenSizeStore'
import { useEffect, useState } from "react"

const links = [
  'Discover',
  'creators',
  'Sell',
  'stats'
]

function switchTheme() {
  document.documentElement.classList.toggle('dark')
}
 
function Header() {
  const { screenSize, updateScreenSize } = useScreenSizeStore();

  useEffect(() => {
    const updateDimension = () => {
      updateScreenSize();
    };
    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, []);

  // const [openBurger, setOpenBurger] = useState(false)

  return (
    <header className="py-[3.33vw] fixed top-0 left-0 right-0 bg-grey-F9 dark:bg-black-14 opacity-90 z-50">
      <div className="container flex justify-between">
        <nav className="flex justify-between items-center w-full">
          <Link to='/dive-sea/' className="relative z-50 flex items-center gap-9">
            <svg className="logo w-[3.68vw] md:w-[12.3vw]" xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
    <path d="M46.9274 36.1279C44.9841 36.1279 44.1228 35.377 42.9082 34.317C41.5611 33.1687 39.8828 31.7112 36.7249 31.7112C33.5449 31.7112 31.8886 33.1687 30.5415 34.317C29.327 35.377 28.4437 36.1279 26.5003 36.1279C24.5791 36.1279 23.6957 35.377 22.4811 34.317C21.1341 33.1687 19.4558 31.7112 16.2978 31.7112C13.1178 31.7112 11.4395 33.1687 10.0924 34.317C8.87784 35.377 8.01658 36.1279 6.07324 36.1279C5.16783 36.1279 4.41699 36.8787 4.41699 37.7841C4.41699 38.7116 5.16783 39.4404 6.07324 39.4404C9.25324 39.4404 10.9095 38.0049 12.2565 36.8345C13.4711 35.7745 14.3545 35.0237 16.2978 35.0237C18.2412 35.0237 19.1024 35.7745 20.317 36.8345C21.6641 38.0049 23.3424 39.4404 26.5003 39.4404C29.6803 39.4404 31.3587 38.0049 32.7057 36.8345C33.9203 35.7745 34.7816 35.0237 36.7249 35.0237C38.6462 35.0237 39.5295 35.7745 40.7441 36.8345C42.0912 38.0049 43.7695 39.4404 46.9274 39.4404C47.8328 39.4404 48.5837 38.7116 48.5837 37.7841C48.5837 36.8787 47.8328 36.1279 46.9274 36.1279Z" fill="#141416"/>
    <path d="M46.9274 27.0307C44.9841 27.0307 44.1228 26.2578 42.9082 25.2198C41.5611 24.0494 39.8828 22.614 36.7249 22.614C33.5449 22.614 31.8886 24.0494 30.5415 25.2198C29.327 26.2578 28.4437 27.0307 26.5003 27.0307C24.5791 27.0307 23.6957 26.2578 22.4811 25.2198C21.1341 24.0494 19.4558 22.614 16.2978 22.614C13.1178 22.614 11.4395 24.0494 10.0924 25.2198C8.87784 26.2578 8.01658 27.0307 6.07324 27.0307C5.16783 27.0307 4.41699 27.7594 4.41699 28.6869C4.41699 29.5923 5.16783 30.3432 6.07324 30.3432C9.25324 30.3432 10.9095 28.8857 12.2565 27.7153C13.4711 26.6773 14.3545 25.9265 16.2978 25.9265C18.2412 25.9265 19.1024 26.6773 20.317 27.7153C21.6641 28.8857 23.3424 30.3432 26.5003 30.3432C29.6803 30.3432 31.3587 28.8857 32.7057 27.7153C33.9203 26.6773 34.7816 25.9265 36.7249 25.9265C38.6462 25.9265 39.5295 26.6773 40.7441 27.7153C42.0912 28.8857 43.7695 30.3432 46.9274 30.3432C47.8328 30.3432 48.5837 29.5923 48.5837 28.6869C48.5837 27.7594 47.8328 27.0307 46.9274 27.0307Z" fill="#141416"/>
    <path d="M6.07324 21.2885C9.25324 21.2885 10.9095 19.831 12.2565 18.6827C13.4711 17.6227 14.3545 16.8718 16.2978 16.8718C18.2412 16.8718 19.1024 17.6227 20.317 18.6827C21.6641 19.831 23.3424 21.2885 26.5003 21.2885C29.6803 21.2885 31.3587 19.831 32.7057 18.6827C33.9203 17.6227 34.7816 16.8718 36.7249 16.8718C38.6462 16.8718 39.5295 17.6227 40.7441 18.6827C42.0912 19.831 43.7695 21.2885 46.9274 21.2885C47.8328 21.2885 48.5837 20.5377 48.5837 19.6322C48.5837 18.7047 47.8328 17.976 46.9274 17.976C44.9841 17.976 44.1228 17.2252 42.9082 16.1652C41.5611 14.9947 39.8828 13.5593 36.7249 13.5593C33.5449 13.5593 31.8886 14.9947 30.5415 16.1652C29.327 17.2252 28.4437 17.976 26.5003 17.976C24.5791 17.976 23.6957 17.2252 22.4811 16.1652C21.1341 14.9947 19.4558 13.5593 16.2978 13.5593C13.1178 13.5593 11.4395 14.9947 10.0924 16.1652C8.87784 17.2252 8.01658 17.976 6.07324 17.976C5.16783 17.976 4.41699 18.7047 4.41699 19.6322C4.41699 20.5377 5.16783 21.2885 6.07324 21.2885Z" fill="#141416"/>
            </svg>
            {
              // screenSize.width < 700 && <span className="text-black-0 text-[5.7vw] leading-130 font-semibold">DiveSea</span>
            }
          </Link>
          {
            screenSize.width < 700 ?
            <div className={"opacity-0 fixed top-0 left-0 bottom-0 right-0 bg-[rgba(255,_255,_255,_0.9)] flex flex-col justify-center items-center gap-100"}>
              <ul className="flex flex-col gap-55 items-center">
                {
                  links.map(link => {
                    return (
                      <li className="font-inter text-grey-200 font-medium dark:text-grey-C5" key={link}>
                        <NavLink style={({ isActive }) => isActive ? {color: '#141416'} : null} className="uppercase text-[5vw] leading-150" to={link.toLowerCase()}>{link}</NavLink>
                      </li>
                    )
                  })
                }
              </ul>
              <div className="flex flex-col items-center gap-[7vw]">
                <div className="flex gap-[5vw] bg-grey-ED py-[7vw] pr-[10vw] pl-[5vw] rounded-[5vw] dark:bg-black-14 dark:border-grey-C5 dark:border-2">
                  <svg className="search w-[7vw]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9.94976 17.7296C14.5695 17.7296 18.3146 13.9845 18.3146 9.3648C18.3146 4.74505 14.5695 1 9.94976 1C5.33001 1 1.58496 4.74505 1.58496 9.3648C1.58496 13.9845 5.33001 17.7296 9.94976 17.7296Z" stroke="#9D9D9D" strokeWidth="1.79246" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.9248 15.3394L23.0946 22.5092" stroke="#9D9D9D" strokeWidth="1.79246" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input className="text-[5vw] leading-120 text-black-100 placeholder:text-grey-C5" type="text" placeholder="Search Art Work / Creator" />
                </div>
                <Link to='/dive-sea/sell' className="uppercase font-inter font-semibold text-[7vw] bg-black-14 text-white leading-150 py-[5vw] px-[6vw] rounded-[5vw] dark:text-black-14 dark:bg-grey-F9">Connect Wallet</Link>
              </div>
            </div> :
            <>
              <ul className="flex gap-55">
                {
                  links.map(link => {
                    return (
                      <li
                      // onClick={(setOpenBurger(prev => !prev))} 
                      className="font-inter text-grey-200 font-medium dark:text-grey-C5" key={link}>
                        <NavLink style={({ isActive }) => isActive ? {color: '#141416'} : null} className="uppercase text-18 leading-150" to={link.toLowerCase()}>{link}</NavLink>
                      </li>
                    )
                  })
                }
              </ul>
              <div className="flex items-center gap-[2vw]">
                <div className="flex gap-30 bg-grey-ED py-18 pr-[5.66vw] pl-[1.56vw] rounded-14 dark:bg-black-14 dark:border-grey-C5 dark:border-2">
                  <svg className="search w-[1.5vw]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9.94976 17.7296C14.5695 17.7296 18.3146 13.9845 18.3146 9.3648C18.3146 4.74505 14.5695 1 9.94976 1C5.33001 1 1.58496 4.74505 1.58496 9.3648C1.58496 13.9845 5.33001 17.7296 9.94976 17.7296Z" stroke="#9D9D9D" strokeWidth="1.79246" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.9248 15.3394L23.0946 22.5092" stroke="#9D9D9D" strokeWidth="1.79246" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input className="text-15 leading-120 text-black-100 placeholder:text-grey-C5" type="text" placeholder="Search Art Work / Creator" />
                </div>
                <Link to='/dive-sea/sell' className="uppercase font-inter font-semibold text-16 bg-black-14 text-white leading-150 py-[1.12vw] px-[1.68vw] rounded-16 dark:text-black-14 dark:bg-grey-F9">Connect Wallet</Link>
              </div>
            </>
          }
{/* {          <div>
            <div className="cursor-pointer theme-switcher dark:bg-[url(/dive-sea/src/assets/icons/moon.svg)]" onClick={() => switchTheme()}>
            </div>
          </div>} */}
          {
            screenSize.width < 700 ?
            <div
            // onClick={() => setOpenBurger(prev => !prev)}
            className="relative z-50 flex flex-col gap-[2.66vw] w-[8.4vw] after:w-full after:h-[0.5vw] after:rounded-10 after:bg-black-14 before:w-full before:h-[0.5vw] before:rounded-10 before:bg-black-14">
              <span className="w-full h-[0.5vw] rounded-10 bg-black-14"></span>
            </div> :
            null
          }
        </nav>
      </div>
    </header>
  )
}

export default Header