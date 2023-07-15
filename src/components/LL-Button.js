function Button(props) {
    return (
        <button aria-label='On Click' type={props.type} className={`ll-button btn  fw-bold rounded-4 ${props.className ? props.className : '' }`}onClick={props.onClick} disabled={props.disabled}>{props.children} </button>
    )
}

export default Button