import s from './button.module.css';


const Button = ({ color, text, onClick }) => {
    return (
        <button 
            onClick={onClick}
            style={{ backgroundColor: color}} 
            className={s.btn}>{text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button
