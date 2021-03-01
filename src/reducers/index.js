const INITIAL_STATE = {
    coctails: [],
    message: ''
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_COCTAIL':
            return { ...state, coctails: action.payload }
        case 'GET_COCTAIL_SEARCH':
            return { ...state, coctails: action.payload, message: "SEARCH" }
        case 'GET_COCTAIL_DETAIL':
            return { ...state, coctails: action.payload }
        case 'GET_CATEGORY_LIST':
            return { ...state, coctails: action.payload, message: "COCOA"}
        case 'GET_ALCOHOL_LIST':
            return { ...state, coctails: action.payload }
        case 'GET_ERROR':
            return { ...state, messsage: action.payload }
        default: 
            return state;
    }
}