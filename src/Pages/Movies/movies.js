import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Instance from '../../axiosConfigure/axiosInstance';
import './movies.css';

export default function Movies()
{
    const [products,setProduct] = useState([]);
    const [page,setPage] = useState(1);
    const [state,setState] = useState(true);

    useEffect(()=>{
        Instance.get(`movie/popular?page=${page}`).then((res)=>{
            setProduct(res.data.results);
            console.log(res.data.results)
        }).catch((error)=>{
            console.log(error);
        })
    },[page])
    
    const NextPage = () => {
        // eslint-disable-next-line no-const-assign
        setPage(page+1)
        console.log(page);
    }

    const PreviousPage = () => {
        if(page>0)
        {
            setPage(page-1);
        }
        else
        return;
    }

    return (
        <>
        <div className="row row-cols-1 row-cols-md-3 m-2 g-4">
                {
                products.map((product) => {
                    return <div key={product.id} className="col">
                        <div className="card oneCart">
                            <Link to={`/movie/${product.id}`}>
                                <img src={'https://image.tmdb.org/t/p/original' + product.poster_path} className="card-img-top w-100 image" alt="..." />
                            </Link>
                            <div className="card-body body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text text-truncate">{product.overview}</p>
                                <p className="card-text">{product.release_date}</p>
                            </div>
                        </div>
                    </div>

                })}
            </div>
            <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <Link className="page-link" onClick={()=>PreviousPage()}>Previous</Link>
                    </li>
                    <li className="page-item"><Link className="page-link" href={page}>1</Link></li>
                    <li className="page-item"><Link className="page-link" href=''>2</Link></li>
                    <li className="page-item"><Link className="page-link" href=''>3</Link></li>
                    <li className="page-item">
                        <Link className="page-link" onClick={()=>NextPage()}>Next</Link>
                    </li>
                    </ul>
            </nav>
        </>
    );
}