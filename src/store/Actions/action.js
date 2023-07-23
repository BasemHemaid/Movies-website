export const addMoviesToFavourite = (addMovies)=>({
    type:'ADD_MOVIES',
    payload:addMovies,
});

export const RemoveMoviesFromFavourite = (deleteMovies)=>({
    type:'Remove_MOVIES',
    payload:deleteMovies,
});

