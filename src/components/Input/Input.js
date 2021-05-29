import './Input.css'

export const Input = (props) => {

    return (
        <input
            className="input"
            placeholder= {props.placeholder || 'Ingrese el texto'}
            type= {props.type || 'text'}
            require>
        </input>
    )
}