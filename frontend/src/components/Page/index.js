import React, { useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import Header from "../Header";

import Footer from "../Footer";


const Page = ({
                  separatorHeader,
                  children,
                  fooferHide,
                  wide,
              }) => {
    const { pathname } = useLocation();


    return (
        <>

                <div className="page">
                    <Header
                        separatorHeader={separatorHeader}
                        wide={wide}
                    />
                    <div className="inner">{children}</div>
                    {!fooferHide && <Footer />}
                </div>

        </>

    );
};

export default withRouter(Page);