
import { Route, Routes } from 'react-router-dom'
import NavLink from './NavLink'
import Tabs from './Tabs'

const Links = () => {
  return (
    <div id='link' className='w-full h-16 bg-cyan-700 px-7 flex items-center justify-between'>
      <Tabs />
      <NavLink />
    </div>
  )
}

export default Links