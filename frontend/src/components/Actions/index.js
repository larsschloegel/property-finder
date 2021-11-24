import React, { useState } from "react";
import cn from "classnames";
import styles from "./Actions.module.sass";
import { Link } from "react-router-dom";
import Icon from "../Icon";

const Actions = ({ className }) => {
    return (
        <div className={cn(className, styles.actions)}>
            <div className={styles.list}>
                <Link
                    className={cn("button-circle-stroke button-small", styles.button)}
                    to="/properties"
                >
                    <Icon name="arrow-left" size="20" />
                </Link>
            </div>
        </div>
    );
};

export default Actions;