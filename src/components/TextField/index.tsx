import { FC } from 'react'

import TextFieldProps from 'interfaces/textField'

import './styles.css'

const TextField: FC<TextFieldProps> = ({
  placeholder, handleChange, value, name, type,
}) => (
  <div className='field-wrapper w-100 pt-1 pb-1'>
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      className='text-field'
      placeholder={placeholder}
    />
  </div>
)

export default TextField
