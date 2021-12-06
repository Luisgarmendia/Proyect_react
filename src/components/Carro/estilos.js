
import styled from 'styled-components'

export const Container= styled.div `
    position: relative
`
export const Button = styled.button`
    background-color: #118002;
    border: none;
    border-radius: 5;
    color: #fff;
    padding: 10px 15px;
    cursor: pointer;
`

export const ListArticulos= styled.div`
border-radius: 5px;
box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
background-color: #fff;
color: #000;
padding: 10px;
position: absolute;
right: 0;
top: 50px;
width: 400px;
`

export const Ul= styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`
export const Li = styled.li`
    align-items: center;
    border-bottom: 1px dashed #ccc;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 5px;
`
export const DeleteButton= styled.button`
    border: none;
    background-color: #fb0207;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    font-size: 0.6em;
    padding: 2px 5px;
`

/**
 * Tarea:
 * 1- Eliminar un producto del carrito (junto con sus cantidades), bajo previa confirmación (confirm)
 * 2- Investigar el hook useEffect
 * 3- Investigar el hook useRef
 * 4- Investigar el hook useContext
 * 5- Aplicar los tres hooks anteriores al proyecto.
 */

/**
 * Django Rest Framework
 * .Net Framework / .Net Core
 */