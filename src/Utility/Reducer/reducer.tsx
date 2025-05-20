import { animeType } from "../type"
import { reducerCases } from "./Constant"

interface paginationType { current_page: number, has_next_page: boolean, items: { count: number, per_page: number } }
export interface stateType {
    search: string,
    detail: animeType,
    recommend: any[],
    historyID: any[],
    searchAnime: {
        data: animeType[],
        pagination: paginationType
    },
    schedules: {
        data: animeType[],
        pagination: paginationType
    },
    topPopular: {
        data: animeType[],
        pagination: paginationType
    },
    topFavourite: {
        data: animeType[],
        pagination: paginationType
    },
    topAiring: {
        data: animeType[],
        pagination: paginationType
    },
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
        broadcast: {
            day: '',
            time: '',
            timezone: ''
        },
        aired: { from: '', to: '' },
        status: '',
        genres: [],
        producers: [],
        studios: []
    }
}

export const defaultPagination: paginationType = {
    current_page: 1, has_next_page: true,
    items: { count: 1, per_page: 10 }
}

export const state: stateType = {
    search: '',
    detail: defaultState.detail,
    historyID: [],
    recommend: [],
    searchAnime: {
        data: [],
        pagination: defaultPagination
    },
    schedules: {
        data: [],
        pagination: defaultPagination
    },
    topPopular: {
        data: [],
        pagination: defaultPagination
    },
    topFavourite: {
        data: [],
        pagination: defaultPagination
    },
    topAiring: {
        data: [],
        pagination: defaultPagination
    },
}

const reducer = (state: stateType, action: actionType) => {
    switch (action.type) {
        case reducerCases.SET_FIRST_LOAD_HOME:
            return { ...state, ...action.payload }



        case reducerCases.SET_SEARCH:
            return { ...state, search: action.payload }

        case reducerCases.SET_ANIME_LIST:
            return { ...state, searchAnime: action.payload }

        case reducerCases.SET_DETAIL:
            return { ...state, detail: action.payload }

        case reducerCases.SET_RECOMMEND:
            return { ...state, recommend: action.payload.data }

        case reducerCases.SET_HISTORY_ID:
            return { ...state, historyID: action.payload }

        case reducerCases.SET_SCHEDULE:
            return { ...state, schedules: action.payload }

        case reducerCases.SET_TOP_POPULOR:
            return { ...state, topPopular: action.payload }

        case reducerCases.SET_TOP_FAVOURITE:
            return { ...state, topFavourite: action.payload }

        case reducerCases.SET_TOP_AIRING:
            return { ...state, topAiring: action.payload }



        case reducerCases.RESET_ANIME_LIST:
            return { ...state, searchAnime: { data: [], pagination: defaultPagination } }

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