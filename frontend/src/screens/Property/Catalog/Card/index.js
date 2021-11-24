import React from "react";
import cn from "classnames";
import {useHistory} from "react-router-dom";
import styles from "./Card.module.sass";
import Icon from "../../../../components/Icon";

const Card = ({className, property}) => {
    const history = useHistory()
    return (
        <div className={cn(className, styles.card)}>
            <div className={styles.preview}>
                <img src={"/images/content/card-pic-default.png"} alt="Real Estate Default Picture"/>
            </div>
            <div className={styles.body}>
                <div className={styles.line}>
                    <div className={styles.details}>
                        <div className={styles.subtitle}>{property.name}</div>
                        <div className={styles.address}>
                            <Icon className={styles.addressIcon} name="location" size="12"/>
                            {property.plz}, {property.city}
                        </div>
                    </div>
                    <button
                        className={cn("button-circle-card", styles.button)}
                        onClick={() => history.push(`properties/${property.id}`)}
                    >
                        <Icon className={styles.icon} name="search" size="18"/>
                    </button>
                </div>
                <div className={styles.foot}>
                    <div className={styles.flex}>
                        <div className={styles.kpi}>
                            <div>Return on Investment</div>
                            <div className={styles.value}>{new Intl.NumberFormat('de-DE', {
                                style: 'unit',
                                unit: 'percent',
                                signDisplay: 'always',
                                maximumFractionDigits: 2
                            }).format(property.adjustedNetReturnInPercent)}</div>
                        </div>
                        <div className={styles.kpi}>
                            <div>Cashflow</div>
                            <div className={styles.value}>{new Intl.NumberFormat('de-DE', {
                                style: 'currency',
                                currency: 'EUR',
                                maximumFractionDigits: 2
                            }).format(property.cfbtInEuroPerMonth)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
