import React, { useEffect, useState } from 'react'
import ModalComponent from '../Modal/ModalComponent';
import SpinnerLoading from '../Loading/SpinnerLoading'

export const RowsComponent = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const getPokemons = async (url) => {
            let res = await fetch(url),
                json = await res.json();
            //console.log(json);

            json.results.forEach(async (el) => {
                let res = await fetch(el.url),
                    json = await res.json();

                //console.log(json);
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                };

                setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        };

        getPokemons("https://pokeapi.co/api/v2/pokemon/");
    }, []);

    return (
        <tbody>
            {pokemons.length === 0
                ? <SpinnerLoading />
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
    )
}

export default RowsComponent