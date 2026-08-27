
import Search from './components/Search'
import Links from './components/Links'
import ResultGrid from './components/ResultGrid'
import CollectionGrid from './components/CollectionGrid'
import { Route, Routes } from 'react-router-dom'

const App = () => {



  return (
    <div className='w-screen min-h-screen bg-black text-white scrollbar-none'>
      <Search />
      <Links />
      <Routes>
        <Route path='/' element={<ResultGrid />} />
        <Route path='/collection' element={<CollectionGrid />} />
      </Routes>
    </div>
  )
}

export default App