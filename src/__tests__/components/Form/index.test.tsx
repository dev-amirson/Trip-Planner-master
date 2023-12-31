import { render, screen, act, waitFor } from '@testing-library/react'

import Form from 'components/Form'
import { TestApp } from 'utils/test'
import { tripInitialValues, tripFields } from 'utils/constants'

describe('Form', () => {
  beforeEach(() =>
    act(() =>
      render(
        <Form
          fieldsInitialValues={tripInitialValues}
          fields={tripFields}
          handleSubmition={() => null}
          validate={() => ({})}
        />,
        { wrapper: TestApp }
      )
    )
  )

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have button', async () => {
    await waitFor(() => {
      const listItems = screen.getAllByRole('button')
      expect(listItems).toHaveLength(1)
    })
  })
})
