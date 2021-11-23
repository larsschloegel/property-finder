import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Card.module.sass";
import Icon from "../../../../components/Icon";

const Card = ({ className, item }) => {
    return (
        <Link className={cn(className, styles.card)} to={item.url}>
            <div className={styles.preview}>
                <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Card" />
            </div>
            <div className={styles.body}>
                <div className={styles.line}>
                    <div className={styles.details}>
                        <div className={styles.subtitle}>{item.title}</div>
                        <div className={styles.location}>{item.location}</div>
                    </div>
                    <div className={styles.price}>
                        <div className={styles.old}>{item.priceOld}</div>
                        <div className={styles.actual}>{item.priceActual}</div>
                    </div>
                </div>
                <div className={styles.line}>
                    <div className={styles.date}>{item.date}</div>
                    <div className={styles.rating}>
                        <Icon name="star" size="12" />
                        {item.rating}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
