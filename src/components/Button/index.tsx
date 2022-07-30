import { FC } from 'react'

import ButtonProps from 'interfaces/button'

import './styles.css'

const Button: FC<ButtonProps> = ({ submit, name, disabled = false }: ButtonProps) => (
  <button disabled={disabled} onClick={submit} type='submit' className='btn btn-primary button'>
    {name}
  </button>
)

export default Button
