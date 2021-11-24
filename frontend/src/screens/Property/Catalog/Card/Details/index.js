import React from "react";
import cn from "classnames";
import styles from "./Details.module.sass.css";
import useSingleProperty from "../../../../../hooks/useSingleProperty";
import PropertyDetailsTables from "../../../../../components/tables/PropertyDetailsTables";

const Details = ({units}) => {

    const {property} = useSingleProperty()

    return (
        <div className={cn("section", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrapper}>
                    <h2 className={cn("h2", styles.title)}>Property details of </h2>
                    <div className={styles.table}>
                        <PropertyDetailsTables property={property} units={units}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;