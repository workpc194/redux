import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection } from '../redux/features/collectionSlice'
import { Trash } from 'lucide-react'

const CollectionCard = (item) => {
  const dispatch = useDispatch()

  const btnClick = (e) => {
    dispatch(removeCollection(e))
  }

  return (
    <a href={item.elem.download_url} target='_blank'>
      <div className='w-72 h-100 rounded'>
        {(item.elem.type == 'photo') ? <img className='w-full h-80 object-center object-cover rounded' src={item.elem.url} /> : ''}
        {(item.elem.type == 'video') ? <video muted autoPlay loop className='w-full h-80 object-center object-cover rounded' src={item.elem.url}></video> : ''}
        <div className='w-full h-20 px-6 flex justify-between items-center overflow-hidden'>
          <h2>{item.elem.title}</h2>
          <button onClick={() => {
            btnClick(item.elem)
          }} className='w-16 h-6 flex items-center justify-evenly bg-emerald-500 rounded'>Delete <Trash /></button>
        </div>
      </div>
    </a>
  )
}

export default CollectionCard