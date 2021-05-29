import React, {useState} from 'react'
import { ball } from './Transactions.css'


const Header = ({show}) => {

    const activeStyles = {
        background: '#3d1f9a',
        transform: 'scale(1)' 
    }

    let headerStyles = {
        // width:'50%',
        background: '#3d1f9a',
        transform: 'scale(0)',
        pasition: 'absolute',
        textAlign: 'center',
        borderRadius: '.4em',
        color: 'white',
        padding: '0.5em',
        margin: '0.5em',
        marginLeft: '30%',
        marginRight: '30%',
        fontSize: '14px',
        transition: 'all 800ms ease'
    }

    if(show) {
        ball = {
            ...ball,
            ...activeStyles
        }
    }

    return(
        <div className="ball">
            <h1>Rescate de patitas</h1>
        </div>
    )
    
}

export const AppHeader = () => {
    const [active, setActive] = useState(false)

    return (
        <div>
            <Header show = {active}/>
        </div>
    )
}