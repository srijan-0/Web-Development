import "../App.css";
import { Link } from "react-router-dom";
import facebook from ".././assets/facebook.png"
import instagram from ".././assets/insta.png"
import twitter from ".././assets/twitter.png"
import youtube from ".././assets/youtube.png"

interface footerProps {
    brandName: string;
    imageSrcPath: string;

    
    
}
function Footer({ imageSrcPath }: footerProps) {
  return (
    <div className="footer ">
        <div className="d-flex justify-content-center mt-5">
        <div className="footer-brand mt-4 me-4 d-flex justify-content-center" >
                <img
                    src={imageSrcPath}
                    width="43"
                    height="43"
                    className="me-2 mb-1 ms-5"
                    alt=""
                />
                <p className="brand">Shrestha Nepali Kagaj</p>
            </div>

        </div>
        <div className="footer2 d-flex justify-content-center mt-3">
        <Link to="/search" style={{textDecoration:"none"}}>
            <h1 className="header3 me-5">Products</h1>
            </Link>
            
            
            {/* <h1 className="me-5">Disclaimer</h1> */}
            <Link to="/feedback" style={{textDecoration:"none"}}>
                <h1 className="feed me-5">Give Feedback</h1>
                </Link>
                <Link to="/contact" style={{textDecoration:"none"}}>
                    <h1 className="me-5">Contact us</h1>
                </Link>
                <Link to="/adminlogin" style={{textDecoration:"none"}}>
                    <h1 className="me-5">Admin Login</h1>
                </Link>
        </div>
        <div className="d-flex justify-content-center mt-3 ms-4">
            <div>
                <img
                    src={facebook}
                    width="43"
                    height="43"
                    className=" mb-1 ms-1"
                    alt=""
                />
            </div>
            <div>
                <img
                    src={instagram}
                    width="43"
                    height="43"
                    className="me-2 mb-1 ms-1"
                    alt=""
                />
            </div>
            <div>
                <img
                    src={twitter}
                    width="43"
                    height="43"
                    className="me-2 mb-1 ms-1"
                    alt=""
                />
            </div>
            <div>
                <img
                    src={youtube}
                    width="43"
                    height="43"
                    className="me-2 mb-1 ms-1"
                    alt=""
                />
            </div>

        </div>
        <div className="parac d-flex justify-content-center ms-4 mt-3 ">
            <p className="mb-4">Copyright © 2022 Shrestha Nepali Kagaj</p>
        </div>

      
    </div>
  )
}

export default Footer
