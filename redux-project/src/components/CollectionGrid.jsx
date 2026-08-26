import React from 'react'
import { useSelector } from 'react-redux'
import CollectionCard from './CollectionCard'

const CollectionGrid = () => {

  const { items } = useSelector(state => state.collection)
  console.log(items);


  return (
    <div className='w-full h-[81%] flex flex-wrap justify-center gap-5 py-5 px-3 overflow-auto scrollbar-none'>
      {items.map((elem, idx) => {
        return (
          <CollectionCard elem={elem} key={idx} />
        )
      })}
    </div>
  )
}

export default CollectionGrid