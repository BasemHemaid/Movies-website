import { NavLink } from "react-router-dom";

export default function NavBar()
{
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <img src="images/watchPhoto.png" alt="cinema" width="100" height="30" class="mx-2 d-inline-block align-text-top" />
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <NavLink to='/' className='text-decoration-none' style={({isActive })=>isActive?{color:'red'}:undefined}>Movies</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to='/ss' className='ms-3 text-decoration-none' style={({isActive })=>isActive?{color:'red'}:undefined}>Favourite</NavLink>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
</>
    );
}