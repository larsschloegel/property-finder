import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Main.module.sass";


const Main = () => {
    return (
        <div className={cn("section", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.preview}>
                    <picture>
                        <source
                            media="(max-width: 767px)"
                            srcSet="/images/content/main-pic-mobile-1.jpg"
                        />
                        <img src="/images/content/main-pic-2.jpg" alt="Main" />
                    </picture>
                    <div className={styles.wrap}>
                        <h1 className={cn("hero", styles.title)}>Property Finder 2.0</h1>
                        <div className={cn("info", styles.info)}>
                            Find your investment with the property finder 2.0. No more searching for golden nuggets
                            in various sources and filling out elaborate Excel spreadsheets.
                        </div>
                        <Link className={cn("button", styles.button)} to="/search-inputs">
                            Start your search
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
