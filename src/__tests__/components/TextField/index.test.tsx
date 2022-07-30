import { render, screen, act } from '@testing-library/react'

import TextField from 'components/TextField'
import { TestApp } from 'utils/test'

describe('TextField', () => {
  beforeEach(() =>
    act(() =>
      render(
        <TextField
          placeholder='loremipsum'
          handleChange={() => null}
          value='lorem'
          name='lorem'
          type='text'
        />,
        { wrapper: TestApp }
      )
    )
  )

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })
})
