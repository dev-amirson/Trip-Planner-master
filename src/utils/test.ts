import { FC, JSXElementConstructor, ReactElement } from 'react'
import { render } from '@testing-library/react'

export const TestApp: FC<any> = ({ children }) => children

export const renderWithRouter = (ui: ReactElement<any, string | JSXElementConstructor<any>>, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    ...render(ui, { wrapper: TestApp }),
  }
}
