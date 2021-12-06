import {useRef,useContext } from 'react'
import AppContext from '../../data/context/context.js';

import { Container, Input, Button } from './estilos.js'



const Buscador = () => {
    const q = useRef(null);
    const {buscarArticulo} = useContext(AppContext);
    const onChange = () =>{
        buscarArticulo(q.current.value);
    }

    return (
        <Container>
            <Input
                type='text'
                name='buscar'
                placeholder='Buscar'
                onChange={onChange}
                ref={q}
            />
        </Container>
    )
}

export default Buscador
