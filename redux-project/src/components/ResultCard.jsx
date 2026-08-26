import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Bookmark } from 'lucide-react'
import { addCollection } from '../redux/features/collectionSlice'

const ResultCard = (item, idx) => {

  const dispatch = useDispatch()

  const { activeTab } = useSelector((store) => store.search)

  const btnClick = (e) => {
    dispatch(addCollection(e))
  }

  return (
    <a href={item.elem.download_url} target='_blank'>
      <div className='w-72 h-100 rounded'>
        {(activeTab === 'photo') ? <img className='w-full h-80 object-center object-cover rounded' src={item.elem.url} /> : ''}
        {(activeTab === 'video') ? <video muted autoPlay loop className='w-full h-80 object-center object-cover rounded' src={item.elem.url}></video> : ''}
        {(activeTab === 'gif') ? <img className='w-full h-80 object-center object-cover rounded' src={item.elem.url} /> : ''}

        <div className='w-full h-20 px-6 flex justify-between items-center'>
          <h2 className='w-full h-full overflow-auto scrollbar-none'>{item.elem.title}</h2>
          <button onClick={() => {
            btnClick(item.elem)
          }} className='w-16 h-6 flex items-center justify-evenly bg-emerald-500 rounded'>Save <Bookmark /></button>
        </div>
      </div>
    </a>
  )
}

export default ResultCard