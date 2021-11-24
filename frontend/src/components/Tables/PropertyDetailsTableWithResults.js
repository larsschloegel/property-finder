import {StyledTableWithResults} from "../../styles/TableWithResults.style";


export default function PropertyDetailsTableWithResults({title, rows, footer}) {


    return (
        <StyledTableWithResults>
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
            <tfoot>
            <tr>
                <th>{footer.title}</th>
                <th>{footer.value}</th>
                <th>{footer.unit}</th>
            </tr>
            </tfoot>
        </StyledTableWithResults>
    )
}