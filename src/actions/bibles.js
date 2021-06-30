import axios from "axios";

const baseUrl = 'http://localhost:3000/bible_items/';

export function updateCurrentBibleState(fieldName, value, user){
    let currentBible = Object.assign({}, user);
    if (fieldName === 'version') {
        currentBible.version = value;
    } else if (fieldName === 'book') {
        currentBible.book = value;
    } else if (fieldName === 'chapter') {
        currentBible.chapter = value;
    } else if (fieldName === 'verse') {
        currentBible.verse = value;
    } else if (fieldName === 'content') {
        currentBible.content = value;
    } else if (fieldName === 'lang') {
        currentBible.lang = value;
    }

    return {
        type:"UPDATE_CURRENT_BIBLE_STATE",
        currentBible: currentBible
    };
}
export function addBible(bible){
    let currentBible = Object.assign({}, bible);
    axios.post(`${baseUrl}`, currentBible).then((res)=>{});
    return {
        type: "ADD_BIBLE",
        currentBible: currentBible
    };
}

export function bibleDetail(id, bibles){
    let filteredBibles = bibles.filter(bible => bible.id === id);
    if(filteredBibles) {
        let currentBible = Object.assign({}, filteredBibles[0]);
        return {
            type: "BIBLE_DETAIL",
            currentBible: currentBible
        };
    }
}

export function updateBible(bible) {
    let currentBible = Object.assign({}, bible);
    axios.put(`${baseUrl}${bible.id}`, bible).then((res)=>{
        console.log(`bible id: ${bible.id} has been updated!`);
    });
    return {
        type: "UPDATE_BIBLE",
        currentBible: currentBible
    };
}

export function deleteBible(id) {
    axios.delete(`${baseUrl}${id}`).then((res)=>{
        console.log(`bible id: ${id} has been deleted!`);
    });
    return {
        type: "DELETE_BIBLE",
        bibleId: id
    };
}

export function loadBibles() {
    return dispatch => {
        axios.get(`${baseUrl}`).then((res)=>{
            let bibles = res.data;
            dispatch({
                type: "LOAD_BIBLES",
                bibles: bibles
            });
        });
    }
}


