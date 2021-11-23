import React, { useState } from "react";
import cn from "classnames";
import styles from "./Catalog.module.sass";
import Icon from "../../../components/Icon";
import Card from "./Card";

const Catalog = () => {
    const [sorting, setSorting] = useState(sortingOptions[0]);

    return (
        <div className={cn("section", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrapper}>
                    <h2 className={cn("h2", styles.title)}>Your dream investments</h2>
                    <div className={styles.list}>
                        {catalogList
                            .find((x) => x.title === sorting)
                            .items.map((x, index) => (
                                <Card className={styles.card} item={x} key={index} />
                            ))}
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