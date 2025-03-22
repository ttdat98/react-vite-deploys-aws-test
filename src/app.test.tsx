import { render, screen } from '@testing-library/react'
import App from './App'
import {describe, it, expect } from 'vitest'

describe('App Component', () => {
  it('should render correctly', () => {
    render(<App />)
    expect(screen.getByText('Vite + React')).toBeDefined()
  })
})