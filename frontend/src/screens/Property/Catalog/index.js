import React from "react";
import cn from "classnames";
import styles from "./Catalog.module.sass";
import Card from "./Card";

const Catalog = ({properties}) => {

    return (
        <div className={cn("section", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrapper}>
                    <h2 className={cn("h2", styles.title)}>Your dream investments</h2>
                    <div className={styles.list}>
                        {
                            properties.map(property => <Card className={styles.card} key={property.id} property={property}/>)
                        }
                    </div>
                    <div className={styles.btns}>
                        <button className={cn("button-stroke button-small", styles.button)}>
                            View all
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;