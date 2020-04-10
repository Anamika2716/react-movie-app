// {
//     type:'ADD_MOVIES'
//
// }
//
// {
//     type:'DECRAESE_COUNT'
// }

//action types
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITE='ADD_FAVOURITE';
export  const REMOVE_FROM_FAVOURITE='REMOVE_FROM_FAVOURITE';
export const SET_SHOW_FAVOURITE="SET_SHOW_FAVOURITE";
//action creators
export function addMovies(movies) {
    return {
        type:'ADD_MOVIES',
        movies
    }

}

export function addFavourite(movies) {
    return {
        type:'ADD_FAVOURITE',
        movies:movies
    }

}
export function removeFromFavourites(movies) {
    return {
        type:'REMOVE_FROM_FAVOURITE',
        movies:movies
    }

}
export function setShowFavourite(val) {
    return {
        type:'SET_SHOW_FAVOURITE',
        val
    }

}
