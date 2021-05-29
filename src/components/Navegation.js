import { Router, Link, NavLink} from 'react-router-dom';
import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

const navStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    background: '#bd7892',
    padding: '1em'
}

const navActive = {
    opacity: '0.5',
    transition: 'margin-top 0.5s ease-out',
    color: 'black',
    marginTop: '1%'
}

const navOptions = {
    color: 'white',
    textAlign: 'center',
    fontSize: '20px',
    textDecoration: 'none'
}

export const ProductosCategoria = ({match}) => {
    console.log(match)
    
    return (
        <div>
            <h1>
                Categoria { match.params.categoria }
            </h1>
        </div>
    )
}

export const Navegation = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSideBar = () => setSidebar(!sidebar)
    return (
        <nav style={navStyles}>
            <NavLink to='/' exact activeStyle={navActive} style={navOptions}>
                Home
            </NavLink>
            <NavLink to='/login' activeStyle={navActive} style={navOptions}>
                Login
            </NavLink>
            <NavLink to='/Products' activeStyle={navActive} style={navOptions}>
                Products
            </NavLink>
            <NavLink to='/ropa' activeStyle={navActive} style={navOptions}>
                Ropa
            </NavLink>
        </nav>
    )
}