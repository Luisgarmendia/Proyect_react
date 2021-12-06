import { useState } from 'react'
import { Burbuja } from '../Burbuja'
import { Container, Button, ListArticulos, Ul, Li, DeleteButton } from './estilos'

export const Carro = ({ cantidad,  articulos ,eliminardelcarrito}) => {

    const [mostrarCarro, setMostrarCarro] = useState(false)

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    let subTotal = articulos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto

    const eliminar = articulo => {
        if(window.confirm('¿Desea eliminar el producto del carrito?')){
            eliminardelcarrito(articulo)
        }    
    }

    return (
        <Container>
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <Button onClick={handleMostrarCarro} >
                Carro
            </Button>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <ListArticulos>
                        <Ul >
                            {
                                articulos.map(articulo => {
                                    return (
                                        <Li key={articulo.id} >
                                            <img height={25} alt={articulo.nombre} src={articulo.imagen} />
                                            <span>
                                                <DeleteButton 
                                                onClick={()=>eliminar(articulo)}>
                                                    X
                                                </DeleteButton> 
                                                {articulo.nombre}
                                            </span>
                                            <span>
                                                ({articulo.cantidad} x {articulo.precio.toLocaleString()}) = <strong>{(articulo.cantidad * articulo.precio).toLocaleString()}</strong>
                                            </span>
                                        </Li>
                                    )
                                })
                            }
                            <Li>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </Li>
                            <Li>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </Li>
                            <Li>
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </Li>
                        </Ul>
                    </ListArticulos>
            }
        </Container>

    )
}