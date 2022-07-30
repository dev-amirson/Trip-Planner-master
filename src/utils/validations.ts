import { TripValues } from 'interfaces/form'

const validateTrip = (values: TripValues) => {
  const errors: any = {}

  if (!values.startLocation) errors.startLocation = 'Required'
  if (!values.endLocation) errors.endLocation = 'Required'
  if (!values.dateTime) errors.dateTime = 'Required'

  return errors
}

export default validateTrip
