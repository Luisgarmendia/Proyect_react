import {Span} from './estilos'

export const Burbuja = ({ cantidad }) => {
    // let { numero } = props
    // let numero = props.numero
    return (
        <Span>
            {cantidad > 9 ? '9+' : cantidad}
        </Span>
    )   
} 