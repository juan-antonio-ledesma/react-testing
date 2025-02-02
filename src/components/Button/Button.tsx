import classes from './Button.module.scss'

interface ButtonProps {
  label: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({ label, onClick, type = 'button' }: ButtonProps) => (
  <button className={classes.Button} onClick={onClick} type={type}>
    {label}
  </button>
)
