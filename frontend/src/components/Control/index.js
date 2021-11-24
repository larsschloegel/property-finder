import React from "react";
import cn from "classnames";
import styles from "./Control.module.sass";
import Icon from "../Icon";
import {useHistory} from "react-router-dom";

const Control = ({ className, lastUrl }) => {

 const history = useHistory();

    return (
        <div className={cn(className, styles.control)}>
            <button
                className={cn("button-small", styles.button)}
                onClick={() => history.goBack()}
            >
                <Icon name="arrow-left" size="10" />
                <span>Go back</span>
            </button>
        </div>
    );
};

export default Control;