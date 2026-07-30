import './Button.css'

function Button({ children, variant = 'primary', onClick, type = 'button', ...rest }) {
  return (
    <button
      type={type}
      className={`btn btn--${variant}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button