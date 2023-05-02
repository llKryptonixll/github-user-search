import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Header = ({toggleDarkMode, isDark}) => {

  const h1Class = isDark === true ? "text-whiteText" : "text-blackText";
  const darkModeToggleClass = isDark === true ? "text-whiteText hover:text-textAccent" : "text-grey hover:text-blackText";

  return (
    <header className='flex items-center justify-between w-full h-[80px]'>
      <h1 className={`text-3xl font-bold ${h1Class}`}>devfinder</h1>
      <button onClick={toggleDarkMode} className={`font-bold flex space-x-2 transition-colors ${darkModeToggleClass}`}>
        <span className='tracking-[0.2rem]'>DARK</span>
        <FontAwesomeIcon className='text-2xl' icon={faMoon} />
      </button>
    </header>
  )
}

export default Header