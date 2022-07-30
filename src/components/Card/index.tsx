import { FC } from 'react'

import './styles.css'

const Card: FC<any> = ({ departure, heading }) => (
  <div className='container d-flex flex-column justify-content-between shadow-sm p-5 mt-1 bg-white rounded form-wrapper'>
    <div className='d-flex flex-column'>
      <h4>{heading}</h4>
      <div className='d-flex flex-column departure'>
        <p><strong>Location</strong>: {departure.name}</p>
        <div className='d-flex flex-row flex-wrap'>
          <strong className='text-nowrap'>Available transports: &nbsp;</strong>
          {Object.keys(departure.products).map(
            (key) => departure.products[key] && <div className='d-flex badge badge-success mt-1'>{key} &nbsp;</div>,
          )}
        </div>
      </div>
    </div>
  </div>
)

export default Card
