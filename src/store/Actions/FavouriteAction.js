export default function FavouriteMovie(newMovie)
{
    return {
        type:'SET_FAVOURITE',
        payload:newMovie,
    }
}