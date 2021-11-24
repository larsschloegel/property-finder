import React from "react";
import cn from "classnames";
import styles from "./Control.module.sass";
import { Link } from "react-router-dom";
import Icon from "../Icon";

const Control = ({ className, lastUrl }) => {
    return (
        <div className={cn(className, styles.control)}>
            <Link
                className={cn("button-small", styles.button)}
                to={"/properties"}
            >
                <Icon name="arrow-left" size="10" />
                <span>Go back</span>
            </Link>
        </div>
    );
};

export default Control;