import React, { useState } from "react";
import cn from "classnames";
import styles from "./Dropdown.module.sass";
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink } from "react-router-dom";
import Icon from "../../Icon";

const Dropdown = ({ className, items, setValue }) => {
    const [visible, setVisible] = useState(false);

    const handleClick = (x) => {
        setVisible(false);
        setValue(false);
    };

    return (
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
            <div
                className={cn(className, styles.dropdown, { [styles.active]: visible })}
            >
                <button className={styles.head} onClick={() => setVisible(!visible)}>
                    <div className={styles.text}>Steps</div>
                    <Icon name="arrow-down" size="24" />
                </button>
                <div className={styles.body}>
                    {items.map((x, index) => (
                        <NavLink
                            className={styles.item}
                            activeClassName={styles.active}
                            key={index}
                            to={x.url}
                            onClick={() => handleClick(x)}
                            exact
                        >
                            <Icon name={x.icon} size="24" />
                            <div className={styles.text}>{x.title}</div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </OutsideClickHandler>
    );
};

export default Dropdown;