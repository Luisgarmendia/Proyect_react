import {ButtonSt} from './estilos'
import {useContext }from 'react'
import AppContext from '../../data/context/context' 

export const Button = ({children, prod}) => {
    const { agregarAlCarro } = useContext(AppContext)
    return (
        <ButtonSt onClick={() => agregarAlCarro(prod)} >{children}</ButtonSt>
    )
}
