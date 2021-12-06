import { Carro } from '../Carro'
import {Nav} from './estilos'
import AppContext from '../../data/context/context'
import Buscador  from '../Buscador/index.js'
import { useContext } from 'react'

export const Navbar = () => {
    const { carrito, eliminardelCarrito } = useContext(AppContext)
    let cantidad = carrito.reduce((acum, actual) => acum + actual.cantidad, 0)
    return (
        <Nav >
            <p>Luis Fernandez </p>
            <Buscador/>  
            <Carro cantidad={cantidad} articulos={carrito} eliminardelcarrito={eliminardelCarrito}/>
        </Nav>
    )
}