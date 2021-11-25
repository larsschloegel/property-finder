import React from "react";
import cn from "classnames";
import styles from "./Details.module.sass";
import useSingleProperty from "../../../../../hooks/useSingleProperty";
import Table from "./Table";
import Control from "../../../../../components/Control";

const Details = ({units}) => {

    const {property} = useSingleProperty()

    return (
        <div className={cn("section", styles.section)}>
            <div className={cn("container", styles.container)}>
                <Control className={styles.control}/>
                <div className={styles.wrapper}>
                    <div className={styles.head}>
                        <div className={styles.box}>
                            <h2 className={cn("h2", styles.title)}>The details of your dream investment</h2>
                        </div>
                    </div>
                    <div className={styles.table}>
                        <Table property={property} units={units}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;