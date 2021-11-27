import React from 'react'
import { Table } from 'react-bootstrap'
import SpinnerComponent from '../Loading/SpinnerComponent'
import ModalComponent from '../Modal/ModalComponent'

export const TableComponent = ({ pokemons }) => {
    return (
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>Pokemon</th>
                    <th>Information</th>
                </tr>
            </thead>
            <tbody>
                {pokemons.length === 0
                    ? <SpinnerComponent />
                    : pokemons.map((el, key) => {
                        return (
                            <tr key={key}>
                                <td>
                                    <img src={el.avatar} alt={el.name}></img>
                                    {el.name}

                                </td>
                                <td>
                                    <ModalComponent pokemon={el} />
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default TableComponent