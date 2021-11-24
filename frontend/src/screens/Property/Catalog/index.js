import React from "react";
import cn from "classnames";
import styles from "./Catalog.module.sass";
import Card from "./Card";
import Control from "../../../components/Control";

const Catalog = ({properties}) => {

    return (
        <>
            <div className={cn("section", styles.section)}>
                <div className={cn("container", styles.container)}>
                    <Control
                        className={styles.control}
                    />
                    <div className={styles.wrapper}>
                        <div className={styles.head}>
                            <div className={styles.box}>
                                <h2 className={cn("h2", styles.title)}>Your dream investments</h2>
                            </div>
                        </div>
                        <div className={styles.list}>
                            {
                                properties.map(property => <Card className={styles.card} key={property.id} property={property}/>)
                            }
                        </div>
                        <div className={styles.btns}>
                            <button className={cn("button", styles.button)}>
                                View all
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Catalog;