import React from "react";
import {Wrapper} from "../styles/homepage.style";
import {Link} from "react-router-dom";

export default function Homepage() {
    return (
        <Wrapper>
            <div className="section">
                <div className="container">
                    <div className="preview">
                        <picture>
                            <source
                                media="(max-width: 767px)"
                                srcSet="/Real_Estate_HomePage.svg"
                            />
                            <img src="/Real_Estate_HomePage.svg" alt="real estate" />
                        </picture>
                        <div className="wrap">
                            <h1 className="hero">Property finder 2.0</h1>
                            <div className="info">
                                Find your investment with the property finder 2.0. No more searching for golden nuggets
                                in various sources and filling out elaborate Excel spreadsheets.
                            </div>
                            <Link className="button" to="/stays-category">
                                Start
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>

    )
}




