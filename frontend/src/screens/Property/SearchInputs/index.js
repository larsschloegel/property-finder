import React, {useState} from "react";
import cn from "classnames";
import styles from "./SearchInputs.module.sass";
import Control from "../../../components/Control";
import Icon from "../../../components/Icon";
import TextInput from "../../../components/TextInput";
import {Link, useHistory} from "react-router-dom";


const SearchInputs = () => {

    const history = useHistory()

    return (
        <>
            <div className={cn("section", styles.section)}>
                <div className={cn("container", styles.container)}>
                    <Control
                        className={styles.control}
                    />
                    <div className={styles.inner}>
                        <div className={styles.wrapper}>
                            <div className={styles.head}>
                                <div className={cn("h2", styles.title)}>In few steps to your dream investment</div>
                            </div>
                            <form className={styles.form} action="">
                                <div className={styles.list}>
                                    <div className={styles.item}>
                                        <div className={styles.category}>Cashflow Calculation Inputs</div>
                                        <div className={styles.fieldset}>
                                            <TextInput
                                                className={styles.field}
                                                label="Title"
                                                name="title"
                                                type="text"
                                                placeholder='e. g. "1"'
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.foot}>
                                    <div className={styles.btns}>
                                        <button
                                            className={cn("button", styles.button)}
                                            onClick={() => history.push("/properties")}
                                        >
                                            Search now
                                            <Icon name="arrow-next" size="10"/>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchInputs;
