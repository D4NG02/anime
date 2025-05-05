import { reducerCases } from "./Constant"

export const initialState = {
    search: '',
    anime: [],
    detail: null,
    pagination: {},
    itemPerPage: 12,
    page: 1
}

export const initialStateType = typeof initialState

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case reducerCases.SET_SEARCH:
            return { ...state, search: action.token }

        case reducerCases.SET_ANIME_LIST:
            return { ...state, anime: action.token.data, pagination: action.token.pagination }

        case reducerCases.SET_PAGE:
            return { ...state, page: action.token }

        case reducerCases.SET_DETAIL:
            return { ...state, detail: action.token }

        default:
            console.log("Error reducerCases type")
            break;
    }
}

export default reducer