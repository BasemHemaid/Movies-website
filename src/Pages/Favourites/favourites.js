import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Instance from '../../axiosConfigure/axiosInstance';


export default function Favourite()
{
    const [Moviesfav,setMovieFav] = useState([]);
    const {id} = useParams();
    const fav = [];

    useEffect(()=>{
        Instance.get(`/movie/${id}?`).then((res)=>{
            console.log(res.data);
            setMovieFav(res.data);
        }).catch((err)=>{
            console.log(err)
        })
    },[]);

    return <>
        {
            fav = this.props.Moviesfav.map(item => (
            <div className="card" key={item.id}>
                <div className="card-body">
                <img className="card-img-top" src={'https://image.tmdb.org/t/p/original' + item.poster_path} alt='' />
                </div>
                <div className="card-title">
                <h3>{item.title}</h3>
                <p>
                    <br />
                    <span>{item.overview}</span>
                    <button onClick={() => this.props.delete(item.id)}>
                    Delete from Favorite
                    </button>
                </p>
                </div>
            </div>
            )
            )
            }
            <div>
                <h2>Favorite</h2>
                {fav}
            </div>
    </>
}