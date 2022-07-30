import { Card, Form, LoadingModal } from 'components'
import { isEmpty } from 'lodash'
import { useState } from 'react'

import { fetchJourney, fetchLocation } from 'api/trip'
import { tripFields, tripInitialValues } from 'utils/constants'
import validateTrip from 'utils/validations'

import './styles.css'

const Home = () => {
  const [loading, setloading] = useState(false)
  const [tripDetails, setTripDetails] = useState<any>({})
  const [notFound, setNotFound] = useState(true)

  const handleAddContact = async (values: any) => {
    setloading(true)

    const { data }: any = await fetchLocation(values.startLocation)
    const startLocationData = data[0].location

    const { data: endLocation }: any = await fetchLocation(values.endLocation)
    const endLocationData = endLocation[0].location

    const timestamp = new Date(values.dateTime).getTime() / 1000
    const { data: journey }: any = await fetchJourney(
      startLocationData.id,
      endLocationData.id,
      timestamp,
    )

    if (isEmpty(journey[0])) {
      setNotFound(false)
    } else {
      setNotFound(true)
    }

    setTripDetails(journey[0])
    setloading(false)
  }

  return (
    <div className='d-flex flex-column justify-content-center mb-5'>
      <LoadingModal show={loading} />
      <div className='d-flex flex-row align-items-center justify-content-center mt-5'>
        <i className='fa fa-address-book' aria-hidden='true' />
        <h1 className='mt-2'>Trip Planner</h1>
      </div>
      <div className='container d-flex flex-column justify-content-between shadow-sm p-5 mt-4 bg-white rounded form-wrapper'>
        <Form
          action='Submit'
          fieldsInitialValues={tripInitialValues}
          fields={tripFields}
          handleSubmition={handleAddContact}
          validate={validateTrip}
        />
      </div>
      {!isEmpty(tripDetails)
        && (
          <>
            <div className='container d-flex flex-column mt-4 text-center form-wrapper'>
              <h2>Journey Details</h2>
            </div>
            {!isEmpty(tripDetails.stop) && <Card departure={tripDetails.stop} heading='Departure Details' />}
            {!isEmpty(tripDetails.line)
            && (
              <div className='container d-flex flex-column justify-content-between shadow-sm p-5 mt-1 bg-white rounded form-wrapper'>
                <div className='d-flex flex-column'>
                  <h4>Stop details</h4>
                  <div className='d-flex flex-column departure'>
                    <p><strong>Name</strong>: {tripDetails.line.name}</p>
                    <p><strong>Type</strong>: {tripDetails.line.mode}</p>
                    <p><strong>Operator name</strong>: {tripDetails.line.operator.name}</p>
                  </div>
                </div>
              </div>
            )}
            {!isEmpty(tripDetails.destination) && <Card departure={tripDetails.destination} heading='Destination Details' />}
          </>
        )}

      {!notFound
      && (
        <div className='container d-flex flex-column text-secondary mt-5 text-center form-wrapper'>
          <p className='not-found-p'>Journey Details Not Found</p>
        </div>
      )}
    </div>
  )
}

export default Home
