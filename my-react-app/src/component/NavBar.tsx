import { Link } from "react-router-dom";
import "../App.css";


interface NavBarProps {
    brandName: string;
    imageSrcPath: string;
    
}

function NavBar({ brandName, imageSrcPath }: NavBarProps) {
    
    return (
    <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow">
            <a className="navbar-brand ms-5 mt-1" href="#">
                <img
                    src={imageSrcPath}
                    width="43"
                    height="43"
                    className="me-2 mb-1 ms-5"
                    alt=""
                />
                <span className="fw-bolder fs-4">{brandName}</span>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex ms-4">
                <a className="navbar-brand" href="#" style={{ color: '#98bf27' }}>
                    Call us: 9862107925
                </a>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-3 ">
                    {/* <li className="nav-item active">
                        <a className="nav-link" href="#">
                            Home <span className="sr-only"></span>
                        </a>
                    </li> */}
                    <Link to="/" style={{textDecoration:"none"}}>
                    <li className="nav-item me-4">
                        <a className="nav-link" href="#">
                            Home
                        </a>
                    </li>
                    </Link>
                    {/* <li className="nav-item me-4">
                        <a className="nav-link" href="#">
                            About us
                        </a>
                    </li> */}
                    <li className="nav-item me-4">
                        <a className="nav-link" href="/search">
                            Search Products
                        </a>
                    </li>
                    <Link to="/contact" style={{textDecoration:"none"}}>
                    <li className="nav-item me-">
                        <a className="nav-link" >
                            Contact us
                        </a>
                    </li>
                    </Link>
                </ul>

            </div>
            
        </nav>
        
    </div>
    
    );
}

export default NavBar;
