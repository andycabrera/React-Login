import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as BiIcons from 'react-icons/bi'
import * as GiIcons from 'react-icons/gi'

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <BiIcons.BiLogIn />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <BiIcons.BiShoppingBag />,
        cName: 'nav-text'
    },
    {
        title: 'Clothes',
        path: '/ropa',
        icon: <GiIcons.GiClothes />,
        cName: 'nav-text'
    }
]