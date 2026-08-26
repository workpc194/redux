
import { useDispatch } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {

    const dispatch = useDispatch()
    const btnClick = (e) => {
        dispatch(setActiveTab(e))
    }


    return (
        <div className='w-80 h-16 px-7 flex items-center justify-between'>
            <button id='photo' onClick={(e) => {
                btnClick(e.target.id);
            }} className='w-24 h-10 text-center border rounded'>Photos</button>
            <button id='video' onClick={(e) => {
                btnClick(e.target.id);
            }} className='w-24 h-10 text-center border rounded'>Videos</button>
            <button id='gif' onClick={(e) => {
                btnClick(e.target.id);
            }} className='w-24 h-10 text-center border rounded'>GIF</button>
        </div>
    )
}

export default Tabs