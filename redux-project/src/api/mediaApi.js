import axios from "axios";

const UNSPLASH_API = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_API = import.meta.env.VITE_PEXELS_KEY
const GIPHY_API = import.meta.env.VITE_GIPHY_KEY


export const photoApi = async (query, page, perpage = 10) => {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query, page, perpage },
        headers: { Authorization: `Client-ID ${UNSPLASH_API}` }
    })
    const data = res.data
    return data

}

export const videosApi = async (query, page) => {
    const res = await axios.get('https://api.pexels.com/videos/search', {
        params: { query, page },
        headers: { Authorization: PEXELS_API }
    })
    const data = res.data
    return data
}

export const gifApi = async (query, page, limit = 50) => {
    const res = await axios.get('https://api.giphy.com/v2/search', {
        params: { key: GIPHY_API, q: query, limit, offset: page },
    })
    const data = res.data
    return data
}