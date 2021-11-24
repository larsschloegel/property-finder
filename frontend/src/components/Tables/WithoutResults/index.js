import React from "react";
import styles from "./WithoutResults.module.sass";

const TableWithoutResults = ({title, rows}) => {

    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th colSpan={3}>{title}</th>
            </tr>
            </thead>
            <tbody>
            {
                rows.map(row => <tr>
                    <td> {row.title}</td>
                    <td> {row.value}</td>
                    <td> {row.unit}</td>
                </tr>)
            }
            </tbody>
        </table>
    );
};

export default TableWithoutResults;