import React from 'react'
import { Table } from 'react-bootstrap'
import RowsComponent from '../Rows/RowsComponent'

export const TableComponent = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Pokemon</th>
                    <th>Information</th>
                </tr>
            </thead>
                <RowsComponent/>
        </Table>
    )
}

export default TableComponent