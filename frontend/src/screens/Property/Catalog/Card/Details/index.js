import React from "react";
import cn from "classnames";
import styles from "./Details.module.sass";
import useSingleProperty from "../../../../../hooks/useSingleProperty";
import Table from "./Table";

const Details = ({units}) => {

    const {property} = useSingleProperty()

    return (
        <div className={cn("section-mb64", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrapper}>
                    <h2 className={cn("h2", styles.title)}>Property details of "{property.name}"</h2>
                    <div className={styles.table}>
                        <Table property={property} units={units}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;