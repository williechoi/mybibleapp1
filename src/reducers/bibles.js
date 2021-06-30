const ADD_BIBLE = 'ADD_BIBLE';
const UPDATE_CURRENT_BIBLE_STATE = 'UPDATE_CURRENT_BIBLE_STATE';
const BIBLE_DETAIL = 'BIBLE_DETAIL';
const UPDATE_BIBLE = 'UPDATE_BIBLE';
const DELETE_BIBLE = 'DELETE_BIBLE';
const LOAD_BIBLES = 'LOAD_BIBLES';

const initialState = {
    currentBible: {
        id: "",
        version: "",
        book: "",
        chapter: 0,
        verse: 0,
        content: "",
        lang: "",
    },
    bibles: []
};

const bibles = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BIBLE:
            return {
                ...state,
                bibles: [
                    ...state.bibles,
                    action.currentBible
                ],
            };
        case UPDATE_CURRENT_BIBLE_STATE:
            return {
                ...state,
                currentBible: action.currentBible,
            };
        case BIBLE_DETAIL:
            return {
                ...state,
                currentBible: action.currentBible,
            };
        case UPDATE_BIBLE:
            return {
                ...state,
                bibles : state.bibles.map(
                    bible => bible.id === action.currentBible.id ? action.currentBible : bible
                ),
            };
        case DELETE_BIBLE: 
            return {
                ...state,
                bibles : state.bibles.filter(bible => bible.id !== action.bibleId)
            };
        case LOAD_BIBLES:
            return {
                ...state,
                bibles: action.bibles
            };
        default:
            return state
    }
}

export default bibles