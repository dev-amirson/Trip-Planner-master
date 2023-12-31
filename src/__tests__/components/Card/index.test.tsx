import {
  render, screen, act, waitFor,
} from '@testing-library/react'

import Card from 'components/Card'
import { TestApp } from 'utils/test'

describe('Card', () => {
  beforeEach(() => act(() => render(<Card departure={{ name: 'lorem', products: { tram: false }}} />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have heading', async () => {
    await waitFor(() => {
      expect(screen.getAllByRole('heading').length).toBe(1)
    })
  })
})