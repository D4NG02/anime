import { reducerCases } from "./Constant"

export const initialState = {
    anime: [],
    pagination: {},
}

export const initialStateType = typeof initialState

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case reducerCases.SET_ANIME_LIST:
            return { ...state, anime: action.token.data, pagination: action.token.pagination }

        default:
            console.log("Error reducerCases type")
            break;
    }
}

export default reducer