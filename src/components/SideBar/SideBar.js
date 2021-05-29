import { Router, Link, NavLink} from 'react-router-dom';
import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import { SideBarData } from './SideBarData'
import './SideBar.css'
import {IconContext} from 'react-icons'
import AuthApi from '../AuthApi';
import Cookies from 'js-cookie'

export const SideBar = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSideBar = () => setSidebar(!sidebar)
    const Auth = React.useContext(AuthApi)

    const handleLogout = () => {

        console.log("logout")
        Auth.setAuth(false)
        Cookies.remove("user")
    
    }
    return (
        <>
        <IconContext.Provider value={{color: '#ffff'}}>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSideBar}/>
                </Link>
                <div className='menu-bars user'>
                    {Auth.isAuth ? Cookies.get("user") : '' }
                </div>
                {/* <Link to='/login' className='menu-bars login'>
                    {Auth.isAuth ? '' : 'Login'}
                </Link> */}
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSideBar}>
                    <li className='navbar-toggle'>
                        <Link className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SideBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <li className='nav-text'>
                                <Link to='login' onClick={handleLogout}>
                                    <BiIcons.BiLogOut />
                                    <span>Logout</span>
                                </Link>
                            </li>
                </ul>
                
            </nav>  
        </IconContext.Provider>
        </>
    )
}