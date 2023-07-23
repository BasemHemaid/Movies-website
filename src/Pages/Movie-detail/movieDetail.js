import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Instance from '../../axiosConfigure/axiosInstance';

export default function MoviesDetail()
{
    const {id} = useParams();
    const [products,setProducts] = useState({});
    console.log(id);

    useEffect(()=>{
        Instance.get(`/movie/${id}?`).then((res)=>{
            setProducts(res.data);     
        }).catch((err)=>{
            console.log(err);
        })
    },[id])
    
    return (
            <>
            <div className="card m-3" style={{maxWidth: 700}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={'https://image.tmdb.org/t/p/original' + products.poster_path} className="card-img-top" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{products.title}</h5>
                            <div className='row my-3'>
                               <i className="fa-solid fa-calendar-days col-1 fs-5 text-danger"></i>
                               <p className="card-text col">{products.release_date}</p>
                            </div>
                            <p className="card-text"><h5 className='text-danger'>Overview : </h5><small className="text-body-secondary">{products.overview}</small></p>
                            <div className='row mt-3'>
                               <p className='text-danger col-2'>Count :</p>
                               <div className='col d-flex'>
                               <p className="card-text">{products.vote_count}</p>
                               <i class="fa-sharp fa-solid fa-star mx-2 text-success fs-5"></i>
                               </div>
                            </div>
                            <div className='row'>
                               <p className='text-danger col-2'>Rate :</p>
                               <div className='col d-flex'>
                               <p className="card-text">{products.vote_average}</p>
                               <i class="fa-sharp fa-solid fa-percent mx-2 text-success fs-5"></i>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="row row-cols-1 row-cols-md-3 m-2 g-4">
                    <div key={products.id} className="col">
                        <div className="card">
                            <img src={'https://image.tmdb.org/t/p/original' + products.poster_path} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{products.title}</h5>
                                <p className="card-text">{products.overview}</p>
                            </div>
                        </div>
                    </div>
            </div> */}
        </>
    );
}