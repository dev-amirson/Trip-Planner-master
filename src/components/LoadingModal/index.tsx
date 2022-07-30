import { FC } from 'react'

import './styles.css'

const LoadingModal: FC<any> = ({ show }) => (
  show && (
    <div className='backdrop'>
      <div className='loading-spinner-wrapper'>
        <div className='loading-spinner'>
          <div />
        </div>
      </div>
    </div>
  )
)

export default LoadingModal
