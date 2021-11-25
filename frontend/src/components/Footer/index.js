import {NavLink} from "react-router-dom"
import styles from "./Footer.module.sass"
import cn from "classnames";

const Footer = () => {


    return (
        <div className={styles.footer}>
            <div className={cn("container", styles.container)}>
                <div className={styles.bottom}>
                    <NavLink className={styles.link} to="#">Imprint</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Footer;