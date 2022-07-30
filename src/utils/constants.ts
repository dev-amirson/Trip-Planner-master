export const tripInitialValues = {
  startLocation: '',
  endLocation: '',
  dateTime: '',
}

export const tripFields = [
  {
    type: 'text',
    name: 'startLocation',
    placeholder: 'Enter start location',
  },
  {
    type: 'text',
    name: 'endLocation',
    placeholder: 'Enter destination',
  },
  {
    type: 'datetime-local',
    name: 'dateTime',
    placeholder: 'Enter date/time',
  },
]
