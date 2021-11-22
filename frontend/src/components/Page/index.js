import React, { useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import {pageStyles} from "./page.style";

const Page = ({
                  separatorHeader,
                  children,
                  fooferHide,
                  wide,
              }) => {
    const { pathname } = useLocation();


    return (
        <pageStyles>
                <div>
                    <Header
                        separatorHeader={separatorHeader}
                        wide={wide}
                    />
                    <div className="inner">{children}</div>
                    {!fooferHide && <Footer />}
                </div>
        </pageStyles>

    );
};

export default withRouter(Page);