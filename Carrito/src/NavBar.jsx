// Barra de navegación
import { Carrito } from './CartWidget'


export const NavBar = () => (
    <>
        <img className ="imagenBarra" src="./src/assets/logo.svg" alt="Logo de la empresa" />
        <ul className="barra">
            <li><a href="#"> Inicio</a></li>
            <li><a href="#"> Productos</a></li>
            <li><a href="#"> Conócenos</a></li>
            <li><a href="#"> Contáctanos</a></li>
            <li> <Carrito></Carrito> </li>
            



        </ul>
    
    </>


)