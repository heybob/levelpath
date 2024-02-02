import './Header.css'
import { useContext } from 'react'
import { WikiContext } from '../../contexts/WikiContext'

export function Header() {
    const {state} = useContext(WikiContext);
    const {today, pageTitle} = state;

    return (
    <div className='header'>
        <h1>{pageTitle} </h1>
        <h2>{today.getMonth() + 1}/{today.getDate()}/{today.getFullYear()}</h2>
    </div>
    )
}