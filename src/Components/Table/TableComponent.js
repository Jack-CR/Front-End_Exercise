import React from "react";
import { Table } from "react-bootstrap";
import SpinnerComponent from "../Loading/SpinnerComponent";
import ModalComponent from "../Modal/ModalComponent";

export const TableComponent = ({ pokemons }) => {
  return (
    <Table striped bordered hover className="bg bg-light">
      <thead className="bg bg-warning">
        <tr>
          <th>Pokémon</th>
          <th>Information</th>
        </tr>
      </thead>
      <tbody>
          {/* If the request does not have the pokemon the screen will show the loader , when the request has the pokemon it will show each one */}
        {pokemons.length === 0 ? (
          <SpinnerComponent />
        ) : (
          pokemons.map((el, key) => {
            return (
              <tr key={key}>
                <td>
                  <img src={el.avatar} alt={el.name}></img>
                  {el.name}
                </td>
                <td>
                  <ModalComponent pokemon={el}/>
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </Table>
  );
};

export default TableComponent;
