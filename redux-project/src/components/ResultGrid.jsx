import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gifApi, photoApi, videosApi } from '../api/mediaApi'
import { addResult, setPage, setPageOne, setResult } from '../redux/features/searchSlice'
import InfiniteScroll from 'react-infinite-scroll-component'
import ResultCard from './ResultCard'
import Lenis from "lenis";


const ResultGrid = () => {

  const dispatch = useDispatch()
  const { query, activeTab, results, error, loading, page, hasStarted } = useSelector((store) => store.search)
  const [hasMore, setHasMore] = useState(true);

  const lenis = new Lenis()

  function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

  let data = []
  const getData = async () => {
    try {
      if (activeTab === 'photo') {
        let responce = await photoApi(query, page)
        if (responce.length === 0) {
          setHasMore(false)
          return
        }
        data = responce.results.map((item) => ({
          id: item.id,
          download_url: item.links.download,
          url: item.urls.full,
          title: item.alt_description,
          type: 'photo'
        }))
        if (page === 1) {
          dispatch(setResult(data))
        } else (
          dispatch(addResult(data))
        )
      }
      if (activeTab === 'video') {
        let responce = await videosApi(query, page)
        if (responce.length === 0) {
          setHasMore(false)
          return
        }
        data = responce.videos.map((item) => ({
          id: item.id,
          download_url: item.video_files[0].link,
          url: item.video_files[0].link,
          title: item.user.name || 'Video',
          type: 'video'
        }))
        if (page === 1) {
          dispatch(setResult(data))
        } else (
          dispatch(addResult(data))
        )
      }
      if (activeTab === 'gif') {
        let responce = await gifApi(query, page)
        if (responce.length === 0) {
          setHasMore(false)
          return
        }
        data = responce.results.map((item) => ({
          id: item.id,
          download_url: item.media_formats.mp4.url,
          url: item.media_formats.gif.url,
          title: item.title || 'GIF',
          type: 'gif'
        }))
        if (page === 1) {
          dispatch(setResult(data))
        } else (
          dispatch(addResult(data))
        )
      }
    } catch (err) {
      console.log(err);
      return (<h2>{err}</h2>)
    }
  }


  const fetchMore = () => {
    dispatch(setPage())
  }

  useEffect(() => {
    dispatch(setResult([]))
    dispatch(setPageOne(1))
  }, [activeTab])

  useEffect(() => {
    if (!query) return
    getData()
  }, [query, activeTab, page])

  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading......</h1>

  return (
    <div>
      {hasStarted && (<InfiniteScroll
        dataLength={results.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={<p>Loading...........</p>}
        endMessage={<p style={{ textAlign: 'center' }}>All items loaded.</p>}
        className='flex flex-wrap justify-center gap-5 py-5 px-3'>
        {results.map((elem, idx) => {
          return <ResultCard id='result-card' elem={elem} key={idx} />
        })}
      </InfiniteScroll>)}
    </div>
  )
}

export default ResultGrid