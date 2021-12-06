import { useState, useEffect } from 'react'
import AppContext from './context'
import { Productos } from '../Api'



const State = ({children}) => {
    const [articulos, setArticulo] = useState([])
    const [ carrito, setCarrito ] = useState([])
    useEffect(()=> {
        setArticulo(Productos)
    }, [])
    const agregarAlCarro = (producto) => {
        if (carrito.find(x => x.id === producto.id)) {
          const carritoCopia = carrito.map(x => x.id === producto.id ? ({...x, cantidad: x.cantidad + 1}) : x)
          setCarrito(carritoCopia)
          return
        }
    
        setCarrito([...carrito, {...producto, cantidad: 1}])
      }
    /* ---------------------- eliminar producto del carrito --------------------- */
    const eliminardelCarrito = producto => {
        const nuevaLista = carrito.filter(item => item.id !== producto.id)
        setCarrito(nuevaLista)
    }

    /* ----------------------------- buscar artuculo ---------------------------- */
    const buscarArticulo = (q) => {
        if (q === '' || q === undefined) {
            setArticulo(Productos)
        }
        const nuevaLista =  Productos.filter(x => x.nombre.toLowerCase().includes(q.toLowerCase()))
        setArticulo(nuevaLista)        
    }

    return (
        <AppContext.Provider
            value={{
                articulos,
                carrito,
                agregarAlCarro,
                eliminardelCarrito,
                buscarArticulo
            }}>
            {children}
        </AppContext.Provider>
    )
}

export default State