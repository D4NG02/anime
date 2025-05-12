import { animeType } from "../type"
import { reducerCases } from "./Constant"

export interface stateType {
    search: string,
    searchAnime: animeType[],
    detail: animeType,
    pagination: { items: { count: number } },
    itemPerPage: number,
    page: number,
    recommend: any[],
    historyID: any[],
    topPopular: {
        data: animeType[],
        pagination: { current_page: number, has_next_page: boolean, items: { count: number } }
    },
    topFavourite: animeType[],
    topAiring: animeType[],
}
export interface actionType { type: string, payload: any }

const defaultState: { detail: animeType } = {
    detail: {
        mal_id: 0,
        url: '',
        images: {
            jpg: { image_url: '' },
            webp: { image_url: '', large_image_url: '' }
        },
        title: '',
        title_japanese: '',
        title_synonyms: '',
        titles: [],
        type: '',
        duration: '',
        rating: '',
        score: 0,
        episodes: 0,
        popularity: 0,
        synopsis: '',
        season: '',
        year: 0,
        aired: { from: '', to: '' },
        status: '',
        genres: [],
        producers: [],
        studios: []
    }
}
export const state: stateType = {
    search: '',
    page: 1,
    itemPerPage: 15,
    detail: defaultState.detail,
    pagination: { items: { count: 1 } },
    searchAnime: [],
    recommend: [],
    historyID: [],
    topPopular: {
        data: [],
        pagination: { current_page: 1, has_next_page: true, items: { count: 1 } }
    },
    topFavourite: [],
    topAiring: [],
}

const reducer = (state: stateType, action: actionType) => {
    switch (action.type) {
        case reducerCases.SET_SEARCH:
            return { ...state, search: action.payload }

        case reducerCases.SET_ANIME_LIST:
            return { ...state, searchAnime: action.payload.data, pagination: action.payload.pagination }

        case reducerCases.SET_PAGE:
            return { ...state, page: action.payload }

        case reducerCases.SET_DETAIL:
            return { ...state, detail: action.payload }

        case reducerCases.SET_RECOMMEND:
            return { ...state, recommend: action.payload.data }

        case reducerCases.SET_HISTORY_ID:
            return { ...state, historyID: action.payload }

        case reducerCases.TOP_POPULOR:
            return { ...state, topPopular: action.payload.data }

        case reducerCases.TOP_FAVOURITE:
            return { ...state, topFavourite: action.payload.data }

        case reducerCases.SET_TOP_AIRING:
            return { ...state, topAiring: action.payload.data }

        case reducerCases.RESET_ANIME_LIST:
            return { ...state, searchAnime: [], pagination: { items: { count: 1 } } }

        case reducerCases.RESET_DETAIL:
            return { ...state, detail: defaultState.detail }

        case reducerCases.RESET_RECOMMEND:
            return { ...state, recommend: [] }

        default:
            console.log("Error reducerCases type")
            break;
    }
}

export default reducer