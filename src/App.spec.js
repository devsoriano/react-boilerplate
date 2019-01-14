import React from 'react'
import { render } from 'react-testing-library'
import App from './App'

describe('App', () => {
  it('Render Without error', () => {
    render(<App />)
  })
})
