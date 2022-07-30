import { FormikValues } from "formik"

export interface TripValues {
  startLocation: string
  endLocation: string
  dateTime: string
}

export interface FormProps {
  fieldsInitialValues: TripValues
  handleSubmition: (values: object) => void
  validate: (values: object) => object
  fields: {
    name: string
    type: string
    placeholder: string
  }[]
}

export interface FormValues {
  values: FormikValues
  errors: any
  touched: any
  handleChange: (values: object) => void
  handleSubmit: () => void
}
