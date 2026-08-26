import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setHasStarted, setPageOne, setQuery, setResult } from '../redux/features/searchSlice';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [value, setValue] = useState('')

    const navigate = useNavigate()

    const { result } = useSelector(store => store.search)

    const dispatch = useDispatch()

    const formSubmit = (e) => {
        e.preventDefault()
        dispatch(setQuery(value))
        setValue('')
        dispatch(setHasStarted())
        dispatch(setPageOne(1))
        dispatch(setResult([]))
        navigate('/')
    }

    return (
        <form className='w-full h-16 bg-cyan-900 px-7 flex items-center justify-between' onSubmit={(e) => {
            formSubmit(e)
        }}>
            <input type="text" className='w-[80%] h-12 px-3 text-2xl border rounded' placeholder='Search AnyThing...' value={value} onChange={(e) => {
                setValue(e.target.value)
            }} />
            <button className='w-[13%] h-12 text-xl text-center rounded border'>Search</button>
        </form>
    )
}

export default Search