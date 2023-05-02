import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Searchbar = ({isDark, handleChange, handleSubmit}) => {

  const formBgClass = isDark === true ? "bg-darkContainerBG" : "bg-whiteContainerBG";
  const textClass = isDark === true ? "placeholder:text-whiteText" : "placeholder:text-grey";

  return (
    <form onSubmit={handleSubmit} className={`w-full h-[80px] flex items-center rounded-2xl shadow-xl ${formBgClass}`}>
      <FontAwesomeIcon className='text-accentBlue text-3xl pl-2' icon={faMagnifyingGlass} />
      <input onChange={handleChange} className={`w-full h-[60px] text-grey pl-4 outline-none bg-transparent mr-3 ml-3 focus:outline-grey rounded-lg ${textClass}`} type="text" placeholder='Search Github username...'/>
      <button className='bg-accentBlue text-whiteText h-[60px] mr-3 w-[140px] rounded-lg hover:bg-opacity-70 transition-[500ms]'>Search</button>
    </form>
  )
}

export default Searchbar