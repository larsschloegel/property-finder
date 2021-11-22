import React, {useState} from "react";
import cn from "classnames";
import styles from "./Header.module.sass";
import {Link, NavLink} from "react-router-dom";
import Image from "../Image";
import Modal from "../Modal";
import Icon from "../Icon";

const Header = ({separatorHeader, wide,}) => {
    const [visibleNav, setVisibleNav] = useState(false);
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div
                className={cn(
                    styles.header,
                    {[styles.headerBorder]: separatorHeader},
                    {[styles.wide]: wide}
                )}
            >
                <div className={cn("container", styles.container)}>
                    <Link className={styles.logo} to="/">
                        <Image
                            className={styles.pic}
                            src="/images/ApplicationNameLogo.svg"
                            alt="Property Finder 2.0"
                        />
                        Property finder 2.0
                    </Link>
                    <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>
                    <NavLink
                        className={styles.link}
                        to="/search-inputs"
                        activeClassName={styles.active}
                    >
                        <Icon name="search" size="30"/>
                        Search Inputs
                    </NavLink>
                    <NavLink
                        className={styles.link}
                        to="/properties"
                        activeClassName={styles.active}
                    >
                        <Icon name="home" size="30"/>
                        Properties
                    </NavLink>
                    </div>
                    <button
                        className={cn(styles.burger, {[styles.active]: visibleNav})}
                        onClick={() => setVisibleNav(!visibleNav)}
                    ></button>
                </div>
            </div>
            {/*<Modal visible={visible} onClose={() => setVisible(false)}>
            </Modal>*/}
        </>
    );
};

export default Header;