import {StyledTableWithoutResults} from "../../styles/TableWithoutResults";


export default function PropertyDetailsTableWithResults({title, rows}) {


    return (
        <StyledTableWithoutResults>
            <thead>
            <tr>
                <th colSpan={3}> {title}</th>
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
        </StyledTableWithoutResults>
    )
}