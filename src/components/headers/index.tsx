import { Link } from "react-router-dom";

const Headers = () => {

    return (<>
        <nav className="navbar navbar-expand-lg bg-primary bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand" to={'/'}>Shop-now</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/login'}>Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to={'/blogs'}>Blogs</Link>
                        </li>


                        <li className="nav-item">
                            <Link className="nav-link" to={'/sign-up'}>Sign up</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    </>)

}

export default Headers;