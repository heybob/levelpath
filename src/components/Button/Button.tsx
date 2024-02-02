import './Button.css'
import { ButtonProps } from '../../shared/types'

export function Button({key, name, clickHandler, disabled = false}: ButtonProps) {
    return (
        <button key={key} onClick={clickHandler} disabled={disabled}>{name}</button>
    )
}