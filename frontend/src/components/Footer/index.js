import {NavLink} from "react-router-dom"
const Footer = () => {


    return (
        <div className="footer">
            <div className="container">
                            <div className="bottom">
                                <NavLink to="#">Imprint</NavLink>
                                <NavLink to="#">Privacy</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Footer;